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
    var GameData_1 = require("../../../scripts/GameData");
    var AssetsManger_1 = require("../../kit/assets/AssetsManger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameGate = function(_super) {
      __extends(GameGate, _super);
      function GameGate() {
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
      GameGate.prototype.onLoad = function() {};
      GameGate.prototype.initInfo = function(gid, cid, isSec, gm) {
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
      GameGate.prototype.setShowImage = function() {
        var _this = this;
        var url = "";
        var self = this;
        this.quizLabel.string = "Game " + (this.gameid + 1);
        GameData_1.default.gameConfig[this.gameid].icon && (url = GameData_1.default.gameConfig[this.gameid].icon);
        AssetsManger_1.default.instance.loadImg(url, "GameIcon").then(function(img) {
          _this.showSpr.spriteFrame = img;
        });
      };
      GameGate.prototype.start = function() {};
      GameGate.prototype.onClickBut = function() {
        this.gMenu.gateClick(this.gameid);
      };
      __decorate([ property(cc.Label) ], GameGate.prototype, "quizLabel", void 0);
      __decorate([ property(cc.Node) ], GameGate.prototype, "selecNode", void 0);
      __decorate([ property(cc.Sprite) ], GameGate.prototype, "showSpr", void 0);
      __decorate([ property(cc.Sprite) ], GameGate.prototype, "btnbg", void 0);
      __decorate([ property(cc.Node) ], GameGate.prototype, "veilNode", void 0);
      __decorate([ property(cc.Node) ], GameGate.prototype, "popenNdoe", void 0);
      __decorate([ property(cc.Button) ], GameGate.prototype, "clickBut", void 0);
      __decorate([ property(cc.Animation) ], GameGate.prototype, "udAni", void 0);
      GameGate = __decorate([ ccclass ], GameGate);
      return GameGate;
    }(cc.Component);
    exports.default = GameGate;
    cc._RF.pop();
  }, {
    "../../../scripts/GameData": void 0,
    "../../kit/assets/AssetsManger": void 0
  } ],
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
    var GameData_1 = require("../../../scripts/GameData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var gameMenu = function(_super) {
      __extends(gameMenu, _super);
      function gameMenu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gpList = [];
        _this.gatePre = null;
        _this.curgameId = 0;
        _this.isSecgame = 0;
        _this.mainS = null;
        _this.canClick = true;
        return _this;
      }
      gameMenu.prototype.initMenu = function(cid, issg, isGoon, ms) {
        var _this = this;
        cc.log("game menu curid(page_num) == " + cid);
        this.curgameId = cid;
        this.isSecgame = issg;
        this.mainS = ms;
        var copygpList;
        var gameNum = GameData_1.default.gameCount;
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
      gameMenu.prototype.start = function() {};
      gameMenu.prototype.autoGame = function() {
        cc.log("\u81ea\u52a8\u8fdb\u5165 gameid = " + this.curgameId);
        this.mainS.openGame(this.curgameId);
      };
      gameMenu.prototype.gateClick = function(gid) {
        cc.log("\u70b9\u51fb\u8fdb\u5165 gameid = " + gid);
        this.mainS.openGame(gid);
      };
      __decorate([ property(cc.Node) ], gameMenu.prototype, "gpList", void 0);
      __decorate([ property(cc.Prefab) ], gameMenu.prototype, "gatePre", void 0);
      gameMenu = __decorate([ ccclass ], gameMenu);
      return gameMenu;
    }(cc.Component);
    exports.default = gameMenu;
    cc._RF.pop();
  }, {
    "../../../scripts/GameData": void 0
  } ]
}, {}, [ "gameGate", "gameMenu" ]);