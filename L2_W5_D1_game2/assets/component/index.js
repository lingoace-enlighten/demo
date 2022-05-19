window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  CommonEffects: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bdc7626yyBL6oc0YP2YYLPk", "CommonEffects");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AssetsManger_1 = require("../kit/assets/AssetsManger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EffectsName = {
      SPRITE_2D: "2d-sprite",
      GRAY_2D: "2d-gray-sprite",
      ATK_FLASH: "atk_flash"
    };
    var CommonEffects = function(_super) {
      __extends(CommonEffects, _super);
      function CommonEffects() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._camera = null;
        return _this;
      }
      CommonEffects_1 = CommonEffects;
      CommonEffects.getInstance = function() {
        this._instance || (this._instance = new CommonEffects_1());
        return this._instance;
      };
      CommonEffects.prototype.onLoad = function() {
        this._camera = cc.find("Canvas/Main Camera").getComponent(cc.Camera);
      };
      CommonEffects.prototype.setGray = function(render) {
        var material = cc.Material.getBuiltinMaterial(EffectsName.GRAY_2D);
        render.setMaterial(0, material);
      };
      CommonEffects.prototype.setNormal = function(render) {
        var material = cc.Material.getBuiltinMaterial(EffectsName.SPRITE_2D);
        render.setMaterial(0, material);
      };
      CommonEffects.prototype.setRipple = function(render) {
        AssetsManger_1.default.instance.loadMaterial("materials/ripple", "commonRes").then(function(value) {
          render.setMaterial(0, value);
        });
      };
      CommonEffects.prototype.attackOne = function(render) {
        var _this = this;
        AssetsManger_1.default.instance.loadMaterial("materials/atk_flash", "commonRes").then(function(value) {
          var material = cc.Material.getBuiltinMaterial(EffectsName.SPRITE_2D);
          render.setMaterial(0, value);
          _this.scheduleOnce(function() {
            render.setMaterial(0, material);
          }, .1);
        });
      };
      var CommonEffects_1;
      CommonEffects._instance = null;
      CommonEffects = CommonEffects_1 = __decorate([ ccclass ], CommonEffects);
      return CommonEffects;
    }(cc.Component);
    exports.default = CommonEffects;
    cc._RF.pop();
  }, {
    "../kit/assets/AssetsManger": void 0
  } ],
  DragComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92851Lcjc9Oi5idB2ucWiSx", "DragComponent");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DragAreaEntity = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DragAreaEntity = function() {
      function DragAreaEntity() {
        this.areaNode = null;
        this.rightAnswer = false;
        this.chooseNode = null;
        this.isAnswerRight = false;
      }
      __decorate([ property(cc.Node) ], DragAreaEntity.prototype, "areaNode", void 0);
      __decorate([ property(cc.Boolean) ], DragAreaEntity.prototype, "rightAnswer", void 0);
      DragAreaEntity = __decorate([ ccclass("DragAreaEntity") ], DragAreaEntity);
      return DragAreaEntity;
    }();
    exports.DragAreaEntity = DragAreaEntity;
    var DragComponent = function(_super) {
      __extends(DragComponent, _super);
      function DragComponent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dragAreas = [];
        _this.touchStartEvent = null;
        _this.dradEvent = null;
        return _this;
      }
      DragComponent.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onCancel, this);
        this.originLocal = this.node.position;
        this.canDrag = true;
      };
      DragComponent.prototype.onBegin = function(e) {
        cc.log(this.canDrag);
        if (!this.enabled || !this.canDrag) return;
        this.node["oldSiblingIndex"] = this.node.getSiblingIndex();
        this.node.setSiblingIndex(999);
        var startPos = this.originLocal;
        var targetPos = cc.v3(10, 10, 0).add(startPos);
        this.tween && this.tween.stop();
        this.node.position = startPos;
        this.tween = cc.tween(this.node).to(.1, {
          position: targetPos
        }).start();
        var targeNode = this.touchStartEvent.target;
        var tempCmpt = targeNode.getComponent(this.touchStartEvent["_componentName"]);
        var handler = tempCmpt[this.touchStartEvent.handler];
        handler && handler.call(tempCmpt);
      };
      DragComponent.prototype.onMove = function(e) {
        if (!this.enabled || !this.canDrag) return;
        if (this.tween) {
          this.tween.stop();
          var local_1 = e.getLocation();
          var pos_1 = cc.v2(local_1.x - cc.winSize.width / 2, local_1.y - cc.winSize.height / 2);
          this.offsetPos = cc.v2(pos_1.x - this.node.x, pos_1.y - this.node.y);
          this.tween = null;
        }
        var local = e.getLocation();
        var pos = cc.v2(local.x - cc.winSize.width / 2, local.y - cc.winSize.height / 2);
        this.node.x = pos.x - this.offsetPos.x;
        this.node.y = pos.y - this.offsetPos.y;
      };
      DragComponent.prototype.onEnd = function(e) {
        if (!this.enabled || !this.canDrag) return;
        this.node.setSiblingIndex(this.node["oldSiblingIndex"]);
        var endArea = this.checkCollision();
        if (endArea) {
          this.answer(endArea);
          return;
        }
        this.canDrag = true;
        this.recoverAnswer();
      };
      DragComponent.prototype.onCancel = function(e) {
        if (!this.enabled || !this.canDrag) return;
        this.node.setSiblingIndex(this.node["oldSiblingIndex"]);
        this.recoverAnswer();
      };
      DragComponent.prototype.checkCollision = function() {
        for (var _i = 0, _a = this.dragAreas; _i < _a.length; _i++) {
          var area = _a[_i];
          var temp = area.areaNode.getBoundingBox();
          var wordPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
          var nodePos = area.areaNode.parent.convertToNodeSpaceAR(wordPos);
          var flag = temp.contains(cc.v2(nodePos.x, nodePos.y));
          if (flag) return area;
        }
        return null;
      };
      DragComponent.prototype.recoverAnswer = function() {
        var _this = this;
        var local = this.originLocal;
        cc.tween(this.node).to(.2, {
          x: local.x,
          y: local.y
        }).call(function() {
          _this.canDrag = true;
        }).start();
      };
      DragComponent.prototype.answer = function(dragArea) {
        var _this = this;
        var targeNode = this.dradEvent.target;
        var tempCmpt = targeNode.getComponent(this.dradEvent["_componentName"]);
        var handler = tempCmpt[this.dradEvent.handler];
        if (dragArea.rightAnswer && null == dragArea.chooseNode) {
          dragArea.chooseNode = this.node;
          dragArea.isAnswerRight = true;
          var wordPos = dragArea.areaNode.parent.convertToWorldSpaceAR(dragArea.areaNode.position);
          var nodePos = this.node.parent.convertToNodeSpaceAR(wordPos);
          this.canDrag = false;
          cc.tween(this.node).to(.2, {
            x: nodePos.x,
            y: nodePos.y
          }).start();
        } else {
          dragArea.isAnswerRight = false;
          this.canDrag = false;
          cc.tween(this.node).delay(.3).call(function() {
            _this.recoverAnswer();
          }).start();
        }
        handler && handler.call(tempCmpt, dragArea);
      };
      __decorate([ property({
        type: [ DragAreaEntity ],
        displayName: "\u62d6\u62fdnode"
      }) ], DragComponent.prototype, "dragAreas", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        tooltip: "\u62d6\u62fd\u7ed3\u675f\u4e8b\u4ef6"
      }) ], DragComponent.prototype, "touchStartEvent", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        tooltip: "\u62d6\u62fd\u7ed3\u675f\u4e8b\u4ef6"
      }) ], DragComponent.prototype, "dradEvent", void 0);
      DragComponent = __decorate([ ccclass ], DragComponent);
      return DragComponent;
    }(cc.Component);
    exports.default = DragComponent;
    cc._RF.pop();
  }, {} ],
  GameCompBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f456aKW5pBGPIZ5XE5ZXljF", "GameCompBase");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ListenerManager_1 = require("./../../kit/event/ListenerManager");
    var AssetsManger_1 = require("../../kit/assets/AssetsManger");
    var GameData_1 = require("../../../scripts/GameData");
    var Util_1 = require("./Util");
    var BaseEvent_1 = require("../../kit/event/BaseEvent");
    var SpineUtils_1 = require("./SpineUtils");
    var AudioManager_1 = require("../../kit/audio/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameCompBase = function(_super) {
      __extends(GameCompBase, _super);
      function GameCompBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isStartGame = false;
        _this.recordNode = null;
        _this.recordPrefab = null;
        return _this;
      }
      GameCompBase.prototype.onLoad = function() {
        1 !== GameData_1.default.gameCount && 0 !== GameData_1.default.curGameIndex || ListenerManager_1.ListenerManager.on(BaseEvent_1.BaseEvent.EVENT_NATIVE_LOADED, this.onNativeLoaded, this);
        ListenerManager_1.ListenerManager.on(BaseEvent_1.BaseEvent.EVENT_FOLLOW_UP_RIGHT, this.removeRecordComp, this);
        ListenerManager_1.ListenerManager.on(BaseEvent_1.BaseEvent.EVENT_FOLLOW_UP, this.addRecordComp, this);
        this.initGameData();
      };
      GameCompBase.prototype.start = function() {
        var _this = this;
        if (GameData_1.default.gameCount > 1) {
          this.isStartGame = true;
          this.scheduleOnce(function() {
            _this.onGameStart();
          });
        } else {
          var waitTime = 7;
          console.log("\u7b49\u5f85\u65f6\u95f4\uff1a", waitTime);
          this.scheduleOnce(function() {
            _this.isStartGame || _this.onNativeLoaded();
          }, waitTime);
        }
      };
      GameCompBase.prototype.onNativeLoaded = function() {
        if (!this.isStartGame) {
          this.isStartGame = true;
          this.onGameStart();
        }
      };
      GameCompBase.prototype.initGameData = function() {
        this.bundleName = GameData_1.default.curBundleName;
      };
      GameCompBase.prototype.initRecordComponent = function() {
        var _this = this;
        AssetsManger_1.default.instance.loadPrefab("followUp/res/prefab/followUp", "component").then(function(prefab) {
          _this.recordPrefab = prefab;
        });
      };
      GameCompBase.prototype.addRecordComp = function() {
        console.log(" ====addRecordComp");
        this.recordNode = cc.instantiate(this.recordPrefab);
        this.recordNode.parent = this.node;
      };
      GameCompBase.prototype.removeRecordComp = function(starScore) {
        this.recordNode.destroy();
      };
      GameCompBase.prototype.onGameStart = function() {};
      GameCompBase.prototype.initTransferComponent = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          AssetsManger_1.default.instance.loadPrefab("transfer/prefab/zhuanchang", "component").then(function(prefab) {
            var transferNode = cc.instantiate(prefab);
            transferNode.parent = _this.node;
            transferNode.active = false;
            resolve(transferNode.getComponent("TransferMain"));
          });
        });
      };
      GameCompBase.prototype.initColorWordComponent = function(fontSize) {
        var _this = this;
        void 0 === fontSize && (fontSize = 25);
        return new Promise(function(resolve, reject) {
          AssetsManger_1.default.instance.loadPrefab("word/res/prefab/Word", "component").then(function(prefab) {
            var wordNode = cc.instantiate(prefab);
            wordNode.parent = _this.node;
            wordNode.active = false;
            var WordTool = wordNode.getComponent("WordTool");
            WordTool.initWordTool(fontSize);
            resolve(WordTool);
          });
        });
      };
      GameCompBase.prototype.initHandComponent = function(scale) {
        var _this = this;
        void 0 === scale && (scale = 1);
        return new Promise(function(resolve, reject) {
          AssetsManger_1.default.instance.loadPrefab("hand/res/prefab/hand", "component").then(function(prefab) {
            var hand = cc.instantiate(prefab);
            hand.parent = _this.node;
            hand.active = false;
            hand.scale = scale;
            resolve(hand.getComponent("HandCtr"));
          });
        });
      };
      GameCompBase.prototype.initLabaComponent = function(scale) {
        var _this = this;
        void 0 === scale && (scale = 1);
        return new Promise(function(resolve, reject) {
          AssetsManger_1.default.instance.loadPrefab("voiceTools/res/prefab/Voice", "component").then(function(prefab) {
            var laba = cc.instantiate(prefab);
            laba.parent = _this.node;
            laba.active = false;
            laba.scale = scale;
            resolve(laba.getComponent("VoiceTools"));
          });
        });
      };
      GameCompBase.prototype.initFeedBackComponent = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          AssetsManger_1.default.instance.loadPrefab("feedBack/res/prefab/feedBack", "component").then(function(prefab) {
            var feedBack = cc.instantiate(prefab);
            feedBack.parent = _this.node;
            resolve(feedBack.getComponent("feedBackCtr"));
          });
        });
      };
      GameCompBase.prototype.setBlockInputEvent = function(isBlocke) {
        void 0 === isBlocke && (isBlocke = true);
        var mask = this.node.getChildByName("Mask");
        if (!mask) {
          mask = new cc.Node("Mask");
          mask.zIndex = 1e3;
          mask.parent = this.node;
          mask.addComponent(cc.BlockInputEvents);
          var widget = mask.addComponent(cc.Widget);
          widget.isAlignLeft = true;
          widget.isAlignRight = true;
          widget.isAlignTop = true;
          widget.isAlignBottom = true;
        }
        mask.active = !!isBlocke;
      };
      GameCompBase.prototype.gameEnd = function(num_starNow) {
        void 0 === num_starNow && (num_starNow = 0);
        0 != num_starNow && GameData_1.default.addStarNum(num_starNow);
        GameData_1.default.curGameIndex + 1 >= GameData_1.default.gameCount ? ListenerManager_1.ListenerManager.dispatch("entryMenu", true) : Util_1.default.addGameOverLayer(this.node, false);
      };
      GameCompBase.prototype.playSpineAsync = function(spinCmpt, animName, loop, finishCb) {
        return new Promise(function(resolve, reject) {
          SpineUtils_1.SpineUtils.playSpine(spinCmpt, animName, loop, function() {
            finishCb && finishCb();
            resolve();
          });
        });
      };
      GameCompBase.prototype.onDestroy = function() {
        AudioManager_1.default.stopMusic();
        ListenerManager_1.ListenerManager.removeAll(this);
        AssetsManger_1.default.instance.clearBundle(this.bundleName);
      };
      GameCompBase = __decorate([ ccclass ], GameCompBase);
      return GameCompBase;
    }(cc.Component);
    exports.default = GameCompBase;
    cc._RF.pop();
  }, {
    "../../../scripts/GameData": void 0,
    "../../kit/assets/AssetsManger": void 0,
    "../../kit/audio/AudioManager": void 0,
    "../../kit/event/BaseEvent": void 0,
    "./../../kit/event/ListenerManager": void 0,
    "./SpineUtils": "SpineUtils",
    "./Util": "Util"
  } ],
  HandCtr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5cffcKCFBhFhqL40gEcET53", "HandCtr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HandSpineAnimationName;
    (function(HandSpineAnimationName) {
      HandSpineAnimationName["danji"] = "dainji";
      HandSpineAnimationName["dianji"] = "dainjitaiqi";
      HandSpineAnimationName["taishou"] = "taiqi";
    })(HandSpineAnimationName || (HandSpineAnimationName = {}));
    var ApertureAnimationName;
    (function(ApertureAnimationName) {
      ApertureAnimationName["dianji"] = "dianji";
      ApertureAnimationName["taishou"] = "taishou";
    })(ApertureAnimationName || (ApertureAnimationName = {}));
    var HandCtr = function(_super) {
      __extends(HandCtr, _super);
      function HandCtr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.skAperture = null;
        _this.skHand = null;
        _this.arrow = null;
        _this.arrowWidth = 0;
        return _this;
      }
      HandCtr.prototype.start = function() {};
      HandCtr.prototype.onEnable = function() {
        this.skAperture.node.active = false;
      };
      HandCtr.prototype.onDisable = function() {
        this.arrow.stopAllActions();
        this.arrow.width = 0;
        this.node.stopAllActions();
        this.unscheduleAllCallbacks();
      };
      HandCtr.prototype.Press = function(callback) {
        var _this = this;
        this.skAperture.node.active = false;
        this.playSpine(this.skHand, HandSpineAnimationName.danji, false, function() {
          _this.skAperture.node.active = true;
          _this.playSpine(_this.skAperture, ApertureAnimationName.dianji, false, function() {
            callback && callback();
          });
        });
      };
      HandCtr.prototype.Lift = function(callback) {
        this.playSpine(this.skHand, HandSpineAnimationName.taishou, false, function() {
          callback && callback();
        });
      };
      HandCtr.prototype.Click = function(callback) {
        var _this = this;
        void 0 === callback && (callback = null);
        this.skAperture.node.active = true;
        this.playSpine(this.skAperture, ApertureAnimationName.dianji, false);
        this.playSpine(this.skHand, HandSpineAnimationName.danji, false, function() {
          _this.playSpine(_this.skHand, HandSpineAnimationName.taishou, false, function() {
            callback && callback();
          });
        });
      };
      HandCtr.prototype.ClickCycle = function() {
        var _this = this;
        this.schedule(function() {
          _this.Click();
        }, 2, cc.macro.REPEAT_FOREVER, .01);
      };
      HandCtr.prototype.TouchAnimation = function(starPos, endPos, time) {
        var _this = this;
        void 0 === time && (time = .5);
        this.node.stopAllActions();
        this.node.setPosition(starPos);
        this.arrow.width = 0;
        this.Press(function() {
          cc.tween(_this.node).to(time, {
            position: cc.v3(endPos.x, endPos.y, 0)
          }).call(function() {
            _this.Lift(null);
          }).start();
          cc.tween(_this.arrow).to(time, {
            width: _this.arrowWidth
          }).call(function() {}).start();
        });
      };
      HandCtr.prototype.TouchCycle = function(starPos, endPos, waitTime, runTime) {
        var _this = this;
        void 0 === waitTime && (waitTime = 3);
        void 0 === runTime && (runTime = .5);
        this.node.setPosition(starPos);
        this.schedule(function() {
          _this.TouchAnimation(starPos, endPos, runTime);
        }, waitTime, cc.macro.REPEAT_FOREVER, .01);
        var arrowWidth = Math.abs(endPos.x - starPos.x);
        var arrowHeight = Math.abs(endPos.y - starPos.y);
        var dir = endPos.sub(starPos);
        var angle = dir.signAngle(cc.v2(1, 0));
        var degree = angle / Math.PI * 180;
        this.arrow.active = true;
        this.arrow.angle = -degree;
        this.arrowWidth = Math.sqrt(arrowWidth * arrowWidth + arrowHeight * arrowHeight) / this.node.scale;
        this.arrow.getChildByName("arrow").width < this.arrowWidth && (this.arrow.getChildByName("arrow").width = this.arrowWidth);
      };
      HandCtr.prototype.stopCycleAllAction = function() {
        this.unscheduleAllCallbacks();
        cc.Tween.stopAllByTarget(this.node);
        cc.Tween.stopAllByTarget(this.arrow);
      };
      HandCtr.prototype.wipeCycle = function(starPos, endPos, speed) {
        var _this = this;
        void 0 === speed && (speed = 200);
        this.node.setPosition(starPos);
        this.arrow.active = false;
        var len = endPos.sub(starPos).mag();
        this.playSpine(this.skHand, HandSpineAnimationName.danji, false, function() {
          _this.skAperture.node.active = true;
          _this.playSpine(_this.skAperture, ApertureAnimationName.dianji, true);
          cc.tween(_this.node).repeatForever(cc.tween().to(len / speed, {
            position: cc.v3(endPos)
          }).to(len / speed, {
            position: cc.v3(starPos)
          })).start();
        });
      };
      HandCtr.prototype.playSpine = function(spNode, spName, loop, callback) {
        void 0 === loop && (loop = false);
        void 0 === callback && (callback = null);
        spNode.clearTracks();
        spNode.setToSetupPose();
        var track = spNode.setAnimation(0, spName, loop);
        track && !loop && spNode.setCompleteListener(function(trackEntry, loopCount) {
          var name = trackEntry.animation.name ? trackEntry.animation.name : "";
          name == spName && callback && callback();
        });
      };
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u5149\u5708"
      }) ], HandCtr.prototype, "skAperture", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u624b\u6307"
      }) ], HandCtr.prototype, "skHand", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u7bad\u5934"
      }) ], HandCtr.prototype, "arrow", void 0);
      HandCtr = __decorate([ ccclass ], HandCtr);
      return HandCtr;
    }(cc.Component);
    exports.default = HandCtr;
    cc._RF.pop();
  }, {} ],
  Point: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d9b5vZc0lMG6SImS6p0TVY", "Point");
    "use strict";
    var __assign = this && this.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TigoManager_1 = require("../../kit/TigoManager");
    var Point = function() {
      function Point() {
        this.gameName = "";
      }
      Object.defineProperty(Point, "instance", {
        get: function() {
          null == Point._instance && (Point._instance = new Point());
          return Point._instance;
        },
        enumerable: false,
        configurable: true
      });
      Point.prototype.init = function(gameName, totalRound) {
        this.gameName = gameName;
        this.totalRound = totalRound;
        var info = TigoManager_1.default.getAppInfo();
        cc.log("info:", info);
        if (info) {
          this.commonParams = {
            Level_Name: info.levelName,
            Week_Name: info.weekName,
            Course_ID: info.lessonId,
            Course_Name: info.lessonName,
            Module_id: info.moduleId,
            Module_Name: info.moduleName,
            Game_name: this.gameName
          };
          cc.log("commonParams:", this.commonParams);
        }
      };
      Point.prototype.gameStart = function() {
        this.callNative(Point.POINT_GAME_START, this.commonParams);
      };
      Point.prototype.gameEnd = function() {
        this.callNative(Point.POINT_GAME_END, this.commonParams);
      };
      Point.prototype.roundStart = function(currentRound) {
        var obj = __assign({}, this.commonParams);
        obj["Which round"] = currentRound + "/" + this.totalRound;
        this.callNative(Point.POINT_ROUND_START, obj);
      };
      Point.prototype.roundEnd = function(currentRound, times) {
        var obj = __assign({}, this.commonParams);
        obj["Which round"] = currentRound + "/" + this.totalRound;
        obj["Result "] = times;
        this.callNative(Point.POINT_ROUND_END, obj);
      };
      Point.prototype.callNative = function(event, data) {
        TigoManager_1.default.getAppInfo() && TigoManager_1.default.getAppInfo().levelName && TigoManager_1.default.getAppInfo().weekName ? TigoManager_1.default.callPoint(event, data) : cc.warn("\u539f\u751f\u53c2\u6570\u4e3a\u7a7a\uff0c\u65e0\u6cd5\u57cb\u70b9");
      };
      Point.POINT_GAME_START = "Start a game";
      Point.POINT_GAME_END = "Complete a game";
      Point.POINT_ROUND_START = "Start a round";
      Point.POINT_ROUND_END = "Complete a round";
      return Point;
    }();
    exports.default = Point;
    cc._RF.pop();
  }, {
    "../../kit/TigoManager": void 0
  } ],
  RepeatAfterMeAudio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e14bbL9OZpICbXyWiet5knm", "RepeatAfterMeAudio");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RepeatAfterMeAudio = function(_super) {
      __extends(RepeatAfterMeAudio, _super);
      function RepeatAfterMeAudio() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.audio_zero = [];
        _this.audio_one = [];
        _this.audio_two = [];
        _this.audio_three = [];
        return _this;
      }
      RepeatAfterMeAudio.prototype.getAudioClip = function(type) {
        var list;
        switch (type) {
         case 0:
          list = this.audio_zero;
          break;

         case 1:
          list = this.audio_one;
          break;

         case 2:
          list = this.audio_two;
          break;

         case 3:
          list = this.audio_three;
        }
        return list[this.randomNum(0, list.length - 1)];
      };
      RepeatAfterMeAudio.prototype.randomNum = function(minNum, maxNum) {
        switch (arguments.length) {
         case 1:
          return Math.floor(Math.random() * minNum + 1);

         case 2:
          return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

         default:
          return 0;
        }
      };
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "0\u661f\u97f3\u9891"
      }) ], RepeatAfterMeAudio.prototype, "audio_zero", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "1\u661f\u97f3\u9891"
      }) ], RepeatAfterMeAudio.prototype, "audio_one", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "2\u661f\u97f3\u9891"
      }) ], RepeatAfterMeAudio.prototype, "audio_two", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "3\u661f\u97f3\u9891"
      }) ], RepeatAfterMeAudio.prototype, "audio_three", void 0);
      RepeatAfterMeAudio = __decorate([ ccclass ], RepeatAfterMeAudio);
      return RepeatAfterMeAudio;
    }(cc.Component);
    exports.default = RepeatAfterMeAudio;
    cc._RF.pop();
  }, {} ],
  SpineUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc153hGtOpMN4sSRZK6+K9x", "SpineUtils");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SpineUtils = void 0;
    var TimerSystem_1 = require("../../kit/timer/TimerSystem");
    var SpineUtils = function() {
      function SpineUtils() {}
      SpineUtils.playSpineAsync = function(sp, info) {
        return new Promise(function(resolve, reject) {
          if (info.loop) {
            sp.setAnimation(0, info.name, true);
            TimerSystem_1.default.instance.doOnce(1e3 * info.duration || 0, function() {
              if (cc.isValid(sp.node)) resolve(true); else {
                cc.warn("sp.node  is valid false! animation name " + info.name);
                resolve(false);
              }
            }, null, null, false);
          } else {
            var te = sp.setAnimation(0, info.name, false);
            if (!te) {
              resolve(true);
              return;
            }
            sp.setTrackCompleteListener(te, function() {
              resolve(true);
            });
          }
        });
      };
      SpineUtils.playSpineAniByConfig = function(sp, config) {
        return __awaiter(this, void 0, void 0, function() {
          var index, info;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              index = 0;
              _a.label = 1;

             case 1:
              if (!(index < config.length)) return [ 3, 4 ];
              info = config[index];
              info.func && info.func();
              return [ 4, SpineUtils.playSpineAsync(sp, info) ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              index++;
              return [ 3, 1 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      SpineUtils.playSpine = function(spinCmpt, animName, loop, finishCb, finishCount, nextName, nextLoop) {
        void 0 === loop && (loop = false);
        void 0 === finishCount && (finishCount = 1);
        if (!spinCmpt) {
          cc.warn("playSpine:" + animName + ", sp.Skeleton null");
          return;
        }
        if ("" == animName) {
          cc.warn("playSpine:" + animName);
          return;
        }
        spinCmpt.node.active = true;
        spinCmpt.setAnimation(0, animName, loop);
        spinCmpt.setCompleteListener(null);
        if (finishCb) {
          var count_1 = 0;
          spinCmpt.setCompleteListener(function() {
            if (spinCmpt.animation == animName) {
              count_1++;
              if (count_1 >= finishCount) {
                finishCb();
                nextName && "" != nextName && spinCmpt.setAnimation(0, nextName, nextLoop);
                spinCmpt.setCompleteListener(null);
              }
            }
          });
          return;
        }
        nextName && "" != nextName && spinCmpt.addAnimation(0, nextName, nextLoop);
      };
      return SpineUtils;
    }();
    exports.SpineUtils = SpineUtils;
    cc._RF.pop();
  }, {
    "../../kit/timer/TimerSystem": void 0
  } ],
  TransferMain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc85dWDzmFAQI2nPElL/By+", "TransferMain");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TransferMain = function(_super) {
      __extends(TransferMain, _super);
      function TransferMain() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.loadingSpine = null;
        return _this;
      }
      TransferMain.prototype.startTransferAni = function() {
        var _this = this;
        this.transferStartFunc && this.transferStartFunc();
        this.node.active = true;
        var te = this.loadingSpine.setAnimation(0, "day1_1_zhuan_daiji", false);
        this.loadingSpine.setTrackCompleteListener(te, function() {
          _this.transferEndFunc && _this.transferEndFunc();
          _this.node.active = false;
        });
      };
      TransferMain.prototype.transferInit = function(endFunc, startFunc) {
        this.transferEndFunc = endFunc;
        this.transferStartFunc = startFunc;
      };
      __decorate([ property(sp.Skeleton) ], TransferMain.prototype, "loadingSpine", void 0);
      TransferMain = __decorate([ ccclass ], TransferMain);
      return TransferMain;
    }(cc.Component);
    exports.default = TransferMain;
    cc._RF.pop();
  }, {} ],
  Util: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9cb39dr02RO/JXhhVzRhPcj", "Util");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CommonResEnum_1 = require("../../commonRes/scripts/CommonResEnum");
    var AssetsManger_1 = require("../../kit/assets/AssetsManger");
    var AudioManager_1 = require("../../kit/audio/AudioManager");
    var ListenerManager_1 = require("../../kit/event/ListenerManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Util = function(_super) {
      __extends(Util, _super);
      function Util() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.coin_small = null;
        _this.coin_mid = null;
        _this.coin_large = null;
        _this.PrefabNode = null;
        _this.voiceNode = null;
        return _this;
      }
      Util_1 = Util;
      Util.getInstance = function() {
        null == this.instance && (this.instance = new Util_1());
        return this.instance;
      };
      Util.prototype.onLoad = function() {
        cc.log(this.coin_small);
      };
      Util.prototype.setStartBtnBack = function(callBck, that) {
        var _this = this;
        var btn = this.PrefabNode.getChildByName("start");
        var clickBack = function() {
          _this.PrefabNode.active = false;
          callBck && callBck.bind(that)();
        };
        btn.on("click", clickBack, that);
      };
      Util.prototype.addGameOverLayer = function(node, et) {
        AssetsManger_1.default.instance.loadPrefab("prefab/gameOver", "lessonLoader").then(function(prefab) {
          var coin = cc.instantiate(prefab);
          node.parent.addChild(coin, 999);
          coin.name = "gameOver";
          AudioManager_1.default.playEffect(CommonResEnum_1.CommonResBundleName, CommonResEnum_1.CommonAudioName.coinLarge, function() {
            coin.destroy();
            ListenerManager_1.ListenerManager.dispatch("entryMenu", et);
            cc.log(Date.now());
          });
        });
      };
      Util.prototype.SetMask = function(obj, state) {
        state ? obj.setPosition(cc.Vec2.ZERO) : obj.setPosition(cc.v2(9999, 9999));
      };
      var Util_1;
      __decorate([ property(cc.Prefab) ], Util.prototype, "coin_small", void 0);
      __decorate([ property(cc.Prefab) ], Util.prototype, "coin_mid", void 0);
      __decorate([ property(cc.Prefab) ], Util.prototype, "coin_large", void 0);
      Util = Util_1 = __decorate([ ccclass ], Util);
      return Util;
    }(cc.Component);
    exports.default = Util.getInstance();
    cc._RF.pop();
  }, {
    "../../commonRes/scripts/CommonResEnum": void 0,
    "../../kit/assets/AssetsManger": void 0,
    "../../kit/audio/AudioManager": void 0,
    "../../kit/event/ListenerManager": void 0
  } ],
  VoiceTools: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72e68Eac1xAo6HhYhJXD05v", "VoiceTools");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../../kit/audio/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var VoiceTools = function(_super) {
      __extends(VoiceTools, _super);
      function VoiceTools() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      VoiceTools.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.OnClickTouchEnd, this);
      };
      VoiceTools.prototype.AddVoiceButtonEvent = function(callbackName, customEventData, target) {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = target.constructor.name;
        clickEventHandler.handler = callbackName;
        clickEventHandler.customEventData = customEventData;
        var button = this.node.getComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);
      };
      VoiceTools.prototype.AddEvent = function(callback, customEventData) {
        this.callback = callback;
        this.customEventData = customEventData;
      };
      VoiceTools.prototype.playSoundByBundle = function(bundleName, path, cb) {
        var _this = this;
        this.playVoiceAni();
        AudioManager_1.default.playAudioSound(bundleName, path, function() {
          cb && cb();
          _this.stopVoiceAni();
        });
      };
      VoiceTools.prototype.OnClickTouchEnd = function() {
        this.callback && this.callback(this.customEventData);
      };
      VoiceTools.prototype.stopVoiceAni = function() {
        this.node.getComponent(cc.Animation).play("voice_end");
      };
      VoiceTools.prototype.playVoiceAni = function() {
        this.node.getComponent(cc.Animation).play("voice");
      };
      VoiceTools = __decorate([ ccclass ], VoiceTools);
      return VoiceTools;
    }(cc.Component);
    exports.default = VoiceTools;
    cc._RF.pop();
  }, {
    "../../../kit/audio/AudioManager": void 0
  } ],
  WordTool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "af8371tTKdBcatwALIy647/", "WordTool");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WordTool = function(_super) {
      __extends(WordTool, _super);
      function WordTool() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblWord = null;
        return _this;
      }
      WordTool.prototype.initWordTool = function(fontSize) {
        this.lblWord.fontSize = fontSize || this.lblWord.fontSize;
        this.lblWord.spacingX = Math.ceil(-10 * fontSize / 40);
      };
      WordTool.prototype.showWordAni = function(wordStr, targetPos, callback) {
        var _this = this;
        void 0 === targetPos && (targetPos = cc.v2(0, -100));
        void 0 === callback && (callback = null);
        this.node.active = true;
        this.lblWord.node.opacity = 0;
        this.lblWord.node.setPosition(cc.v2(0, 100));
        this.lblWord.node.active = true;
        this.lblWord.string = wordStr;
        this.unscheduleAllCallbacks();
        this.lblWord.node.stopAllActions();
        cc.tween(this.lblWord.node).to(.3, {
          position: cc.v3(targetPos.x, targetPos.y, 0),
          opacity: 255
        }).delay(2.4).to(.3, {
          opacity: 0
        }).call(function() {
          _this.node.active = false;
          callback && callback();
        }).start();
      };
      __decorate([ property({
        type: cc.Label,
        displayName: "word"
      }) ], WordTool.prototype, "lblWord", void 0);
      WordTool = __decorate([ ccclass ], WordTool);
      return WordTool;
    }(cc.Component);
    exports.default = WordTool;
    cc._RF.pop();
  }, {} ],
  coinBoard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8cadSO2A5Dd6xldD0oQ1vE", "coinBoard");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CommonResEnum_1 = require("../../../commonRes/scripts/CommonResEnum");
    var AudioManager_1 = require("../../../kit/audio/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var coinBoard = function(_super) {
      __extends(coinBoard, _super);
      function coinBoard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.coin = [];
        return _this;
      }
      coinBoard.prototype.start = function() {};
      coinBoard.prototype.setCoinAni = function(num) {
        var _this = this;
        for (var i = 0; i < this.coin.length; i++) this.coin[i].active = i < num;
        this.node.getComponent(cc.Animation).play();
        this.playCoinEffect(num);
        this.scheduleOnce(function() {
          for (var i = 0; i < _this.coin.length; i++) _this.coin[i].active = false;
        }, 2);
      };
      coinBoard.prototype.playCoinEffect = function(num) {
        var url = "";
        url = "jinbi" + num;
        AudioManager_1.default.playEffect(CommonResEnum_1.CommonResBundleName, "audio/" + url);
      };
      __decorate([ property(cc.Node) ], coinBoard.prototype, "coin", void 0);
      coinBoard = __decorate([ ccclass ], coinBoard);
      return coinBoard;
    }(cc.Component);
    exports.default = coinBoard;
    cc._RF.pop();
  }, {
    "../../../commonRes/scripts/CommonResEnum": void 0,
    "../../../kit/audio/AudioManager": void 0
  } ],
  feedBackCtr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19971oNorxPC4wUq1VWPOva", "feedBackCtr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var feedBackCtr = function(_super) {
      __extends(feedBackCtr, _super);
      function feedBackCtr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.rightSpine = null;
        _this.errorSpine = null;
        return _this;
      }
      feedBackCtr.prototype.onLoad = function() {};
      feedBackCtr.prototype.start = function() {};
      feedBackCtr.prototype.showRightAnimation = function(pos) {
        var _this = this;
        this.node.position = pos;
        this.rightSpine.node.active = true;
        this.errorSpine.node.active = false;
        this.rightSpine.setAnimation(0, "13_1_zhengfangti xiaoshixiaoguo", false);
        this.rightSpine.setCompleteListener(function() {
          return _this.rightSpine.node.active = false;
        });
      };
      feedBackCtr.prototype.showErrorAnimation = function(pos) {
        var _this = this;
        this.node.position = pos;
        this.errorSpine.node.active = true;
        this.rightSpine.node.active = false;
        this.errorSpine.setAnimation(0, "08_4_z_zhenzha", false);
        this.errorSpine.setCompleteListener(function() {
          return _this.errorSpine.node.active = false;
        });
      };
      __decorate([ property(sp.Skeleton) ], feedBackCtr.prototype, "rightSpine", void 0);
      __decorate([ property(sp.Skeleton) ], feedBackCtr.prototype, "errorSpine", void 0);
      feedBackCtr = __decorate([ ccclass ], feedBackCtr);
      return feedBackCtr;
    }(cc.Component);
    exports.default = feedBackCtr;
    cc._RF.pop();
  }, {} ],
  followUp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5882cSRxaFJPpCvOhT72Wlh", "followUp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameData_1 = require("../../../../scripts/GameData");
    var BaseEvent_1 = require("../../../kit/event/BaseEvent");
    var recordAin_1 = require("./recordAin");
    var TigoManager_1 = require("../../../kit/TigoManager");
    var ListenerManager_1 = require("../../../kit/event/ListenerManager");
    var AudioManager_1 = require("../../../kit/audio/AudioManager");
    var AssetsManger_1 = require("../../../kit/assets/AssetsManger");
    var CommonResEnum_1 = require("../../../commonRes/scripts/CommonResEnum");
    var GameConfig_1 = require("../../../../scripts/GameConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FollowUp = function(_super) {
      __extends(FollowUp, _super);
      function FollowUp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.textImg = null;
        _this.textString = null;
        _this.imgNode = null;
        _this.smallImgBg = null;
        _this.recordNode = null;
        _this.scale = null;
        _this.recordPre = null;
        _this.recordComp = null;
        _this.nowActionType = "";
        _this.curClickWord = null;
        _this.startNumber = 0;
        _this.followUpTimes = 0;
        _this.starNow = 0;
        _this.time = 13;
        return _this;
      }
      FollowUp.prototype.onLoad = function() {
        var _this = this;
        ListenerManager_1.ListenerManager.on(BaseEvent_1.BaseEvent.EVENT_NATIVE_CALL_COCOS, this.getAppData, this);
        ListenerManager_1.ListenerManager.on(BaseEvent_1.BaseEvent.EVENT_FOLLOW_UP, function(event) {
          _this.followUpInit(event.text, event.textString, event.word, event.img, event.imgScale, event.music, event.time);
        }, this);
        cc.game.on(cc.game.EVENT_SHOW, function() {
          console.log(" followUp \u7ec4\u4ef6\u56de\u5230\u524d\u53f0");
          this.isRecordState && this.getAppData({
            action: "TiGoVoiceEvaluationFinish",
            param: {
              code: "200",
              score: 0
            }
          });
        });
      };
      FollowUp.prototype.followUpInit = function(text, textString, word, img, imgScale, music, time) {
        return __awaiter(this, void 0, void 0, function() {
          var designSize, bundleName;
          var _this = this;
          return __generator(this, function(_a) {
            this.node.active = true;
            designSize = cc.winSize;
            this.curClickWord = text;
            this.textMusic = music;
            this.smallImgBg.opacity = word ? 255 : 0;
            console.warn(textString);
            this.textString.getComponent(cc.Label).string = textString;
            bundleName = GameData_1.default.curBundleName;
            AssetsManger_1.default.instance.loadImg(img, bundleName).then(function(img) {
              _this.imgNode.getComponent(cc.Sprite).spriteFrame = img;
            });
            this.imgNode.scale = imgScale || 1;
            this.imgNode.setPosition(0, 0);
            this.textImg.setPosition(0, this.smallImgBg.height / 2 + this.textImg.height / 2 + 50);
            this.textString.setPosition(0, this.smallImgBg.height / 2 + this.textString.height + 90);
            this.recordNode.setPosition(0, -this.smallImgBg.height / 2 - this.recordNode.height / 2 - 130);
            this.node.scale = designSize.height / this.node.height;
            AudioManager_1.default.playEffect(CommonResEnum_1.CommonResBundleName, CommonResEnum_1.CommonAudioName.listenAndSay, function() {
              AudioManager_1.default.playEffect(bundleName, music, function() {
                _this.record();
              });
            });
            time && (this.time = time);
            return [ 2 ];
          });
        });
      };
      FollowUp.prototype.initRecordNode = function(num) {
        void 0 === num && (num = 3);
        this.recordComp = cc.instantiate(this.recordPre);
        this.recordNode.addChild(this.recordComp);
        this.recordComp.children[0].getComponent(recordAin_1.default).InitAniFun(num);
        this.isRecordState = true;
      };
      FollowUp.prototype.record = function() {
        var _this = this;
        console.log("record begin");
        this.nowActionType = "";
        AudioManager_1.default.playEffect(CommonResEnum_1.CommonResBundleName, CommonResEnum_1.CommonAudioName.record);
        var time = 1e3 * this.time;
        this.initRecordNode(this.time);
        TigoManager_1.default.callAppToRecord(time, this.curClickWord);
        GameConfig_1.GameConfig.isDebug && true && setTimeout(function() {
          _this.destroyRecordNode();
          _this.isRecordState = false;
          if (Math.random() < .8) {
            cc.log("\u6b63\u786e-----");
            var s = Math.floor(3 * Math.random() + 1);
            _this.startNumber = Number(s);
            ListenerManager_1.ListenerManager.dispatch(BaseEvent_1.BaseEvent.EVENT_FOLLOW_UP_RIGHT, _this.startNumber);
            _this.playRecordRight();
          } else {
            cc.log("\u9519\u8bef-----");
            ListenerManager_1.ListenerManager.dispatch(BaseEvent_1.BaseEvent.EVENT_FOLLOW_UP_WRONG, _this.startNumber);
            _this.playRecordWrong();
          }
        }, 4e3);
      };
      FollowUp.prototype.getAppData = function(data) {
        console.log("game getAppData  ====  " + JSON.stringify(data));
        if ("TiGoRecordFinish" == data.action) {
          if ("" == this.nowActionType) {
            console.log("in TiGoRecordFinish!!!   " + this.nowActionType);
            this.destroyRecordNode();
            this.nowActionType = data.action;
            TigoManager_1.default.callAppToResult(this.curClickWord, data.param.path);
            var n = Number(GameData_1.default.recordNum);
            n += 1;
            GameData_1.default.recordNum = n.toString();
          }
        } else if ("TiGoVoiceEvaluationFinish" == data.action && "TiGoRecordFinish" == this.nowActionType) {
          console.log("in TiGoVoiceEvaluationFinish!!!    " + this.nowActionType);
          this.nowActionType = data.action;
          this.startNumber = 0;
          this.followUpTimes += 1;
          this.isRecordState = false;
          switch (Number(data.param.code)) {
           case 200:
            console.log("getAppData score ====  " + data.param.score);
            this.startNumber = Number(data.param.score);
            if (this.startNumber > 0) {
              TigoManager_1.default.callAppToTigoStar(this.startNumber);
              ListenerManager_1.ListenerManager.dispatch(BaseEvent_1.BaseEvent.EVENT_FOLLOW_UP_RIGHT, this.startNumber);
              this.playRecordRight();
            } else if (this.followUpTimes >= 2) {
              this.startNumber = 1;
              TigoManager_1.default.callAppToTigoStar(this.startNumber);
              ListenerManager_1.ListenerManager.dispatch(BaseEvent_1.BaseEvent.EVENT_FOLLOW_UP_RIGHT, this.startNumber);
              this.playRecordRight();
            } else {
              ListenerManager_1.ListenerManager.dispatch(BaseEvent_1.BaseEvent.EVENT_FOLLOW_UP_WRONG, this.startNumber);
              this.playRecordWrong();
            }
            break;

           default:
            console.log("get error! error === " + data.param.error);
          }
        }
      };
      FollowUp.prototype.playRecordRight = function() {
        this.playRecordEffect(this.startNumber);
        this.followUpTimes = 0;
        this.scale.scale = 0;
        this.node.active = false;
      };
      FollowUp.prototype.playRecordWrong = function() {
        var _this = this;
        this.playRecordEffect(this.startNumber, function() {
          var bundleName = GameData_1.default.curBundleName;
          AudioManager_1.default.playEffect(bundleName, _this.textMusic, function() {
            _this.record();
          });
        });
      };
      FollowUp.prototype.playCoinAnimation = function(num) {
        this.starNow += num;
        TigoManager_1.default.callAppToTigoStar(num);
      };
      FollowUp.prototype.destroyRecordNode = function() {
        this.recordComp && this.recordComp.destroy();
      };
      FollowUp.prototype.start = function() {};
      FollowUp.prototype.onDestroy = function() {
        ListenerManager_1.ListenerManager.removeAll(this);
      };
      FollowUp.prototype.playRecordEffect = function(score, callBack) {
        var path = "followUp/res/audio/";
        var url = "";
        var mName;
        switch (score) {
         case 0:
          mName = [ "zero/its_okay", "zero/One_more_time", "zero/Oopsy" ];
          break;

         case 1:
          mName = [ "one/good_job", "one/nice_work" ];
          break;

         case 2:
          mName = [ "two/great", "two/well_done", "two/super" ];
          break;

         case 3:
          mName = [ "three/amazing", "three/bravo", "three/excellent", "three/fantastic" ];
        }
        var mid = Math.floor(Math.random() * mName.length);
        url = "" + path + mName[mid];
        var bundleName = "component";
        AudioManager_1.default.playEffect(bundleName, url, function() {
          callBack && callBack();
        });
      };
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5355\u8bcd\u56fe\u7247\u8282\u70b9"
      }) ], FollowUp.prototype, "textImg", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5355\u8bcd\u8282\u70b9"
      }) ], FollowUp.prototype, "textString", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u56fe\u7247\u8282\u70b9"
      }) ], FollowUp.prototype, "imgNode", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5355\u8bcd\u56fe\u7247\u80cc\u666f"
      }) ], FollowUp.prototype, "smallImgBg", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u52a8\u753b\u8282\u70b9"
      }) ], FollowUp.prototype, "recordNode", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u7f29\u653e\u8282\u70b9"
      }) ], FollowUp.prototype, "scale", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u5f55\u97f3\u9884\u5236\u4f53"
      }) ], FollowUp.prototype, "recordPre", void 0);
      FollowUp = __decorate([ ccclass ], FollowUp);
      return FollowUp;
    }(cc.Component);
    exports.default = FollowUp;
    cc._RF.pop();
  }, {
    "../../../../scripts/GameConfig": void 0,
    "../../../../scripts/GameData": void 0,
    "../../../commonRes/scripts/CommonResEnum": void 0,
    "../../../kit/TigoManager": void 0,
    "../../../kit/assets/AssetsManger": void 0,
    "../../../kit/audio/AudioManager": void 0,
    "../../../kit/event/BaseEvent": void 0,
    "../../../kit/event/ListenerManager": void 0,
    "./recordAin": "recordAin"
  } ],
  recordAin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b12107oQEZI6LV9TdZg7cEl", "recordAin");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var recordAin = function(_super) {
      __extends(recordAin, _super);
      function recordAin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.micSpine = null;
        return _this;
      }
      recordAin.prototype.InitAniFun = function(sec) {
        cc.log("\u5f55\u97f3 sec == " + sec);
        var ts = 10 / sec;
        this.micSpine.clearTracks();
        this.micSpine.setToSetupPose();
        this.micSpine.setAnimation(0, "idle2", false);
        this.micSpine.timeScale = ts;
      };
      __decorate([ property(sp.Skeleton) ], recordAin.prototype, "micSpine", void 0);
      recordAin = __decorate([ ccclass ], recordAin);
      return recordAin;
    }(cc.Component);
    exports.default = recordAin;
    cc._RF.pop();
  }, {} ]
}, {}, [ "CommonEffects", "DragComponent", "coinBoard", "feedBackCtr", "RepeatAfterMeAudio", "followUp", "recordAin", "HandCtr", "GameCompBase", "Point", "SpineUtils", "Util", "TransferMain", "VoiceTools", "WordTool" ]);