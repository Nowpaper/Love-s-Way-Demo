class Begin extends eui.Component{
	public btn_start:eui.Button;

	public constructor() {
		super();
		this.skinName = "resource/skins/BeingSkin.exml";
		this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_start,this);
	}
	onclick_start(){
		this.parent.addChild(new Game());
		this.parent.removeChild(this);
		this.btn_start.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_start,this);
	}
}