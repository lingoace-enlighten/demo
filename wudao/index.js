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
  " WudaoAssembly": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "318534HJeJFK7KJsSZJLjwu", " WudaoAssembly");
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
    var coinBoard_1 = require("../../../Scripts/common/coinBoard");
    var GameData_1 = require("../../../Scripts/common/GameData");
    var Point_1 = require("../../../Scripts/common/Point");
    var BattleAnimation_1 = require("./BattleAnimation");
    var Drag_1 = require("./Drag");
    var EventConst_1 = require("./EventConst");
    var EventMng_1 = require("./EventMng");
    var JudgeTree_1 = require("./JudgeTree");
    var Level_1 = require("./Level");
    var QuestionBoardBottom_1 = require("./monster/QuestionBoardBottom");
    var Read_1 = require("./Read");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WudaoAssembly = function(_super) {
      __extends(WudaoAssembly, _super);
      function WudaoAssembly() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeLevel = null;
        _this.nodeQuestionBoard = null;
        _this.nodeQuestionBoardBottom = null;
        _this.nodeQuestionBoardBg = null;
        _this.nodeQuestionBoardType1 = null;
        _this.nodeQuestionBoardType2 = null;
        _this.nodeQuestionBoardType3 = null;
        _this.nodeMask = null;
        _this.nodeCoin = null;
        _this.vsNode = null;
        _this.gasNode = null;
        _this.source_bg = null;
        _this.coinCom = null;
        _this.fun_Judge = null;
        _this.fun_Drag = null;
        _this.fun_Record = null;
        _this.fun_level = null;
        _this.fun_battleAnim = null;
        _this.num_nowLevel = 1;
        _this.listTypeNode = [];
        _this.list_nowData = [ [ "Aa", "Bb" ], [ "Aa", "Bb" ], [ "ant", "bee" ], [ "apple", "bear" ], [ "A", "a" ], [ "B", "b" ], [ "Aa" ], [ "Bb" ] ];
        _this.list_levelVideoName = [ [ {
          audio: "01 mango",
          word: "mango"
        } ], [ {
          audio: "03 banana",
          word: "banana"
        } ], [ {
          audio: "05 coconut",
          word: "coconut"
        } ] ];
        _this.list_answer = [ "a", "b", "c", "b" ];
        _this.num_wrongCount = 0;
        _this.num_starNow = 0;
        _this.isStartGame = false;
        return _this;
      }
      WudaoAssembly.prototype.onLoad = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            Point_1.default.instance.init("\u8d2a\u5403\u602a\u517d\u653b\u9632\u6218", 6);
            this.setMask(true);
            EventMng_1.default.on(EventConst_1.GameEvent.ANSWER_COMPLETED, this.OnAnswerCompleted, this);
            EventMng_1.default.on(EventConst_1.GameEvent.CLICK_SELECT, this.OnClickSelect, this);
            EventMng_1.default.on(EventConst_1.GameEvent.AUDIO_PLAYER_START, this.OnAudioStart, this);
            EventMng_1.default.on(EventConst_1.GameEvent.AUDIO_PLAYER_FINISH, this.OnAudioFinish, this);
            EventMng_1.default.on(EventConst_1.GameEvent.VS_COMPLETE, this.OnVsComplete, this);
            EventMng_1.default.on(EventConst_1.GameEvent.BOTTOM_SELECT_COMPLETE, this.onBottomSelectComplete, this);
            EventMng_1.default.on(EventConst_1.GameEvent.GAS_STARTUP_COMPLETE, this.onGasStartupComplete, this);
            this.fun_Judge = this.nodeQuestionBoardType1.getComponent(JudgeTree_1.default);
            this.fun_Drag = this.nodeQuestionBoardType2.getComponent(Drag_1.default);
            this.fun_Record = this.nodeQuestionBoardType3.getComponent(Read_1.default);
            this.fun_battleAnim = this.node.getComponent(BattleAnimation_1.default);
            this.fun_level = this.nodeLevel.getComponent(Level_1.default);
            this.listTypeNode = [ this.nodeQuestionBoardType1, this.nodeQuestionBoardType2, this.nodeQuestionBoardType3 ];
            this.coinCom = this.nodeCoin.getComponent(coinBoard_1.default);
            window.webframe.Notify.listen("callCocos_loaded", this.OnStartGame.bind(this));
            this.fun_battleAnim.RoleJumpAnimation(function() {});
            return [ 2 ];
          });
        });
      };
      WudaoAssembly.prototype.OnVsComplete = function() {
        this.source_bg.play();
        this.fun_level.setLevel(this.num_nowLevel);
        this.initNowLevel();
      };
      WudaoAssembly.prototype.OnStartGame = function() {
        cc.log("OnStartGame", this.isStartGame);
        if (!this.isStartGame) {
          this.isStartGame = true;
          this.StartGame();
        }
      };
      WudaoAssembly.prototype.start = function() {
        var _this = this;
        this.vsNode.active = false;
        cc.log("cc.sys.isMobile", cc.sys.isMobile);
        cc.sys.isMobile ? this.scheduleOnce(function() {
          if (!_this.isStartGame) {
            _this.isStartGame = true;
            console.log("\u7b49\u5f85\u4e867\u79d2");
            _this.StartGame();
          }
        }, 7) : this.StartGame();
      };
      WudaoAssembly.prototype.onDestroy = function() {
        window.webframe.Notify.trigger("callCocos_loaded", this.OnStartGame.bind(this));
      };
      WudaoAssembly.prototype.StartGame = function() {
        Point_1.default.instance.gameStart();
        this.playVsAnimation();
      };
      WudaoAssembly.prototype.playVsAnimation = function() {
        this.vsNode.active = true;
      };
      WudaoAssembly.prototype.initNowLevel = function() {
        Point_1.default.instance.roundStart(this.num_nowLevel);
        this.listTypeNode.map(function(node) {
          node.active = false;
        });
        if (-1 != [ 1, 2, 3 ].indexOf(this.num_nowLevel)) {
          this.listTypeNode[0].active = true;
          this.fun_Judge.Init(this.list_nowData[this.num_nowLevel - 1][0], this.list_nowData[this.num_nowLevel - 1][1], this.list_levelVideoName[this.num_nowLevel - 1][0], this.num_nowLevel, this.list_answer[this.num_nowLevel - 1]);
        } else if (-1 != [ 4, 5, 6 ].indexOf(this.num_nowLevel)) {
          this.listTypeNode[1].active = true;
          this.fun_Drag.Init(this.list_nowData[this.num_nowLevel - 1][0], this.list_nowData[this.num_nowLevel - 1][1], this.list_levelVideoName[this.num_nowLevel - 1][0], this.list_levelVideoName[this.num_nowLevel - 1][1]);
        } else if (-1 != [ 7, 8 ].indexOf(this.num_nowLevel)) {
          this.listTypeNode[2].active = true;
          this.fun_Record.Init(this.list_nowData[this.num_nowLevel - 1][0], this.num_nowLevel);
        }
        this.nodeQuestionBoardBg.active = true;
        this.fun_battleAnim.bgShow(this.nodeQuestionBoardBg, null);
        this.fun_battleAnim.boardEnter(this.nodeQuestionBoard, function() {});
      };
      WudaoAssembly.prototype.initBottomLevel = function() {
        this.nodeQuestionBoardBottom.active = true;
        this.nodeQuestionBoardBottom.getComponent(QuestionBoardBottom_1.default).randomQuestion();
      };
      WudaoAssembly.prototype.onDisable = function() {
        EventMng_1.default.off(EventConst_1.GameEvent.ANSWER_COMPLETED, this.OnAnswerCompleted, this);
        EventMng_1.default.off(EventConst_1.GameEvent.CLICK_SELECT, this.OnClickSelect, this);
      };
      WudaoAssembly.prototype.onGasStartupComplete = function() {
        this.initBottomLevel();
      };
      WudaoAssembly.prototype.onBottomSelectComplete = function(result, count) {
        var _this = this;
        if (result) switch (count) {
         case 1:
          this.gasNode.getComponent("Gas").moveBall(250, function() {
            _this.gasNode.getComponent("Gas").moveToTigo();
          });
          break;

         case 2:
          this.gasNode.getComponent("Gas").moveBall(150, function() {
            _this.gasNode.getComponent("Gas").moveToTigo();
          });
          break;

         case 3:
         default:
          this.gasNode.getComponent("Gas").moveBall(10, function() {
            _this.gasNode.getComponent("Gas").bomb(function() {
              _this.gasNode.active = false;
              _this.nodeQuestionBoardBottom.getComponent(QuestionBoardBottom_1.default).hide();
              Point_1.default.instance.gameEnd();
              _this.fun_battleAnim.stage5(function() {
                _this.scheduleOnce(function() {
                  _this.gameEnd();
                }, 1);
              });
            });
          });
        }
      };
      WudaoAssembly.prototype.OnAnswerCompleted = function(num_wrongCount) {
        var _this = this;
        Point_1.default.instance.roundEnd(this.num_nowLevel, num_wrongCount + 1);
        var animationFinish = function() {
          _this.num_wrongCount = num_wrongCount;
          _this.showCoin();
          _this.num_nowLevel += 1;
          if (_this.num_nowLevel > 5) {
            _this.fun_battleAnim.playHappyAnimation(null);
            _this.scheduleOnce(function() {
              _this.setMask(true);
            }, 3);
          } else _this.num_nowLevel > 3 ? _this.fun_level.setLevel(_this.num_nowLevel) : _this.scheduleOnce(function() {
            _this.fun_level.setLevel(_this.num_nowLevel);
            _this.initNowLevel();
          }, 2);
        };
        var spineAnimation = function() {
          switch (_this.num_nowLevel) {
           case 1:
            _this.fun_battleAnim.stage1(animationFinish);
            break;

           case 2:
            _this.fun_battleAnim.stage2(animationFinish);
            break;

           case 3:
            _this.fun_battleAnim.stage3(function() {
              _this.fun_battleAnim.stage4(function() {
                _this.scheduleOnce(function() {
                  _this.gasNode.active = true;
                  animationFinish();
                }, 2.5);
              });
            });
          }
        };
        this.fun_battleAnim.bgHide(this.nodeQuestionBoardBg, null);
        this.fun_battleAnim.boardLeave(this.nodeQuestionBoard, function() {
          spineAnimation();
        });
      };
      WudaoAssembly.prototype.OnClickSelect = function() {};
      WudaoAssembly.prototype.OnAudioStart = function() {
        this.setMask(true);
      };
      WudaoAssembly.prototype.OnAudioFinish = function() {
        this.setMask(false);
      };
      WudaoAssembly.prototype.setMask = function(state) {
        state ? this.nodeMask.setPosition(cc.v3(0, 0, 0)) : this.nodeMask.setPosition(cc.v3(999, 999, 0));
      };
      WudaoAssembly.prototype.showCoin = function() {
        var mcoin = 3 - this.num_wrongCount;
        mcoin <= 0 && (mcoin = 1);
        this.num_starNow += mcoin;
        this.num_wrongCount = 0;
      };
      WudaoAssembly.prototype.gameEnd = function() {
        cc.audioEngine.stopAll();
        this.source_bg.stop();
        GameData_1.default.addStarNum(this.num_starNow);
        window.webframe.Notify.trigger("entryMenu", true);
      };
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5f53\u524d\u5173\u5361"
      }) ], WudaoAssembly.prototype, "nodeLevel", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9898\u677f"
      }) ], WudaoAssembly.prototype, "nodeQuestionBoard", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5e95\u90e8\u9898\u677f"
      }) ], WudaoAssembly.prototype, "nodeQuestionBoardBottom", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9898\u677f3"
      }) ], WudaoAssembly.prototype, "nodeQuestionBoardBg", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9898\u677f1"
      }) ], WudaoAssembly.prototype, "nodeQuestionBoardType1", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9898\u677f2"
      }) ], WudaoAssembly.prototype, "nodeQuestionBoardType2", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9898\u677f3"
      }) ], WudaoAssembly.prototype, "nodeQuestionBoardType3", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u906e\u7f69"
      }) ], WudaoAssembly.prototype, "nodeMask", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u91d1\u5e01"
      }) ], WudaoAssembly.prototype, "nodeCoin", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "vs"
      }) ], WudaoAssembly.prototype, "vsNode", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5bf9\u6ce2"
      }) ], WudaoAssembly.prototype, "gasNode", void 0);
      __decorate([ property({
        type: cc.AudioSource,
        displayName: "BGM"
      }) ], WudaoAssembly.prototype, "source_bg", void 0);
      WudaoAssembly = __decorate([ ccclass ], WudaoAssembly);
      return WudaoAssembly;
    }(cc.Component);
    exports.default = WudaoAssembly;
    cc._RF.pop();
  }, {
    "../../../Scripts/common/GameData": "GameData",
    "../../../Scripts/common/Point": "Point",
    "../../../Scripts/common/coinBoard": "coinBoard",
    "./BattleAnimation": "BattleAnimation",
    "./Drag": "Drag",
    "./EventConst": "EventConst",
    "./EventMng": "EventMng",
    "./JudgeTree": "JudgeTree",
    "./Level": "Level",
    "./Read": "Read",
    "./monster/QuestionBoardBottom": "QuestionBoardBottom"
  } ],
  AdapterBg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23968Df+0ZLppE4oESJzaRP", "AdapterBg");
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
    var AdapterBg = function(_super) {
      __extends(AdapterBg, _super);
      function AdapterBg() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AdapterBg.prototype.onLoad = function() {};
      AdapterBg.prototype.onEnable = function() {
        this.relayout();
      };
      AdapterBg.prototype.relayout = function() {
        var frameSize = cc.view.getFrameSize();
        var frameAspectRatio = frameSize.width / frameSize.height;
        var ratio = this.node.width / this.node.height;
        if (ratio > frameAspectRatio) {
          cc.Canvas.instance.fitHeight = true;
          cc.Canvas.instance.fitWidth = false;
        } else {
          cc.Canvas.instance.fitHeight = false;
          cc.Canvas.instance.fitWidth = true;
        }
      };
      AdapterBg = __decorate([ ccclass ], AdapterBg);
      return AdapterBg;
    }(cc.Component);
    exports.default = AdapterBg;
    cc._RF.pop();
  }, {} ],
  AudioManager2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "883cbKr2U1KD5yc16UQ+BY3", "AudioManager2");
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
    var AudioManager = function() {
      function AudioManager() {
        this.effectPath = "audios/";
        this.musicPath = "audio_common/";
        this.sounds = {};
        this.musicEnable = true;
        this.effectEnable = true;
        this.music = "";
      }
      Object.defineProperty(AudioManager, "instance", {
        get: function() {
          null == AudioManager._instance && (AudioManager._instance = new AudioManager());
          return AudioManager._instance;
        },
        enumerable: false,
        configurable: true
      });
      AudioManager.prototype.init = function() {
        return __awaiter(this, void 0, Promise, function() {
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              cc.audioEngine.setMusicVolume(1);
              return [ 4, new Promise(function(res, rej) {
                cc.resources.loadDir(_this.musicPath, cc.AudioClip, function(err, clips) {
                  if (err) {
                    cc.error(err);
                    rej(err);
                    return;
                  }
                  for (var i = 0; i < clips.length; i++) _this.addSound(clips[i].name, clips[i]);
                  res(clips);
                });
              }) ];

             case 1:
              _a.sent();
              return [ 4, new Promise(function(res, rej) {
                cc.resources.loadDir(_this.effectPath, cc.AudioClip, function(err, clips) {
                  if (err) {
                    cc.error(err);
                    rej(err);
                    return;
                  }
                  for (var i = 0; i < clips.length; i++) _this.addSound(clips[i].name, clips[i]);
                  res(clips);
                });
              }) ];

             case 2:
              _a.sent();
              cc.log("SoundManager \u521d\u59cb\u5316\u5b8c\u6210");
              return [ 2 ];
            }
          });
        });
      };
      AudioManager.prototype.addSound = function(key, clip) {
        this.sounds[key] = clip;
      };
      AudioManager.prototype.playEffect = function(fxName, loop, callBack) {
        var _this = this;
        void 0 === loop && (loop = false);
        if (!this.effectEnable) return -1;
        var key;
        this.sounds[fxName] ? key = cc.audioEngine.playEffect(this.sounds[fxName], loop) : cc.resources.load(this.effectPath + fxName, cc.AudioClip, function(err, clips) {
          if (err) {
            cc.error(err);
            return;
          }
          _this.addSound(clips.name, clips);
          key = cc.audioEngine.playEffect(clips, loop);
        });
        loop || cc.audioEngine.setFinishCallback(key, function() {
          callBack && callBack();
        });
        return key;
      };
      AudioManager.prototype.stopEffect = function(audioID) {
        cc.audioEngine.stopEffect(audioID);
      };
      AudioManager.prototype.playMusic = function(musicName) {
        var _this = this;
        if (this.music == musicName) return;
        this.music = musicName;
        if (!this.musicEnable) return;
        this.sounds[musicName] ? cc.audioEngine.playMusic(this.sounds[musicName], true) : cc.resources.load(this.musicPath + musicName, cc.AudioClip, function(err, clips) {
          if (err) {
            cc.error(err);
            return;
          }
          _this.addSound(clips.name, clips);
          cc.audioEngine.playMusic(clips, true);
        });
      };
      AudioManager.prototype.stopMusic = function() {
        cc.audioEngine.stopMusic();
      };
      AudioManager.prototype.setMusicEnabled = function(enabled) {
        this.musicEnable = enabled;
        if (this.musicEnable) {
          var nowMusic = this.music;
          this.music = "";
          this.playMusic(nowMusic);
        } else cc.audioEngine.stopAll();
      };
      AudioManager.prototype.getMusicEnable = function() {
        return this.musicEnable;
      };
      AudioManager.prototype.setEffectEnabled = function(enabled) {
        this.effectEnable = enabled;
      };
      AudioManager.prototype.getEffectEnable = function() {
        return this.effectEnable;
      };
      return AudioManager;
    }();
    exports.default = AudioManager;
    cc._RF.pop();
  }, {} ],
  AudioManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "563760WQOhDNo3i2NmUxhuz", "AudioManager");
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
    exports.AudioType = void 0;
    var Util_1 = require("./Util");
    var AudioType;
    (function(AudioType) {
      AudioType[AudioType["AUDIO_EFFECT"] = 0] = "AUDIO_EFFECT";
      AudioType[AudioType["BG_MUSIC"] = 1] = "BG_MUSIC";
    })(AudioType = exports.AudioType || (exports.AudioType = {}));
    var AudioManager = function() {
      function AudioManager() {
        this.isPlaying = false;
        this.AUDIO_URL = "audios/";
        this.COMMON_AUDIO_URL = "audio_common/";
        this.RECORD = "record";
        this.GAME_END = "gameEnd";
        this.GAME_COIN_MID = "coin_mid";
        this.GAME_COIN_LARGE = "coin_large";
        this.LETS_SAY = "lets_say";
        this.TRY_AGAIN = "try_again";
        this.SUPER_JOB = "super_job";
        this.GAME_RIGHT = "game_right";
        this.GAME_ERROR = "game_error";
        this.LISTEN_AND_CHOOSE = "Listen_and_choose";
        this._masterVolume = 1;
        this.CHOOSE_THE_CORRECT_ANSWER = "choose_the_correct_answer";
        this.CHOOSE_THE_CORRECT_WORD = "choose_the_correct_word";
        this.GAME_CLICK = "click";
        this.effectId = -1;
        this.audio_common = [ "record", "gameEnd", "coin_mid", "coin_large", "lets_say", "try_again", "super_job", "game_right", "game_error", "Listen_and_choose", "choose_the_correct_answer", "choose_the_correct_word", "click", "jinbi1", "jinbi2", "jinbi3" ];
      }
      AudioManager.getInstance = function() {
        null == this.instance && (this.instance = new AudioManager());
        return this.instance;
      };
      AudioManager.prototype.playMusic = function(url, callBack, isPlaying) {
        var _this = this;
        void 0 === isPlaying && (isPlaying = true);
        this._masterVolume = url == this.GAME_END ? .6 : 1;
        var path;
        path = -1 != this.audio_common.indexOf(url) ? this.COMMON_AUDIO_URL : this.AUDIO_URL;
        console.log("\u52a0\u8f7d\u7684\u6587\u4ef6\u8def\u5f84\u540d---" + (path + url));
        cc.loader.loadRes(path + url, cc.AudioClip, function(err, audio) {
          err ? console.log(err, "\u97f3\u6548\u52a0\u8f7d\u5931\u8d25===============>>") : _this.loadMusic(audio, callBack, isPlaying);
        });
      };
      AudioManager.prototype.loadMusic = function(audio, callBack, isPlaying) {
        var _this = this;
        this.isPlaying = isPlaying;
        cc.audioEngine.stop(this.effectId);
        this.effectId = cc.audioEngine.play(audio, false, this._masterVolume);
        cc.audioEngine.setFinishCallback(this.effectId, function() {
          Util_1.default.stopVoiceAni();
          callBack && callBack();
          _this.isPlaying = false;
        });
      };
      AudioManager.prototype.playEffect = function(url, loop, cb) {
        void 0 === loop && (loop = false);
        void 0 === cb && (cb = function() {});
        return __awaiter(this, void 0, void 0, function() {
          var id;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this._play(url, AudioType.AUDIO_EFFECT, loop) ];

             case 1:
              id = _a.sent();
              cc.audioEngine.setFinishCallback(id, cb);
              return [ 2, id ];
            }
          });
        });
      };
      AudioManager.prototype.playBgMusic = function(url, loop, cb) {
        void 0 === loop && (loop = true);
        void 0 === cb && (cb = function() {});
        return __awaiter(this, void 0, void 0, function() {
          var id;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this._play(url, AudioType.BG_MUSIC, loop) ];

             case 1:
              id = _a.sent();
              return [ 2, id ];
            }
          });
        });
      };
      AudioManager.prototype._play = function(url, type, loop) {
        var _this = this;
        return new Promise(function(resolve) {
          _this._masterVolume = url == _this.GAME_END ? .6 : 1;
          var path;
          path = -1 != _this.audio_common.indexOf(url) ? _this.COMMON_AUDIO_URL : _this.AUDIO_URL;
          cc.loader.loadRes(path + url, cc.AudioClip, function(err, audio) {
            if (err) console.log(err, "\u97f3\u6548\u52a0\u8f7d\u5931\u8d25===============>>"); else {
              var id = -1;
              if (type === AudioType.AUDIO_EFFECT) id = cc.audioEngine.playEffect(audio, loop); else if (type === AudioType.BG_MUSIC) {
                id = cc.audioEngine.playMusic(audio, loop);
                cc.audioEngine.setMusicVolume(.3);
              }
              resolve(id);
            }
          });
        });
      };
      return AudioManager;
    }();
    exports.default = AudioManager.getInstance();
    cc._RF.pop();
  }, {
    "./Util": "Util"
  } ],
  BattleAnimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b86c3fJhWtP1qmYo3FZudiB", "BattleAnimation");
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
    var AudioManager_1 = require("../../../Scripts/common/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TigoSpineName;
    (function(TigoSpineName) {
      TigoSpineName["dazhao"] = "dazhao1";
      TigoSpineName["dazhaochixu"] = "dazhao_idle";
      TigoSpineName["idle1"] = "idle1";
      TigoSpineName["kaixin"] = "kaixin";
      TigoSpineName["fangyu"] = "fangyu";
      TigoSpineName["fangyu2"] = "fangyu_idle";
      TigoSpineName["jizhang"] = "jizhang";
      TigoSpineName["chuxu"] = "xuli";
      TigoSpineName["chuxu2"] = "xuli_idle";
    })(TigoSpineName || (TigoSpineName = {}));
    var EyuSpineName;
    (function(EyuSpineName) {
      EyuSpineName["dazhao"] = "chongji";
      EyuSpineName["idle1"] = "daiji";
      EyuSpineName["beiza"] = "beiza";
      EyuSpineName["beiji"] = "beiji";
      EyuSpineName["chixu"] = "chixu";
      EyuSpineName["shengqi"] = "shengqi";
      EyuSpineName["yun"] = "yun";
      EyuSpineName["chuxu"] = "chuxu";
    })(EyuSpineName || (EyuSpineName = {}));
    var hopperSpineName;
    (function(hopperSpineName) {
      hopperSpineName["dazhao"] = "dazhao1";
      hopperSpineName["dazhaochixu"] = "dazhao_idle";
      hopperSpineName["idle1"] = "idle";
      hopperSpineName["jump"] = "jupm";
      hopperSpineName["kaixin"] = "kaixin";
      hopperSpineName["fangyu"] = "fangyu";
      hopperSpineName["fangyu2"] = "fangyu_idle";
      hopperSpineName["jizhang"] = "jizhang";
      hopperSpineName["chuxu"] = "xuli";
      hopperSpineName["chuxu2"] = "xuli_idle";
    })(hopperSpineName || (hopperSpineName = {}));
    var BattleAnimation = function(_super) {
      __extends(BattleAnimation, _super);
      function BattleAnimation() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.skTigo = null;
        _this.skHopper = null;
        _this.skEyu = null;
        _this.skLongJuanFen = null;
        _this.skShuYe = null;
        _this.skShengBo = null;
        _this.skGuangQuanBo = null;
        _this.skPingGuo = null;
        _this.node_Tigo = null;
        _this.node_Eyu = null;
        _this.node_LongJuanFen = null;
        _this.node_ShuYe = null;
        _this.node_ShengBo = null;
        _this.node_GuangQuanBo = null;
        _this.node_PingGuo = null;
        _this.tigoDefenseCount = 0;
        _this.killlianDefenseCount = 0;
        return _this;
      }
      BattleAnimation.prototype.start = function() {};
      BattleAnimation.prototype.Tigo_guangbo = function(callback) {
        var _this = this;
        this.playSpine(this.skTigo, TigoSpineName.dazhao, false, function() {
          _this.guangQuanOrShengBo(function() {}, false, true);
          _this.scheduleOnce(function() {
            _this.playAudioMusic();
            _this.playSpine(_this.skEyu, EyuSpineName.shanshuo, false, function() {
              _this.playIdleAnimation();
              _this.killlianDefenseCount += 1;
              callback && callback();
            });
          }, .5);
        });
      };
      BattleAnimation.prototype.Tigo_longJuanFeng = function(callback) {
        var _this = this;
        this.playSpine(this.skTigo, TigoSpineName.dazhao, false);
        this.scheduleOnce(function() {
          _this.node_LongJuanFen.active = true;
          _this.playSpine(_this.skLongJuanFen, "day5_2_3_LJF_zuoyouyaobai", true);
          _this.node_LongJuanFen.setPosition(-300, -94);
          _this.node_LongJuanFen.stopAllActions();
          AudioManager_1.default.playEffect("SE_biwudahui_04");
          cc.tween(_this.node_LongJuanFen).to(.5, {
            position: cc.v3(167, -94, 0)
          }).call(function() {
            _this.playAudioMusic();
            _this.playSpine(_this.skEyu, EyuSpineName.shanshuo, false, function() {
              _this.node_LongJuanFen.active = false;
              _this.killlianDefenseCount += 1;
              _this.playIdleAnimation();
              callback && callback();
            });
          }).start();
        }, 1);
      };
      BattleAnimation.prototype.Tigo_paopao = function(callback) {
        var _this = this;
        this.playSpine(this.skTigo, TigoSpineName.dazhao, false);
        this.scheduleOnce(function() {
          AudioManager_1.default.playEffect("SE_biwudahui_05");
          _this.playSpine(_this.skEyu, EyuSpineName.chuiqi, false, function() {
            _this.killlianDefenseCount += 1;
            _this.playIdleAnimation();
            callback && callback();
          });
        }, 1);
      };
      BattleAnimation.prototype.Tigo_shengBo = function(callback) {
        var _this = this;
        this.playSpine(this.skTigo, TigoSpineName.dazhao, false);
        this.scheduleOnce(function() {
          _this.guangQuanOrShengBo(function() {}, false, false);
          _this.scheduleOnce(function() {
            _this.playAudioMusic();
            _this.playSpine(_this.skEyu, EyuSpineName.shanshuo, false, function() {
              _this.killlianDefenseCount += 1;
              _this.playIdleAnimation();
              callback && callback();
            });
          }, .5);
        }, 1);
      };
      BattleAnimation.prototype.Tigo_pingguo = function(callback) {
        var _this = this;
        this.playSpine(this.skTigo, TigoSpineName.dazhao, false, function() {
          _this.node_PingGuo.active = true;
          _this.node_PingGuo.stopAllActions();
          _this.playSpine(_this.skPingGuo, "xialuo", true);
          AudioManager_1.default.playEffect("SE_biwudahui_08");
          _this.scheduleOnce(function() {
            _this.playAudioMusic();
            _this.playSpine(_this.skEyu, EyuSpineName.beiza, false, function() {
              _this.killlianDefenseCount += 1;
              _this.node_PingGuo.active = false;
              _this.playIdleAnimation();
              callback && callback();
            });
          }, .3);
        });
      };
      BattleAnimation.prototype.Tigo_shuye = function(callback) {
        var _this = this;
        this.playSpine(this.skTigo, TigoSpineName.dazhao, false);
        this.scheduleOnce(function() {
          _this.node_ShuYe.active = true;
          _this.playSpine(_this.skShuYe, "day5_2_4_YTYZ_feixing", false, function() {});
          AudioManager_1.default.playEffect("SE_biwudahui_10");
          _this.scheduleOnce(function() {
            _this.playAudioMusic();
            _this.playSpine(_this.skEyu, EyuSpineName.shanshuo, false, function() {
              _this.node_ShuYe.active = false;
              _this.killlianDefenseCount += 1;
              callback && callback();
            });
          }, .8);
        }, .5);
      };
      BattleAnimation.prototype.Tigo_dongZhu = function(callback) {
        var _this = this;
        this.playSpine(this.skTigo, TigoSpineName.dazhao, false);
        this.scheduleOnce(function() {
          AudioManager_1.default.playEffect("SE_biwudahui_09");
          _this.playSpine(_this.skEyu, EyuSpineName.dongzhu, false, function() {
            _this.killlianDefenseCount += 1;
            _this.playIdleAnimation();
            callback && callback();
          });
        }, 1);
      };
      BattleAnimation.prototype.KillLianSkill = function(callback) {
        var _this = this;
        this.playSpine(this.skEyu, EyuSpineName.dazhao, false, function() {
          _this.guangQuanOrShengBo(function() {}, true, false, true);
          _this.playSpine(_this.skTigo, TigoSpineName.fangyu, false, function() {
            _this.tigoDefenseCount += 1;
            _this.playIdleAnimation();
            callback && callback();
          });
          _this.scheduleOnce(function() {
            AudioManager_1.default.playEffect("SE_biwudahui_07");
          }, .3);
        });
        this.scheduleOnce(function() {}, 1);
      };
      BattleAnimation.prototype.guangQuanOrShengBo = function(callback, isRandom, guangquan, Reverse) {
        void 0 === guangquan && (guangquan = true);
        void 0 === Reverse && (Reverse = false);
        var sk = null;
        var skAnimationName = "";
        var videoName;
        if (isRandom) {
          var value = this.randomNum(0, 10);
          sk = value % 2 == 0 ? this.skGuangQuanBo : this.skShengBo;
          skAnimationName = value % 2 == 0 ? "day5_2_6_guangquanbo" : "day5_2_5_shengbo";
          videoName = value % 2 == 0 ? "SE_biwudahui_02" : "SE_biwudahui_06";
        } else {
          sk = guangquan ? this.skGuangQuanBo : this.skShengBo;
          skAnimationName = guangquan ? "day5_2_6_guangquanbo" : "day5_2_5_shengbo";
          videoName = guangquan ? "SE_biwudahui_02" : "SE_biwudahui_06";
        }
        AudioManager_1.default.playEffect(videoName);
        console.log(skAnimationName);
        sk.node.getParent().active = true;
        if (Reverse) {
          sk.node.scaleX = -1;
          sk.node.getParent().setPosition(291.186, -44);
        } else {
          sk.node.scaleX = 1;
          sk.node.getParent().setPosition(-291.186, -44);
        }
        this.playSpine(sk, skAnimationName, false, function() {
          callback && callback();
          sk.node.getParent().active = false;
        });
      };
      BattleAnimation.prototype.playSpine = function(spNode, spName, loop, callback) {
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
      BattleAnimation.prototype.randomNum = function(minNum, maxNum) {
        switch (arguments.length) {
         case 1:
          return Math.floor(Math.random() * minNum + 1);

         case 2:
          return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

         default:
          return 0;
        }
      };
      BattleAnimation.prototype.playIdleAnimation = function() {
        var tigoidleName = this.tigoDefenseCount >= 3 ? TigoSpineName.idle2 : TigoSpineName.idle1;
        var killName = this.killlianDefenseCount >= 3 ? EyuSpineName.idle2 : EyuSpineName.idle1;
        this.playSpine(this.skEyu, killName, true);
        this.playSpine(this.skHopper, hopperSpineName.idle1, true);
        this.playSpine(this.skTigo, tigoidleName, true);
      };
      BattleAnimation.prototype.RoleJumpAnimation = function(callback) {
        var _this = this;
        this.node_Tigo.stopAllActions();
        this.node_Eyu.stopAllActions();
        this.node_Tigo.setPosition(cc.v2(-899, 5.4));
        cc.tween(this.node_Tigo).delay(0).to(.5, {
          position: cc.v3(-500, -157, 0)
        }).start();
        this.node_Eyu.setPosition(cc.v2(710, 5.4));
        cc.tween(this.node_Eyu).delay(0).to(.5, {
          position: cc.v3(290, -8, 0)
        }).call(function() {
          _this.playIdleAnimation();
          callback && callback();
        }).start();
      };
      BattleAnimation.prototype.playHappyAnimation = function(callback) {
        AudioManager_1.default.playEffect("SE_biwudahui_11");
        this.playSpine(this.skTigo, TigoSpineName.kaixin, true, function() {
          callback && callback();
        });
        this.playSpine(this.skEyu, EyuSpineName.daodi, true);
      };
      BattleAnimation.prototype.boardLeave = function(obj, callback) {
        obj.stopAllActions();
        obj.setPosition(cc.v3(0, 0, 0));
        cc.tween(obj).to(.5, {
          position: cc.v3(0, 694, 0)
        }, {
          easing: "easeInOutElastic"
        }).call(function() {
          callback && callback();
        }).start();
      };
      BattleAnimation.prototype.boardEnter = function(obj, callback) {
        obj.stopAllActions();
        obj.setPosition(cc.v3(0, 694, 0));
        cc.tween(obj).to(.5, {
          position: cc.Vec3.ZERO
        }, {
          easing: "easeInOutBounce"
        }).call(function() {
          callback && callback();
        }).start();
      };
      BattleAnimation.prototype.bgShow = function(obj, callback) {
        obj.stopAllActions();
        obj.opacity = 0;
        cc.tween(obj).to(.5, {
          opacity: 100
        }).call(function() {
          callback && callback();
        }).start();
      };
      BattleAnimation.prototype.bgHide = function(obj, callback) {
        obj.stopAllActions();
        obj.opacity = 100;
        cc.tween(obj).to(.5, {
          opacity: 0
        }).call(function() {
          callback && callback();
        }).start();
      };
      BattleAnimation.prototype.playAudioMusic = function() {
        AudioManager_1.default.playEffect("SE_biwudahui_03");
      };
      BattleAnimation.prototype.stage1 = function(callback) {
        var _this = this;
        this.playSpine(this.skTigo, TigoSpineName.dazhao, false, function() {
          _this.playSpine(_this.skTigo, TigoSpineName.dazhaochixu, true);
          _this.guangQuanOrShengBo(function() {}, false, true, true);
          _this.scheduleOnce(function() {
            _this.playAudioMusic();
            _this.playSpine(_this.skEyu, EyuSpineName.beiji, false, function() {
              _this.playIdleAnimation();
              _this.killlianDefenseCount += 1;
              callback && callback();
            });
          }, .5);
        });
        this.playSpine(this.skHopper, hopperSpineName.dazhao, false, function() {
          _this.playSpine(_this.skHopper, hopperSpineName.dazhaochixu, true, function() {
            _this.playIdleAnimation();
          });
        });
      };
      BattleAnimation.prototype.stage2 = function(callback) {
        var _this = this;
        this.scheduleOnce(function() {
          _this.longjuanfeng(function() {});
        }, .2);
        this.playSpine(this.skEyu, EyuSpineName.dazhao, false, function() {
          _this.playSpine(_this.skEyu, EyuSpineName.chixu);
        });
        this.scheduleOnce(function() {
          _this.playSpine(_this.skEyu, EyuSpineName.idle1, true);
        }, .8);
        this.playSpine(this.skTigo, TigoSpineName.fangyu, false, function() {
          _this.playSpine(_this.skTigo, TigoSpineName.fangyu2, false, function() {
            _this.playIdleAnimation();
            _this.killlianDefenseCount += 1;
            callback && callback();
          });
        });
        this.playSpine(this.skHopper, hopperSpineName.fangyu, false, function() {
          _this.playSpine(_this.skHopper, hopperSpineName.fangyu2, false, function() {
            _this.playIdleAnimation();
            _this.killlianDefenseCount += 1;
            callback && callback();
          });
        });
      };
      BattleAnimation.prototype.stage3 = function(callback) {
        var _this = this;
        this.playSpine(this.skTigo, TigoSpineName.dazhao, false, function() {
          _this.playSpine(_this.skTigo, TigoSpineName.dazhaochixu, true);
          _this.guangQuanOrShengBo(function() {}, false, true, true);
          _this.scheduleOnce(function() {
            _this.playAudioMusic();
            _this.playSpine(_this.skEyu, EyuSpineName.beiji, false, function() {
              _this.playIdleAnimation();
              _this.killlianDefenseCount += 1;
              callback && callback();
            });
          }, .5);
        });
        this.playSpine(this.skHopper, hopperSpineName.dazhao, false, function() {
          _this.playSpine(_this.skHopper, hopperSpineName.dazhaochixu, true, function() {
            _this.playIdleAnimation();
          });
        });
      };
      BattleAnimation.prototype.stage4 = function(callback) {
        var _this = this;
        AudioManager_1.default.playEffect("SE_tanshiguaishouADB03_ytz");
        this.playSpine(this.skEyu, EyuSpineName.shengqi, false, function() {
          _this.playSpine(_this.skEyu, EyuSpineName.chuxu, false, function() {
            _this.playSpine(_this.skEyu, EyuSpineName.dazhao, false, function() {
              _this.playSpine(_this.skEyu, EyuSpineName.chixu, true, function() {});
            });
          });
          _this.playSpine(_this.skHopper, hopperSpineName.chuxu, false, function() {
            _this.playSpine(_this.skHopper, hopperSpineName.chuxu2, false, function() {
              _this.playSpine(_this.skHopper, hopperSpineName.dazhao, false, function() {
                _this.playSpine(_this.skHopper, hopperSpineName.dazhaochixu, true, function() {});
              });
            });
          });
          _this.playSpine(_this.skTigo, TigoSpineName.chuxu, false, function() {
            _this.playSpine(_this.skTigo, TigoSpineName.chuxu2, false, function() {
              _this.playSpine(_this.skTigo, TigoSpineName.dazhao, false, function() {
                _this.playSpine(_this.skTigo, TigoSpineName.dazhaochixu, true, function() {});
              });
            });
          });
          callback();
        });
      };
      BattleAnimation.prototype.stage5 = function(callback) {
        var _this = this;
        this.playSpine(this.skEyu, EyuSpineName.yun, true, function() {});
        this.playSpine(this.skHopper, hopperSpineName.idle1, true);
        this.playSpine(this.skTigo, TigoSpineName.idle1, true);
        this.scheduleOnce(function() {
          _this.playSpine(_this.skHopper, hopperSpineName.jizhang, true);
          _this.playSpine(_this.skTigo, TigoSpineName.jizhang, true);
          callback();
        }, 1);
      };
      BattleAnimation.prototype.longjuanfeng = function(callback) {
        var _this = this;
        this.scheduleOnce(function() {
          _this.node_LongJuanFen.active = true;
          _this.playSpine(_this.skLongJuanFen, "chuxian", false, function() {
            _this.playSpine(_this.skLongJuanFen, "animation", true);
          });
          _this.node_LongJuanFen.setPosition(-300, 0);
          _this.node_LongJuanFen.stopAllActions();
          AudioManager_1.default.playEffect("SE_biwudahui_04");
          cc.tween(_this.node_LongJuanFen).to(.5, {
            position: cc.v3(167, 0, 0)
          }).call(function() {
            _this.node_LongJuanFen.active = false;
            callback && callback();
          }).start();
        }, 0);
      };
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "tigo \u52a8\u753b"
      }) ], BattleAnimation.prototype, "skTigo", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "hopper \u52a8\u753b"
      }) ], BattleAnimation.prototype, "skHopper", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u602a\u517d\u52a8\u753b"
      }) ], BattleAnimation.prototype, "skEyu", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u9f99\u5377\u98ce\u52a8\u753b"
      }) ], BattleAnimation.prototype, "skLongJuanFen", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u6811\u53f6\u52a8\u753b"
      }) ], BattleAnimation.prototype, "skShuYe", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u58f0\u6ce2\u52a8\u753b"
      }) ], BattleAnimation.prototype, "skShengBo", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u5149\u6ce2\u52a8\u753b"
      }) ], BattleAnimation.prototype, "skGuangQuanBo", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u82f9\u679c\u52a8\u753b"
      }) ], BattleAnimation.prototype, "skPingGuo", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "tigo "
      }) ], BattleAnimation.prototype, "node_Tigo", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9cc4\u9c7c"
      }) ], BattleAnimation.prototype, "node_Eyu", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9f99\u5377\u98ce"
      }) ], BattleAnimation.prototype, "node_LongJuanFen", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u6811\u53f6"
      }) ], BattleAnimation.prototype, "node_ShuYe", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u58f0\u6ce2"
      }) ], BattleAnimation.prototype, "node_ShengBo", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5149\u6ce2"
      }) ], BattleAnimation.prototype, "node_GuangQuanBo", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u82f9\u679c"
      }) ], BattleAnimation.prototype, "node_PingGuo", void 0);
      BattleAnimation = __decorate([ ccclass ], BattleAnimation);
      return BattleAnimation;
    }(cc.Component);
    exports.default = BattleAnimation;
    cc._RF.pop();
  }, {
    "../../../Scripts/common/AudioManager": "AudioManager"
  } ],
  Drag: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ef1cT9miBD9o27P4+X7OhP", "Drag");
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
    var AudioManager_1 = require("../../../Scripts/common/AudioManager");
    var HandCtr_1 = require("../../../Tools/Hand/script/HandCtr");
    var EventConst_1 = require("./EventConst");
    var EventMng_1 = require("./EventMng");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Drag = function(_super) {
      __extends(Drag, _super);
      function Drag() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodePlaceA = null;
        _this.nodePlaceB = null;
        _this.nodeBig = null;
        _this.nodeLower = null;
        _this.fun_Hand = null;
        _this.nodeBg = null;
        _this.layoutTouchParent = null;
        _this.list_capital = [];
        _this.list_lowerCase = [];
        _this.list_placeADot = [];
        _this.list_placeBDot = [];
        _this.list_touchFinish = [];
        _this.list_touchNodePos = [];
        _this.node_touchNode = null;
        _this.num_placeCountA = 0;
        _this.num_placeCountB = 0;
        _this.num_wrongCount = 0;
        _this.num_waitTime = 0;
        return _this;
      }
      Drag.prototype.onLoad = function() {
        var listTouch = this.layoutTouchParent.node.children;
        for (var i = 0; i < listTouch.length; i++) {
          var element = listTouch[i];
          this.list_touchNodePos.push(element.getPosition());
          this.addTouch(element);
          element.name = i.toString();
          i % 2 == 0 ? this.list_capital.push(element) : this.list_lowerCase.push(element);
        }
        this.list_placeADot = this.nodePlaceA.children;
        this.list_placeBDot = this.nodePlaceB.children;
      };
      Drag.prototype.start = function() {};
      Drag.prototype.Init = function(capitalValue, lowerCaseValue, capitalVideoName, lowerCVideoName) {
        var _this = this;
        this.nodeBg.active = true;
        this.str_capitalVideoName = capitalVideoName;
        this.str_lowerValueName = lowerCVideoName;
        this.list_touchFinish = [];
        var list = this.list_capital.concat(this.list_lowerCase);
        for (var i = 0; i < list.length; i++) {
          var element = list[i];
          element.setParent(this.layoutTouchParent.node);
        }
        for (var i = 0; i < this.list_capital.length; i++) {
          var element = this.list_capital[i];
          element.getComponent(cc.Label).string = capitalValue;
        }
        for (var i = 0; i < this.list_lowerCase.length; i++) {
          var element = this.list_lowerCase[i];
          element.getComponent(cc.Label).string = lowerCaseValue;
        }
        for (var i = list.length - 1; i >= 0; i--) {
          var element = list[i];
          element.setSiblingIndex(parseInt(element.name));
        }
        this.nodeBig.string = capitalValue;
        this.nodeLower.string = lowerCaseValue;
        this.layoutTouchParent.getComponent(cc.Layout).enabled = true;
        this.layoutTouchParent.getComponent(cc.Layout).updateLayout();
        this.layoutTouchParent.getComponent(cc.Layout).enabled = false;
        this.num_wrongCount = 0;
        this.num_placeCountA = 0;
        this.num_placeCountB = 0;
        AudioManager_1.default.playEffect("Drag and drop_ytz", false, function() {
          EventMng_1.default.emit(EventConst_1.GameEvent.AUDIO_PLAYER_FINISH, true);
          _this.playerHandAnimation(null);
        });
        this.unscheduleAllCallbacks();
        this.schedule(function() {
          _this.DetectionTip();
        }, 1);
      };
      Drag.prototype.addTouch = function(obj) {
        obj.on(cc.Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
        obj.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this));
        obj.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
        obj.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd.bind(this));
      };
      Drag.prototype.onTouchStart = function(event) {
        this.node_touchNode = null;
        if (event.currentTarget.getParent() == this.layoutTouchParent.node) {
          this.node_touchNode = event.currentTarget;
          this.node_touchNode.setParent(this.node);
          this.node_touchNode.setPosition(this.node.convertToNodeSpaceAR(event.getLocation()));
        }
      };
      Drag.prototype.onTouchMove = function(event) {
        if (!this.node_touchNode) return;
        var localPos = event.getLocation();
        this.node_touchNode.setPosition(this.node.convertToNodeSpaceAR(localPos));
      };
      Drag.prototype.onTouchEnd = function(event) {
        var _this = this;
        if (!this.node_touchNode) return;
        var isCollision = false;
        var boolName = parseInt(this.node_touchNode.name) % 2 == 0;
        var collisionNode = boolName ? this.nodePlaceA : this.nodePlaceB;
        var listDot = boolName ? this.list_placeADot : this.list_placeBDot;
        var listCollisionNode = [ this.nodePlaceA, this.nodePlaceB ];
        for (var i = 0; i < listCollisionNode.length; i++) {
          var element = listCollisionNode[i];
          if (cc.Intersection.rectRect(this.node_touchNode.getBoundingBoxToWorld(), element.getBoundingBoxToWorld())) {
            if (collisionNode === element) {
              var addPos = boolName ? this.num_placeCountA++ : this.num_placeCountB++;
              this.node_touchNode.setParent(listDot[addPos]);
              this.node_touchNode.setPosition(cc.Vec2.ZERO);
              isCollision = true;
              var playVideo = boolName ? this.str_capitalVideoName : this.str_lowerValueName;
              AudioManager_1.default.playEffect(playVideo, false, function() {
                _this.num_waitTime = -1;
                _this.DetectionIsFinish();
              });
            } else {
              isCollision = true;
              this.num_wrongCount += 1;
              AudioManager_1.default.playEffect(AudioManager_1.default.GAME_ERROR);
              EventMng_1.default.emit(EventConst_1.GameEvent.AUDIO_PLAYER_START, false);
              this.node_touchNode.setParent(this.layoutTouchParent.node);
              this.node_touchNode.setPosition(this.layoutTouchParent.node.convertToNodeSpaceAR(event.getLocation()));
              this.PlayErrorAnimation(this.node_touchNode, cc.v3(this.list_touchNodePos[parseInt(this.node_touchNode.name)].x, this.list_touchNodePos[parseInt(this.node_touchNode.name)].y, 0), function() {
                _this.node_touchNode = null;
                _this.num_waitTime = -1;
                EventMng_1.default.emit(EventConst_1.GameEvent.AUDIO_PLAYER_FINISH, true);
              });
            }
            break;
          }
        }
        if (isCollision) {
          this.num_waitTime = -1;
          this.fun_Hand.node.active && (this.fun_Hand.node.active = false);
        } else {
          this.node_touchNode.setParent(this.layoutTouchParent.node);
          this.node_touchNode.setPosition(this.list_touchNodePos[parseInt(this.node_touchNode.name)]);
          this.node_touchNode = null;
        }
      };
      Drag.prototype.DetectionIsFinish = function() {
        if (3 == this.num_placeCountB && 3 == this.num_placeCountA) {
          this.unscheduleAllCallbacks();
          EventMng_1.default.emit(EventConst_1.GameEvent.ANSWER_COMPLETED, this.num_wrongCount);
        }
      };
      Drag.prototype.DetectionTip = function() {
        this.num_waitTime += 1;
        if (this.num_waitTime > 5) {
          this.num_waitTime = -1;
          this.fun_Hand.node.active || this.playerHandAnimation(null);
        }
      };
      Drag.prototype.playerHandAnimation = function(callback) {
        var localPos = this.node.convertToNodeSpaceAR(this.layoutTouchParent.node.children[0].convertToWorldSpaceAR(cc.Vec2.ZERO));
        this.fun_Hand.node.active = true;
        this.fun_Hand.node.setPosition(localPos);
        var touchTargetPos;
        touchTargetPos = this.num_placeCountA >= 3 ? cc.v2(175, -60) : cc.v2(-175, -51);
        this.fun_Hand.TouchCycle(localPos, touchTargetPos);
      };
      Drag.prototype.PlayErrorAnimation = function(obj, initPos, callback) {
        obj.stopAllActions();
        cc.tween(obj).by(.1 / 3, {
          position: cc.v3(-25, 0, 0)
        }).by(.2 / 3, {
          position: cc.v3(50, 0, 0)
        }).by(.1 / 3, {
          position: cc.v3(-25, 0, 0)
        }).to(.2, {
          position: initPos
        }).call(function() {
          callback && callback();
        }).start();
      };
      __decorate([ property({
        type: cc.Node,
        displayName: "\u653e\u7f6ea\u70b9"
      }) ], Drag.prototype, "nodePlaceA", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u653e\u7f6eB\u70b9"
      }) ], Drag.prototype, "nodePlaceB", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u5927\u5199"
      }) ], Drag.prototype, "nodeBig", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u5c0f\u5199"
      }) ], Drag.prototype, "nodeLower", void 0);
      __decorate([ property({
        type: HandCtr_1.default,
        displayName: "\u63d0\u793a\u624b"
      }) ], Drag.prototype, "fun_Hand", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u80cc\u666f"
      }) ], Drag.prototype, "nodeBg", void 0);
      __decorate([ property({
        type: cc.Layout,
        displayName: "\u62d6\u62fd\u8282\u70b9\u7236\u8282\u70b9"
      }) ], Drag.prototype, "layoutTouchParent", void 0);
      Drag = __decorate([ ccclass ], Drag);
      return Drag;
    }(cc.Component);
    exports.default = Drag;
    cc._RF.pop();
  }, {
    "../../../Scripts/common/AudioManager": "AudioManager",
    "../../../Tools/Hand/script/HandCtr": "HandCtr",
    "./EventConst": "EventConst",
    "./EventMng": "EventMng"
  } ],
  EventConst: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7eb50D2oVVGxolyqG71cXhh", "EventConst");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameEvent = void 0;
    var GameEvent = function() {
      function GameEvent() {}
      GameEvent.CLICK_SELECT = "LOGIN_CLICK_SELECT";
      GameEvent.ANSWER_COMPLETED = "ANSWER_COMPLETED";
      GameEvent.AUDIO_PLAYER_START = "AUDIO_PLAYER_START";
      GameEvent.AUDIO_PLAYER_FINISH = "AUDIO_PLAYER_FINISH";
      GameEvent.VS_COMPLETE = "VS_COMPLETE";
      GameEvent.BOTTOM_SELECT_COMPLETE = "BOTTOM_SELECT_COMPLETE";
      GameEvent.GAS_STARTUP_COMPLETE = "GAS_STARTUP_COMPLETE";
      return GameEvent;
    }();
    exports.GameEvent = GameEvent;
    cc._RF.pop();
  }, {} ],
  EventMng: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ab03UWmUlKc4KPyXjw/toi", "EventMng");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = new cc.EventTarget();
    cc._RF.pop();
  }, {} ],
  FollowUp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1418ZLgm9C/KmBUqXH/+a3", "FollowUp");
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
    var FollowUp = function(_super) {
      __extends(FollowUp, _super);
      function FollowUp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      FollowUp.prototype.start = function() {};
      __decorate([ property(cc.Label) ], FollowUp.prototype, "label", void 0);
      __decorate([ property ], FollowUp.prototype, "text", void 0);
      FollowUp = __decorate([ ccclass ], FollowUp);
      return FollowUp;
    }(cc.Component);
    exports.default = FollowUp;
    cc._RF.pop();
  }, {} ],
  GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8199cgU+ghLwb+RYFAqJwaD", "GameData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameData = function() {
      function GameData() {
        this.node_path = [ {
          nodePath: " WudaoAssembly"
        } ];
        this.record_num = "";
        this.totalStar_num = 0;
        this.isFrist = true;
        this.isTest = false;
        this.gid = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ];
      }
      Object.defineProperty(GameData, "getInstance", {
        get: function() {
          this._Instance || (this._Instance = new GameData());
          return this._Instance;
        },
        enumerable: false,
        configurable: true
      });
      GameData.prototype.getStarNum = function() {
        return this.totalStar_num;
      };
      GameData.prototype.setStarNum = function(num) {
        this.totalStar_num = Number(num);
      };
      GameData.prototype.addStarNum = function(num) {
        this.totalStar_num += num;
      };
      GameData.prototype.setIsFirst = function(able) {
        console.log("setIsFirst ================" + able);
        this.isFrist = able;
      };
      GameData.prototype.getIsFirst = function() {
        console.log("getIsFirst ================" + this.isFrist);
        return this.isFrist;
      };
      GameData.prototype.getNodePath = function(page) {
        return this.node_path[page].nodePath ? this.node_path[page].nodePath : this.node_path[0].nodePath;
      };
      return GameData;
    }();
    exports.default = GameData.getInstance;
    cc._RF.pop();
  }, {} ],
  Gas: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2207ei0bk5Gwa0b/HaK/0Cx", "Gas");
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
    var AudioManager_1 = require("../../../../Scripts/common/AudioManager");
    var EventConst_1 = require("../EventConst");
    var EventMng_1 = require("../EventMng");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ballSpName;
    (function(ballSpName) {
      ballSpName["idle"] = "3_qiu_xiaoxunhuan";
      ballSpName["bianda"] = "4_qiu_bianda";
      ballSpName["idle2"] = "5_qiu_daxunhuan";
      ballSpName["baozha"] = "6_qiu_xiaowang";
    })(ballSpName || (ballSpName = {}));
    var barSpName;
    (function(barSpName) {
      barSpName["chuxian"] = "chuxian";
      barSpName["rchixu"] = "2_zuo";
      barSpName["zchixu"] = "1_you";
    })(barSpName || (barSpName = {}));
    var Gas = function(_super) {
      __extends(Gas, _super);
      function Gas() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.leftNode = null;
        _this.rightNode = null;
        _this.ballNode = null;
        _this.currentValue = 350;
        return _this;
      }
      Gas_1 = Gas;
      Gas.prototype.onLoad = function() {
        this.ballSp = this.ballNode.getComponent("sp.Skeleton");
        this.rightNode.width = Gas_1.GSA_MAX_WIDTH;
        this.leftNode.width = Gas_1.GSA_MAX_WIDTH;
        this.ballNode.active = false;
        this.leftSp = this.leftNode.children[0].getComponent(sp.Skeleton);
        this.rightSp = this.rightNode.children[0].getComponent(sp.Skeleton);
      };
      Gas.prototype.onEnable = function() {
        this.star();
      };
      Gas.prototype.onDisable = function() {
        this.musicKey && cc.audioEngine.stop(this.musicKey);
      };
      Gas.prototype.star = function() {
        var _this = this;
        this.leftSp.setAnimation(0, barSpName.chuxian, false);
        this.rightSp.setAnimation(0, barSpName.chuxian, false);
        AudioManager_1.default.playEffect("SE_tanshiguaishouADB02_ytz");
        this.scheduleOnce(function() {
          _this.rightNode.width = Gas_1.GSA_MAX_WIDTH / 2;
          _this.leftNode.width = Gas_1.GSA_MAX_WIDTH / 2;
          _this.leftSp.setAnimation(0, barSpName.rchixu, true);
          _this.rightSp.setAnimation(0, barSpName.zchixu, true);
          _this.ballNode.active = true;
          _this.moveBall(450, function() {
            _this.moveBall(250, function() {
              _this.moveBall(Gas_1.GSA_MAX_WIDTH / 2, function() {
                EventMng_1.default.emit(EventConst_1.GameEvent.GAS_STARTUP_COMPLETE);
                _this.scheduleOnce(function() {
                  _this.playSpine(_this.ballSp, ballSpName.idle, true);
                  _this.moveToTigo();
                  AudioManager_1.default.playEffect("SE_tanshiguaishouADB04_ytz", true).then(function(id) {
                    _this.musicKey = id;
                  });
                }, .8);
              });
            });
          });
        }, .7);
      };
      Gas.prototype.moveBall = function(value, callback) {
        AudioManager_1.default.playEffect("SE_tanshiguaishouADB05_ytz");
        this.stopAllTween();
        this.t1 = cc.tween(this).to(1, {
          currentValue: value
        }).start();
        this.t2 = cc.tween(this.leftNode).to(1, {
          width: value + 30
        }).start();
        this.t3 = cc.tween(this.rightNode).to(1, {
          width: Gas_1.GSA_MAX_WIDTH - value + 30
        }).call(function() {}).start();
        this.t4 = cc.tween(this.ballNode).to(1, {
          x: value - Gas_1.GSA_MAX_WIDTH / 2 + 50
        }).start();
        callback && this.scheduleOnce(callback, 1);
      };
      Gas.prototype.bomb = function(callback) {
        var _this = this;
        this.stopAllTween();
        this.timerKey && clearTimeout(this.timerKey);
        this.leftNode.active = this.rightNode.active = false;
        this.playSpine(this.ballSp, ballSpName.bianda, false, function() {
          AudioManager_1.default.playEffect("SE_tanshiguaishouADB06_ytz");
          _this.playSpine(_this.ballSp, ballSpName.baozha, false, function() {
            _this.ballSp.node.active = false;
            callback();
          });
        });
      };
      Gas.prototype.playSpine = function(spNode, spName, loop, callback) {
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
      Gas.prototype.moveToTigo = function() {
        var _this = this;
        this.timerKey && clearTimeout(this.timerKey);
        this.timerKey = setTimeout(function() {
          _this.stopAllTween();
          var time = 10;
          _this.t1 = cc.tween(_this).to(time, {
            currentValue: Gas_1.GSA_MAX_WIDTH
          }).start();
          _this.t2 = cc.tween(_this.leftNode).to(time, {
            width: Gas_1.GSA_MAX_WIDTH
          }).start();
          _this.t3 = cc.tween(_this.rightNode).to(time, {
            width: 0
          }).call(function() {}).start();
          _this.t4 = cc.tween(_this.ballNode).to(time, {
            x: Gas_1.GSA_MAX_WIDTH - Gas_1.GSA_MAX_WIDTH / 2
          }).start();
        }, 3e3);
      };
      Gas.prototype.stopAllTween = function() {
        this.t1 && this.t1.stop();
        this.t2 && this.t2.stop();
        this.t3 && this.t3.stop();
        this.t4 && this.t4.stop();
      };
      var Gas_1;
      Gas.GSA_MAX_WIDTH = 600;
      __decorate([ property(cc.Node) ], Gas.prototype, "leftNode", void 0);
      __decorate([ property(cc.Node) ], Gas.prototype, "rightNode", void 0);
      __decorate([ property(cc.Node) ], Gas.prototype, "ballNode", void 0);
      Gas = Gas_1 = __decorate([ ccclass ], Gas);
      return Gas;
    }(cc.Component);
    exports.default = Gas;
    cc._RF.pop();
  }, {
    "../../../../Scripts/common/AudioManager": "AudioManager",
    "../EventConst": "EventConst",
    "../EventMng": "EventMng"
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
      HandSpineAnimationName["danji"] = "danji";
      HandSpineAnimationName["dianji"] = "dianji";
      HandSpineAnimationName["taishou"] = "taishou";
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
        return _this;
      }
      HandCtr.prototype.start = function() {};
      HandCtr.prototype.onEnable = function() {
        this.skAperture.node.active = false;
      };
      HandCtr.prototype.onDisable = function() {
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
        this.Press(function() {
          cc.tween(_this.node).to(time, {
            position: cc.v3(endPos.x, endPos.y, 0)
          }).call(function() {
            _this.Lift(null);
          }).start();
        });
      };
      HandCtr.prototype.TouchCycle = function(starPos, endPos, waitTime, runTime) {
        var _this = this;
        void 0 === waitTime && (waitTime = 3);
        void 0 === runTime && (runTime = .5);
        this.schedule(function() {
          _this.TouchAnimation(starPos, endPos, runTime);
        }, waitTime, cc.macro.REPEAT_FOREVER, .01);
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
      HandCtr = __decorate([ ccclass ], HandCtr);
      return HandCtr;
    }(cc.Component);
    exports.default = HandCtr;
    cc._RF.pop();
  }, {} ],
  JudgeRandom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3350bmRxSpEm4OzpR829/A5", "JudgeRandom");
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
    var AudioManager_1 = require("../../../Scripts/common/AudioManager");
    var Util_1 = require("../../../Scripts/common/Util");
    var EventConst_1 = require("./EventConst");
    var EventMng_1 = require("./EventMng");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JudgeRandom = function(_super) {
      __extends(JudgeRandom, _super);
      function JudgeRandom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_soundNode = null;
        _this.nodeSelectA = null;
        _this.nodeSelectB = null;
        _this.nodeSelectC = null;
        _this.nodeBg = null;
        _this.nodeRightBg = null;
        _this.btnA = null;
        _this.btnB = null;
        _this.btnC = null;
        _this.num_wrongCount = 0;
        _this.bool_isCanClick = true;
        _this.str_targetAnswer = "";
        _this.num_waitTime = 0;
        return _this;
      }
      JudgeRandom.prototype.start = function() {
        Util_1.default.addVoice(this.node_soundNode, this.playBtnCall, this);
        this.nodeRightBg.active = false;
      };
      JudgeRandom.prototype.playBtnCall = function() {
        if (AudioManager_1.default.isPlaying) return;
        Util_1.default.playVoiceAni();
        AudioManager_1.default.playEffect(this.str_nowLevelPlayerVideo, false, function() {
          return Util_1.default.stopVoiceAni();
        });
      };
      JudgeRandom.prototype.Init = function(selectAValue, selectBValue, playerVideoName, nowLevel, rightAnswer) {
        var _this = this;
        this.nodeRightBg.active = false;
        this.nodeBg.active = true;
        this.num_wrongCount = 0;
        var fontSize = 70;
        var listLevel = [ 1, 2 ];
        this.str_nowLevelPlayerVideo = playerVideoName;
        fontSize = -1 != listLevel.indexOf(nowLevel) ? 140 : 75;
        this.btnA.interactable = false;
        this.btnB.interactable = false;
        this.str_targetAnswer = rightAnswer;
        this.bool_isCanClick = false;
        var listVideo = [ "Listen and click_ytz", "Listen and click_ytz", "Which word has A_ytz", "Which word has B_ytz" ];
        AudioManager_1.default.playEffect(listVideo[nowLevel - 1], false, function() {
          if (3 == nowLevel || 4 == nowLevel) {
            _this.btnA.interactable = true;
            _this.btnB.interactable = true;
            _this.bool_isCanClick = true;
            EventMng_1.default.emit(EventConst_1.GameEvent.AUDIO_PLAYER_FINISH, true);
          } else AudioManager_1.default.playEffect(playerVideoName, false, function() {
            _this.btnA.interactable = true;
            _this.btnB.interactable = true;
            _this.bool_isCanClick = true;
            EventMng_1.default.emit(EventConst_1.GameEvent.AUDIO_PLAYER_FINISH, true);
          });
        });
        this.unscheduleAllCallbacks();
        this.schedule(function() {
          _this.DetectionTip();
        }, 1);
      };
      JudgeRandom.prototype.OnClickSelectA = function() {
        var _this = this;
        if (!this.bool_isCanClick) return;
        this.bool_isCanClick = false;
        if ("a" == this.str_targetAnswer) {
          this.nodeRightBg.active = true;
          this.nodeRightBg.setPosition(this.btnA.node.getPosition());
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_RIGHT, false, function() {
            EventMng_1.default.emit(EventConst_1.GameEvent.ANSWER_COMPLETED, _this.num_wrongCount);
          });
        } else {
          this.num_wrongCount += 1;
          this.PlayErrorAnimation(this.nodeSelectA, function() {
            _this.bool_isCanClick = true;
          });
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_ERROR);
        }
        this.num_waitTime = -1;
      };
      JudgeRandom.prototype.OnClickSelectB = function() {
        var _this = this;
        if (!this.bool_isCanClick) return;
        this.bool_isCanClick = false;
        if ("b" == this.str_targetAnswer) {
          this.nodeRightBg.setPosition(this.btnB.node.getPosition());
          this.nodeRightBg.active = true;
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_RIGHT, false, function() {
            EventMng_1.default.emit(EventConst_1.GameEvent.ANSWER_COMPLETED, _this.num_wrongCount);
          });
        } else {
          this.num_wrongCount += 1;
          this.PlayErrorAnimation(this.nodeSelectB, function() {
            _this.bool_isCanClick = true;
          });
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_ERROR);
        }
        this.num_waitTime = -1;
      };
      JudgeRandom.prototype.OnClickSelectC = function() {
        var _this = this;
        if (!this.bool_isCanClick) return;
        this.bool_isCanClick = false;
        if ("c" == this.str_targetAnswer) {
          this.nodeRightBg.setPosition(this.btnB.node.getPosition());
          this.nodeRightBg.active = true;
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_RIGHT, false, function() {
            EventMng_1.default.emit(EventConst_1.GameEvent.ANSWER_COMPLETED, _this.num_wrongCount);
          });
        } else {
          this.num_wrongCount += 1;
          this.PlayErrorAnimation(this.nodeSelectC, function() {
            _this.bool_isCanClick = true;
          });
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_ERROR);
        }
        this.num_waitTime = -1;
      };
      JudgeRandom.prototype.PlayErrorAnimation = function(obj, callback) {
        obj.stopAllActions();
        cc.tween(obj).by(.1 / 3, {
          position: cc.v3(-25, 0, 0)
        }).by(.2 / 3, {
          position: cc.v3(50, 0, 0)
        }).by(.1 / 3, {
          position: cc.v3(-25, 0, 0)
        }).call(function() {
          callback && callback();
        }).start();
      };
      JudgeRandom.prototype.DetectionTip = function() {
        this.num_waitTime += 1;
        if (this.num_waitTime > 5) {
          this.num_waitTime = -1;
          this.playTipAnimation();
        }
      };
      JudgeRandom.prototype.playTipAnimation = function() {
        this.btnA.node.stopAllActions();
        this.btnB.node.stopAllActions();
        this.btnC.node.stopAllActions();
        cc.tween(this.btnA.node).repeat(2, cc.tween().to(.05, {
          scale: 1.1
        }).to(.1, {
          scale: .9
        }).to(.05, {
          scale: 1
        })).call(function() {}).start();
        cc.tween(this.btnB.node).repeat(2, cc.tween().to(.05, {
          scale: 1.1
        }).to(.1, {
          scale: .9
        }).to(.05, {
          scale: 1
        })).call(function() {}).start();
        cc.tween(this.btnC.node).repeat(2, cc.tween().to(.05, {
          scale: 1.1
        }).to(.1, {
          scale: .9
        }).to(.05, {
          scale: 1
        })).call(function() {}).start();
      };
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5587\u53ed"
      }) ], JudgeRandom.prototype, "node_soundNode", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9009\u9879A"
      }) ], JudgeRandom.prototype, "nodeSelectA", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9009\u9879B"
      }) ], JudgeRandom.prototype, "nodeSelectB", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9009\u9879C"
      }) ], JudgeRandom.prototype, "nodeSelectC", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u80cc\u666f"
      }) ], JudgeRandom.prototype, "nodeBg", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u6b63\u786e\u80cc\u666f"
      }) ], JudgeRandom.prototype, "nodeRightBg", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u6309\u94aea"
      }) ], JudgeRandom.prototype, "btnA", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u6309\u94aeB"
      }) ], JudgeRandom.prototype, "btnB", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u6309\u94aeC"
      }) ], JudgeRandom.prototype, "btnC", void 0);
      JudgeRandom = __decorate([ ccclass ], JudgeRandom);
      return JudgeRandom;
    }(cc.Component);
    exports.default = JudgeRandom;
    cc._RF.pop();
  }, {
    "../../../Scripts/common/AudioManager": "AudioManager",
    "../../../Scripts/common/Util": "Util",
    "./EventConst": "EventConst",
    "./EventMng": "EventMng"
  } ],
  JudgeTree: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a4b0WRZiFPFI1Wb7GG6OlC", "JudgeTree");
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
    var AudioManager_1 = require("../../../Scripts/common/AudioManager");
    var Util_1 = require("../../../Scripts/common/Util");
    var WordTool_1 = require("../../../Tools/Word/scripts/WordTool");
    var EventConst_1 = require("./EventConst");
    var EventMng_1 = require("./EventMng");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JudgeThree = function(_super) {
      __extends(JudgeThree, _super);
      function JudgeThree() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_soundNode = null;
        _this.nodeSelectA = null;
        _this.nodeSelectB = null;
        _this.nodeSelectC = null;
        _this.labelSelectA = null;
        _this.labelSelectB = null;
        _this.nodeBg = null;
        _this.nodeRightBg = null;
        _this.btnA = null;
        _this.btnB = null;
        _this.btnC = null;
        _this.wordNode = null;
        _this.num_wrongCount = 0;
        _this.bool_isCanClick = true;
        _this.str_targetAnswer = "";
        _this.num_waitTime = 0;
        return _this;
      }
      JudgeThree.prototype.start = function() {
        Util_1.default.addVoice(this.node_soundNode, this.playBtnCall, this);
        this.nodeRightBg.active = false;
      };
      JudgeThree.prototype.playBtnCall = function() {
        Util_1.default.playVoiceAni();
        AudioManager_1.default.playMusic(this.str_nowLevelPlayerVideo.audio, function() {
          return Util_1.default.stopVoiceAni();
        });
      };
      JudgeThree.prototype.Init = function(selectAValue, selectBValue, playerVideoName, nowLevel, rightAnswer) {
        var _this = this;
        this.nodeRightBg.active = false;
        this.nodeBg.active = true;
        this.num_wrongCount = 0;
        var fontSize = 70;
        var listLevel = [ 1, 2 ];
        this.str_nowLevelPlayerVideo = playerVideoName;
        fontSize = -1 != listLevel.indexOf(nowLevel) ? 140 : 75;
        this.btnA.interactable = false;
        this.btnB.interactable = false;
        this.str_targetAnswer = rightAnswer;
        this.bool_isCanClick = false;
        var listVideo = [ "01 mango", "03 banana", "05 coconut", "Which word has A_ytz", "Which word has B_ytz", "Which word has B_ytz" ];
        this.unscheduleAllCallbacks();
        if (nowLevel > 3) {
          this.btnA.interactable = true;
          this.btnB.interactable = true;
          this.bool_isCanClick = true;
          EventMng_1.default.emit(EventConst_1.GameEvent.AUDIO_PLAYER_FINISH, true);
        } else this.scheduleOnce(function() {
          AudioManager_1.default.playEffect(_this.str_nowLevelPlayerVideo.audio, false, function() {
            _this.btnA.interactable = true;
            _this.btnB.interactable = true;
            _this.bool_isCanClick = true;
            EventMng_1.default.emit(EventConst_1.GameEvent.AUDIO_PLAYER_FINISH, true);
          });
        }, .5);
        this.schedule(function() {
          _this.DetectionTip();
        }, 1);
      };
      JudgeThree.prototype.OnClickSelectA = function() {
        var _this = this;
        if (!this.bool_isCanClick) return;
        this.bool_isCanClick = false;
        if ("a" == this.str_targetAnswer) {
          this.showRightBg();
          this.nodeRightBg.setPosition(this.btnA.node.getPosition());
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_RIGHT, false, function() {
            EventMng_1.default.emit(EventConst_1.GameEvent.ANSWER_COMPLETED, _this.num_wrongCount);
          });
          var word = this.wordNode.getComponent(WordTool_1.default);
          word.Init(word.mango);
        } else {
          this.num_wrongCount += 1;
          this.PlayErrorAnimation(this.nodeSelectA, function() {
            _this.bool_isCanClick = true;
          });
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_ERROR);
        }
        this.num_waitTime = -1;
      };
      JudgeThree.prototype.showRightBg = function() {
        this.nodeRightBg.active = true;
        this.nodeRightBg.getComponent(sp.Skeleton).setAnimation(0, "13_1_zhengfangti xiaoshixiaoguo", false);
      };
      JudgeThree.prototype.OnClickSelectB = function() {
        var _this = this;
        if (!this.bool_isCanClick) return;
        this.bool_isCanClick = false;
        if ("b" == this.str_targetAnswer) {
          this.nodeRightBg.setPosition(this.btnB.node.getPosition());
          this.showRightBg();
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_RIGHT, false, function() {
            EventMng_1.default.emit(EventConst_1.GameEvent.ANSWER_COMPLETED, _this.num_wrongCount);
          });
          var word = this.wordNode.getComponent(WordTool_1.default);
          word.Init(word.banana);
        } else {
          this.num_wrongCount += 1;
          this.PlayErrorAnimation(this.nodeSelectB, function() {
            _this.bool_isCanClick = true;
          });
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_ERROR);
        }
        this.num_waitTime = -1;
      };
      JudgeThree.prototype.OnClickSelectC = function() {
        var _this = this;
        if (!this.bool_isCanClick) return;
        this.bool_isCanClick = false;
        if ("c" == this.str_targetAnswer) {
          this.nodeRightBg.setPosition(this.btnC.node.getPosition());
          this.showRightBg();
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_RIGHT, false, function() {
            EventMng_1.default.emit(EventConst_1.GameEvent.ANSWER_COMPLETED, _this.num_wrongCount);
          });
          var word = this.wordNode.getComponent(WordTool_1.default);
          word.Init(word.coconut);
        } else {
          this.num_wrongCount += 1;
          this.PlayErrorAnimation(this.nodeSelectC, function() {
            _this.bool_isCanClick = true;
          });
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_ERROR);
        }
        this.num_waitTime = -1;
      };
      JudgeThree.prototype.PlayErrorAnimation = function(obj, callback) {
        obj.stopAllActions();
        cc.tween(obj).by(.1 / 3, {
          position: cc.v3(-25, 0, 0)
        }).by(.2 / 3, {
          position: cc.v3(50, 0, 0)
        }).by(.1 / 3, {
          position: cc.v3(-25, 0, 0)
        }).call(function() {
          callback && callback();
        }).start();
      };
      JudgeThree.prototype.DetectionTip = function() {
        this.num_waitTime += 1;
        if (this.num_waitTime > 5) {
          this.num_waitTime = -1;
          this.playTipAnimation();
        }
      };
      JudgeThree.prototype.playTipAnimation = function() {
        this.btnA.node.stopAllActions();
        this.btnB.node.stopAllActions();
        this.btnC.node.stopAllActions();
        cc.tween(this.btnA.node).repeat(2, cc.tween().to(.05, {
          scale: 1.1
        }).to(.1, {
          scale: .9
        }).to(.05, {
          scale: 1
        })).call(function() {}).start();
        cc.tween(this.btnB.node).repeat(2, cc.tween().to(.05, {
          scale: 1.1
        }).to(.1, {
          scale: .9
        }).to(.05, {
          scale: 1
        })).call(function() {}).start();
        cc.tween(this.btnC.node).repeat(2, cc.tween().to(.05, {
          scale: 1.1
        }).to(.1, {
          scale: .9
        }).to(.05, {
          scale: 1
        })).call(function() {}).start();
      };
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5587\u53ed"
      }) ], JudgeThree.prototype, "node_soundNode", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9009\u9879A"
      }) ], JudgeThree.prototype, "nodeSelectA", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9009\u9879B"
      }) ], JudgeThree.prototype, "nodeSelectB", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9009\u9879C"
      }) ], JudgeThree.prototype, "nodeSelectC", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u9009\u9879a\u7684\u63cf\u8ff0\u6587\u672c"
      }) ], JudgeThree.prototype, "labelSelectA", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u9009\u9879B\u7684\u63cf\u8ff0\u6587\u672c"
      }) ], JudgeThree.prototype, "labelSelectB", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u80cc\u666f"
      }) ], JudgeThree.prototype, "nodeBg", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u6b63\u786e\u80cc\u666f"
      }) ], JudgeThree.prototype, "nodeRightBg", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u6309\u94aea"
      }) ], JudgeThree.prototype, "btnA", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u6309\u94aeB"
      }) ], JudgeThree.prototype, "btnB", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u6309\u94aeC"
      }) ], JudgeThree.prototype, "btnC", void 0);
      __decorate([ property(cc.Node) ], JudgeThree.prototype, "wordNode", void 0);
      JudgeThree = __decorate([ ccclass ], JudgeThree);
      return JudgeThree;
    }(cc.Component);
    exports.default = JudgeThree;
    cc._RF.pop();
  }, {
    "../../../Scripts/common/AudioManager": "AudioManager",
    "../../../Scripts/common/Util": "Util",
    "../../../Tools/Word/scripts/WordTool": "WordTool",
    "./EventConst": "EventConst",
    "./EventMng": "EventMng"
  } ],
  Judge: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "25ed1x6QMtJRL3EsPOn6HCV", "Judge");
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
    var AudioManager_1 = require("../../../Scripts/common/AudioManager");
    var Util_1 = require("../../../Scripts/common/Util");
    var EventConst_1 = require("./EventConst");
    var EventMng_1 = require("./EventMng");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Judge = function(_super) {
      __extends(Judge, _super);
      function Judge() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_soundNode = null;
        _this.nodeSelectA = null;
        _this.nodeSelectB = null;
        _this.labelSelectA = null;
        _this.labelSelectB = null;
        _this.nodeBg = null;
        _this.nodeRightBg = null;
        _this.btnA = null;
        _this.btnB = null;
        _this.num_wrongCount = 0;
        _this.bool_isCanClick = true;
        _this.str_targetAnswer = "";
        _this.num_waitTime = 0;
        return _this;
      }
      Judge.prototype.start = function() {
        Util_1.default.addVoice(this.node_soundNode, this.playBtnCall, this);
        this.nodeRightBg.active = false;
      };
      Judge.prototype.playBtnCall = function() {
        if (AudioManager_1.default.isPlaying) return;
        Util_1.default.playVoiceAni();
        AudioManager_1.default.playEffect(this.str_nowLevelPlayerVideo, false, function() {
          return Util_1.default.stopVoiceAni();
        });
      };
      Judge.prototype.Init = function(selectAValue, selectBValue, playerVideoName, nowLevel, rightAnswer) {
        var _this = this;
        this.nodeRightBg.active = false;
        this.nodeBg.active = true;
        this.num_wrongCount = 0;
        var fontSize = 70;
        var listLevel = [ 1, 2 ];
        this.str_nowLevelPlayerVideo = playerVideoName;
        fontSize = -1 != listLevel.indexOf(nowLevel) ? 140 : 75;
        this.labelSelectA.string = selectAValue;
        this.labelSelectB.string = selectBValue;
        this.labelSelectA.fontSize = fontSize;
        this.labelSelectB.fontSize = fontSize;
        this.btnA.interactable = false;
        this.btnB.interactable = false;
        this.str_targetAnswer = rightAnswer;
        this.bool_isCanClick = false;
        var listVideo = [ "Listen and click_ytz", "Listen and click_ytz", "Which word has A_ytz", "Which word has B_ytz" ];
        AudioManager_1.default.playEffect(listVideo[nowLevel - 1], false, function() {
          if (3 == nowLevel || 4 == nowLevel) {
            _this.btnA.interactable = true;
            _this.btnB.interactable = true;
            _this.bool_isCanClick = true;
            EventMng_1.default.emit(EventConst_1.GameEvent.AUDIO_PLAYER_FINISH, true);
          } else AudioManager_1.default.playEffect(playerVideoName, false, function() {
            _this.btnA.interactable = true;
            _this.btnB.interactable = true;
            _this.bool_isCanClick = true;
            EventMng_1.default.emit(EventConst_1.GameEvent.AUDIO_PLAYER_FINISH, true);
          });
        });
        this.unscheduleAllCallbacks();
        this.schedule(function() {
          _this.DetectionTip();
        }, 1);
      };
      Judge.prototype.OnClickSelectA = function() {
        var _this = this;
        if (!this.bool_isCanClick) return;
        this.bool_isCanClick = false;
        if ("a" == this.str_targetAnswer) {
          this.nodeRightBg.active = true;
          this.nodeRightBg.setPosition(this.btnA.node.getPosition());
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_RIGHT, false, function() {
            EventMng_1.default.emit(EventConst_1.GameEvent.ANSWER_COMPLETED, _this.num_wrongCount);
          });
        } else {
          this.num_wrongCount += 1;
          this.PlayErrorAnimation(this.nodeSelectA, function() {
            _this.bool_isCanClick = true;
          });
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_ERROR);
        }
        this.num_waitTime = -1;
      };
      Judge.prototype.OnClickSelectB = function() {
        var _this = this;
        if (!this.bool_isCanClick) return;
        this.bool_isCanClick = false;
        if ("b" == this.str_targetAnswer) {
          this.nodeRightBg.setPosition(this.btnB.node.getPosition());
          this.nodeRightBg.active = true;
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_RIGHT, false, function() {
            EventMng_1.default.emit(EventConst_1.GameEvent.ANSWER_COMPLETED, _this.num_wrongCount);
          });
        } else {
          this.num_wrongCount += 1;
          this.PlayErrorAnimation(this.nodeSelectB, function() {
            _this.bool_isCanClick = true;
          });
          AudioManager_1.default.playEffect(AudioManager_1.default.GAME_ERROR);
        }
        this.num_waitTime = -1;
      };
      Judge.prototype.PlayErrorAnimation = function(obj, callback) {
        obj.stopAllActions();
        cc.tween(obj).by(.1 / 3, {
          position: cc.v3(-25, 0, 0)
        }).by(.2 / 3, {
          position: cc.v3(50, 0, 0)
        }).by(.1 / 3, {
          position: cc.v3(-25, 0, 0)
        }).call(function() {
          callback && callback();
        }).start();
      };
      Judge.prototype.DetectionTip = function() {
        this.num_waitTime += 1;
        if (this.num_waitTime > 5) {
          this.num_waitTime = -1;
          this.playTipAnimation();
        }
      };
      Judge.prototype.playTipAnimation = function() {
        this.btnA.node.stopAllActions();
        this.btnB.node.stopAllActions();
        cc.tween(this.btnA.node).repeat(2, cc.tween().to(.05, {
          scale: 1.1
        }).to(.1, {
          scale: .9
        }).to(.05, {
          scale: 1
        })).call(function() {}).start();
        cc.tween(this.btnB.node).repeat(2, cc.tween().to(.05, {
          scale: 1.1
        }).to(.1, {
          scale: .9
        }).to(.05, {
          scale: 1
        })).call(function() {}).start();
      };
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5587\u53ed"
      }) ], Judge.prototype, "node_soundNode", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9009\u9879A"
      }) ], Judge.prototype, "nodeSelectA", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9009\u9879B"
      }) ], Judge.prototype, "nodeSelectB", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u9009\u9879a\u7684\u63cf\u8ff0\u6587\u672c"
      }) ], Judge.prototype, "labelSelectA", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u9009\u9879B\u7684\u63cf\u8ff0\u6587\u672c"
      }) ], Judge.prototype, "labelSelectB", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u80cc\u666f"
      }) ], Judge.prototype, "nodeBg", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u6b63\u786e\u80cc\u666f"
      }) ], Judge.prototype, "nodeRightBg", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u6309\u94aea"
      }) ], Judge.prototype, "btnA", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "\u6309\u94aeB"
      }) ], Judge.prototype, "btnB", void 0);
      Judge = __decorate([ ccclass ], Judge);
      return Judge;
    }(cc.Component);
    exports.default = Judge;
    cc._RF.pop();
  }, {
    "../../../Scripts/common/AudioManager": "AudioManager",
    "../../../Scripts/common/Util": "Util",
    "./EventConst": "EventConst",
    "./EventMng": "EventMng"
  } ],
  Level: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "345fdg/k+lG+YS1BA0uBj9m", "Level");
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
    var Level = function(_super) {
      __extends(Level, _super);
      function Level() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeLevel = null;
        _this.list_dot = [];
        return _this;
      }
      Level.prototype.onLoad = function() {
        this.list_dot = [];
        this.list_dot = this.nodeLevel.children;
        this.setLevel(0);
      };
      Level.prototype.setLevel = function(level) {
        for (var i = 0; i < this.list_dot.length; i++) {
          var element = this.list_dot[i];
          this.list_dot[i].active = level - 1 >= i;
        }
      };
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5173\u5361\u7ea2\u70b9"
      }) ], Level.prototype, "nodeLevel", void 0);
      Level = __decorate([ ccclass ], Level);
      return Level;
    }(cc.Component);
    exports.default = Level;
    cc._RF.pop();
  }, {} ],
  Main: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "446c6a+BdpNhpYJZiwhoYWQ", "Main");
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
    var TigoManager_1 = require("../base/TigoManager");
    var GameData_1 = require("./GameData");
    var Util_1 = require("./Util");
    false;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.menuPre = null;
        _this.menuItem = null;
        _this.node_nowShow = null;
        _this.page_num = 0;
        _this.Lesson_Sign = "L1W1D5Game";
        _this.page = "page";
        _this.star = "star";
        _this.record_num = "record_num";
        _this.isSecgame = 0;
        _this.secKey = "seckey";
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var page = this.Lesson_Sign + this.page;
        var star = this.Lesson_Sign + this.star;
        var record_num = this.Lesson_Sign + this.record_num;
        GameData_1.default.record_num = TigoManager_1.default.callAppToStorage("GET", record_num) || 0;
        var num = TigoManager_1.default.callAppToStorage("GET", star) || 0;
        GameData_1.default.setStarNum(num);
        console.log("\u5f53\u524d\u6e38\u620f\u5f00\u53e3\u6570===========\u300b" + GameData_1.default.record_num);
        this.page_num = TigoManager_1.default.callAppToStorage("GET", page) || this.page_num;
        console.log("\u5f53\u524d\u6e38\u620f\u9875\u6570============\u300b" + this.page_num);
        var sgk = this.Lesson_Sign + this.secKey;
        this.isSecgame = TigoManager_1.default.callAppToStorage("GET", sgk) || 0;
        console.log("\u6e38\u620f isSec ===" + this.isSecgame);
        TigoManager_1.default.callAppToStorage("GET", sgk) && console.log("callAppToStorage sgk issecgame \u6709\u6570\u636e");
        cc.macro.ENABLE_MULTI_TOUCH = false;
        TigoManager_1.default.callAppToLoaded();
        this.openGame(0);
        this.registerListener();
        cc.game.on(cc.game.EVENT_HIDE, function() {
          console.log("\u6e38\u620f\u8fdb\u5165\u4e86\u540e\u53f0~~~~~~~~");
          cc.audioEngine.pauseMusic();
          cc.audioEngine.pauseAllEffects();
          cc.game.pause();
        });
        cc.game.on(cc.game.EVENT_SHOW, function() {
          console.log("\u91cd\u65b0\u56de\u5230\u4e86\u6e38\u620f~~~~~~~~");
          cc.audioEngine.resumeMusic();
          cc.audioEngine.resumeAllEffects();
          cc.game.resume();
        });
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.registerListener = function() {
        window.webframe.Notify.listen("entryMenu", this.entryMenu, this, false);
      };
      NewClass.prototype.entryMenu = function(endtag) {
        this.page_num++;
        this.page_num >= GameData_1.default.node_path.length - 1 && TigoManager_1.default.callAppToSpeed();
        console.log("this.page_num ===" + this.page_num);
        console.log("GameData.node_path.length ===" + GameData_1.default.node_path.length);
        if (this.page_num >= GameData_1.default.node_path.length) {
          var sgk = this.Lesson_Sign + this.secKey;
          TigoManager_1.default.callAppToStorage("PUT", sgk, 1);
          this.isSecgame = 1;
          if (endtag) {
            console.log("into all game end ani");
            this.gameAllend();
            return;
          }
          this.page_num = GameData_1.default.node_path.length - 1;
        }
        var page = this.Lesson_Sign + this.page;
        var star = this.Lesson_Sign + this.star;
        var record_num = this.Lesson_Sign + this.record_num;
        TigoManager_1.default.callAppToStorage("PUT", page, this.page_num);
        TigoManager_1.default.callAppToStorage("PUT", star, GameData_1.default.totalStar_num);
        TigoManager_1.default.callAppToStorage("PUT", record_num, Number(GameData_1.default.record_num));
        if (this.node_nowShow) {
          Util_1.default.voiceNode = null;
          this.node_nowShow.destroy();
        }
        cc.audioEngine.stopAllEffects();
        this.openMenu(true);
      };
      NewClass.prototype.openMenu = function(isGoon) {
        void 0 === isGoon && (isGoon = false);
        this.menuItem = cc.instantiate(this.menuPre);
        this.node.addChild(this.menuItem);
        this.menuItem.getComponent("gameMenu").initMenu(this.page_num, this.isSecgame, isGoon, this);
      };
      NewClass.prototype.openGame = function(gid) {
        this.menuItem && this.menuItem.destroy();
        this.loadPage(gid);
      };
      NewClass.prototype.gameAllend = function() {
        var star = this.Lesson_Sign + this.star;
        console.log("\u672c\u90e8\u5206\u4e00\u5171\u83b7\u5f97\u91d1\u5e01 === " + GameData_1.default.totalStar_num);
        console.log("\u672c\u90e8\u5206\u4e00\u5171\u5f00\u53e3 === " + GameData_1.default.record_num + "\u6b21");
        var h = {
          userId: TigoManager_1.default.userId,
          lessonId: TigoManager_1.default.classId,
          redVal: GameData_1.default.totalStar_num,
          openVal: GameData_1.default.record_num,
          lessonModelId: TigoManager_1.default.lessonModuleId
        };
        TigoManager_1.default.callAppToHttp("POST", GameData_1.default.totalStar_num, GameData_1.default.record_num);
        TigoManager_1.default.callAppToStorage("remove", star);
        TigoManager_1.default.callAppToClose("replayOrNext", true);
      };
      NewClass.prototype.loadPage = function(page_num) {
        var _this = this;
        console.log("\u5f53\u524d\u52a0\u8f7d\u7684\u6e38\u620f\u9875\u6570---------------\x3e" + page_num);
        var nameProfab_str = "prefabs/" + GameData_1.default.getNodePath(page_num);
        cc.loader.loadRes(nameProfab_str, function(err, prefab) {
          err ? console.log(err, "err \u9884\u5236\u4f53\u52a0\u8f7d\u5931\u8d25==========>") : _this.addPrefab(prefab);
        });
      };
      NewClass.prototype.addPrefab = function(prefab) {
        if (this.node_nowShow) {
          Util_1.default.voiceNode = null;
          this.node_nowShow.destroy();
        }
        cc.audioEngine.stopAllEffects();
        this.node_nowShow = cc.instantiate(prefab);
        if (0 != this.page_num) {
          this.node_nowShow.opacity = 100;
          cc.tween(this.node_nowShow).to(1, {
            opacity: 255
          }).start();
        }
        this.node.addChild(this.node_nowShow);
        this.node.getChildByName("coin") && this.node.getChildByName("coin").destroy();
      };
      NewClass.prototype.onDestroy = function() {
        this.unRegisterListener();
      };
      NewClass.prototype.unRegisterListener = function() {
        window.webframe.Notify.ignore("entryMenu", this.entryMenu, this, false);
      };
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "menuPre", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    console.log("addEventListener==========");
    window.addEventListener("message", function(e) {
      console.log("get app data === ", e.data);
      e.data.action && window["callCocos"](e.data);
    }, false);
    console.log("addEventListener-----------");
    cc._RF.pop();
  }, {
    "../base/TigoManager": "TigoManager",
    "./GameData": "GameData",
    "./Util": "Util"
  } ],
  Point: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be1f7WwPUdP07sBcfdGmZ6Y", "Point");
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
    var TigoManager_1 = require("../base/TigoManager");
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
        cc.log("event:" + event + ",data:" + JSON.stringify(data));
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
    "../base/TigoManager": "TigoManager"
  } ],
  QuestionBoardBottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b8bfDQKutPtrfnLb56WZwr", "QuestionBoardBottom");
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
    var AudioManager_1 = require("../../../../Scripts/common/AudioManager");
    var Point_1 = require("../../../../Scripts/common/Point");
    var WordTool_1 = require("../../../../Tools/Word/scripts/WordTool");
    var EventConst_1 = require("../EventConst");
    var EventMng_1 = require("../EventMng");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var QuestionBoardBottom = function(_super) {
      __extends(QuestionBoardBottom, _super);
      function QuestionBoardBottom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.item1 = null;
        _this.item2 = null;
        _this.item3 = null;
        _this.rightNode = null;
        _this.wrongNode = null;
        _this.wordNode = null;
        _this.audio = [ {
          audio: "01 mango",
          index: 2,
          word: "mango"
        }, {
          audio: "03 banana",
          index: 3,
          word: "banana"
        }, {
          audio: "05 coconut",
          index: 1,
          word: "coconut"
        } ];
        _this.rightCount = 0;
        _this.lastSelect = 0;
        _this.times = 0;
        _this.round = 4;
        return _this;
      }
      QuestionBoardBottom_1 = QuestionBoardBottom;
      QuestionBoardBottom.prototype.onLoad = function() {
        this.questionList = [];
        while (this.audio.length > 0) {
          var index = Math.floor(Math.random() * this.audio.length);
          var item = this.audio.splice(index, 1)[0];
          this.questionList.push(item);
        }
      };
      QuestionBoardBottom.prototype.randomQuestion = function() {
        var _this = this;
        this.show();
        this.scheduleOnce(function() {
          _this.rightCount = 0;
          _this.playQuestion();
          _this.node.getChildByName("items").children.forEach(function(element) {
            element.on(cc.Node.EventType.TOUCH_START, _this.onClick, _this);
          });
          _this.schedule(function() {
            _this.node.getChildByName("items").children.forEach(function(element) {
              element.on(cc.Node.EventType.TOUCH_START, _this.onClick, _this);
            });
          }, 1, cc.macro.REPEAT_FOREVER, 2);
        }, 1.5);
      };
      QuestionBoardBottom.prototype.onClick = function(event) {
        var _this = this;
        cc.log("Date.now() - this.lastSelect", Date.now() - this.lastSelect);
        if (Date.now() - this.lastSelect > QuestionBoardBottom_1.MIN_SELECT_INTERVAL && this.currentQuestion) {
          var index = parseInt(event.target.name.substr(1, 1));
          var result = void 0;
          if (index == this.currentQuestion.index) {
            this.unschedule(this.playAudio);
            result = true;
            this.rightCount += 1;
            this.playRight(event.target);
            this.lastSelect = Date.now();
            AudioManager_1.default.playEffect(AudioManager_1.default.GAME_RIGHT);
            var word = this.wordNode.getComponent(WordTool_1.default);
            word.Init(word[this.currentQuestion.word]);
            Point_1.default.instance.roundEnd(this.round, this.times + 1);
            this.round += 1;
            this.times = 0;
            this.scheduleOnce(function() {
              _this.playQuestion();
            }, 1.5);
          } else {
            this.times += 1;
            result = false;
            cc.log("\u9519\u8bef");
            this.playWrong(event.target);
            AudioManager_1.default.playEffect(AudioManager_1.default.GAME_ERROR);
          }
          EventMng_1.default.emit(EventConst_1.GameEvent.BOTTOM_SELECT_COMPLETE, result, this.rightCount);
        }
      };
      QuestionBoardBottom.prototype.show = function() {
        cc.tween(this.node).to(1, {
          y: -230
        }).call(function() {}).start();
      };
      QuestionBoardBottom.prototype.hide = function() {
        this.unscheduleAllCallbacks();
        cc.tween(this.node).to(1, {
          y: -555
        }).start();
      };
      QuestionBoardBottom.prototype.playQuestion = function() {
        this.currentQuestion = this.questionList.pop();
        cc.log("currentQuestion", this.currentQuestion);
        this.currentQuestion && Point_1.default.instance.roundStart(this.round);
        this.playAudio();
        this.schedule(this.playAudio, 2);
      };
      QuestionBoardBottom.prototype.playAudio = function() {
        if (this.currentQuestion) {
          AudioManager_1.default.playEffect(this.currentQuestion.audio);
          for (var i = 1; i < 4; i++) cc.tween(this["item" + i]).to(.1, {
            scale: .7
          }).to(.1, {
            scale: 1
          }).start();
        }
      };
      QuestionBoardBottom.prototype.playRight = function(item) {
        this.rightNode.active = true;
        this.rightNode.position = item.position;
        var sp = this.rightNode.getComponent("sp.Skeleton");
        sp.setAnimation(0, "13_1_zhengfangti xiaoshixiaoguo", false);
      };
      QuestionBoardBottom.prototype.playWrong = function(item) {
        this.wrongNode.active = true;
        this.wrongNode.position = item.position;
        var sp = this.wrongNode.getComponent("sp.Skeleton");
        sp.setAnimation(0, "08_4_z_zhenzha", false);
      };
      var QuestionBoardBottom_1;
      QuestionBoardBottom.MIN_SELECT_INTERVAL = 2e3;
      __decorate([ property(cc.Node) ], QuestionBoardBottom.prototype, "item1", void 0);
      __decorate([ property(cc.Node) ], QuestionBoardBottom.prototype, "item2", void 0);
      __decorate([ property(cc.Node) ], QuestionBoardBottom.prototype, "item3", void 0);
      __decorate([ property(cc.Node) ], QuestionBoardBottom.prototype, "rightNode", void 0);
      __decorate([ property(cc.Node) ], QuestionBoardBottom.prototype, "wrongNode", void 0);
      __decorate([ property(cc.Node) ], QuestionBoardBottom.prototype, "wordNode", void 0);
      QuestionBoardBottom = QuestionBoardBottom_1 = __decorate([ ccclass ], QuestionBoardBottom);
      return QuestionBoardBottom;
    }(cc.Component);
    exports.default = QuestionBoardBottom;
    cc._RF.pop();
  }, {
    "../../../../Scripts/common/AudioManager": "AudioManager",
    "../../../../Scripts/common/Point": "Point",
    "../../../../Tools/Word/scripts/WordTool": "WordTool",
    "../EventConst": "EventConst",
    "../EventMng": "EventMng"
  } ],
  Read: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b6da35k7XtDCbufjtpEBB28", "Read");
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
    var RecordControl_1 = require("./RecordControl");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Read = function(_super) {
      __extends(Read, _super);
      function Read() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelShow = null;
        _this.fun_read = null;
        _this.nodeBg = null;
        return _this;
      }
      Read.prototype.Init = function(showContent, nowLevel) {
        var _this = this;
        this.nodeBg.active = false;
        this.labelShow.string = showContent;
        this.scheduleOnce(function() {
          _this.fun_read.prepareRecord(nowLevel - 7);
        }, .5);
      };
      Read.prototype.start = function() {};
      __decorate([ property({
        type: cc.Label,
        displayName: "\u663e\u793a\u7684\u6587\u672c"
      }) ], Read.prototype, "labelShow", void 0);
      __decorate([ property({
        type: RecordControl_1.default,
        displayName: "\u8ddf\u8bfb\u7ba1\u7406\u5668"
      }) ], Read.prototype, "fun_read", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u80cc\u666f"
      }) ], Read.prototype, "nodeBg", void 0);
      Read = __decorate([ ccclass ], Read);
      return Read;
    }(cc.Component);
    exports.default = Read;
    cc._RF.pop();
  }, {
    "./RecordControl": "RecordControl"
  } ],
  RecordControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36b12Wp8lFFCLlaGJiCPf7j", "RecordControl");
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
    var TigoManager_1 = require("../../../Scripts/base/TigoManager");
    var AudioManager_1 = require("../../../Scripts/common/AudioManager");
    var GameData_1 = require("../../../Scripts/common/GameData");
    var EventConst_1 = require("./EventConst");
    var EventMng_1 = require("./EventMng");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RecordControl = function(_super) {
      __extends(RecordControl, _super);
      function RecordControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.rcNode = null;
        _this.labelShowWord = null;
        _this.game_words = [ "A", "B" ];
        _this.sounds_arr = [ "A_ytz", "B_ytz" ];
        _this.curr_index = 0;
        _this.nowActionType = "";
        _this.wrongNum = 0;
        _this.isRecordState = false;
        return _this;
      }
      RecordControl.prototype.onLoad = function() {
        var _this = this;
        cc.game.on(cc.game.EVENT_SHOW, function() {
          if (_this.isRecordState) {
            _this.playWrong();
            _this.isRecordState = false;
          }
        });
      };
      RecordControl.prototype.onEnable = function() {
        window.webframe.Notify.listen("callCocos_data", this.getAppData, this, false);
      };
      RecordControl.prototype.onDisable = function() {
        window.webframe.Notify.ignore("callCocos_data", this.getAppData, this, false);
      };
      RecordControl.prototype.prepareRecord = function(pid) {
        var _this = this;
        this.wrongNum = 0;
        this.curr_index = pid;
        this.nowActionType = "";
        this.rcNode.active = false;
        AudioManager_1.default.playEffect("listen_and_say", false, function() {
          AudioManager_1.default.playEffect(_this.sounds_arr[pid], false, function() {
            _this.record();
          });
        });
      };
      RecordControl.prototype.record = function() {
        var _this = this;
        console.log("record begin");
        this.nowActionType = "";
        AudioManager_1.default.playEffect(AudioManager_1.default.RECORD);
        this.rcNode.active = false;
        this.rcNode.active = true;
        this.rcNode.getComponent("recordAin").initeAniFun(3);
        TigoManager_1.default.callAppToRecord(3e3, this.game_words[this.curr_index]);
        false;
      };
      RecordControl.prototype.getAppData = function(data) {
        console.log("offbus:getAppData  ====  " + JSON.stringify(data));
        var self = this;
        if ("TiGoRecordFinish" == data.action) {
          if ("" == this.nowActionType) {
            console.log("in TiGoRecordFinish!!!   " + this.nowActionType);
            this.nowActionType = data.action;
            this.rcNode.active = false;
            TigoManager_1.default.callAppToResult(this.game_words[this.curr_index], data.param.path);
            var n = Number(GameData_1.default.record_num);
            n += 1;
            GameData_1.default.record_num = n.toString();
          }
        } else if ("TiGoVoiceEvaluationFinish" == data.action && "TiGoRecordFinish" == this.nowActionType) {
          console.log("in TiGoVoiceEvaluationFinish!!!    " + this.nowActionType);
          this.nowActionType = data.action;
          if (this.wrongNum >= 1) {
            self.playRight(1);
            return;
          }
          switch (Number(data.param.code)) {
           case 200:
            console.log("getAppData score ====  " + data.param.score);
            if (Number(data.param.score) > 0) {
              var s = Number(data.param.score);
              console.log("\u52a0\u91d1\u5e01 ======= " + s);
              self.playRight(s);
            } else self.playWrong();
            break;

           default:
            self.playWrong();
            console.log("get error! error === " + data.param.error);
          }
        }
      };
      RecordControl.prototype.playRight = function(score) {
        AudioManager_1.default.playEffect(AudioManager_1.default.SUPER_JOB, false, function() {});
        window.webframe.Notify.trigger("follow_read_completed", score);
        var gid = GameData_1.default.gid[1][this.curr_index];
        TigoManager_1.default.callAppToCollect(gid, 1004, score);
        EventMng_1.default.emit(EventConst_1.GameEvent.ANSWER_COMPLETED, this.wrongNum);
        this.wrongNum = 0;
      };
      RecordControl.prototype.playWrong = function() {
        var _this = this;
        this.wrongNum++;
        AudioManager_1.default.playEffect(AudioManager_1.default.TRY_AGAIN, false, function() {
          _this.record();
        });
      };
      RecordControl.prototype.showWordText = function(word) {
        this.labelShowWord.string = word;
      };
      __decorate([ property(cc.Node) ], RecordControl.prototype, "rcNode", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "\u663e\u793a\u7684\u6587\u672c"
      }) ], RecordControl.prototype, "labelShowWord", void 0);
      RecordControl = __decorate([ ccclass ], RecordControl);
      return RecordControl;
    }(cc.Component);
    exports.default = RecordControl;
    cc._RF.pop();
  }, {
    "../../../Scripts/base/TigoManager": "TigoManager",
    "../../../Scripts/common/AudioManager": "AudioManager",
    "../../../Scripts/common/GameData": "GameData",
    "./EventConst": "EventConst",
    "./EventMng": "EventMng"
  } ],
  RepeatAfterMe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0ddaSvAkBOwYZ0inxSWuku", "RepeatAfterMe");
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
    var TigoManager_1 = require("../../Scripts/base/TigoManager");
    var AudioManager_1 = require("../../Scripts/common/AudioManager");
    var GameData_1 = require("../../Scripts/common/GameData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RepeatAfterMe = function(_super) {
      __extends(RepeatAfterMe, _super);
      function RepeatAfterMe() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.rcNode = null;
        _this.str_nowActionType = "";
        _this.num_wrongNum = 0;
        _this.bool_isRecordState = false;
        return _this;
      }
      RepeatAfterMe.prototype.onLoad = function() {
        var _this = this;
        cc.game.on(cc.game.EVENT_SHOW, function() {
          if (_this.bool_isRecordState) {
            _this.playWrong();
            _this.bool_isRecordState = false;
          }
        });
      };
      RepeatAfterMe.prototype.onEnable = function() {
        window.webframe.Notify.listen("callCocos_data", this.getAppData, this, false);
      };
      RepeatAfterMe.prototype.onDisable = function() {
        window.webframe.Notify.ignore("callCocos_data", this.getAppData, this, false);
      };
      RepeatAfterMe.prototype.prepareRecord = function(str_gameWord, str_sound, num_index) {
        var _this = this;
        void 0 === num_index && (num_index = 1);
        this.num_index = num_index;
        this.str_sound = str_sound;
        this.str_gameWord = str_gameWord;
        this.num_wrongNum = 0;
        this.str_nowActionType = "";
        this.rcNode.active = false;
        AudioManager_1.default.playEffect("listen_and_say", false, function() {
          AudioManager_1.default.playEffect(_this.str_sound, false, function() {
            _this.record();
          });
        });
      };
      RepeatAfterMe.prototype.record = function() {
        var _this = this;
        console.log("record begin");
        this.str_nowActionType = "";
        AudioManager_1.default.playEffect("record");
        this.rcNode.active = false;
        this.rcNode.active = true;
        this.rcNode.getComponent("recordAin").initeAniFun(3);
        TigoManager_1.default.callAppToRecord(3e3, this.str_gameWord);
        false;
      };
      RepeatAfterMe.prototype.getAppData = function(data) {
        console.log("offbus:getAppData  ====  " + JSON.stringify(data));
        var self = this;
        if ("TiGoRecordFinish" == data.action) {
          if ("" == this.str_nowActionType) {
            console.log("in TiGoRecordFinish!!!   " + this.str_nowActionType);
            this.str_nowActionType = data.action;
            this.rcNode.active = false;
            TigoManager_1.default.callAppToResult(this.str_gameWord, data.param.path);
            var n = Number(GameData_1.default.record_num);
            n += 1;
            GameData_1.default.record_num = n.toString();
          }
        } else if ("TiGoVoiceEvaluationFinish" == data.action && "TiGoRecordFinish" == this.str_nowActionType) {
          console.log("in TiGoVoiceEvaluationFinish!!!    " + this.str_nowActionType);
          this.str_nowActionType = data.action;
          if (this.num_wrongNum >= 2) {
            self.playRight(1);
            return;
          }
          switch (Number(data.param.code)) {
           case 200:
            console.log("getAppData score ====  " + data.param.score);
            if (Number(data.param.score) > 0) {
              var s = Number(data.param.score);
              console.log("\u52a0\u91d1\u5e01 ======= " + s);
              self.playRight(s);
            } else self.playWrong();
            break;

           default:
            self.playWrong();
            console.log("get error! error === " + data.param.error);
          }
        }
      };
      RepeatAfterMe.prototype.playRight = function(score) {
        AudioManager_1.default.playEffect(AudioManager_1.default.SUPER_JOB);
        window.webframe.Notify.trigger("follow_read_completed", score);
        var gid = GameData_1.default.gid[1][this.num_index];
        TigoManager_1.default.callAppToCollect(gid, 1004, score);
        this.num_wrongNum = 0;
      };
      RepeatAfterMe.prototype.playWrong = function() {
        var _this = this;
        this.num_wrongNum++;
        AudioManager_1.default.playEffect(AudioManager_1.default.TRY_AGAIN, false, function() {
          _this.record();
        });
      };
      __decorate([ property({
        type: cc.Node,
        displayName: "\u8ddf\u8bfb\u663e\u793a"
      }) ], RepeatAfterMe.prototype, "rcNode", void 0);
      RepeatAfterMe = __decorate([ ccclass ], RepeatAfterMe);
      return RepeatAfterMe;
    }(cc.Component);
    exports.default = RepeatAfterMe;
    cc._RF.pop();
  }, {
    "../../Scripts/base/TigoManager": "TigoManager",
    "../../Scripts/common/AudioManager": "AudioManager",
    "../../Scripts/common/GameData": "GameData"
  } ],
  TigoManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "930edA5XFlHOaGmOkmmyLry", "TigoManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TigoManager = function() {
      function TigoManager() {
        this.userId = "";
        this.classId = "";
        this.moduleId = "";
        this.lessonModuleId = "";
        this.manageMentIndex = 1;
        this.packageId = "";
        this.nextLessonModelId = "";
        this.nextType = "";
        this.ManageType = {
          CocosIn: 1001,
          CocosOut: 1002,
          gameLink: 1003,
          gameScore: 1004,
          gameEvent: 1005
        };
        this.ManageResult = {
          CocosIn: 0,
          CocosOut: 0,
          gameScore: 0,
          gameLink_Right: 1,
          gameLink_Error: 0,
          gameEvent: 1
        };
        this.ReportType = {
          report_reward: "api/reward/info",
          report_speed: "api/course/speed",
          report_operate: "api/operate/infoV2"
        };
        this.CocosByNativeAction = {
          TiGoHttp: "TiGoHttp",
          TiGoClose: "TiGoClose",
          replayOrNext: "replayOrNext",
          TiGoStorage: "TiGoStorage",
          TiGoBaseInfo: "TiGoBaseInfo",
          TiGoLifecycle: "TiGoLifecycle",
          TiGoStopRecord: "TiGoStopRecord",
          TiGoStartRecord: "TiGoStartRecord",
          TiGoRecordFinish: "TiGoRecordFinish",
          TiGoVoiceEvaluation: "TiGoVoiceEvaluation",
          TiGoVoiceEvaluationFinish: "TiGoVoiceEvaluationFinish",
          TiGoAnalyse: "TiGoAnalyse"
        };
      }
      TigoManager.getInstance = function() {
        if (!this._instance) {
          this._instance = new TigoManager();
          this._instance.getBaseInfo();
        }
        console.log("TigoManager _instance is success");
        return this._instance;
      };
      TigoManager.prototype.setBaseInfo = function(userData) {
        console.log("setBaseInfo ====== " + userData);
        var json = JSON.parse(userData);
        if (json) {
          this.setUserId(json.userId);
          this.setClassId(json.lessonId);
          this.setModuleId(json.moduleId);
          this.setLessonModuleId(json.lessonModuleId);
          this.setPackageId(json.packageId);
          this.setNextLessonModelId(json.nextLessonModelId);
          this.setNextType(json.nextType);
        }
      };
      TigoManager.prototype.setClassId = function(cid) {
        if (!cid) return;
        this.classId = cid;
      };
      TigoManager.prototype.setUserId = function(uid) {
        if (!uid) return;
        this.userId = uid;
      };
      TigoManager.prototype.setModuleId = function(mid) {
        if (!mid) return;
        this.moduleId = mid;
      };
      TigoManager.prototype.setLessonModuleId = function(lid) {
        if (!lid) return;
        this.lessonModuleId = lid;
      };
      TigoManager.prototype.setPackageId = function(pid) {
        if (!pid) return;
        this.packageId = pid;
      };
      TigoManager.prototype.setNextLessonModelId = function(pid) {
        if (!pid) return;
        this.nextLessonModelId = pid;
      };
      TigoManager.prototype.setNextType = function(pid) {
        if (!pid) return;
        this.nextType = pid;
      };
      TigoManager.prototype.callAppToClose = function(data, next) {
        void 0 === next && (next = false);
        var handleData = next ? {
          action: this.CocosByNativeAction.TiGoClose,
          param: {
            closeNext: data
          }
        } : {
          action: this.CocosByNativeAction.TiGoClose,
          param: {}
        };
        console.log("callAppToClose ============== " + JSON.stringify(handleData));
        this.getNative(handleData);
      };
      TigoManager.prototype.callAppToRecord = function(sec, word) {
        var handleData = {
          action: this.CocosByNativeAction.TiGoStartRecord,
          param: {
            name: "record",
            time: sec.toString(),
            standardText: word
          }
        };
        this.getNative(handleData);
        console.log("callAppToRecord ============== " + JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToStopRecord = function() {
        var handleData = {
          action: this.CocosByNativeAction.TiGoStopRecord
        };
        this.getNative(handleData);
        console.log("callAppToStopRecord ============== " + JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToResult = function(word, path) {
        var handleData = {
          action: this.CocosByNativeAction.TiGoVoiceEvaluation,
          param: {
            standardText: word || "",
            path: path
          }
        };
        this.getNative(handleData);
        console.log("callAppToResult ============== " + JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToStorage = function(method, key, val) {
        void 0 === val && (val = 0);
        var value = "";
        switch (method) {
         case "PUT":
          value = val.toString();
        }
        var handleData = {
          action: this.CocosByNativeAction.TiGoStorage,
          param: {
            method: method,
            key: key,
            value: value.toString()
          }
        };
        console.log("callAppToStorage ============== " + JSON.stringify(handleData));
        if (window.tiGo) {
          var page_num = window.tiGo.callApp(JSON.stringify(handleData));
          return page_num;
        }
        if (window.webkit) {
          var page_num = window.prompt("callApp", JSON.stringify(handleData));
          console.log(page_num);
          return page_num;
        }
      };
      TigoManager.prototype.callAppToHttp = function(method, coin, speak) {
        var u = this.userId;
        var l = this.classId;
        var lM = this.lessonModuleId;
        console.log("userId ====== " + u + "   lessonId ====== " + l + "    lessonModuleId ===== " + lM);
        var h = {
          userId: u,
          lessonId: l,
          lessonModelId: lM,
          redVal: coin,
          openVal: speak
        };
        var handleData = {
          action: this.CocosByNativeAction.TiGoHttp,
          param: {
            url: this.ReportType.report_reward,
            method: method,
            params: h,
            unique: this.classId
          }
        };
        this.getNative(handleData);
        console.log("callAppToHttp ============== " + JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToLoaded = function() {
        var handleData = {
          action: this.CocosByNativeAction.TiGoLifecycle,
          param: {
            name: "loaded",
            param: ""
          }
        };
        this.getNative(handleData);
        console.log("callAppToLoaded ============== " + JSON.stringify(handleData));
      };
      TigoManager.prototype.getBaseInfo = function() {
        var handleData = {
          action: this.CocosByNativeAction.TiGoBaseInfo
        };
        console.log("getBaseInfo ============== " + JSON.stringify(handleData));
        if (window.tiGo) {
          var BaseInfo = window.tiGo.callApp(JSON.stringify(handleData));
          this.setBaseInfo(BaseInfo);
          console.log(BaseInfo);
          console.log("tiGo BaseInfo ==== " + BaseInfo);
          return BaseInfo;
        }
        if (window.webkit) {
          var BaseInfo = window.prompt("callApp", JSON.stringify(handleData));
          this.setBaseInfo(BaseInfo);
          console.log("webkit BaseInfo ==== " + BaseInfo);
          return BaseInfo;
        }
      };
      TigoManager.prototype.getAppInfo = function() {
        var handleData = {
          action: this.CocosByNativeAction.TiGoBaseInfo
        };
        var info = null;
        if (window.tiGo) {
          info = window.tiGo.callApp(JSON.stringify(handleData));
          return JSON.parse(info);
        }
        if (window.webkit) {
          info = window.prompt("callApp", JSON.stringify(handleData));
          return JSON.parse(info);
        }
        return null;
      };
      TigoManager.prototype.callAppToCollect = function(gameIndex, type, result) {
        var h = {
          userId: this.userId,
          lessonId: this.classId,
          lessonModelId: this.lessonModuleId,
          gameIndex: gameIndex,
          type: type,
          result: result,
          timestamp: this.getTime()
        };
        var handleData = {
          action: this.CocosByNativeAction.TiGoHttp,
          param: {
            url: this.ReportType.report_operate,
            method: "POST",
            params: h
          }
        };
        this.getNative(handleData);
        console.log("callAppToCollect ============== " + JSON.stringify(handleData));
      };
      TigoManager.prototype.getTime = function() {
        var time = Date.now().toString();
        time = time.substr(0, 10);
        return time;
      };
      TigoManager.prototype.callAppToSpeed = function() {
        var url = this.ReportType.report_speed;
        var params = {
          userId: this.userId,
          type: this.moduleId,
          speedVal: 2,
          lessonModelId: this.lessonModuleId,
          packageId: this.packageId,
          nextLessonModelId: this.nextLessonModelId,
          nextType: this.nextType
        };
        this.callAppToHttp(url, "POST", params);
      };
      TigoManager.prototype.getNative = function(handleData) {
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callPoint = function(event, data) {
        var handleData = {
          action: this.CocosByNativeAction.TiGoAnalyse,
          param: {
            analyseAction: "logEvent",
            analyseParam: {
              analyseId: event,
              analyseData: data
            }
          }
        };
        this.getNative(handleData);
        console.log("callAppToLoaded ============== " + JSON.stringify(handleData));
      };
      TigoManager._instance = null;
      return TigoManager;
    }();
    window.callCocos = function(msg1) {
      "TiGoLifecycle" == msg1.action ? window.webframe.Notify.trigger("callCocos_loaded") : window.webframe.Notify.trigger("callCocos_data", msg1);
      return "callByAndroidParam ok!";
    };
    exports.default = TigoManager.getInstance();
    cc._RF.pop();
  }, {} ],
  TimerPad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c849f+Im4dAp5ollKDfNEQG", "TimerPad");
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
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Time = null;
        _this.stamp = 0;
        _this.curTime = 0;
        _this.mainCom = null;
        return _this;
      }
      NewClass.prototype.updateTimer = function(dt) {
        this.stamp += dt;
        if (this.stamp >= 1) {
          this.stamp -= 1;
          this.curTime--;
          this.Time.string = (this.curTime > 9 ? "" : "0") + this.curTime;
          this.curTime <= 0 && this.timeUp();
        }
      };
      NewClass.prototype.timeUp = function() {
        var _this = this;
        this.scheduleOnce(function() {
          return _this.close();
        }, .5);
        this.mainCom.whenTimeup();
      };
      NewClass.prototype.showTimer = function(time, mc) {
        this.close();
        this.node.active = true;
        this.Time.string = (time > 9 ? "" : "0") + time;
        this.curTime = time;
        this.mainCom = mc;
        this.stamp = 0;
        this.schedule(this.updateTimer, .1);
      };
      NewClass.prototype.stopTimer = function() {
        cc.log("into time stop-----");
        this.unschedule(this.updateTimer);
      };
      NewClass.prototype.resumeTimer = function() {
        cc.log("into time resume-----");
        this.schedule(this.updateTimer, .1);
      };
      NewClass.prototype.close = function() {
        this.unschedule(this.updateTimer);
        this.node.active = false;
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "Time", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Util: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cbd86xFK2VIrpmICZlqoMFl", "Util");
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
    var AudioManager_1 = require("./AudioManager");
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
        _this.voice_name = "prefab_common/voice";
        _this.node_name = "prefab_common/startLayer";
        _this.coin_name_1 = "prefab_common/coin_small";
        _this.coin_name_2 = "prefab_common/coin_mid";
        _this.coin_name_3 = "prefab_common/coin_large";
        _this.exitbutton = "prefab_common/exitbutton";
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
      Util.prototype.addVoice = function(node, callBack, that) {
        var _this = this;
        cc.loader.loadRes(this.voice_name, cc.Prefab, function(err, Prefab) {
          if (err) console.log(err, "Voice \u52a0\u8f7d\u5931\u8d25===============>>"); else {
            var voice = cc.instantiate(Prefab);
            var clickBack = function() {
              callBack && callBack.bind(that)();
            };
            voice.on("click", clickBack, that);
            node.addChild(voice, 996);
            voice.name = "voices";
            _this.voiceNode = voice;
          }
        });
      };
      Util.prototype.addExitbutton = function(node, callBack, that) {
        cc.loader.loadRes(this.exitbutton, cc.Prefab, function(err, Prefab) {
          if (err) console.log(err, "exitbutton \u52a0\u8f7d\u5931\u8d25===============>>"); else {
            var exitbutton = cc.instantiate(Prefab);
            var clickBack = function() {
              callBack && callBack.bind(that)();
            };
            var but = exitbutton.getChildByName("exbt");
            but.on("click", clickBack, that);
            node.addChild(exitbutton, 996);
          }
        });
      };
      Util.prototype.stopVoiceAni = function() {
        this.voiceNode && this.voiceNode.getComponent(cc.Animation).play("voice_end");
      };
      Util.prototype.playVoiceAni = function() {
        this.voiceNode && this.voiceNode.getComponent(cc.Animation).play("voice");
      };
      Util.prototype.addStartLayer = function(node, callBack, that) {
        var _this = this;
        cc.loader.loadRes(this.node_name, cc.Prefab, function(err, Prefab) {
          if (err) console.log(err, "startNode \u52a0\u8f7d\u5931\u8d25===============>>"); else {
            _this.PrefabNode = cc.instantiate(Prefab);
            _this.setStartBtnBack(callBack, that);
            node.addChild(_this.PrefabNode, 999);
          }
        });
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
      Util.prototype.addCoin_small = function(node, index) {
        cc.loader.loadRes(this.coin_name_1, cc.Prefab, function(err, Prefab) {
          if (err) console.log(err, "prefab \u52a0\u8f7d\u5931\u8d25===============>>"); else {
            var coin_1 = cc.instantiate(Prefab);
            node.addChild(coin_1, 999);
            var spine = coin_1.getChildByName("spineNode").getComponent(sp.Skeleton);
            var sc = coin_1.getComponent("coins");
            sc.initNum(index);
            spine.clearTracks();
            spine.setAnimation(0, "animation", false);
            spine.setCompleteListener(function() {
              coin_1.destroy();
            });
          }
        });
      };
      Util.prototype.addCoin_midAndMenu = function(node, et) {
        cc.loader.loadRes(this.coin_name_2, cc.Prefab, function(err, Prefab) {
          if (err) console.log(err, "prefab \u52a0\u8f7d\u5931\u8d25===============>>"); else {
            var coin_2 = cc.instantiate(Prefab);
            node.parent.addChild(coin_2, 999);
            coin_2.name = "coin";
            var spine = coin_2.getChildByName("spineNode").getComponent(sp.Skeleton);
            spine.clearTracks();
            spine.setAnimation(0, "Animation", true);
            AudioManager_1.default.playEffect(AudioManager_1.default.GAME_COIN_LARGE, false, function() {
              coin_2.destroy();
              window.webframe.Notify.trigger("entryMenu", et);
              cc.log(Date.now());
            });
          }
        });
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
    "./AudioManager": "AudioManager"
  } ],
  Vs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94a58grgnRDir8ZS8205K5x", "Vs");
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
    var AudioManager_1 = require("../../../../Scripts/common/AudioManager");
    var EventConst_1 = require("../EventConst");
    var EventMng_1 = require("../EventMng");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Vs = function(_super) {
      __extends(Vs, _super);
      function Vs() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.leftNode = null;
        _this.rightNode = null;
        _this.vsNode = null;
        return _this;
      }
      Vs.prototype.onLoad = function() {
        this.vsNode.opacity = 0;
        this.vsNode.scale = 3;
      };
      Vs.prototype.onEnable = function() {
        var _this = this;
        this.leftNode.x = -1e3;
        this.rightNode.x = 1e3;
        cc.tween(this.leftNode).delay(.3).to(.3, {
          x: 2
        }).start();
        AudioManager_1.default.playEffect("SE_tanshiguaishouADB01_ytz");
        cc.tween(this.rightNode).delay(.3).to(.3, {
          x: 40
        }).call(function() {
          cc.tween(_this.vsNode).to(.3, {
            scale: 1,
            opacity: 255
          }).call(function() {
            _this.shaker();
          }).start();
          cc.tween(_this).delay(1.5).call(function() {
            _this.out();
          }).start();
        }).start();
      };
      Vs.prototype.out = function() {
        var _this = this;
        cc.tween(this.vsNode).to(.3, {
          y: 600
        }).start();
        cc.tween(this.leftNode).to(.3, {
          x: -1500
        }).start();
        cc.tween(this.rightNode).to(.3, {
          x: 1500
        }).call(function() {
          _this.node.active = false;
          EventMng_1.default.emit(EventConst_1.GameEvent.VS_COMPLETE);
        }).start();
      };
      Vs.prototype.shaker = function(type) {
        void 0 === type && (type = "out");
        var node = this.node;
        this.shakeObj = {
          node: node,
          originPos: node.position,
          offset: cc.v2(20, 20),
          times: 4,
          duration: .4,
          startTime: Date.now(),
          amplitudeModifier: "out"
        };
        this.shakeObj.amplitudeModifier = type;
        this.state = "shaker";
        this.curTime = 0;
      };
      Vs.prototype.update = function(dt) {
        if ("shaker" == this.state) {
          var shakeObj = this.shakeObj;
          this.node.position = cc.Vec3.ZERO;
          this.curTime += dt;
          var aX = shakeObj.offset.x;
          var aY = shakeObj.offset.y;
          var n = shakeObj.times;
          var duration = shakeObj.duration;
          var range = 2 * n * Math.PI;
          var am = shakeObj.amplitudeModifier;
          if (this.curTime < duration) {
            var factor = 1;
            var percent = this.curTime / duration;
            var angle = range * percent;
            var xo = aX * Math.cos(angle);
            var yo = aY * Math.sin(angle);
            "in" === am ? factor = percent : "out" === am ? factor = 1 - percent : "inOut" === am && (factor = 2 * (percent < .5 ? percent : 1 - percent));
            xo *= factor;
            yo *= factor;
            var p = shakeObj.originPos.add(cc.v2(xo, yo));
            shakeObj.node.position = p;
          } else {
            this.state = "idle";
            this.curTime = 0;
            shakeObj.node.position = shakeObj.originPos;
          }
        }
      };
      __decorate([ property(cc.Node) ], Vs.prototype, "leftNode", void 0);
      __decorate([ property(cc.Node) ], Vs.prototype, "rightNode", void 0);
      __decorate([ property(cc.Node) ], Vs.prototype, "vsNode", void 0);
      Vs = __decorate([ ccclass ], Vs);
      return Vs;
    }(cc.Component);
    exports.default = Vs;
    cc._RF.pop();
  }, {
    "../../../../Scripts/common/AudioManager": "AudioManager",
    "../EventConst": "EventConst",
    "../EventMng": "EventMng"
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
        _this.sfWord = null;
        _this.banana = null;
        _this.bananas = null;
        _this.coconut = null;
        _this.coconuts = null;
        _this.mango = null;
        _this.mangoes = null;
        return _this;
      }
      WordTool.prototype.Init = function(img, targetPos, callback) {
        void 0 === targetPos && (targetPos = cc.v2(0, -100));
        void 0 === callback && (callback = null);
        this.sfWord.node.opacity = 0;
        this.sfWord.node.setPosition(cc.v2(0, 100));
        this.sfWord.node.active = true;
        this.sfWord.spriteFrame = img;
        this.unscheduleAllCallbacks();
        this.sfWord.node.stopAllActions();
        cc.tween(this.sfWord.node).to(.3, {
          position: cc.v3(targetPos.x, targetPos.y, 0),
          opacity: 255
        }).delay(2.4).to(.3, {
          opacity: 0
        }).call(function() {
          callback && callback();
        }).start();
      };
      __decorate([ property({
        type: cc.Sprite,
        displayName: "word"
      }) ], WordTool.prototype, "sfWord", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "banana"
      }) ], WordTool.prototype, "banana", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "bananas"
      }) ], WordTool.prototype, "bananas", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "coconut"
      }) ], WordTool.prototype, "coconut", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "coconuts"
      }) ], WordTool.prototype, "coconuts", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "mango"
      }) ], WordTool.prototype, "mango", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "mangoes"
      }) ], WordTool.prototype, "mangoes", void 0);
      WordTool = __decorate([ ccclass ], WordTool);
      return WordTool;
    }(cc.Component);
    exports.default = WordTool;
    cc._RF.pop();
  }, {} ],
  boot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10255rXVP9HFLuGpCr7Atqo", "boot");
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
    var touchSingle = function(_super) {
      __extends(touchSingle, _super);
      function touchSingle() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._touchID = null;
        return _this;
      }
      touchSingle.prototype._touchStart = function(event) {
        null !== this._touchID ? event.stopPropagation() : this._touchID = event.getID();
      };
      touchSingle.prototype._touchMove = function(event) {
        this._touchID !== event.getID() && event.stopPropagation();
      };
      touchSingle.prototype._touchEnd = function(event) {
        this._touchID !== event.getID() ? event.stopPropagation() : event.simulate || (this._touchID = null);
      };
      touchSingle.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this._touchStart, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this._touchEnd, this, true);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEnd, this, true);
      };
      touchSingle.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this._touchStart, this, true);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this, true);
        this.node.off(cc.Node.EventType.TOUCH_END, this._touchEnd, this, true);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._touchEnd, this, true);
      };
      touchSingle = __decorate([ ccclass ], touchSingle);
      return touchSingle;
    }(cc.Component);
    exports.default = touchSingle;
    cc._RF.pop();
  }, {} ],
  captureScreen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18ff9ItJClPEr/PE1P82X0o", "captureScreen");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        screenshotsprint: {
          type: cc.Sprite,
          default: null
        },
        camera: cc.Camera
      },
      screenshots: function screenshots(callback) {
        var picData = this.initImage();
        var spriteFrame = this.showSprite(picData);
        callback && callback(spriteFrame);
      },
      screenshotsInti: function screenshotsInti() {
        this._width = 0;
        this._height = 0;
        var texture = new cc.RenderTexture();
        var gl = cc.game._renderContext;
        texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, gl.STENCIL_INDEX8);
        this.camera.targetTexture = texture;
        this.texture = texture;
      },
      initImage: function initImage() {
        var data = this.texture.readPixels();
        this._width = this.texture.width;
        this._height = this.texture.height;
        var picData = this.filpYImage(data, this._width, this._height);
        return picData;
      },
      showSprite: function showSprite(picData) {
        var texture = new cc.Texture2D();
        console.log("canvas", this._width, this._height);
        texture.initWithData(picData, cc.Texture2D.RGBA8888, this._width, this._height);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        return spriteFrame;
      },
      filpYImage: function filpYImage(data, width, height) {
        var picData = new Uint8Array(width * height * 4);
        var rowBytes = 4 * width;
        for (var row = 0; row < height; row++) {
          var srow = height - 1 - row;
          var start = srow * width * 4;
          var reStart = row * width * 4;
          for (var i = 0; i < rowBytes; i++) picData[reStart + i] = data[start + i];
        }
        return picData;
      },
      captureAction: function captureAction(capture) {
        var width = cc.winSize.width;
        var height = cc.winSize.height;
        var scaleAction = cc.scaleTo(1, .5);
        var targetPos = cc.v2(width / 2 - 200, height / 2 - 200);
        var moveAction = cc.moveTo(1, targetPos);
        var spawn = cc.spawn(scaleAction, moveAction);
        var finished = cc.callFunc(function() {
          capture.getComponent(cc.Sprite).spriteFrame = null;
          console.log("\u52a8\u753b\u7ed3\u675f");
        });
        var action = cc.sequence(spawn, finished);
        capture.runAction(action);
      },
      start: function start() {},
      testToCapture: function testToCapture() {
        var _this = this;
        this.camera.node.active = true;
        this.screenshotsInti();
        this.scheduleOnce(function() {
          _this.screenshots(function(spriteFrame) {
            _this.screenshotsprint.spriteFrame = spriteFrame;
            _this.camera.node.active = false;
          });
        }, 0);
      },
      testIoCapture: function testIoCapture() {}
    });
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
        cc.loader.loadRes("audio_common/" + url, cc.AudioClip, function(err, audio) {
          err ? console.log(err, "\u91d1\u5e01\u97f3\u6548\u52a0\u8f7d\u5931\u8d25===============>>") : cc.audioEngine.play(audio, false, 1);
        });
      };
      __decorate([ property(cc.Node) ], coinBoard.prototype, "coin", void 0);
      coinBoard = __decorate([ ccclass ], coinBoard);
      return coinBoard;
    }(cc.Component);
    exports.default = coinBoard;
    cc._RF.pop();
  }, {} ],
  coins: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18668uRMKpDUbX0nzTDi64W", "coins");
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
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_frames = [];
        _this.num_1 = null;
        _this.num_2 = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.start = function() {};
      NewClass.prototype.initNum = function(index) {
        if (index < 10) {
          cc.log("initNum ===" + index);
          this.num_2.node.active = false;
          this.num_1.spriteFrame = this.m_frames[index];
          cc.log(this.num_1.spriteFrame);
        } else {
          var n1 = Math.floor(index / 10);
          var n2 = Math.floor(index % 10);
          cc.log(n1 + "    " + n2);
          this.num_1.spriteFrame = this.m_frames[n1];
          this.num_2.spriteFrame = this.m_frames[n2];
        }
      };
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "m_frames", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "num_1", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "num_2", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  gameGate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b9b24zqddLhIrtEjxJu1Ux", "gameGate");
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
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.quizLabel = null;
        _this.selecNode = null;
        _this.showSpr = null;
        _this.btnbg = null;
        _this.veilNode = null;
        _this.popenNdoe = null;
        _this.clickBut = null;
        _this.udAni = null;
        _this.gameid = 0;
        _this.curGid = 0;
        _this.gMenu = null;
        _this.isSec = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.initInfo = function(gid, cid, isSec, gm) {
        this.gameid = gid;
        this.curGid = cid;
        this.isSec = isSec;
        this.gMenu = gm;
        console.log("game gate id =" + gid);
        console.log("game isSec =" + this.isSec);
        if (this.gameid == this.curGid) {
          this.selecNode.active = true;
          this.veilNode.active = false;
          this.popenNdoe.active = true;
          this.udAni.play();
        } else if (this.gameid < this.curGid && 0 == this.isSec) {
          this.veilNode.active = false;
          this.popenNdoe.active = true;
          this.clickBut.interactable = false;
          this.showSpr.node.opacity = 190;
          this.btnbg.node.opacity = 190;
          this.quizLabel.node.opacity = 190;
        } else this.gameid > this.curGid && (this.clickBut.interactable = false);
        if (1 == this.isSec) {
          this.veilNode.active = false;
          this.popenNdoe.active = true;
          this.clickBut.interactable = true;
        }
        this.setShowImage();
      };
      NewClass.prototype.setShowImage = function() {
        var url = "";
        if (0 == this.gameid) {
          url = "gameshow/sg1";
          this.quizLabel.string = "Game 1";
        } else if (1 == this.gameid) {
          url = "gameshow/sg2";
          this.quizLabel.string = "Game 2";
        } else if (2 == this.gameid) {
          url = "gameshow/sg3";
          this.quizLabel.string = "Game 3";
        } else if (3 == this.gameid) {
          url = "gameshow/sg4";
          this.quizLabel.string = "Game 4";
        }
        var self = this;
        cc.loader.loadRes(url, cc.SpriteFrame, function(err, spriteFrame) {
          self.showSpr.spriteFrame = spriteFrame;
        });
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.onClickBut = function() {
        this.gMenu.gateClick(this.gameid);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "quizLabel", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "selecNode", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "showSpr", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "btnbg", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "veilNode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "popenNdoe", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "clickBut", void 0);
      __decorate([ property(cc.Animation) ], NewClass.prototype, "udAni", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  gameMenu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "621c94W4qhLfbbf5qvvzCWM", "gameMenu");
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
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameData_1 = require("./GameData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gpList = [];
        _this.gatePre = null;
        _this.curgameId = 0;
        _this.isSecgame = 0;
        _this.mainS = null;
        _this.canClick = true;
        return _this;
      }
      NewClass.prototype.initMenu = function(cid, issg, isGoon, ms) {
        var _this = this;
        cc.log("game menu curid(page_num) == " + cid);
        this.curgameId = cid;
        this.isSecgame = issg;
        this.mainS = ms;
        var copygpList;
        var gameNum = GameData_1.default.node_path.length;
        if (2 == gameNum) copygpList = [ this.gpList[1], this.gpList[2] ]; else if (4 == gameNum) copygpList = __spreadArrays(this.gpList); else if (3 == gameNum) {
          copygpList = [ this.gpList[0], this.gpList[1], this.gpList[2] ];
          for (var i = 0; i < copygpList.length; i++) copygpList[i].x += 200;
          copygpList[0].y += 50;
          copygpList[1].y -= 30;
          copygpList[2].y -= 40;
        }
        for (var i = 0; i < copygpList.length; i++) {
          var gateitem = cc.instantiate(this.gatePre);
          copygpList[i].addChild(gateitem);
          var dtgCom = gateitem.getComponent("gameGate");
          dtgCom.initInfo(i, this.curgameId, this.isSecgame, this);
        }
        isGoon && 0 == issg && this.scheduleOnce(function() {
          return _this.autoGame();
        }, 2);
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.autoGame = function() {
        cc.log("\u81ea\u52a8\u8fdb\u5165 gameid = " + this.curgameId);
        this.mainS.openGame(this.curgameId);
      };
      NewClass.prototype.gateClick = function(gid) {
        cc.log("\u70b9\u51fb\u8fdb\u5165 gameid = " + gid);
        this.mainS.openGame(gid);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "gpList", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "gatePre", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./GameData": "GameData"
  } ],
  notifier_center: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a423zvh3pMlIRUOikL98S4", "notifier_center");
    "use strict";
    var LogFilterArray = [ "EVENT_TIME_ONE_SECOND", "EVENT_FRIEND_OFFLINE_TIME_CHANGE" ];
    var NotifierCenter = function() {
      function NotifierCenter() {
        var key = arguments[0];
        this._TAG = "[" + key + "/NotifierCenter]";
        this.events = {};
        this.launch();
      }
      var _proto = NotifierCenter.prototype;
      _proto.getScopeName = function getScopeName(scope) {
        try {
          return scope ? (scope._TAG ? scope._TAG : scope.name ? scope.name : "unknow").toString() : "unknow";
        } catch (e) {
          return "unknow";
        }
      };
      _proto.listen = function listen(eventName, handler, scope, isOnce) {
        if ("string" != typeof eventName || "function" !== typeof handler) {
          cc.log(this._TAG, " listen err: eName :" + eventName + "handler:" + handler);
          return;
        }
        var observer = {
          handler: handler,
          scope: scope,
          isOnce: isOnce
        };
        var observers = this.events[eventName] || [];
        for (var i = 0; i < observers.length; i++) {
          var obs = observers[i];
          if (obs.scope == scope && (obs.handler == handler || obs.handler.toString() == handler.toString())) {
            cc.log(this._TAG, "\u6d88\u606f\u91cd\u590d\u6ce8\u518c:" + eventName + " function:" + handler.name);
            return;
          }
        }
        observers.push(observer);
        this.events[eventName] = observers;
      };
      _proto.ignore = function ignore(eventName, handler, scope) {
        if ("string" != typeof eventName) {
          cc.log("-----eventName----" + eventName);
          this.ignoreScope(arguments[0]);
          return;
        }
        if ("string" != typeof eventName || "function" != typeof handler) {
          cc.log(this._TAG, "NotifierCenter remove err: eName :" + eventName + "scope:" + scope._TAG);
          return;
        }
        var observers = this.events[eventName];
        if (!observers || 0 === observers.length) return;
        scope = scope || this;
        var idx = -1;
        for (var i = 0; i < observers.length; ++i) {
          var observer = observers[i];
          observer.scope != scope || observer.handler != handler && observer.handler.toString() != handler.toString() || (idx = i);
        }
        idx > -1 && this.events[eventName].splice(idx, 1);
      };
      _proto.trigger = function trigger(eventName, params) {
        if (!this.isRunning) return;
        if ("string" != typeof eventName) {
          cc.log(this._TAG, " trigger err: eventName :" + eventName);
          return;
        }
        var keys = Object.keys(this.events);
        var obs = this.events[eventName];
        if (!obs) return;
        var args = Array.prototype.slice.call(arguments, 1);
        var self = this;
        for (var i = 0; i < obs.length; i++) {
          var ob = obs[i];
          if (ob.scope && ob.scope instanceof cc.Component && !cc.isValid(ob.scope.node)) continue;
          ob.handler.apply(ob.scope, args);
          ob.isOnce && cc.log(self._TAG, "trigger and remove once listener", eventName);
        }
        obs = this.events[eventName];
        if (!obs) return;
        this.events[eventName] = obs.filter(function(ob) {
          if (ob.scope && ob.scope instanceof cc.Component && !cc.isValid(ob.scope.node)) return false;
          return !ob.isOnce;
        });
      };
      _proto.ignoreScope = function ignoreScope(scope) {
        var ignoreMsgs = ":";
        for (var msg in this.events) {
          var obs = this.events[msg];
          obs && (this.events[msg] = obs.filter(function(ob) {
            if (ob.scope != scope) return true;
            ignoreMsgs = ignoreMsgs + msg + ",";
            return false;
          }));
        }
      };
      _proto.destroy = function destroy() {
        cc.log(this._TAG, "destroy");
        this.events = {};
      };
      _proto.shut = function shut() {
        cc.log(this._TAG, "--------shut");
        this.isRunning = false;
      };
      _proto.launch = function launch() {
        cc.log(this._TAG, "--------launch");
        this.isRunning = true;
      };
      return NotifierCenter;
    }();
    module.exports = NotifierCenter;
    cc._RF.pop();
  }, {} ],
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
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.centerNode = null;
        _this.rightNode = [];
        _this.leftNode = [];
        return _this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.initeAniFun = function(sec) {
        var _this = this;
        cc.log("\u5f55\u97f3 sec == " + sec);
        var anim = this.centerNode.getComponent(cc.Animation);
        var clip = anim.currentClip || anim.defaultClip;
        if (clip) {
          clip.speed = .1 * sec;
          anim.play();
        }
        var n = 0;
        this.schedule(function() {
          _this.rightNode[n].getComponent(cc.Animation).play();
          _this.leftNode[n].getComponent(cc.Animation).play();
          n += 1;
        }, .2, 4, .2);
      };
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Node) ], NewClass.prototype, "centerNode", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u53f3\u8fb9\u52a8\u753b\u7ec4"
      }) ], NewClass.prototype, "rightNode", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u53f3\u8fb9\u52a8\u753b\u7ec4"
      }) ], NewClass.prototype, "leftNode", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  use_reversed_rotateBy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c55cHIJrhLurh2eXEmib0a", "use_reversed_rotateBy");
    "use strict";
    cc.RotateBy._reverse = true;
    cc._RF.pop();
  }, {} ],
  web_config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c99e3tjiKpDEqSyTwC0PyPV", "web_config");
    "use strict";
    window.webframe = new cc.Class({});
    var NotifierCenter = require("notifier_center");
    webframe.Notify = new NotifierCenter("http");
    console.log("use web_config!!!!!");
    cc._RF.pop();
  }, {
    notifier_center: "notifier_center"
  } ]
}, {}, [ "TigoManager", "AudioManager", "AudioManager2", "GameData", "Main", "Point", "TimerPad", "Util", "boot", "captureScreen", "coinBoard", "coins", "gameGate", "gameMenu", "notifier_center", "recordAin", "web_config", "HandCtr", "RepeatAfterMe", "WordTool", " WudaoAssembly", "AdapterBg", "BattleAnimation", "Drag", "EventConst", "EventMng", "FollowUp", "Judge", "JudgeRandom", "JudgeTree", "Level", "Read", "RecordControl", "Gas", "QuestionBoardBottom", "Vs", "use_reversed_rotateBy" ]);
//# sourceMappingURL=index.js.map
