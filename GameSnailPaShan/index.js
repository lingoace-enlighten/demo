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
  GameSnailPaShan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66f677K8exFG4MNlwyueJsw", "GameSnailPaShan");
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
    var ItemSnailPaShanQ_1 = require("./ItemSnailPaShanQ");
    var HandCtr_1 = require("../res/hand/script/HandCtr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameSnailPaShan = function(_super) {
      __extends(GameSnailPaShan, _super);
      function GameSnailPaShan() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.arrAudio = [];
        _this.arrQues = [];
        _this.arrAnswer = [];
        _this.btnNext = null;
        _this.skeletonRole = null;
        _this.isLock = false;
        _this.isFinish = false;
        _this.quesIndex = 0;
        _this.selectItems = [];
        _this.pageNum = 0;
        _this.arrNodeForRolePos = [];
        _this.event_game_next = "EVENT_GAME_NEXT";
        _this.event_game_touch = "EVENT_GAME_TOUDH";
        _this.event_game_end = "EVENT_GAME_END";
        _this.reDebug = false;
        _this.isTeacher = _this.reDebug;
        _this.tiptimeCount = 0;
        _this.tipTimeMax = 10;
        _this.tipState = 0;
        _this.dataQues = {
          options: [ {
            answers: [ 3, 0 ],
            soundId: 0
          }, {
            answers: [ 1 ],
            soundId: 0
          }, {
            answers: [ 5 ],
            soundId: 0
          }, {
            answers: [ 2, 4 ],
            soundId: 0
          } ],
          dataSpine: [ "idle", "chi", "zou", "kaixin" ]
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
        if (0 === this.tipState) {
          this.tiptimeCount += dt;
          if (this.tiptimeCount >= this.tipTimeMax) {
            this.tiptimeCount = 0;
            this.tipState = 1;
            this.tipShow();
          }
        }
      };
      GameSnailPaShan.prototype.initData = function() {
        var nodeRole = this.skeletonRole.node.parent;
        this.arrNodeForRolePos = this.getArrByNode(nodeRole, "pos");
      };
      GameSnailPaShan.prototype.resetData = function() {
        var _data = this.content["getSnapshot"] ? JSON.parse(this.content["getSnapshot"]()) : {};
        _data && (_data = _data.actionData);
        if (_data && _data.cmd && _data.cmd != this.event_game_end && _data.info && _data.page == this.pageNum) {
          var info = _data.info;
          this.refreshDataForMsg(info);
          _data.cmd === this.event_game_touch && info.result && this.updateDataForMsg(info);
          window.sessionStorage.removeItem("workInfoList");
        }
      };
      GameSnailPaShan.prototype.updateUI = function() {
        this.updateUIForRole();
        this.updateUIForQues();
        this.updateUIForAnswer();
        this.updateUIForBtn();
      };
      GameSnailPaShan.prototype.updateUIForRole = function() {
        var itemRole = this.skeletonRole.node;
        var selectNum = this.selectItems.length;
        var snail2 = this.arrNodeForRolePos[selectNum];
        itemRole.position = snail2.position;
        itemRole.angle = snail2.angle;
        var dataSpine = this.dataQues.dataSpine;
        this.playAnimation(this.skeletonRole, dataSpine[0], true, 1, null);
      };
      GameSnailPaShan.prototype.updateUIForQues = function() {
        for (var index = 0, length = this.arrQues.length; index < length; index++) {
          var element = this.arrQues[index];
          element.active = this.selectItems.indexOf(index) < 0;
        }
      };
      GameSnailPaShan.prototype.updateUIForAnswer = function() {
        for (var index = 0, length = this.arrAnswer.length; index < length; index++) {
          var element = this.arrAnswer[index];
          element.active = index === this.quesIndex;
          if (element.active) {
            var optionOne = this.dataQues.options[index];
            var script = element.getComponent(ItemSnailPaShanQ_1.default);
            script.updateUIForLabel(optionOne.answers, this.selectItems);
          }
        }
      };
      GameSnailPaShan.prototype.updateUIForBtn = function() {
        var _this = this;
        this.btnNext.active = false;
        if (this.quesIndex < this.dataQues.options.length - 1) {
          var optionOne = this.dataQues.options[this.quesIndex];
          var isContain = optionOne.answers.every(function(val) {
            return _this.selectItems.includes(val);
          });
          this.btnNext.active = !!isContain && this.isTeacher;
        }
      };
      GameSnailPaShan.prototype.tipStateSet = function(state) {
        this.tipState = state;
        this.tiptimeCount = 0;
      };
      GameSnailPaShan.prototype.tipShow = function() {
        var _this = this;
        var _loop_1 = function(index, length) {
          var element = this_1.arrQues[index];
          var hand = element.getChildByName("hand");
          if (element.active) {
            hand.active = true;
            var script_1 = hand.getComponent(HandCtr_1.default);
            var count_1 = 0, number_1 = 3;
            var funcHand_1 = function() {
              if (count_1 < number_1) {
                count_1++;
                script_1.Click(funcHand_1);
              } else {
                _this.tipHide();
                _this.tipStateSet(0);
              }
            };
            funcHand_1();
          }
        };
        var this_1 = this;
        for (var index = 0, length = this.arrQues.length; index < length; index++) _loop_1(index, length);
      };
      GameSnailPaShan.prototype.tipHide = function() {
        var _loop_2 = function(index, length) {
          var element = this_2.arrQues[index];
          var hand = element.getChildByName("hand");
          if (element.active) {
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
        if (this.selectItems.length > 0) this.setIsLock(false); else {
          this.tipHide();
          this.tipStateSet(0);
          var timeDelay = .5;
          var timeShow = .5;
          for (var index = 0, length = this.arrQues.length; index < length; index++) {
            var element = this.arrQues[index];
            if (element.active) {
              var itmeLabel = element.getChildByName("label");
              itmeLabel.opacity = 0;
              cc.tween(itmeLabel).delay(timeDelay).to(timeShow, {
                opacity: 255
              }).start();
            }
          }
          var itemA = this.arrAnswer[this.quesIndex];
          var script = itemA.getComponent(ItemSnailPaShanQ_1.default);
          var nodeLabel = script.arrLabel[0].parent;
          nodeLabel.opacity = 0;
          cc.tween(nodeLabel).delay(timeDelay).to(timeShow, {
            opacity: 255
          }).start();
          this.scheduleOnce(function() {
            _this.setIsLock(false);
            _this.tipShow();
            _this.tipStateSet(1);
          }, timeDelay + timeShow);
        }
      };
      GameSnailPaShan.prototype.eventNext = function() {
        this.btnNext.active = false;
        this.quesIndex++;
        this.sendMessage(this.event_game_next, {});
      };
      GameSnailPaShan.prototype.msgResultNext = function(_data) {
        var _this = this;
        this.tipHide();
        this.tipStateSet(0);
        this.refreshDataForMsg(_data);
        var timeHide = .4;
        var timeShow = .4;
        var itemA = this.arrAnswer[this.quesIndex - 1];
        var script = itemA.getComponent(ItemSnailPaShanQ_1.default);
        var nodeLabel = script.arrLabel[0].parent;
        nodeLabel.opacity = 255;
        cc.tween(nodeLabel).to(timeHide, {
          opacity: 0
        }).call(function() {
          itemA.active = false;
        }).start();
        var itemB = this.arrAnswer[this.quesIndex];
        var scriptB = itemB.getComponent(ItemSnailPaShanQ_1.default);
        var nodeLabelB = scriptB.arrLabel[0].parent;
        itemB.active = true;
        nodeLabelB.opacity = 0;
        cc.tween(nodeLabelB).delay(timeHide).to(timeShow, {
          opacity: 255
        }).call(function() {
          _this.updateUIForBtn();
          _this.nextQuestion();
        }).start();
      };
      GameSnailPaShan.prototype.eventTouch = function(_event) {
        if (this.isLock) return;
        var itemId = this.arrQues.indexOf(_event.target.parent);
        if (itemId < 0 || this.selectItems.indexOf(itemId) >= 0) return;
        var result = true;
        var optionOne = this.dataQues.options[this.quesIndex];
        var answerId = optionOne.answers.indexOf(itemId);
        if (answerId > 0) {
          var checkId = optionOne.answers[answerId - 1];
          this.selectItems.indexOf(checkId) < 0 && (result = false);
        } else answerId < 0 && (result = false);
        this.sendMessage(this.event_game_touch, {
          itemId: itemId,
          result: result
        });
      };
      GameSnailPaShan.prototype.msgResultTouch = function(_data) {
        var _this = this;
        this.tipHide();
        this.tipStateSet(0);
        this.setIsLock(true);
        var itemId = _data.itemId;
        var result = _data.result;
        this.refreshDataForMsg(_data);
        if (result) {
          var callBack = function() {
            _this.updateDataForMsg(_data);
            if (_this.isFinish) _this.playAniWin(); else {
              _this.updateUI();
              var optionOne = _this.dataQues.options[_this.quesIndex];
              var isContain = optionOne.answers.every(function(val) {
                return _this.selectItems.includes(val);
              });
              isContain || _this.nextQuestion();
            }
          };
          this.playAniSuccess(itemId, callBack.bind(this));
        } else {
          var callBack = function() {
            _this.nextQuestion();
          };
          this.playAniWrong(itemId, callBack.bind(this));
        }
      };
      GameSnailPaShan.prototype.playAniSuccess = function(itemId, callBack) {
        var _this = this;
        var dataSpine = this.dataQues.dataSpine;
        var itemQ = this.arrQues[itemId];
        var nodeSnail = this.skeletonRole.node;
        var timeThrow = 1.5;
        var funcThrow = function() {
          kit.AudioPlayer.playEffect(_this.arrAudio[2]);
          var itemCM = nodeSnail.parent.getChildByName("icon");
          itemCM.active = true;
          var posGoal = nodeSnail.position;
          var itemIcon = itemQ.getChildByName("icon");
          itemIcon.active = false;
          itemCM.position = _this.getLocalPos(itemIcon, itemCM.parent);
          itemCM.scale = 1.2 * itemIcon.scale;
          itemCM.angle = itemIcon.angle;
          var initOptForItemCM = {
            position: itemCM.position,
            scale: itemCM.scale,
            angle: itemCM.angle
          };
          var p1 = cc.v2(initOptForItemCM.position.x, initOptForItemCM.position.y);
          var p2 = cc.v2(posGoal.x, posGoal.y + 50);
          var pTo = cc.v2((p1.x + p2.x) / 2, p1.y + 700);
          var tn = cc.tween;
          tn(itemCM).parallel(tn().bezierTo(timeThrow, p1, pTo, p2), tn().to(.3, {
            scale: initOptForItemCM.scale / 1.2
          }), tn().to(timeThrow, {
            angle: initOptForItemCM.angle + 1080
          })).call(function() {
            itemCM.active = false;
            _this.playAnimation(_this.skeletonRole, dataSpine[0], true, 1, null);
            var arrSpine = [ dataSpine[1], dataSpine[0] ];
            _this.playAniArray(_this.skeletonRole, 0, arrSpine, null);
          }).start();
        };
        var timedrop = .4;
        var funcDrop = function() {
          kit.AudioPlayer.playEffect(_this.arrAudio[0]);
          var initOptForItemQ = {
            y: itemQ.y,
            opacity: itemQ.opacity
          };
          cc.tween(itemQ).to(timedrop, {
            y: initOptForItemQ.y - 200,
            opacity: 0
          }).call(function() {
            itemQ.y = initOptForItemQ.y;
            itemQ.opacity = initOptForItemQ.opacity;
            itemQ.active = false;
          }).start();
        };
        var timeShow = .4;
        var funcShow = function() {
          var optionOne = _this.dataQues.options[_this.quesIndex];
          var answerId = optionOne.answers.indexOf(itemId);
          var itemA = _this.arrAnswer[_this.quesIndex];
          var script = itemA.getComponent(ItemSnailPaShanQ_1.default);
          var label = script.arrLabel[answerId];
          label.active = true;
          label.opacity = 0;
          cc.tween(label).to(timeShow, {
            opacity: 255
          }).start();
        };
        var timeSnail = this.skeletonRole.findAnimation(dataSpine[2]).duration;
        var timeMove = 1.634;
        var funcSnail = function() {
          _this.skeletonRole.setToSetupPose();
          _this.skeletonRole.clearTracks();
          var entry = _this.skeletonRole.setAnimation(0, dataSpine[2], false);
          _this.skeletonRole.addAnimation(0, dataSpine[0], true);
          _this.skeletonRole.setTrackEventListener(entry, function(trackIndex, event) {
            if ("1" === event.data.name) {
              kit.AudioPlayer.playEffect(_this.arrAudio[3]);
              var snail2 = _this.arrNodeForRolePos[_this.selectItems.length + 1];
              var tn = cc.tween;
              tn(nodeSnail).parallel(tn().to(timeMove, {
                position: snail2.position
              }), tn().to(timeMove, {
                angle: snail2.angle
              })).start();
              return;
            }
          });
        };
        cc.tween(this.node).call(function() {
          funcThrow();
        }).delay(timeThrow).call(function() {
          funcDrop();
        }).delay(timedrop / 2).call(function() {
          funcShow();
        }).delay(timeShow).call(function() {
          funcSnail();
        }).delay(timeSnail).call(function() {
          callBack();
        }).start();
      };
      GameSnailPaShan.prototype.playAniWrong = function(itemId, callBack) {
        kit.AudioPlayer.playEffect(this.arrAudio[1]);
        var itemQ = this.arrQues[itemId];
        cc.tween(itemQ).to(.2, {
          angle: -10
        }).to(.2, {
          angle: 10
        }).to(.2, {
          angle: -10
        }).to(.2, {
          angle: 0
        }).call(function() {
          callBack();
        }).start();
      };
      GameSnailPaShan.prototype.playAniWin = function() {
        kit.AudioPlayer.playEffect(this.arrAudio[4]);
        var dataSpine = this.dataQues.dataSpine;
        var arrSpine = [ dataSpine[3], dataSpine[0] ];
        var snailRole = this.skeletonRole.node;
        var initAngle = snailRole.angle;
        snailRole.angle = 0;
        this.playAniArray(this.skeletonRole, 0, arrSpine, function() {
          snailRole.angle = initAngle;
        });
      };
      GameSnailPaShan.prototype.setIsLock = function(isLock) {
        this.isLock = isLock;
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
          this.receiveMessage(JSON.stringify(tempData));
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
      GameSnailPaShan.prototype.getArrByNode = function(node, string) {
        var child = node.children;
        var arrObj = [];
        for (var index = 0, length = child.length; index < length; index++) {
          var element = child[index];
          if (element.name.indexOf(string) < 0) continue;
          arrObj.push(element);
        }
        var strlen = string.length;
        arrObj.sort(function(a, b) {
          var indexA = Number(a.name.slice(strlen, a.name.length));
          var indexB = Number(b.name.slice(strlen, b.name.length));
          return indexA - indexB;
        });
        return [].concat(arrObj);
      };
      GameSnailPaShan.prototype.getLocalPos = function(nodecur, nodeGoal) {
        var pointWorld = nodecur.parent.convertToWorldSpaceAR(nodecur.position);
        return nodeGoal.convertToNodeSpaceAR(pointWorld);
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
        var tempData = JSON.parse(data);
        var handleData = tempData.actionData;
        cc.log(JSON.stringify(handleData) + ",");
        if (handleData && handleData.cmd && handleData.info) {
          var info = handleData.info;
          switch (handleData.cmd) {
           case this.event_game_next:
            this.msgResultNext(info);
            break;

           case this.event_game_touch:
            this.msgResultTouch(info);
          }
        }
      };
      __decorate([ property([ cc.AudioClip ]) ], GameSnailPaShan.prototype, "arrAudio", void 0);
      __decorate([ property([ cc.Node ]) ], GameSnailPaShan.prototype, "arrQues", void 0);
      __decorate([ property([ cc.Node ]) ], GameSnailPaShan.prototype, "arrAnswer", void 0);
      __decorate([ property(cc.Node) ], GameSnailPaShan.prototype, "btnNext", void 0);
      __decorate([ property(sp.Skeleton) ], GameSnailPaShan.prototype, "skeletonRole", void 0);
      GameSnailPaShan = __decorate([ ccclass ], GameSnailPaShan);
      return GameSnailPaShan;
    }(cc.Component);
    exports.default = GameSnailPaShan;
    cc._RF.pop();
  }, {
    "../res/hand/script/HandCtr": "HandCtr",
    "./ItemSnailPaShanQ": "ItemSnailPaShanQ"
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
  }, {} ],
  ItemSnailPaShanQ: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2dd54xv0WdJ/6J8QX7PnGjY", "ItemSnailPaShanQ");
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
    var ItemSnailPaShanQ = function(_super) {
      __extends(ItemSnailPaShanQ, _super);
      function ItemSnailPaShanQ() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.arrLabel = [];
        return _this;
      }
      ItemSnailPaShanQ.prototype.updateUIForLabel = function(answers, selectItems) {
        for (var index = 0, length = this.arrLabel.length; index < length; index++) {
          var element = this.arrLabel[index];
          var idQ = answers[index];
          element.active = selectItems.indexOf(idQ) >= 0;
        }
      };
      __decorate([ property([ cc.Node ]) ], ItemSnailPaShanQ.prototype, "arrLabel", void 0);
      ItemSnailPaShanQ = __decorate([ ccclass ], ItemSnailPaShanQ);
      return ItemSnailPaShanQ;
    }(cc.Component);
    exports.default = ItemSnailPaShanQ;
    cc._RF.pop();
  }, {} ]
}, {}, [ "HandCtr", "GameSnailPaShan", "ItemSnailPaShanQ" ]);
//# sourceMappingURL=index.js.map
