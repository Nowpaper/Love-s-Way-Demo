class Game extends eui.Component {
	public gp_bg: eui.Group;
	public gp_actors: eui.Group;
	public btn_start: eui.Button;
	public lb_score: eui.Label;
	public gp_over: eui.Group;
	public gp_over_button: eui.Group;
	public lb_best: eui.BitmapLabel;
	public btn_replay: eui.Button;


	public constructor() {
		super();
		this.skinName = "resource/skins/GameSkin.exml";
		this.resetGame();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_screen, this);
		// this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_btn_start, this);
		this.btn_replay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_btn_replay, this);
		Sound.getInstance();
		this.onclick_btn_start(null);
	}
	private resetGame() {

		this.gp_over.visible = false;
		gameState = GameState.Start;
		this.btn_start.visible = true;
		this.gp_actors.removeChildren();
		this.gp_bg.y = -960;
		this.createStar(true);
		this.createStar();
		this.createStar();
		this.createStar();
		this.createStar();
		this.Score = 0;
		this._ship_rotation = 0;
		this._comboNumber = 0;
	}
	private movespeed = 20;
	private rotationspeed = -100;
	private addspeed = 0;
	public onUpdate(dt) {
		if (gameState != GameState.Playing) {
			return;
		}
		this.createStar();
		this.updateShipRotation(dt * this.rotationspeed * (1 / (this._star.radius / 150)));
		this.gp_actors.setChildIndex(this._heart, 999);
		if (this._heart.y < 960 / 2) {
			this.addspeed += dt * 100;
		} else {
			this.addspeed /= 2;
			this.addspeed -= 1;
			if (this.addspeed < 0) {
				this.addspeed = 0;
			}
		}
		let spd = this.movespeed + this.addspeed;
		// this.gp_bg.y += dt * spd / 2;
		if (this.gp_bg.y >= 0) {
			this.gp_bg.y = -960;
		}
		for (let i = this.gp_actors.numChildren - 1; i >= 0; i--) {
			let item = this.gp_actors.getChildAt(i);
			item.y += spd * dt;
			if (item.y >= item.height + 960) {
				this.gp_actors.removeChild(item);
				continue;
			}
			if (item instanceof ScorePoint) {
				if (item.checkCollsion(this._heart.x, this._heart.y)) {
					Sound.getInstance().PlayClick();
					//加分
					this.Score += 400;
					this.addChild(new ScoreEffect("+" + 400, this._heart.x, this._heart.y));
				}
			}
		}
		if (this.outside) {
			if (this.checkCollsion(5)) {
				this.showOver();
			}
		}
		if (this._heart.y > 960) {
			this.showOver();
		}
	}
	private showOver() {
		gameState = GameState.Paused;
		this.gp_over.visible = true;
		this.gp_over_button.visible = false;
		egret.Tween.get(this.gp_over_button).wait(1000).set({ visible: true });
		Sound.getInstance().PlayOver();
		if (this._heart.scaleY > 0) {
			egret.Tween.get(this._heart).to({ scaleX: 5, scaleY: 5, alpha: 0 }, 500)
		} else {
			egret.Tween.get(this._heart).to({ scaleX: 5, scaleY: -5, alpha: 0 }, 500)
		}

	}
	private _ship_rotation = 0;
	private _comboNumber = 0;
	private _heart: eui.Image = null;
	private _star: Star;
	private createStar(frist = false) {
		if (frist) {
			this._heart = new eui.Image("heart_png");
			this.gp_actors.addChild(this._heart);
			this._heart.anchorOffsetX = 47 / 2;
			// this._ship.scaleX = this._ship.scaleY = 0.5;
			let star = new Star();
			star.x = 320;
			star.y = 650;
			star.radius = 150;
			star.setFrist();
			this.gp_actors.addChild(star);
			this._heart.x = star.x + star.radius - 30;
			this._heart.y = star.y;
			this._star = star;
			this.gp_actors.setChildIndex(this._heart, 999);
		} else {
			let last = this.gp_actors.getChildAt(this.gp_actors.numChildren - 2);
			if (last instanceof Star) {
				if (last.y - last.radius >= -50) {
					let star = new Star();
					star.randomStar();
					let pt: egret.Point;
					do {
						pt = Utils.rotationPoint2(
							last.x + star.radius + last.radius,
							last.y,
							Math.random() * 90 + (270 - 45),
							last.x, last.y
						);
					} while (pt.x + star.radius > 600
						|| pt.x - star.radius < 40);

					star.x = pt.x;
					star.y = pt.y;
					this.gp_actors.addChild(star);
					// this.gp_actors.addChildAt(new ScorePoint(star), 1);
				}
			}

		}
	}
	private onclick_btn_start(e: egret.TouchEvent) {
		if (e) {
			e.stopImmediatePropagation();
		}
		this.btn_start.visible = false;
		gameState = GameState.Playing;
	}
	public updateShipRotation(rotation) {
		let pt = Utils.rotationPoint2(this._heart.x,
			this._heart.y, rotation, this._star.x, this._star.y);
		this._heart.x = pt.x;
		this._heart.y = pt.y;
		this._heart.rotation += rotation;
		this._heart.scaleY = rotation < 0 ? 1 : -1;
		this._ship_rotation += Math.abs(rotation);
	}
	public onclick_screen() {
		if (gameState == GameState.Playing) {
			this.changeShipPathway();
			if (this.outside) {
				if (this.checkCollsion(20)) {
					let index = this.gp_actors.getChildIndex(this._star);
					let star = this.gp_actors.getChildAt(index + 1) as Star;
					this._star = star;
					this.rotationspeed = -this.rotationspeed;
					this._heart.rotation = this._heart.rotation - 180;
					this.changeShipPathway();
					if (this._ship_rotation < 360) {
						this._comboNumber += 1;
						let score = 0;
						if (this._comboNumber >= 64) {
							score = 400;
						} else if (this._comboNumber >= 16) {
							score = 300;
						} else if (this._comboNumber >= 4) {
							score = 200;
						} else {
							score = 100;
						}
						this.Score += score;
						this.addChild(new ScoreEffect("+" + score, this._heart.x, this._heart.y));
						this.gp_actors.addChildAt(new Combo(this._comboNumber, this._heart.x, this._heart.y), 2);
						Sound.getInstance().PlayCombine();
					} else {
						this._comboNumber = 0;
					}
					this._ship_rotation = 0;
				}
			}
		}
	}
	private outside: boolean = false;
	public changeShipPathway() {
		this.outside = !this.outside;
		let offset = this.outside ? 30 : -30;
		let pt = Utils.rotationPoint2(this._star.x + this._star.radius + offset, this._star.y,
			this._heart.rotation, this._star.x, this._star.y);
		this._heart.x = pt.x;
		this._heart.y = pt.y;
		//改变
		this._star.changeImg();
	}
	private checkCollsion(add = 0) {
		let index = this.gp_actors.getChildIndex(this._star);
		let star = this.gp_actors.getChildAt(index + 1) as Star;
		let d = egret.Point.distance(new egret.Point(star.x, star.y), new egret.Point(this._heart.x, this._heart.y));
		if (d < star.radius + add) {
			return true;
		}
		index = this.gp_actors.getChildIndex(this._star);
		if (index > 0) {

			star = this.gp_actors.getChildAt(index - 1) as Star;
		}
		if (star) {
			d = egret.Point.distance(new egret.Point(star.x, star.y), new egret.Point(this._heart.x, this._heart.y));
			if (d < star.radius + add) {
				return true;
			}
		} else {
			return false;
		}
	}
	public onclick_btn_replay(e: egret.TouchEvent) {
		e.stopImmediatePropagation();
		this.resetGame();
		this.onclick_btn_start(null);
	}
	private _Score: number = 0;
	public get Score(): number {
		return this._Score;
	}
	public set Score(v: number) {
		this._Score = v;
		this.lb_score.text = v.toString();
		this.lb_best.text = v.toString();
		

	}
}
enum GameState {
	Start, Playing, Paused
}
let gameState = GameState.Start;

