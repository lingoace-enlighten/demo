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
  AssetItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ab33GEBZVO0aYyAJmt1SOX", "AssetItem");
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
    exports.AssetItem = exports.AssetData = void 0;
    var AssetData = function() {
      function AssetData() {}
      return AssetData;
    }();
    exports.AssetData = AssetData;
    var AssetItem = function() {
      function AssetItem(bundleName, assetBundle) {
        this.assetBundle = assetBundle;
        this.prefabMap = new Map();
        this.audioMap = new Map();
        this.spriteFrameMap = new Map();
        this.skeletonMap = new Map();
        this.MaterialMap = new Map();
        this.bundleName = bundleName;
      }
      AssetItem.prototype.preloadType = function(type) {};
      AssetItem.prototype.preLoadRes = function(path, asset) {
        this.prefabMap.has(path) || this.loadRes(path, asset);
      };
      AssetItem.prototype.getPrefab = function(path) {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!!this.prefabMap.has(path)) return [ 3, 2 ];
              return [ 4, this.loadRes(path, cc.Prefab) ];

             case 1:
              return [ 2, _a.sent() ];

             case 2:
              return [ 2, this.prefabMap.get(path) ];
            }
          });
        });
      };
      AssetItem.prototype.getSpine = function(url) {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!!this.skeletonMap.has(url)) return [ 3, 2 ];
              return [ 4, this.loadRes(url, sp.SkeletonData) ];

             case 1:
              return [ 2, _a.sent() ];

             case 2:
              return [ 2, this.skeletonMap.get(url) ];
            }
          });
        });
      };
      AssetItem.prototype.getMaterial = function(url) {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!!this.skeletonMap.has(url)) return [ 3, 2 ];
              return [ 4, this.loadRes(url, cc.Material) ];

             case 1:
              return [ 2, _a.sent() ];

             case 2:
              return [ 2, this.MaterialMap.get(url) ];
            }
          });
        });
      };
      AssetItem.prototype.getAudio = function(path) {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!!this.audioMap.has(path)) return [ 3, 2 ];
              return [ 4, this.loadRes(path, cc.AudioClip) ];

             case 1:
              return [ 2, _a.sent() ];

             case 2:
              return [ 2, this.audioMap.get(path) ];
            }
          });
        });
      };
      AssetItem.prototype.getSpriteFrame = function(path) {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!!this.spriteFrameMap.has(path)) return [ 3, 2 ];
              return [ 4, this.loadRes(path, cc.SpriteFrame) ];

             case 1:
              return [ 2, _a.sent() ];

             case 2:
              return [ 2, this.spriteFrameMap.get(path) ];
            }
          });
        });
      };
      AssetItem.prototype.loadRes = function(path, type) {
        return __awaiter(this, void 0, Promise, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              _this.assetBundle.load(path, type, function(err, asset) {
                if (err) {
                  console.log("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25: url:", path, "\u9519\u8bef\u65e5\u5fd7:", err);
                  resolve(void 0);
                } else resolve(asset);
              });
            }) ];
          });
        });
      };
      AssetItem.prototype.defRes = function(type, name) {
        return null;
      };
      AssetItem.prototype.clearAllRes = function() {
        var bundle = cc.assetManager.getBundle(this.bundleName);
        cc.assetManager.removeBundle(bundle);
        this.audioMap.forEach(function(value, key) {
          cc.assetManager.releaseAsset(value);
        });
        this.prefabMap.forEach(function(value, key) {
          cc.assetManager.releaseAsset(value);
        });
        this.spriteFrameMap.forEach(function(value, key) {
          cc.assetManager.releaseAsset(value);
        });
      };
      AssetItem.prototype.releaseBundle = function() {};
      return AssetItem;
    }();
    exports.AssetItem = AssetItem;
    cc._RF.pop();
  }, {} ],
  AssetsManger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef45cV3D9lOi7NSG05lL3LW", "AssetsManger");
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
    var AssetItem_1 = require("./AssetItem");
    var AssetsManger = function() {
      function AssetsManger() {
        this.bundleMap = new Map();
      }
      Object.defineProperty(AssetsManger, "instance", {
        get: function() {
          null == this._instance && (this._instance = new AssetsManger());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      AssetsManger.prototype.preloadBundle = function(bundleName) {
        var _this = this;
        return new Promise(function(res, rej) {
          _this.bundleMap.has(bundleName) ? res(_this.bundleMap.get(bundleName)) : cc.assetManager.loadBundle(bundleName, function(err, bundle) {
            if (err) console.error(err); else {
              var item = new AssetItem_1.AssetItem(bundleName, bundle);
              _this.bundleMap.set(bundleName, item);
              res(bundle);
            }
          });
        }).catch(function(e) {});
      };
      AssetsManger.prototype.preLoadRes = function(bundleName, resName, assetType) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!!this.bundleMap.has(bundleName)) return [ 3, 2 ];
              return [ 4, this.preloadBundle(bundleName) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              this.bundleMap.get(bundleName).preLoadRes(resName, assetType);
              return [ 2 ];
            }
          });
        });
      };
      AssetsManger.prototype.loadPrefab = function(prefabName, bundleName) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(res, rej) {
              return __awaiter(_this, void 0, void 0, function() {
                var prefab, error_1;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    if (!!this.bundleMap.has(bundleName)) return [ 3, 2 ];
                    return [ 4, this.preloadBundle(bundleName) ];

                   case 1:
                    _a.sent();
                    _a.label = 2;

                   case 2:
                    _a.trys.push([ 2, 4, , 5 ]);
                    return [ 4, this.bundleMap.get(bundleName).getPrefab(prefabName) ];

                   case 3:
                    prefab = _a.sent();
                    res(prefab);
                    return [ 3, 5 ];

                   case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [ 3, 5 ];

                   case 5:
                    return [ 2 ];
                  }
                });
              });
            }).then().catch(function(e) {}) ];
          });
        });
      };
      AssetsManger.prototype.loadAudio = function(audioName, bundleName) {
        var _this = this;
        return new Promise(function(res, rej) {
          return __awaiter(_this, void 0, void 0, function() {
            var prefab, error_2;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                if (!!this.bundleMap.has(bundleName)) return [ 3, 2 ];
                return [ 4, this.preloadBundle(bundleName) ];

               case 1:
                _a.sent();
                _a.label = 2;

               case 2:
                _a.trys.push([ 2, 4, , 5 ]);
                return [ 4, this.bundleMap.get(bundleName).getAudio(audioName) ];

               case 3:
                prefab = _a.sent();
                res(prefab);
                return [ 3, 5 ];

               case 4:
                error_2 = _a.sent();
                console.error(error_2);
                return [ 3, 5 ];

               case 5:
                return [ 2 ];
              }
            });
          });
        });
      };
      AssetsManger.prototype.loadImg = function(imgName, bundleName) {
        var _this = this;
        void 0 === bundleName && (bundleName = null);
        return new Promise(function(res, rej) {
          return __awaiter(_this, void 0, void 0, function() {
            var img, error_3;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                if (!!this.bundleMap.has(bundleName)) return [ 3, 2 ];
                return [ 4, this.preloadBundle(bundleName) ];

               case 1:
                _a.sent();
                _a.label = 2;

               case 2:
                _a.trys.push([ 2, 4, , 5 ]);
                return [ 4, this.bundleMap.get(bundleName).getSpriteFrame(imgName) ];

               case 3:
                img = _a.sent();
                res(img);
                return [ 3, 5 ];

               case 4:
                error_3 = _a.sent();
                console.error(error_3);
                return [ 3, 5 ];

               case 5:
                return [ 2 ];
              }
            });
          });
        });
      };
      AssetsManger.prototype.loadSpineData = function(spineName, bundleName) {
        var _this = this;
        void 0 === bundleName && (bundleName = null);
        return new Promise(function(res, rej) {
          return __awaiter(_this, void 0, void 0, function() {
            var spineData, error_4;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                if (!!this.bundleMap.has(bundleName)) return [ 3, 2 ];
                return [ 4, this.preloadBundle(bundleName) ];

               case 1:
                _a.sent();
                _a.label = 2;

               case 2:
                _a.trys.push([ 2, 4, , 5 ]);
                return [ 4, this.bundleMap.get(bundleName).getSpine(spineName) ];

               case 3:
                spineData = _a.sent();
                res(spineData);
                return [ 3, 5 ];

               case 4:
                error_4 = _a.sent();
                console.error(error_4);
                return [ 3, 5 ];

               case 5:
                return [ 2 ];
              }
            });
          });
        });
      };
      AssetsManger.prototype.loadMaterial = function(MaterialName, bundleName) {
        var _this = this;
        void 0 === bundleName && (bundleName = null);
        return new Promise(function(res, rej) {
          return __awaiter(_this, void 0, void 0, function() {
            var MaterialData, error_5;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                if (!!this.bundleMap.has(bundleName)) return [ 3, 2 ];
                return [ 4, this.preloadBundle(bundleName) ];

               case 1:
                _a.sent();
                _a.label = 2;

               case 2:
                _a.trys.push([ 2, 4, , 5 ]);
                return [ 4, this.bundleMap.get(bundleName).getMaterial(MaterialName) ];

               case 3:
                MaterialData = _a.sent();
                res(MaterialData);
                return [ 3, 5 ];

               case 4:
                error_5 = _a.sent();
                console.error(error_5);
                return [ 3, 5 ];

               case 5:
                return [ 2 ];
              }
            });
          });
        });
      };
      AssetsManger.prototype.delPrefab = function() {};
      AssetsManger.prototype.clearBundle = function(bundle) {
        if (this.bundleMap.has(bundle)) {
          this.bundleMap.get(bundle).clearAllRes();
          this.bundleMap.delete(bundle);
        }
      };
      AssetsManger.prototype.defAudio = function() {};
      return AssetsManger;
    }();
    exports.default = AssetsManger;
    cc._RF.pop();
  }, {
    "./AssetItem": "AssetItem"
  } ],
  AudioManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dce94FFCuBC7IYGJtfakMT6", "AudioManager");
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
    var AudioUtil_1 = require("./AudioUtil");
    var AudioManager = function() {
      function AudioManager() {}
      AudioManager.init = function() {
        var effectSwitch = "false" === cc.sys.localStorage.getItem(AudioManager.EFFECT_TAG);
        var musicSwitch = "false" === cc.sys.localStorage.getItem(AudioManager.MUSIC_TAG);
        AudioManager._effectFlag = !effectSwitch;
        AudioManager._musicFlag = !musicSwitch;
        this.setEffectStatus(AudioManager._effectFlag);
        this.setMusicStatus(AudioManager._musicFlag);
      };
      AudioManager.playAudioSound = function(bundleName, name, finishCb) {
        if (!bundleName || "" === bundleName) {
          cc.warn("playAudio bundleName nil! audio name: " + name);
          return;
        }
        AudioManager._effectFlag && AudioUtil_1.default.playAudioSound(bundleName, name, finishCb);
      };
      AudioManager.playEffect = function(bundleName, name, finishCb) {
        if (!bundleName || "" === bundleName) {
          cc.warn("playEffect bundleName nil! audio name: " + name);
          return;
        }
        AudioManager._effectFlag && AudioUtil_1.default.playEffect(bundleName, name, finishCb);
      };
      AudioManager.playEffectByName = function(bundleName, name, isSingle, isLoop) {
        void 0 === isSingle && (isSingle = true);
        void 0 === isLoop && (isLoop = false);
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!bundleName || "" === bundleName) return [ 2 ];
              if (!AudioManager._effectFlag) return [ 3, 2 ];
              return [ 4, AudioUtil_1.default.playEffectByName(bundleName, name, isSingle, isLoop) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      AudioManager.stopEffect = function() {
        AudioUtil_1.default.stopEffect();
      };
      AudioManager.stopAudioSound = function() {
        AudioUtil_1.default.stopAudioSound();
      };
      AudioManager.stopEffectByName = function(name) {
        AudioUtil_1.default.stopEffectByName(name);
      };
      AudioManager.destroyAudio = function(bundleName, name) {
        AudioUtil_1.default.destroyAudio(bundleName, name);
      };
      AudioManager.playLoopEffect = function(bundleName, name) {
        AudioManager._effectFlag && AudioUtil_1.default.playLoopEffect(bundleName, name);
      };
      AudioManager.stopLoopEffect = function(bundleName, name) {
        AudioUtil_1.default.stopLoopEffect(bundleName, name);
      };
      AudioManager.pauseLoopEffects = function() {
        AudioUtil_1.default.pauseLoopEffects();
      };
      AudioManager.resumeLoopEffects = function() {
        AudioManager._effectFlag && AudioUtil_1.default.resumeLoopEffects();
      };
      AudioManager.playMusic = function(bundleName, name) {
        if (!bundleName || "" === bundleName) return;
        AudioManager._curMusic = name;
        AudioManager._curBundle = bundleName;
        AudioManager._musicFlag && AudioUtil_1.default.playMusic(bundleName, name);
      };
      AudioManager.stopMusic = function() {
        AudioUtil_1.default.stopMusic();
      };
      AudioManager.passMusic = function() {
        AudioUtil_1.default.passMusic();
      };
      AudioManager.resumeMusic = function() {
        AudioUtil_1.default.resumeMusic();
      };
      AudioManager.setMusicStatus = function(flag) {
        AudioManager._musicFlag = flag;
        cc.sys.localStorage.setItem(AudioManager.MUSIC_TAG, flag);
        flag ? AudioManager.playMusic(AudioManager._curBundle, AudioManager._curMusic) : AudioManager.stopMusic();
      };
      AudioManager.setEffectStatus = function(flag) {
        AudioManager._effectFlag = flag;
        cc.sys.localStorage.setItem(AudioManager.EFFECT_TAG, flag);
        cc.log("AudioManager.setEffectStatus.flag" + flag);
        flag ? this.resumeLoopEffects() : this.pauseLoopEffects();
      };
      Object.defineProperty(AudioManager, "effectFlag", {
        get: function() {
          return AudioManager._effectFlag;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AudioManager, "musicFlag", {
        get: function() {
          return AudioManager._musicFlag;
        },
        enumerable: false,
        configurable: true
      });
      AudioManager.EFFECT_TAG = "ChineseAi_EFFECT_TAG";
      AudioManager.MUSIC_TAG = "ChineseAi_MUSIC_TAG";
      AudioManager._effectFlag = true;
      AudioManager._musicFlag = true;
      AudioManager._curMusic = "";
      return AudioManager;
    }();
    exports.default = AudioManager;
    cc._RF.pop();
  }, {
    "./AudioUtil": "AudioUtil"
  } ],
  AudioUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "424b0MMitNPnawl42j840ex", "AudioUtil");
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
    var AssetsManger_1 = require("../assets/AssetsManger");
    var TimerSystem_1 = require("../timer/TimerSystem");
    var MusicType;
    (function(MusicType) {
      MusicType[MusicType["SOUND"] = 0] = "SOUND";
      MusicType[MusicType["MUSIC"] = 1] = "MUSIC";
      MusicType[MusicType["AUDIO_SOUND"] = 2] = "AUDIO_SOUND";
      MusicType[MusicType["LOOP_SOUND"] = 3] = "LOOP_SOUND";
    })(MusicType = exports.MusicType || (exports.MusicType = {}));
    var AudioUtil = function() {
      function AudioUtil() {}
      AudioUtil.getFixedPath = function(bundleName, path) {
        var cachePath = "";
        cachePath = bundleName;
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
      AudioUtil.playAudioSound = function(bundleName, path, finishCb) {
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
        AudioUtil.stopAudioSound();
        if (source) source.play(false, finishCb); else {
          source = new __AudioSource(bundleName, path, MusicType.AUDIO_SOUND);
          AudioUtil.addEffectToPool(fixedPath, source);
          source.play(false, finishCb);
        }
      };
      AudioUtil.stopAudioSound = function() {
        AudioUtil._soundPool.forEach(function(value, key, map) {
          if (value) for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
            var source = value_2[_i];
            source.musicType == MusicType.AUDIO_SOUND && source.stop();
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
      Object.defineProperty(__AudioSource.prototype, "musicType", {
        get: function() {
          return this._musicType;
        },
        enumerable: false,
        configurable: true
      });
      __AudioSource.prototype.loadRes = function(cb) {
        var _this = this;
        this._loaded || AssetsManger_1.default.instance.loadAudio(this._path, this._bundleName).then(function(audio) {
          _this._audioSource = audio;
          _this._loaded = true;
          cb && cb();
        });
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
            TimerSystem_1.default.instance.doOnce(1e3 * duration, function() {
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
    "../assets/AssetsManger": "AssetsManger",
    "../timer/TimerSystem": "TimerSystem"
  } ],
  BaseEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94f1f9/B9FJnKQanN4PcXQR", "BaseEvent");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BaseEvent = void 0;
    var BaseEvent;
    (function(BaseEvent) {
      BaseEvent[BaseEvent["BASE_EVENT_RECORD_AIN_END"] = 0] = "BASE_EVENT_RECORD_AIN_END";
      BaseEvent[BaseEvent["EVENT_RECORD_AIN_START"] = 1] = "EVENT_RECORD_AIN_START";
      BaseEvent[BaseEvent["ANSWER_COMPLETED"] = 2] = "ANSWER_COMPLETED";
      BaseEvent[BaseEvent["AUDIO_COMPLETED"] = 3] = "AUDIO_COMPLETED";
      BaseEvent["EVENT_NATIVE_CALL_COCOS"] = "event_native_call_cocos";
      BaseEvent["EVENT_NATIVE_LOADED"] = "event_native_loaded";
      BaseEvent["EVENT_FOLLOW_UP"] = "event_follow_up";
      BaseEvent["EVENT_FOLLOW_UP_RIGHT"] = "event_follow_up_right";
      BaseEvent["EVENT_FOLLOW_UP_WRONG"] = "event_follow_up_wrong";
    })(BaseEvent = exports.BaseEvent || (exports.BaseEvent = {}));
    cc._RF.pop();
  }, {} ],
  ListenerManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f972ebJY8pBYaH1SNRxPIgX", "ListenerManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ListenerManager = void 0;
    var ListenerManagerClass = function() {
      function ListenerManagerClass() {
        this.handle = {};
      }
      ListenerManagerClass.getInstance = function() {
        null === this._instance && (this._instance = new ListenerManagerClass());
        return this._instance;
      };
      ListenerManagerClass.prototype.on = function(eventName, cb, target) {
        if (this.hasEvent(eventName, cb, target)) return;
        this.handle[eventName] || (this.handle[eventName] = []);
        var data = {
          func: cb,
          target: target
        };
        this.handle[eventName].push(data);
      };
      ListenerManagerClass.prototype.off = function(eventName, cb, target) {
        var list = this.handle[eventName];
        if (!list || list.length <= 0) return;
        for (var i = 0; i < list.length; i++) {
          var event = list[i];
          if (cb == event.func && (!target || target == event.target)) {
            list.splice(i, 1);
            break;
          }
        }
      };
      ListenerManagerClass.prototype.dispatch = function(eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var list = this.handle[eventName];
        if (!list || list.length <= 0) return;
        for (var i = 0; i < list.length; i++) {
          var event = list[i];
          event.func.apply(event.target, args);
        }
      };
      ListenerManagerClass.prototype.removeAll = function(target) {
        if (target) for (var key in this.handle) {
          var list = this.handle[key];
          for (var i = 0, l = list.length; i < l; i++) {
            var event = list[i];
            if (event.target == target) {
              list.splice(i, 1);
              l > 0 && l--;
              i--;
            }
          }
        } else for (var key in this.handle) {
          var list = this.handle[key];
          while (list.length > 0) list.pop();
        }
      };
      ListenerManagerClass.prototype.hasEvent = function(eventName, cb, target) {
        var list = this.handle[eventName];
        if (!list || list.length <= 0) return false;
        for (var i = 0; i < list.length; i++) {
          var event = list[i];
          if (cb == event.func && (!target || target == event.target)) return true;
        }
        return false;
      };
      ListenerManagerClass._instance = null;
      return ListenerManagerClass;
    }();
    exports.ListenerManager = ListenerManagerClass.getInstance();
    cc._RF.pop();
  }, {} ],
  TigoManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8305fn4aM1EUZF6HtfZGz6/", "TigoManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseEvent_1 = require("./event/BaseEvent");
    var ListenerManager_1 = require("./event/ListenerManager");
    var TigoManager = function() {
      function TigoManager() {
        this.appInfo = null;
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
          TiGoStarsAnimation: "TiGoStarsAnimation",
          TiGoStartMotion: "TiGoStartMotion",
          TiGoStopMotion: "TiGoStopMotion",
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
          this.appInfo = json;
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
      TigoManager.prototype.callMotion = function(isOpen) {
        void 0 === isOpen && (isOpen = false);
        var handleData = {
          action: isOpen ? this.CocosByNativeAction.TiGoStartMotion : this.CocosByNativeAction.TiGoStopMotion
        };
        this.getNative(handleData);
        cc.log("callMotion ============== " + JSON.stringify(handleData));
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
        if (null == this.appInfo) if (window.tiGo) {
          info = window.tiGo.callApp(JSON.stringify(handleData));
          this.appInfo = JSON.parse(info);
        } else if (window.webkit) {
          info = window.prompt("callApp", JSON.stringify(handleData));
          this.appInfo = JSON.parse(info);
        }
        return this.appInfo;
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
      TigoManager.prototype.callAppToTigoStar = function(starNum) {
        var handleData = {
          action: this.CocosByNativeAction.TiGoStarsAnimation,
          param: {
            score: starNum.toString()
          }
        };
        this.getNative(handleData);
        console.log("callAppToTigoStar ============== " + JSON.stringify(handleData));
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
      "TiGoLifecycle" == msg1.action ? ListenerManager_1.ListenerManager.dispatch(BaseEvent_1.BaseEvent.EVENT_NATIVE_LOADED, msg1) : ListenerManager_1.ListenerManager.dispatch(BaseEvent_1.BaseEvent.EVENT_NATIVE_CALL_COCOS, msg1);
      return "callByAndroidParam ok!";
    };
    exports.default = TigoManager.getInstance();
    cc._RF.pop();
  }, {
    "./event/BaseEvent": "BaseEvent",
    "./event/ListenerManager": "ListenerManager"
  } ],
  TimerSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38429vE6/hOeYvTa+IgeeYh", "TimerSystem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TimerSystem = function() {
      function TimerSystem() {
        this._pool = new Array();
        this._handlers = {};
        this._currTimer = 0;
        this._currFrame = 0;
        this._count = 0;
        this._index = 0;
        this._startTime = 0;
        this._counterMap = new Map();
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
      TimerSystem.prototype.timerStart = function(signKey) {
        if (!signKey) {
          cc.error("timerStart signKey null!");
          return;
        }
        if (this._counterMap.has(signKey)) {
          var counter_1 = this._counterMap.get(signKey);
          var durTime = counter_1.durTime;
          counter_1.resetDurTime();
          return durTime;
        }
        var counter = new TimerCounter(signKey);
        this._counterMap.set(signKey, counter);
      };
      TimerSystem.prototype.timerEnd = function(signKey) {
        if (!signKey) {
          cc.error("timerStart signKey null!");
          return;
        }
        if (!this._counterMap.has(signKey)) return 0;
        var counter = this._counterMap.get(signKey);
        var durTime = counter.durTime;
        this._counterMap.delete(signKey);
        return durTime;
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
    }();
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
    var TimerCounter = function() {
      function TimerCounter(signKey) {
        this.signKey = signKey;
      }
      TimerCounter.prototype.resetDurTime = function() {
        this.durTime = 0;
      };
      return TimerCounter;
    }();
    cc._RF.pop();
  }, {} ]
}, {}, [ "TigoManager", "AssetItem", "AssetsManger", "AudioManager", "AudioUtil", "BaseEvent", "ListenerManager", "TimerSystem" ]);