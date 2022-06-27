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
  AnswerItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de911k7qNBBNI2WXjopCaSw", "AnswerItem");
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
    var AnswerItem = function(_super) {
      __extends(AnswerItem, _super);
      function AnswerItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
      }
      AnswerItem_1 = AnswerItem;
      AnswerItem.prototype.setString = function(value) {
        this.label.string = value;
      };
      AnswerItem.prototype.getString = function() {
        return this.label.string;
      };
      AnswerItem.prototype.isValueEqual = function(item) {
        return item.getString() == this.getString();
      };
      AnswerItem.prototype.onDestroy = function() {
        this.unuse();
        kit.pool.PrefabPool.put(this.node, "answerItem", AnswerItem_1);
      };
      AnswerItem.prototype.reuse = function() {
        cc.log("reuse item");
      };
      AnswerItem.prototype.unuse = function() {
        cc.log("unuse item");
      };
      var AnswerItem_1;
      __decorate([ property(cc.Label) ], AnswerItem.prototype, "label", void 0);
      AnswerItem = AnswerItem_1 = __decorate([ ccclass ], AnswerItem);
      return AnswerItem;
    }(cc.Component);
    exports.default = AnswerItem;
    cc._RF.pop();
  }, {} ],
  Config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d259bcpq1GepgSPh9U8W5v", "Config");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Config = void 0;
    exports.Config = {
      data: [ {
        index: 0,
        correctAnswer: "What's your name",
        questions: [ "your", "name", "What's" ],
        stopCode: "?"
      }, {
        index: 1,
        correctAnswer: "How old are you",
        questions: [ "old", "you", "are", "How" ],
        stopCode: "?"
      }, {
        index: 2,
        correctAnswer: "I am seven",
        questions: [ "am", "I", "seven" ],
        stopCode: "."
      }, {
        index: 3,
        correctAnswer: "Raise your hand please",
        questions: [ "please", "your", "Raise", "hand" ],
        stopCode: "."
      }, {
        index: 4,
        correctAnswer: "Be quiet please",
        questions: [ "quiet", "Be", "please" ],
        stopCode: "."
      } ]
    };
    cc._RF.pop();
  }, {} ],
  Delegate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c986aZS7eJF9LbSvqvx3QPN", "Delegate");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AnswerItem_1 = require("./AnswerItem");
    var Config_1 = require("./Config");
    var QuestionItem_1 = require("./QuestionItem");
    var Delegate = function() {
      function Delegate(rootParam) {
        this.lastOpTime = 0;
        this.tipSpaceTime = 5e3;
        this.touchMoveSpaceTime = 100;
        this.root = rootParam;
        this.operateLock = false;
      }
      Delegate.prototype.start = function(sync) {
        var _this = this;
        void 0 === sync && (sync = false);
        this.addListener();
        !sync && this.gameStart();
        sync || this.root.isTeacher || this.root.scheduleOnce(function() {
          var startPos = _this.root.questionNode.children[2].convertToWorldSpaceAR(cc.Vec3.ZERO);
          startPos = _this.root.node.convertToNodeSpaceAR(cc.v2(startPos.x, startPos.y));
          var endPos = _this.root.rootNode.children[0].convertToWorldSpaceAR(cc.Vec3.ZERO);
          endPos = _this.root.node.convertToNodeSpaceAR(cc.v2(endPos.x, endPos.y));
          _this.root.guildHand(startPos, endPos);
        }, .5);
      };
      Delegate.prototype.clearGameTable = function() {
        this.curTarget = null;
        this.curTargetBasePos = null;
        this.root.rootNode.removeAllChildren();
        this.root.questionNode.removeAllChildren();
      };
      Delegate.prototype.reStart = function() {
        this.curRound = 0;
        this.curRoundData = Config_1.Config.data[this.curRound];
        this.operation = null;
        this.root.stopCode.node.parent.active = false;
        this.createRoundElement();
      };
      Delegate.prototype.lastRound = function() {
        this.curRound--;
        this.curRound < 0 && (this.curRound = 0);
        this.curRoundData = Config_1.Config.data[this.curRound];
        this.operation = null;
        this.root.stopCode.node.parent.active = false;
        this.createRoundElement(true);
        this.root.resetLasers(this.operation.round);
      };
      Delegate.prototype.onDestroy = function() {
        this.delListener();
        this.root = null;
        this.operation = null;
        this.curRoundData = null;
        this.curTarget = null;
        this.curTargetBasePos = null;
      };
      Delegate.prototype.setOperationLock = function() {
        this.operateLock = true;
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
          this.root.stopTip();
        }
        this.root.stopTip();
        this.backToBase();
      };
      Delegate.prototype.setOperationFree = function() {
        var _this = this;
        this.operateLock = false;
        this.step > 0 && (this.timeout = setTimeout(function() {
          _this.checkShowOpTip();
        }, this.tipSpaceTime));
      };
      Delegate.prototype.checkShowOpTip = function() {
        var now = Date.now();
        if (now - this.lastOpTime >= this.tipSpaceTime) {
          this.lastOpTime = now;
          var words_1 = [];
          this.operation.data.forEach(function(item) {
            item.correct || words_1.push(item.content);
          });
          this.root.tipShow(words_1);
        }
      };
      Delegate.prototype.backToBase = function() {
        var _this = this;
        if (this.curTarget && this.curTargetBasePos) {
          var tempData = this.operation.data;
          var curString_1 = this.curTarget.getComponent(QuestionItem_1.default).getString();
          tempData.forEach(function(item) {
            if (item.content == curString_1) {
              var clonePos = _this.curTargetBasePos.clone();
              item.position = cc.v2(clonePos.x >> 0, clonePos.y >> 0);
            }
          });
          cc.tween(this.curTarget).to(.5, {
            x: this.curTargetBasePos.x >> 0,
            y: this.curTargetBasePos.y >> 0
          }, cc.easeCubicActionOut()).call(function() {
            _this.root.exportOperationData(_this.operation, "operation", -1);
          }).start();
          this.curTarget = null;
          this.curTargetBasePos = null;
        }
      };
      Delegate.prototype.addListener = function() {
        this.root.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this);
        this.root.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.root.node.on(cc.Node.EventType.TOUCH_END, this.onTouchReleased, this);
        this.root.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchReleased, this);
      };
      Delegate.prototype.delListener = function() {
        this.root.node.off(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this);
        this.root.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.root.node.off(cc.Node.EventType.TOUCH_END, this.onTouchReleased, this);
        this.root.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchReleased, this);
      };
      Delegate.prototype.onChooseTarget = function(data) {
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
          this.root.stopTip();
        }
        this.root.operator.string = data.nickName;
        var actDt = data.actionData;
        var content = actDt.curContent;
        var curPos;
        this.root.questionNode.children.forEach(function(quest) {
          quest.getComponent(QuestionItem_1.default).getString() == content && (curPos = quest.convertToWorldSpaceAR(cc.Vec2.ZERO));
        });
        var rootLocalPos = this.root.node.convertToNodeSpaceAR(curPos);
        this.root.hand.x = rootLocalPos.x;
        this.root.hand.y = rootLocalPos.y;
        this.root.hand.active = true;
      };
      Delegate.prototype.onMoveTarget = function(data) {
        var _this = this;
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
          this.root.stopTip();
        }
        this.root.hand.active = true;
        this.root.operator.string = data.nickName;
        var actDt = data.actionData;
        var content = actDt.curContent;
        var pos;
        actDt.data.forEach(function(item) {
          item.content == content && (pos = item.position);
        });
        var curPos;
        this.root.questionNode.children.forEach(function(quest) {
          if (quest.getComponent(QuestionItem_1.default).getString() == content) {
            if (pos) {
              cc.Tween.stopAllByTarget(quest);
              quest.setSiblingIndex(_this.root.questionNode.childrenCount - 1);
              cc.tween(quest).to(.2, {
                x: pos.x,
                y: pos.y
              }).start();
            }
            curPos = quest.convertToWorldSpaceAR(cc.Vec2.ZERO);
          }
        });
        var rootLocalPos = this.root.node.convertToNodeSpaceAR(curPos);
        cc.Tween.stopAllByTarget(this.root.hand);
        cc.tween(this.root.hand).to(.2, {
          x: rootLocalPos.x,
          y: rootLocalPos.y
        }).start();
      };
      Delegate.prototype.onTouchBegin = function(event) {
        var _this = this;
        if (this.operateLock) return;
        this.root.stopHand();
        this.root.stopTip();
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
          this.root.stopTip();
        }
        this.removeLayoutFromRoot();
        var touchPos = event.getLocation();
        this.root.questionNode.children.forEach(function(item) {
          var str = item.getComponent(QuestionItem_1.default).getString();
          if (!_this.getCorrect(str)) {
            var boundWorld = item.getBoundingBoxToWorld();
            if (!_this.curTarget && boundWorld.contains(touchPos)) {
              _this.touchStartTime = Date.now();
              _this.curTarget = item;
              _this.curTargetBasePos = _this.curTarget.getPosition();
              _this.curTarget.setSiblingIndex(_this.root.questionNode.childrenCount - 1);
              cc.log("get target, name: " + str);
              _this.operation.curContent = _this.curTarget.getComponent(QuestionItem_1.default).getString();
              _this.root.exportOperationData(_this.operation, "chooseTarget");
            }
          }
        });
      };
      Delegate.prototype.onTouchMoved = function(event) {
        var _this = this;
        if (this.operateLock) return;
        if (this.curTarget) {
          this.curTarget.x += event.getDeltaX();
          this.curTarget.y += event.getDeltaY();
          var now = Date.now();
          if (now - this.touchStartTime >= this.touchMoveSpaceTime) {
            this.touchStartTime = now;
            var tempData = this.operation.data;
            tempData.forEach(function(data) {
              if (data.content == _this.curTarget.getComponent(QuestionItem_1.default).getString()) {
                data.position.x = _this.curTarget.x;
                data.position.y = _this.curTarget.y;
              }
            });
            this.root.exportOperationData(this.operation, "moveTarget");
          }
        }
      };
      Delegate.prototype.onTouchReleased = function(event) {
        var _this = this;
        if (this.operateLock) return;
        if (this.curTarget) {
          var touchPos_1 = event.getLocation();
          this.operation.step++;
          var curString_2 = this.curTarget.getComponent(QuestionItem_1.default).getString();
          var tempData = this.operation.data;
          var correct_1 = false;
          var intersectRect_1 = [];
          var moveToPos_1;
          this.root.rootNode.children.forEach(function(item, index) {
            var boundWorld = item.getBoundingBoxToWorld();
            if (_this.curTarget && boundWorld.contains(touchPos_1)) {
              moveToPos_1 = _this.root.questionNode.convertToNodeSpaceAR(item.convertToWorldSpaceAR(cc.Vec3.ZERO));
              cc.tween(_this.curTarget).to(.25, {
                x: moveToPos_1.x,
                y: moveToPos_1.y,
                scale: 1
              }, cc.easeCubicActionOut()).start();
              index == _this.curRoundData.correctAnswer.split(" ").indexOf(curString_2) && (correct_1 = true);
            } else {
              var curBoundWorld = _this.curTarget.getBoundingBoxToWorld();
              if (curBoundWorld.intersects(boundWorld)) {
                var containRect = new cc.Rect();
                curBoundWorld.intersection(containRect, boundWorld);
                intersectRect_1.push({
                  item: item,
                  rect: containRect,
                  index: index
                });
              }
            }
          });
          if (!correct_1 && intersectRect_1.length > 0) {
            var maxRect = void 0;
            var i = 0;
            while (i < intersectRect_1.length) {
              if (maxRect) {
                var tempSize = intersectRect_1[i].rect.size;
                var tempArea = tempSize.width * tempSize.height;
                var lastSize = maxRect.rect.size;
                var lastArea = lastSize.width * lastSize.height;
                lastArea < tempArea && (maxRect = intersectRect_1[i]);
              } else maxRect = intersectRect_1[i];
              i++;
            }
            if (maxRect) {
              moveToPos_1 = this.root.questionNode.convertToNodeSpaceAR(maxRect.item.convertToWorldSpaceAR(cc.Vec3.ZERO));
              cc.tween(this.curTarget).to(.25, {
                x: moveToPos_1.x,
                y: moveToPos_1.y,
                scale: 1
              }, cc.easeCubicActionOut()).start();
              maxRect.index == this.curRoundData.correctAnswer.split(" ").indexOf(curString_2) && (correct_1 = true);
            }
          }
          tempData.forEach(function(data) {
            if (data.content == curString_2) {
              data.correct = correct_1;
              data.position = moveToPos_1 ? cc.v2(moveToPos_1.x >> 0, moveToPos_1.y >> 0) : cc.v2(_this.curTarget.x >> 0, _this.curTarget.y >> 0);
            }
          });
          this.root.exportOperationData(this.operation, "operation", correct_1 ? 1 : 0);
          if (!correct_1) {
            this.root.playersHurt();
            this.backToBase();
          }
          this.checkAllCorrect();
        }
        this.curTarget = null;
        this.timeout = setTimeout(function() {
          _this.checkShowOpTip();
        }, this.tipSpaceTime);
      };
      Delegate.prototype.resumeGameStatus = function() {
        var _this = this;
        this.curRound = this.operation.round;
        this.curRoundData = Config_1.Config.data[this.curRound];
        this.root.rootNode.removeAllChildren();
        this.root.questionNode.removeAllChildren();
        this.createRoundElement();
        this.step = this.operation.step;
        this.root.questionNode.children.forEach(function(node) {
          _this.resumePosition(node);
        });
      };
      Delegate.prototype.resumePosition = function(node) {
        var nodeStr = node.getComponent(QuestionItem_1.default).getString();
        this.operation.data.forEach(function(itemData) {
          if (nodeStr == itemData.content) {
            node.x = itemData.position.x;
            node.y = itemData.position.y;
          }
        });
      };
      Delegate.prototype.gameStart = function() {
        this.curRound = 0;
        this.curRoundData = Config_1.Config.data[this.curRound];
        this.createRoundElement();
      };
      Delegate.prototype.nextRound = function() {
        this.curRound++;
        this.curRound >= Config_1.Config.data.length && (this.curRound = Config_1.Config.data.length - 1);
        this.curRoundData = Config_1.Config.data[this.curRound];
        this.operation = null;
        this.root.stopCode.node.parent.active = false;
        this.createRoundElement();
        this.root.resetLasers(this.operation.round);
      };
      Delegate.prototype.createRoundElement = function(force) {
        var _this = this;
        void 0 === force && (force = false);
        this.addItemToQuestion();
        this.addItemToRoot();
        if (!this.operation) {
          this.addLayoutToRoot();
          this.step = 0;
          var tempData_1 = [];
          this.root.questionNode.children.forEach(function(item) {
            tempData_1.push({
              content: item.getComponent(QuestionItem_1.default).getString(),
              position: cc.v2(item.x >> 0, item.y >> 0),
              correct: false
            });
          });
          this.operation = {
            round: this.curRound,
            step: this.step,
            data: tempData_1
          };
          (this.curRound > 0 || force) && this.root.exportOperationData(this.operation, "operation", -1);
          this.root.scheduleOnce(function() {
            _this.removeLayoutFromRoot();
          }, .5);
        }
      };
      Delegate.prototype.addLayoutToRoot = function() {
        if (this.root.questionNode) {
          var layout = this.root.questionNode.getComponent(cc.Layout);
          layout.type = cc.Layout.Type.GRID;
          layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
          layout.startAxis = cc.Layout.AxisDirection.HORIZONTAL;
          layout.spacingX = 58;
          layout.spacingY = 40;
          layout.updateLayout();
        }
      };
      Delegate.prototype.removeLayoutFromRoot = function() {
        if (this.root.questionNode) {
          var layout = this.root.questionNode.getComponent(cc.Layout);
          layout.resizeMode = cc.Layout.ResizeMode.NONE;
          layout.type = cc.Layout.Type.NONE;
        }
      };
      Delegate.prototype.addItemToRoot = function() {
        var answers = this.curRoundData.correctAnswer.split(" ");
        var count = answers.length, i = 0;
        while (i < count) {
          var item = kit.pool.PrefabPool.get(this.root.answerPrefab, "answerItem", AnswerItem_1.default);
          answers[i].includes(this.curRoundData.stopCode) ? item.getComponent(AnswerItem_1.default).setString(answers[i].substring(0, answers[i].length - 1)) : item.getComponent(AnswerItem_1.default).setString(answers[i]);
          this.root.rootNode && (item.parent = this.root.rootNode);
          i++;
        }
        this.root.stopCode.node.parent.active = true;
        this.root.stopCode.string = this.curRoundData.stopCode;
      };
      Delegate.prototype.addItemToQuestion = function() {
        if (this.curRoundData && this.curRoundData.questions) {
          var count = this.curRoundData.questions.length, i = 0;
          while (i < count) {
            var item = kit.pool.PrefabPool.get(this.root.questionPrefab, "questionItem", QuestionItem_1.default);
            item.getComponent(QuestionItem_1.default).setString(this.curRoundData.questions[i]);
            item.parent = this.root.questionNode;
            i++;
          }
        }
      };
      Delegate.prototype.synchronous = function(opDt) {
        var _this = this;
        if (this.operation && this.operation.round == opDt.round) {
          if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
            this.root.stopTip();
          }
          if (this.root.hand.active) {
            this.root.operator.string = "";
            this.root.hand.active = false;
          }
          this.removeLayoutFromRoot();
          this.operation.round = opDt.round;
          this.step = this.operation.step = opDt.step;
          var tempData = opDt.data;
          var index = 0;
          while (index < tempData.length) {
            var temp = tempData[index];
            if (temp && this.operation.data[index] && temp.content == this.operation.data[index].content) {
              if (this.operation.data[index].position.x != temp.position.x || this.operation.data[index].position.y != temp.position.y) {
                this.syncItemPosition(temp);
                this.operation.data[index].position.x = temp.position.x;
                this.operation.data[index].position.y = temp.position.y;
              }
              this.operation.data[index].correct = temp.correct;
            }
            index++;
          }
        } else {
          this.operation = opDt;
          0 == this.operation.step ? this.addLayoutToRoot() : this.removeLayoutFromRoot();
          this.root.resetLasers(opDt.round);
          this.resumeGameStatus();
          0 == this.operation.step && this.root.scheduleOnce(function() {
            _this.removeLayoutFromRoot();
          }, .5);
        }
      };
      Delegate.prototype.syncItemPosition = function(data) {
        this.root.questionNode.children.forEach(function(child) {
          child.getComponent(QuestionItem_1.default).getString() == data.content && cc.tween(child).to(.25, {
            x: data.position.x,
            y: data.position.y,
            scale: 1
          }, cc.easeCubicActionOut()).start();
        });
      };
      Delegate.prototype.getCorrect = function(str) {
        var bool = false;
        this.operation.data.forEach(function(itemData) {
          itemData.content == str && (bool = itemData.correct);
        });
        return bool;
      };
      Delegate.prototype.checkAllCorrect = function() {
        var _this = this;
        var allCorrect = true;
        this.operation.data.forEach(function(itemData) {
          allCorrect && (allCorrect = itemData.correct);
        });
        if (allCorrect) {
          if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
            this.root.stopTip();
          }
          this.root.hideLaser(this.operation.round);
          this.root.sentenceComplete();
          setTimeout(function() {
            _this.root.exportOperationData(_this.operation, "roundComplete");
          }, 1e3);
        }
      };
      return Delegate;
    }();
    exports.default = Delegate;
    cc._RF.pop();
  }, {
    "./AnswerItem": "AnswerItem",
    "./Config": "Config",
    "./QuestionItem": "QuestionItem"
  } ],
  IItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86e5arO89pFsLVBZpQgK5bu", "IItem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  MakeASentenceScript: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75b66DIknBJ84XES7ar8Uwp", "MakeASentenceScript");
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
    var Delegate_1 = require("./Delegate");
    var QuestionItem_1 = require("./QuestionItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MakeASentenceScript = function(_super) {
      __extends(MakeASentenceScript, _super);
      function MakeASentenceScript() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.TaskNode = null;
        _this.answerPrefab = null;
        _this.questionPrefab = null;
        _this.rootNode = null;
        _this.stopCode = null;
        _this.questionNode = null;
        _this.taskAudio = null;
        _this.cheerAudio = null;
        _this.suspireAudio = null;
        _this.laserAudio = null;
        _this.hand = null;
        _this.operator = null;
        _this.leftDoor = null;
        _this.rightDoor = null;
        _this.lasers = [];
        _this.max = null;
        _this.melinda = null;
        _this.mili = null;
        _this.teacherNode = null;
        return _this;
      }
      MakeASentenceScript.prototype.onLoad = function() {
        this.delegate = new Delegate_1.default(this);
        this.initLasers();
      };
      MakeASentenceScript.prototype.onDestroy = function() {
        _super.prototype.onDestroy.call(this);
        this.delegate.onDestroy();
        this.delegate = null;
      };
      MakeASentenceScript.prototype.initLasers = function() {
        this.laserBaseOpacity = [];
        var i = 0;
        while (i < this.lasers.length) {
          var laser = this.lasers[i];
          laser.node.active = true;
          this.laserBaseOpacity.push(laser.node.opacity);
          laser.node.opacity = 0;
          i++;
        }
      };
      MakeASentenceScript.prototype.resetLasers = function(round) {
        var _this = this;
        this.lasers.forEach(function(laser, index) {
          laser.node.opacity = index >= round ? _this.laserBaseOpacity[index] : 0;
        });
      };
      MakeASentenceScript.prototype.start = function() {
        var _this = this;
        this.content && this.content.onGameReady();
        this.teacherNode.active = this.isTeacher;
        this.playIdle();
        if (this.snapData && "gameComplete" != this.snapData.action && "gameRestart" != this.snapData.action) {
          this.TaskNode.active = false;
          var round = this.snapData.actionData.round;
          this.resetLasers(round);
          this.delegate.synchronous(this.snapData.actionData);
          this.delegate.start(true);
        } else {
          this.scheduleOnce(function() {
            cc.audioEngine.play(_this.taskAudio, false, 1);
          }, 1);
          this.scheduleOnce(function() {
            _this.TaskNode.active = false;
            _this.showLasers(_this.onStart.bind(_this));
          }, this.taskAudio.duration + 1);
        }
      };
      MakeASentenceScript.prototype.onStart = function() {
        this.delegate.start();
      };
      MakeASentenceScript.prototype.onRestart = function() {
        var _this = this;
        this.TaskNode.active = true;
        this.delegate.clearGameTable();
        this.initLasers();
        this.scheduleOnce(function() {
          cc.audioEngine.play(_this.taskAudio, false, 1);
        }, 1);
        this.scheduleOnce(function() {
          _this.TaskNode.active = false;
          _this.showLasers(function() {
            _this.delegate.reStart();
          });
        }, this.taskAudio.duration + 1);
        this.isTeacher && this.exportOperationData({}, "gameRestart");
      };
      MakeASentenceScript.prototype.onClickLastRound = function() {
        if (this.isTeacher) {
          this.delegate.clearGameTable();
          this.delegate.lastRound();
        }
      };
      MakeASentenceScript.prototype.onClickNextRound = function() {
        if (this.isTeacher) {
          this.delegate.clearGameTable();
          this.delegate.nextRound();
        }
      };
      MakeASentenceScript.prototype.cloneActDt = function(source) {
        return JSON.parse(JSON.stringify(source));
      };
      MakeASentenceScript.prototype.setParams = function(data) {
        cc.log("set params: " + JSON.stringify(data));
        this.isTeacher = data.isTeacher || false;
        data.userInfo && (this.roleName = data.userInfo.name);
      };
      MakeASentenceScript.prototype.setContent = function(content) {
        this.content = content;
        var snapShot = this.content.getSnapshot();
        this.snapData = snapShot;
      };
      MakeASentenceScript.prototype.receiveMessage = function(data) {
        cc.log("receiveMessage: " + data.action);
        if (data.nickName != this.roleName) {
          var action = data.action;
          switch (action) {
           case "operation":
            this.delegate.synchronous(data.actionData);
            0 == data.correct && this.playersHurt();
            break;

           case "roundComplete":
            var round = data.actionData.round;
            this.hideLaser(round);
            this.sentenceComplete();
            break;

           case "gameComplete":
            this.sentenceComplete(true);
            break;

           case "chooseTarget":
            this.delegate.onChooseTarget(data);
            break;

           case "moveTarget":
            this.delegate.onMoveTarget(data);
            break;

           case "gameRestart":
            this.onRestart();
          }
        }
      };
      MakeASentenceScript.prototype.timeout = function() {};
      MakeASentenceScript.prototype.showLasers = function(callBack) {
        var _this = this;
        var that = this;
        var count = 0;
        this.lasers.forEach(function(laser, index) {
          laser.node.active = true;
          cc.tween(laser).delay(.2 * index).call(function() {
            cc.audioEngine.play(_this.laserAudio, false, 1);
            laser.node.opacity = _this.laserBaseOpacity[index];
            that.playSpine(laser, "appear", false, function() {
              that.playSpine(laser, "idle", true);
              count++;
              count == that.lasers.length && callBack && callBack.apply(null);
            });
          }).start();
        });
      };
      MakeASentenceScript.prototype.hideLaser = function(round) {
        var that = this;
        this.lasers.forEach(function(laser, index) {
          round == index && that.playSpine(laser, "disappear", false, function() {
            laser.node.active = false;
          });
        });
      };
      MakeASentenceScript.prototype.guildHand = function(startPos, endPos) {
        if (this.hand) {
          this.hand.active = true;
          cc.tween(this.hand).repeatForever(cc.tween().set({
            x: startPos.x,
            y: startPos.y
          }).to(1.5, {
            x: endPos.x,
            y: endPos.y
          }, cc.easeCubicActionOut()).delay(.5)).start();
        }
      };
      MakeASentenceScript.prototype.stopHand = function() {
        cc.Tween.stopAllByTarget(this.hand);
        this.hand.active = false;
      };
      MakeASentenceScript.prototype.tipShow = function(words) {
        this.questionNode.children.forEach(function(node) {
          words.includes(node.getComponent(QuestionItem_1.default).getString()) && node.getComponent(QuestionItem_1.default).showTip();
        });
      };
      MakeASentenceScript.prototype.stopTip = function() {
        this.questionNode.children.forEach(function(node) {
          node.getComponent(QuestionItem_1.default).hideTip();
        });
      };
      MakeASentenceScript.prototype.playIdle = function() {
        this.playSpine(this.max, "idle", true);
        this.playSpine(this.melinda, "daiji", true);
        this.playSpine(this.mili, "daiji", true);
      };
      MakeASentenceScript.prototype.playersHurt = function() {
        var _this = this;
        cc.log("playersHurt");
        cc.audioEngine.play(this.suspireAudio, false, 1);
        this.playSpine(this.max, "shiluo", false, function() {
          _this.playSpine(_this.max, "idle", true);
        });
        this.playSpine(this.melinda, "fu_fk", false, function() {
          _this.playSpine(_this.melinda, "daiji", true);
        });
        this.playSpine(this.mili, "fu_fankui", false, function() {
          _this.playSpine(_this.mili, "daiji", true);
        });
      };
      MakeASentenceScript.prototype.sentenceComplete = function(roundComplete) {
        var _this = this;
        void 0 === roundComplete && (roundComplete = false);
        cc.log("sentenceComplete");
        if (roundComplete) {
          this.playSpine(this.max, "qinzhu", false, function() {
            _this.playSpine(_this.max, "idle", true);
          });
          this.playSpine(this.melinda, "qingzhu", false, function() {
            _this.playSpine(_this.melinda, "daiji", true);
          });
          this.playSpine(this.mili, "qingzhu", false, function() {
            _this.playSpine(_this.mili, "daiji", true);
          });
          this.openTheDoor();
        } else {
          this.playSpine(this.max, "kaixin", false, function() {
            _this.playSpine(_this.max, "idle", true);
          });
          this.playSpine(this.melinda, "zheng_fk", false, function() {
            _this.playSpine(_this.melinda, "daiji", true);
          });
          this.playSpine(this.mili, "zheng_fk", false, function() {
            _this.playSpine(_this.mili, "daiji", true);
          });
          cc.audioEngine.play(this.cheerAudio, false, 1);
        }
      };
      MakeASentenceScript.prototype.openTheDoor = function() {
        var _this = this;
        cc.tween(this.leftDoor).to(1, {
          x: -164
        }, cc.easeCubicActionOut()).start();
        cc.tween(this.rightDoor).to(1, {
          x: 164
        }, cc.easeCircleActionOut()).delay(2).call(function() {
          _this.content && _this.content.onGameComplete();
        }).start();
      };
      MakeASentenceScript.prototype.exportOperationData = function(data, action, correct) {
        void 0 === correct && (correct = -1);
        var tempData = {
          isTeacher: this.isTeacher,
          nickName: this.roleName,
          action: action,
          actionData: data,
          correct: correct
        };
        this.content && this.content.postMessage(JSON.stringify(tempData));
      };
      MakeASentenceScript.prototype.onNextRound = function(dispatch) {
        void 0 === dispatch && (dispatch = false);
        var data = {
          isTeacher: this.isTeacher,
          actionData: "nextRound"
        };
        if (this.isTeacher && dispatch && this.content) {
          cc.log("dispatch NextRound");
          this.content.postMessage(JSON.stringify(data));
        }
        if (this.delegate) {
          this.delegate.clearGameTable();
          this.delegate.nextRound();
        }
      };
      MakeASentenceScript.prototype.onToggleSwitch = function() {
        var data = {
          isTeacher: this.isTeacher,
          actionData: ""
        };
        this.content && this.content.postMessage(JSON.stringify(data));
      };
      MakeASentenceScript.prototype.playSpine = function(ske, animation, loop, callBack) {
        void 0 === loop && (loop = false);
        if (ske && ske.animation != animation) {
          ske.clearTracks();
          ske.setToSetupPose();
          ske.setAnimation(0, animation, loop);
          callBack && ske.setCompleteListener(callBack);
        }
      };
      __decorate([ property(cc.Node) ], MakeASentenceScript.prototype, "TaskNode", void 0);
      __decorate([ property(cc.Prefab) ], MakeASentenceScript.prototype, "answerPrefab", void 0);
      __decorate([ property(cc.Prefab) ], MakeASentenceScript.prototype, "questionPrefab", void 0);
      __decorate([ property(cc.Node) ], MakeASentenceScript.prototype, "rootNode", void 0);
      __decorate([ property(cc.Label) ], MakeASentenceScript.prototype, "stopCode", void 0);
      __decorate([ property(cc.Node) ], MakeASentenceScript.prototype, "questionNode", void 0);
      __decorate([ property(cc.AudioClip) ], MakeASentenceScript.prototype, "taskAudio", void 0);
      __decorate([ property(cc.AudioClip) ], MakeASentenceScript.prototype, "cheerAudio", void 0);
      __decorate([ property(cc.AudioClip) ], MakeASentenceScript.prototype, "suspireAudio", void 0);
      __decorate([ property(cc.AudioClip) ], MakeASentenceScript.prototype, "laserAudio", void 0);
      __decorate([ property(cc.Node) ], MakeASentenceScript.prototype, "hand", void 0);
      __decorate([ property(cc.Label) ], MakeASentenceScript.prototype, "operator", void 0);
      __decorate([ property(cc.Node) ], MakeASentenceScript.prototype, "leftDoor", void 0);
      __decorate([ property(cc.Node) ], MakeASentenceScript.prototype, "rightDoor", void 0);
      __decorate([ property([ sp.Skeleton ]) ], MakeASentenceScript.prototype, "lasers", void 0);
      __decorate([ property(sp.Skeleton) ], MakeASentenceScript.prototype, "max", void 0);
      __decorate([ property(sp.Skeleton) ], MakeASentenceScript.prototype, "melinda", void 0);
      __decorate([ property(sp.Skeleton) ], MakeASentenceScript.prototype, "mili", void 0);
      __decorate([ property(cc.Node) ], MakeASentenceScript.prototype, "teacherNode", void 0);
      MakeASentenceScript = __decorate([ ccclass ], MakeASentenceScript);
      return MakeASentenceScript;
    }(cc.Component);
    exports.default = MakeASentenceScript;
    cc._RF.pop();
  }, {
    "./Delegate": "Delegate",
    "./QuestionItem": "QuestionItem"
  } ],
  QuestionItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4ec2E+YkNGQ504oIEscwLh", "QuestionItem");
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
    var AnswerItem_1 = require("./AnswerItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var QuestionItem = function(_super) {
      __extends(QuestionItem, _super);
      function QuestionItem() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      QuestionItem_1 = QuestionItem;
      QuestionItem.prototype.showTip = function() {
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).repeatForever(cc.tween(this.node).to(.5, {
          scale: 1.2
        }, cc.easeCubicActionOut()).delay(.2).to(.5, {
          scale: 1
        }, cc.easeCubicActionOut())).start();
      };
      QuestionItem.prototype.hideTip = function() {
        cc.Tween.stopAllByTarget(this.node);
        this.node.scale = 1;
      };
      QuestionItem.prototype.onDestroy = function() {
        this.unuse();
        kit.pool.PrefabPool.put(this.node, "questionItem", QuestionItem_1);
      };
      QuestionItem.prototype.reuse = function() {
        cc.log("QuestionItem reuse item");
      };
      QuestionItem.prototype.unuse = function() {
        cc.log("QuestionItem un use");
      };
      var QuestionItem_1;
      QuestionItem = QuestionItem_1 = __decorate([ ccclass ], QuestionItem);
      return QuestionItem;
    }(AnswerItem_1.default);
    exports.default = QuestionItem;
    cc._RF.pop();
  }, {
    "./AnswerItem": "AnswerItem"
  } ]
}, {}, [ "AnswerItem", "Config", "Delegate", "IItem", "MakeASentenceScript", "QuestionItem" ]);
//# sourceMappingURL=index.js.map
