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
  W0D1Game1Ctrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e34bfECWxxKh7JzQBbEVr4p", "W0D1Game1Ctrl");
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
    var GameCompBase_1 = require("../../../module/component/scripts/GameCompBase");
    var AssetsManger_1 = require("../../../module/kit/assets/AssetsManger");
    var AudioManager_1 = require("../../../module/kit/audio/AudioManager");
    var ListenerManager_1 = require("../../../module/kit/event/ListenerManager");
    var W0D1Game1Map_1 = require("./W0D1Game1Map");
    var W0D1Game1Narrator_1 = require("./W0D1Game1Narrator");
    var W0D1Game1Player_1 = require("./W0D1Game1Player");
    var W0D1Game1Touch_1 = require("./W0D1Game1Touch");
    var GameState;
    (function(GameState) {
      GameState["onGameDrag"] = "onGameDrag";
      GameState["onGameClick"] = "onGameClick";
    })(GameState || (GameState = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var W0D1Game1Ctrl = function(_super) {
      __extends(W0D1Game1Ctrl, _super);
      function W0D1Game1Ctrl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.controlNodeMap = [ "A", "B", "C", "D", "E", "F" ];
        _this.currentCheckNode = "";
        _this.currentLevel = 1;
        _this.currentGameState = GameState.onGameDrag;
        return _this;
      }
      Object.defineProperty(W0D1Game1Ctrl.prototype, "checkNode", {
        get: function() {
          return this.map.node.getChildByName("controlNode_" + this.currentCheckNode);
        },
        enumerable: false,
        configurable: true
      });
      W0D1Game1Ctrl.prototype.onGameStart = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _a, _b, _c, _d;
          return __generator(this, function(_e) {
            switch (_e.label) {
             case 0:
              this.touchHandle = this.getComponent(W0D1Game1Touch_1.default);
              this.maskNode = this.node.getChildByName("mask");
              this.narrator = this.node.getComponent(W0D1Game1Narrator_1.default);
              _a = this;
              return [ 4, this.initTransferComponent() ];

             case 1:
              _a.transfer = _e.sent();
              _b = this;
              return [ 4, this.loadConfig() ];

             case 2:
              _b.gameConfig = _e.sent();
              _c = this;
              return [ 4, this.initColorWordComponent() ];

             case 3:
              _c.wordTool = _e.sent();
              _d = this;
              return [ 4, this.initHandComponent() ];

             case 4:
              _d.handCtrl = _e.sent();
              this.transfer.transferInit(this.transferMainEndAction.bind(this), this.transferMainStartAction.bind(this));
              this.loadGame();
              return [ 4, this.narrator.gameStart() ];

             case 5:
              _e.sent();
              return [ 4, this.map.hideMap() ];

             case 6:
              _e.sent();
              this.touchHandle.shouDian.active = true;
              this.onGuideStep();
              ListenerManager_1.ListenerManager.on("gameTouchStart", this.onTouchNode, this);
              ListenerManager_1.ListenerManager.on("onCollisionNode", this.onCollisionNode, this);
              ListenerManager_1.ListenerManager.on("onTouchEnd", this.onTouchEnd, this);
              return [ 2 ];
            }
          });
        });
      };
      W0D1Game1Ctrl.prototype.loadConfig = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          var bundle = cc.assetManager.getBundle(_this.bundleName);
          bundle.load("config/config", cc.JsonAsset, function(err, data) {
            if (err) {
              cc.error(" load config/config error!");
              resolve(null);
              return;
            }
            resolve(data.json);
          });
        });
      };
      W0D1Game1Ctrl.prototype.loadGame = function() {
        var levelNode = this.node.getChildByName("level_" + this.currentLevel);
        this.player = levelNode.getComponent(W0D1Game1Player_1.default);
        this.map = levelNode.getComponent(W0D1Game1Map_1.default);
        this.player.setConfig(this.gameConfig);
        this.narrator.player = this.player;
        this.narrator.touchHandle = this.touchHandle;
        this.narrator.gameConfig = this.gameConfig;
      };
      W0D1Game1Ctrl.prototype.onGuideStep = function() {
        this.currentCheckNode = this.controlNodeMap.splice(0, 1)[0];
        this.touchHandle.currentCheckNode = this.checkNode;
        this.maskNode.active = true;
        this.handCtrl.node.active = true;
        this.handCtrl.node.scale = .5;
        this.handCtrl.TouchCycle(cc.v2(this.maskNode.x, this.maskNode.y), cc.v2(this.checkNode.x, this.checkNode.y));
        this.map.showTigoEars();
        this.touchHandle.isCanMove = true;
      };
      W0D1Game1Ctrl.prototype.onTouchNode = function() {
        this.hideGuide();
      };
      W0D1Game1Ctrl.prototype.onCollisionNode = function() {
        var _this = this;
        var endScale = this.gameConfig.maskScal;
        var endPos = this.checkNode;
        this.touchHandle.isCanMove = false;
        this.currentGameState = GameState.onGameClick;
        this.startGuide();
        this.touchHandle.toCheckPosition(endPos, endScale, function() {
          if ("A" == _this.currentCheckNode) {
            _this.onGuideClick();
            AudioManager_1.default.playEffect(_this.bundleName, "audios/Click Now", function() {
              _this.checkNode.on(cc.Node.EventType.TOUCH_START, _this.clickAnswer, _this);
            });
            return;
          }
          _this.checkNode.on(cc.Node.EventType.TOUCH_START, _this.clickAnswer, _this);
        });
      };
      W0D1Game1Ctrl.prototype.onTouchEnd = function() {
        this.startGuide();
      };
      W0D1Game1Ctrl.prototype.startGuide = function() {
        var _this = this;
        cc.log("--- \u5f00\u59cb\u5012\u8ba1\u65f6");
        this.scheduleOnce(function() {
          cc.log("--- ");
          _this.currentGameState == GameState.onGameDrag ? _this.onGuideDrag() : _this.currentGameState == GameState.onGameClick && _this.onGuideClick();
        }, 5);
      };
      W0D1Game1Ctrl.prototype.hideGuide = function() {
        this.unscheduleAllCallbacks();
        this.handCtrl.node.active = false;
      };
      W0D1Game1Ctrl.prototype.onGuideDrag = function() {
        this.handCtrl.node.active = true;
        var startPos = cc.v2(this.touchHandle.moveNode.x, this.touchHandle.moveNode.y);
        var endPos = cc.v2(this.checkNode.x, this.checkNode.y);
        this.handCtrl.TouchCycle(startPos, endPos);
      };
      W0D1Game1Ctrl.prototype.onGuideClick = function() {
        this.handCtrl.node.active = true;
        this.handCtrl.node.position = this.checkNode.position;
        this.handCtrl.ClickCycle();
      };
      W0D1Game1Ctrl.prototype.clickAnswer = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.hideGuide();
              this.checkNode.off(cc.Node.EventType.TOUCH_START, this.clickAnswer, this);
              this.checkNode.active = false;
              if (!("A" == this.currentCheckNode)) return [ 3, 2 ];
              this.map["answer" + this.currentCheckNode]();
              return [ 4, this.narrator["answer" + this.currentCheckNode](this.wordTool) ];

             case 1:
              _a.sent();
              return [ 3, 5 ];

             case 2:
              "F" == this.currentCheckNode && this.touchHandle.openAll();
              return [ 4, this.narrator["answer" + this.currentCheckNode](this.wordTool) ];

             case 3:
              _a.sent();
              return [ 4, this.map["answer" + this.currentCheckNode](this.gameConfig) ];

             case 4:
              _a.sent();
              _a.label = 5;

             case 5:
              this.currentGameState = GameState.onGameDrag;
              if (this.controlNodeMap.length <= 0) {
                this.gameEnd();
                return [ 2 ];
              }
              this.currentCheckNode = this.controlNodeMap.splice(0, 1)[0];
              cc.log(this.currentCheckNode);
              if ("D" == this.currentCheckNode) {
                this.currentLevel++;
                this.transfer.startTransferAni();
                return [ 2 ];
              }
              this.touchHandle.currentCheckNode = this.checkNode;
              this.touchHandle.canMove();
              this.startGuide();
              this.map["prompt" + this.currentCheckNode]();
              return [ 2 ];
            }
          });
        });
      };
      W0D1Game1Ctrl.prototype.transferMainEndAction = function() {
        this.map["prompt" + this.currentCheckNode]();
      };
      W0D1Game1Ctrl.prototype.transferMainStartAction = function() {
        return __awaiter(this, void 0, void 0, function() {
          var prefab, cloneNode;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.map.node.destroy();
              return [ 4, AssetsManger_1.default.instance.loadPrefab("prefabs/level_2", this.bundleName) ];

             case 1:
              prefab = _a.sent();
              cloneNode = cc.instantiate(prefab);
              this.node.addChild(cloneNode);
              cloneNode.setSiblingIndex(0);
              this.loadGame();
              this.touchHandle.currentCheckNode = this.checkNode;
              this.touchHandle.onReset();
              return [ 2 ];
            }
          });
        });
      };
      W0D1Game1Ctrl = __decorate([ ccclass ], W0D1Game1Ctrl);
      return W0D1Game1Ctrl;
    }(GameCompBase_1.default);
    exports.default = W0D1Game1Ctrl;
    cc._RF.pop();
  }, {
    "../../../module/component/scripts/GameCompBase": void 0,
    "../../../module/kit/assets/AssetsManger": void 0,
    "../../../module/kit/audio/AudioManager": void 0,
    "../../../module/kit/event/ListenerManager": void 0,
    "./W0D1Game1Map": "W0D1Game1Map",
    "./W0D1Game1Narrator": "W0D1Game1Narrator",
    "./W0D1Game1Player": "W0D1Game1Player",
    "./W0D1Game1Touch": "W0D1Game1Touch"
  } ],
  W0D1Game1Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8ea6cSNGNGw7ZuF2wBcDGS", "W0D1Game1Map");
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
    var SpineUtils_1 = require("../../../module/component/scripts/SpineUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var W0D1Game1Map = function(_super) {
      __extends(W0D1Game1Map, _super);
      function W0D1Game1Map() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      W0D1Game1Map.prototype.start = function() {
        var hopperNode = this.node.getChildByName("S_hopper_zheng");
        if (hopperNode) {
          var spine = hopperNode.getComponent(sp.Skeleton);
          var track = spine.setAnimation(0, "hopper_zheng_huaxiangtanchu", false);
          track.animationStart = 0;
          track.animationEnd = 0;
        }
        var baoxiang = this.node.getChildByName("baoxiang");
        if (baoxiang) {
          var spine = baoxiang.getComponent(sp.Skeleton);
          var track = spine.setAnimation(0, "hoppertanchu", false);
          track.animationStart = 0;
          track.animationEnd = 0;
        }
      };
      W0D1Game1Map.prototype.hideMap = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          var zhuhuo1 = _this.node.getChildByName("zhuhuo1").getComponent(sp.Skeleton);
          var zhuhuo2 = _this.node.getChildByName("zhuhuo2").getComponent(sp.Skeleton);
          SpineUtils_1.SpineUtils.playSpine(zhuhuo1, "chuimie", false);
          SpineUtils_1.SpineUtils.playSpine(zhuhuo2, "chuimie", false, function() {
            resolve();
          });
        });
      };
      W0D1Game1Map.prototype.showTigoEars = function() {
        var tigo_tanchu = this.node.getChildByName("tigo_tanchu").getComponent(sp.Skeleton);
        SpineUtils_1.SpineUtils.playSpine(tigo_tanchu, "tigo_43_tanchu", true);
      };
      W0D1Game1Map.prototype.answerA = function() {
        cc.log("00------");
        var tigo_tanchu = this.node.getChildByName("tigo_tanchu").getComponent(sp.Skeleton);
        SpineUtils_1.SpineUtils.playSpine(tigo_tanchu, "tigo_43_weitanchu", false);
      };
      W0D1Game1Map.prototype.answerB = function(config) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var spine, hopperNode, track;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                cc.log("BBB------");
                spine = this.node.getChildByName("hopper").getComponent(sp.Skeleton);
                spine.node.active = true;
                hopperNode = this.node.getChildByName("S_hopper_zheng");
                track = hopperNode.getComponent(sp.Skeleton).setAnimation(0, "hopper_zheng_huaxiangtanchu", false);
                track.animationStart = 0;
                track.animationEnd = 0;
                cc.tween(spine.node).delay(.1).to(.2, {
                  x: 287,
                  y: -348
                }).start();
                return [ 4, SpineUtils_1.SpineUtils.playSpineAsync(spine, {
                  name: "hopper_zheng_huaxiangtiaochu",
                  loop: false
                }) ];

               case 1:
                _a.sent();
                return [ 4, SpineUtils_1.SpineUtils.playSpineAsync(spine, {
                  name: "hopper_zheng_dazhaohu",
                  loop: false
                }) ];

               case 2:
                _a.sent();
                return [ 4, SpineUtils_1.SpineUtils.playSpineAsync(spine, {
                  name: "hopper_34_wenweidao",
                  loop: false
                }) ];

               case 3:
                _a.sent();
                SpineUtils_1.SpineUtils.playSpine(spine, "hopper_34_paobu", true);
                cc.tween(spine.node).to(1.3, {
                  x: cc.winSize.width / 2 + 300
                }).call(function() {
                  spine.node.active = false;
                  resolve();
                }).start();
                return [ 2 ];
              }
            });
          });
        });
      };
      W0D1Game1Map.prototype.answerC = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var spine;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    spine = this.node.getChildByName("tigo_zheng").getComponent(sp.Skeleton);
                    spine.node.active = true;
                    return [ 4, SpineUtils_1.SpineUtils.playSpineAsync(spine, {
                      name: "chuxian",
                      loop: false
                    }) ];

                   case 1:
                    _a.sent();
                    return [ 4, SpineUtils_1.SpineUtils.playSpineAsync(spine, {
                      name: "jinghuang",
                      loop: false
                    }) ];

                   case 2:
                    _a.sent();
                    SpineUtils_1.SpineUtils.playSpine(spine, "zou", true);
                    spine.timeScale = 1.5;
                    cc.tween(spine.node).to(5, {
                      x: cc.winSize.width / 2 + 150
                    }).call(function() {
                      resolve();
                    }).start();
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      W0D1Game1Map.prototype.answerD = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var hopper_chuchang, hopper_keng;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    hopper_chuchang = this.node.getChildByName("hopper_chuchang").getComponent(sp.Skeleton);
                    hopper_keng = this.node.getChildByName("hopper_keng").getComponent(sp.Skeleton);
                    return [ 4, SpineUtils_1.SpineUtils.playSpineAsync(hopper_chuchang, {
                      name: "hopper_zheng_youdazhaohu",
                      loop: false
                    }) ];

                   case 1:
                    _a.sent();
                    hopper_chuchang.node.active = false;
                    hopper_keng.node.active = true;
                    return [ 4, SpineUtils_1.SpineUtils.playSpineAsync(hopper_keng, {
                      name: "hopper_34_diaoruxianjing",
                      loop: false
                    }) ];

                   case 2:
                    _a.sent();
                    resolve();
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      W0D1Game1Map.prototype.answerE = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              var tigoSpine = _this.node.getChildByName("tigo").getComponent(sp.Skeleton);
              SpineUtils_1.SpineUtils.playSpine(tigoSpine, "tigo_ce_luodi", false, null, 1, "tigo_zheng_daiji", true);
              cc.tween(tigoSpine.node).delay(.9).to(.2, {
                x: -34,
                y: -357
              }).delay(1).call(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                     case 0:
                      return [ 4, SpineUtils_1.SpineUtils.playSpineAsync(tigoSpine, {
                        name: "tigo_ce_shuashuai",
                        loop: false
                      }) ];

                     case 1:
                      _a.sent();
                      SpineUtils_1.SpineUtils.playSpine(tigoSpine, "tigo_zheng_daiji", true);
                      resolve();
                      return [ 2 ];
                    }
                  });
                });
              }).start();
            }) ];
          });
        });
      };
      W0D1Game1Map.prototype.answerF = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var hopper_diaochu, baoxiang, spine, track, tigo;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                hopper_diaochu = this.node.getChildByName("hopper_diaochu").getComponent(sp.Skeleton);
                hopper_diaochu.node.active = true;
                baoxiang = this.node.getChildByName("baoxiang");
                spine = baoxiang.getComponent(sp.Skeleton);
                track = spine.setAnimation(0, "hoppertanchu", false);
                track.animationStart = 0;
                track.animationEnd = 0;
                return [ 4, SpineUtils_1.SpineUtils.playSpineAsync(hopper_diaochu, {
                  name: "hopper_zheng_youdazhaohu",
                  loop: false
                }) ];

               case 1:
                _a.sent();
                cc.tween(hopper_diaochu.node).delay(.1).to(.2, {
                  x: 190
                }).start();
                return [ 4, SpineUtils_1.SpineUtils.playSpineAsync(hopper_diaochu, {
                  name: "hopper_zheng_huaxiangtiaochu",
                  loop: false
                }) ];

               case 2:
                _a.sent();
                return [ 4, SpineUtils_1.SpineUtils.playSpineAsync(spine, {
                  name: "baoxiangdakai",
                  loop: false
                }) ];

               case 3:
                _a.sent();
                SpineUtils_1.SpineUtils.playSpine(hopper_diaochu, "hopper_34_zuichan", true);
                tigo = this.node.getChildByName("tigo").getComponent(sp.Skeleton);
                SpineUtils_1.SpineUtils.playSpine(tigo, "tigo_ce_wunai", false, function() {
                  resolve();
                  tigo.setMix("tigo_ce_wunai", "tigo_ce_wunai_idle", .3);
                }, 1, "tigo_ce_wunai_idle", true);
                return [ 2 ];
              }
            });
          });
        });
      };
      W0D1Game1Map.prototype.promptB = function() {
        var spine = this.node.getChildByName("S_hopper_zheng").getComponent(sp.Skeleton);
        SpineUtils_1.SpineUtils.playSpine(spine, "hopper_zheng_huaxiangtanchu", true);
      };
      W0D1Game1Map.prototype.promptC = function() {
        var spine = this.node.getChildByName("tigo_zheng").getComponent(sp.Skeleton);
        SpineUtils_1.SpineUtils.playSpine(spine, "daiji", true);
      };
      W0D1Game1Map.prototype.promptD = function() {};
      W0D1Game1Map.prototype.promptE = function() {
        var tigoSpine = this.node.getChildByName("tigo").getComponent(sp.Skeleton);
        tigoSpine.node.active = true;
        SpineUtils_1.SpineUtils.playSpine(tigoSpine, "tigo_ce_guadiaodeng", false);
        cc.tween(tigoSpine.node).to(1, {
          x: -208.626,
          y: 35
        }).call(function() {
          SpineUtils_1.SpineUtils.playSpine(tigoSpine, "tigo_ce_luodidaiji", true);
        }).start();
      };
      W0D1Game1Map.prototype.promptF = function() {
        var _this = this;
        var hopper_diaochu = this.node.getChildByName("hopper_diaochu").getComponent(sp.Skeleton);
        SpineUtils_1.SpineUtils.playSpine(hopper_diaochu, "hopper_34_anmenchu");
        cc.tween(hopper_diaochu.node).to(.8, {
          x: 442,
          y: -357
        }).call(function() {
          hopper_diaochu.node.active = false;
          var baoxiang = _this.node.getChildByName("baoxiang");
          var spine = baoxiang.getComponent(sp.Skeleton);
          spine.setAnimation(0, "hoppertanchu", true);
        }).start();
      };
      W0D1Game1Map = __decorate([ ccclass ], W0D1Game1Map);
      return W0D1Game1Map;
    }(cc.Component);
    exports.default = W0D1Game1Map;
    cc._RF.pop();
  }, {
    "../../../module/component/scripts/SpineUtils": void 0
  } ],
  W0D1Game1Narrator: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "17e5ePBjPRMhICRKGLOv9ur", "W0D1Game1Narrator");
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
    var AudioManager_1 = require("../../../module/kit/audio/AudioManager");
    var GameData_1 = require("../../../scripts/GameData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var W0D1Game1Narrator = function(_super) {
      __extends(W0D1Game1Narrator, _super);
      function W0D1Game1Narrator() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      W0D1Game1Narrator.prototype.gameStart = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              cc.tween(this.node).delay(.5).call(function() {
                AudioManager_1.default.playEffect(GameData_1.default.curBundleName, _this.gameConfig.Iamtigo);
              }).start();
              return [ 4, this.player.onHello() ];

             case 1:
              _a.sent();
              return [ 4, this.player.onHuaiXiao() ];

             case 2:
              _a.sent();
              return [ 4, this.player.onHide() ];

             case 3:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      W0D1Game1Narrator.prototype.answerA = function(wordTool) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var config;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                cc.log("\u9009\u62e9A");
                config = this.gameConfig.level1;
                this.player.setPlayerPosition(config.checkAPos.x, config.checkAPos.y);
                wordTool.showWordAni(config.word[0], cc.v2(0, -70));
                AudioManager_1.default.playEffect(GameData_1.default.curBundleName, "audios/" + config.word[0]);
                this.touchHandle.followTarget(-175, .3, .6, -195);
                return [ 4, this.player.onJumpOutOfDoor() ];

               case 1:
                _a.sent();
                return [ 4, this.player.onHuaiXiao() ];

               case 2:
                _a.sent();
                return [ 4, this.player.onHideBySmoke() ];

               case 3:
                _a.sent();
                resolve();
                return [ 2 ];
              }
            });
          });
        });
      };
      W0D1Game1Narrator.prototype.answerB = function(wordTool) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var config;
            var _this = this;
            return __generator(this, function(_a) {
              config = this.gameConfig.level1;
              this.touchHandle.followTarget(287, .1, .4, -205);
              this.scheduleOnce(function() {
                wordTool.showWordAni(config.word[1], cc.v2(0, -70));
                AudioManager_1.default.playEffect(GameData_1.default.curBundleName, "audios/" + config.word[1]);
              }, .7);
              this.scheduleOnce(function() {
                _this.touchHandle.followTarget(cc.winSize.width / 2, .2, .8, null, function() {
                  cc.tween(_this.touchHandle.moveNode).to(.4, {
                    x: cc.winSize.width / 2 - 150
                  }).start();
                });
              }, 4.3);
              resolve();
              return [ 2 ];
            });
          });
        });
      };
      W0D1Game1Narrator.prototype.answerC = function(wordTool) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var config;
            return __generator(this, function(_a) {
              config = this.gameConfig.level1;
              this.scheduleOnce(function() {
                wordTool.showWordAni(config.word[2], cc.v2(0, -70));
                AudioManager_1.default.playEffect(GameData_1.default.curBundleName, "audios/" + config.word[2]);
              }, 1.5);
              this.touchHandle.followTarget(cc.winSize.width / 2 + 150, 4, 5);
              resolve();
              return [ 2 ];
            });
          });
        });
      };
      W0D1Game1Narrator.prototype.answerD = function(wordTool) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var config;
                return __generator(this, function(_a) {
                  config = this.gameConfig.level2;
                  wordTool.showWordAni(config.word[0], cc.v2(0, -70));
                  AudioManager_1.default.playEffect(GameData_1.default.curBundleName, "audios/" + config.word[0]);
                  this.touchHandle.followTarget(-322, 1.8, 3);
                  resolve();
                  return [ 2 ];
                });
              });
            }) ];
          });
        });
      };
      W0D1Game1Narrator.prototype.answerE = function(wordTool) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var config;
                return __generator(this, function(_a) {
                  config = this.gameConfig.level2;
                  this.scheduleOnce(function() {
                    wordTool.showWordAni(config.word[1], cc.v2(0, -70));
                    AudioManager_1.default.playEffect(GameData_1.default.curBundleName, "audios/" + config.word[1]);
                  }, 1.4);
                  cc.log("EEEE");
                  this.touchHandle.followTarget(-31, 1, .2, -185);
                  resolve();
                  return [ 2 ];
                });
              });
            }) ];
          });
        });
      };
      W0D1Game1Narrator.prototype.answerF = function(wordTool) {
        return __awaiter(this, void 0, void 0, function() {
          var config;
          return __generator(this, function(_a) {
            config = this.gameConfig.level2;
            this.touchHandle.followTarget(config.jumpFEndX, 1.5, .2);
            this.scheduleOnce(function() {
              wordTool.showWordAni(config.word[2], cc.v2(0, -70));
              AudioManager_1.default.playEffect(GameData_1.default.curBundleName, "audios/" + config.word[2]);
            }, .4);
            return [ 2 ];
          });
        });
      };
      W0D1Game1Narrator = __decorate([ ccclass ], W0D1Game1Narrator);
      return W0D1Game1Narrator;
    }(cc.Component);
    exports.default = W0D1Game1Narrator;
    cc._RF.pop();
  }, {
    "../../../module/kit/audio/AudioManager": void 0,
    "../../../scripts/GameData": void 0
  } ],
  W0D1Game1Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "465bccrNRhDuKa1ku+2fSoh", "W0D1Game1Player");
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
    var SpineUtils_1 = require("../../../module/component/scripts/SpineUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var W0D1Game1Player = function(_super) {
      __extends(W0D1Game1Player, _super);
      function W0D1Game1Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameLevel = 1;
        _this.playerSpine = null;
        return _this;
      }
      W0D1Game1Player.prototype.onLoad = function() {
        var playereNode = this.node.getChildByName("player");
        if (!playereNode) return;
        this.playerSpine = playereNode.getComponentInChildren(sp.Skeleton);
      };
      W0D1Game1Player.prototype.setConfig = function(config) {
        this.gameConfig = config["level" + this.gameLevel];
      };
      W0D1Game1Player.prototype.onIdle = function() {
        SpineUtils_1.SpineUtils.playSpine(this.playerSpine, this.gameConfig.daiji, true);
      };
      W0D1Game1Player.prototype.setPlayerPosition = function(x, y) {
        var playereNode = this.node.getChildByName("player");
        playereNode.x = x;
        playereNode.y = y;
      };
      W0D1Game1Player.prototype.onHello = function() {
        var spineConfig = {
          name: this.gameConfig.animConfig.huishoudazhaohu,
          loop: false
        };
        return SpineUtils_1.SpineUtils.playSpineAsync(this.playerSpine, spineConfig);
      };
      W0D1Game1Player.prototype.onSpeak = function() {
        var spineConfig = {
          name: this.gameConfig.animConfig.ziwojieshao,
          loop: false
        };
        return SpineUtils_1.SpineUtils.playSpineAsync(this.playerSpine, spineConfig);
      };
      W0D1Game1Player.prototype.onHide = function() {
        var spineConfig = {
          name: this.gameConfig.animConfig.shanxianxiaoshi,
          loop: false
        };
        return SpineUtils_1.SpineUtils.playSpineAsync(this.playerSpine, spineConfig);
      };
      W0D1Game1Player.prototype.onHideBySmoke = function() {
        var spineConfig = {
          name: this.gameConfig.animConfig.touzhiyanwudan,
          loop: false
        };
        return SpineUtils_1.SpineUtils.playSpineAsync(this.playerSpine, spineConfig);
      };
      W0D1Game1Player.prototype.onHuaiXiao = function() {
        var spineConfig = {
          name: this.gameConfig.animConfig.minzuihuaixiao,
          loop: false
        };
        return SpineUtils_1.SpineUtils.playSpineAsync(this.playerSpine, spineConfig);
      };
      W0D1Game1Player.prototype.onJumpOutOfDoor = function() {
        var playereNode = this.node.getChildByName("player");
        cc.tween(playereNode).delay(.3).to(.6, {
          x: -175,
          y: -195
        }).start();
        var spineConfig = {
          name: this.gameConfig.animConfig.congmenfengtiaochu,
          loop: false
        };
        return SpineUtils_1.SpineUtils.playSpineAsync(this.playerSpine, spineConfig);
      };
      __decorate([ property ], W0D1Game1Player.prototype, "gameLevel", void 0);
      W0D1Game1Player = __decorate([ ccclass ], W0D1Game1Player);
      return W0D1Game1Player;
    }(cc.Component);
    exports.default = W0D1Game1Player;
    cc._RF.pop();
  }, {
    "../../../module/component/scripts/SpineUtils": void 0
  } ],
  W0D1Game1Touch: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef073PxV0JJsbkXBSfZYsSv", "W0D1Game1Touch");
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
    var ListenerManager_1 = require("../../../module/kit/event/ListenerManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var W0D1Game1Touch = function(_super) {
      __extends(W0D1Game1Touch, _super);
      function W0D1Game1Touch() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shouDian = null;
        _this.isCanMove = false;
        return _this;
      }
      Object.defineProperty(W0D1Game1Touch.prototype, "currentCheckNode", {
        set: function(value) {
          this._currentCheckNode = value;
        },
        enumerable: false,
        configurable: true
      });
      W0D1Game1Touch.prototype.onLoad = function() {
        this.moveNode = this.node.getChildByName("moveNode");
        this.maskNdoe = this.node.getChildByName("mask");
        cc.log("-------");
        this.moveNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.moveNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTrouchMove, this);
        this.moveNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEend, this);
        this.moveNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEend, this);
      };
      W0D1Game1Touch.prototype.onReset = function() {
        this.canMove();
        this.moveNode.position = cc.v3(0, 0);
        this.maskNdoe.position = cc.v3(0, 0);
      };
      W0D1Game1Touch.prototype.canMove = function() {
        this.moveNode.active = true;
        this.isCanMove = true;
        cc.tween(this.maskNdoe).to(.2, {
          scale: 1
        }).start();
      };
      W0D1Game1Touch.prototype.openAll = function() {
        this.shouDian.active = false;
        cc.tween(this.maskNdoe).delay(1.4).to(.5, {
          scale: 12
        }).start();
      };
      W0D1Game1Touch.prototype.onTouchStart = function(e) {
        cc.log("touch");
        if (!this.isCanMove) return;
        ListenerManager_1.ListenerManager.dispatch("gameTouchStart");
      };
      W0D1Game1Touch.prototype.onTrouchMove = function(e) {
        if (!this.isCanMove) return;
        var pos = e.getDelta();
        this.moveNode.x += pos.x;
        this.moveNode.y += pos.y;
        if (this.checkCollision()) {
          this.moveNode.active = false;
          ListenerManager_1.ListenerManager.dispatch("onCollisionNode");
        }
      };
      W0D1Game1Touch.prototype.onTouchEend = function() {
        if (!this.isCanMove) return;
        ListenerManager_1.ListenerManager.dispatch("onTouchEnd");
      };
      W0D1Game1Touch.prototype.toCheckPosition = function(endPos, endScale, cb) {
        this.moveNode.position = endPos;
        cc.tween(this.maskNdoe).to(.4, {
          x: endPos.x,
          y: endPos.y,
          scale: endScale
        }).call(function() {
          cb && cb();
        }).start();
      };
      W0D1Game1Touch.prototype.followTarget = function(endx, delay, dur, endY, cb) {
        void 0 === delay && (delay = .3);
        void 0 === dur && (dur = .6);
        var prop = {
          x: endx
        };
        if (endY) {
          this.moveNode.y = endY;
          prop["y"] = endY;
        }
        cc.tween(this.maskNdoe).delay(delay).to(dur, prop).call(function() {
          cb && cb();
        }).start();
        this.moveNode.x = endx;
      };
      W0D1Game1Touch.prototype.checkCollision = function() {
        var x = this.moveNode.x;
        var y = this.moveNode.y;
        x > cc.winSize.width / 2 - 100 ? this.moveNode.x = cc.winSize.width / 2 - 100 : x < -cc.winSize.width / 2 + 100 && (this.moveNode.x = -cc.winSize.width / 2 + 100);
        y > cc.winSize.height / 2 - 100 ? this.moveNode.y = cc.winSize.height / 2 - 100 : y < -cc.winSize.height / 2 + 100 && (this.moveNode.y = -cc.winSize.height / 2 + 100);
        var temp = this._currentCheckNode.getBoundingBox();
        var wordPos = this.moveNode.parent.convertToWorldSpaceAR(this.moveNode.position);
        var nodePos = this.moveNode.parent.convertToNodeSpaceAR(wordPos);
        var flag = temp.contains(cc.v2(nodePos.x, nodePos.y));
        return flag;
      };
      W0D1Game1Touch.prototype.lookAt = function() {
        var endPos = this.maskNdoe.position;
        var startPos = this.shouDian.position;
        var dir = endPos.sub(startPos);
        var radian = cc.v2(dir.x, dir.y).signAngle(cc.v2(0, 1));
        var angle = radian / Math.PI * 180;
        this.shouDian.angle = -angle;
      };
      W0D1Game1Touch.prototype.update = function(dt) {
        this.lookAt();
        if (!this.isCanMove) return;
        this.maskNdoe.position = this.moveNode.position;
      };
      W0D1Game1Touch.prototype.onDestroy = function() {
        this.moveNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.moveNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTrouchMove, this);
        this.moveNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEend, this);
        this.moveNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEend, this);
      };
      __decorate([ property(cc.Node) ], W0D1Game1Touch.prototype, "shouDian", void 0);
      W0D1Game1Touch = __decorate([ ccclass ], W0D1Game1Touch);
      return W0D1Game1Touch;
    }(cc.Component);
    exports.default = W0D1Game1Touch;
    cc._RF.pop();
  }, {
    "../../../module/kit/event/ListenerManager": void 0
  } ]
}, {}, [ "W0D1Game1Ctrl", "W0D1Game1Map", "W0D1Game1Narrator", "W0D1Game1Player", "W0D1Game1Touch" ]);