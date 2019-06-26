class Combo extends eui.Component {
	public lb_number: eui.Label;

	public constructor(num: number, x, y) {
		super();
		this.skinName = "resource/skins/ComboSkin.exml";
		this.anchorOffsetX = 200 / 2;
		this.anchorOffsetY = 30 / 2;
		this.lb_number.text = num.toString();
		egret.Tween.get(this).to({ scaleX: 2, scaleY: 2, alpha: 0 }, 500)
			.call(this.removeSelf, this);
		this.x = x;
		this.y = y;
	}

	public removeSelf() {
		egret.Tween.removeTweens(this);
		this.parent.removeChild(this);
	}
}