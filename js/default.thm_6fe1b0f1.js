
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.styles = undefined;
generateEUI.skins = {}
generateEUI.paths['resource/skins/BeingSkin.exml'] = window.BeingSkin = (function (_super) {
	__extends(BeingSkin, _super);
	var BeingSkin$Skin1 = 	(function (_super) {
		__extends(BeingSkin$Skin1, _super);
		function BeingSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","startBtn2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BeingSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "startBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BeingSkin$Skin1;
	})(eui.Skin);

	function BeingSkin() {
		_super.call(this);
		this.skinParts = ["btn_start"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.btn_start_i()];
	}
	var _proto = BeingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "titlebg_jpg";
		t.top = 0;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.label = "";
		t.x = 106.5;
		t.y = 708;
		t.skinName = BeingSkin$Skin1;
		return t;
	};
	return BeingSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ComboSkin.exml'] = window.ComboSkin = (function (_super) {
	__extends(ComboSkin, _super);
	function ComboSkin() {
		_super.call(this);
		this.skinParts = ["lb_number"];
		
		this.width = 200;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ComboSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i(),this.lb_number_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.italic = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Combo";
		t.textColor = 0xff0000;
		t.x = 0;
		return t;
	};
	_proto.lb_number_i = function () {
		var t = new eui.Label();
		this.lb_number = t;
		t.italic = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "1";
		t.textColor = 0xff0000;
		t.x = 10;
		return t;
	};
	return ComboSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GameSkin.exml'] = window.GameSkin = (function (_super) {
	__extends(GameSkin, _super);
	var GameSkin$Skin2 = 	(function (_super) {
		__extends(GameSkin$Skin2, _super);
		function GameSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = -4;
			return t;
		};
		return GameSkin$Skin2;
	})(eui.Skin);

	var GameSkin$Skin3 = 	(function (_super) {
		__extends(GameSkin$Skin3, _super);
		function GameSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_agian2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_agian_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = -4;
			return t;
		};
		return GameSkin$Skin3;
	})(eui.Skin);

	function GameSkin() {
		_super.call(this);
		this.skinParts = ["gp_bg","gp_actors","btn_start","lb_score","lb_best","btn_replay","gp_over_button","gp_over"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this.gp_bg_i(),this.gp_actors_i(),this.btn_start_i(),this._Group1_i(),this.gp_over_i()];
	}
	var _proto = GameSkin.prototype;

	_proto.gp_bg_i = function () {
		var t = new eui.Group();
		this.gp_bg = t;
		t.x = 0;
		t.y = -960;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg1_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "bg1_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gp_actors_i = function () {
		var t = new eui.Group();
		this.gp_actors = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.anchorOffsetY = 0;
		t.height = 76.18;
		t.label = "Start";
		t.x = 224.5;
		t.y = 820.15;
		t.skinName = GameSkin$Skin2;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 54;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Image3_i(),this.lb_score_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "score_png";
		t.x = 13;
		t.y = 14;
		return t;
	};
	_proto.lb_score_i = function () {
		var t = new eui.BitmapLabel();
		this.lb_score = t;
		t.font = "scoreFont_fnt";
		t.text = "0";
		t.x = 158;
		t.y = 13;
		return t;
	};
	_proto.gp_over_i = function () {
		var t = new eui.Group();
		this.gp_over = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this.gp_over_button_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.gp_over_button_i = function () {
		var t = new eui.Group();
		this.gp_over_button = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image4_i(),this.lb_best_i(),this.btn_replay_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "overbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lb_best_i = function () {
		var t = new eui.BitmapLabel();
		this.lb_best = t;
		t.font = "number_fnt";
		t.horizontalCenter = 0;
		t.text = "123";
		t.y = 151;
		return t;
	};
	_proto.btn_replay_i = function () {
		var t = new eui.Button();
		this.btn_replay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 149;
		t.y = 381;
		t.skinName = GameSkin$Skin3;
		return t;
	};
	return GameSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StarSkin.exml'] = window.StarSkin = (function (_super) {
	__extends(StarSkin, _super);
	function StarSkin() {
		_super.call(this);
		this.skinParts = ["img_star","rect_ring"];
		
		this.height = 300;
		this.width = 300;
		this.elementsContent = [this.img_star_i(),this.rect_ring_i()];
	}
	var _proto = StarSkin.prototype;

	_proto.img_star_i = function () {
		var t = new eui.Image();
		this.img_star = t;
		t.horizontalCenter = 0;
		t.source = "star_5_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rect_ring_i = function () {
		var t = new eui.Rect();
		this.rect_ring = t;
		t.bottom = 0;
		t.ellipseHeight = 300;
		t.ellipseWidth = 300;
		t.fillAlpha = 0;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 4;
		t.top = 0;
		return t;
	};
	return StarSkin;
})(eui.Skin);