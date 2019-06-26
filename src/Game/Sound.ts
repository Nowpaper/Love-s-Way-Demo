class Sound {
	private static instance: Sound = null;
	public static getInstance(): Sound {
		if (Sound.instance == null) {
			Sound.instance = new Sound();
		}
		return Sound.instance;
	}
	private bgm: egret.Sound;
	private click: egret.Sound;
	private combine: egret.Sound;
	private over: egret.Sound;
	public constructor() {
		this.bgm = RES.getRes("bgm_mp3");
		this.bgm.play(0, -1);
		this.click = RES.getRes("sound3_mp3");
		this.over = RES.getRes("over_mp3");
		this.combine = RES.getRes("sound8_mp3");
	}
	public PlayClick() {
		this.click.play(0, 1);
	}
	public PlayOver() {
		this.over.play(0, 1);
	}
	public PlayCombine() {
		this.combine.play(0, 1);
	}
}