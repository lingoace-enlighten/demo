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
  CommonResEnum: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "85ea5/NSdtOR7RXhfJ4ErIs", "CommonResEnum");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CommonAudioName = exports.CommonResBundleName = void 0;
    exports.CommonResBundleName = "commonRes";
    var CommonAudioName;
    (function(CommonAudioName) {
      CommonAudioName["gameError"] = "audio/game_error";
      CommonAudioName["gameRight"] = "audio/game_right";
      CommonAudioName["listenAndSay"] = "audio/listen_and_say";
      CommonAudioName["record"] = "audio/record";
      CommonAudioName["coinLarge"] = "audio/coin_large";
      CommonAudioName["Oopsy"] = "audio/Oopsy";
    })(CommonAudioName = exports.CommonAudioName || (exports.CommonAudioName = {}));
    cc._RF.pop();
  }, {} ]
}, {}, [ "CommonResEnum" ]);