class Star extends eui.Component {
	public img_star: eui.Image;
	public rect_ring: eui.Rect;

	public constructor() {
		super();
		this.skinName = "resource/skins/StarSkin.exml";
	}

	private _radius: number;
	public get radius(): number {
		return this._radius;
	}
	public set radius(v: number) {
		this._radius = v;
		this.width = this.height = v * 2;
		this.rect_ring.ellipseWidth = this.rect_ring.ellipseHeight = this.width * 2;
		this.anchorOffsetX = this.anchorOffsetY = v;
	}
	public randomStar() {
		this.img_star.source = "start_" + (this.idx = Math.floor(Math.random() * 9)) + "_png";
		this.radius = Math.random() * 100 + 50;
		let r = Math.random() * 60 + 10;
		this.img_star.width = this.img_star.height = this.radius;
	}
	public setFrist(){
		this.img_star.width = this.img_star.height = 176;
		
	}
	public idx = 5;
	public changeImg(){
		this.img_star.source = "star_" + this.idx + "_png";
	}
}