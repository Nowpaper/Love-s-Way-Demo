class ScoreEffect extends eui.Label {
	public constructor(num, x, y) {
		super(num);
		this.stroke = 2;
		egret.Tween.get(this).to({ scaleX: 2, scaleY: 2, alpha: 0 }, 1500)
			.call(this.removeSelf, this);
		this.x = x;
		this.y = y - 50;

	}
	public removeSelf() {
		egret.Tween.removeTweens(this);
		this.parent.removeChild(this);
	}
}