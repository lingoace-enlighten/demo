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
  totem_config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b337cC4DF1FtblNpGlroYvl", "totem_config");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.totem_config = void 0;
    exports.totem_config = {
      door: [ [ "knee", "toe", "finger" ], [ "knee", "toe", "finger" ], [ "knee", "toe", "finger" ] ],
      doorPosX: [ -277.557, -8.383, 264.642 ],
      doorMaskPos: [ [ 0, 75 ], [ 10, 75 ], [ 10, 75 ] ],
      doorImagePos: [ [ 0, -6 ], [ 4, -6 ], [ 10, -5 ] ],
      collectPosX: [ -277.557, 4, 280 ],
      collectErrorPosX: [ 100, 0, -100 ],
      collectRightMove: [ [ -120, -260 ], [ 0, -260 ], [ 120, -260 ] ],
      collectErrorMove: [ [ -300, -260 ], [ 0, -260 ], [ 300, -260 ] ],
      right: [ 0, 2, 1 ],
      audio: [ "knee", "finger", "toe" ],
      tigoPosX: [ -430, -9.569, 430 ],
      word: [ "knee", "finger", "toe" ]
    };
    cc._RF.pop();
  }, {} ],
  totem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3748ewbNKhFs7hG3tjzrIer", "totem");
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
    var TigoManager_1 = require("../../../module/kit/TigoManager");
    var totem_config_1 = require("./totem_config");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Totem = function(_super) {
      __extends(Totem, _super);
      function Totem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.clickBoard = null;
        _this.door = null;
        _this.collect = null;
        _this.collectBox = null;
        _this.xingxing = null;
        _this.yanwu = null;
        _this.tigo = null;
        _this.totemNode = null;
        _this.word = null;
        _this.handCtr = null;
        _this.voice = null;
        _this.gameIndex = 0;
        _this.canClick = false;
        _this.isFirst = true;
        _this.maskArr = [];
        _this.collectArr = [];
        _this.tigoIndex = 1;
        _this.score = 3;
        return _this;
      }
      Totem.prototype.onLoad = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _loop_1, this_1, i;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _super.prototype.onLoad.call(this);
              cc.debug.setDisplayStats(false);
              _loop_1 = function(i) {
                var newDoor, newCollect;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    newDoor = cc.instantiate(this_1.door);
                    newDoor.parent = this_1.clickBoard;
                    return [ 4, AssetsManger_1.default.instance.loadImg("res/images/men" + i, "L2_W5_D1_game2").then(function(img) {
                      newDoor.getChildByName("mask").getChildByName("imageBox").getChildByName("image0").getComponent(cc.Sprite).spriteFrame = img;
                    }) ];

                   case 1:
                    _a.sent();
                    return [ 4, AssetsManger_1.default.instance.loadImg("res/images/" + totem_config_1.totem_config.door[this_1.gameIndex][i], "L2_W5_D1_game2").then(function(img) {
                      newDoor.getChildByName("mask").getChildByName("imageBox").getChildByName("image1").getComponent(cc.Sprite).spriteFrame = img;
                    }) ];

                   case 2:
                    _a.sent();
                    newDoor.x = totem_config_1.totem_config.doorPosX[i];
                    newDoor.getChildByName("mask").width = newDoor.getChildByName("mask").getChildByName("imageBox").getChildByName("image0").width;
                    newDoor.getChildByName("mask").height = newDoor.getChildByName("mask").getChildByName("imageBox").getChildByName("image0").height;
                    newDoor.getChildByName("mask").setPosition(totem_config_1.totem_config.doorMaskPos[i][0], totem_config_1.totem_config.doorMaskPos[i][1]);
                    newDoor.getChildByName("mask").getChildByName("imageBox").getChildByName("image1").setPosition(totem_config_1.totem_config.doorImagePos[i][0], totem_config_1.totem_config.doorImagePos[i][1]);
                    newDoor.getChildByName("mask").on(cc.Node.EventType.TOUCH_END, function() {
                      _this.clickDoor(i);
                    }, this_1);
                    this_1.maskArr.push(newDoor.getChildByName("mask"));
                    newCollect = cc.instantiate(this_1.collect);
                    newCollect.parent = this_1.collectBox;
                    return [ 4, AssetsManger_1.default.instance.loadImg("res/images/collect" + totem_config_1.totem_config.right[i], "L2_W5_D1_game2").then(function(img) {
                      newCollect.getChildByName("image").getComponent(cc.Sprite).spriteFrame = img;
                    }) ];

                   case 3:
                    _a.sent();
                    newCollect.getChildByName("stone").x = totem_config_1.totem_config.collectErrorPosX[i], 
                    newCollect.x = totem_config_1.totem_config.collectPosX[i];
                    this_1.collectArr.push(newCollect);
                    return [ 2 ];
                  }
                });
              };
              this_1 = this;
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < totem_config_1.totem_config.door.length)) return [ 3, 4 ];
              return [ 5, _loop_1(i) ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              i++;
              return [ 3, 1 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      Totem.prototype.start = function() {
        var _this = this;
        _super.prototype.start.call(this);
        this.initHandComponent().then(function(node) {
          _this.handCtr = node;
        });
        this.initLabaComponent().then(function(node) {
          _this.voice = node;
          _this.voice.node.on(cc.Node.EventType.TOUCH_END, function() {
            _this.voiceClick();
          }, _this);
        });
      };
      Totem.prototype.onGameStart = function() {
        _super.prototype.onGameStart.call(this);
        this.gameInit();
      };
      Totem.prototype.gameEnd = function() {
        _super.prototype.gameEnd.call(this);
      };
      Totem.prototype.gameInit = function() {
        return __awaiter(this, void 0, void 0, function() {
          var i;
          var _this = this;
          return __generator(this, function(_a) {
            0 == this.gameIndex && AudioManager_1.default.playAudioSound("L2_W5_D1_game2", "res/audios/Listen_and_click", function() {
              _this.voice.node.y = 1e3;
              _this.voice.node.active = true;
              cc.tween(_this.voice.node).to(1, {
                y: 280
              }).call(function() {
                _this.voiceClick();
              }).start();
            });
            for (i = 0; i < this.maskArr.length; i++) cc.tween(this.maskArr[i].getChildByName("imageBox")).to(1, {
              y: 0
            }).call(function() {}).start();
            return [ 2 ];
          });
        });
      };
      Totem.prototype.clickDoor = function(index) {
        return __awaiter(this, void 0, void 0, function() {
          var waitTime;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!this.canClick) return [ 2 ];
              this.canClick = false;
              this.unschedule(this.scaleTimeoutCallback);
              this.voice.node.y = 1e3;
              if (!(totem_config_1.totem_config.right[this.gameIndex] == index)) return [ 3, 2 ];
              this.collectArr[index].getChildByName("image").active = true;
              AudioManager_1.default.playEffect("L2_W5_D1_game2", "res/audios/game_right");
              this.xingxing.x = this.maskArr[index].x + totem_config_1.totem_config.doorPosX[index];
              this.xingxing.y = this.maskArr[index].y;
              this.xingxing.active = true;
              return [ 4, this.playSpine(this.xingxing.getComponent(sp.Skeleton), "13_1_zhengfangti xiaoshixiaoguo", false) ];

             case 1:
              _a.sent();
              this.xingxing.active = false;
              return [ 3, 4 ];

             case 2:
              this.collectArr[index].getChildByName("stone").active = true;
              AudioManager_1.default.playEffect("L2_W5_D1_game2", "res/audios/game_error");
              this.yanwu.x = this.maskArr[index].x + totem_config_1.totem_config.doorPosX[index];
              this.yanwu.y = this.maskArr[index].y;
              this.yanwu.active = true;
              return [ 4, this.playSpine(this.yanwu.getComponent(sp.Skeleton), "08_4_z_zhenzha", false) ];

             case 3:
              _a.sent();
              this.yanwu.active = false;
              _a.label = 4;

             case 4:
              this.tigoIndex - index > 0 ? this.playSpine(this.tigo.getComponent(sp.Skeleton), "togo_bei_zuotiao", false) : this.tigoIndex - index < 0 && this.playSpine(this.tigo.getComponent(sp.Skeleton), "togo_bei_youtiao", false);
              waitTime = 0;
              if (2 == Math.abs(this.tigoIndex - index)) {
                waitTime = 1;
                this.tigoMove(1);
                this.scheduleOnce(function() {
                  _this.tigoIndex - index > 0 ? _this.playSpine(_this.tigo.getComponent(sp.Skeleton), "togo_bei_zuotiao", false) : _this.tigoIndex - index < 0 && _this.playSpine(_this.tigo.getComponent(sp.Skeleton), "togo_bei_youtiao", false);
                  _this.tigoMove(index);
                }, .6);
              } else if (1 == Math.abs(this.tigoIndex - index)) {
                waitTime = .5;
                this.tigoMove(index);
              }
              this.scheduleOnce(function() {
                _this.openDoor(index);
              }, waitTime);
              return [ 2 ];
            }
          });
        });
      };
      Totem.prototype.tigoMove = function(index) {
        var _this = this;
        cc.tween(this.tigo).to(.5, {
          x: totem_config_1.totem_config.tigoPosX[index]
        }).call(function() {
          _this.playSpine(_this.tigo.getComponent(sp.Skeleton), "togo_bei_daiji", true);
        }).start();
        cc.tween(this.tigo).to(.25, {
          y: this.tigo.y + 40
        }).to(.25, {
          y: this.tigo.y
        }).call(function() {}).start();
      };
      Totem.prototype.openDoor = function(index) {
        var _this = this;
        cc.tween(this.maskArr[index].getChildByName("imageBox")).to(1, {
          y: 500
        }).call(function() {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              totem_config_1.totem_config.right[this.gameIndex] == index ? this.right(index) : this.error(index);
              return [ 2 ];
            });
          });
        }).start();
        this.tigoIndex = index;
      };
      Totem.prototype.right = function(index) {
        var _this = this;
        var oldPos = [];
        AudioManager_1.default.playAudioSound("L2_W5_D1_game2", "res/audios/" + totem_config_1.totem_config.audio[this.gameIndex]);
        this.word.active = true;
        this.word.getComponent(cc.Label).string = totem_config_1.totem_config.word[this.gameIndex];
        oldPos = [ this.collectArr[index].getChildByName("image").x, this.collectArr[index].getChildByName("image").y ];
        cc.tween(this.collectArr[index].getChildByName("image")).to(1, {
          x: totem_config_1.totem_config.collectRightMove[index][0],
          y: totem_config_1.totem_config.collectRightMove[index][1],
          scale: 1.2
        }).call(function() {
          return __awaiter(_this, void 0, void 0, function() {
            var _loop_2, this_2, i, i;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.collectArr[index].getChildByName("image").setPosition(oldPos[0], oldPos[1]);
                this.collectArr[index].getChildByName("image").active = false;
                TigoManager_1.default.callAppToTigoStar(this.score);
                this.gameIndex++;
                this.score = 3;
                _loop_2 = function(i) {
                  cc.tween(this_2.maskArr[i].getChildByName("imageBox")).to(1, {
                    y: 500
                  }).call(function() {
                    _this.gameIndex < totem_config_1.totem_config.right.length && AssetsManger_1.default.instance.loadImg("res/images/" + totem_config_1.totem_config.door[_this.gameIndex][i], "L2_W5_D1_game2").then(function(img) {
                      _this.maskArr[i].getChildByName("imageBox").getChildByName("image1").getComponent(cc.Sprite).spriteFrame = img;
                    });
                  }).start();
                };
                this_2 = this;
                for (i = 0; i < this.maskArr.length; i++) _loop_2(i);
                return [ 4, this.playSpine(this.tigo.getComponent(sp.Skeleton), "tigo_bei_shouji_" + this.gameIndex, false) ];

               case 1:
                _a.sent();
                this.playSpine(this.tigo.getComponent(sp.Skeleton), "togo_bei_daiji", true);
                this.playSpine(this.totemNode.getComponent(sp.Skeleton), "tuteng_liang0" + this.gameIndex, false);
                this.word.getComponent(cc.Label).string = "";
                this.word.active = false;
                if (!(this.gameIndex < totem_config_1.totem_config.right.length)) return [ 3, 2 ];
                for (i = 0; i < this.maskArr.length; i++) cc.tween(this.maskArr[i].getChildByName("imageBox")).to(1, {
                  y: 0
                }).call(function() {}).start();
                this.scheduleOnce(function() {
                  cc.tween(_this.voice.node).to(1, {
                    y: 280
                  }).call(function() {
                    _this.canClick = true;
                    _this.voiceClick();
                    _this.creatScaleTimeout();
                  }).start();
                }, 1);
                return [ 3, 4 ];

               case 2:
                return [ 4, this.playSpine(this.tigo.getComponent(sp.Skeleton), "tigo_bei_shouji_" + this.gameIndex, false) ];

               case 3:
                _a.sent();
                this.gameEnd();
                _a.label = 4;

               case 4:
                return [ 2 ];
              }
            });
          });
        }).start();
      };
      Totem.prototype.error = function(index) {
        var _this = this;
        this.score = 2;
        var oldPos = [];
        oldPos = [ this.collectArr[index].getChildByName("stone").x, this.collectArr[index].getChildByName("stone").y ];
        cc.tween(this.collectArr[index].getChildByName("stone")).to(3, {
          x: totem_config_1.totem_config.collectErrorMove[index][0],
          y: totem_config_1.totem_config.collectErrorMove[index][1],
          scale: .6
        }).call(function() {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              this.collectArr[index].getChildByName("stone").scale = 0;
              this.collectArr[index].getChildByName("stone").setPosition(oldPos[0], oldPos[1]);
              this.collectArr[index].getChildByName("stone").active = false;
              return [ 2 ];
            });
          });
        }).start();
        this.scheduleOnce(function() {
          return __awaiter(_this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                cc.tween(this.tigo).to(.25, {
                  opacity: 0
                }).to(.25, {
                  opacity: 255
                }).to(.25, {
                  opacity: 0
                }).to(.25, {
                  opacity: 255
                }).call(function() {
                  _this.voice.node.active = true;
                  cc.tween(_this.voice.node).to(1, {
                    y: 280
                  }).call(function() {
                    _this.voiceClick();
                    _this.creatScaleTimeout();
                  }).start();
                  cc.tween(_this.maskArr[index].getChildByName("imageBox")).to(1, {
                    y: 0
                  }).call(function() {}).start();
                }).start();
                return [ 4, this.playSpine(this.tigo.getComponent(sp.Skeleton), "tigo_beimian_fufankui", false) ];

               case 1:
                _a.sent();
                this.canClick = true;
                this.playSpine(this.tigo.getComponent(sp.Skeleton), "togo_bei_daiji", true);
                return [ 2 ];
              }
            });
          });
        }, 1.3);
      };
      Totem.prototype.playSpine = function(spine, animation, loop, trackIndex) {
        void 0 === loop && (loop = false);
        void 0 === trackIndex && (trackIndex = 0);
        if (!loop) return new Promise(function(resolve) {
          var en = spine.setAnimation(trackIndex, animation, loop);
          spine.setTrackCompleteListener(en, function() {
            resolve(null);
          });
        });
        Promise.resolve().then(function() {
          spine.setAnimation(trackIndex, animation, loop);
        });
      };
      Totem.prototype.creatScaleTimeout = function() {
        this.unschedule(this.scaleTimeoutCallback);
        this.schedule(this.scaleTimeoutCallback, 5);
      };
      Totem.prototype.scaleTimeoutCallback = function() {
        this.voiceClick();
        for (var i = 0; i < this.maskArr.length; i++) cc.tween(this.maskArr[i].getChildByName("imageBox").getChildByName("image1")).to(.1, {
          scale: .32
        }).to(.15, {
          scale: .29
        }).to(.15, {
          scale: .32
        }).to(.1, {
          scale: .3
        }).start();
      };
      Totem.prototype.voiceClick = function() {
        var _this = this;
        if (this.isFirst) {
          this.isFirst = false;
          this.voice.getComponent(cc.Animation).play("voice_end");
          this.voice.getComponent(cc.Animation).play("voice");
          AudioManager_1.default.playAudioSound("L2_W5_D1_game2", "res/audios/" + totem_config_1.totem_config.audio[this.gameIndex], function() {
            _this.voice.getComponent(cc.Animation).play("voice_end");
            for (var i = 0; i < _this.maskArr.length; i++) cc.tween(_this.maskArr[i].getChildByName("imageBox").getChildByName("image1")).to(.1, {
              scale: .32
            }).to(.15, {
              scale: .29
            }).to(.15, {
              scale: .32
            }).to(.1, {
              scale: .3
            }).start();
            _this.canClick = true;
          });
          this.creatScaleTimeout();
        } else {
          this.voice.getComponent(cc.Animation).play("voice_end");
          this.voice.getComponent(cc.Animation).play("voice");
          AudioManager_1.default.playAudioSound("L2_W5_D1_game2", "res/audios/" + totem_config_1.totem_config.audio[this.gameIndex], function() {
            _this.voice.getComponent(cc.Animation).play("voice_end");
          });
        }
      };
      __decorate([ property({
        type: cc.Node,
        displayName: "\u80cc\u666f"
      }) ], Totem.prototype, "bg", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u70b9\u51fb\u533a\u57df"
      }) ], Totem.prototype, "clickBoard", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u95e8\u7684\u9884\u5236\u4f53"
      }) ], Totem.prototype, "door", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u6536\u96c6\u7269\u7684\u9884\u5236\u4f53"
      }) ], Totem.prototype, "collect", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "collectBox"
      }) ], Totem.prototype, "collectBox", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u661f\u661f"
      }) ], Totem.prototype, "xingxing", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u70df\u96fe"
      }) ], Totem.prototype, "yanwu", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "tigo"
      }) ], Totem.prototype, "tigo", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u56fe\u817e"
      }) ], Totem.prototype, "totemNode", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "word"
      }) ], Totem.prototype, "word", void 0);
      Totem = __decorate([ ccclass ], Totem);
      return Totem;
    }(GameCompBase_1.default);
    exports.default = Totem;
    cc._RF.pop();
  }, {
    "../../../module/component/scripts/GameCompBase": void 0,
    "../../../module/kit/TigoManager": void 0,
    "../../../module/kit/assets/AssetsManger": void 0,
    "../../../module/kit/audio/AudioManager": void 0,
    "./totem_config": "totem_config"
  } ]
}, {}, [ "totem", "totem_config" ]);