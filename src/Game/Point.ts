class ScorePoint extends eui.Image {
	public constructor(star: Star) {
		super("point_png");
		this.anchorOffsetX = this.anchorOffsetY = 22 / 2;
		if (star) {
			let x = star.x + star.radius;
			x = x + (Math.random() < 0.5 ? 14 : -14);
			let pt = Utils.rotationPoint2(x, star.y,
				Math.random() * 360,
				star.x, star.y
			);
			this.x = pt.x;
			this.y = pt.y;
		}
	}
	private isDestroy: boolean = false;
	public checkCollsion(x, y): boolean {
		if (this.isDestroy) return false;
		let d = egret.Point.distance(new egret.Point(x, y), new egret.Point(this.x, this.y));
		if (d < 10) {
			this.isDestroy = true;
			egret.Tween.get(this).to({ scaleX: 2, scaleY: 2, alpha: 0 }, 500)
				.call(this.removeSelf, this);
			return true;
		} else {
			return false;
		}
	}
	public removeSelf() {
		egret.Tween.removeTweens(this);
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}
}