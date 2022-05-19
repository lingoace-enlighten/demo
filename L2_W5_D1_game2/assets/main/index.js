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
  AdapterBg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0ecdbj1cNVLcZbEtt6GCKY2", "AdapterBg");
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
        console.log("FixBg >>>>>>>>>>>>>>");
        this.relayout();
      };
      AdapterBg.prototype.relayout = function() {
        var frameSize = cc.view.getFrameSize();
        var designResolution = cc.Canvas.instance.designResolution;
        var designSize = cc.size(designResolution.width, designResolution.height);
        var frameAspectRatio = frameSize.width / frameSize.height;
        var screenSize = __assign({}, designSize);
        var ratio = this.node.width / this.node.height;
        if (ratio > frameAspectRatio) {
          var width = this.node.width * screenSize.height / this.node.height;
          this.node.width = width;
          this.node.height = screenSize.height;
        } else {
          var height = this.node.height * screenSize.width / this.node.width;
          this.node.width = screenSize.width;
          this.node.height = height;
        }
        var wdt = this.node.getComponent(cc.Widget);
        if (null == wdt) {
          this.node.addComponent(cc.Widget);
          wdt = this.node.getComponent(cc.Widget);
        }
        wdt.isAlignHorizontalCenter = true;
        wdt.isAlignVerticalCenter = true;
      };
      AdapterBg = __decorate([ ccclass ], AdapterBg);
      return AdapterBg;
    }(cc.Component);
    exports.default = AdapterBg;
    cc._RF.pop();
  }, {} ],
  AdapterScreen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b1d8/tQuVKzIzxX9sqrlx1", "AdapterScreen");
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
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AdapterScreen = function(_super) {
      __extends(AdapterScreen, _super);
      function AdapterScreen() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lock = false;
        return _this;
      }
      AdapterScreen.prototype.onLoad = function() {
        this.relayout();
      };
      AdapterScreen.prototype.setWin = function(node) {
        var viewSize = cc.view.getVisibleSize();
        if (Number((viewSize.width / viewSize.height).toFixed(2)) <= 1.5) {
          console.log("\u5e73\u677f\u9002\u914d");
          node.scale = .75;
        }
      };
      AdapterScreen.prototype.relayout = function() {
        if (this.lock) return;
        this.lock = true;
        var frameSize = cc.view.getFrameSize();
        var designResolution = cc.Canvas.instance.designResolution;
        var designSize = cc.size(designResolution.width, designResolution.height);
        cc.log("canvas designSize:", designSize);
        var frameAspectRatio = frameSize.width / frameSize.height;
        var designAspectRatio = designSize.width / designSize.height;
        var screenSize = __assign({}, designSize);
        frameAspectRatio < designAspectRatio ? screenSize.height = Math.ceil(designSize.width / frameAspectRatio) : screenSize.width = Math.ceil(designSize.height * frameAspectRatio);
        cc.Canvas.instance.designResolution = screenSize;
        this.lock = false;
      };
      AdapterScreen = __decorate([ ccclass ], AdapterScreen);
      return AdapterScreen;
    }(cc.Component);
    exports.default = AdapterScreen;
    cc._RF.pop();
  }, {} ],
  BackgroundAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ef34GsXetFBaW7KLpZFof/", "BackgroundAdapter");
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
    var BackgroundAdapter = function(_super) {
      __extends(BackgroundAdapter, _super);
      function BackgroundAdapter() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BackgroundAdapter.prototype.onLoad = function() {
        var srcScaleForShowAll = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
        var realWidth = this.node.width * srcScaleForShowAll;
        var realHeight = this.node.height * srcScaleForShowAll;
        this.node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight);
      };
      BackgroundAdapter = __decorate([ ccclass ], BackgroundAdapter);
      return BackgroundAdapter;
    }(cc.Component);
    exports.default = BackgroundAdapter;
    cc._RF.pop();
  }, {} ],
  GameConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7649fLCFHlIW5oQYpYg4BdT", "GameConfig");
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
    exports.GameConfig = void 0;
    var GameConfig;
    exports.GameConfig = GameConfig;
    true;
    (function name() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
           case 0:
            return [ 4, new Promise(function(resolve) {
              cc.assetManager.loadBundle("config", function(err, bundle) {
                bundle.load("GameConfig", cc.JsonAsset, function(err, data) {
                  if (err) {
                    cc.error(" load config/GameConfig error!");
                    resolve();
                    return;
                  }
                  exports.GameConfig = GameConfig = data.json;
                  console.log(" ====== GameConfig: ", GameConfig);
                  resolve();
                });
              });
            }) ];

           case 1:
            _a.sent();
            return [ 2 ];
          }
        });
      });
    })();
    cc._RF.pop();
  }, {} ],
  GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3cd87ZAxKBFoKTHqBPAHccq", "GameData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameConfig_1 = require("./GameConfig");
    var GameData = function() {
      function GameData() {
        this.gameConfig = [];
        this.recordNum = "";
        this.totalStarNum = 0;
        this.isTest = false;
        this._curGameIndex = 0;
      }
      Object.defineProperty(GameData.prototype, "curGameIndex", {
        get: function() {
          return this._curGameIndex;
        },
        set: function(v) {
          this._curGameIndex = v;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(GameData, "getInstance", {
        get: function() {
          this.instance || (this.instance = new GameData());
          return this.instance;
        },
        enumerable: false,
        configurable: true
      });
      GameData.prototype.loadGameConfigData = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          cc.assetManager.loadBundle("config", function(err, bundle) {
            bundle.load(GameConfig_1.GameConfig.gameConfigName, cc.JsonAsset, function(err, data) {
              if (err) {
                cc.error(" load config/GameConfig error!");
                resolve();
                return;
              }
              _this.gameConfig = data.json;
              console.log(" this.gameConfig: ", _this.gameConfig);
              resolve();
            });
          });
        });
      };
      Object.defineProperty(GameData.prototype, "gameCount", {
        get: function() {
          return this.gameConfig.length;
        },
        enumerable: false,
        configurable: true
      });
      GameData.prototype.getStarNum = function() {
        return this.totalStarNum;
      };
      GameData.prototype.setStarNum = function(num) {
        this.totalStarNum = Number(num);
      };
      GameData.prototype.addStarNum = function(num) {
        this.totalStarNum += num;
      };
      Object.defineProperty(GameData.prototype, "curEntryPath", {
        get: function() {
          var _a;
          return (null === (_a = this.gameConfig[this.curGameIndex]) || void 0 === _a ? void 0 : _a.entry) || null;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(GameData.prototype, "curBundleName", {
        get: function() {
          var _a;
          return (null === (_a = this.gameConfig[this.curGameIndex]) || void 0 === _a ? void 0 : _a.bundleName) || null;
        },
        enumerable: false,
        configurable: true
      });
      GameData.prototype.getGameDependencies = function() {
        var _a;
        var dep = ((null === (_a = this.gameConfig[this.curGameIndex]) || void 0 === _a ? void 0 : _a.dependencies) || []).concat();
        dep.push(this.curBundleName);
        return dep;
      };
      return GameData;
    }();
    exports.default = GameData.getInstance;
    cc._RF.pop();
  }, {
    "./GameConfig": "GameConfig"
  } ],
  GameEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3bd08XleFZNMbStaFXOTD/8", "GameEvent");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameEvent = void 0;
    var GameEvent;
    (function(GameEvent) {})(GameEvent = exports.GameEvent || (exports.GameEvent = {}));
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
    var ListenerManager_1 = require("./../module/kit/event/ListenerManager");
    var GameData_1 = require("./GameData");
    var TigoManager_1 = require("../module/kit/TigoManager");
    var AssetsManger_1 = require("../module/kit/assets/AssetsManger");
    var TimerSystem_1 = require("../module/kit/timer/TimerSystem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    false;
    var Main = function(_super) {
      __extends(Main, _super);
      function Main() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeBasePage = null;
        _this.nodeSecondaryPage = null;
        _this.gameMenu = null;
        _this.nodeNowShow = null;
        _this.pageNum = 0;
        _this.Lesson_Sign = "L1W1D1BW";
        _this.page = "page";
        _this.star = "star";
        _this.record_num = "record_num";
        _this.isSecgame = 0;
        _this.secKey = "seckey";
        return _this;
      }
      Main.prototype.onLoad = function() {
        return __awaiter(this, void 0, void 0, function() {
          var page, star, record_num, num, sgk;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              page = this.Lesson_Sign + this.page;
              star = this.Lesson_Sign + this.star;
              record_num = this.Lesson_Sign + this.record_num;
              return [ 4, GameData_1.default.loadGameConfigData() ];

             case 1:
              _a.sent();
              GameData_1.default.recordNum = TigoManager_1.default.callAppToStorage("GET", record_num) || 0;
              num = TigoManager_1.default.callAppToStorage("GET", star) || 0;
              GameData_1.default.setStarNum(num);
              console.log("\u5f53\u524d\u6e38\u620f\u5f00\u53e3\u6570===========\u300b" + GameData_1.default.recordNum);
              this.pageNum = TigoManager_1.default.callAppToStorage("GET", page) || this.pageNum;
              console.log("\u5f53\u524d\u6e38\u620f\u9875\u6570============\u300b" + this.pageNum);
              sgk = this.Lesson_Sign + this.secKey;
              this.isSecgame = TigoManager_1.default.callAppToStorage("GET", sgk) || 0;
              console.log("\u6e38\u620f isSec ===" + this.isSecgame);
              TigoManager_1.default.callAppToStorage("GET", sgk) && console.log("callAppToStorage sgk issecgame \u6709\u6570\u636e");
              cc.macro.ENABLE_MULTI_TOUCH = false;
              1 == GameData_1.default.gameCount ? this.openGame(0) : this.openMenu();
              this.registerListener();
              this.initSys();
              TigoManager_1.default.callAppToLoaded();
              return [ 2 ];
            }
          });
        });
      };
      Main.prototype.initSys = function() {
        TimerSystem_1.default.instance.init();
      };
      Main.prototype.onAppEnterBackground = function() {
        console.log("\u6e38\u620f\u8fdb\u5165\u4e86\u540e\u53f0~~~~~~~~");
        cc.audioEngine.pauseMusic();
        cc.audioEngine.pauseAllEffects();
        cc.game.pause();
      };
      Main.prototype.onAppEnterForeground = function() {
        console.log("\u91cd\u65b0\u56de\u5230\u4e86\u6e38\u620f~~~~~~~~");
        cc.audioEngine.resumeMusic();
        cc.audioEngine.resumeAllEffects();
        cc.game.resume();
      };
      Main.prototype.registerListener = function() {
        ListenerManager_1.ListenerManager.on("entryMenu", this.entryMenu, this);
        cc.game.on(cc.game.EVENT_HIDE, this.onAppEnterBackground);
        cc.game.on(cc.game.EVENT_SHOW, this.onAppEnterForeground);
      };
      Main.prototype.entryMenu = function(endtag) {
        this.pageNum++;
        this.pageNum >= GameData_1.default.gameCount - 1 && TigoManager_1.default.callAppToSpeed();
        console.log("this.page_num ===" + this.pageNum);
        console.log("GameData.gameCount ===" + GameData_1.default.gameCount);
        if (this.pageNum >= GameData_1.default.gameCount) {
          var sgk = this.Lesson_Sign + this.secKey;
          TigoManager_1.default.callAppToStorage("PUT", sgk, 1);
          this.isSecgame = 1;
          if (endtag) {
            console.log("into all game end ani");
            this.gameAllend();
            return;
          }
          this.pageNum = GameData_1.default.gameCount - 1;
        }
        var page = this.Lesson_Sign + this.page;
        var star = this.Lesson_Sign + this.star;
        var record_num = this.Lesson_Sign + this.record_num;
        TigoManager_1.default.callAppToStorage("PUT", page, this.pageNum);
        TigoManager_1.default.callAppToStorage("PUT", star, GameData_1.default.totalStarNum);
        TigoManager_1.default.callAppToStorage("PUT", record_num, Number(GameData_1.default.recordNum));
        this.nodeNowShow && cc.isValid(this.nodeNowShow) && this.nodeNowShow.destroy();
        cc.audioEngine.stopAllEffects();
        this.openMenu(true);
      };
      Main.prototype.openMenu = function(isGoon) {
        void 0 === isGoon && (isGoon = false);
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, AssetsManger_1.default.instance.preloadBundle("lessonLoader") ];

             case 1:
              _a.sent();
              AssetsManger_1.default.instance.loadPrefab("prefab/gameMenu", "lessonLoader").then(function(prefab) {
                _this.gameMenu = cc.instantiate(prefab);
                _this.nodeSecondaryPage.addChild(_this.gameMenu);
                var gameMenuCop = _this.gameMenu.getComponent("gameMenu");
                gameMenuCop.initMenu(_this.pageNum, _this.isSecgame, isGoon, _this);
              });
              return [ 2 ];
            }
          });
        });
      };
      Main.prototype.openGame = function(gid) {
        this.gameMenu && this.gameMenu.destroy();
        this.loadGame(gid);
      };
      Main.prototype.gameAllend = function() {
        var star = this.Lesson_Sign + this.star;
        console.log("\u672c\u90e8\u5206\u4e00\u5171\u83b7\u5f97\u91d1\u5e01 === " + GameData_1.default.totalStarNum);
        console.log("\u672c\u90e8\u5206\u4e00\u5171\u5f00\u53e3 === " + GameData_1.default.recordNum + "\u6b21");
        var h = {
          userId: TigoManager_1.default.userId,
          lessonId: TigoManager_1.default.classId,
          redVal: GameData_1.default.totalStarNum,
          openVal: GameData_1.default.recordNum,
          lessonModelId: TigoManager_1.default.lessonModuleId
        };
        TigoManager_1.default.callAppToHttp("POST", GameData_1.default.totalStarNum, GameData_1.default.recordNum);
        TigoManager_1.default.callAppToStorage("remove", star);
        TigoManager_1.default.callAppToClose("replayOrNext", true);
      };
      Main.prototype.loadGame = function(page_num) {
        return __awaiter(this, void 0, void 0, function() {
          var deps;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              console.log("\u5f53\u524d\u52a0\u8f7d\u7684\u6e38\u620f\u9875\u6570---------------\x3e" + page_num);
              GameData_1.default.curGameIndex = page_num;
              deps = GameData_1.default.getGameDependencies();
              console.log(" ===>>deps list: ", deps);
              return [ 4, Promise.all(deps.map(function(bundleName) {
                return AssetsManger_1.default.instance.preloadBundle(bundleName);
              })) ];

             case 1:
              _a.sent();
              AssetsManger_1.default.instance.loadPrefab(GameData_1.default.curEntryPath, GameData_1.default.curBundleName).then(function(prefab) {
                _this.addPrefab(prefab);
              });
              return [ 2 ];
            }
          });
        });
      };
      Main.prototype.addPrefab = function(prefab) {
        this.nodeNowShow && cc.isValid(this.nodeNowShow) && this.nodeNowShow.destroy();
        cc.audioEngine.stopAllEffects();
        this.nodeNowShow = cc.instantiate(prefab);
        if (0 != this.pageNum) {
          this.nodeNowShow.opacity = 100;
          cc.tween(this.nodeNowShow).to(1, {
            opacity: 255
          }).start();
        }
        this.nodeBasePage.addChild(this.nodeNowShow);
      };
      Main.prototype.onDestroy = function() {
        this.unRegisterListener();
      };
      Main.prototype.unRegisterListener = function() {
        ListenerManager_1.ListenerManager.off("entryMenu", this.entryMenu, this);
        cc.game.off(cc.game.EVENT_HIDE, this.onAppEnterBackground);
        cc.game.off(cc.game.EVENT_SHOW, this.onAppEnterForeground);
      };
      __decorate([ property({
        type: cc.Node,
        displayName: "\u6e38\u620f\u653e\u7f6e\u8282\u70b9"
      }) ], Main.prototype, "nodeBasePage", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u4e8c\u7ea7\u754c\u9762\u653e\u7f6e\u8282\u70b9"
      }) ], Main.prototype, "nodeSecondaryPage", void 0);
      Main = __decorate([ ccclass ], Main);
      return Main;
    }(cc.Component);
    exports.default = Main;
    window.addEventListener("message", function(e) {
      console.log("get app data === ", e.data);
      e.data.action && window["callCocos"](e.data);
    }, false);
    cc._RF.pop();
  }, {
    "../module/kit/TigoManager": void 0,
    "../module/kit/assets/AssetsManger": void 0,
    "../module/kit/timer/TimerSystem": void 0,
    "./../module/kit/event/ListenerManager": void 0,
    "./GameData": "GameData"
  } ],
  use_reversed_rotateBy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c55cHIJrhLurh2eXEmib0a", "use_reversed_rotateBy");
    "use strict";
    cc.RotateBy._reverse = true;
    cc._RF.pop();
  }, {} ]
}, {}, [ "GameEvent", "use_reversed_rotateBy", "AdapterBg", "AdapterScreen", "BackgroundAdapter", "GameConfig", "GameData", "Main" ]);