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
  ASystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a669kHku5MAK7pY7AqAwFo", "ASystem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ASystem = function() {
      function ASystem() {}
      return ASystem;
    }();
    exports.default = ASystem;
    cc._RF.pop();
  }, {} ],
  AdapterBg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "39969N/Lr5IMZgIL8jX5rV9", "AdapterBg");
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
  AndroidAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ca49sKgbhF3aPO4mdkAtu2", "AndroidAdapter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AndroidAdapter = function() {
      function AndroidAdapter() {
        this.packageName = "org/cocos2dx/javascript/";
        this.isPrintLog = true;
      }
      AndroidAdapter.prototype.onGameExit = function() {};
      AndroidAdapter.prototype.onGameReady = function() {
        this.callFunction("hideSplash", "", "NativeInterface");
        cc.log("getWritablePath():" + jsb.fileUtils.getWritablePath());
      };
      AndroidAdapter.prototype.toast = function(message) {
        this.callFunction("toast", message, "NativeInterface");
      };
      AndroidAdapter.prototype.callFunction = function(funcName, parm, moduleName) {
        var packagePath = this.packageName;
        moduleName && "" != moduleName && (packagePath += moduleName);
        jsb.reflection.callStaticMethod(packagePath, funcName, "(Ljava/lang/String;)V", parm);
      };
      AndroidAdapter.prototype.callFunctionResult = function(funcName, parm, moduleName) {
        var packagePath = this.packageName;
        moduleName && "" != moduleName && (packagePath += moduleName);
        var result = jsb.reflection.callStaticMethod(packagePath, funcName, "(Ljava/lang/String;)Ljava/lang/String;", parm);
        return result;
      };
      return AndroidAdapter;
    }();
    exports.default = AndroidAdapter;
    cc._RF.pop();
  }, {} ],
  ArmIdleState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "42b7ai1tihB/K/TGq1tH8BX", "ArmIdleState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var Events_1 = require("../Events");
    var ArmIdleState = function() {
      function ArmIdleState() {}
      ArmIdleState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      ArmIdleState.prototype.enter = function(data) {
        this.entity.outNode.active = true;
        this.entity.inNode.active = false;
        kit_1.kit.manager.Event.on(Events_1.default.GAME_STOP, this.onStop, this);
        kit_1.kit.manager.Event.on(Events_1.default.GAME_STAR, this.onStop, this);
        kit_1.kit.manager.Event.on(Events_1.default.GUID_SEND, this.onSend, this);
        return Promise.resolve();
      };
      ArmIdleState.prototype.execute = function(dt) {
        this.updateArmAngle();
        this.entity.node.angle += this.entity.rotateSpeed * dt;
      };
      ArmIdleState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.off(Events_1.default.GAME_STOP, this.onStop, this);
        kit_1.kit.manager.Event.off(Events_1.default.GAME_STAR, this.onStop, this);
        kit_1.kit.manager.Event.off(Events_1.default.GUID_SEND, this.onSend, this);
      };
      ArmIdleState.prototype.onStop = function() {
        this.entity.isGuide = !this.entity.isGuide;
        cc.log("isGuide" + this.entity.isGuide);
      };
      ArmIdleState.prototype.updateArmAngle = function() {
        if (this.entity.node.angle >= ArmIdleState.LEFT) {
          this.entity.rotateSpeed = -this.entity.rotateSpeed;
          this.entity.node.angle = ArmIdleState.LEFT;
        } else this.entity.node.angle <= ArmIdleState.RIGHT && (this.entity.rotateSpeed = Math.abs(this.entity.rotateSpeed));
      };
      ArmIdleState.prototype.onSend = function() {
        kit_1.kit.manager.Event.emit(Events_1.default.GUID_SEND);
      };
      ArmIdleState.LEFT = 70;
      ArmIdleState.RIGHT = -70;
      return ArmIdleState;
    }();
    exports.default = ArmIdleState;
    cc._RF.pop();
  }, {
    "../../../../kit/kit": "kit",
    "../Events": "Events"
  } ],
  ArmInState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c733v95GVFhbrUJBhQNzar", "ArmInState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var Events_1 = require("../Events");
    var ArmIdleState_1 = require("./ArmIdleState");
    var ArmInState = function() {
      function ArmInState() {}
      ArmInState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      ArmInState.prototype.enter = function(data) {
        this.target = data;
        this.entity.outNode.active = false;
        this.entity.inNode.active = true;
        kit_1.kit.manager.Audio.playEffect("SE_zhuashuiguo03_ytz");
        return Promise.resolve();
      };
      ArmInState.prototype.execute = function(data) {
        this.entity.armTop.y <= ArmInState.MIN_LENGTH ? this.entity.stateMachine.ChangeState(ArmIdleState_1.default) : this.entity.armTop.y -= 4.5;
      };
      ArmInState.prototype.exit = function(data) {
        this.target && this.target.parent.removeChild(this.target);
        kit_1.kit.manager.Event.emit(Events_1.default.GRAB_ACTION_COMPLETE);
        this.target && kit_1.kit.manager.Event.emit(Events_1.default.GRAB_SUCCESS);
      };
      ArmInState.MIN_LENGTH = 0;
      return ArmInState;
    }();
    exports.default = ArmInState;
    cc._RF.pop();
  }, {
    "../../../../kit/kit": "kit",
    "../Events": "Events",
    "./ArmIdleState": "ArmIdleState"
  } ],
  ArmOutState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "176862pa3pIlbCxLUbWOXlm", "ArmOutState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var Events_1 = require("../Events");
    var ArmInState_1 = require("./ArmInState");
    var ArmOutState = function() {
      function ArmOutState() {}
      ArmOutState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      ArmOutState.prototype.enter = function(data) {
        this.entity.outNode.active = true;
        this.entity.inNode.active = false;
        kit_1.kit.manager.Event.on(Events_1.default.GRAB_ACTION_ON_COLLISION, this.onCollision, this);
        kit_1.kit.manager.Audio.playEffect("SE_zhuashuiguo03_ytz");
        return Promise.resolve();
      };
      ArmOutState.prototype.execute = function(data) {
        this.entity.armTop.y >= ArmOutState.MAX_LENGTH ? this.entity.stateMachine.ChangeState(ArmInState_1.default) : this.entity.armTop.y += 4.5;
      };
      ArmOutState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.off(Events_1.default.GRAB_ACTION_ON_COLLISION, this.onCollision, this);
      };
      ArmOutState.prototype.onCollision = function(event) {
        var fruitNode = event.data.node;
        if (event.data.node.name.indexOf("banan") > -1) {
          fruitNode = fruitNode.getChildByName("bananaItem");
          fruitNode.active = true;
        }
        fruitNode.x = fruitNode.y = 0;
        fruitNode.parent = this.entity.inNode.parent;
        fruitNode.zIndex = -1;
        this.entity.stateMachine.ChangeState(ArmInState_1.default, fruitNode);
      };
      ArmOutState.MAX_LENGTH = 380;
      return ArmOutState;
    }();
    exports.default = ArmOutState;
    cc._RF.pop();
  }, {
    "../../../../kit/kit": "kit",
    "../Events": "Events",
    "./ArmInState": "ArmInState"
  } ],
  Arm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c2d19aw1RP74N8IBcrtEIG", "Arm");
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
    var kit_1 = require("../../../kit/kit");
    var ArmIdleState_1 = require("./arm/ArmIdleState");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Arm = function(_super) {
      __extends(Arm, _super);
      function Arm() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.armTop = null;
        _this.outNode = null;
        _this.inNode = null;
        _this.lineNode = null;
        _this.sid = "Arm";
        _this.rotateSpeed = 60;
        _this.isGuide = false;
        return _this;
      }
      Arm.prototype.start = function() {
        this.stateMachine = new kit_1.kit.fsm.StateManager(this);
        this.init();
      };
      Arm.prototype.init = function() {
        this.stateMachine.ChangeState(ArmIdleState_1.default);
        cc.tween(this.lineNode).repeatForever(cc.tween(this.lineNode).to(1, {
          opacity: 64
        }).to(1, {
          opacity: 200
        })).start();
      };
      Arm.prototype.update = function(dt) {
        this.isGuide || this.stateMachine.Update(dt);
      };
      __decorate([ property(cc.Node) ], Arm.prototype, "armTop", void 0);
      __decorate([ property(cc.Node) ], Arm.prototype, "outNode", void 0);
      __decorate([ property(cc.Node) ], Arm.prototype, "inNode", void 0);
      __decorate([ property(cc.Node) ], Arm.prototype, "lineNode", void 0);
      Arm = __decorate([ ccclass ], Arm);
      return Arm;
    }(cc.Component);
    exports.default = Arm;
    cc._RF.pop();
  }, {
    "../../../kit/kit": "kit",
    "./arm/ArmIdleState": "ArmIdleState"
  } ],
  AtlasLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4fcc4J3wzlK774ZrpG4f6J8", "AtlasLoader");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AtlasLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var AtlasLoader = function(_super) {
      __extends(AtlasLoader, _super);
      function AtlasLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AtlasLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      AtlasLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("AtlasLoader loadRemoteRes method not implemented.");
      };
      AtlasLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return AtlasLoader;
    }(BaseLoader_1.default);
    exports.AtlasLoader = AtlasLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  AudioLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "908c10JEh1GJ5PEhk2+D8uN", "AudioLoader");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AudioLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var AudioLoader = function(_super) {
      __extends(AudioLoader, _super);
      function AudioLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AudioLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      AudioLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("AudioLoader loadRemoteRes method not implemented.");
      };
      AudioLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return AudioLoader;
    }(BaseLoader_1.default);
    exports.AudioLoader = AudioLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  AudioManager2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed53fkvvINKfIfrH9UxBpvc", "AudioManager2");
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
        this.musicPath = "audios/";
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
        cc.log("playEffect,fxName:" + fxName);
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Util_1 = require("./Util");
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
        this.effectId = -1;
        this.audio_common = [ "record", "gameEnd", "coin_mid", "coin_large", "lets_say", "try_again", "super_job", "game_right", "game_error", "Listen_and_choose", "choose_the_correct_answer", "choose_the_correct_word" ];
      }
      AudioManager.getInstance = function() {
        null == this.instance && (this.instance = new AudioManager());
        return this.instance;
      };
      AudioManager.prototype.playMusic = function(url, callBack, isPlaying) {
        var _this = this;
        void 0 === isPlaying && (isPlaying = false);
        this._masterVolume = url == this.GAME_END ? .6 : 1;
        var path;
        path = -1 != this.audio_common.indexOf(url) ? this.COMMON_AUDIO_URL : this.AUDIO_URL;
        cc.loader.loadRes(path + url, cc.AudioClip, function(err, audio) {
          err ? console.log(err, "\u97f3\u6548\u52a0\u8f7d\u5931\u8d25===============>>") : _this.loadMusic(audio, callBack, isPlaying);
        });
      };
      AudioManager.prototype.playLoopMusic = function(url, callBack, isPlaying) {
        var _this = this;
        void 0 === isPlaying && (isPlaying = true);
        this._masterVolume = url == this.GAME_END ? .6 : 1;
        var path;
        path = -1 != this.audio_common.indexOf(url) ? this.COMMON_AUDIO_URL : this.AUDIO_URL;
        cc.loader.loadRes(path + url, cc.AudioClip, function(err, audio) {
          err ? console.log(err, "\u97f3\u6548\u52a0\u8f7d\u5931\u8d25===============>>") : _this.loadMusic(audio, callBack, isPlaying, true);
        });
      };
      AudioManager.prototype.stopMusic = function(url) {
        cc.audioEngine.stop(this.effectId);
      };
      AudioManager.prototype.loadMusic = function(audio, callBack, isPlaying, isLoop) {
        var _this = this;
        void 0 === isLoop && (isLoop = false);
        this.isPlaying = isPlaying;
        cc.audioEngine.stop(this.effectId);
        this.effectId = cc.audioEngine.play(audio, isLoop, this._masterVolume);
        isLoop || cc.audioEngine.setFinishCallback(this.effectId, function() {
          Util_1.default.stopVoiceAni();
          callBack && callBack();
          _this.isPlaying = false;
        });
      };
      return AudioManager;
    }();
    exports.default = AudioManager.getInstance();
    cc._RF.pop();
  }, {
    "./Util": "Util"
  } ],
  BaseLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "efda87mT/BL5JGZf1ub48iu", "BaseLoader");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseLoader = function() {
      function BaseLoader() {}
      BaseLoader.prototype.loadRes = function(path, options, onComplete, bundle, onProgress) {
        this.isNetRes(path) ? this.loadNetRes(path, options, onComplete) : this.isRemoteRes(path) ? this.loadRemoteRes(path, options, onComplete) : this.loadLocalRes(path, options, onProgress, onComplete, bundle);
      };
      BaseLoader.prototype.isRemoteRes = function(path) {
        return false;
      };
      BaseLoader.prototype.isNetRes = function(path) {
        if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("zybhost://")) return true;
        return false;
      };
      return BaseLoader;
    }();
    exports.default = BaseLoader;
    cc._RF.pop();
  }, {} ],
  ClickCmpt: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5ebcxkGyhJCK77WQxZ1IUy", "ClickCmpt");
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
    var ResLoader_1 = require("../framework/load/ResLoader");
    var AudioManager2_1 = require("../system/audio/AudioManager2");
    var LogSystem_1 = require("../system/log/LogSystem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ClickCmpt = function(_super) {
      __extends(ClickCmpt, _super);
      function ClickCmpt() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.clickSound = "commonRes/sound/btn_click";
        _this.bundleName = "components";
        _this.clickAudioEffect = true;
        _this.clickEvents = [];
        return _this;
      }
      ClickCmpt.prototype.onLoad = function() {
        this.clickEvents.length > 0 && this.onCilckEventHandler();
      };
      ClickCmpt.prototype.onCilckEventHandler = function() {
        var _this = this;
        this.clickEvents.forEach(function(item) {
          var targeNode = item.target;
          var tempCmpt = targeNode.getComponent(item["_componentName"]);
          _this.onClick(targeNode, tempCmpt[item.handler], tempCmpt, item.customEventData, _this.clickAudioEffect);
        });
      };
      ClickCmpt.prototype.onClick = function(node, handler, target, param, clickEffect, sound, bundleName) {
        var _this = this;
        if (!node) {
          LogSystem_1.default.warn("onClick\u53c2\u6570node\u4e0d\u80fd\u4e3a\u7a7a\uff1a" + node);
          return;
        }
        node.on(cc.Node.EventType.TOUCH_START, function(event) {
          var soundName = sound || _this.clickSound;
          var bundle = bundleName || _this.bundleName;
          clickEffect && AudioManager2_1.default.playEffect(bundle, soundName);
          handler && handler.call(target, param);
        }, target);
      };
      ClickCmpt.prototype.offClick = function(node) {
        if (!node) {
          LogSystem_1.default.warn("offClick\u53c2\u6570node\u4e0d\u80fd\u4e3a\u7a7a\uff1a" + node);
          return;
        }
        node.off(cc.Node.EventType.TOUCH_START);
      };
      ClickCmpt.prototype.preloadClickEffect = function() {
        ResLoader_1.default.loadRes(this.clickSound, cc.AudioClip, function() {}, this.bundleName);
      };
      __decorate([ property(cc.String) ], ClickCmpt.prototype, "clickSound", void 0);
      __decorate([ property(cc.String) ], ClickCmpt.prototype, "bundleName", void 0);
      __decorate([ property({
        tooltip: "\u542f\u7528\u70b9\u51fb\u53cd\u9988"
      }) ], ClickCmpt.prototype, "clickAudioEffect", void 0);
      __decorate([ property({
        type: [ cc.Component.EventHandler ],
        tooltip: "\u70b9\u51fb\u4e8b\u4ef6\u5217\u8868"
      }) ], ClickCmpt.prototype, "clickEvents", void 0);
      ClickCmpt = __decorate([ ccclass ], ClickCmpt);
      return ClickCmpt;
    }(cc.Component);
    exports.default = ClickCmpt;
    cc._RF.pop();
  }, {
    "../framework/load/ResLoader": "ResLoader",
    "../system/audio/AudioManager2": "AudioManager2",
    "../system/log/LogSystem": "LogSystem"
  } ],
  ClientModuleEnum: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01b84+mhVNDTK0cHc32v8yg", "ClientModuleEnum");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.VideoEventTransType = void 0;
    var VideoEventTransType;
    (function(VideoEventTransType) {
      VideoEventTransType[VideoEventTransType["C2M_VIDEO_PLAY_START"] = 0] = "C2M_VIDEO_PLAY_START";
      VideoEventTransType[VideoEventTransType["C2M_UPDATE_PLAY_STATUS"] = 1] = "C2M_UPDATE_PLAY_STATUS";
      VideoEventTransType[VideoEventTransType["C2M_VIDEO_PLAY_COMPLETE"] = 2] = "C2M_VIDEO_PLAY_COMPLETE";
      VideoEventTransType[VideoEventTransType["M2C_VIDEO_PLAY_START"] = 3] = "M2C_VIDEO_PLAY_START";
      VideoEventTransType[VideoEventTransType["M2C_VIDEO_PLAY_PAUSE"] = 4] = "M2C_VIDEO_PLAY_PAUSE";
      VideoEventTransType[VideoEventTransType["M2C_VIDEO_PLAY_RESUME"] = 5] = "M2C_VIDEO_PLAY_RESUME";
      VideoEventTransType[VideoEventTransType["M2C_VIDEO_PLAY_SEEKTO"] = 6] = "M2C_VIDEO_PLAY_SEEKTO";
      VideoEventTransType[VideoEventTransType["M2C_VIDEO_INIT"] = 7] = "M2C_VIDEO_INIT";
      VideoEventTransType[VideoEventTransType["M2C_VIDEO_DESTROY"] = 8] = "M2C_VIDEO_DESTROY";
    })(VideoEventTransType = exports.VideoEventTransType || (exports.VideoEventTransType = {}));
    cc._RF.pop();
  }, {} ],
  ClientModuleInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7b9f+oiThNdYw4OoxcCcxc", "ClientModuleInterface");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  ClientTipsEnum: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d54a1HHjPFI/IKUfCWRCKzk", "ClientTipsEnum");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TIPS_TYPE = void 0;
    var TIPS_TYPE;
    (function(TIPS_TYPE) {
      TIPS_TYPE["NOT_WIFI"] = "NOT_WIFI";
      TIPS_TYPE["NO_NETWORK"] = "NO_NETWORK";
      TIPS_TYPE["DOWNLOAD_FAILED"] = "DOWNLOAD_FAILED";
      TIPS_TYPE["REQUEST_FAILED"] = "REQUEST_FAILED";
      TIPS_TYPE["PERMISS_ALERT"] = "PERMISS_ALERT";
    })(TIPS_TYPE = exports.TIPS_TYPE || (exports.TIPS_TYPE = {}));
    cc._RF.pop();
  }, {} ],
  ConfirmPopup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df8441Uw3VNIK3Cg7ITdmVz", "ConfirmPopup");
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
    var PopupBase_1 = require("./PopupBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ConfirmPopup = function(_super) {
      __extends(ConfirmPopup, _super);
      function ConfirmPopup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.contentLabel = null;
        _this.confirmBtn = null;
        return _this;
      }
      ConfirmPopup.prototype.onLoad = function() {
        this.registerEvent();
      };
      ConfirmPopup.prototype.onDestroy = function() {
        this.unregisterEvent();
      };
      ConfirmPopup.prototype.registerEvent = function() {
        this.confirmBtn.on(cc.Node.EventType.TOUCH_END, this.onConfirmBtnClick, this);
      };
      ConfirmPopup.prototype.unregisterEvent = function() {
        this.confirmBtn.targetOff(this);
      };
      ConfirmPopup.prototype.init = function() {};
      ConfirmPopup.prototype.updateDisplay = function(options) {
        this.titleLabel.string = options.title;
        this.contentLabel.string = options.content;
      };
      ConfirmPopup.prototype.onConfirmBtnClick = function() {
        this.options.confirmCallback && this.options.confirmCallback();
        this.hide();
      };
      __decorate([ property(cc.Label) ], ConfirmPopup.prototype, "titleLabel", void 0);
      __decorate([ property(cc.Label) ], ConfirmPopup.prototype, "contentLabel", void 0);
      __decorate([ property(cc.Node) ], ConfirmPopup.prototype, "confirmBtn", void 0);
      ConfirmPopup = __decorate([ ccclass ], ConfirmPopup);
      return ConfirmPopup;
    }(PopupBase_1.default);
    exports.default = ConfirmPopup;
    cc._RF.pop();
  }, {
    "./PopupBase": "PopupBase"
  } ],
  DebuggerAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0d3edMmr2VI+bZ2FRJ2+Jhj", "DebuggerAdapter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DebuggerAdapter = function() {
      function DebuggerAdapter() {
        this.isPrintLog = false;
      }
      DebuggerAdapter.prototype.onGameExit = function() {};
      DebuggerAdapter.prototype.onGameReady = function() {};
      DebuggerAdapter.prototype.toast = function(message) {};
      DebuggerAdapter.prototype.callFunction = function(funcName) {};
      DebuggerAdapter.prototype.callFunctionResult = function(funcName, parm, moduleName) {
        throw new Error("Method not implemented.");
      };
      return DebuggerAdapter;
    }();
    exports.default = DebuggerAdapter;
    cc._RF.pop();
  }, {} ],
  DefaultLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34cbfj6gaFCO4cX+zHKG5Dl", "DefaultLoader");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DefaultLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var DefaultLoader = function(_super) {
      __extends(DefaultLoader, _super);
      function DefaultLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      DefaultLoader.prototype.loadNetRes = function(path, options, callback) {
        cc.assetManager.loadRemote(path, options, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      DefaultLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("AtlasLoader loadRemoteRes method not implemented.");
      };
      DefaultLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return DefaultLoader;
    }(BaseLoader_1.default);
    exports.DefaultLoader = DefaultLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  DelayUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "357e4kbwnFNEbynHn6BNZDn", "DelayUtils");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Delay = void 0;
    var Delay = function() {
      function Delay(k, v) {
        this.key = k;
        this.time = v;
      }
      return Delay;
    }();
    exports.Delay = Delay;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DelayUtils = function() {
      function DelayUtils() {}
      DelayUtils_1 = DelayUtils;
      DelayUtils.CheckDelay = function(key) {
        var delay = DelayUtils_1.delayMap[key];
        if (!delay) return true;
        var tick = new Date().getTime();
        var time = tick - delay.current;
        if (time < delay.time) return true;
        delay.current = tick;
        return false;
      };
      var DelayUtils_1;
      DelayUtils.delayMap = {
        button: new Delay("button", 1e3)
      };
      DelayUtils = DelayUtils_1 = __decorate([ ccclass ], DelayUtils);
      return DelayUtils;
    }();
    exports.default = DelayUtils;
    cc._RF.pop();
  }, {} ],
  EntityManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e9b48yqoqNCfrjY0t+ndgcv", "EntityManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EntityManager = function() {
      function EntityManager() {
        this._length = 0;
        this._entityMap = {};
      }
      Object.defineProperty(EntityManager, "instance", {
        get: function() {
          null == this._instance && (this._instance = new EntityManager());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      EntityManager.prototype.release = function() {
        this._entityMap = null;
        EntityManager._instance = null;
      };
      EntityManager.prototype.registerEntity = function(newEntity) {
        this._entityMap[newEntity.sid] = newEntity;
      };
      EntityManager.prototype.getEntityFromID = function(id) {
        return this._entityMap[id];
      };
      EntityManager.prototype.removeEntity = function(entity) {
        var key;
        for (key in this._entityMap) this._entityMap[key] == entity && delete this._entityMap[key];
      };
      EntityManager.prototype.getAllEntity = function() {
        return this._entityMap;
      };
      EntityManager.prototype.getAvailableEntity = function(clazz) {
        var key;
        var availableEntity;
        for (key in this._entityMap) {
          var entity = this._entityMap[key];
          if (entity instanceof clazz && null != entity) {
            availableEntity = entity;
            return availableEntity;
          }
        }
        availableEntity = this.createEntity(clazz);
        return availableEntity;
      };
      EntityManager.prototype.createEntity = function(clazz) {
        var entity = new clazz();
        this.registerEntity(entity);
        this._length++;
        return entity;
      };
      Object.defineProperty(EntityManager.prototype, "length", {
        get: function() {
          return this._length;
        },
        enumerable: false,
        configurable: true
      });
      return EntityManager;
    }();
    exports.default = EntityManager;
    cc._RF.pop();
  }, {} ],
  ErrorSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed2d8hFDdFKuburiLayjeQy", "ErrorSystem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ErrorSendInterval = void 0;
    var ErrorSendInterval = function() {
      function ErrorSendInterval() {}
      ErrorSendInterval.RATE_DEFAULT = 5;
      ErrorSendInterval.RATE_LOW = 10;
      return ErrorSendInterval;
    }();
    exports.ErrorSendInterval = ErrorSendInterval;
    var ErrorSystem = function() {
      function ErrorSystem() {
        this.errorMap = {};
      }
      Object.defineProperty(ErrorSystem, "instance", {
        get: function() {
          null == ErrorSystem._instance && (ErrorSystem._instance = new ErrorSystem());
          return ErrorSystem._instance;
        },
        enumerable: false,
        configurable: true
      });
      ErrorSystem.prototype.init = function(isNative, outAdapter) {
        var _this = this;
        this.outAdapter = outAdapter;
        return new Promise(function(res, rea) {
          if (isNative) window.__errorHandler = function(errorMessage, file, line, message, error) {
            var exception = {};
            exception.errorMessage = errorMessage;
            exception.file = file;
            exception.line = line;
            exception.message = message;
            exception.error = error;
            window.exception != JSON.stringify(exception) && (window.exception = JSON.stringify(exception));
            _this.outAdapter(exception);
          }; else {
            window.addEventListener("unhandledrejection", function(event) {
              var message = String(event.reason.stack);
              _this.outAdapter({
                unhandledrejection: String(event.reason.stack)
              });
            });
            window.onerror = function(errorMessage, file, line, message, error) {
              var exception = {};
              exception.errorMessage = errorMessage;
              exception.file = file;
              exception.line = line;
              exception.message = message;
              exception.error = error;
              window.exception != JSON.stringify(exception) && (window.exception = JSON.stringify(exception));
              _this.outAdapter(exception);
            };
          }
          res();
        });
      };
      ErrorSystem.prototype.release = function() {
        this.outAdapter = null;
        this.errorMap = null;
        ErrorSystem._instance = null;
      };
      return ErrorSystem;
    }();
    exports.default = ErrorSystem;
    cc._RF.pop();
  }, {} ],
  EventEmitter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fcb16j+af5F1od10k1+eu0X", "EventEmitter");
    "use strict";
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EventEmitter = void 0;
    var EventEmitter = function() {
      function EventEmitter() {}
      EventEmitter.prototype.getListeners = function(event) {
        var events = this._getEvents();
        var response;
        var key;
        if (event instanceof RegExp) {
          response = {};
          for (key in events) events.hasOwnProperty(key) && event.test(key) && (response[key] = events[key]);
        } else response = events[event] || (events[event] = []);
        return response;
      };
      EventEmitter.prototype.addListener = function(event, listener, target) {
        void 0 === target && (target = null);
        if (!this.isValidListener(listener)) throw new TypeError("listener must be a function");
        var listeners = this.getListenersAsObject(event);
        var listenerIsWrapped = "object" === typeof listener;
        var key;
        for (key in listeners) listeners.hasOwnProperty(key) && -1 === this.indexOfListener(listeners[key], listener, target) && listeners[key].push(listenerIsWrapped ? listener : {
          listener: listener,
          once: false,
          target: target
        });
        return this;
      };
      EventEmitter.prototype.on = function(event, listener, target) {
        return this.addListener(event, listener, target);
      };
      EventEmitter.prototype.flattenListeners = function(listeners) {
        var flatListeners = [];
        var i;
        for (i = 0; i < listeners.length; i += 1) flatListeners.push(listeners[i].listener);
        return flatListeners;
      };
      EventEmitter.prototype.getListenersAsObject = function(event) {
        var listeners = this.getListeners(event);
        var response;
        if (listeners instanceof Array) {
          response = {};
          response[event] = listeners;
        }
        return response || listeners;
      };
      EventEmitter.prototype.addOnceListener = function(event, listener) {
        return this.addListener(event, {
          listener: listener,
          once: true
        });
      };
      EventEmitter.prototype.once = function(event, listener) {
        return this.addOnceListener(event, listener);
      };
      EventEmitter.prototype.defineEvent = function(event) {
        this.getListeners(event);
        return this;
      };
      EventEmitter.prototype.defineEvents = function(events) {
        for (var i = 0; i < events.length; i += 1) this.defineEvent(events[i]);
        return this;
      };
      EventEmitter.prototype.removeListener = function(event, listener, target) {
        void 0 === target && (target = null);
        var listeners = this.getListenersAsObject(event);
        var index;
        var key;
        for (key in listeners) if (listeners.hasOwnProperty(key)) {
          index = this.indexOfListener(listeners[key], listener, target);
          -1 !== index && listeners[key].splice(index, 1);
        }
        return this;
      };
      EventEmitter.prototype.off = function(event, listener, target) {
        void 0 === target && (target = null);
        return this.removeListener(event, listener, target);
      };
      EventEmitter.prototype.addListeners = function(event, listeners) {
        return this.manipulateListeners(false, event, listeners);
      };
      EventEmitter.prototype.removeListeners = function(event, listeners) {
        return this.manipulateListeners(true, event, listeners);
      };
      EventEmitter.prototype.manipulateListeners = function(remove, event, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;
        if ("object" !== typeof event || event instanceof RegExp) {
          i = listeners.length;
          while (i--) single.call(this, event, listeners[i]);
        } else for (i in event) event.hasOwnProperty(i) && (value = event[i]) && ("function" === typeof value ? single.call(this, i, value) : multiple.call(this, i, value));
        return this;
      };
      EventEmitter.prototype.removeEvent = function(event) {
        var type = typeof event;
        var events = this._getEvents();
        var key;
        if ("string" === type) delete events[event]; else if (event instanceof RegExp) for (key in events) events.hasOwnProperty(key) && event.test(key) && delete events[key]; else delete this._events;
        return this;
      };
      EventEmitter.prototype.removeAllListeners = function(event) {
        return this.removeEvent(event);
      };
      EventEmitter.prototype.emitEvent = function(event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var listenersMap = this.getListenersAsObject(event);
        var listeners;
        var listener;
        var i;
        var key;
        var response;
        for (key in listenersMap) if (listenersMap.hasOwnProperty(key)) {
          listeners = listenersMap[key].slice(0);
          for (i = 0; i < listeners.length; i++) {
            listener = listeners[i];
            true === listener.once && this.removeListener(event, listener.listener);
            response = (_a = listener.listener).apply.apply(_a, __spreadArrays([ listener.target || this ], args || []));
            response === this.onceReturnValue && this.removeListener(event, listener.listener);
          }
        }
        return this;
      };
      EventEmitter.prototype.trigger = function(event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        return this.emitEvent.apply(this, __spreadArrays([ event ], args));
      };
      EventEmitter.prototype.emit = function(event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        return this.emitEvent(event, args);
      };
      Object.defineProperty(EventEmitter.prototype, "onceReturnValue", {
        get: function() {
          return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
        },
        set: function(value) {
          this._onceReturnValue = value;
        },
        enumerable: false,
        configurable: true
      });
      EventEmitter.prototype._getEvents = function() {
        return this._events || (this._events = {});
      };
      EventEmitter.prototype.isValidListener = function(listener) {
        return "function" === typeof listener || listener instanceof RegExp || !(!listener || "object" !== typeof listener) && this.isValidListener(listener);
      };
      EventEmitter.prototype.indexOfListener = function(listeners, listener, target) {
        var i = listeners.length;
        while (i--) if (listeners[i].listener === listener && target == listeners[i].target) return i;
        return -1;
      };
      return EventEmitter;
    }();
    exports.EventEmitter = EventEmitter;
    cc._RF.pop();
  }, {} ],
  EventSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64abb7CYSFATINAgpsp2h8R", "EventSystem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventEmitter_1 = require("./EventEmitter");
    var EventSystem = function() {
      function EventSystem() {}
      EventSystem.on = function(event, callback, target) {
        this._emitter.on(event, callback, target);
      };
      EventSystem.once = function(event, callback, target) {
        this._emitter.once(event, callback);
      };
      EventSystem.off = function(event, callback, target) {
        this._emitter.off(event, callback, target);
      };
      EventSystem.emit = function(event, eventData) {
        var params = {};
        params.event = event;
        params.data = eventData;
        this._emitter.emit(event, params);
      };
      EventSystem.release = function() {
        this._emitter.removeEvent();
      };
      EventSystem._emitter = new EventEmitter_1.EventEmitter();
      return EventSystem;
    }();
    exports.default = EventSystem;
    cc._RF.pop();
  }, {
    "./EventEmitter": "EventEmitter"
  } ],
  Events: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7facevzyXtMSozZm/AjIP08", "Events");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Events = function() {
      function Events() {}
      Events.GRAB_ACTION_COMPLETE = "grabActionComplete";
      Events.GRAB_ACTION_ON_COLLISION = "grabActionOnCollision";
      Events.FRUIT_DOWN_COMPLETE = "fruitDownComplete";
      Events.GRAB_SUCCESS = "grabSuccess";
      Events.GAME_COMPLETE = "gameComplete";
      Events.GAME_GUID_COMPLETE = "gameGuidComplete";
      Events.GAME_LEARN_COMPLETE = "gameLearnComplete";
      Events.GAME_SCORE = "gameScore";
      Events.GAME_STOP = "gameStop";
      Events.GAME_STAR = "gameStar";
      Events.GAME_STAGE_COMPLETE = "gameStageComplete";
      Events.GUID_SEND = "guideSend";
      Events.SCENE_CHANGE = "sceneChange";
      return Events;
    }();
    exports.default = Events;
    cc._RF.pop();
  }, {} ],
  FruitGameMain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e42d94d+YVAO4Xksk3HIoK5", "FruitGameMain");
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
        _this.gameNode = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        window.webframe.Notify.listen("open_vedio_Completed", this.gameStart, this, false);
      };
      NewClass.prototype.gameStart = function() {
        this.gameNode.active = true;
        this.gameNode.getComponent("GrabFruit").init();
      };
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Node) ], NewClass.prototype, "gameNode", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
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
          nodePath: "grabFruit"
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
  GrabFruit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a4e1sKYN9ASoyZtTklftSG", "GrabFruit");
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
    var kit_1 = require("../../../kit/kit");
    var Point_1 = require("../../../Scripts/common/Point");
    var WordTool_1 = require("../../../Tools/Word/scripts/WordTool");
    var Level1Sate_1 = require("./level/Level1Sate");
    var LevelGloabelState_1 = require("./level/LevelGloabelState");
    var Tigo_1 = require("./Tigo");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GrabFruit = function(_super) {
      __extends(GrabFruit, _super);
      function GrabFruit() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bgsNode = null;
        _this.monsterNode = null;
        _this.birdNode = null;
        _this.tigo = null;
        _this.tigoPrefab = null;
        _this.word = null;
        _this.isPlaying = false;
        return _this;
      }
      GrabFruit.prototype.onLoad = function() {
        return __awaiter(this, void 0, void 0, function() {
          var manager;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Point_1.default.instance.init("\u6293\u6c34\u679c", 3);
              Point_1.default.instance.gameStart();
              this.stateMachine = new kit_1.kit.fsm.StateManager(this);
              this.stateMachine.ChangeState(Level1Sate_1.default);
              this.stateMachine.AddGlobalState(LevelGloabelState_1.default);
              this.camera = this.node.parent.getChildByName("Main Camera").getComponent(cc.Camera);
              manager = cc.director.getCollisionManager();
              manager.enabled = true;
              return [ 4, kit_1.kit.system.timer.init() ];

             case 1:
              _a.sent();
              return [ 4, kit_1.kit.manager.Audio.init() ];

             case 2:
              _a.sent();
              cc.log("cc.sys.isMobile", cc.sys.isMobile);
              if (cc.sys.isMobile) {
                cc.log("\u5f00\u59cb\u7b49\u5f857\u79d2");
                this.scheduleOnce(function() {
                  cc.log("\u7b49\u5f857\u79d2");
                  _this.init();
                }, 7);
              } else this.init();
              return [ 2 ];
            }
          });
        });
      };
      GrabFruit.prototype.onDestroy = function() {
        kit_1.kit.system.timer.release();
        this.stateMachine.release();
      };
      GrabFruit.prototype.init = function() {
        if (!this.isPlaying) {
          cc.log("bgm");
          this.isPlaying = true;
          kit_1.kit.manager.Audio.playMusic("bgm");
          this.tigo.getComponent(Tigo_1.default).init();
        }
      };
      __decorate([ property(cc.Node) ], GrabFruit.prototype, "bgsNode", void 0);
      __decorate([ property(cc.Node) ], GrabFruit.prototype, "monsterNode", void 0);
      __decorate([ property(cc.Node) ], GrabFruit.prototype, "birdNode", void 0);
      __decorate([ property(cc.Node) ], GrabFruit.prototype, "tigo", void 0);
      __decorate([ property(cc.Prefab) ], GrabFruit.prototype, "tigoPrefab", void 0);
      __decorate([ property(WordTool_1.default) ], GrabFruit.prototype, "word", void 0);
      GrabFruit = __decorate([ ccclass ], GrabFruit);
      return GrabFruit;
    }(cc.Component);
    exports.default = GrabFruit;
    cc._RF.pop();
  }, {
    "../../../Scripts/common/Point": "Point",
    "../../../Tools/Word/scripts/WordTool": "WordTool",
    "../../../kit/kit": "kit",
    "./Tigo": "Tigo",
    "./level/Level1Sate": "Level1Sate",
    "./level/LevelGloabelState": "LevelGloabelState"
  } ],
  Hand: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "88bf9bnmwZADaF1FkvUitBp", "Hand");
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
    var kit_1 = require("../../../../kit/kit");
    var Events_1 = require("../Events");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Hand = function(_super) {
      __extends(Hand, _super);
      function Hand() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Hand.prototype.onCollisionEnter = function(other, self) {
        kit_1.kit.manager.Event.emit(Events_1.default.GRAB_ACTION_ON_COLLISION, other);
      };
      Hand = __decorate([ ccclass ], Hand);
      return Hand;
    }(cc.Component);
    exports.default = Hand;
    cc._RF.pop();
  }, {
    "../../../../kit/kit": "kit",
    "../Events": "Events"
  } ],
  HttpState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "825b0S2CctNM42S6tzP0sXF", "HttpState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HttpStateMap = void 0;
    var HttpStateMap = function() {
      function HttpStateMap() {
        var _this = this;
        var line = HttpStateMap.map.split("\n");
        this.data = {};
        line.forEach(function(element) {
          var temp = element.split("\t");
          _this.data[temp[0]] = temp[1] + "\t" + temp[2];
        });
      }
      Object.defineProperty(HttpStateMap, "instance", {
        get: function() {
          null == HttpStateMap._instance && (HttpStateMap._instance = new HttpStateMap());
          return HttpStateMap._instance;
        },
        enumerable: false,
        configurable: true
      });
      HttpStateMap.prototype.getErrorInfoById = function(id) {
        return this.data[id];
      };
      HttpStateMap.map = '100\tContinue\t\u7ee7\u7eed\u3002\u5ba2\u6237\u7aef\u5e94\u7ee7\u7eed\u5176\u8bf7\u6c42\n101\tSwitching Protocols\t\u5207\u6362\u534f\u8bae\u3002\u670d\u52a1\u5668\u6839\u636e\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u5207\u6362\u534f\u8bae\u3002\u53ea\u80fd\u5207\u6362\u5230\u66f4\u9ad8\u7ea7\u7684\u534f\u8bae\uff0c\u4f8b\u5982\uff0c\u5207\u6362\u5230HTTP\u7684\u65b0\u7248\u672c\u534f\u8bae\n0\terror\t\u8be6\u89c1\uff1ahttps://codeday.me/bug/20170705/34070.html\n200\tOK\t\u8bf7\u6c42\u6210\u529f\u3002\u4e00\u822c\u7528\u4e8eGET\u4e0ePOST\u8bf7\u6c42\n201\tCreated\t\u5df2\u521b\u5efa\u3002\u6210\u529f\u8bf7\u6c42\u5e76\u521b\u5efa\u4e86\u65b0\u7684\u8d44\u6e90\n202\tAccepted\t\u5df2\u63a5\u53d7\u3002\u5df2\u7ecf\u63a5\u53d7\u8bf7\u6c42\uff0c\u4f46\u672a\u5904\u7406\u5b8c\u6210\n203\tNon-Authoritative Information\t\u975e\u6388\u6743\u4fe1\u606f\u3002\u8bf7\u6c42\u6210\u529f\u3002\u4f46\u8fd4\u56de\u7684meta\u4fe1\u606f\u4e0d\u5728\u539f\u59cb\u7684\u670d\u52a1\u5668\uff0c\u800c\u662f\u4e00\u4e2a\u526f\u672c\n204\tNo Content\t\u65e0\u5185\u5bb9\u3002\u670d\u52a1\u5668\u6210\u529f\u5904\u7406\uff0c\u4f46\u672a\u8fd4\u56de\u5185\u5bb9\u3002\u5728\u672a\u66f4\u65b0\u7f51\u9875\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u786e\u4fdd\u6d4f\u89c8\u5668\u7ee7\u7eed\u663e\u793a\u5f53\u524d\u6587\u6863\n205\tReset Content\t\u91cd\u7f6e\u5185\u5bb9\u3002\u670d\u52a1\u5668\u5904\u7406\u6210\u529f\uff0c\u7528\u6237\u7ec8\u7aef\uff08\u4f8b\u5982\uff1a\u6d4f\u89c8\u5668\uff09\u5e94\u91cd\u7f6e\u6587\u6863\u89c6\u56fe\u3002\u53ef\u901a\u8fc7\u6b64\u8fd4\u56de\u7801\u6e05\u9664\u6d4f\u89c8\u5668\u7684\u8868\u5355\u57df\n206\tPartial Content\t\u90e8\u5206\u5185\u5bb9\u3002\u670d\u52a1\u5668\u6210\u529f\u5904\u7406\u4e86\u90e8\u5206GET\u8bf7\u6c42\n300\tMultiple Choices\t\u591a\u79cd\u9009\u62e9\u3002\u8bf7\u6c42\u7684\u8d44\u6e90\u53ef\u5305\u62ec\u591a\u4e2a\u4f4d\u7f6e\uff0c\u76f8\u5e94\u53ef\u8fd4\u56de\u4e00\u4e2a\u8d44\u6e90\u7279\u5f81\u4e0e\u5730\u5740\u7684\u5217\u8868\u7528\u4e8e\u7528\u6237\u7ec8\u7aef\uff08\u4f8b\u5982\uff1a\u6d4f\u89c8\u5668\uff09\u9009\u62e9\n301\tMoved Permanently\t\u6c38\u4e45\u79fb\u52a8\u3002\u8bf7\u6c42\u7684\u8d44\u6e90\u5df2\u88ab\u6c38\u4e45\u7684\u79fb\u52a8\u5230\u65b0URI\uff0c\u8fd4\u56de\u4fe1\u606f\u4f1a\u5305\u62ec\u65b0\u7684URI\uff0c\u6d4f\u89c8\u5668\u4f1a\u81ea\u52a8\u5b9a\u5411\u5230\u65b0URI\u3002\u4eca\u540e\u4efb\u4f55\u65b0\u7684\u8bf7\u6c42\u90fd\u5e94\u4f7f\u7528\u65b0\u7684URI\u4ee3\u66ff\n302\tFound\t\u4e34\u65f6\u79fb\u52a8\u3002\u4e0e301\u7c7b\u4f3c\u3002\u4f46\u8d44\u6e90\u53ea\u662f\u4e34\u65f6\u88ab\u79fb\u52a8\u3002\u5ba2\u6237\u7aef\u5e94\u7ee7\u7eed\u4f7f\u7528\u539f\u6709URI\n303\tSee Other\t\u67e5\u770b\u5176\u5b83\u5730\u5740\u3002\u4e0e301\u7c7b\u4f3c\u3002\u4f7f\u7528GET\u548cPOST\u8bf7\u6c42\u67e5\u770b\n304\tNot Modified\t\u672a\u4fee\u6539\u3002\u6240\u8bf7\u6c42\u7684\u8d44\u6e90\u672a\u4fee\u6539\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u6b64\u72b6\u6001\u7801\u65f6\uff0c\u4e0d\u4f1a\u8fd4\u56de\u4efb\u4f55\u8d44\u6e90\u3002\u5ba2\u6237\u7aef\u901a\u5e38\u4f1a\u7f13\u5b58\u8bbf\u95ee\u8fc7\u7684\u8d44\u6e90\uff0c\u901a\u8fc7\u63d0\u4f9b\u4e00\u4e2a\u5934\u4fe1\u606f\u6307\u51fa\u5ba2\u6237\u7aef\u5e0c\u671b\u53ea\u8fd4\u56de\u5728\u6307\u5b9a\u65e5\u671f\u4e4b\u540e\u4fee\u6539\u7684\u8d44\u6e90\n305\tUse Proxy\t\u4f7f\u7528\u4ee3\u7406\u3002\u6240\u8bf7\u6c42\u7684\u8d44\u6e90\u5fc5\u987b\u901a\u8fc7\u4ee3\u7406\u8bbf\u95ee\n306\tUnused\t\u5df2\u7ecf\u88ab\u5e9f\u5f03\u7684HTTP\u72b6\u6001\u7801\n307\tTemporary Redirect\t\u4e34\u65f6\u91cd\u5b9a\u5411\u3002\u4e0e302\u7c7b\u4f3c\u3002\u4f7f\u7528GET\u8bf7\u6c42\u91cd\u5b9a\u5411\n400\tBad Request\t\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u8bed\u6cd5\u9519\u8bef\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u7406\u89e3\n401\tUnauthorized\t\u8bf7\u6c42\u8981\u6c42\u7528\u6237\u7684\u8eab\u4efd\u8ba4\u8bc1\n402\tPayment Required\t\u4fdd\u7559\uff0c\u5c06\u6765\u4f7f\u7528\n403\tForbidden\t\u670d\u52a1\u5668\u7406\u89e3\u8bf7\u6c42\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\uff0c\u4f46\u662f\u62d2\u7edd\u6267\u884c\u6b64\u8bf7\u6c42\n404\tNot Found\t\u670d\u52a1\u5668\u65e0\u6cd5\u6839\u636e\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u627e\u5230\u8d44\u6e90\uff08\u7f51\u9875\uff09\u3002\u901a\u8fc7\u6b64\u4ee3\u7801\uff0c\u7f51\u7ad9\u8bbe\u8ba1\u4eba\u5458\u53ef\u8bbe\u7f6e"\u60a8\u6240\u8bf7\u6c42\u7684\u8d44\u6e90\u65e0\u6cd5\u627e\u5230"\u7684\u4e2a\u6027\u9875\u9762\n405\tMethod Not Allowed\t\u5ba2\u6237\u7aef\u8bf7\u6c42\u4e2d\u7684\u65b9\u6cd5\u88ab\u7981\u6b62\n406\tNot Acceptable\t\u670d\u52a1\u5668\u65e0\u6cd5\u6839\u636e\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u5185\u5bb9\u7279\u6027\u5b8c\u6210\u8bf7\u6c42\n407\tProxy Authentication Required\t\u8bf7\u6c42\u8981\u6c42\u4ee3\u7406\u7684\u8eab\u4efd\u8ba4\u8bc1\uff0c\u4e0e401\u7c7b\u4f3c\uff0c\u4f46\u8bf7\u6c42\u8005\u5e94\u5f53\u4f7f\u7528\u4ee3\u7406\u8fdb\u884c\u6388\u6743\n408\tRequest Time-out\t\u670d\u52a1\u5668\u7b49\u5f85\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u8bf7\u6c42\u65f6\u95f4\u8fc7\u957f\uff0c\u8d85\u65f6\n409\tConflict\t\u670d\u52a1\u5668\u5b8c\u6210\u5ba2\u6237\u7aef\u7684PUT\u8bf7\u6c42\u662f\u53ef\u80fd\u8fd4\u56de\u6b64\u4ee3\u7801\uff0c\u670d\u52a1\u5668\u5904\u7406\u8bf7\u6c42\u65f6\u53d1\u751f\u4e86\u51b2\u7a81\n410\tGone\t\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u8d44\u6e90\u5df2\u7ecf\u4e0d\u5b58\u5728\u3002410\u4e0d\u540c\u4e8e404\uff0c\u5982\u679c\u8d44\u6e90\u4ee5\u524d\u6709\u73b0\u5728\u88ab\u6c38\u4e45\u5220\u9664\u4e86\u53ef\u4f7f\u7528410\u4ee3\u7801\uff0c\u7f51\u7ad9\u8bbe\u8ba1\u4eba\u5458\u53ef\u901a\u8fc7301\u4ee3\u7801\u6307\u5b9a\u8d44\u6e90\u7684\u65b0\u4f4d\u7f6e\n411\tLength Required\t\u670d\u52a1\u5668\u65e0\u6cd5\u5904\u7406\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u4e0d\u5e26Content-Length\u7684\u8bf7\u6c42\u4fe1\u606f\n412\tPrecondition Failed\t\u5ba2\u6237\u7aef\u8bf7\u6c42\u4fe1\u606f\u7684\u5148\u51b3\u6761\u4ef6\u9519\u8bef\n413\tRequest Entity Too Large\t\u7531\u4e8e\u8bf7\u6c42\u7684\u5b9e\u4f53\u8fc7\u5927\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u5904\u7406\uff0c\u56e0\u6b64\u62d2\u7edd\u8bf7\u6c42\u3002\u4e3a\u9632\u6b62\u5ba2\u6237\u7aef\u7684\u8fde\u7eed\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u53ef\u80fd\u4f1a\u5173\u95ed\u8fde\u63a5\u3002\u5982\u679c\u53ea\u662f\u670d\u52a1\u5668\u6682\u65f6\u65e0\u6cd5\u5904\u7406\uff0c\u5219\u4f1a\u5305\u542b\u4e00\u4e2aRetry-After\u7684\u54cd\u5e94\u4fe1\u606f\n414\tRequest-URI Too Large\t\u8bf7\u6c42\u7684URI\u8fc7\u957f\uff08URI\u901a\u5e38\u4e3a\u7f51\u5740\uff09\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u5904\u7406\n415\tUnsupported Media Type\t\u670d\u52a1\u5668\u65e0\u6cd5\u5904\u7406\u8bf7\u6c42\u9644\u5e26\u7684\u5a92\u4f53\u683c\u5f0f\n416\tRequested range not satisfiable\t\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u8303\u56f4\u65e0\u6548\n417\tExpectation Failed\t\u670d\u52a1\u5668\u65e0\u6cd5\u6ee1\u8db3Expect\u7684\u8bf7\u6c42\u5934\u4fe1\u606f\n500\tInternal Server Error\t\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef\uff0c\u65e0\u6cd5\u5b8c\u6210\u8bf7\u6c42\n501\tNot Implemented\t\u670d\u52a1\u5668\u4e0d\u652f\u6301\u8bf7\u6c42\u7684\u529f\u80fd\uff0c\u65e0\u6cd5\u5b8c\u6210\u8bf7\u6c42\n502\tBad Gateway\t\u5145\u5f53\u7f51\u5173\u6216\u4ee3\u7406\u7684\u670d\u52a1\u5668\uff0c\u4ece\u8fdc\u7aef\u670d\u52a1\u5668\u63a5\u6536\u5230\u4e86\u4e00\u4e2a\u65e0\u6548\u7684\u8bf7\u6c42\n503\tService Unavailable\t\u7531\u4e8e\u8d85\u8f7d\u6216\u7cfb\u7edf\u7ef4\u62a4\uff0c\u670d\u52a1\u5668\u6682\u65f6\u7684\u65e0\u6cd5\u5904\u7406\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u3002\u5ef6\u65f6\u7684\u957f\u5ea6\u53ef\u5305\u542b\u5728\u670d\u52a1\u5668\u7684Retry-After\u5934\u4fe1\u606f\u4e2d\n504\tGateway Time-out\t\u5145\u5f53\u7f51\u5173\u6216\u4ee3\u7406\u7684\u670d\u52a1\u5668\uff0c\u672a\u53ca\u65f6\u4ece\u8fdc\u7aef\u670d\u52a1\u5668\u83b7\u53d6\u8bf7\u6c42\n505\tHTTP Version not supported\t\u670d\u52a1\u5668\u4e0d\u652f\u6301\u8bf7\u6c42\u7684HTTP\u534f\u8bae\u7684\u7248\u672c\uff0c\u65e0\u6cd5\u5b8c\u6210\u5904\u7406';
      return HttpStateMap;
    }();
    exports.HttpStateMap = HttpStateMap;
    cc._RF.pop();
  }, {} ],
  HttpSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b45c4/CmzdLY7nMmqfE1Pco", "HttpSystem");
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
    var Http_1 = require("./Http");
    var HttpSystem = function() {
      function HttpSystem() {}
      Object.defineProperty(HttpSystem, "instance", {
        get: function() {
          null == HttpSystem._instance && (HttpSystem._instance = new HttpSystem());
          return HttpSystem._instance;
        },
        enumerable: false,
        configurable: true
      });
      HttpSystem.prototype.init = function(outAdapter) {
        return __awaiter(this, void 0, Promise, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(res) {
              _this.outAdapter = outAdapter;
              res();
            }) ];
          });
        });
      };
      HttpSystem.prototype.release = function() {
        this.outAdapter = null;
        HttpSystem._instance = null;
      };
      HttpSystem.prototype.httpGet = function(url, params, header) {
        var _this = this;
        console.log("httpget:url = " + url);
        return new Promise(function(resolve, reject) {
          var headerJson = {
            "Content-Type": "application/json; charset=utf-8"
          };
          if (header && "" != header) {
            var json = JSON.parse(header);
            for (var key in json) headerJson[key] = json[key];
          }
          var xhr = new Http_1.Http();
          xhr.onComplete(resolve);
          xhr.onError(function(error, errInfo, response) {
            _this.outAdapter && _this.outAdapter("\u7f51\u7edc\u9519\u8bef " + error + "," + url, errInfo, response);
            reject();
          });
          xhr.openGet(Http_1.Http.getUrl(url, params));
          xhr.setRequestHeader(headerJson);
          xhr.send();
        }).catch(function(reason) {
          _this.outAdapter && _this.outAdapter(reason && reason.message || "\u7f51\u7edc\u9519\u8bef" + url);
        });
      };
      HttpSystem.prototype.httpPost = function(url, body, params, header) {
        var _this = this;
        console.log("httpPost:url = " + Http_1.Http.getUrl(url, params));
        return new Promise(function(resolve, reject) {
          var headerJson = {
            "Content-Type": "application/json; charset=utf-8"
          };
          if (header && "" != header) {
            var json = JSON.parse(header);
            for (var key in json) headerJson[key] = json[key];
          }
          var xhr = new Http_1.Http();
          xhr.onComplete(resolve);
          xhr.onError(function(error, errInfo, response) {
            _this.outAdapter && _this.outAdapter("\u7f51\u7edc\u9519\u8bef " + error + "," + url, errInfo, response);
            reject();
          });
          xhr.openPost(Http_1.Http.getUrl(url, params));
          xhr.setRequestHeader(headerJson);
          xhr.send(body);
        }).catch(function(reason) {
          _this.outAdapter && _this.outAdapter(reason && reason.message || "\u7f51\u7edc\u9519\u8bef" + url);
        });
      };
      return HttpSystem;
    }();
    exports.default = HttpSystem;
    cc._RF.pop();
  }, {
    "./Http": "Http"
  } ],
  Http: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2577cj7U7NMlrNoA4mvMTSN", "Http");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Http = void 0;
    var HttpState_1 = require("./HttpState");
    var Http = function() {
      function Http() {
        try {
          window["XMLHttpRequest"] ? this.xhr = new window["XMLHttpRequest"]() : this.xhr = new ActiveXObject("MSXML2.XMLHTTP");
          this.xhr.timeout = 3e3;
        } catch (e) {
          console.error("Http create error", e);
        }
      }
      Http.prototype.open = function(url, method, data) {
        void 0 === method && (method = Http.GET);
        this.method = method || "get";
        "get" == this.method && data && (url = this.spliceUrl(url, data));
        this.url = url;
        this.data = data;
        this.xhr.open(method, url, true);
        return this;
      };
      Http.prototype.openGet = function(url, data) {
        this.open(url, Http.GET, data);
        return this;
      };
      Http.prototype.openPost = function(url, data) {
        this.open(url, Http.POST, data);
        return this;
      };
      Http.prototype.onComplete = function(callback, target) {
        this.target = target;
        this._onComplete = callback;
        return this;
      };
      Http.prototype.onError = function(callback, target) {
        this.target = target;
        this._onError = callback;
        return this;
      };
      Http.prototype.send = function(data) {
        data = data || this.data;
        if ("object" === typeof data) try {
          data = JSON.stringify(data);
        } catch (e) {
          console.error(e);
        }
        this.xhr.onreadystatechange = this.onReadyStateChange.bind(this);
        console.log("body = " + data);
        this.xhr.send(data);
      };
      Http.prototype.abort = function() {
        this.xhr && this.xhr.abort();
      };
      Http.prototype.setRequestHeader = function(data) {
        try {
          for (var key in data) this.xhr.setRequestHeader(key, data[key]);
        } catch (e) {
          console.error(e);
        }
        return this;
      };
      Http.prototype.getAllResponseHeaders = function() {
        if (!this.xhr) return "";
        var result = this.xhr.getAllResponseHeaders();
        return result || "";
      };
      Http.prototype.onDestroy = function() {
        this.xhr = null;
      };
      Http.prototype.spliceUrl = function(url, data) {
        var dataStr = "";
        for (var key in data) dataStr += key + "=" + data[key] + "&";
        dataStr = dataStr.substr(0, dataStr.length - 1);
        dataStr.length > 2 && (url += url.indexOf("?") < 0 ? "?" + dataStr : url + dataStr);
        return url;
      };
      Http.prototype.onReadyStateChange = function() {
        var xhr = this.xhr;
        if (4 == xhr.readyState) {
          var ioError = xhr.status >= 400 || 0 == xhr.status;
          var url = this.url;
          var self = this;
          if (ioError) {
            if (this._onError) {
              var response = null;
              this.xhr.response && (response = JSON.parse(this.xhr.response));
              this._onError(this.xhr.status, HttpState_1.HttpStateMap.instance.getErrorInfoById(this.xhr.status), response);
            }
          } else this.xhr.readyState == Http.DONE && (this.xhr.status >= 200 && this.xhr.status < 400 ? this._onComplete.call(this.target ? this.target : null, JSON.parse(this.xhr.response)) : this._onComplete.call(this.target ? this.target : null, HttpState_1.HttpStateMap.instance.getErrorInfoById(this.xhr.status)));
        }
      };
      Http.stringifyPrimitive = function(v) {
        switch (typeof v) {
         case "string":
          return v;

         case "boolean":
          return v ? "true" : "false";

         case "number":
          return isFinite(v) ? v : "";

         default:
          return "";
        }
      };
      Http.stringify = function(obj, sep, eq, name) {
        sep = sep || "&";
        eq = eq || "=";
        null === obj && (obj = void 0);
        if ("object" === typeof obj) return Object.keys(obj).map(function(k) {
          var ks = encodeURIComponent(Http.stringifyPrimitive(k)) + eq;
          return Array.isArray(obj[k]) ? obj[k].map(function(v) {
            return ks + encodeURIComponent(Http.stringifyPrimitive(v));
          }).join(sep) : ks + encodeURIComponent(Http.stringifyPrimitive(obj[k]));
        }).join(sep);
        if (!name) return "";
        return encodeURIComponent(Http.stringifyPrimitive(name)) + eq + encodeURIComponent(Http.stringifyPrimitive(obj));
      };
      Http.getUrl = function(url, params) {
        var s = Http.stringify(params);
        var sep = url.indexOf("?") > -1 ? "&" : "?";
        return url + (s ? sep + s : "");
      };
      Http.GET = "get";
      Http.POST = "post";
      Http.UNSENT = 0;
      Http.OPENED = 1;
      Http.HEADERS_RECEIVED = 2;
      Http.LOADING = 3;
      Http.DONE = 4;
      return Http;
    }();
    exports.Http = Http;
    cc._RF.pop();
  }, {
    "./HttpState": "HttpState"
  } ],
  IEntity: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "88a682qlwtFYr5122AMy+Oh", "IEntity");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IHttpSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7e6atxvfRHkIvlMxs+jWdB", "IHttpSystem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  INativeServer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ce7beTjNJMH5bZKYvP0Gv9", "INativeServer");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IPlatform: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c12b1l1oEZAn5Gm4vqKSlaK", "IPlatform");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48eff1Sr3hEH4odj13NRcYq", "IState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  ImageLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "959880skRtNTa/oHpOI9tzC", "ImageLoader");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ImageLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var ImageLoader = function(_super) {
      __extends(ImageLoader, _super);
      function ImageLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ImageLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, tex) {
          e && cc.error(e);
          callback && callback(e, new cc.SpriteFrame(tex));
        });
      };
      ImageLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("ImageLoader loadRemoteRes method not implemented.");
      };
      ImageLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return ImageLoader;
    }(BaseLoader_1.default);
    exports.ImageLoader = ImageLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  IosAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3babe7H+2xIvZgVFnejYrH+", "IosAdapter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var IosAdapter = function() {
      function IosAdapter() {
        this.packageName = "CocosHelper";
        this.isPrintLog = true;
      }
      IosAdapter.prototype.onGameExit = function() {};
      IosAdapter.prototype.onGameReady = function() {
        cc.log("getWritablePath():" + jsb.fileUtils.getWritablePath());
      };
      IosAdapter.prototype.toast = function(message) {
        jsb.reflection.callStaticMethod(this.packageName, "toast:", message);
      };
      IosAdapter.prototype.callFunction = function(funcName, parm, moduleName) {
        var packagePath = this.packageName;
        moduleName && "" != moduleName && (packagePath = moduleName);
        jsb.reflection.callStaticMethod(packagePath, funcName + ":", parm);
      };
      IosAdapter.prototype.callFunctionResult = function(funcName, parm, moduleName) {
        var packagePath = this.packageName;
        moduleName && "" != moduleName && (packagePath = moduleName);
        var result = jsb.reflection.callStaticMethod(packagePath, funcName + ":", parm);
        return result;
      };
      return IosAdapter;
    }();
    exports.default = IosAdapter;
    cc._RF.pop();
  }, {} ],
  JsonLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0d663YYd+tE0rw5eLIMC8Iq", "JsonLoader");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.JsonLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var JsonLoader = function(_super) {
      __extends(JsonLoader, _super);
      function JsonLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      JsonLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      JsonLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("JsonLoader loadRemoteRes method not implemented.");
      };
      JsonLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return JsonLoader;
    }(BaseLoader_1.default);
    exports.JsonLoader = JsonLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  Level1Sate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16c04Ar+ihD26CRRnLrTjGH", "Level1Sate");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var Point_1 = require("../../../../Scripts/common/Point");
    var config_1 = require("../config/config");
    var Events_1 = require("../Events");
    var Level2Sate_1 = require("./Level2Sate");
    var Level1State = function() {
      function Level1State() {
        this.current = 0;
        this.times = 0;
      }
      Level1State.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      Level1State.prototype.enter = function(data) {
        Point_1.default.instance.roundStart(1);
        this.entity.bgsNode.x = config_1.default.SCENE_WIDTH * Level1State.CURRENT_LEVEL;
        kit_1.kit.manager.Event.on(Events_1.default.GRAB_SUCCESS, this.onGrabComplete, this);
        kit_1.kit.manager.Event.on(Events_1.default.GAME_GUID_COMPLETE, this.onGuidComplete, this);
        kit_1.kit.manager.Event.on(Events_1.default.GRAB_ACTION_ON_COLLISION, this.onCollision, this);
        kit_1.kit.manager.Event.on(Events_1.default.FRUIT_DOWN_COMPLETE, this.onFruitDownComplete, this);
        kit_1.kit.manager.Event.on(Events_1.default.GRAB_ACTION_COMPLETE, this.onActionComplete, this);
        return Promise.resolve();
      };
      Level1State.prototype.execute = function(data) {};
      Level1State.prototype.exit = function(data) {
        kit_1.kit.manager.Event.off(Events_1.default.GRAB_SUCCESS, this.onGrabComplete, this);
        kit_1.kit.manager.Event.off(Events_1.default.GAME_GUID_COMPLETE, this.onGuidComplete, this);
        kit_1.kit.manager.Event.off(Events_1.default.GRAB_ACTION_ON_COLLISION, this.onCollision, this);
        kit_1.kit.manager.Event.off(Events_1.default.FRUIT_DOWN_COMPLETE, this.onFruitDownComplete, this);
        kit_1.kit.manager.Event.off(Events_1.default.GRAB_ACTION_COMPLETE, this.onActionComplete, this);
        kit_1.kit.system.timer.clearTimer(this.guidScale);
      };
      Level1State.prototype.onGrabComplete = function(event) {
        var _this = this;
        this.current += 1;
        cc.log("target count:" + this.current);
        kit_1.kit.manager.Event.emit(Events_1.default.GAME_SCORE, {
          index: this.current,
          level: 1
        });
        if (this.current >= config_1.default.LEVEL_TARGET_FRUIT_NUMBER) {
          kit_1.kit.system.timer.doOnce(10, function() {
            kit_1.kit.manager.Event.emit(Events_1.default.GAME_STAGE_COMPLETE, {
              level: 1
            });
          }, this);
          kit_1.kit.system.timer.doOnce(3500, function() {
            _this.entity.stateMachine.ChangeState(Level2Sate_1.default);
          }, this);
        }
      };
      Level1State.prototype.guidScale = function() {
        var list = this.entity.bgsNode.getChildByName("scene1").children;
        list.forEach(function(element, index) {
          element.name.indexOf("mango") > -1 && cc.tween(element).to(.2, {
            scale: .5
          }).to(.2, {
            scale: 1
          }).start();
        });
      };
      Level1State.prototype.onGuidComplete = function() {
        kit_1.kit.system.timer.doLoop(5e3, this.guidScale, this);
      };
      Level1State.prototype.onCollision = function() {
        kit_1.kit.manager.Audio.playEffect("mango");
        this.entity.word.Init(this.entity.word.mango);
      };
      Level1State.prototype.onFruitDownComplete = function() {
        var _this = this;
        this.entity.word.Init(this.entity.word.mangoes);
        kit_1.kit.manager.Audio.playEffect("mangoes", false, function() {
          Point_1.default.instance.roundEnd(1, _this.times);
          kit_1.kit.manager.Audio.playEffect("SE_zhuashuiguo04_ytz");
        });
      };
      Level1State.prototype.onActionComplete = function() {
        this.times += 1;
      };
      Level1State.MIN_LENGTH = 0;
      Level1State.CURRENT_LEVEL = 1;
      return Level1State;
    }();
    exports.default = Level1State;
    cc._RF.pop();
  }, {
    "../../../../Scripts/common/Point": "Point",
    "../../../../kit/kit": "kit",
    "../Events": "Events",
    "../config/config": "config",
    "./Level2Sate": "Level2Sate"
  } ],
  Level2Sate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c00f42tYahMxLzjNHhUaJgG", "Level2Sate");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var Point_1 = require("../../../../Scripts/common/Point");
    var config_1 = require("../config/config");
    var Events_1 = require("../Events");
    var Level3Sate_1 = require("./Level3Sate");
    var Level2State = function() {
      function Level2State() {
        this.current = 0;
        this.times = 0;
      }
      Level2State.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      Level2State.prototype.enter = function(data) {
        Point_1.default.instance.roundStart(2);
        cc.tween(this.entity.bgsNode).to(1, {
          x: 0
        }).call(function() {}).start();
        kit_1.kit.system.timer.doLoop(5e3, this.guidScale, this);
        kit_1.kit.manager.Event.on(Events_1.default.GRAB_SUCCESS, this.onGrabComplete, this);
        kit_1.kit.manager.Event.on(Events_1.default.GRAB_ACTION_ON_COLLISION, this.onCollision, this);
        kit_1.kit.manager.Event.on(Events_1.default.FRUIT_DOWN_COMPLETE, this.onFruitDownComplete, this);
        kit_1.kit.manager.Event.on(Events_1.default.GRAB_ACTION_COMPLETE, this.onActionComplete, this);
        return Promise.resolve();
      };
      Level2State.prototype.execute = function(data) {};
      Level2State.prototype.exit = function(data) {
        kit_1.kit.system.timer.clearTimer(this.guidScale);
        kit_1.kit.manager.Event.off(Events_1.default.GRAB_SUCCESS, this.onGrabComplete, this);
        kit_1.kit.manager.Event.off(Events_1.default.GRAB_ACTION_ON_COLLISION, this.onCollision, this);
        kit_1.kit.manager.Event.off(Events_1.default.FRUIT_DOWN_COMPLETE, this.onFruitDownComplete, this);
        kit_1.kit.manager.Event.off(Events_1.default.GRAB_ACTION_COMPLETE, this.onActionComplete, this);
      };
      Level2State.prototype.onGrabComplete = function(event) {
        var _this = this;
        this.current += 1;
        cc.log("target count:" + this.current);
        kit_1.kit.manager.Event.emit(Events_1.default.GAME_SCORE, {
          index: this.current,
          level: 2
        });
        if (this.current >= config_1.default.LEVEL_TARGET_FRUIT_NUMBER) {
          kit_1.kit.manager.Event.emit(Events_1.default.SCENE_CHANGE, {
            level: 3
          });
          kit_1.kit.system.timer.doOnce(3500, function() {
            _this.entity.stateMachine.ChangeState(Level3Sate_1.default);
          });
          kit_1.kit.system.timer.doOnce(10, function() {
            kit_1.kit.manager.Event.emit(Events_1.default.GAME_STAGE_COMPLETE, {
              level: 2
            });
          }, this);
        }
      };
      Level2State.prototype.guidScale = function() {
        var list = this.entity.bgsNode.getChildByName("scene2").children;
        list.forEach(function(element, index) {
          element.name.indexOf("banans") > -1 && cc.tween(element).to(.2, {
            scale: .5
          }).to(.2, {
            scale: 1
          }).start();
        });
      };
      Level2State.prototype.onCollision = function() {
        this.entity.word.Init(this.entity.word.banana);
        kit_1.kit.manager.Audio.playEffect("banana");
      };
      Level2State.prototype.onFruitDownComplete = function() {
        var _this = this;
        this.entity.word.Init(this.entity.word.bananas);
        kit_1.kit.manager.Audio.playEffect("bananas", false, function() {
          Point_1.default.instance.roundEnd(2, _this.times);
          kit_1.kit.manager.Audio.playEffect("SE_zhuashuiguo04_ytz");
        });
      };
      Level2State.prototype.onActionComplete = function() {
        this.times += 1;
      };
      Level2State.MIN_LENGTH = 0;
      Level2State.CURRENT_LEVEL = 2;
      return Level2State;
    }();
    exports.default = Level2State;
    cc._RF.pop();
  }, {
    "../../../../Scripts/common/Point": "Point",
    "../../../../kit/kit": "kit",
    "../Events": "Events",
    "../config/config": "config",
    "./Level3Sate": "Level3Sate"
  } ],
  Level3Sate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7937bqtVdpBlqapKyss13Cp", "Level3Sate");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var Point_1 = require("../../../../Scripts/common/Point");
    var config_1 = require("../config/config");
    var Events_1 = require("../Events");
    var Level3State = function() {
      function Level3State() {
        this.current = 0;
        this.times = 0;
      }
      Level3State.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      Level3State.prototype.enter = function(data) {
        Point_1.default.instance.roundStart(3);
        cc.tween(this.entity.bgsNode).to(1, {
          x: -config_1.default.SCENE_WIDTH
        }).call(function() {}).start();
        kit_1.kit.system.timer.doLoop(5e3, this.guidScale, this);
        kit_1.kit.manager.Event.on(Events_1.default.GRAB_SUCCESS, this.onGrabComplete, this);
        kit_1.kit.manager.Event.on(Events_1.default.GRAB_ACTION_ON_COLLISION, this.onCollision, this);
        kit_1.kit.manager.Event.on(Events_1.default.FRUIT_DOWN_COMPLETE, this.onFruitDownComplete, this);
        kit_1.kit.manager.Event.on(Events_1.default.GRAB_ACTION_COMPLETE, this.onActionComplete, this);
        return Promise.resolve();
      };
      Level3State.prototype.execute = function(data) {};
      Level3State.prototype.exit = function(data) {
        kit_1.kit.system.timer.clearTimer(this.guidScale);
        kit_1.kit.manager.Event.off(Events_1.default.GRAB_SUCCESS, this.onGrabComplete, this);
        kit_1.kit.manager.Event.off(Events_1.default.GRAB_ACTION_ON_COLLISION, this.onCollision, this);
        kit_1.kit.manager.Event.off(Events_1.default.FRUIT_DOWN_COMPLETE, this.onFruitDownComplete, this);
        kit_1.kit.manager.Event.off(Events_1.default.GRAB_ACTION_COMPLETE, this.onActionComplete, this);
      };
      Level3State.prototype.onGrabComplete = function(event) {
        this.current += 1;
        cc.log("target count:" + this.current);
        kit_1.kit.manager.Event.emit(Events_1.default.GAME_SCORE, {
          index: this.current,
          level: 3
        });
        if (this.current >= config_1.default.LEVEL_TARGET_FRUIT_NUMBER) {
          Point_1.default.instance.roundEnd(3, this.times);
          Point_1.default.instance.gameEnd();
          kit_1.kit.manager.Event.emit(Events_1.default.SCENE_CHANGE, {
            level: 3
          });
          kit_1.kit.system.timer.clearTimer(this.guidScale);
          this.palyMonsterAnimation();
          kit_1.kit.manager.Event.emit(Events_1.default.GAME_STAGE_COMPLETE, {
            level: 3
          });
          kit_1.kit.system.timer.doOnce(1e3, function() {
            kit_1.kit.manager.Event.emit(Events_1.default.GAME_COMPLETE);
          });
        }
      };
      Level3State.prototype.palyMonsterAnimation = function() {
        var sp = this.entity.monsterNode.getComponent("sp.Skeleton");
        kit_1.kit.system.timer.doOnce(1500, function() {
          kit_1.kit.manager.Audio.playEffect("SE_zhuashuiguo06_ytz");
          sp.setAnimation(0, Level3State.MONSTER_IN, false);
          sp.setCompleteListener(function() {
            sp.setAnimation(0, Level3State.MONSTER_DILE, false);
            sp.setCompleteListener(function() {
              sp.setAnimation(0, Level3State.MONSTER_OUT, false);
              sp.setCompleteListener(null);
            });
          });
        });
      };
      Level3State.prototype.guidScale = function() {
        var list = this.entity.bgsNode.getChildByName("scene3").children;
        list.forEach(function(element, index) {
          element.name.indexOf("coco") > -1 && cc.tween(element).to(.2, {
            scale: .5
          }).to(.2, {
            scale: 1
          }).start();
        });
      };
      Level3State.prototype.onCollision = function() {
        this.entity.word.Init(this.entity.word.coconut);
        kit_1.kit.manager.Audio.playEffect("coconut");
      };
      Level3State.prototype.onFruitDownComplete = function() {
        this.entity.word.Init(this.entity.word.coconuts);
        kit_1.kit.manager.Audio.playEffect("coconuts", false, function() {
          kit_1.kit.manager.Audio.playEffect("SE_zhuashuiguo04_ytz");
        });
      };
      Level3State.prototype.onActionComplete = function() {
        this.times += 1;
      };
      Level3State.MIN_LENGTH = 0;
      Level3State.CURRENT_LEVEL = 2;
      Level3State.MONSTER_IN = "L2_W0_day1_1_monster_in";
      Level3State.MONSTER_OUT = "L2_W0_day1_1_monster_out";
      Level3State.MONSTER_OUT2 = "L2_W0_day1_1_monster_out2";
      Level3State.MONSTER_DILE = "L2_W0_day1_1_monster_daiji";
      return Level3State;
    }();
    exports.default = Level3State;
    cc._RF.pop();
  }, {
    "../../../../Scripts/common/Point": "Point",
    "../../../../kit/kit": "kit",
    "../Events": "Events",
    "../config/config": "config"
  } ],
  LevelGloabelState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8c80ln17hGG7LbUblqG+ld", "LevelGloabelState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var LevelGlobalState = function() {
      function LevelGlobalState() {}
      LevelGlobalState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      LevelGlobalState.prototype.enter = function(data) {
        var _this = this;
        var delay = 9e3 + 14e3 * Math.random();
        cc.log("delay", delay);
        setTimeout(function() {
          _this.egg();
        }, delay);
        return Promise.resolve();
      };
      LevelGlobalState.prototype.execute = function(data) {};
      LevelGlobalState.prototype.exit = function(data) {
        kit_1.kit.system.timer.clearTimer(this.egg);
      };
      LevelGlobalState.prototype.egg = function() {
        var _this = this;
        if (this.entity.birdNode) {
          this.entity.birdNode.x = 1e3;
          cc.tween(this.entity.birdNode).to(9, {
            x: -1e3
          }).start();
          var delay = 9e3 + 14e3 * Math.random();
          cc.log("delay", delay);
          setTimeout(function() {
            _this.egg();
          }, delay);
        }
      };
      return LevelGlobalState;
    }();
    exports.default = LevelGlobalState;
    cc._RF.pop();
  }, {
    "../../../../kit/kit": "kit"
  } ],
  LinkedNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e42b9LvP0VIVbQ5PifSVbB4", "LinkedNode");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LinkedNode = void 0;
    var LinkedNode = function() {
      function LinkedNode(element) {
        this.element = null;
        this.previous = null;
        this.element = element;
      }
      return LinkedNode;
    }();
    exports.LinkedNode = LinkedNode;
    var LinkedList = function() {
      function LinkedList(element) {
        this.length = 0;
        this.head = new LinkedNode(element);
        this.head.next = this.head;
        this.head.previous = this.head;
        this.length = 1;
      }
      LinkedList.from = function(array) {
        var length = array.length;
        var linkedList = new LinkedList(array.shift());
        linkedList.length = length;
        array.reduce(function(previous, current) {
          previous.next = new LinkedNode(current);
          previous.next.previous = previous;
          return previous.next;
        }, linkedList.head);
        return linkedList;
      };
      LinkedList.prototype.find = function(cb) {
        var i;
        var currentNode = this.head;
        for (i = 0; i < this.length; i++) {
          if (cb.call(this, currentNode)) break;
          currentNode = currentNode.next;
        }
        return i !== this.length ? currentNode : null;
      };
      LinkedList.prototype.insert = function(newElement, node) {
        var newNode = new LinkedNode(newElement);
        var previousNode = this.find(function(n) {
          return n === node;
        });
        if (previousNode) {
          var rawNextNode = previousNode.next;
          previousNode.next = newNode;
          newNode.previous = previousNode;
          newNode.next = rawNextNode;
          rawNextNode.previous = newNode;
          this.length++;
        }
      };
      LinkedList.prototype.remove = function(node) {
        var deletedNode = this.find(function(n) {
          return n === node;
        });
        if (deletedNode) {
          this.head === deletedNode && (this.head = deletedNode.next);
          deletedNode.previous.next = deletedNode.next;
          deletedNode.next.previous = deletedNode.previous;
          this.length--;
        }
      };
      return LinkedList;
    }();
    exports.default = LinkedList;
    cc._RF.pop();
  }, {} ],
  LoaderObserver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "118d6KvyKRDtKiNgDIbxlRM", "LoaderObserver");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LoaderObserverParam = void 0;
    var LoaderObserverParam = function() {
      function LoaderObserverParam(url, type, bundle, time, options) {
        this.url = url;
        this.type = type;
        this.bundle = bundle;
        this.time = time;
        this.options = options;
      }
      return LoaderObserverParam;
    }();
    exports.LoaderObserverParam = LoaderObserverParam;
    cc._RF.pop();
  }, {} ],
  LocalStorageUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "032c7+CLdVAzpuhSz3pQFkr", "LocalStorageUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LocalStorageUtils = void 0;
    var LocalStorageUtils = function() {
      function LocalStorageUtils() {}
      LocalStorageUtils.removeItem = function(key) {
        localStorage.removeItem(key);
      };
      LocalStorageUtils.setObject = function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
      };
      LocalStorageUtils.getObject = function(key) {
        var obj = localStorage.getItem(key);
        if ("" == obj) return null;
        return JSON.parse(obj);
      };
      LocalStorageUtils.setBool = function(key, value) {
        localStorage.setItem(key, value.toString());
      };
      LocalStorageUtils.getBool = function(key) {
        return "true" == localStorage.getItem(key);
      };
      LocalStorageUtils.setInt = function(key, value) {
        localStorage.setItem(key, value.toString());
      };
      LocalStorageUtils.getInt = function(key) {
        return Number(localStorage.getItem(key));
      };
      LocalStorageUtils.setString = function(key, value) {
        localStorage.setItem(key, value);
      };
      LocalStorageUtils.getString = function(key) {
        return localStorage.getItem(key);
      };
      return LocalStorageUtils;
    }();
    exports.LocalStorageUtils = LocalStorageUtils;
    cc._RF.pop();
  }, {} ],
  LogSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "810f5/F5aFMGqqFA7bD6T7N", "LogSystem");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../kit");
    var ASystem_1 = require("../interface/ASystem");
    var LogSystem = function(_super) {
      __extends(LogSystem, _super);
      function LogSystem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isDebug = true;
        _this.gameName = "";
        _this.gameVersion = "";
        _this.isPrintTime = false;
        return _this;
      }
      Object.defineProperty(LogSystem, "instance", {
        get: function() {
          null == LogSystem._instance && (LogSystem._instance = new LogSystem());
          return LogSystem._instance;
        },
        enumerable: false,
        configurable: true
      });
      LogSystem.prototype.init = function(outAdapter, gameName, gameVersion, isPrintTime) {
        var _this = this;
        void 0 === isPrintTime && (isPrintTime = false);
        return new Promise(function(res, rea) {
          _this.gameName = gameName || "";
          _this.gameVersion = gameVersion || "";
          _this.outAdapter = outAdapter;
          _this.isPrintTime = isPrintTime;
          res();
        });
      };
      LogSystem.prototype.release = function() {
        this.outAdapter = null;
        LogSystem._instance = null;
      };
      LogSystem.prototype.print = function(type, messages) {
        var gameName = this.gameName ? "[" + this.gameName + "]" : "";
        var gameVersion = this.gameName ? "[" + this.gameVersion + "]" : "";
        console[type](new Date().toLocaleString() + " " + type + " " + gameName + " " + gameVersion + "\t", messages);
        this && this.outAdapter && this.outAdapter(new Date().toLocaleString() + type + " " + gameName + " " + gameVersion + "\t", messages);
      };
      LogSystem.prototype.obj2String = function(messages) {
        var str = "";
        messages.forEach(function(element) {
          str += "object" == typeof messages ? JSON.stringify(element) : element;
        });
        return str;
      };
      LogSystem.error = function(messages) {
        kit_1.kit.system.log.print("error", messages);
      };
      LogSystem.warn = function(messages) {
        kit_1.kit.system.log.print("warn", messages);
      };
      LogSystem.log = function(messages) {
        kit_1.kit.system.log.isDebug && kit_1.kit.system.log.print("log", messages);
      };
      LogSystem.info = function(messages) {
        kit_1.kit.system.log.print("info", messages);
      };
      return LogSystem;
    }(ASystem_1.default);
    exports.default = LogSystem;
    cc._RF.pop();
  }, {
    "../../kit": "kit",
    "../interface/ASystem": "ASystem"
  } ],
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
    var Main = function(_super) {
      __extends(Main, _super);
      function Main() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.menuPre = null;
        _this.menuItem = null;
        _this.node_nowShow = null;
        _this.page_num = 0;
        _this.Lesson_Sign = "L1W1D5Fun";
        _this.page = "page";
        _this.star = "star";
        _this.record_num = "record_num";
        _this.isSecgame = 0;
        _this.secKey = "seckey";
        return _this;
      }
      Main.prototype.onLoad = function() {
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
        TigoManager_1.default.callAppToLoaded();
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
      Main.prototype.start = function() {};
      Main.prototype.registerListener = function() {
        window.webframe.Notify.listen("entryMenu", this.entryMenu, this, false);
      };
      Main.prototype.entryMenu = function(endtag) {
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
      Main.prototype.openMenu = function(isGoon) {
        void 0 === isGoon && (isGoon = false);
        this.menuItem = cc.instantiate(this.menuPre);
        this.node.addChild(this.menuItem);
        this.menuItem.getComponent("gameMenu").initMenu(this.page_num, this.isSecgame, isGoon, this);
      };
      Main.prototype.openGame = function(gid) {
        console.log("into openGame");
        this.menuItem && this.menuItem.destroy();
        this.loadPage(gid);
      };
      Main.prototype.gameAllend = function() {
        var star = this.Lesson_Sign + this.star;
        console.log("\u672c\u90e8\u5206\u4e00\u5171\u83b7\u5f97\u91d1\u5e01 === " + GameData_1.default.totalStar_num);
        console.log("\u672c\u90e8\u5206\u4e00\u5171\u5f00\u53e3 === " + GameData_1.default.record_num + "\u6b21");
        TigoManager_1.default.callAppToHttp("POST", GameData_1.default.totalStar_num, GameData_1.default.record_num);
        TigoManager_1.default.callAppToStorage("remove", star);
        TigoManager_1.default.callAppToClose("replayOrNext", true);
      };
      Main.prototype.loadPage = function(page_num) {
        var _this = this;
        console.log("\u5f53\u524d\u52a0\u8f7d\u7684\u6e38\u620f\u9875\u6570---------------\x3e" + page_num);
        var nameProfab_str = "prefabs/" + GameData_1.default.getNodePath(page_num);
        cc.loader.loadRes(nameProfab_str, function(err, prefab) {
          err ? console.log(err, "err \u9884\u5236\u4f53\u52a0\u8f7d\u5931\u8d25==========>") : _this.addPrefab(prefab);
        });
      };
      Main.prototype.addPrefab = function(prefab) {
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
      Main.prototype.onDestroy = function() {
        this.unRegisterListener();
      };
      Main.prototype.unRegisterListener = function() {
        window.webframe.Notify.ignore("entryMenu", this.entryMenu, this, false);
      };
      __decorate([ property(cc.Prefab) ], Main.prototype, "menuPre", void 0);
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
    "../base/TigoManager": "TigoManager",
    "./GameData": "GameData",
    "./Util": "Util"
  } ],
  MessageBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48ac1jDKY9BEZ50XUemia/D", "MessageBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MessageBase = void 0;
    var MessageBase = function() {
      function MessageBase() {
        this.showTips = true;
      }
      return MessageBase;
    }();
    exports.MessageBase = MessageBase;
    cc._RF.pop();
  }, {} ],
  MessageDispatcher: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da151aFG31ElLg/T9D/cjYk", "MessageDispatcher");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TreeSet = exports.MessageDispatcher = void 0;
    var Telegram_1 = require("./Telegram");
    var EntityManager_1 = require("../entity/EntityManager");
    var MessageDispatcher = function() {
      function MessageDispatcher() {
        this.SEND_MSG_IMMEDIATELY = 0;
        this.NO_ADDITIONAL_INFO = 0;
        this.PriorityQ = new TreeSet(function(a, b) {
          return a - b;
        });
        this.showList = new Array();
      }
      Object.defineProperty(MessageDispatcher, "instance", {
        get: function() {
          null == this._instance && (this._instance = new MessageDispatcher());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      MessageDispatcher.prototype.Discharge = function(pReceiver, telegram) {
        this.showList.push(telegram);
        !pReceiver.stateMachine.HandleMessage(telegram);
      };
      Object.defineProperty(MessageDispatcher.prototype, "showListData", {
        get: function() {
          return this.showList;
        },
        enumerable: false,
        configurable: true
      });
      MessageDispatcher.prototype.DispatchMessage = function(sender, receiver, msg, info, delay) {
        void 0 === info && (info = null);
        void 0 === delay && (delay = 0);
        var pSender = EntityManager_1.default.instance.getEntityFromID(sender);
        var pReceiver = EntityManager_1.default.instance.getEntityFromID(receiver);
        if (null == pReceiver) {
          console.warn("\nWarning! No Receiver with ID of " + receiver + " found");
          return;
        }
        var telegram = new Telegram_1.default(0, sender, receiver, msg, info);
        if (delay <= 0) this.Discharge(pReceiver, telegram); else {
          telegram.DispatchTime = Date.now();
          this.PriorityQ.add(telegram);
        }
      };
      MessageDispatcher.prototype.DispatchDelayedMessages = function() {
        while (!this.PriorityQ.isEmpty && this.PriorityQ.first.DispatchTime <= Date.now() && this.PriorityQ.first.DispatchTime > 0) {
          var telegram = this.PriorityQ.first;
          var pReceiver = EntityManager_1.default.instance.getEntityFromID(telegram.Receiver);
          this.Discharge(pReceiver, telegram);
          this.PriorityQ.remove(this.PriorityQ.first);
        }
      };
      MessageDispatcher.prototype.DispatchSimpleMessage = function(sender, receiver) {
        var pSender = sender;
        var pReceiver = receiver;
        if (null == pReceiver) {
          console.warn("\nWarning! No Receiver with ID of " + receiver + " found");
          return;
        }
        var telegram = new Telegram_1.default(0, pSender.sid, receiver.sid, 0, null);
        this.Discharge(pReceiver, telegram);
      };
      return MessageDispatcher;
    }();
    exports.MessageDispatcher = MessageDispatcher;
    var TreeSet = function(_super) {
      __extends(TreeSet, _super);
      function TreeSet(sort) {
        var _this = _super.call(this) || this;
        _this.sortFun = sort;
        return _this;
      }
      TreeSet.prototype.add = function(data) {
        return _super.prototype.add.call(this, data);
      };
      TreeSet.prototype.remove = function(data) {
        return this.delete(data);
      };
      Object.defineProperty(TreeSet.prototype, "isEmpty", {
        get: function() {
          return 0 === this.size;
        },
        enumerable: false,
        configurable: true
      });
      return TreeSet;
    }(Set);
    exports.TreeSet = TreeSet;
    cc._RF.pop();
  }, {
    "../entity/EntityManager": "EntityManager",
    "./Telegram": "Telegram"
  } ],
  MessageType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0dceeiIz4hO6ZUmM1U5vrSc", "MessageType");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MessageType = void 0;
    var MessageType = function() {
      function MessageType() {}
      return MessageType;
    }();
    exports.MessageType = MessageType;
    cc._RF.pop();
  }, {} ],
  ModelBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "82bc7vj0x5GOadbPoojbl2B", "ModelBase");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NetHelper_1 = require("./NetHelper");
    var ccclass = cc._decorator.ccclass;
    var ModelBase = function() {
      function ModelBase() {
        this.cbMap = new Map();
      }
      ModelBase.prototype.init = function() {};
      ModelBase.prototype.sendMessage = function(message) {
        this.regiestReponse(message);
        NetHelper_1.default.sendMessage(message);
      };
      ModelBase.prototype.sendMessageWithOutToken = function(message) {
        this.regiestReponse(message);
        NetHelper_1.default.sendMessageWithOutToken(message);
      };
      ModelBase.prototype.registerCallBack = function(messageBase, callBack) {
        this.cbMap.set(messageBase.messageApi, callBack);
      };
      ModelBase.prototype.regiestReponse = function(message) {
        NetHelper_1.default.registCb(message.messageApi, this.responseMessage.bind(this));
      };
      ModelBase.prototype.responseMessage = function(api, msg) {
        var cb = this.cbMap.get(api);
        cb && cb(msg);
      };
      ModelBase.prototype.clear = function() {
        this.cbMap = new Map();
      };
      ModelBase = __decorate([ ccclass ], ModelBase);
      return ModelBase;
    }();
    exports.default = ModelBase;
    cc._RF.pop();
  }, {
    "./NetHelper": "NetHelper"
  } ],
  ModelManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d61a7YWzpBL9JK9HrSmdg6N", "ModelManager");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LocalStorageUtils_1 = require("../utils/LocalStorageUtils");
    var NativeInfo_1 = require("./NativeInfo");
    var NetHelper_1 = require("./NetHelper");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ModelManager = function() {
      function ModelManager() {
        this._modelList = new Map();
      }
      ModelManager_1 = ModelManager;
      Object.defineProperty(ModelManager, "instance", {
        get: function() {
          ModelManager_1._instance || (ModelManager_1._instance = new ModelManager_1());
          return ModelManager_1._instance;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ModelManager.prototype, "UserToken", {
        get: function() {
          if ("" != ModelManager_1.testToken) return ModelManager_1.testToken;
          return this.userToken;
        },
        set: function(value) {
          this.userToken = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ModelManager.prototype, "UserId", {
        get: function() {
          return this.userId;
        },
        set: function(value) {
          this.userId = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ModelManager.prototype, "CountryName", {
        get: function() {
          return this.countryName;
        },
        set: function(value) {
          this.countryName = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ModelManager.prototype, "phoneInfo", {
        get: function() {
          if ("" != ModelManager_1.testPhoneInfo) return ModelManager_1.testPhoneInfo;
          return this.generateInfo;
        },
        set: function(value) {
          this.generateInfo = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ModelManager.prototype, "timestamp", {
        get: function() {
          return this._timestamp;
        },
        enumerable: false,
        configurable: true
      });
      ModelManager.prototype.init = function(url, errorCb) {
        NetHelper_1.default.setHostUrl(url);
        NetHelper_1.default.init(errorCb);
        this.generateInfo = NativeInfo_1.default.generateInfo();
        this._timestamp = NativeInfo_1.default.currentTimeStamp();
        var userInfo = LocalStorageUtils_1.LocalStorageUtils.getObject("USER_INFO") || {};
        this.userToken = userInfo.token || "";
        this.userId = userInfo.userId || -1;
      };
      ModelManager.prototype.registerModel = function(model) {
        var key = model;
        if (this._modelList.get(key)) ; else {
          var m = new model();
          m.init();
          this._modelList.set(key, m);
        }
      };
      ModelManager.prototype.getModel = function(model) {
        var key = model;
        this._modelList.has(key) || this.registerModel(model);
        return this._modelList.get(key);
      };
      ModelManager.prototype.removeAllModel = function() {
        for (var key in this._modelList) {
          var model = this._modelList[key];
          model.clear();
          this._modelList.delete(key);
        }
        this._modelList.clear();
      };
      ModelManager.prototype.clearAllModel = function() {
        var keyList = Array.from(this._modelList.keys());
        for (var _i = 0, keyList_1 = keyList; _i < keyList_1.length; _i++) {
          var key = keyList_1[_i];
          var model = this._modelList.get(key);
          model && model.clear();
        }
      };
      ModelManager.prototype.reInitAllModel = function() {
        var keyList = Array.from(this._modelList.keys());
        for (var _i = 0, keyList_2 = keyList; _i < keyList_2.length; _i++) {
          var key = keyList_2[_i];
          var model = this._modelList.get(key);
          model && model.init();
        }
      };
      var ModelManager_1;
      ModelManager.testToken = "";
      ModelManager.testPhoneInfo = "";
      ModelManager._instance = null;
      ModelManager = ModelManager_1 = __decorate([ ccclass ], ModelManager);
      return ModelManager;
    }();
    exports.default = ModelManager;
    cc._RF.pop();
  }, {
    "../utils/LocalStorageUtils": "LocalStorageUtils",
    "./NativeInfo": "NativeInfo",
    "./NetHelper": "NetHelper"
  } ],
  MonitorUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9eaa6l9FjlNP4d/0e8mJir6", "MonitorUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MonitorUtils = void 0;
    var MonitorUtils = function() {
      function MonitorUtils() {}
      MonitorUtils.init = function() {
        var _this = this;
        this.fps();
        this.elem = document.createElement("monitor");
        this.elem.setAttribute("width", "200");
        this.elem.setAttribute("height", "400");
        this.elem.style.fontSize = "10px";
        document.body.appendChild(this.elem);
        setInterval(function() {
          _this.performance();
          _this.elem.innerHTML = _this.getInfo();
        }, 1e3);
      };
      MonitorUtils.fps = function() {
        var times = [];
        var fps = 0;
        function refreshLoop() {
          window.requestAnimationFrame(function() {
            var now = (performance || Date).now();
            while (times.length > 0 && times[0] <= now - 1e3) times.shift();
            times.push(now);
            fps = times.length;
            refreshLoop();
            MonitorUtils.showData["FPS"] = fps;
          });
        }
        refreshLoop();
      };
      MonitorUtils.performance = function() {
        var performance = window["performance"] || window["msPerformance"] || window["webkitPerformance"];
        if (!performance) return;
        var m = performance.memory;
        this.showData["\u5185\u5b58\u5927\u5c0f\u9650\u5236"] = (m.jsHeapSizeLimit / 1048576).toFixed(2) + "MB";
        this.showData["\u53ef\u4f7f\u7528\u5185\u5b58"] = (m.totalJSHeapSize / 1048576).toFixed(2) + "MB";
        this.showData["\u5360\u7528\u5185\u5b58"] = (m.usedJSHeapSize / 1048576).toFixed(2) + "MB";
        var t = performance.timing;
        this.showData["\u767d\u5c4f\u8017\u65f6"] = t.responseStart - t.navigationStart + "ms";
        this.showData["DNS\u67e5\u8be2\u8017\u65f6"] = t.domainLookupEnd - t.domainLookupStart + "ms";
        this.showData["HTTP\u8bf7\u6c42\u8017\u65f6"] = t.responseEnd - t.requestStart + "ms";
        this.showData["TCP\u94fe\u63a5\u8017\u65f6"] = t.connectEnd - t.connectStart + "ms";
        this.showData["load\u4e8b\u4ef6\u8017\u65f6"] = t.loadEventEnd - t.loadEventStart + "ms";
        this.showData["onload\u56de\u8c03\u51fd\u6570\u6267\u884c\u7684\u65f6\u95f4"] = t.loadEventEnd - t.navigationStart + "ms";
        var dataStr = "";
        for (var key in this.showData) dataStr += key + ": " + this.showData[key] + "\n";
      };
      MonitorUtils.getInfo = function() {
        var dataStr = "";
        for (var key in this.showData) dataStr += key + ": " + this.showData[key] + "</br>";
        return dataStr;
      };
      MonitorUtils.showData = {};
      MonitorUtils.elem = null;
      return MonitorUtils;
    }();
    exports.MonitorUtils = MonitorUtils;
    cc._RF.pop();
  }, {} ],
  NativeInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "966d6myhpRDG514tmMWlghz", "NativeInfo");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NetworkType = exports.GenerateInfo = void 0;
    var PlatformSystem_1 = require("../framework/platform/PlatformSystem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NativeInfo = function() {
      function NativeInfo() {}
      NativeInfo_1 = NativeInfo;
      NativeInfo.generateInfo = function() {
        if (PlatformSystem_1.default.instance.isBrowser) return '{"device_uuid": "lingoChineseAi"}';
        var adapter = PlatformSystem_1.default.instance.adapter;
        var result = adapter.callFunctionResult("generateCommNode", "", NativeInfo_1.moduleName);
        return result;
      };
      NativeInfo.currentTimeStamp = function() {
        if (PlatformSystem_1.default.instance.isBrowser) return new Date().getTime();
        var adapter = PlatformSystem_1.default.instance.adapter;
        var result = adapter.callFunctionResult("currentTimeStamp", "", NativeInfo_1.moduleName);
        return result;
      };
      NativeInfo.getNetworkStatus = function() {
        if (PlatformSystem_1.default.instance.isBrowser) return NetworkType.NETWORK_WIFI;
        var adapter = PlatformSystem_1.default.instance.adapter;
        var result = adapter.callFunctionResult("getNetworkStatus", "", NativeInfo_1.moduleName);
        return result;
      };
      var NativeInfo_1;
      NativeInfo.moduleName = PlatformSystem_1.default.instance.isAndroid ? "NativeInterface" : "CocosHelper";
      NativeInfo = NativeInfo_1 = __decorate([ ccclass ], NativeInfo);
      return NativeInfo;
    }();
    exports.default = NativeInfo;
    var GenerateInfo = function() {
      function GenerateInfo() {}
      return GenerateInfo;
    }();
    exports.GenerateInfo = GenerateInfo;
    var NetworkType;
    (function(NetworkType) {
      NetworkType["NETWORK_WIFI"] = "NETWORK_WIFI";
      NetworkType["NETWORK_5G"] = "NETWORK_5G";
      NetworkType["NETWORK_4G"] = "NETWORK_4G";
      NetworkType["NETWORK_3G"] = "NETWORK_3G";
      NetworkType["NETWORK_2G"] = "NETWORK_2G";
      NetworkType["NETWORK_UNKNOWN"] = "NETWORK_UNKNOWN";
      NetworkType["NETWORK_NO"] = "NETWORK_NO";
    })(NetworkType = exports.NetworkType || (exports.NetworkType = {}));
    cc._RF.pop();
  }, {
    "../framework/platform/PlatformSystem": "PlatformSystem"
  } ],
  NetHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea3f1RC2t9E+K3k4ohW/qGR", "NetHelper");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HttpSystem_1 = require("../system/net/http/HttpSystem");
    var ModelManager_1 = require("./ModelManager");
    var NativeInfo_1 = require("./NativeInfo");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NetHelper = function() {
      function NetHelper() {}
      NetHelper_1 = NetHelper;
      NetHelper.init = function(errorCb) {
        HttpSystem_1.default.instance.init(NetHelper_1.onError);
        NetHelper_1.onErrorCb = errorCb;
      };
      NetHelper.setHostUrl = function(url) {
        NetHelper_1._hostUrl = url;
      };
      NetHelper.registCb = function(message, callBack) {
        NetHelper_1.cbMap.set(message, callBack);
      };
      NetHelper.sendMessage = function(message) {
        if ("" == NetHelper_1._hostUrl) {
          NetHelper_1.dispatcher(message.messageApi, message.debugData);
          return;
        }
        if (!ModelManager_1.default.instance.UserToken || "" == ModelManager_1.default.instance.UserToken) {
          this.sendMessageWithOutToken(message);
          return;
        }
        NetHelper_1.currentMessage = message;
        var netWork = NativeInfo_1.default.getNetworkStatus();
        if (netWork == NativeInfo_1.NetworkType.NETWORK_NO) {
          NetHelper_1.onError && NetHelper_1.onError("\u8bf7\u6c42\u9519\u8bef", "failed to connect", null);
          return;
        }
        var url = this.formatUrl(message.messageApi);
        var header = {
          timestamp: ModelManager_1.default.instance.timestamp,
          phoneInfo: ModelManager_1.default.instance.phoneInfo,
          Authorization: "Bearer " + ModelManager_1.default.instance.UserToken
        };
        cc.log(header);
        HttpSystem_1.default.instance.httpPost(url, message.param, null, JSON.stringify(header)).then(function(msg) {
          cc.log(message.messageApi + "\u8bf7\u6c42\u8fd4\u56de", msg);
          msg && 200 == msg.code || NetHelper_1.onError && NetHelper_1.onError("\u8bf7\u6c42\u9519\u8bef", msg, msg);
          NetHelper_1.dispatcher(message.messageApi, msg);
        });
      };
      NetHelper.sendMessageWithOutToken = function(message) {
        if ("" == NetHelper_1._hostUrl) {
          NetHelper_1.dispatcher(message.messageApi, message.debugData);
          return;
        }
        var url = this.formatUrl(message.messageApi);
        var header = {
          timestamp: ModelManager_1.default.instance.timestamp,
          phoneInfo: ModelManager_1.default.instance.phoneInfo
        };
        cc.log(header);
        NetHelper_1.currentMessage = message;
        NetHelper_1.currentMessage["noHeader"] = true;
        HttpSystem_1.default.instance.httpPost(url, message.param, null, JSON.stringify(header)).then(function(msg) {
          cc.log(message.messageApi + "\u8bf7\u6c42\u8fd4\u56de", msg);
          msg && 200 == msg.code || NetHelper_1.onError && NetHelper_1.onError("\u8bf7\u6c42\u9519\u8bef", msg, msg);
          NetHelper_1.dispatcher(message.messageApi, msg);
        });
      };
      NetHelper.dispatcher = function(api, msg) {
        var cb = NetHelper_1.cbMap.get(api);
        if (cb) {
          cb(api, msg);
          NetHelper_1.cbMap.delete(api);
        }
      };
      NetHelper.tryAgain = function() {
        if (NetHelper_1.currentMessage["noHeader"]) {
          NetHelper_1.sendMessageWithOutToken(NetHelper_1.currentMessage);
          return;
        }
        NetHelper_1.sendMessage(NetHelper_1.currentMessage);
      };
      NetHelper.onError = function(states, message, response) {
        var api = NetHelper_1.currentMessage.messageApi;
        var cb = NetHelper_1.cbMap.get(api);
        if (cb) {
          cb(api, response);
          NetHelper_1.cbMap.delete(api);
        }
        NetHelper_1.onErrorCb(states, message, response);
      };
      NetHelper.formatUrl = function(api) {
        return "" + NetHelper_1._hostUrl + api;
      };
      var NetHelper_1;
      NetHelper.cbMap = new Map();
      NetHelper = NetHelper_1 = __decorate([ ccclass ], NetHelper);
      return NetHelper;
    }();
    exports.default = NetHelper;
    cc._RF.pop();
  }, {
    "../system/net/http/HttpSystem": "HttpSystem",
    "./ModelManager": "ModelManager",
    "./NativeInfo": "NativeInfo"
  } ],
  NumberUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92627HTqdBP+KuAUy9oYEiS", "NumberUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NumberUtils = void 0;
    var NumberUtils = function() {
      function NumberUtils() {}
      NumberUtils.random = function(lower, upper) {
        var range = upper - lower + 1;
        return Math.floor(Math.random() * range) + lower;
      };
      NumberUtils.randomf = function(lower, upper) {
        return Math.random() * (upper - lower) + lower;
      };
      NumberUtils.floatSub = function(arg1, arg2) {
        var r1, r2, m, n;
        try {
          r1 = arg1.toString().split(".")[1].length;
        } catch (e) {
          r1 = 0;
        }
        try {
          r2 = arg2.toString().split(".")[1].length;
        } catch (e) {
          r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        n = r1 >= r2 ? r1 : r2;
        var result = (arg1 * m - arg2 * m) / m;
        var tmp = result.toFixed(n);
        return parseFloat(tmp);
      };
      NumberUtils.floatMul = function(arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
          m += s1.split(".")[1].length;
        } catch (e) {}
        try {
          m += s2.split(".")[1].length;
        } catch (e) {}
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
      };
      NumberUtils.floatDiv = function(arg1, arg2) {
        var t1 = 0, t2 = 0, r1, r2;
        try {
          t1 = arg1.toString().split(".")[1].length;
        } catch (e) {}
        try {
          t2 = arg2.toString().split(".")[1].length;
        } catch (e) {}
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return r1 / r2 * Math.pow(10, t2 - t1);
      };
      NumberUtils.floatTok = function(arg1) {
        if (arg1 < 1e3) return arg1.toString();
        var t1 = Math.floor(arg1 / 1e3);
        var t2 = Math.floor(arg1 % 1e3 / 100);
        if (t2 > 0) return t1 + "." + t2 + "k";
        return t1 + "k";
      };
      NumberUtils.floatSqrt = function(arg1, arg2, arg3, arg4) {
        var len = Math.sqrt(arg1 * arg1 + arg2 * arg2);
        var mul = arg3 + arg4 / len;
        return mul;
      };
      return NumberUtils;
    }();
    exports.NumberUtils = NumberUtils;
    cc._RF.pop();
  }, {} ],
  ParseTemplateUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da24fR3/RFNspQ/Sa4cj6kX", "ParseTemplateUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ParseTemplateUtils = void 0;
    var ParseTemplateUtils = function() {
      function ParseTemplateUtils() {}
      ParseTemplateUtils.parseSrt = function(srtText) {
        var data = [];
        function ToSeconds(t) {
          var s = 0;
          if (t) {
            var p = t.split(":");
            for (var i = 0; i < p.length; i++) s = 60 * s + parseFloat(p[i].replace(",", "."));
          }
          return s;
        }
        var json = srtText;
        json.split(/\n\s\n/).filter(function(item) {
          return "" != item;
        }).map(function(item, index) {
          var textItem = item.split(/\n/);
          data.push({
            index: index,
            sort: textItem[0],
            text: textItem[2],
            translate: textItem[3],
            startTime: ToSeconds(textItem[1].split(" --\x3e ")[0]),
            endTime: ToSeconds(textItem[1].split(" --\x3e ")[1]),
            timeLine: textItem[1],
            isShow: false
          });
        });
        return data;
      };
      return ParseTemplateUtils;
    }();
    exports.ParseTemplateUtils = ParseTemplateUtils;
    cc._RF.pop();
  }, {} ],
  PlatformSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4743emM2i9MOKnK2wo48iMC", "PlatformSystem");
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
    var AndroidAdapter_1 = require("./AndroidAdapter");
    var IosAdapter_1 = require("./IosAdapter");
    var WebAdapter_1 = require("./WebAdapter");
    var ASystem_1 = require("../../system/interface/ASystem");
    var DebuggerAdapter_1 = require("./DebuggerAdapter");
    var PlatformSystem = function(_super) {
      __extends(PlatformSystem, _super);
      function PlatformSystem() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(PlatformSystem.prototype, "isBrowser", {
        get: function() {
          return cc.sys.isBrowser;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isWXBrowser", {
        get: function() {
          return this.isBrowser && cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isSafariBrowser", {
        get: function() {
          return this.isBrowser && cc.sys.browserType === cc.sys.BROWSER_TYPE_SAFARI;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isNative", {
        get: function() {
          return cc.sys.isNative;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isDebug", {
        get: function() {
          return this.adapter instanceof DebuggerAdapter_1.default;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isWeChat", {
        get: function() {
          return cc.sys.platform === cc.sys.WECHAT_GAME;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isAndroid", {
        get: function() {
          return cc.sys.os === cc.sys.OS_ANDROID;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isIOS", {
        get: function() {
          return cc.sys.os === cc.sys.OS_IOS;
        },
        enumerable: false,
        configurable: true
      });
      PlatformSystem.prototype.init = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            this.isWeChat || (this.isBrowser ? window.location.href.indexOf("localhost:") > -1 ? this.adapter = new DebuggerAdapter_1.default() : this.adapter = new WebAdapter_1.default() : this.isNative && (this.isAndroid ? this.adapter = new AndroidAdapter_1.default() : this.isIOS && (this.adapter = new IosAdapter_1.default())));
            return [ 2, Promise.resolve() ];
          });
        });
      };
      PlatformSystem.prototype.release = function() {
        this.adapter = null;
        PlatformSystem._instance = null;
      };
      Object.defineProperty(PlatformSystem, "instance", {
        get: function() {
          null == PlatformSystem._instance && (PlatformSystem._instance = new PlatformSystem());
          return PlatformSystem._instance;
        },
        enumerable: false,
        configurable: true
      });
      return PlatformSystem;
    }(ASystem_1.default);
    exports.default = PlatformSystem;
    cc._RF.pop();
  }, {
    "../../system/interface/ASystem": "ASystem",
    "./AndroidAdapter": "AndroidAdapter",
    "./DebuggerAdapter": "DebuggerAdapter",
    "./IosAdapter": "IosAdapter",
    "./WebAdapter": "WebAdapter"
  } ],
  Point: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4a6d2z9CpPH4V8iQpxHVOY", "Point");
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
  PoolUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c599T5P4NMb4Zc3/dSQ6y8", "PoolUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PoolUtils = void 0;
    var LogSystem_1 = require("../system/log/LogSystem");
    var PoolUtils = function() {
      function PoolUtils() {}
      PoolUtils.initPool = function(type, className, num) {
        null == this.poolArray[type] && (this.poolArray[type] = new Array());
        this.classArray[type] = className;
        for (var i = 0; i < num; i++) {
          var object = new className();
          this.poolArray[type].push(object);
        }
        LogSystem_1.default.log("\u521d\u59cb\u5316" + type + "\u6570\u91cf\uff1a" + this.poolArray[type].length);
      };
      PoolUtils.getPool = function(type) {
        if (this.poolArray[type].length > 0) {
          var object = this.poolArray[type].shift();
          return object;
        }
        return new this.classArray[type]();
      };
      PoolUtils.putPool = function(type, object) {
        object && this.poolArray[type].push(object);
      };
      PoolUtils.clear = function(type) {
        while (this.poolArray[type] && this.poolArray[type].length > 0) {
          var object = this.poolArray[type].shift();
          object.parent = null;
        }
      };
      PoolUtils.clearAll = function() {
        if (this.poolArray) for (var key in this.poolArray) if (this.poolArray.hasOwnProperty(key)) {
          var pool = this.poolArray[key];
          while (pool && pool.length > 0) {
            var object = pool.shift();
            object.parent = null;
          }
        }
        this.poolArray = {};
        this.classArray = [];
      };
      PoolUtils.poolArray = {};
      PoolUtils.classArray = [];
      return PoolUtils;
    }();
    exports.PoolUtils = PoolUtils;
    cc._RF.pop();
  }, {
    "../system/log/LogSystem": "LogSystem"
  } ],
  PopupBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65524KGmehEAIqQd+LPqers", "PopupBase");
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
    var PopupBase = function(_super) {
      __extends(PopupBase, _super);
      function PopupBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.background = null;
        _this.main = null;
        _this.animDuration = .3;
        _this.blocker = null;
        _this.options = null;
        _this.finishCallback = null;
        return _this;
      }
      PopupBase.prototype.show = function(options, duration) {
        var _this = this;
        void 0 === duration && (duration = this.animDuration);
        return new Promise(function(res) {
          _this.options = options;
          var background = _this.background;
          var main = _this.main;
          _this.node.active = true;
          background.active = true;
          background.opacity = 0;
          main.active = true;
          main.scale = .5;
          main.opacity = 0;
          _this.init(_this.options);
          _this.updateDisplay(_this.options);
          cc.tween(background).to(.8 * duration, {
            opacity: 200
          }).start();
          cc.tween(main).to(duration, {
            scale: 1,
            opacity: 255
          }, {
            easing: "backOut"
          }).call(function() {
            _this.onShow && _this.onShow();
            res();
          }).start();
        });
      };
      PopupBase.prototype.hide = function(suspended, duration) {
        var _this = this;
        void 0 === suspended && (suspended = false);
        void 0 === duration && (duration = this.animDuration);
        return new Promise(function(res) {
          var node = _this.node;
          if (0 !== duration) {
            var blocker = _this.blocker;
            if (!blocker) {
              blocker = _this.blocker = new cc.Node("blocker");
              blocker.addComponent(cc.BlockInputEvents);
              blocker.setParent(node);
              blocker.setContentSize(node.getContentSize());
            }
            blocker.active = true;
          }
          cc.tween(_this.background).delay(.2 * duration).to(.8 * duration, {
            opacity: 0
          }).start();
          cc.tween(_this.main).to(duration, {
            scale: .5,
            opacity: 0
          }, {
            easing: "backIn"
          }).call(function() {
            _this.blocker && (_this.blocker.active = false);
            node.active = false;
            _this.onHide && _this.onHide(suspended);
            res();
            _this.finishCallback && _this.finishCallback(suspended);
          }).start();
        });
      };
      PopupBase.prototype.init = function(options) {};
      PopupBase.prototype.updateDisplay = function(options) {};
      PopupBase.prototype.onShow = function() {};
      PopupBase.prototype.onHide = function(suspended) {};
      PopupBase.prototype.setFinishCallback = function(callback) {
        this.finishCallback = callback;
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: false
      }) ], PopupBase.prototype, "background", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: false
      }) ], PopupBase.prototype, "main", void 0);
      PopupBase = __decorate([ ccclass ], PopupBase);
      return PopupBase;
    }(cc.Component);
    exports.default = PopupBase;
    cc._RF.pop();
  }, {} ],
  PopupManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0ab60zCe9NDL/sj3r/zyvp", "PopupManager");
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
    exports.PopupParams = exports.PopupShowResult = exports.PopupCacheMode = void 0;
    var PopupBase_1 = require("./PopupBase");
    var PopupCacheMode;
    (function(PopupCacheMode) {
      PopupCacheMode[PopupCacheMode["Once"] = 1] = "Once";
      PopupCacheMode[PopupCacheMode["Normal"] = 2] = "Normal";
      PopupCacheMode[PopupCacheMode["Frequent"] = 3] = "Frequent";
    })(PopupCacheMode = exports.PopupCacheMode || (exports.PopupCacheMode = {}));
    var PopupShowResult;
    (function(PopupShowResult) {
      PopupShowResult[PopupShowResult["Done"] = 1] = "Done";
      PopupShowResult[PopupShowResult["Failed"] = 2] = "Failed";
      PopupShowResult[PopupShowResult["Waiting"] = 3] = "Waiting";
    })(PopupShowResult = exports.PopupShowResult || (exports.PopupShowResult = {}));
    var PopupManager = function() {
      function PopupManager() {}
      Object.defineProperty(PopupManager, "prefabCache", {
        get: function() {
          return this._prefabCache;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PopupManager, "nodeCache", {
        get: function() {
          return this._nodeCache;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PopupManager, "current", {
        get: function() {
          return this._current;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PopupManager, "queue", {
        get: function() {
          return this._queue;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PopupManager, "suspended", {
        get: function() {
          return this._suspended;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PopupManager, "CacheMode", {
        get: function() {
          return PopupCacheMode;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PopupManager, "ShowResult", {
        get: function() {
          return PopupShowResult;
        },
        enumerable: false,
        configurable: true
      });
      PopupManager.show = function(targetNode, options, params) {
        var _this = this;
        var path = targetNode.uuid;
        targetNode.active || (targetNode.active = true);
        this._nodeCache.has(path) || this._nodeCache.set(path, targetNode);
        return new Promise(function(res) {
          return __awaiter(_this, void 0, void 0, function() {
            var node, prefab, popup, finishCallback;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                params = this.parseParams(params);
                if (!(this._current || this.locked)) return [ 3, 3 ];
                if (!(params && params.immediately)) return [ 3, 2 ];
                this.locked = false;
                return [ 4, this.suspend() ];

               case 1:
                _a.sent();
                return [ 3, 3 ];

               case 2:
                this.push(targetNode, options, params);
                res(PopupShowResult.Waiting);
                return [ 2 ];

               case 3:
                this._current = {
                  path: targetNode,
                  options: options,
                  params: params
                };
                node = this.getNodeFromCache(path);
                if (!!cc.isValid(node)) return [ 3, 5 ];
                this.loadStartCallback && this.loadStartCallback();
                return [ 4, this.load(path) ];

               case 4:
                prefab = _a.sent();
                this.loadFinishCallback && this.loadFinishCallback();
                if (!cc.isValid(prefab)) {
                  cc.warn("[PopupManager]", "\u5f39\u7a97\u52a0\u8f7d\u5931\u8d25", path);
                  this._current = null;
                  res(PopupShowResult.Failed);
                  return [ 2 ];
                }
                node = cc.instantiate(prefab);
                _a.label = 5;

               case 5:
                popup = node.getComponent(PopupBase_1.default);
                if (!popup) {
                  cc.warn("[PopupManager]", "\u672a\u627e\u5230\u5f39\u7a97\u7ec4\u4ef6", path);
                  this._current = null;
                  res(PopupShowResult.Failed);
                  return [ 2 ];
                }
                this._current.popup = popup;
                this._current.node = node;
                node.setParent(this.container || cc.Canvas.instance.node);
                node.setSiblingIndex(cc.macro.MAX_ZINDEX);
                finishCallback = function(suspended) {
                  return __awaiter(_this, void 0, void 0, function() {
                    var _this = this;
                    return __generator(this, function(_a) {
                      switch (_a.label) {
                       case 0:
                        if (suspended) return [ 2 ];
                        this.locked = this._suspended.length > 0 || this._queue.length > 0;
                        this.recycle(path, node, params.mode);
                        this._current = null;
                        res(PopupShowResult.Done);
                        return [ 4, new Promise(function(_res) {
                          cc.Canvas.instance.scheduleOnce(_res, _this.interval);
                        }) ];

                       case 1:
                        _a.sent();
                        this.next();
                        return [ 2 ];
                      }
                    });
                  });
                };
                popup.setFinishCallback(finishCallback);
                popup.show(options);
                return [ 2 ];
              }
            });
          });
        });
      };
      PopupManager.hide = function() {
        this._current.popup && this._current.popup.hide();
      };
      PopupManager.getNodeFromCache = function(path) {
        var nodeCache = this._nodeCache;
        if (nodeCache.has(path)) {
          var node = nodeCache.get(path);
          if (cc.isValid(node)) return node;
          nodeCache.delete(path);
        }
        var prefabCache = this._prefabCache;
        if (prefabCache.has(path)) {
          var prefab = prefabCache.get(path);
          if (cc.isValid(prefab)) return cc.instantiate(prefab);
          prefabCache.delete(path);
        }
        return null;
      };
      PopupManager.next = function() {
        if (this._current || 0 === this._suspended.length && 0 === this._queue.length) return;
        var request = null;
        request = this._suspended.length > 0 ? this._suspended.shift() : this._queue.shift();
        this.locked = false;
        if (cc.isValid(request.popup)) {
          this._current = request;
          request.popup.show(request.options);
          return;
        }
        this.show(request.path, request.options, request.params);
      };
      PopupManager.push = function(path, options, params) {
        if (!this._current && !this.locked) {
          this.show(path, options, params);
          return;
        }
        this._queue.push({
          path: path,
          options: options,
          params: params
        });
        this._queue.sort(function(a, b) {
          return a.params.priority - b.params.priority;
        });
      };
      PopupManager.suspend = function() {
        return __awaiter(this, void 0, void 0, function() {
          var request;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!this._current) return [ 2 ];
              request = this._current;
              this._suspended.push(request);
              return [ 4, request.popup.hide(true) ];

             case 1:
              _a.sent();
              this._current = null;
              return [ 2 ];
            }
          });
        });
      };
      PopupManager.recycle = function(path, node, mode) {
        switch (mode) {
         case PopupCacheMode.Once:
          node.destroy();
          this._nodeCache.delete(path);
          this.release(path);
          break;

         case PopupCacheMode.Normal:
          node.destroy();
          this._nodeCache.delete(path);
          break;

         case PopupCacheMode.Frequent:
          node.removeFromParent(false);
          this._nodeCache.set(path, node);
        }
      };
      PopupManager.load = function(path) {
        var _this = this;
        return new Promise(function(res) {
          var prefabMap = _this._prefabCache;
          if (prefabMap.has(path)) {
            var prefab = prefabMap.get(path);
            if (cc.isValid(prefab)) {
              res(prefab);
              return;
            }
            prefabMap.delete(path);
          }
          cc.resources.load(path, function(error, prefab) {
            if (error) {
              res(null);
              return;
            }
            prefabMap.set(path, prefab);
            prefab.addRef();
            res(prefab);
          });
        });
      };
      PopupManager.release = function(path) {
        var nodeCache = this._nodeCache;
        var node = nodeCache.get(path);
        if (node) {
          nodeCache.delete(path);
          cc.isValid(node) && node.destroy();
          node = null;
        }
        var prefabCache = this._prefabCache;
        var prefab = prefabCache.get(path);
        if (prefab) {
          prefabCache.delete(path);
          prefab.decRef();
          prefab = null;
        }
      };
      PopupManager.parseParams = function(params) {
        if (void 0 == params) return new PopupParams();
        if ("[object Object]" !== Object.prototype.toString.call(params)) {
          cc.warn("[PopupManager]", "\u5f39\u7a97\u53c2\u6570\u65e0\u6548\uff0c\u4f7f\u7528\u9ed8\u8ba4\u53c2\u6570");
          return new PopupParams();
        }
        void 0 == params.mode && (params.mode = PopupCacheMode.Normal);
        void 0 == params.priority && (params.priority = 0);
        void 0 == params.immediately && (params.immediately = false);
        return params;
      };
      PopupManager._prefabCache = new Map();
      PopupManager._nodeCache = new Map();
      PopupManager._current = null;
      PopupManager._queue = [];
      PopupManager._suspended = [];
      PopupManager.locked = false;
      PopupManager.container = null;
      PopupManager.interval = .05;
      PopupManager.cacheMode = PopupCacheMode;
      PopupManager.showResult = PopupShowResult;
      PopupManager.Base = PopupBase_1.default;
      PopupManager.loadStartCallback = null;
      PopupManager.loadFinishCallback = null;
      return PopupManager;
    }();
    exports.default = PopupManager;
    var PopupParams = function() {
      function PopupParams() {
        this.mode = PopupCacheMode.Normal;
        this.priority = 0;
        this.immediately = false;
      }
      return PopupParams;
    }();
    exports.PopupParams = PopupParams;
    cc._RF.pop();
  }, {
    "./PopupBase": "PopupBase"
  } ],
  PrefabLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94ded61QABOMp9HIHNJkChL", "PrefabLoader");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PrefabLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var PrefabLoader = function(_super) {
      __extends(PrefabLoader, _super);
      function PrefabLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PrefabLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      PrefabLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("PrefabLoader loadRemoteRes method not implemented.");
      };
      PrefabLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return PrefabLoader;
    }(BaseLoader_1.default);
    exports.PrefabLoader = PrefabLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  ProgressBar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "14cfdHR4mtLcqad8O4PG+Iz", "ProgressBar");
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
    var kit_1 = require("../../../kit/kit");
    var config_1 = require("./config/config");
    var Events_1 = require("./Events");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ProgressBar = function(_super) {
      __extends(ProgressBar, _super);
      function ProgressBar() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bar = null;
        _this.showIndex = 1;
        return _this;
      }
      ProgressBar.prototype.onLoad = function() {
        this.init();
        kit_1.kit.manager.Event.on(Events_1.default.GAME_STAGE_COMPLETE, this.onStageComplete, this);
        kit_1.kit.manager.Event.on(Events_1.default.GAME_SCORE, this.onScore, this);
      };
      ProgressBar.prototype.onDestroy = function() {
        kit_1.kit.manager.Event.off(Events_1.default.GAME_STAGE_COMPLETE, this.onStageComplete, this);
        kit_1.kit.manager.Event.off(Events_1.default.GAME_SCORE, this.onScore, this);
      };
      ProgressBar.prototype.init = function() {
        this.hideAllLevel();
        this.hideAllItem(1);
        this.currentLevelNode = this.node.getChildByName("level1");
        this.currentLevelNode.active = true;
        this.bar.progress = 0;
      };
      ProgressBar.prototype.move2Bottom = function(list) {
        var _this = this;
        this.scheduleOnce(function() {
          var effectTime = 1;
          list.forEach(function(element, index) {
            element.active = true;
            var p = config_1.default.COMPLETE_STAGE_POINTS[index];
            var targetPoint = new cc.Vec3(p.x, p.y);
            cc.tween(element).to(effectTime, {
              position: targetPoint
            }).start();
          });
          cc.tween(_this).delay(2.5).call(function() {
            list.forEach(function(element) {
              element.active = false;
            });
          });
          kit_1.kit.system.timer.doOnce(1e3 * effectTime, function() {
            kit_1.kit.manager.Event.emit(Events_1.default.FRUIT_DOWN_COMPLETE);
          });
        }, .3);
      };
      ProgressBar.prototype.onStageComplete = function(event) {
        var _this = this;
        var level = event.data.level;
        var node = this.node.getChildByName("level" + level);
        node.active = true;
        var list = [];
        for (var i = 1; i < 4; i++) {
          var item = node.getChildByName("itemBg" + i).getChildByName("item");
          item.active = false;
          list.push(item);
        }
        this.move2Bottom(list);
        kit_1.kit.system.timer.doOnce(3e3, function() {
          _this.updateLevel(level);
        });
      };
      ProgressBar.prototype.onScore = function(event) {
        var index = event.data.index;
        this.updateProgress(index);
      };
      ProgressBar.prototype.updateProgress = function(index) {
        var item = this.currentLevelNode.getChildByName("itemBg" + index).getChildByName("item");
        item.active = true;
        var target = 0;
        switch (index) {
         case 1:
          target = 0;
          break;

         case 2:
          target = .5;
          break;

         case 3:
          target = 1;
        }
        cc.tween(this.bar).to(.2, {
          progress: target
        }).start();
      };
      ProgressBar.prototype.updateLevel = function(level) {
        this.hideAllItem(level);
        if (level + 1 <= config_1.default.LEVEN_NUMBER) {
          this.hideAllItem(level + 1);
          this.currentLevelNode.active = false;
          this.currentLevelNode = this.node.getChildByName("level" + (level + 1));
          this.currentLevelNode.active = true;
          this.bar.progress = 0;
        }
      };
      ProgressBar.prototype.hideAllItem = function(level) {
        var node = this.node.getChildByName("level" + level);
        for (var i = 1; i < 4; i++) node.getChildByName("itemBg" + i).getChildByName("item").active = false;
      };
      ProgressBar.prototype.hideAllLevel = function() {
        for (var i = 1; i < 4; i++) this.node.getChildByName("level" + i).active = false;
      };
      __decorate([ property(cc.ProgressBar) ], ProgressBar.prototype, "bar", void 0);
      ProgressBar = __decorate([ ccclass ], ProgressBar);
      return ProgressBar;
    }(cc.Component);
    exports.default = ProgressBar;
    cc._RF.pop();
  }, {
    "../../../kit/kit": "kit",
    "./Events": "Events",
    "./config/config": "config"
  } ],
  ResLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9517KrtnRIAJiy71MuqMVW", "ResLoader");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RemoteSpineData = void 0;
    var loader_index_1 = require("./base/loader-index");
    var LoaderObserver_1 = require("./LoaderObserver");
    var RemoteSpineData = function() {
      function RemoteSpineData() {}
      return RemoteSpineData;
    }();
    exports.RemoteSpineData = RemoteSpineData;
    var ResLoader = function() {
      function ResLoader() {}
      ResLoader.init = function() {
        if (!ResLoader._init) {
          ResLoader._defaultMap = new Map();
          ResLoader._defaultMap.set(cc.SpriteFrame, new loader_index_1.ImageLoader());
          ResLoader._defaultMap.set(cc.SpriteAtlas, new loader_index_1.AtlasLoader());
          ResLoader._defaultMap.set(cc.AudioClip, new loader_index_1.AudioLoader());
          ResLoader._defaultMap.set(cc.JsonAsset, new loader_index_1.JsonLoader());
          ResLoader._defaultMap.set(cc.TextAsset, new loader_index_1.TextLoader());
          ResLoader._defaultMap.set(cc.Prefab, new loader_index_1.PrefabLoader());
          ResLoader._defaultMap.set(sp.SkeletonData, new loader_index_1.SpineLoader());
          ResLoader._defaultLoader = new loader_index_1.DefaultLoader();
        }
        ResLoader._init = true;
      };
      ResLoader.addObserver = function(observer) {
        ResLoader._observerList.push(observer);
      };
      ResLoader.removeObserver = function(observer) {
        for (var i = ResLoader._observerList.length - 1; i >= 0; i--) {
          var obs = ResLoader._observerList[i];
          if (obs === observer) {
            ResLoader._observerList.splice(i, 1);
            return true;
          }
        }
        return false;
      };
      ResLoader.loadRes = function(path, options, onComplete, bundle, onProgress) {
        ResLoader.init();
        var curBundle = null;
        var tempType = null;
        if ("object" !== typeof options) {
          tempType = options;
          curBundle = bundle && "string" === typeof bundle && "" !== bundle ? cc.assetManager.getBundle(bundle) : bundle && "string" !== typeof bundle ? bundle : cc.resources;
          if (curBundle) {
            var as = curBundle.get(path, tempType);
            if (as) {
              ResLoader.__beforeLoadRes(new LoaderObserver_1.LoaderObserverParam(path, tempType, curBundle, 0, null));
              onComplete(null, as);
              ResLoader.__afterLoadRes(new LoaderObserver_1.LoaderObserverParam(path, tempType, curBundle, 0, null));
              return;
            }
          }
        }
        var param = new LoaderObserver_1.LoaderObserverParam(path, tempType, curBundle, 0, null);
        ResLoader.__beforeLoadRes(param);
        var loader = ResLoader._defaultMap.get(tempType);
        if (!loader) {
          "object" !== typeof options && cc.log("assets type: " + tempType + " is not exists, default loader insteaded!");
          loader = ResLoader._defaultLoader;
        }
        var startTime = new Date().getTime();
        loader.loadRes(path, options, function(_err, _res) {
          if (onComplete) {
            param.time = new Date().getTime() - startTime;
            ResLoader.__afterLoadRes(param);
            onComplete(_err, _res);
          }
        }, curBundle, onProgress);
      };
      ResLoader.__beforeLoadRes = function(param) {
        for (var _i = 0, _a = ResLoader._observerList; _i < _a.length; _i++) {
          var obs = _a[_i];
          obs.beforeLoadRes(param);
        }
      };
      ResLoader.__afterLoadRes = function(param) {
        for (var _i = 0, _a = ResLoader._observerList; _i < _a.length; _i++) {
          var obs = _a[_i];
          obs.afterLoadRes(param);
        }
      };
      ResLoader.loadDir = function(dir, type, onProgress, onComplete, bundle) {
        var curBundle = null;
        curBundle = bundle && "string" === typeof bundle && "" !== bundle ? cc.assetManager.getBundle(bundle) : bundle && "string" !== typeof bundle ? bundle : cc.resources;
        if (!curBundle) {
          onComplete(new Error("bundle " + bundle + " is not exists!"), null);
          return;
        }
        curBundle.loadDir(dir, type, onProgress, onComplete);
      };
      ResLoader.loadBundle = function(nameOrUrl, options, onComplete) {
        var param = new LoaderObserver_1.LoaderObserverParam(nameOrUrl, null, null, 0, null);
        var startTime = new Date().getTime();
        ResLoader.__beforeLoadBundle(param);
        cc.assetManager.loadBundle(nameOrUrl, options, function(_err, _bundle) {
          param.time = new Date().getTime() - startTime;
          ResLoader.__afterLoadBundle(param);
          onComplete && onComplete(_err, _bundle);
        });
      };
      ResLoader.__beforeLoadBundle = function(param) {
        for (var _i = 0, _a = ResLoader._observerList; _i < _a.length; _i++) {
          var obs = _a[_i];
          obs.beforeLoadBundle(param);
        }
      };
      ResLoader.__afterLoadBundle = function(param) {
        for (var _i = 0, _a = ResLoader._observerList; _i < _a.length; _i++) {
          var obs = _a[_i];
          obs.afterLoadBundle(param);
        }
      };
      ResLoader._defaultLoader = null;
      ResLoader._init = false;
      ResLoader._observerList = [];
      return ResLoader;
    }();
    exports.default = ResLoader;
    cc._RF.pop();
  }, {
    "./LoaderObserver": "LoaderObserver",
    "./base/loader-index": "loader-index"
  } ],
  ResourcesManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bbdb78lTVBGHYd598Y8rAB5", "ResourcesManager");
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
    exports.ResourceType = void 0;
    var ResLoader_1 = require("../framework/load/ResLoader");
    var LogSystem_1 = require("../system/log/LogSystem");
    var ResourceType;
    (function(ResourceType) {
      ResourceType[ResourceType["default"] = 0] = "default";
      ResourceType[ResourceType["Global"] = 1] = "Global";
      ResourceType[ResourceType["Normal"] = 2] = "Normal";
    })(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
    var Asset = function() {
      function Asset(resType) {
        this.assetMap = new Map();
        this.resType = resType;
      }
      Asset.prototype.loadBundle = function(bundleName) {
        var _this = this;
        return new Promise(function(reslove, reject) {
          ResLoader_1.default.loadBundle(bundleName, null, function(e, bundle) {
            if (e) {
              reject(e);
              return;
            }
            _this.bundle = bundle;
            reslove(bundle);
          });
        }).catch(function(e) {
          return cc.log(e);
        });
      };
      Asset.prototype.loadRes = function(path, type, finishCb) {
        var _this = this;
        if (this.assetMap.has(path)) {
          var asset = this.assetMap.get(path);
          finishCb && finishCb(null, asset);
          return;
        }
        ResLoader_1.default.loadRes(path, type, function(e, res) {
          _this.assetMap.set(path, res);
          if (finishCb) {
            finishCb(null, _this.assetMap.get(path));
            return;
          }
        }, this.bundle);
      };
      Asset.prototype.release = function(releaseComponents) {
        var _this = this;
        if ("components" == this.bundle.name && !releaseComponents) {
          cc.log("components \u4e0d\u91ca\u653e");
          return;
        }
        this.assetMap.forEach(function(res, key) {
          cc.log("\u91ca\u653e" + res.name);
          cc.assetManager.releaseAsset(res);
          _this.bundle.release(key);
        });
        this.assetMap.clear();
        if (this.resType == ResourceType.Global) return "";
        cc.log("\u91ca\u653ebundle" + this.bundle.name);
        cc.assetManager.removeBundle(this.bundle);
        return this.bundle.name;
      };
      Asset.prototype.releaseWithOutBundle = function(releaseComponents) {
        var _this = this;
        this.assetMap.forEach(function(res, key) {
          cc.log("\u91ca\u653e" + res.name);
          cc.assetManager.releaseAsset(res);
          _this.bundle.release(key);
        });
        this.assetMap.clear();
        if (this.resType == ResourceType.Global) return "";
        return this.bundle.name;
      };
      return Asset;
    }();
    var ResourcesManager = function() {
      function ResourcesManager() {
        this.assetsMap = new Map();
      }
      Object.defineProperty(ResourcesManager, "instance", {
        get: function() {
          ResourcesManager._instance || (ResourcesManager._instance = new ResourcesManager());
          return ResourcesManager._instance;
        },
        enumerable: false,
        configurable: true
      });
      ResourcesManager.prototype.loadRes = function(bundleName, resPath, resType, assetType, finishCb) {
        var _this = this;
        return new Promise(function(resolve, rej) {
          return __awaiter(_this, void 0, void 0, function() {
            var asset, assetClip;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                if ("" == bundleName || "" == resPath) {
                  LogSystem_1.default.error("ResourcesManager loadRes bundleName or resPath null");
                  rej();
                  return [ 2 ];
                }
                if (this.assetsMap.has(bundleName)) {
                  asset = this.assetsMap.get(bundleName);
                  asset.loadRes(resPath, assetType, function(e, res) {
                    finishCb && finishCb(e, res);
                    e ? rej(e) : resolve(res);
                  });
                  return [ 2 ];
                }
                assetClip = new Asset(resType);
                return [ 4, assetClip.loadBundle(bundleName) ];

               case 1:
                _a.sent();
                assetClip.loadRes(resPath, assetType, function(e, asset) {
                  _this.assetsMap.set(bundleName, assetClip);
                  finishCb && finishCb(e, asset);
                  e ? rej(e) : resolve(asset);
                });
                return [ 2 ];
              }
            });
          });
        }).catch(function(e) {
          return function() {
            finishCb && finishCb(e, null);
          };
        });
      };
      ResourcesManager.prototype.loadBundleList = function(nameList) {
        var list = [];
        for (var key in nameList) list.push(this.loadBundle(nameList[key]));
        return Promise.all(list).catch(function(e) {
          return cc.log(e);
        });
      };
      ResourcesManager.prototype.loadBundle = function(bundleName) {
        var _this = this;
        return new Promise(function(res, rej) {
          return __awaiter(_this, void 0, void 0, function() {
            var bundle, assetClip;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                if (this.assetsMap.has(bundleName)) {
                  bundle = this.assetsMap.get(bundleName).bundle;
                  res(bundle);
                  return [ 2 ];
                }
                assetClip = new Asset(ResourceType.Normal);
                this.assetsMap.set(bundleName, assetClip);
                return [ 4, assetClip.loadBundle(bundleName) ];

               case 1:
                _a.sent();
                res(assetClip.bundle);
                return [ 2 ];
              }
            });
          });
        }).catch(function(e) {
          cc.log(e);
        });
      };
      ResourcesManager.prototype.releaseAsset = function(bundleName, releaseComponents) {
        var _this = this;
        cc.log("\u91ca\u653e\u8d44\u6e90", bundleName);
        if (bundleName && "string" == typeof bundleName && "" != bundleName) {
          var element = this.assetsMap.get(bundleName);
          var releaseKey = element.release(releaseComponents);
          "" != releaseKey && this.assetsMap.delete(releaseKey);
          return;
        }
        if (bundleName && "object" == typeof bundleName) {
          bundleName.forEach(function(item) {
            var element = _this.assetsMap.get(item);
            var releaseKey = element.release(releaseComponents);
            "" != releaseKey && _this.assetsMap.delete(releaseKey);
          });
          return;
        }
        this.assetsMap.forEach(function(element) {
          var releaseKey = element.release(releaseComponents);
          "" != releaseKey && _this.assetsMap.delete(releaseKey);
        });
      };
      ResourcesManager.prototype.releaseRes = function(bundle) {
        if (bundle) {
          var element = this.assetsMap.get(bundle.name);
          if (!element) {
            cc.assetManager.removeBundle(bundle);
            return;
          }
          var releaseKey = element.releaseWithOutBundle();
          "" != releaseKey && this.assetsMap.delete(releaseKey);
          cc.log(this.assetsMap);
          cc.assetManager.removeBundle(bundle);
        }
      };
      return ResourcesManager;
    }();
    exports.default = ResourcesManager;
    cc._RF.pop();
  }, {
    "../framework/load/ResLoader": "ResLoader",
    "../system/log/LogSystem": "LogSystem"
  } ],
  SpineLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d362Ex089FuZ2W1Bto6zyc", "SpineLoader");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SpineLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var SpineLoader = function(_super) {
      __extends(SpineLoader, _super);
      function SpineLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SpineLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      SpineLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("TextLoader loadRemoteRes method not implemented.");
      };
      SpineLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return SpineLoader;
    }(BaseLoader_1.default);
    exports.SpineLoader = SpineLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  SpotSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc2d8071fdBRZ8IY2NIYLFr", "SpotSystem");
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
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PlatformSystem_1 = require("../../framework/platform/PlatformSystem");
    var StringUtils_1 = require("../../utils/StringUtils");
    var ASystem_1 = require("../interface/ASystem");
    var HttpSystem_1 = require("../net/http/HttpSystem");
    var SpotSystem = function(_super) {
      __extends(SpotSystem, _super);
      function SpotSystem() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(SpotSystem, "instance", {
        get: function() {
          null == SpotSystem._instance && (SpotSystem._instance = new SpotSystem());
          return SpotSystem._instance;
        },
        enumerable: false,
        configurable: true
      });
      SpotSystem.prototype.init = function(baseInfo, app_key) {
        var _this = this;
        return new Promise(function(res, rej) {
          SpotSystem.APP_KEY = app_key;
          _this.baseInfo = baseInfo;
          cc.log("init spot system, info: " + _this.baseInfo);
          res();
        });
      };
      SpotSystem.prototype.send = function(name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        this.sendHttp.apply(this, __spreadArrays([ name ], args));
      };
      SpotSystem.prototype.sendSdk = function(name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var str = name;
        args && (str = StringUtils_1.StringUtils.format.apply(StringUtils_1.StringUtils, __spreadArrays([ name ], args)));
        PlatformSystem_1.default.instance.adapter.callFunction(SpotSystem.LOG_EVENT, str, SpotSystem.packagePath);
      };
      SpotSystem.prototype.sendHttp = function(name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var str = name;
        args && (str = StringUtils_1.StringUtils.format.apply(StringUtils_1.StringUtils, __spreadArrays([ name ], args)));
        var obj = {
          api_key: SpotSystem.APP_KEY,
          events: [ __assign({
            event_type: str,
            time: Date.now()
          }, this.baseInfo) ]
        };
        HttpSystem_1.default.instance.httpPost(SpotSystem.HTTP_HOST, obj).catch(function(error) {
          cc.error(error);
        });
      };
      SpotSystem.prototype.release = function() {};
      SpotSystem.LOG_EVENT = "la_logEvent";
      SpotSystem.LOG_INIT = "la_logInitWithApiKey";
      SpotSystem.LOG_SET_USER_ID = "la_logUserId";
      SpotSystem.APP_KEY = "3437b23f038afa01e3c220886da2deda";
      SpotSystem.HTTP_HOST = "https://api2.amplitude.com/batch";
      SpotSystem.NAME_SPACE_IOS = "LaLogUtli";
      SpotSystem.NAME_SPACE_ANDROID = "amplitude/LaLogUtli";
      SpotSystem.packagePath = PlatformSystem_1.default.instance.isAndroid ? SpotSystem.NAME_SPACE_ANDROID : SpotSystem.NAME_SPACE_IOS;
      return SpotSystem;
    }(ASystem_1.default);
    exports.default = SpotSystem;
    cc._RF.pop();
  }, {
    "../../framework/platform/PlatformSystem": "PlatformSystem",
    "../../utils/StringUtils": "StringUtils",
    "../interface/ASystem": "ASystem",
    "../net/http/HttpSystem": "HttpSystem"
  } ],
  StateMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ed2fkV0QVDMp5ycnluyFMW", "StateMachine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StateMachine = function() {
      function StateMachine(owner) {
        this.m_pOwner = owner;
        this.m_pCurrentState = null;
        this.m_pPreviousState = null;
        this.m_pGlobalState = {};
      }
      StateMachine.prototype.release = function() {
        this.m_pCurrentState && this.m_pCurrentState.exit();
        if (this.m_pGlobalState) {
          for (var key in this.m_pGlobalState) {
            this.m_pGlobalState[key].exit();
            delete this.m_pGlobalState[key];
          }
          this.m_pGlobalState = null;
        }
      };
      StateMachine.prototype.AddGlobalState = function(state, data) {
        var newState = new state();
        newState.entity = this.m_pOwner;
        this.m_pGlobalState[state] = newState;
        newState.enter(data);
      };
      StateMachine.prototype.RemoveGlobalState = function(state) {
        if (this.m_pGlobalState[state]) {
          this.m_pGlobalState[state].exit();
          delete this.m_pGlobalState[state];
        }
      };
      StateMachine.prototype.Update = function(dt) {
        if (null !== this.m_pGlobalState) for (var key in this.m_pGlobalState) this.m_pGlobalState[key].execute(dt);
        null !== this.m_pCurrentState && this.m_pCurrentState.execute(dt);
      };
      StateMachine.prototype.Transition = function(onTransition) {
        this.m_pPreviousState = this.m_pCurrentState;
        var newState = onTransition(this.m_pPreviousState);
        this.m_pCurrentState = newState;
      };
      StateMachine.prototype.ChangeState = function(pNewState, data) {
        this.m_pCurrentState && this.m_pCurrentState.exit(this.m_pOwner);
        this.m_pPreviousState = this.m_pCurrentState;
        this.m_pCurrentState = new pNewState();
        this.m_pCurrentState.entity = this.m_pOwner;
        this.m_pCurrentState.enter(data);
      };
      StateMachine.prototype.HandleMessage = function(msg) {
        var _this = this;
        if (this.m_pCurrentState && this.m_pCurrentState.onMessage(this.m_pOwner, msg)) return true;
        this.m_pGlobalState && this.m_pGlobalState.forEach(function(element) {
          element.onMessage(_this.m_pOwner, msg);
        });
        return false;
      };
      StateMachine.prototype.RevertPreviousState = function() {
        this.ChangeState(this.m_pPreviousState);
      };
      StateMachine.prototype.isInState = function(state) {
        return this.m_pCurrentState instanceof state;
      };
      StateMachine.prototype.exitCurrentState = function(data) {
        this.CurrentState && this.CurrentState.exit(data);
        this.m_pCurrentState.entity = null;
        this.m_pPreviousState = null;
        this.m_pCurrentState = null;
      };
      Object.defineProperty(StateMachine.prototype, "CurrentState", {
        get: function() {
          return this.m_pCurrentState;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StateMachine.prototype, "GlobalState", {
        get: function() {
          return this.m_pGlobalState;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StateMachine.prototype, "PreviousState", {
        get: function() {
          return this.m_pPreviousState;
        },
        enumerable: false,
        configurable: true
      });
      return StateMachine;
    }();
    exports.default = StateMachine;
    cc._RF.pop();
  }, {} ],
  StringUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10e0cPtoFhLQrnPWdr+s0sS", "StringUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StringUtils = void 0;
    var StringUtils = function() {
      function StringUtils() {}
      StringUtils.format = function(sourceStr) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        if (0 === args.length) return sourceStr;
        var str = sourceStr;
        for (var i = 0; i < args.length; i++) str = str.replace(new RegExp("\\{" + i + "\\}", "g"), args[i]);
        return str;
      };
      StringUtils.replaceStr = function(fromIndex, len, sourceStr, replaceCode) {
        void 0 === replaceCode && (replaceCode = "*");
        var tempStr = "";
        var tempLen = sourceStr.length;
        for (var index = 0; index < tempLen; ++index) tempStr += index >= fromIndex && index < fromIndex + len ? replaceCode : sourceStr.charAt(index);
        return tempStr;
      };
      StringUtils.strLength = function(str) {
        if (void 0 === str) return 0;
        var len = 0;
        for (var i = 0; i < str.length; i++) {
          0 != (65280 & str.charCodeAt(i)) && len++;
          len++;
        }
        return len;
      };
      StringUtils.isEmpty = function(obj) {
        return "undefined" == typeof obj || null == obj || "" == obj;
      };
      StringUtils.moreText = function(text, max, moreText) {
        void 0 === moreText && (moreText = "...");
        return text.length > max ? text.substring(0, max - 2) + "..." : text;
      };
      return StringUtils;
    }();
    exports.StringUtils = StringUtils;
    cc._RF.pop();
  }, {} ],
  TIgoPoseState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0bba5LACylArYJdg21MzXGT", "TIgoPoseState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var TigoIdleState_1 = require("./TigoIdleState");
    var TigoPoseState = function() {
      function TigoPoseState() {}
      TigoPoseState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      TigoPoseState.prototype.enter = function(data) {
        var _this = this;
        this.entity.idleNode.active = true;
        this.entity.stageWinNode.active = false;
        this.entity.completeNode.active = false;
        this.entity.arm.active = false;
        var sp = this.entity.idleNode.getChildByName("L2_W0_day1_1_tigo_b").getComponent("sp.Skeleton");
        kit_1.kit.manager.Audio.playEffect("SE_zhuashuiguo01_ytz");
        sp.setAnimation(0, TigoPoseState.TICK_OUT, false);
        sp.setCompleteListener(function() {
          _this.entity.stateMachine.ChangeState(TigoIdleState_1.default);
        });
        return Promise.resolve();
      };
      TigoPoseState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      TigoPoseState.prototype.exit = function(data) {};
      TigoPoseState.IDLE = "L2_W0_day1_1_tigo_b_daiji";
      TigoPoseState.TICK_OUT = "L2_W0_day1_1_tigo_b_nachu";
      TigoPoseState.AIM = "L2_W0_day1_1_tigo_b_yaobai";
      return TigoPoseState;
    }();
    exports.default = TigoPoseState;
    cc._RF.pop();
  }, {
    "../../../../kit/kit": "kit",
    "./TigoIdleState": "TigoIdleState"
  } ],
  Telegram: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "47bfeF6+oRERLOxMnWfZ68h", "Telegram");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Telegram = function() {
      function Telegram(time, sender, receiver, msg, info) {
        void 0 === info && (info = null);
        this.SmallestDelay = .25;
        this.Sender = sender;
        this.Receiver = receiver;
        this.Msg = msg;
        this.DispatchTime = time;
        this.time = Date.now();
        this.ExtraInfo = info;
      }
      Object.defineProperty(Telegram.prototype, "sortSerial", {
        get: function() {
          return this.DispatchTime;
        },
        enumerable: false,
        configurable: true
      });
      return Telegram;
    }();
    exports.default = Telegram;
    cc._RF.pop();
  }, {} ],
  TextLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1cc64aIj0FHUaYPP588Fr5W", "TextLoader");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TextLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var TextLoader = function(_super) {
      __extends(TextLoader, _super);
      function TextLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      TextLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      TextLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("TextLoader loadRemoteRes method not implemented.");
      };
      TextLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return TextLoader;
    }(BaseLoader_1.default);
    exports.TextLoader = TextLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  TigoCompleteState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8067JvQDVGtY7MmaZhpS8H", "TigoCompleteState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var TigoCompleteState = function() {
      function TigoCompleteState() {}
      TigoCompleteState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      TigoCompleteState.prototype.enter = function(data) {
        var _this = this;
        this.entity.idleNode.active = false;
        this.entity.stageWinNode.active = false;
        this.entity.completeNode.active = true;
        this.entity.arm.active = false;
        kit_1.kit.manager.Audio.playEffect("SE_zhuashuiguo05_ytz");
        cc.tween(this.entity.node).to(3, {
          x: 1200
        }).call(function() {
          _this.entity.stateMachine.exitCurrentState();
        }).start();
        for (var i = 1; i < 4; i++) this.entity.node.getChildByName("logo").getChildByName("box" + i).active = false;
        return Promise.resolve();
      };
      TigoCompleteState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      TigoCompleteState.prototype.exit = function(data) {
        window.webframe.Notify.trigger("entryMenu", true);
      };
      return TigoCompleteState;
    }();
    exports.default = TigoCompleteState;
    cc._RF.pop();
  }, {
    "../../../../kit/kit": "kit"
  } ],
  TigoGloabelState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db76a3Bb6JO04IVUO6gEk5b", "TigoGloabelState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var Events_1 = require("../Events");
    var TigoWinState_1 = require("./TigoWinState");
    var TigoGlobalState = function() {
      function TigoGlobalState() {}
      TigoGlobalState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      TigoGlobalState.prototype.enter = function(data) {
        kit_1.kit.manager.Event.on(Events_1.default.GAME_STAGE_COMPLETE, this.onStageComplete, this);
        return Promise.resolve();
      };
      TigoGlobalState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      TigoGlobalState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.off(Events_1.default.GAME_STAGE_COMPLETE, this.onStageComplete, this);
      };
      TigoGlobalState.prototype.onStageComplete = function(event) {
        var _this = this;
        var level = event.data.level;
        kit_1.kit.system.timer.doOnce(3e3, function() {
          _this.entity.node.getChildByName("logo").getChildByName("box" + level).getChildByName("item").active = true;
        });
        this.entity.stateMachine.ChangeState(TigoWinState_1.default, {
          level: level
        });
      };
      TigoGlobalState.prototype.onScore = function(event) {
        var level = event.data.level;
      };
      return TigoGlobalState;
    }();
    exports.default = TigoGlobalState;
    cc._RF.pop();
  }, {
    "../../../../kit/kit": "kit",
    "../Events": "Events",
    "./TigoWinState": "TigoWinState"
  } ],
  TigoGrabState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8e10hwuxFIF40MQtJYt2pS", "TigoGrabState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var Arm_1 = require("../Arm");
    var ArmOutState_1 = require("../arm/ArmOutState");
    var Events_1 = require("../Events");
    var TigoIdleState_1 = require("./TigoIdleState");
    var TigoGrabState = function() {
      function TigoGrabState() {}
      TigoGrabState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      TigoGrabState.prototype.enter = function(data) {
        this.entity.idleNode.active = true;
        this.entity.stageWinNode.active = false;
        this.entity.completeNode.active = false;
        this.arm = this.entity.arm.getComponent(Arm_1.default);
        this.arm.stateMachine.ChangeState(ArmOutState_1.default);
        kit_1.kit.manager.Event.on(Events_1.default.GRAB_ACTION_COMPLETE, this.crabComplete, this);
        return Promise.resolve();
      };
      TigoGrabState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      TigoGrabState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.on(Events_1.default.GRAB_ACTION_COMPLETE, this.crabComplete, this);
      };
      TigoGrabState.prototype.crabComplete = function(event) {
        this.entity.stateMachine.ChangeState(TigoIdleState_1.default);
      };
      return TigoGrabState;
    }();
    exports.default = TigoGrabState;
    cc._RF.pop();
  }, {
    "../../../../kit/kit": "kit",
    "../Arm": "Arm",
    "../Events": "Events",
    "../arm/ArmOutState": "ArmOutState",
    "./TigoIdleState": "TigoIdleState"
  } ],
  TigoGuideState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0dc6gzq2hDsq//a9uUb/jk", "TigoGuideState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var Events_1 = require("../Events");
    var TigoGrabState_1 = require("./TigoGrabState");
    var TigoGuideState = function() {
      function TigoGuideState() {}
      TigoGuideState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      TigoGuideState.prototype.enter = function(data) {
        var _this = this;
        kit_1.kit.system.timer.doOnce(6550, function() {
          kit_1.kit.manager.Audio.playEffect("pleaseTap");
          kit_1.kit.manager.Event.emit(Events_1.default.GAME_STOP);
          _this.entity.guide.active = true;
          _this.entity.guide.on(cc.Node.EventType.TOUCH_START, _this.onTouch, _this);
        }, this);
        return Promise.resolve();
      };
      TigoGuideState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      TigoGuideState.prototype.exit = function(data) {
        this.entity.guide.active = false;
        kit_1.kit.manager.Event.emit(Events_1.default.GAME_STAR);
        this.entity.guide.off(cc.Node.EventType.TOUCH_START, this.onTouch, this);
      };
      TigoGuideState.prototype.onTouch = function() {
        this.entity.stateMachine.RemoveGlobalState(TigoGuideState);
        this.entity.stateMachine.ChangeState(TigoGrabState_1.default);
        kit_1.kit.manager.Event.emit(Events_1.default.GAME_GUID_COMPLETE);
      };
      return TigoGuideState;
    }();
    exports.default = TigoGuideState;
    cc._RF.pop();
  }, {
    "../../../../kit/kit": "kit",
    "../Events": "Events",
    "./TigoGrabState": "TigoGrabState"
  } ],
  TigoIdleState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f1f7cqQgBlCpLLgZSNPqEfm", "TigoIdleState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TigoGrabState_1 = require("./TigoGrabState");
    var TigoIdleState = function() {
      function TigoIdleState() {}
      TigoIdleState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      TigoIdleState.prototype.enter = function(data) {
        this.entity.idleNode.active = true;
        this.entity.stageWinNode.active = false;
        this.entity.completeNode.active = false;
        this.entity.arm.active = false;
        this.entity.arm.active = true;
        this.entity.node.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
        return Promise.resolve();
      };
      TigoIdleState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      TigoIdleState.prototype.exit = function(data) {
        this.entity.node.off(cc.Node.EventType.TOUCH_START, this.onTouch, this);
      };
      TigoIdleState.prototype.onTouch = function(event) {
        this.entity.stateMachine.ChangeState(TigoGrabState_1.default);
      };
      TigoIdleState.IDLE = "L2_W0_day1_1_tigo_b_daiji";
      TigoIdleState.TICK_OUT = "L2_W0_day1_1_tigo_b_nachu";
      TigoIdleState.AIM = "L2_W0_day1_1_tigo_b_yaobai";
      return TigoIdleState;
    }();
    exports.default = TigoIdleState;
    cc._RF.pop();
  }, {
    "./TigoGrabState": "TigoGrabState"
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
  TigoWinState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6c696HlZMFF1aewkwahXPpV", "TigoWinState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var Events_1 = require("../Events");
    var TigoCompleteState_1 = require("./TigoCompleteState");
    var TIgoPoseState_1 = require("./TIgoPoseState");
    var TigoWinState = function() {
      function TigoWinState() {}
      TigoWinState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      TigoWinState.prototype.enter = function(data) {
        var _this = this;
        this.entity.idleNode.active = false;
        this.entity.stageWinNode.active = true;
        this.entity.completeNode.active = false;
        this.entity.arm.active = false;
        var sp = this.entity.stageWinNode.getChildByName("L2_W0_day1_1_tigo_z").getComponent("sp.Skeleton");
        var sp2 = this.entity.stageWinNode.getChildByName("L2_W0_day1_1_hopper_z").getComponent("sp.Skeleton");
        if (!data || data.level < 3) {
          sp.setAnimation(0, TigoWinState.IDLE, true);
          sp2.setAnimation(0, "L2_W0_day1_1_hopper_z_daiji", true);
          kit_1.kit.system.timer.doOnce(1e3, function() {
            sp.setAnimation(0, TigoWinState.HAPPY, true);
            sp2.setAnimation(0, "L2_W0_day1_1_hopper_z_huahu", true);
            kit_1.kit.system.timer.doOnce(3e3, function() {
              _this.entity.stateMachine.ChangeState(TIgoPoseState_1.default);
            });
          });
        } else {
          sp.setAnimation(0, TigoWinState.IDLE, true);
          sp2.setAnimation(0, "L2_W0_day1_1_hopper_z_daiji", true);
          kit_1.kit.system.timer.doOnce(1e3, function() {
            sp.setAnimation(0, TigoWinState.HAPPY, true);
            sp2.setAnimation(0, "L2_W0_day1_1_hopper_z_huahu", true);
          });
        }
        kit_1.kit.manager.Event.on(Events_1.default.GAME_COMPLETE, this.onLearnComplete, this);
        return Promise.resolve();
      };
      TigoWinState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      TigoWinState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.off(Events_1.default.GAME_COMPLETE, this.onLearnComplete, this);
      };
      TigoWinState.prototype.onLearnComplete = function() {
        var _this = this;
        cc.tween(this).delay(2.6).call(function() {
          _this.entity.stateMachine.ChangeState(TigoCompleteState_1.default);
        }).start();
      };
      TigoWinState.IDLE = "L2_W0_day1_1_tigo_z_daiji";
      TigoWinState.HAPPY = "L2_W0_day1_1_tigo_z_huanhu";
      return TigoWinState;
    }();
    exports.default = TigoWinState;
    cc._RF.pop();
  }, {
    "../../../../kit/kit": "kit",
    "../Events": "Events",
    "./TIgoPoseState": "TIgoPoseState",
    "./TigoCompleteState": "TigoCompleteState"
  } ],
  Tigo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aebecszjwNL/p3TqjXLriaf", "Tigo");
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
    var kit_1 = require("../../../kit/kit");
    var TigoGloabelState_1 = require("./tigo/TigoGloabelState");
    var TigoGuideState_1 = require("./tigo/TigoGuideState");
    var TigoWinState_1 = require("./tigo/TigoWinState");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Tigo = function(_super) {
      __extends(Tigo, _super);
      function Tigo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.armPrefab = null;
        _this.idleNode = null;
        _this.stageWinNode = null;
        _this.completeNode = null;
        _this.guide = null;
        _this.sid = "tigo";
        return _this;
      }
      Tigo.prototype.onLoad = function() {
        this.stateMachine = new kit_1.kit.fsm.StateManager(this);
        this.guide.active = false;
        this.idleNode.active = true;
        this.stageWinNode.active = false;
        this.completeNode.active = false;
      };
      Tigo.prototype.init = function() {
        this.arm = cc.instantiate(this.armPrefab);
        this.arm.x = 60;
        this.arm.y = 128;
        this.node.getChildByName("logo").addChild(this.arm, -1);
        this.stateMachine.AddGlobalState(TigoGloabelState_1.default);
        this.stateMachine.AddGlobalState(TigoGuideState_1.default);
        this.stateMachine.ChangeState(TigoWinState_1.default);
      };
      __decorate([ property(cc.Prefab) ], Tigo.prototype, "armPrefab", void 0);
      __decorate([ property(cc.Node) ], Tigo.prototype, "idleNode", void 0);
      __decorate([ property(cc.Node) ], Tigo.prototype, "stageWinNode", void 0);
      __decorate([ property(cc.Node) ], Tigo.prototype, "completeNode", void 0);
      __decorate([ property(cc.Node) ], Tigo.prototype, "guide", void 0);
      Tigo = __decorate([ ccclass ], Tigo);
      return Tigo;
    }(cc.Component);
    exports.default = Tigo;
    cc._RF.pop();
  }, {
    "../../../kit/kit": "kit",
    "./tigo/TigoGloabelState": "TigoGloabelState",
    "./tigo/TigoGuideState": "TigoGuideState",
    "./tigo/TigoWinState": "TigoWinState"
  } ],
  TimeUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2d66crIKhFZIBxDTcVniG9", "TimeUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TimeUtils = void 0;
    var NumberUtils_1 = require("./NumberUtils");
    var TimeUtils = function() {
      function TimeUtils() {}
      TimeUtils.dateToFormate = function(date, fmt) {
        var o = {
          "M+": date.getMonth() + 1,
          "d+": date.getDate(),
          "h+": date.getHours(),
          "m+": date.getMinutes(),
          "s+": date.getSeconds(),
          "q+": Math.floor((date.getMonth() + 3) / 3),
          S: date.getMilliseconds()
        };
        /(y+)/.test(fmt) && (fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var k in o) new RegExp("(" + k + ")").test(fmt) && (fmt = fmt.replace(RegExp.$1, 1 == RegExp.$1.length ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
      };
      TimeUtils.toDate = function(time) {
        var result = "";
        if (time <= 0) return "00:00:00";
        var hour = 0;
        if (time >= 3600) {
          hour = Math.floor(NumberUtils_1.NumberUtils.floatDiv(time, 3600));
          time %= 3600;
        }
        var minute = 0;
        if (time >= 60) {
          minute = Math.floor(NumberUtils_1.NumberUtils.floatDiv(time, 60));
          time %= 60;
        }
        var second = Math.floor(time);
        result += hour < 10 ? "0" + hour : hour.toFixed();
        result += ":";
        result += minute < 10 ? "0" + minute : minute.toFixed();
        result += ":";
        result += second < 10 ? "0" + second : second.toFixed();
        return result;
      };
      return TimeUtils;
    }();
    exports.TimeUtils = TimeUtils;
    cc._RF.pop();
  }, {
    "./NumberUtils": "NumberUtils"
  } ],
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
  TimerSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9abf9X2vqVO9rXwATwBjIX4", "TimerSystem");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ASystem_1 = require("../interface/ASystem");
    var TimerSystem = function(_super) {
      __extends(TimerSystem, _super);
      function TimerSystem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._pool = new Array();
        _this._handlers = {};
        _this._currTimer = 0;
        _this._currFrame = 0;
        _this._count = 0;
        _this._index = 0;
        _this._startTime = 0;
        return _this;
      }
      Object.defineProperty(TimerSystem, "instance", {
        get: function() {
          null == TimerSystem._instance && (TimerSystem._instance = new TimerSystem());
          return TimerSystem._instance;
        },
        enumerable: false,
        configurable: true
      });
      TimerSystem.prototype.init = function() {
        var _this = this;
        return new Promise(function(res, rej) {
          _this._startTime = Date.now();
          _this._currTimer = Date.now();
          cc.director.getScheduler().enableForTarget(_this);
          cc.director.getScheduler().schedule(_this.onEnterFrame, _this, TimerSystem.INTERVAL);
          res();
        });
      };
      TimerSystem.prototype.onEnterFrame = function(elapsed) {
        this._currFrame++;
        this._currTimer = Date.now();
        var k;
        for (k in this._handlers) if ("undefined" !== k) {
          var handler = this._handlers[k];
          var t = handler.userFrame ? this._currFrame : this._currTimer;
          if (t >= handler.exeTime) {
            var method = handler.method;
            var args = handler.args || [ elapsed ];
            if (handler.repeat) while (t >= handler.exeTime && k in this._handlers) {
              handler.exeTime += handler.delay;
              method.apply(handler.thisObj, args);
            } else {
              method.apply(handler.thisObj, args);
              this.clearTimer(k);
            }
          }
        } else console.log(k);
      };
      TimerSystem.prototype.create = function(useFrame, repeat, delay, method, thisObj, args, cover) {
        void 0 === thisObj && (thisObj = null);
        void 0 === args && (args = null);
        void 0 === cover && (cover = true);
        var key;
        if (cover) {
          this.clearTimer(method);
          key = method;
        } else key = this._index++;
        if (delay < 1) {
          method.apply(null, args);
          return -1;
        }
        var handler = this._pool.length > 0 ? this._pool.pop() : new TimerHandler();
        handler.userFrame = useFrame;
        handler.repeat = repeat;
        handler.delay = delay;
        handler.method = method;
        handler.thisObj = thisObj;
        handler.args = args;
        handler.exeTime = delay + (useFrame ? this._currFrame : this._currTimer);
        this._handlers[key] = handler;
        this._count++;
        return key;
      };
      TimerSystem.prototype.doOnce = function(delay, method, thisObj, args, cover) {
        void 0 === thisObj && (thisObj = null);
        void 0 === args && (args = null);
        void 0 === cover && (cover = true);
        return this.create(false, false, delay, method, thisObj, args, cover);
      };
      TimerSystem.prototype.doLoop = function(delay, method, thisObj, args, cover) {
        void 0 === thisObj && (thisObj = null);
        void 0 === args && (args = null);
        void 0 === cover && (cover = true);
        return this.create(false, true, delay, method, thisObj, args, cover);
      };
      TimerSystem.prototype.doFrameOnce = function(delay, method, thisObj, args, cover) {
        void 0 === thisObj && (thisObj = null);
        void 0 === args && (args = null);
        void 0 === cover && (cover = true);
        return this.create(true, false, delay, method, thisObj, args, cover);
      };
      TimerSystem.prototype.doFrameLoop = function(delay, method, thisObj, args, cover) {
        void 0 === thisObj && (thisObj = null);
        void 0 === args && (args = null);
        void 0 === cover && (cover = true);
        return this.create(true, true, delay, method, thisObj, args, cover);
      };
      Object.defineProperty(TimerSystem.prototype, "count", {
        get: function() {
          return this._count;
        },
        enumerable: false,
        configurable: true
      });
      TimerSystem.prototype.clearTimer = function(method) {
        var handler = this._handlers[method];
        if (null != handler) {
          delete this._handlers[method];
          handler.clear();
          this._pool.push(handler);
          this._count--;
        }
      };
      TimerSystem.prototype.running = function(method) {
        if (null != this._handlers[method]) return true;
        return false;
      };
      TimerSystem.prototype.release = function() {
        for (var handler in this._handlers) this.clearTimer(this._handlers[handler]);
      };
      TimerSystem.INTERVAL = 1 / 60;
      return TimerSystem;
    }(ASystem_1.default);
    exports.default = TimerSystem;
    var TimerHandler = function() {
      function TimerHandler() {
        this.delay = 0;
        this.exeTime = 0;
      }
      TimerHandler.prototype.clear = function() {
        this.method = null;
        this.args = null;
        this.thisObj = null;
      };
      return TimerHandler;
    }();
    cc._RF.pop();
  }, {
    "../interface/ASystem": "ASystem"
  } ],
  UIUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8915a849atLU7SBp9W5Hqrd", "UIUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UIContainer = void 0;
    var ResLoader_1 = require("../framework/load/ResLoader");
    var kit_1 = require("../kit");
    var LogSystem_1 = require("../system/log/LogSystem");
    var UIUtils = function() {
      function UIUtils() {}
      UIUtils.createSubNodeMap = function(node, map) {
        var children = node.children;
        if (!children) return;
        for (var t = 0, len = children.length; t < len; ++t) {
          var subChild = children[t];
          map.set(subChild.name, subChild);
          UIUtils.createSubNodeMap(subChild, map);
        }
      };
      UIUtils.seekAllSubView = function(node) {
        var map = new Map();
        UIUtils.createSubNodeMap(node, map);
        return new UIContainer(map);
      };
      return UIUtils;
    }();
    exports.default = UIUtils;
    var UIContainer = function() {
      function UIContainer(nodesMap) {
        this._clickSound = "commonRes/sound/btn_click";
        this._bundleName = "components";
        this._uiNodesMap = nodesMap;
        this.preloadClickEffect();
      }
      UIContainer.prototype.getNode = function(name) {
        return this._uiNodesMap.get(name);
      };
      UIContainer.prototype.getComponent = function(name, com) {
        var node = this._uiNodesMap.get(name);
        if (node) return node.getComponent(com);
        return null;
      };
      UIContainer.prototype.onClick = function(node, handler, target, param, sound, bundleName) {
        var _this = this;
        if (!node) {
          LogSystem_1.default.warn("onClick\u53c2\u6570node\u4e0d\u80fd\u4e3a\u7a7a\uff1a" + node);
          return;
        }
        var tempNode = null;
        tempNode = "string" === typeof node ? this.getNode(node) : node;
        tempNode.on(cc.Node.EventType.TOUCH_START, function(event) {
          var soundName = "string" == typeof sound ? sound : _this._clickSound;
          var bundle = "string" == typeof bundleName ? bundleName : _this._bundleName;
          kit_1.kit.manager.Audio.playEffect(bundle, soundName);
          handler && handler.call(target, param);
        }, target);
      };
      UIContainer.prototype.offClick = function(node) {
        if (!node) {
          LogSystem_1.default.warn("offClick\u53c2\u6570node\u4e0d\u80fd\u4e3a\u7a7a\uff1a" + node);
          return;
        }
        var tempNode = null;
        tempNode = "string" === typeof node ? this.getNode(node) : node;
        tempNode.off(cc.Node.EventType.TOUCH_START);
      };
      UIContainer.prototype.preloadClickEffect = function() {
        ResLoader_1.default.loadRes(this._clickSound, cc.AudioClip, function() {}, this._bundleName);
      };
      return UIContainer;
    }();
    exports.UIContainer = UIContainer;
    cc._RF.pop();
  }, {
    "../framework/load/ResLoader": "ResLoader",
    "../kit": "kit",
    "../system/log/LogSystem": "LogSystem"
  } ],
  UrlUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d4c1cJ/clpAapD+cqy4wlas", "UrlUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UrlUtils = function() {
      function UrlUtils() {}
      UrlUtils.getQueryString = function(key) {
        var reg = new RegExp(key + "=([^&]*)(?:&)?");
        var rs = window.location.search.substr(1).match(reg);
        if (null != rs) return rs[1];
        return null;
      };
      UrlUtils.getUrlArrayByFileType = function(jsonObj, type) {
        console.log("getUrlArrayByFileType");
        if (!jsonObj) {
          console.log("jsonObj is null , please check your json!!!");
          return;
        }
        var urls = [];
        var len = type.length;
        function traverseJson(obj) {
          for (var o in obj) "object" === typeof obj[o] ? traverseJson(obj[o]) : "string" === typeof obj[o] && obj[o].slice(-len, obj[o].length) === type && urls.push(obj[o]);
        }
        traverseJson(jsonObj);
        if (urls.length > 1) {
          var list = [ urls[0] ];
          urls.sort();
          for (var i = 0; i < urls.length; i++) urls[i] !== list[list.length - 1] && list.push(urls[i]);
          return list;
        }
        return urls;
      };
      UrlUtils.parseUrl = function(url) {
        var m = url.match(/^(([^:\/?#]+:)?(?:\/\/((?:([^\/?#:]*):([^\/?#:]*)@)?([^\/?#:]*)(?::([^\/?#:]*))?)))?([^?#]*)(\?[^#]*)?(#.*)?$/), r = {
          hash: m[10] || "",
          host: m[3] || "",
          hostname: m[6] || "",
          href: m[0] || "",
          origin: m[1] || "",
          pathname: m[8] || (m[1] ? "/" : ""),
          port: m[7] || "",
          protocol: m[2] || "",
          search: m[9] || "",
          username: m[4] || "",
          password: m[5] || ""
        };
        if (2 == r.protocol.length) {
          r.protocol = "file:///" + r.protocol.toUpperCase();
          r.origin = r.protocol + "//" + r.host;
        }
        r.href = r.origin + r.pathname + r.search + r.hash;
        return m && r;
      };
      UrlUtils.getUrlPathName = function(url) {
        var ret = this.parseUrl(url);
        if (ret && ret.pathname) return ret.pathname;
        return "";
      };
      return UrlUtils;
    }();
    exports.default = UrlUtils;
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
      Util.prototype.addVocie = function(node, callBack, that) {
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
            kit.manager.Audio.playEffect(AudioManager_1.default.GAME_COIN_LARGE, function() {
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
  WebAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea8dagW+eRBFZJUmDEp+pGE", "WebAdapter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WebAdapter = function() {
      function WebAdapter() {
        this.packageName = "";
        this.isPrintLog = true;
      }
      WebAdapter.prototype.onGameExit = function() {};
      WebAdapter.prototype.onGameReady = function() {};
      WebAdapter.prototype.toast = function(message) {};
      WebAdapter.prototype.callFunction = function(funcName, parm) {
        throw new Error("Method not implemented.");
      };
      WebAdapter.prototype.callFunctionResult = function(funcName, parm, moduleName) {
        return {};
      };
      return WebAdapter;
    }();
    exports.default = WebAdapter;
    cc._RF.pop();
  }, {} ],
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
        void 0 === targetPos && (targetPos = cc.v2(0, -150));
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
  audioUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3049c04TVA9IGCXtTs5SZQ", "audioUtil");
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
    exports.MusicType = void 0;
    var ResLoader_1 = require("../framework/load/ResLoader");
    var kit_1 = require("../kit");
    var LogSystem_1 = require("../system/log/LogSystem");
    var MusicType;
    (function(MusicType) {
      MusicType[MusicType["SOUND"] = 0] = "SOUND";
      MusicType[MusicType["MUSIC"] = 1] = "MUSIC";
      MusicType[MusicType["LOOP_SOUND"] = 2] = "LOOP_SOUND";
    })(MusicType = exports.MusicType || (exports.MusicType = {}));
    var AudioUtil = function() {
      function AudioUtil() {}
      AudioUtil.getFixedPath = function(bundleName, path) {
        var cachePath = "";
        cachePath = bundleName instanceof cc.AssetManager.Bundle ? bundleName.name : bundleName;
        return cachePath + "/" + path;
      };
      AudioUtil.playEffect = function(bundleName, path, finishCb) {
        if (AudioUtil._pauseFlag) return;
        var curTime = new Date().getTime();
        if (path === AudioUtil._curSound) {
          var tempTime = curTime - AudioUtil._lastSoundTime;
          if (tempTime < 50) return;
        }
        AudioUtil._curSound = path;
        AudioUtil._lastSoundTime = curTime;
        var fixedPath = AudioUtil.getFixedPath(bundleName, path);
        var source = AudioUtil.getEffectFromPool(fixedPath);
        if (source) source.play(false, finishCb); else {
          source = new __AudioSource(bundleName, path, MusicType.SOUND);
          AudioUtil.addEffectToPool(fixedPath, source);
          source.play(false, finishCb);
        }
      };
      AudioUtil.stopEffect = function() {
        AudioUtil._soundPool.forEach(function(value, key, map) {
          if (value) for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var source = value_1[_i];
            source.stop();
          }
        });
      };
      AudioUtil.playLoopEffect = function(bundleName, path) {
        if (AudioUtil._pauseFlag) return;
        var fixedPath = AudioUtil.getFixedPath(bundleName, path);
        var source = AudioUtil._loopSoundPool.get(fixedPath);
        if (!source) {
          source = new __AudioSource(bundleName, path, MusicType.LOOP_SOUND);
          AudioUtil._loopSoundPool.set(fixedPath, source);
        }
        source.play(true);
      };
      AudioUtil.stopLoopEffect = function(bundleName, path) {
        var fixedPath = AudioUtil.getFixedPath(bundleName, path);
        var source = AudioUtil._loopSoundPool.get(fixedPath);
        source && source.stop();
      };
      AudioUtil.playMusic = function(bundleName, path) {
        if (AudioUtil._pauseFlag) return;
        AudioUtil._curMusic && AudioUtil._curMusic.stop();
        var fixedPath = AudioUtil.getFixedPath(bundleName, path);
        var source = AudioUtil._musicPool.get(fixedPath);
        if (source) source.play(true); else {
          source = new __AudioSource(bundleName, path, MusicType.MUSIC);
          AudioUtil._musicPool.set(fixedPath, source);
          source.play(true);
        }
        AudioUtil._curMusic = source;
      };
      AudioUtil.stopMusic = function() {
        AudioUtil._curMusic && AudioUtil._curMusic.stop();
      };
      AudioUtil.passMusic = function() {
        AudioUtil._curMusic && AudioUtil._curMusic.pause();
      };
      AudioUtil.resumeMusic = function() {
        AudioUtil._curMusic && AudioUtil._curMusic.resume();
      };
      AudioUtil.getEffectFromPool = function(path) {
        var list = AudioUtil._soundPool.get(path);
        if (list) for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
          var source = list_1[_i];
          if (!source.isPlaying()) return source;
        }
        return null;
      };
      AudioUtil.addEffectToPool = function(path, source) {
        var list = AudioUtil._soundPool.get(path);
        if (list) list.push(source); else {
          list = [];
          list.push(source);
          AudioUtil._soundPool.set(path, list);
        }
      };
      AudioUtil.setPauseFlag = function(flag, level) {
        void 0 === level && (level = 0);
        AudioUtil._level = level;
        AudioUtil._pauseFlag = flag;
        if (flag) {
          AudioUtil._curMusic && AudioUtil._curMusic.pause();
          AudioUtil.pauseLoopEffects();
        } else {
          AudioUtil._curMusic && AudioUtil._curMusic.resume();
          AudioUtil.resumeLoopEffects();
        }
      };
      AudioUtil.pauseLoopEffects = function() {
        AudioUtil._loopSoundPool.forEach(function(v, key) {
          v.pause();
        });
      };
      AudioUtil.resumeLoopEffects = function() {
        AudioUtil._loopSoundPool.forEach(function(v, key) {
          v.resume();
        });
      };
      AudioUtil.stopEffectByName = function(path) {
        var list = AudioUtil._soundPool.get(path);
        list && list.forEach(function(value) {
          value.stop();
        });
      };
      AudioUtil.playEffectByName = function(bundleName, path, isSingle, isLoop) {
        void 0 === isSingle && (isSingle = true);
        void 0 === isLoop && (isLoop = false);
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              if (AudioUtil._pauseFlag) {
                resolve();
                return;
              }
              var curTime = new Date().getTime();
              if (path === AudioUtil._curSound) {
                var tempTime = curTime - AudioUtil._lastSoundTime;
                if (tempTime < 50) {
                  resolve();
                  return;
                }
              }
              var fixedPath = AudioUtil.getFixedPath(bundleName, path);
              isSingle && AudioUtil.stopEffectByName(fixedPath);
              AudioUtil._curSound = path;
              AudioUtil._lastSoundTime = curTime;
              var source = null;
              source = isLoop ? AudioUtil._loopSoundPool.get(fixedPath) : AudioUtil.getEffectFromPool(fixedPath);
              if (source) source.play(isLoop, function() {
                resolve();
              }); else {
                source = new __AudioSource(bundleName, path, MusicType.SOUND);
                isLoop ? AudioUtil._loopSoundPool.set(fixedPath, source) : AudioUtil.addEffectToPool(fixedPath, source);
                source.play(isLoop, function() {
                  resolve();
                });
              }
            }) ];
          });
        });
      };
      AudioUtil.destroyAudio = function(bundleName, path) {
        var fixedPath = AudioUtil.getFixedPath(bundleName, path);
        if (AudioUtil._soundPool.has(fixedPath)) {
          AudioUtil.stopEffectByName(fixedPath);
          var list = AudioUtil._soundPool.get(fixedPath);
          list.forEach(function(element) {
            element.destroy();
          });
          AudioUtil._soundPool.delete(fixedPath);
        }
        if (AudioUtil._musicPool.has(fixedPath)) {
          AudioUtil.stopMusic();
          var clip = AudioUtil._musicPool.get(fixedPath);
          clip.destroy();
          AudioUtil._musicPool.delete(fixedPath);
        }
        if (AudioUtil._loopSoundPool.has(fixedPath)) {
          AudioUtil.stopLoopEffect(bundleName, path);
          var clip = AudioUtil._loopSoundPool.get(fixedPath);
          clip.destroy();
          AudioUtil._loopSoundPool.delete(fixedPath);
        }
      };
      AudioUtil._musicPool = new Map();
      AudioUtil._soundPool = new Map();
      AudioUtil._loopSoundPool = new Map();
      AudioUtil._curSound = "";
      AudioUtil._lastSoundTime = 0;
      AudioUtil._pauseFlag = false;
      AudioUtil._level = 0;
      return AudioUtil;
    }();
    exports.default = AudioUtil;
    var __AudioSource = function() {
      function __AudioSource(bundleName, path, type) {
        this._loaded = false;
        this._audioSource = null;
        this._path = "";
        this.state = {};
        this._bundleName = bundleName;
        this._path = path;
        this._musicType = type;
      }
      __AudioSource.prototype.loadRes = function(cb) {
        var _this = this;
        this._loaded || ResLoader_1.default.loadRes(this._path, cc.AudioClip, function(err, res) {
          if (err) LogSystem_1.default.warn("\u97f3\u9891\u8d44\u6e90\u52a0\u8f7d\u51fa\u9519:" + _this._path); else {
            _this._audioSource = res;
            _this._loaded = true;
            cb && cb();
          }
        }, this._bundleName);
      };
      __AudioSource.prototype.play = function(isLoop, cb) {
        var _this = this;
        this._isStop = false;
        if (this._loaded) {
          this.stop();
          isLoop || (isLoop = false);
          this.state.isLoop = isLoop;
          this.state.isPlaying = true;
          this._musicType == MusicType.MUSIC ? this.state.id = cc.audioEngine.playMusic(this._audioSource, isLoop) : this.state.id = cc.audioEngine.playEffect(this._audioSource, isLoop);
          if (cb) {
            var duration = this._audioSource.duration;
            kit_1.kit.system.timer.doOnce(1e3 * duration, function() {
              cb();
            }, this, null, false);
          }
        } else this.loadRes(function() {
          _this._isStop || _this.play(isLoop, cb);
        });
      };
      __AudioSource.prototype.playEffect = function(isLoop) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              _this.play(isLoop, function() {
                resolve();
              });
            }) ];
          });
        });
      };
      __AudioSource.prototype.isPlaying = function() {
        return this.state.isPlaying;
      };
      __AudioSource.prototype.stop = function() {
        this._isStop = true;
        this._loaded && null != this.state.id && void 0 != this.state.id && (this._musicType == MusicType.MUSIC ? cc.audioEngine.stopMusic() : cc.audioEngine.stopEffect(this.state.id));
      };
      __AudioSource.prototype.pause = function() {
        this._loaded && this.state.id && (this._musicType == MusicType.MUSIC ? cc.audioEngine.pauseMusic() : cc.audioEngine.pauseEffect(this.state.id));
      };
      __AudioSource.prototype.resume = function() {
        this._loaded && this.state.id && (this._musicType == MusicType.MUSIC ? cc.audioEngine.resumeMusic() : cc.audioEngine.resumeEffect(this.state.id));
      };
      __AudioSource.prototype.destroy = function() {
        this.stop();
        if (this._audioSource) {
          cc.assetManager.releaseAsset(this._audioSource);
          this._audioSource.destroy();
          this._audioSource = null;
        }
      };
      return __AudioSource;
    }();
    cc._RF.pop();
  }, {
    "../framework/load/ResLoader": "ResLoader",
    "../kit": "kit",
    "../system/log/LogSystem": "LogSystem"
  } ],
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
  bundleUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc3a6EBzM9DsaLQ8c6vH8JX", "bundleUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.loadBundles = exports.loadBundleScene = exports.loadBundle = void 0;
    var kit_1 = require("../kit");
    function loadBundle(bundleName) {
      return new Promise(function(res, rej) {
        console.time(bundleName);
        cc.assetManager.loadBundle(bundleName, function(error, bundle) {
          console.timeEnd(bundleName);
          if (error) {
            rej(error);
            return;
          }
          res(bundle);
        });
      });
    }
    exports.loadBundle = loadBundle;
    function loadBundleScene(bundleName, sceneName) {
      return new Promise(function(res, rej) {
        loadBundle(bundleName).then(function(bundle) {
          bundle.loadScene(sceneName, function(error, scene) {
            if (error) {
              rej(error);
              return;
            }
            res(scene);
          });
        }).catch(function(error) {
          rej(error);
        });
      });
    }
    exports.loadBundleScene = loadBundleScene;
    function loadBundles(nameList) {
      var list = [];
      for (var key in nameList) list.push(loadBundle(nameList[key]));
      return Promise.all(list);
    }
    exports.loadBundles = loadBundles;
    cc._RF.pop();
  }, {
    "../kit": "kit"
  } ],
  bundleUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb862ikbYZKZIAlZjYZkWQD", "bundleUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BundleUtil = function() {
      function BundleUtil() {}
      BundleUtil.loadBundle = function(bundleName) {
        return new Promise(function(res, rej) {
          console.time(bundleName);
          cc.assetManager.loadBundle(bundleName, function(error, bundle) {
            console.timeEnd(bundleName);
            if (error) {
              rej(error);
              return;
            }
            res(bundle);
          });
        });
      };
      BundleUtil.loadBundleScene = function(bundleName, sceneName) {
        return new Promise(function(res, rej) {
          BundleUtil.loadBundle(bundleName).then(function(bundle) {
            bundle.loadScene(sceneName, function(error, scene) {
              if (error) {
                rej(error);
                return;
              }
              res(scene);
            });
          }).catch(function(error) {
            rej(error);
          });
        });
      };
      BundleUtil.loadBundles = function(nameList) {
        var list = [];
        for (var key in nameList) list.push(BundleUtil.loadBundle(nameList[key]));
        return Promise.all(list);
      };
      return BundleUtil;
    }();
    exports.default = BundleUtil;
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
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.coin = [];
        return _this;
      }
      NewClass.prototype.setCoinAni = function(num) {
        var _this = this;
        for (var i = 0; i < this.coin.length; i++) this.coin[i].active = i < num;
        this.node.getComponent(cc.Animation).play();
        this.playCoinEffect(num);
        this.scheduleOnce(function() {
          for (var i = 0; i < _this.coin.length; i++) _this.coin[i].active = false;
        }, 2);
      };
      NewClass.prototype.playCoinEffect = function(num) {
        var url = "";
        url = "jinbi" + num;
        cc.loader.loadRes("audio_common/" + url, cc.AudioClip, function(err, audio) {
          err ? console.log(err, "\u91d1\u5e01\u97f3\u6548\u52a0\u8f7d\u5931\u8d25===============>>") : cc.audioEngine.play(audio, false, 1);
        });
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "coin", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
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
    var Coins = function(_super) {
      __extends(Coins, _super);
      function Coins() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_frames = [];
        _this.num_1 = null;
        _this.num_2 = null;
        return _this;
      }
      Coins.prototype.onLoad = function() {};
      Coins.prototype.start = function() {};
      Coins.prototype.initNum = function(index) {
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
      __decorate([ property(cc.SpriteFrame) ], Coins.prototype, "m_frames", void 0);
      __decorate([ property(cc.Sprite) ], Coins.prototype, "num_1", void 0);
      __decorate([ property(cc.Sprite) ], Coins.prototype, "num_2", void 0);
      Coins = __decorate([ ccclass ], Coins);
      return Coins;
    }(cc.Component);
    exports.default = Coins;
    cc._RF.pop();
  }, {} ],
  config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75c67ngiFlF/5KTaGbFQ74/", "config");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Config = function() {
      function Config() {}
      Config.LEVEN_NUMBER = 3;
      Config.SCENE_WIDTH = 1334;
      Config.LEVEL_TARGET_FRUIT_NUMBER = 3;
      Config.COMPLETE_STAGE_POINTS = [ {
        x: -280,
        y: -510
      }, {
        x: -395,
        y: -485
      }, {
        x: -512,
        y: -510
      } ];
      return Config;
    }();
    exports.default = Config;
    cc._RF.pop();
  }, {} ],
  events: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01ff7UAGkBJw6QvSmJQ0d6a", "events");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SET_TOP_BAR_ACTIVE = exports.VIDEO_MODULE_TO_CLIENT = exports.VIDEO_CLIENT_TO_MODULE = exports.FOLLOW_MODULE_TO_CLIENT = exports.FOLLOW_CLIENT_TO_MODULE = exports.LIFE_CYCLE_BACK = exports.LIFE_CYCLE_PARAMS = exports.LIFE_CYCLE_UNBLOCK = exports.LIFE_CYCLE_BLOCK = exports.LIFE_CYCLE_COMPLETE = exports.LIFE_CYCLE_READY = exports.LIFE_CYCLE_CREATED = void 0;
    exports.LIFE_CYCLE_CREATED = "lifeCycleCreated";
    exports.LIFE_CYCLE_READY = "lifeCycleReady";
    exports.LIFE_CYCLE_COMPLETE = "lifeCycleComplete";
    exports.LIFE_CYCLE_BLOCK = "lifeCycleBlock";
    exports.LIFE_CYCLE_UNBLOCK = "lifeCycleUnblock";
    exports.LIFE_CYCLE_PARAMS = "lifeCycleParams";
    exports.LIFE_CYCLE_BACK = "lifeCycleBack";
    exports.FOLLOW_CLIENT_TO_MODULE = "followClientToModule";
    exports.FOLLOW_MODULE_TO_CLIENT = "followModuleToClient";
    exports.VIDEO_CLIENT_TO_MODULE = "voidClient2Module";
    exports.VIDEO_MODULE_TO_CLIENT = "voidModule2Client";
    exports.SET_TOP_BAR_ACTIVE = "setTopBarActive";
    var Events = function() {
      function Events() {}
      Events.LIFE_CYCLE_CREATED = "lifeCycleCreated";
      Events.LIFE_CYCLE_READY = "lifeCycleReady";
      Events.LIFE_CYCLE_COMPLETE = "lifeCycleComplete";
      Events.LIFE_CYCLE_BLOCK = "lifeCycleBlock";
      Events.LIFE_CYCLE_UNBLOCK = "lifeCycleUnblock";
      Events.LIFE_CYCLE_PARAMS = "lifeCycleParams";
      Events.LIFE_CYCLE_BACK = "lifeCycleBack";
      Events.FOLLOW_CLIENT_TO_MODULE = "followClientToModule";
      Events.FOLLOW_MODULE_TO_CLIENT = "followModuleToClient";
      Events.VIDEO_CLIENT_TO_MODULE = "voidClient2Module";
      Events.VIDEO_MODULE_TO_CLIENT = "voidModule2Client";
      Events.SET_TOP_BAR_ACTIVE = "setTopBarActive";
      Events.SHOW_COMMON_TIPS_POP = "showCommonTipsPop";
      return Events;
    }();
    exports.default = Events;
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
    var GameMenu = function(_super) {
      __extends(GameMenu, _super);
      function GameMenu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gpList = [];
        _this.gatePre = null;
        _this.curgameId = 0;
        _this.isSecgame = 0;
        _this.mainS = null;
        _this.canClick = true;
        return _this;
      }
      GameMenu.prototype.initMenu = function(cid, issg, isGoon, ms) {
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
      GameMenu.prototype.start = function() {};
      GameMenu.prototype.autoGame = function() {
        cc.log("\u81ea\u52a8\u8fdb\u5165 gameid = " + this.curgameId);
        this.mainS.openGame(this.curgameId);
      };
      GameMenu.prototype.gateClick = function(gid) {
        cc.log("\u70b9\u51fb\u8fdb\u5165 gameid = " + gid);
        this.mainS.openGame(gid);
      };
      __decorate([ property(cc.Node) ], GameMenu.prototype, "gpList", void 0);
      __decorate([ property(cc.Prefab) ], GameMenu.prototype, "gatePre", void 0);
      GameMenu = __decorate([ ccclass ], GameMenu);
      return GameMenu;
    }(cc.Component);
    exports.default = GameMenu;
    cc._RF.pop();
  }, {
    "./GameData": "GameData"
  } ],
  kit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ebec7lUZzlKv4hId5PWwSjP", "kit");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.kit = void 0;
    var ClickCmpt_1 = require("./component/ClickCmpt");
    var events_1 = require("./events/events");
    var ResLoader_1 = require("./framework/load/ResLoader");
    var PlatformSystem_1 = require("./framework/platform/PlatformSystem");
    var PopupManager_1 = require("./manager/popupManager.ts/PopupManager");
    var ResourcesManager_1 = require("./manager/ResourcesManager");
    var ClientModuleEnum_1 = require("./structure/ClientModuleEnum");
    var LinkedNode_1 = require("./structure/LinkedNode");
    var AudioManager2_1 = require("./system/audio/AudioManager2");
    var ErrorSystem_1 = require("./system/error/ErrorSystem");
    var EventSystem_1 = require("./system/event/EventSystem");
    var StateMachine_1 = require("./system/fsm/StateMachine");
    var LogSystem_1 = require("./system/log/LogSystem");
    var HttpSystem_1 = require("./system/net/http/HttpSystem");
    var TimerSystem_1 = require("./system/timer/TimerSystem");
    var LocalStorageUtils_1 = require("./utils/LocalStorageUtils");
    var TimeUtils_1 = require("./utils/TimeUtils");
    var UIUtils_1 = require("./utils/UIUtils");
    var ModelManager_1 = require("./model/ModelManager");
    var ModelBase_1 = require("./model/ModelBase");
    var MessageBase_1 = require("./model/MessageBase");
    var NativeInfo_1 = require("./model/NativeInfo");
    var SpotSystem_1 = require("./system/log/SpotSystem");
    var ClientTipsEnum_1 = require("./structure/ClientTipsEnum");
    var kit;
    (function(kit) {
      var util;
      (function(util) {
        util.Time = TimeUtils_1.TimeUtils;
        util.Ui = UIUtils_1.default;
        util.UiContainer = UIUtils_1.UIContainer;
        util.LocalStorage = LocalStorageUtils_1.LocalStorageUtils;
      })(util = kit.util || (kit.util = {}));
      var system;
      (function(system) {
        system.log = LogSystem_1.default.instance;
        system.error = ErrorSystem_1.default.instance;
        system.timer = TimerSystem_1.default.instance;
        system.platform = PlatformSystem_1.default.instance;
        system.spot = SpotSystem_1.default.instance;
      })(system = kit.system || (kit.system = {}));
      var manager;
      (function(manager) {
        manager.resources = ResourcesManager_1.default.instance;
        var Resources;
        (function(Resources) {
          Resources.Type = ResourcesManager_1.ResourceType;
        })(Resources = manager.Resources || (manager.Resources = {}));
        manager.Audio = AudioManager2_1.default.instance;
        manager.Event = EventSystem_1.default;
        manager.Http = HttpSystem_1.default;
        manager.Popup = PopupManager_1.default;
      })(manager = kit.manager || (kit.manager = {}));
      var consts;
      (function(consts) {
        consts.Event = events_1.default;
      })(consts = kit.consts || (kit.consts = {}));
      var structure;
      (function(structure) {
        structure.LinkList = LinkedNode_1.default;
        var Tips;
        (function(Tips) {
          Tips.Type = ClientTipsEnum_1.TIPS_TYPE;
        })(Tips = structure.Tips || (structure.Tips = {}));
      })(structure = kit.structure || (kit.structure = {}));
      var video;
      (function(video) {
        video.videoTransType = ClientModuleEnum_1.VideoEventTransType;
      })(video = kit.video || (kit.video = {}));
      var component;
      (function(component) {
        component.Click = ClickCmpt_1.default;
      })(component = kit.component || (kit.component = {}));
      var Loader = function(_super) {
        __extends(Loader, _super);
        function Loader() {
          return null !== _super && _super.apply(this, arguments) || this;
        }
        return Loader;
      }(ResLoader_1.default);
      kit.Loader = Loader;
      var fsm;
      (function(fsm) {
        fsm.StateManager = StateMachine_1.default;
      })(fsm = kit.fsm || (kit.fsm = {}));
      var model;
      (function(model) {
        model.modelManager = ModelManager_1.default.instance;
        var modelBase = function(_super) {
          __extends(modelBase, _super);
          function modelBase() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return modelBase;
        }(ModelBase_1.default);
        model.modelBase = modelBase;
        var messageBase = function(_super) {
          __extends(messageBase, _super);
          function messageBase() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return messageBase;
        }(MessageBase_1.MessageBase);
        model.messageBase = messageBase;
        var nativeInfo = function(_super) {
          __extends(nativeInfo, _super);
          function nativeInfo() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return nativeInfo;
        }(NativeInfo_1.default);
        model.nativeInfo = nativeInfo;
        var netWork;
        (function(netWork) {
          netWork.networkType = NativeInfo_1.NetworkType;
        })(netWork = model.netWork || (model.netWork = {}));
      })(model = kit.model || (kit.model = {}));
    })(kit = exports.kit || (exports.kit = {}));
    cc._RF.pop();
  }, {
    "./component/ClickCmpt": "ClickCmpt",
    "./events/events": "events",
    "./framework/load/ResLoader": "ResLoader",
    "./framework/platform/PlatformSystem": "PlatformSystem",
    "./manager/ResourcesManager": "ResourcesManager",
    "./manager/popupManager.ts/PopupManager": "PopupManager",
    "./model/MessageBase": "MessageBase",
    "./model/ModelBase": "ModelBase",
    "./model/ModelManager": "ModelManager",
    "./model/NativeInfo": "NativeInfo",
    "./structure/ClientModuleEnum": "ClientModuleEnum",
    "./structure/ClientTipsEnum": "ClientTipsEnum",
    "./structure/LinkedNode": "LinkedNode",
    "./system/audio/AudioManager2": "AudioManager2",
    "./system/error/ErrorSystem": "ErrorSystem",
    "./system/event/EventSystem": "EventSystem",
    "./system/fsm/StateMachine": "StateMachine",
    "./system/log/LogSystem": "LogSystem",
    "./system/log/SpotSystem": "SpotSystem",
    "./system/net/http/HttpSystem": "HttpSystem",
    "./system/timer/TimerSystem": "TimerSystem",
    "./utils/LocalStorageUtils": "LocalStorageUtils",
    "./utils/TimeUtils": "TimeUtils",
    "./utils/UIUtils": "UIUtils"
  } ],
  "loader-index": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6feaAQQPVMIbI/p7DuqJkB", "loader-index");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __exportStar = this && this.__exportStar || function(m, exports) {
      for (var p in m) "default" === p || Object.prototype.hasOwnProperty.call(exports, p) || __createBinding(exports, m, p);
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __exportStar(require("./DefaultLoader"), exports);
    __exportStar(require("./ImageLoader"), exports);
    __exportStar(require("./JsonLoader"), exports);
    __exportStar(require("./AudioLoader"), exports);
    __exportStar(require("./AtlasLoader"), exports);
    __exportStar(require("./TextLoader"), exports);
    __exportStar(require("./PrefabLoader"), exports);
    __exportStar(require("./SpineLoader"), exports);
    cc._RF.pop();
  }, {
    "./AtlasLoader": "AtlasLoader",
    "./AudioLoader": "AudioLoader",
    "./DefaultLoader": "DefaultLoader",
    "./ImageLoader": "ImageLoader",
    "./JsonLoader": "JsonLoader",
    "./PrefabLoader": "PrefabLoader",
    "./SpineLoader": "SpineLoader",
    "./TextLoader": "TextLoader"
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
  rollBg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd6a0NPUpFAAptDh1Nw+IPs", "rollBg");
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
    var Mtype;
    (function(Mtype) {
      Mtype[Mtype["VERTICAL_P"] = 0] = "VERTICAL_P";
      Mtype[Mtype["VERTICAL_N"] = 1] = "VERTICAL_N";
      Mtype[Mtype["HORIZONTAL_P"] = 2] = "HORIZONTAL_P";
      Mtype[Mtype["HORIZONTAL_N"] = 3] = "HORIZONTAL_N";
    })(Mtype || (Mtype = {}));
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lubg1 = null;
        _this.lubg2 = null;
        _this.speed = 200;
        _this.mtype = Mtype.VERTICAL_P;
        _this.isRunmap = false;
        _this.cur_lubg = null;
        _this.luOffset = 0;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.cur_lubg = this.lubg1;
        this.setbgfix();
      };
      NewClass.prototype.setbgfix = function() {
        var frameSize = cc.winSize;
        cc.log("frameSize", frameSize);
        var designResolution = cc.Canvas.instance.designResolution;
        var designSize = cc.size(designResolution.width, designResolution.height);
        var frameAspectRatio = frameSize.width / frameSize.height;
        var screenSize = __assign({}, frameSize);
        var ratio = this.node.width / this.node.height;
        if (ratio > frameAspectRatio) {
          var width = this.node.width * screenSize.height / this.node.height;
          this.lubg1.width = width;
          this.lubg1.height = screenSize.height;
          this.lubg2.width = width;
          this.lubg2.height = screenSize.height;
          switch (this.mtype) {
           case Mtype.VERTICAL_P:
            this.lubg2.y = screenSize.height;
            this.luOffset = screenSize.height;
            break;

           case Mtype.VERTICAL_N:
            this.lubg2.y = -screenSize.height;
            this.luOffset = screenSize.height;
            break;

           case Mtype.HORIZONTAL_P:
            this.lubg2.x = width;
            this.luOffset = width;
            break;

           case Mtype.HORIZONTAL_N:
            this.lubg2.x = -width;
            this.luOffset = width;
          }
        } else {
          var height = this.node.height * screenSize.width / this.node.width;
          this.lubg1.width = screenSize.width;
          this.lubg1.height = height;
          this.lubg2.width = screenSize.width;
          this.lubg2.height = height;
          switch (this.mtype) {
           case Mtype.VERTICAL_P:
            this.lubg2.y = height;
            this.luOffset = height;
            break;

           case Mtype.VERTICAL_N:
            this.lubg2.y = -height;
            this.luOffset = height;
            break;

           case Mtype.HORIZONTAL_P:
            this.lubg2.x = screenSize.width;
            this.luOffset = screenSize.width;
            break;

           case Mtype.HORIZONTAL_N:
            this.lubg2.x = -screenSize.width;
            this.luOffset = screenSize.width;
          }
        }
      };
      NewClass.prototype.runlubg = function(dt) {
        var s = dt * this.speed;
        switch (this.mtype) {
         case Mtype.VERTICAL_P:
          this.lubg1.y -= s;
          this.lubg2.y -= s;
          if (this.cur_lubg.y <= -this.luOffset) if (this.cur_lubg == this.lubg2) {
            this.lubg2.y = this.lubg1.y + this.luOffset;
            this.cur_lubg = this.lubg1;
          } else {
            this.lubg1.y = this.lubg2.y + this.luOffset;
            this.cur_lubg = this.lubg2;
          }
          break;

         case Mtype.VERTICAL_N:
          this.lubg1.y += s;
          this.lubg2.y += s;
          if (this.cur_lubg.y >= this.luOffset) if (this.cur_lubg == this.lubg2) {
            this.lubg2.y = this.lubg1.y - this.luOffset;
            this.cur_lubg = this.lubg1;
          } else {
            this.lubg1.y = this.lubg2.y - this.luOffset;
            this.cur_lubg = this.lubg2;
          }
          break;

         case Mtype.HORIZONTAL_P:
          this.lubg1.x -= s;
          this.lubg2.x -= s;
          if (this.cur_lubg.x <= -this.luOffset) if (this.cur_lubg == this.lubg2) {
            this.lubg2.x = this.lubg1.x + this.luOffset;
            this.cur_lubg = this.lubg1;
          } else {
            this.lubg1.x = this.lubg2.x + this.luOffset;
            this.cur_lubg = this.lubg2;
          }
          break;

         case Mtype.HORIZONTAL_N:
          this.lubg1.x += s;
          this.lubg2.x += s;
          if (this.cur_lubg.x >= this.luOffset) if (this.cur_lubg == this.lubg2) {
            this.lubg2.x = this.lubg1.x - this.luOffset;
            this.cur_lubg = this.lubg1;
          } else {
            this.lubg1.x = this.lubg2.x - this.luOffset;
            this.cur_lubg = this.lubg2;
          }
        }
      };
      NewClass.prototype.update = function(dt) {
        this.isRunmap && this.runlubg(dt);
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5f53\u524d\u5c4f\u7684\u80cc\u666f\u8282\u70b9"
      }) ], NewClass.prototype, "lubg1", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u4e0b\u4e00\u5c4f\u7684\u80cc\u666f\u8282\u70b9"
      }) ], NewClass.prototype, "lubg2", void 0);
      __decorate([ property({
        type: cc.Integer,
        tooltip: "\u5faa\u73af\u901f\u5ea6",
        min: 0,
        max: 1e3,
        step: 50,
        slide: true
      }) ], NewClass.prototype, "speed", void 0);
      __decorate([ property({
        type: cc.Enum(Mtype),
        tooltip: "VERTICAL_P:\u5782\u76f4\u5411\u4e0b\u6eda\u52a8  VERTICAL_N:\u5782\u76f4\u5411\u4e0a\u6eda\u52a8 HORIZONTAL_P:\u6c34\u5e73\u5411\u5de6\u6eda\u52a8 HORIZONTAL_N:\u6c34\u5e73\u5411\u53f3\u6eda\u52a8"
      }) ], NewClass.prototype, "mtype", void 0);
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
  videoCr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26659jjS/ZE2Z2vyVNkyWPR", "videoCr");
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
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.scheduleOnce(function() {
          return _this.showControl();
        }, 5);
        this.node.on("touchend", this.showControl, this);
      };
      NewClass.prototype.showControl = function() {
        var _this = this;
        255 == this.node.opacity ? this.node.opacity = 0 : this.node.opacity = 255;
        this.unscheduleAllCallbacks();
        this.scheduleOnce(function() {
          return _this.hide();
        }, 6);
      };
      NewClass.prototype.hide = function() {
        255 == this.node.opacity && (this.node.opacity = 0);
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  videoMain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d215bXDmhVDBJ1l2/I9sCsc", "videoMain");
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
    cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.video = null;
        _this.gameNodes = [];
        _this.bg = null;
        _this.play_btn = null;
        _this.controlNode = null;
        _this.controlBtn = null;
        _this.pauseNode = null;
        _this.playNode = null;
        _this.PRe = null;
        _this.videoProgress = null;
        _this.videoTime = null;
        _this.maxTime = null;
        _this.progressMax = 0;
        _this.current = 0;
        _this.gameIndex = 0;
        _this.timeScript = [];
        _this.timeOutScript = [];
        _this.showGameIndex = -1;
        _this.isPlaying = true;
        _this.isControl = false;
        _this.isUpSpeed = true;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.timeScript = [];
        this.timeOutScript = [];
        this.isPlaying = true;
        this.current = 0;
      };
      NewClass.prototype.start = function() {
        this.video.node.active = true;
        console.log("video showout");
      };
      NewClass.prototype.regisEvent = function() {
        this.video.node.on("ready-to-play", this.vedioReady, this);
        this.video.node.on("meta-loaded", this.vedioLoaded, this);
        this.video.node.on("playing", this.vedioPlaying, this);
        this.video.node.on("paused", this.vedioPaused, this);
        this.video.node.on("completed", this.vedioCompleted, this);
        this.videoProgress.node.on("slide", this.changeProgress, this);
        this.controlBtn.on("touchstart", this.control_btn_start, this);
        this.controlBtn.on("touchend", this.control_btn_end, this);
        this.controlBtn.on("touchcancel", this.control_btn_end, this);
      };
      NewClass.prototype.vedioCompleted = function() {
        console.log("open_vedio_Completed");
        window.webframe.Notify.trigger("open_vedio_Completed");
      };
      NewClass.prototype.vedioReady = function() {
        console.log("vedioReady");
        this.node.active = false;
        window.webframe.Notify.trigger("open_vedio_Completed");
      };
      NewClass.prototype.vedioPlaying = function() {
        console.log("vedioPlaying");
      };
      NewClass.prototype.vedioPaused = function() {
        console.log("vedioPaused");
      };
      NewClass.prototype.vedioLoaded = function() {
        console.log("vedioLoaded");
        console.log("video totaltime ==== " + this.video.getDuration());
        this.progressMax = this.video.getDuration();
        this.maxTime.string = "/" + this.secondToDate(this.progressMax);
      };
      NewClass.prototype.secondToDate = function(result) {
        var m = Math.floor(result / 60 % 60) < 10 ? "0" + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60);
        var s = Math.floor(result % 60) < 10 ? "0" + Math.floor(result % 60) : Math.floor(result % 60);
        return m + ":" + s;
      };
      NewClass.prototype.vedioPause = function(event, data) {
        console.log("vedioPaused!!!!!!!!!!");
        this.video.pause();
        this.pauseNode.active = false;
        this.playNode.active = true;
      };
      NewClass.prototype.vedioPlay = function(event, data) {
        this.video.play();
        this.pauseNode.active = true;
        this.playNode.active = false;
      };
      NewClass.prototype.play = function() {
        var _this = this;
        console.log("play video url ==== " + this.video.remoteURL);
        this.video.play();
        this.bg.active = false;
        this.scheduleOnce(function() {
          return _this.setProgress();
        }, .2);
        this.controlNode.active = true;
      };
      NewClass.prototype.setProgress = function() {
        this.video.currentTime += .01;
        this.videoProgress.progress = this.video.currentTime / this.progressMax;
        this.PRe.getComponent(cc.ProgressBar).progress = this.videoProgress.progress;
        this.videoTime.string = this.secondToDate(this.video.currentTime);
      };
      NewClass.prototype.showVideoActive = function() {
        this.video.node.active = true;
        this.video.currentTime += .1;
      };
      NewClass.prototype.setVideotime = function() {
        this.video.node.active = true;
        this.video.currentTime = this.timeOutScript[this.gameIndex];
      };
      NewClass.prototype.game_right = function() {
        this.node.getChildByName("game") && this.node.getChildByName("game").destroy();
        this.gameIndex++;
        console.log("game_right === " + this.gameIndex);
        this.video.play();
        this.isPlaying = true;
        this.controlNode.active = true;
      };
      NewClass.prototype.addGame = function(index) {
        index == this.showGameIndex && (this.video.node.active = false);
        var game = cc.instantiate(this.gameNodes[index]);
        this.node.addChild(game);
        game.name = "game";
      };
      NewClass.prototype.UpSpeed = function() {};
      NewClass.prototype.changeProgress = function() {
        this.PRe.getComponent(cc.ProgressBar).progress = this.videoProgress.progress;
        this.video.currentTime = this.videoProgress.progress * this.progressMax;
        this.game_check();
        this.checkSpeed();
      };
      NewClass.prototype.checkSpeed = function() {
        if (this.isUpSpeed) {
          var able = this.video.currentTime / this.progressMax;
          if (able >= .7) {
            console.log("\u8fdb\u5ea6\u5df2\u7ecf\u8fbe\u5230== changeProgress====\u300b");
            this.UpSpeed();
            this.isUpSpeed = false;
          }
        }
      };
      NewClass.prototype.game_check = function() {
        var vt = this.video.currentTime;
        var ts = this.timeScript;
        vt < ts[0] ? this.gameIndex = 0 : vt > ts[0] && vt < ts[1] ? this.gameIndex = 1 : vt > ts[1] && vt < ts[2] ? this.gameIndex = 2 : vt > ts[2] && vt < ts[3] ? this.gameIndex = 3 : vt > ts[3] && vt < ts[4] && (this.gameIndex = 4);
        cc.log("gameIndex ====== " + this.gameIndex);
      };
      NewClass.prototype.rec_btn_call = function(event, data) {};
      NewClass.prototype.stop_btn_call = function(event, data) {};
      NewClass.prototype.control_btn_start = function(event, data) {
        this.isControl = true;
      };
      NewClass.prototype.control_btn_end = function(event, data) {
        this.game_check();
        cc.log("gameIndex === " + this.gameIndex);
        this.isControl = false;
      };
      NewClass.prototype.update = function(dt) {
        if (false == this.isControl) {
          this.videoProgress.progress = this.video.currentTime / this.progressMax;
          this.PRe.getComponent(cc.ProgressBar).progress = this.videoProgress.progress;
          this.videoTime.string = this.secondToDate(this.video.currentTime);
        }
        this.checkSpeed();
        if (!this.isPlaying || false != this.isControl) return;
        this.current = this.video.currentTime;
        if (this.current >= this.timeScript[this.gameIndex] && this.current < this.timeScript[this.gameIndex] + .05) {
          cc.log("add game!!!!  " + this.gameIndex);
          this.isPlaying = false;
          this.video.pause();
          this.addGame(this.gameIndex);
          this.controlNode.active = false;
        }
      };
      NewClass.prototype.onDisable = function() {};
      __decorate([ property(cc.VideoPlayer) ], NewClass.prototype, "video", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "gameNodes", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "bg", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "play_btn", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "controlNode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "controlBtn", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "pauseNode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "playNode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "PRe", void 0);
      __decorate([ property(cc.Slider) ], NewClass.prototype, "videoProgress", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "videoTime", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "maxTime", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  web_config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c99e3tjiKpDEqSyTwC0PyPV", "web_config");
    "use strict";
    window.webframe = new cc.Class({});
    var NotifierCenter = require("notifier_center");
    webframe.Notify = new NotifierCenter("http");
    cc._RF.pop();
  }, {
    notifier_center: "notifier_center"
  } ]
}, {}, [ "TigoManager", "AdapterBg", "AudioManager", "GameData", "Main", "Point", "TimerPad", "Util", "boot", "captureScreen", "coinBoard", "coins", "gameGate", "gameMenu", "notifier_center", "recordAin", "rollBg", "web_config", "WordTool", "Arm", "Events", "FruitGameMain", "GrabFruit", "ProgressBar", "Tigo", "ArmIdleState", "ArmInState", "ArmOutState", "Hand", "config", "Level1Sate", "Level2Sate", "Level3Sate", "LevelGloabelState", "TIgoPoseState", "TigoCompleteState", "TigoGloabelState", "TigoGrabState", "TigoGuideState", "TigoIdleState", "TigoWinState", "videoCr", "videoMain", "ClickCmpt", "events", "LoaderObserver", "ResLoader", "AtlasLoader", "AudioLoader", "BaseLoader", "DefaultLoader", "ImageLoader", "JsonLoader", "PrefabLoader", "SpineLoader", "TextLoader", "loader-index", "AndroidAdapter", "DebuggerAdapter", "INativeServer", "IPlatform", "IosAdapter", "PlatformSystem", "WebAdapter", "kit", "ResourcesManager", "ConfirmPopup", "PopupBase", "PopupManager", "MessageBase", "ModelBase", "ModelManager", "NativeInfo", "NetHelper", "ClientModuleEnum", "ClientModuleInterface", "ClientTipsEnum", "LinkedNode", "AudioManager2", "ErrorSystem", "EventEmitter", "EventSystem", "StateMachine", "EntityManager", "IEntity", "MessageDispatcher", "MessageType", "Telegram", "IState", "ASystem", "LogSystem", "SpotSystem", "Http", "HttpState", "HttpSystem", "IHttpSystem", "TimerSystem", "DelayUtils", "LocalStorageUtils", "MonitorUtils", "NumberUtils", "ParseTemplateUtils", "PoolUtils", "StringUtils", "TimeUtils", "UIUtils", "UrlUtils", "audioUtil", "bundleUtil", "bundleUtils", "use_reversed_rotateBy" ]);
//# sourceMappingURL=index.js.map
