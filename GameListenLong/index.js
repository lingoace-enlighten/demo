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
  GameListenLong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "53ed8GqUWdJMYG7I4+cFFFr", "GameListenLong");
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
    var HandCtr_1 = require("../res/hand/script/HandCtr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameSnailPaShan = function(_super) {
      __extends(GameSnailPaShan, _super);
      function GameSnailPaShan() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.arrAudioCom = [];
        _this.arrAudioRight = [];
        _this.arrAudioTitle = [];
        _this.arrAudioSpine = [];
        _this.nodeLong = null;
        _this.nodeRole = null;
        _this.arrQues = [];
        _this.btnElse = null;
        _this.skeletonRole = null;
        _this.skeletonLaba = null;
        _this.isLock = false;
        _this.isFinish = false;
        _this.quesIndex = 0;
        _this.selectItems = [];
        _this.pageNum = 0;
        _this.event_game_next = "EVENT_GAME_NEXT";
        _this.event_game_sound = "EVENT_GAME_SOUND";
        _this.event_game_touch = "EVENT_GAME_TOUDH";
        _this.event_game_end = "EVENT_GAME_END";
        _this.reDebug = false;
        _this.isTeacher = !!_this.reDebug;
        _this.tiptimeCount = 0;
        _this.tipTimeMax = 5;
        _this.tipState = 0;
        _this.dataQues = {
          options: [ {
            title: "\u9f3b\u5b50",
            scaleType: 0,
            delay: .8
          }, {
            title: "\u773c\u775b",
            scaleType: 0,
            delay: .1
          }, {
            title: "\u5634\u5df4",
            scaleType: 0,
            delay: .1
          }, {
            title: "\u8033\u6735",
            scaleType: 0,
            delay: .4
          }, {
            title: "\u5934\u53d1",
            scaleType: 0,
            delay: .1
          }, {
            title: "\u811a",
            scaleType: 1,
            delay: .1
          } ],
          scaleTo: [ {
            scaleLong: 2,
            scaleRole: 1
          }, {
            scaleLong: 1,
            scaleRole: 2
          } ],
          dataSpine: [ [ "daiji", "guzhang", "xuanyun", "hello" ], [ "bizi", "yanjing", "zuiba", "erduo", "toufa", "jiao" ], [ "daiji", "bobao" ] ]
        };
        return _this;
      }
      GameSnailPaShan.prototype.onDisable = function() {
        kit.AudioPlayer.stopAll();
      };
      GameSnailPaShan.prototype.onDestroy = function() {
        _super.prototype.onDestroy.call(this);
        this.sendMessage(this.event_game_end, {});
      };
      GameSnailPaShan.prototype.start = function() {
        this.setIsLock(true);
        this.initData();
        this.resetData();
        this.updateUI();
        this.nextQuestion();
      };
      GameSnailPaShan.prototype.update = function(dt) {
        if (this.isFinish) return;
        if (0 === this.tipState) {
          this.tiptimeCount += dt;
          if (this.tiptimeCount >= this.tipTimeMax) {
            this.tiptimeCount = 0;
            this.tipState = 1;
            this.tipShow();
          }
        }
      };
      GameSnailPaShan.prototype.initData = function() {};
      GameSnailPaShan.prototype.resetData = function() {
        var _data = this.content && this.content["getSnapshot"] ? this.content["getSnapshot"]() : {};
        _data && (_data = _data.actionData);
        if (_data && _data.cmd && _data.cmd != this.event_game_end && _data.info && _data.page == this.pageNum) {
          var info = _data.info;
          this.refreshDataForMsg(info);
          _data.cmd === this.event_game_touch && info.result && this.updateDataForMsg(info);
          window.sessionStorage.removeItem("workInfoList");
        }
      };
      GameSnailPaShan.prototype.updateUI = function() {
        this.updateUIForQues();
        this.updateUIForSpine();
      };
      GameSnailPaShan.prototype.updateUIForQues = function() {
        var selectNum = this.selectItems.length;
        for (var index = 0, length = this.arrQues.length; index < length; index++) {
          var element = this.arrQues[index];
          element.active = index === selectNum;
        }
      };
      GameSnailPaShan.prototype.updateUIForSpine = function() {
        var dataSpine = this.dataQues.dataSpine;
        this.playAnimation(this.skeletonRole, dataSpine[0][0], true, 1, null);
        this.playAnimation(this.skeletonLaba, dataSpine[2][0], true, 1, null);
      };
      GameSnailPaShan.prototype.tipStart = function() {
        this.tipState = 0;
        this.tiptimeCount = 0;
      };
      GameSnailPaShan.prototype.tipShow = function() {
        var _this = this;
        this.tipState = 1;
        var _loop_1 = function(index, length) {
          var element = this_1.arrQues[index];
          if (element.active) {
            var hand = element.getChildByName("hand");
            hand.active = true;
            var script_1 = hand.getComponent(HandCtr_1.default);
            var count_1 = 0, number_1 = 3;
            var funcHand_1 = function() {
              if (count_1 < number_1) {
                count_1++;
                script_1.Click(funcHand_1);
              } else {
                _this.tipHide();
                _this.tipStart();
              }
            };
            funcHand_1();
          }
        };
        var this_1 = this;
        for (var index = 0, length = this.arrQues.length; index < length; index++) _loop_1(index, length);
      };
      GameSnailPaShan.prototype.tipHide = function() {
        this.tipState = 1;
        var _loop_2 = function(index, length) {
          var element = this_2.arrQues[index];
          var hand = element.getChildByName("hand");
          if (element.active && hand.active) {
            hand.active = true;
            hand.opacity = 255;
            cc.tween(hand).to(.3, {
              opacity: 0
            }).call(function() {
              hand.opacity = 255;
              hand.active = false;
            }).start();
          }
        };
        var this_2 = this;
        for (var index = 0, length = this.arrQues.length; index < length; index++) _loop_2(index, length);
      };
      GameSnailPaShan.prototype.nextQuestion = function() {
        var _this = this;
        if (this.isFinish) return;
        this.tipHide();
        var selectNum = this.selectItems.length;
        var dataOne = this.dataQues.options[selectNum];
        var dataSpine = this.dataQues.dataSpine;
        var funcHello = function(callBack) {
          kit.AudioPlayer.playEffect(_this.arrAudioCom[0]);
          _this.playAniArray(_this.skeletonRole, 0, [ dataSpine[0][3], dataSpine[0][0] ], callBack);
        };
        var funcTitle = function() {
          var scaleObj = _this.dataQues.scaleTo[dataOne.scaleType];
          var timeDis = .5, scaleDis = 2;
          var timeLong = scaleObj.scaleLong * timeDis / scaleDis;
          var timeRole = scaleObj.scaleRole * timeDis / scaleDis;
          var timeDelay = scaleObj.scaleLong > 1 || scaleObj.scaleRole > 1 ? .5 : .1;
          cc.tween(_this.node).call(function() {
            cc.tween(_this.nodeLong).to(timeLong, {
              scale: scaleObj.scaleLong
            }).start();
          }).delay(timeLong).call(function() {
            cc.tween(_this.nodeRole).to(timeRole, {
              scale: scaleObj.scaleRole
            }).start();
          }).delay(timeRole + timeDelay).call(function() {
            _this.playAniSound();
          }).start();
        };
        if (selectNum > 0) funcTitle(); else {
          var timeDelay = .5;
          this.scheduleOnce(function() {
            funcHello(funcTitle);
          }, timeDelay);
        }
      };
      GameSnailPaShan.prototype.eventElse = function() {
        if (this.isLock) return;
        this.setIsLock(true);
        this.sendMessage(this.event_game_next, {
          itemId: 0,
          result: false
        });
      };
      GameSnailPaShan.prototype.msgResultElse = function(_data) {
        this.setIsLock(true);
        this.refreshDataForMsg(_data);
        this.playAniWrong(this.playAniSound.bind(this));
      };
      GameSnailPaShan.prototype.eventSound = function() {
        if (this.isLock) return;
        this.setIsLock(true);
        this.sendMessage(this.event_game_sound, {
          itemId: 0,
          result: true
        });
      };
      GameSnailPaShan.prototype.msgResultSound = function(_data) {
        this.setIsLock(true);
        this.refreshDataForMsg(_data);
        this.playAniSound();
      };
      GameSnailPaShan.prototype.eventTouch = function(_event) {
        if (this.isLock) return;
        var itemId = this.arrQues.indexOf(_event.target.parent);
        if (itemId < 0 || this.selectItems.indexOf(itemId) >= 0) return;
        this.setIsLock(true);
        this.sendMessage(this.event_game_touch, {
          itemId: itemId,
          result: true
        });
      };
      GameSnailPaShan.prototype.msgResultTouch = function(_data) {
        var _this = this;
        this.setIsLock(true);
        this.refreshDataForMsg(_data);
        var callBack = function() {
          _this.updateDataForMsg(_data);
          if (_this.isFinish) _this.playAniWin(); else {
            _this.updateUIForQues();
            _this.nextQuestion();
          }
        };
        this.playAniSuccess(callBack);
      };
      GameSnailPaShan.prototype.playAniSuccess = function(callBack) {
        var _this = this;
        var selectNum = this.selectItems.length;
        var dataSpine = this.dataQues.dataSpine;
        var arrSpine = [ dataSpine[1][selectNum], dataSpine[0][1], dataSpine[0][0] ];
        var funcRight = function() {
          kit.AudioPlayer.stopAll();
          var rightId = Math.floor(3 * Math.random());
          kit.AudioPlayer.playEffect(_this.arrAudioRight[rightId]);
          _this.playAniArray(_this.skeletonRole, 0, [ arrSpine[1], arrSpine[2] ], function() {
            _this.scheduleOnce(callBack, 1);
          });
        };
        var dataOne = this.dataQues.options[selectNum];
        cc.tween(this.node).delay(dataOne.delay).call(function() {
          kit.AudioPlayer.playEffect(_this.arrAudioSpine[selectNum]);
        }).start();
        this.playAnimation(this.skeletonRole, arrSpine[0], false, 1, funcRight);
      };
      GameSnailPaShan.prototype.playAniWrong = function(callBack) {
        var _this = this;
        kit.AudioPlayer.playEffect(this.arrAudioCom[1]);
        var dataSpine = this.dataQues.dataSpine;
        var arrSpine = [ dataSpine[0][2], dataSpine[0][0] ];
        this.playAniArray(this.skeletonRole, 0, arrSpine, function() {
          cc.tween(_this.node).delay(.8).call(function() {
            kit.AudioPlayer.playEffect(_this.arrAudioCom[2]);
          }).delay(2.2).call(function() {
            callBack();
          }).start();
        });
      };
      GameSnailPaShan.prototype.playAniSound = function() {
        var _this = this;
        var dataSpine = this.dataQues.dataSpine;
        var selectNum = this.selectItems.length;
        kit.AudioPlayer.playEffect(this.arrAudioTitle[selectNum]);
        this.playAnimation(this.skeletonLaba, dataSpine[2][1], true, 1, null);
        this.scheduleOnce(function() {
          _this.playAnimation(_this.skeletonLaba, dataSpine[2][0], true, 1, null);
          _this.setIsLock(false);
          _this.tipStart();
        }, 1.5);
      };
      GameSnailPaShan.prototype.playAniWin = function() {
        var _this = this;
        var timeDis = .5, scaleDis = 2;
        var timeLong = this.nodeLong.scale * timeDis / scaleDis;
        var timeRole = this.nodeRole.scale * timeDis / scaleDis;
        cc.tween(this.node).call(function() {
          cc.tween(_this.nodeLong).to(timeLong, {
            scale: 1
          }).start();
        }).delay(timeLong).call(function() {
          cc.tween(_this.nodeRole).to(timeRole, {
            scale: 1
          }).start();
        }).delay(timeRole).call(function() {
          kit.AudioPlayer.playEffect(_this.arrAudioCom[3]);
        }).start();
      };
      GameSnailPaShan.prototype.setIsLock = function(isLock) {
        this.isLock = isLock;
        this.isLock && this.tipHide();
      };
      GameSnailPaShan.prototype.refreshDataForMsg = function(_data) {
        this.quesIndex = _data.quesIndex;
        this.selectItems = _data.selectItems;
      };
      GameSnailPaShan.prototype.updateDataForMsg = function(_data) {
        this.selectItems.push(_data.itemId);
        this.selectItems.length > this.arrQues.length - 1 && (this.isFinish = true);
      };
      GameSnailPaShan.prototype.sendMessage = function(cmd, object) {
        var handleData = {
          cmd: cmd,
          page: this.pageNum,
          info: {
            itemId: 0,
            result: false,
            quesIndex: this.quesIndex,
            selectItems: this.selectItems
          }
        };
        for (var key in object) Object.prototype.hasOwnProperty.call(object, key) && (handleData.info[key] = object[key]);
        var tempData = {
          isTeacher: this.isTeacher,
          actionData: handleData
        };
        if (this.reDebug) {
          this.receiveMessage(tempData);
          return;
        }
        this.content.postMessage(JSON.stringify(tempData));
      };
      GameSnailPaShan.prototype.playAnimation = function(skeleton, aniName, isLoop, timeScale, callBack) {
        skeleton.timeScale = timeScale;
        skeleton.setToSetupPose();
        skeleton.clearTracks();
        callBack && skeleton.setCompleteListener(function() {
          skeleton.setCompleteListener(null);
          callBack();
        });
        var entry = skeleton.setAnimation(0, aniName, isLoop);
        return entry;
      };
      GameSnailPaShan.prototype.playAniArray = function(skeleton, index, arrSpine, callBack) {
        var _this = this;
        var length = arrSpine.length;
        if (index < length - 1) this.playAnimation(skeleton, arrSpine[index], false, 1, function() {
          index++;
          _this.playAniArray(skeleton, index, arrSpine, callBack);
        }); else {
          this.playAnimation(skeleton, arrSpine[index], true, 1, null);
          callBack && callBack();
        }
      };
      GameSnailPaShan.prototype.setParams = function(data) {
        cc.log("set params: " + JSON.stringify(data));
        this.pageNum = 0;
        this.isTeacher = data.isTeacher || false;
      };
      GameSnailPaShan.prototype.setContent = function(content) {
        this.content = content;
      };
      GameSnailPaShan.prototype.receiveMessage = function(data) {
        var handleData = data.actionData;
        cc.log(JSON.stringify(handleData) + ",");
        if (handleData && handleData.cmd && handleData.info) {
          var info = handleData.info;
          switch (handleData.cmd) {
           case this.event_game_next:
            this.msgResultElse(info);
            break;

           case this.event_game_sound:
            this.msgResultSound(info);
            break;

           case this.event_game_touch:
            this.msgResultTouch(info);
          }
        }
      };
      __decorate([ property([ cc.AudioClip ]) ], GameSnailPaShan.prototype, "arrAudioCom", void 0);
      __decorate([ property([ cc.AudioClip ]) ], GameSnailPaShan.prototype, "arrAudioRight", void 0);
      __decorate([ property([ cc.AudioClip ]) ], GameSnailPaShan.prototype, "arrAudioTitle", void 0);
      __decorate([ property([ cc.AudioClip ]) ], GameSnailPaShan.prototype, "arrAudioSpine", void 0);
      __decorate([ property(cc.Node) ], GameSnailPaShan.prototype, "nodeLong", void 0);
      __decorate([ property(cc.Node) ], GameSnailPaShan.prototype, "nodeRole", void 0);
      __decorate([ property([ cc.Node ]) ], GameSnailPaShan.prototype, "arrQues", void 0);
      __decorate([ property(cc.Node) ], GameSnailPaShan.prototype, "btnElse", void 0);
      __decorate([ property(sp.Skeleton) ], GameSnailPaShan.prototype, "skeletonRole", void 0);
      __decorate([ property(sp.Skeleton) ], GameSnailPaShan.prototype, "skeletonLaba", void 0);
      GameSnailPaShan = __decorate([ ccclass ], GameSnailPaShan);
      return GameSnailPaShan;
    }(cc.Component);
    exports.default = GameSnailPaShan;
    cc._RF.pop();
  }, {
    "../res/hand/script/HandCtr": "HandCtr"
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
        this.node.active = true;
        this.schedule(function() {
          _this.Click();
        }, 2, cc.macro.REPEAT_FOREVER, .01);
      };
      HandCtr.prototype.ClickCycleByScale = function(mScale, speed) {
        var _this = this;
        this.node.active = true;
        this.schedule(function() {
          _this.Click();
        }, speed, cc.macro.REPEAT_FOREVER, .01);
        this.skHand.timeScale = mScale;
        this.skAperture.timeScale = mScale;
      };
      HandCtr.prototype.TouchAnimation = function(starPos, endPos, time) {
        var _this = this;
        void 0 === time && (time = .5);
        this.node.active = true;
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
      HandCtr.prototype.MoveWithPosList = function(starPos, nxetPosList) {
        var _this = this;
        this.node.active = true;
        this.node.stopAllActions();
        this.node.setPosition(starPos);
        this.arrow.width = 0;
        var allMove = [];
        var _loop_1 = function(v) {
          var move = function() {
            return new Promise(function(resolve, reject) {
              cc.tween(_this.node).to(v.time, {
                position: cc.v3(v.pos.x, v.pos.y, 0)
              }).call(function() {
                resolve(null);
              }).start();
            });
          };
          allMove.push(move);
        };
        for (var _i = 0, nxetPosList_1 = nxetPosList; _i < nxetPosList_1.length; _i++) {
          var v = nxetPosList_1[_i];
          _loop_1(v);
        }
        function queue(arr) {
          var sequence = Promise.resolve();
          arr.forEach(function(item) {
            sequence = sequence.then(item);
          });
          return sequence;
        }
        return new Promise(function(resolve) {
          _this.Press(function() {
            queue(allMove).then(function(res) {
              _this.Lift(null);
              resolve();
            });
          });
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
        this.node.active = true;
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
  }, {} ]
}, {}, [ "HandCtr", "GameListenLong" ]);
//# sourceMappingURL=index.js.map
