module Utils {
	//** 循环控制器 */
	export class UpdateControler {
		private static _instance: UpdateControler = null;
		public static getInstance(): UpdateControler {
			if (UpdateControler._instance == null) {
				UpdateControler._instance = new UpdateControler();
			}
			return UpdateControler._instance;
		}
		public constructor() {
			egret.startTick(this.onUpdate, this);
		}
		public isPaused: boolean = false;
		private _lasttimestamp: number = -1;
		public onUpdate(timestamp: number): boolean {
			let dt = (timestamp - this._lasttimestamp) / 1000;
			this._lasttimestamp = timestamp;
			if (!this.isPaused) {
				for (let i = this._entites.length - 1; i >= 0; i--) {
					this._updateEntity(this._entites[i], dt);
				}
			}
			return true;
		}
		private _updateEntity(entity, dt) {
			if (entity["onUpdate"] != null) {
				entity["onUpdate"](dt);
			}
			if (entity instanceof egret.DisplayObjectContainer) {
				for (let i = entity.numChildren - 1; i >= 0; i--) {
					this._updateEntity(entity.getChildAt(i), dt);
				}
			}
		}
		private _entites: any[] = [];
		//** 注册循环实体 */
		public registeEntity(entity): boolean {
			if (this._entites.indexOf(entity) < 0) {
				this._entites.push(entity);
				return true;
			}
			return false;
		}
		//** 注销循环实体 */
		public unregisteEntity(entity): boolean {
			let index = this._entites.indexOf(entity);
			if (index < 0) {

				return false;
			}
			this._entites.splice(index, 1);
			return true;
		}
	}
	//旋转点，返回旋转角度后的点,ox和oy是偏移
	function rotationPoint(pt: egret.Point, rotation: number, ox: number = 0, oy: number = 0): egret.Point {
		let r = egret.Point.distance(new egret.Point(0, 0), pt);
		let angleHude = (-rotation) * Math.PI / 180;
		let px = Math.cos(angleHude) * pt.x + pt.y * Math.sin(angleHude) + ox;
		let py = Math.sin(angleHude) * -pt.x + pt.y * Math.cos(angleHude) + oy;
		return new egret.Point(px, py);	
	}
	export function rotationPoint2(ptx, pty, rotation, ox, oy): egret.Point {
		let pt = new egret.Point(ptx - ox, pty - oy);
		let r = egret.Point.distance(new egret.Point(0, 0), pt);
		let angleHude = (-rotation) * Math.PI / 180;
		let px = Math.cos(angleHude) * pt.x + pt.y * Math.sin(angleHude) + ox;
		let py = Math.sin(angleHude) * -pt.x + pt.y * Math.cos(angleHude) + oy;
		return new egret.Point(px, py);
	}
}
