window.__require=function e(t,o,n){function i(s,a){if(!o[s]){if(!t[s]){var u=s.split("/");if(u=u[u.length-1],!t[u]){var c="function"==typeof __require&&__require;if(!a&&c)return c(u,!0);if(r)return r(u,!0);throw new Error("Cannot find module '"+s+"'")}s=u}var l=o[s]={exports:{}};t[s][0].call(l.exports,function(e){return i(t[s][1][e]||e)},l,l.exports,e,t,o,n)}return o[s].exports}for(var r="function"==typeof __require&&__require,s=0;s<n.length;s++)i(n[s]);return i}({AssetItem:[function(e,t,o){"use strict";cc._RF.push(t,"9ab33GEBZVO0aYyAJmt1SOX","AssetItem");var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(i,r){function s(e){try{u(n.next(e))}catch(t){r(t)}}function a(e){try{u(n.throw(e))}catch(t){r(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(s,a)}u((n=n.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var o,n,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(e){return function(t){return u([e,t])}}function u(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(a){r=[6,a],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0}),o.AssetItem=o.AssetData=void 0;o.AssetData=function(){};var r=function(){function e(e,t){this.assetBundle=t,this.prefabMap=new Map,this.audioMap=new Map,this.spriteFrameMap=new Map,this.skeletonMap=new Map,this.MaterialMap=new Map,this.bundleName=e}return e.prototype.preloadType=function(){},e.prototype.preLoadRes=function(e,t){this.prefabMap.has(e)||this.loadRes(e,t)},e.prototype.getPrefab=function(e){return n(this,void 0,Promise,function(){return i(this,function(t){switch(t.label){case 0:return this.prefabMap.has(e)?[3,2]:[4,this.loadRes(e,cc.Prefab)];case 1:return[2,t.sent()];case 2:return[2,this.prefabMap.get(e)]}})})},e.prototype.getSpine=function(e){return n(this,void 0,Promise,function(){return i(this,function(t){switch(t.label){case 0:return this.skeletonMap.has(e)?[3,2]:[4,this.loadRes(e,sp.SkeletonData)];case 1:return[2,t.sent()];case 2:return[2,this.skeletonMap.get(e)]}})})},e.prototype.getMaterial=function(e){return n(this,void 0,Promise,function(){return i(this,function(t){switch(t.label){case 0:return this.skeletonMap.has(e)?[3,2]:[4,this.loadRes(e,cc.Material)];case 1:return[2,t.sent()];case 2:return[2,this.MaterialMap.get(e)]}})})},e.prototype.getAudio=function(e){return n(this,void 0,Promise,function(){return i(this,function(t){switch(t.label){case 0:return this.audioMap.has(e)?[3,2]:[4,this.loadRes(e,cc.AudioClip)];case 1:return[2,t.sent()];case 2:return[2,this.audioMap.get(e)]}})})},e.prototype.getSpriteFrame=function(e){return n(this,void 0,Promise,function(){return i(this,function(t){switch(t.label){case 0:return this.spriteFrameMap.has(e)?[3,2]:[4,this.loadRes(e,cc.SpriteFrame)];case 1:return[2,t.sent()];case 2:return[2,this.spriteFrameMap.get(e)]}})})},e.prototype.loadRes=function(e,t){return n(this,void 0,Promise,function(){var o=this;return i(this,function(){return[2,new Promise(function(n){o.assetBundle.load(e,t,function(t,o){t?(console.log("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25: url:",e,"\u9519\u8bef\u65e5\u5fd7:",t),n(void 0)):n(o)})})]})})},e.prototype.defRes=function(){return null},e.prototype.clearAllRes=function(){var e=cc.assetManager.getBundle(this.bundleName);cc.assetManager.removeBundle(e),this.audioMap.forEach(function(e){cc.assetManager.releaseAsset(e)}),this.prefabMap.forEach(function(e){cc.assetManager.releaseAsset(e)}),this.spriteFrameMap.forEach(function(e){cc.assetManager.releaseAsset(e)})},e.prototype.releaseBundle=function(){},e}();o.AssetItem=r,cc._RF.pop()},{}],AssetsManger:[function(e,t,o){"use strict";cc._RF.push(t,"ef45cV3D9lOi7NSG05lL3LW","AssetsManger");var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(i,r){function s(e){try{u(n.next(e))}catch(t){r(t)}}function a(e){try{u(n.throw(e))}catch(t){r(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(s,a)}u((n=n.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var o,n,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(e){return function(t){return u([e,t])}}function u(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(a){r=[6,a],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var r=e("./AssetItem"),s=function(){function e(){this.bundleMap=new Map}return Object.defineProperty(e,"instance",{get:function(){return null==this._instance&&(this._instance=new e),this._instance},enumerable:!1,configurable:!0}),e.prototype.preloadBundle=function(e){var t=this;return new Promise(function(o){t.bundleMap.has(e)?o(t.bundleMap.get(e)):cc.assetManager.loadBundle(e,function(n,i){if(n)console.error(n);else{var s=new r.AssetItem(e,i);t.bundleMap.set(e,s),o(i)}})}).catch(function(){})},e.prototype.preLoadRes=function(e,t,o){return n(this,void 0,void 0,function(){return i(this,function(n){switch(n.label){case 0:return this.bundleMap.has(e)?[3,2]:[4,this.preloadBundle(e)];case 1:n.sent(),n.label=2;case 2:return this.bundleMap.get(e).preLoadRes(t,o),[2]}})})},e.prototype.loadPrefab=function(e,t){return n(this,void 0,void 0,function(){var o=this;return i(this,function(){return[2,new Promise(function(r){return n(o,void 0,void 0,function(){var o,n;return i(this,function(i){switch(i.label){case 0:return this.bundleMap.has(t)?[3,2]:[4,this.preloadBundle(t)];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,4,,5]),[4,this.bundleMap.get(t).getPrefab(e)];case 3:return o=i.sent(),r(o),[3,5];case 4:return n=i.sent(),console.error(n),[3,5];case 5:return[2]}})})}).then().catch(function(){})]})})},e.prototype.loadAudio=function(e,t){var o=this;return new Promise(function(r){return n(o,void 0,void 0,function(){var o,n;return i(this,function(i){switch(i.label){case 0:return this.bundleMap.has(t)?[3,2]:[4,this.preloadBundle(t)];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,4,,5]),[4,this.bundleMap.get(t).getAudio(e)];case 3:return o=i.sent(),r(o),[3,5];case 4:return n=i.sent(),console.error(n),[3,5];case 5:return[2]}})})})},e.prototype.loadImg=function(e,t){var o=this;return void 0===t&&(t=null),new Promise(function(r){return n(o,void 0,void 0,function(){var o,n;return i(this,function(i){switch(i.label){case 0:return this.bundleMap.has(t)?[3,2]:[4,this.preloadBundle(t)];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,4,,5]),[4,this.bundleMap.get(t).getSpriteFrame(e)];case 3:return o=i.sent(),r(o),[3,5];case 4:return n=i.sent(),console.error(n),[3,5];case 5:return[2]}})})})},e.prototype.loadSpineData=function(e,t){var o=this;return void 0===t&&(t=null),new Promise(function(r){return n(o,void 0,void 0,function(){var o,n;return i(this,function(i){switch(i.label){case 0:return this.bundleMap.has(t)?[3,2]:[4,this.preloadBundle(t)];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,4,,5]),[4,this.bundleMap.get(t).getSpine(e)];case 3:return o=i.sent(),r(o),[3,5];case 4:return n=i.sent(),console.error(n),[3,5];case 5:return[2]}})})})},e.prototype.loadMaterial=function(e,t){var o=this;return void 0===t&&(t=null),new Promise(function(r){return n(o,void 0,void 0,function(){var o,n;return i(this,function(i){switch(i.label){case 0:return this.bundleMap.has(t)?[3,2]:[4,this.preloadBundle(t)];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,4,,5]),[4,this.bundleMap.get(t).getMaterial(e)];case 3:return o=i.sent(),r(o),[3,5];case 4:return n=i.sent(),console.error(n),[3,5];case 5:return[2]}})})})},e.prototype.delPrefab=function(){},e.prototype.clearBundle=function(e){this.bundleMap.has(e)&&(this.bundleMap.get(e).clearAllRes(),this.bundleMap.delete(e))},e.prototype.defAudio=function(){},e}();o.default=s,cc._RF.pop()},{"./AssetItem":"AssetItem"}],AudioManager:[function(e,t,o){"use strict";cc._RF.push(t,"dce94FFCuBC7IYGJtfakMT6","AudioManager");var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(i,r){function s(e){try{u(n.next(e))}catch(t){r(t)}}function a(e){try{u(n.throw(e))}catch(t){r(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(s,a)}u((n=n.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var o,n,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(e){return function(t){return u([e,t])}}function u(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(a){r=[6,a],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var r=e("./AudioUtil"),s=function(){function e(){}return e.init=function(){var t="false"===cc.sys.localStorage.getItem(e.EFFECT_TAG),o="false"===cc.sys.localStorage.getItem(e.MUSIC_TAG);e._effectFlag=!t,e._musicFlag=!o,this.setEffectStatus(e._effectFlag),this.setMusicStatus(e._musicFlag)},e.playAudioSound=function(t,o,n){t&&""!==t?e._effectFlag&&r.default.playAudioSound(t,o,n):cc.warn("playAudio bundleName nil! audio name: "+o)},e.playEffect=function(t,o,n){t&&""!==t?e._effectFlag&&r.default.playEffect(t,o,n):cc.warn("playEffect bundleName nil! audio name: "+o)},e.playEffectByName=function(t,o,s,a){return void 0===s&&(s=!0),void 0===a&&(a=!1),n(this,void 0,void 0,function(){return i(this,function(n){switch(n.label){case 0:return t&&""!==t?e._effectFlag?[4,r.default.playEffectByName(t,o,s,a)]:[3,2]:[2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},e.stopEffect=function(){r.default.stopEffect()},e.stopAudioSound=function(){r.default.stopAudioSound()},e.stopEffectByName=function(e){r.default.stopEffectByName(e)},e.destroyAudio=function(e,t){r.default.destroyAudio(e,t)},e.playLoopEffect=function(t,o){e._effectFlag&&r.default.playLoopEffect(t,o)},e.stopLoopEffect=function(e,t){r.default.stopLoopEffect(e,t)},e.pauseLoopEffects=function(){r.default.pauseLoopEffects()},e.resumeLoopEffects=function(){e._effectFlag&&r.default.resumeLoopEffects()},e.playMusic=function(t,o){t&&""!==t&&(e._curMusic=o,e._curBundle=t,e._musicFlag&&r.default.playMusic(t,o))},e.stopMusic=function(){r.default.stopMusic()},e.passMusic=function(){r.default.passMusic()},e.resumeMusic=function(){r.default.resumeMusic()},e.setMusicStatus=function(t){e._musicFlag=t,cc.sys.localStorage.setItem(e.MUSIC_TAG,t),t?e.playMusic(e._curBundle,e._curMusic):e.stopMusic()},e.setEffectStatus=function(t){e._effectFlag=t,cc.sys.localStorage.setItem(e.EFFECT_TAG,t),cc.log("AudioManager.setEffectStatus.flag"+t),t?this.resumeLoopEffects():this.pauseLoopEffects()},Object.defineProperty(e,"effectFlag",{get:function(){return e._effectFlag},enumerable:!1,configurable:!0}),Object.defineProperty(e,"musicFlag",{get:function(){return e._musicFlag},enumerable:!1,configurable:!0}),e.EFFECT_TAG="ChineseAi_EFFECT_TAG",e.MUSIC_TAG="ChineseAi_MUSIC_TAG",e._effectFlag=!0,e._musicFlag=!0,e._curMusic="",e}();o.default=s,cc._RF.pop()},{"./AudioUtil":"AudioUtil"}],AudioUtil:[function(e,t,o){"use strict";cc._RF.push(t,"424b0MMitNPnawl42j840ex","AudioUtil");var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(i,r){function s(e){try{u(n.next(e))}catch(t){r(t)}}function a(e){try{u(n.throw(e))}catch(t){r(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(s,a)}u((n=n.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var o,n,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(e){return function(t){return u([e,t])}}function u(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(a){r=[6,a],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0}),o.MusicType=void 0;var r,s=e("../assets/AssetsManger"),a=e("../timer/TimerSystem");(function(e){e[e.SOUND=0]="SOUND",e[e.MUSIC=1]="MUSIC",e[e.AUDIO_SOUND=2]="AUDIO_SOUND",e[e.LOOP_SOUND=3]="LOOP_SOUND"})(r=o.MusicType||(o.MusicType={}));var u=function(){function e(){}return e.getFixedPath=function(e,t){return e+"/"+t},e.playEffect=function(t,o,n){if(!e._pauseFlag){var i=(new Date).getTime();if(o===e._curSound&&i-e._lastSoundTime<50)return;e._curSound=o,e._lastSoundTime=i;var s=e.getFixedPath(t,o),a=e.getEffectFromPool(s);a?a.play(!1,n):(a=new c(t,o,r.SOUND),e.addEffectToPool(s,a),a.play(!1,n))}},e.stopEffect=function(){e._soundPool.forEach(function(e){if(e)for(var t=0,o=e;t<o.length;t++)o[t].stop()})},e.playAudioSound=function(t,o,n){if(!e._pauseFlag){var i=(new Date).getTime();if(o===e._curSound&&i-e._lastSoundTime<50)return;e._curSound=o,e._lastSoundTime=i;var s=e.getFixedPath(t,o),a=e.getEffectFromPool(s);e.stopAudioSound(),a?a.play(!1,n):(a=new c(t,o,r.AUDIO_SOUND),e.addEffectToPool(s,a),a.play(!1,n))}},e.stopAudioSound=function(){e._soundPool.forEach(function(e){if(e)for(var t=0,o=e;t<o.length;t++){var n=o[t];n.musicType==r.AUDIO_SOUND&&n.stop()}})},e.playLoopEffect=function(t,o){if(!e._pauseFlag){var n=e.getFixedPath(t,o),i=e._loopSoundPool.get(n);i||(i=new c(t,o,r.LOOP_SOUND),e._loopSoundPool.set(n,i)),i.play(!0)}},e.stopLoopEffect=function(t,o){var n=e.getFixedPath(t,o),i=e._loopSoundPool.get(n);i&&i.stop()},e.playMusic=function(t,o){if(!e._pauseFlag){e._curMusic&&e._curMusic.stop();var n=e.getFixedPath(t,o),i=e._musicPool.get(n);i?i.play(!0):(i=new c(t,o,r.MUSIC),e._musicPool.set(n,i),i.play(!0)),e._curMusic=i}},e.stopMusic=function(){e._curMusic&&e._curMusic.stop()},e.passMusic=function(){e._curMusic&&e._curMusic.pause()},e.resumeMusic=function(){e._curMusic&&e._curMusic.resume()},e.getEffectFromPool=function(t){var o=e._soundPool.get(t);if(o)for(var n=0,i=o;n<i.length;n++){var r=i[n];if(!r.isPlaying())return r}return null},e.addEffectToPool=function(t,o){var n=e._soundPool.get(t);n?n.push(o):((n=[]).push(o),e._soundPool.set(t,n))},e.setPauseFlag=function(t,o){void 0===o&&(o=0),e._level=o,e._pauseFlag=t,t?(e._curMusic&&e._curMusic.pause(),e.pauseLoopEffects()):(e._curMusic&&e._curMusic.resume(),e.resumeLoopEffects())},e.pauseLoopEffects=function(){e._loopSoundPool.forEach(function(e){e.pause()})},e.resumeLoopEffects=function(){e._loopSoundPool.forEach(function(e){e.resume()})},e.stopEffectByName=function(t){var o=e._soundPool.get(t);o&&o.forEach(function(e){e.stop()})},e.playEffectByName=function(t,o,s,a){return void 0===s&&(s=!0),void 0===a&&(a=!1),n(this,void 0,void 0,function(){return i(this,function(){return[2,new Promise(function(n){if(e._pauseFlag)n();else{var i=(new Date).getTime();if(o===e._curSound&&i-e._lastSoundTime<50)return void n();var u=e.getFixedPath(t,o);s&&e.stopEffectByName(u),e._curSound=o,e._lastSoundTime=i;var l=null;(l=a?e._loopSoundPool.get(u):e.getEffectFromPool(u))?l.play(a,function(){n()}):(l=new c(t,o,r.SOUND),a?e._loopSoundPool.set(u,l):e.addEffectToPool(u,l),l.play(a,function(){n()}))}})]})})},e.destroyAudio=function(t,o){var n=e.getFixedPath(t,o);e._soundPool.has(n)&&(e.stopEffectByName(n),e._soundPool.get(n).forEach(function(e){e.destroy()}),e._soundPool.delete(n)),e._musicPool.has(n)&&(e.stopMusic(),e._musicPool.get(n).destroy(),e._musicPool.delete(n)),e._loopSoundPool.has(n)&&(e.stopLoopEffect(t,o),e._loopSoundPool.get(n).destroy(),e._loopSoundPool.delete(n))},e._musicPool=new Map,e._soundPool=new Map,e._loopSoundPool=new Map,e._curSound="",e._lastSoundTime=0,e._pauseFlag=!1,e._level=0,e}();o.default=u;var c=function(){function e(e,t,o){this._loaded=!1,this._audioSource=null,this._path="",this.state={},this._bundleName=e,this._path=t,this._musicType=o}return Object.defineProperty(e.prototype,"musicType",{get:function(){return this._musicType},enumerable:!1,configurable:!0}),e.prototype.loadRes=function(e){var t=this;this._loaded||s.default.instance.loadAudio(this._path,this._bundleName).then(function(o){t._audioSource=o,t._loaded=!0,e&&e()})},e.prototype.play=function(e,t){var o=this;if(this._isStop=!1,this._loaded){if(this.stop(),e||(e=!1),this.state.isLoop=e,this.state.isPlaying=!0,this._musicType==r.MUSIC?this.state.id=cc.audioEngine.playMusic(this._audioSource,e):this.state.id=cc.audioEngine.playEffect(this._audioSource,e),t){var n=this._audioSource.duration;a.default.instance.doOnce(1e3*n,function(){t()},this,null,!1)}}else this.loadRes(function(){o._isStop||o.play(e,t)})},e.prototype.playEffect=function(e){return n(this,void 0,void 0,function(){var t=this;return i(this,function(){return[2,new Promise(function(o){t.play(e,function(){o()})})]})})},e.prototype.isPlaying=function(){return this.state.isPlaying},e.prototype.stop=function(){this._isStop=!0,this._loaded&&null!=this.state.id&&null!=this.state.id&&(this._musicType==r.MUSIC?cc.audioEngine.stopMusic():cc.audioEngine.stopEffect(this.state.id))},e.prototype.pause=function(){this._loaded&&this.state.id&&(this._musicType==r.MUSIC?cc.audioEngine.pauseMusic():cc.audioEngine.pauseEffect(this.state.id))},e.prototype.resume=function(){this._loaded&&this.state.id&&(this._musicType==r.MUSIC?cc.audioEngine.resumeMusic():cc.audioEngine.resumeEffect(this.state.id))},e.prototype.destroy=function(){this.stop(),this._audioSource&&(cc.assetManager.releaseAsset(this._audioSource),this._audioSource.destroy(),this._audioSource=null)},e}();cc._RF.pop()},{"../assets/AssetsManger":"AssetsManger","../timer/TimerSystem":"TimerSystem"}],BaseEvent:[function(e,t,o){"use strict";cc._RF.push(t,"94f1f9/B9FJnKQanN4PcXQR","BaseEvent"),Object.defineProperty(o,"__esModule",{value:!0}),o.BaseEvent=void 0,function(e){e[e.BASE_EVENT_RECORD_AIN_END=0]="BASE_EVENT_RECORD_AIN_END",e[e.EVENT_RECORD_AIN_START=1]="EVENT_RECORD_AIN_START",e[e.ANSWER_COMPLETED=2]="ANSWER_COMPLETED",e[e.AUDIO_COMPLETED=3]="AUDIO_COMPLETED",e.EVENT_NATIVE_CALL_COCOS="event_native_call_cocos",e.EVENT_NATIVE_LOADED="event_native_loaded",e.EVENT_FOLLOW_UP="event_follow_up",e.EVENT_FOLLOW_UP_RIGHT="event_follow_up_right",e.EVENT_FOLLOW_UP_WRONG="event_follow_up_wrong"}(o.BaseEvent||(o.BaseEvent={})),cc._RF.pop()},{}],ListenerManager:[function(e,t,o){"use strict";cc._RF.push(t,"f972ebJY8pBYaH1SNRxPIgX","ListenerManager"),Object.defineProperty(o,"__esModule",{value:!0}),o.ListenerManager=void 0;var n=function(){function e(){this.handle={}}return e.getInstance=function(){return null===this._instance&&(this._instance=new e),this._instance},e.prototype.on=function(e,t,o){if(!this.hasEvent(e,t,o)){this.handle[e]||(this.handle[e]=[]);var n={func:t,target:o};this.handle[e].push(n)}},e.prototype.off=function(e,t,o){var n=this.handle[e];if(n&&!(n.length<=0))for(var i=0;i<n.length;i++){var r=n[i];if(t==r.func&&(!o||o==r.target)){n.splice(i,1);break}}},e.prototype.dispatch=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var n=this.handle[e];if(n&&!(n.length<=0))for(var i=0;i<n.length;i++){var r=n[i];r.func.apply(r.target,t)}},e.prototype.removeAll=function(e){if(e)for(var t in this.handle)for(var o=0,n=(i=this.handle[t]).length;o<n;o++)i[o].target==e&&(i.splice(o,1),n>0&&n--,o--);else for(var t in this.handle)for(var i=this.handle[t];i.length>0;)i.pop()},e.prototype.hasEvent=function(e,t,o){var n=this.handle[e];if(!n||n.length<=0)return!1;for(var i=0;i<n.length;i++){var r=n[i];if(t==r.func&&(!o||o==r.target))return!0}return!1},e._instance=null,e}();o.ListenerManager=n.getInstance(),cc._RF.pop()},{}],TigoManager:[function(e,t,o){"use strict";cc._RF.push(t,"8305fn4aM1EUZF6HtfZGz6/","TigoManager"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./event/BaseEvent"),i=e("./event/ListenerManager"),r=function(){function e(){this.appInfo=null,this.userId="",this.classId="",this.moduleId="",this.lessonModuleId="",this.manageMentIndex=1,this.packageId="",this.nextLessonModelId="",this.nextType="",this.ManageType={CocosIn:1001,CocosOut:1002,gameLink:1003,gameScore:1004,gameEvent:1005},this.ManageResult={CocosIn:0,CocosOut:0,gameScore:0,gameLink_Right:1,gameLink_Error:0,gameEvent:1},this.ReportType={report_reward:"api/reward/info",report_speed:"api/course/speed",report_operate:"api/operate/infoV2"},this.CocosByNativeAction={TiGoHttp:"TiGoHttp",TiGoClose:"TiGoClose",replayOrNext:"replayOrNext",TiGoStorage:"TiGoStorage",TiGoBaseInfo:"TiGoBaseInfo",TiGoLifecycle:"TiGoLifecycle",TiGoStopRecord:"TiGoStopRecord",TiGoStartRecord:"TiGoStartRecord",TiGoRecordFinish:"TiGoRecordFinish",TiGoVoiceEvaluation:"TiGoVoiceEvaluation",TiGoVoiceEvaluationFinish:"TiGoVoiceEvaluationFinish",TiGoStarsAnimation:"TiGoStarsAnimation",TiGoStartMotion:"TiGoStartMotion",TiGoStopMotion:"TiGoStopMotion",TiGoAnalyse:"TiGoAnalyse"}}return e.getInstance=function(){return this._instance||(this._instance=new e,this._instance.getBaseInfo()),console.log("TigoManager _instance is success"),this._instance},e.prototype.setBaseInfo=function(e){console.log("setBaseInfo ====== "+e);var t=JSON.parse(e);t&&(this.appInfo=t,this.setUserId(t.userId),this.setClassId(t.lessonId),this.setModuleId(t.moduleId),this.setLessonModuleId(t.lessonModuleId),this.setPackageId(t.packageId),this.setNextLessonModelId(t.nextLessonModelId),this.setNextType(t.nextType))},e.prototype.setClassId=function(e){e&&(this.classId=e)},e.prototype.setUserId=function(e){e&&(this.userId=e)},e.prototype.setModuleId=function(e){e&&(this.moduleId=e)},e.prototype.setLessonModuleId=function(e){e&&(this.lessonModuleId=e)},e.prototype.setPackageId=function(e){e&&(this.packageId=e)},e.prototype.setNextLessonModelId=function(e){e&&(this.nextLessonModelId=e)},e.prototype.setNextType=function(e){e&&(this.nextType=e)},e.prototype.callAppToClose=function(e,t){void 0===t&&(t=!1);var o=t?{action:this.CocosByNativeAction.TiGoClose,param:{closeNext:e}}:{action:this.CocosByNativeAction.TiGoClose,param:{}};console.log("callAppToClose ============== "+JSON.stringify(o)),this.getNative(o)},e.prototype.callMotion=function(e){void 0===e&&(e=!1);var t={action:e?this.CocosByNativeAction.TiGoStartMotion:this.CocosByNativeAction.TiGoStopMotion};this.getNative(t),cc.log("callMotion ============== "+JSON.stringify(t))},e.prototype.callAppToRecord=function(e,t){var o={action:this.CocosByNativeAction.TiGoStartRecord,param:{name:"record",time:e.toString(),standardText:t}};this.getNative(o),console.log("callAppToRecord ============== "+JSON.stringify(o))},e.prototype.callAppToStopRecord=function(){var e={action:this.CocosByNativeAction.TiGoStopRecord};this.getNative(e),console.log("callAppToStopRecord ============== "+JSON.stringify(e))},e.prototype.callAppToResult=function(e,t){var o={action:this.CocosByNativeAction.TiGoVoiceEvaluation,param:{standardText:e||"",path:t}};this.getNative(o),console.log("callAppToResult ============== "+JSON.stringify(o))},e.prototype.callAppToStorage=function(e,t,o){void 0===o&&(o=0);var n="";switch(e){case"PUT":n=o.toString()}var i={action:this.CocosByNativeAction.TiGoStorage,param:{method:e,key:t,value:n.toString()}};if(console.log("callAppToStorage ============== "+JSON.stringify(i)),window.tiGo)return window.tiGo.callApp(JSON.stringify(i));if(window.webkit){var r=window.prompt("callApp",JSON.stringify(i));return console.log(r),r}},e.prototype.callAppToHttp=function(e,t,o){var n=this.userId,i=this.classId,r=this.lessonModuleId;console.log("userId ====== "+n+"   lessonId ====== "+i+"    lessonModuleId ===== "+r);var s={userId:n,lessonId:i,lessonModelId:r,redVal:t,openVal:o},a={action:this.CocosByNativeAction.TiGoHttp,param:{url:this.ReportType.report_reward,method:e,params:s,unique:this.classId}};this.getNative(a),console.log("callAppToHttp ============== "+JSON.stringify(a))},e.prototype.callAppToLoaded=function(){var e={action:this.CocosByNativeAction.TiGoLifecycle,param:{name:"loaded",param:""}};this.getNative(e),console.log("callAppToLoaded ============== "+JSON.stringify(e))},e.prototype.getBaseInfo=function(){var e={action:this.CocosByNativeAction.TiGoBaseInfo};if(console.log("getBaseInfo ============== "+JSON.stringify(e)),window.tiGo){var t=window.tiGo.callApp(JSON.stringify(e));return this.setBaseInfo(t),console.log(t),console.log("tiGo BaseInfo ==== "+t),t}if(window.webkit)return t=window.prompt("callApp",JSON.stringify(e)),this.setBaseInfo(t),console.log("webkit BaseInfo ==== "+t),t},e.prototype.getAppInfo=function(){var e={action:this.CocosByNativeAction.TiGoBaseInfo},t=null;return null==this.appInfo&&(window.tiGo?(t=window.tiGo.callApp(JSON.stringify(e)),this.appInfo=JSON.parse(t)):window.webkit&&(t=window.prompt("callApp",JSON.stringify(e)),this.appInfo=JSON.parse(t))),this.appInfo},e.prototype.callAppToCollect=function(e,t,o){var n={userId:this.userId,lessonId:this.classId,lessonModelId:this.lessonModuleId,gameIndex:e,type:t,result:o,timestamp:this.getTime()},i={action:this.CocosByNativeAction.TiGoHttp,param:{url:this.ReportType.report_operate,method:"POST",params:n}};this.getNative(i),console.log("callAppToCollect ============== "+JSON.stringify(i))},e.prototype.getTime=function(){var e=Date.now().toString();return e.substr(0,10)},e.prototype.callAppToSpeed=function(){var e=this.ReportType.report_speed,t={userId:this.userId,type:this.moduleId,speedVal:2,lessonModelId:this.lessonModuleId,packageId:this.packageId,nextLessonModelId:this.nextLessonModelId,nextType:this.nextType};this.callAppToHttp(e,"POST",t)},e.prototype.getNative=function(e){window.tiGo&&window.tiGo.callApp(JSON.stringify(e)),window.webkit&&window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(e))},e.prototype.callAppToTigoStar=function(e){var t={action:this.CocosByNativeAction.TiGoStarsAnimation,param:{score:e.toString()}};this.getNative(t),console.log("callAppToTigoStar ============== "+JSON.stringify(t))},e.prototype.callPoint=function(e,t){var o={action:this.CocosByNativeAction.TiGoAnalyse,param:{analyseAction:"logEvent",analyseParam:{analyseId:e,analyseData:t}}};this.getNative(o),console.log("callAppToLoaded ============== "+JSON.stringify(o))},e._instance=null,e}();window.callCocos=function(e){return"TiGoLifecycle"==e.action?i.ListenerManager.dispatch(n.BaseEvent.EVENT_NATIVE_LOADED,e):i.ListenerManager.dispatch(n.BaseEvent.EVENT_NATIVE_CALL_COCOS,e),"callByAndroidParam ok!"},o.default=r.getInstance(),cc._RF.pop()},{"./event/BaseEvent":"BaseEvent","./event/ListenerManager":"ListenerManager"}],TimerSystem:[function(e,t,o){"use strict";cc._RF.push(t,"38429vE6/hOeYvTa+IgeeYh","TimerSystem"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function e(){this._pool=new Array,this._handlers={},this._currTimer=0,this._currFrame=0,this._count=0,this._index=0,this._startTime=0,this._counterMap=new Map}return Object.defineProperty(e,"instance",{get:function(){return null==e._instance&&(e._instance=new e),e._instance},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;return new Promise(function(o){t._startTime=Date.now(),t._currTimer=Date.now(),cc.director.getScheduler().enableForTarget(t),cc.director.getScheduler().schedule(t.onEnterFrame,t,e.INTERVAL),o()})},e.prototype.onEnterFrame=function(e){var t;for(t in this._currFrame++,this._currTimer=Date.now(),this._handlers)if("undefined"!==t){var o=this._handlers[t],n=o.userFrame?this._currFrame:this._currTimer;if(n>=o.exeTime){var i=o.method,r=o.args||[e];if(o.repeat)for(;n>=o.exeTime&&t in this._handlers;)o.exeTime+=o.delay,i.apply(o.thisObj,r);else i.apply(o.thisObj,r),this.clearTimer(t)}}else console.log(t)},e.prototype.create=function(e,t,o,n,r,s,a){var u;if(void 0===r&&(r=null),void 0===s&&(s=null),void 0===a&&(a=!0),a?(this.clearTimer(n),u=n):u=this._index++,o<1)return n.apply(null,s),-1;var c=this._pool.length>0?this._pool.pop():new i;return c.userFrame=e,c.repeat=t,c.delay=o,c.method=n,c.thisObj=r,c.args=s,c.exeTime=o+(e?this._currFrame:this._currTimer),this._handlers[u]=c,this._count++,u},e.prototype.timerStart=function(e){if(e){if(this._counterMap.has(e)){var t=this._counterMap.get(e),o=t.durTime;return t.resetDurTime(),o}var n=new r(e);this._counterMap.set(e,n)}else cc.error("timerStart signKey null!")},e.prototype.timerEnd=function(e){if(e){if(!this._counterMap.has(e))return 0;var t=this._counterMap.get(e).durTime;return this._counterMap.delete(e),t}cc.error("timerStart signKey null!")},e.prototype.doOnce=function(e,t,o,n,i){return void 0===o&&(o=null),void 0===n&&(n=null),void 0===i&&(i=!0),this.create(!1,!1,e,t,o,n,i)},e.prototype.doLoop=function(e,t,o,n,i){return void 0===o&&(o=null),void 0===n&&(n=null),void 0===i&&(i=!0),this.create(!1,!0,e,t,o,n,i)},e.prototype.doFrameOnce=function(e,t,o,n,i){return void 0===o&&(o=null),void 0===n&&(n=null),void 0===i&&(i=!0),this.create(!0,!1,e,t,o,n,i)},e.prototype.doFrameLoop=function(e,t,o,n,i){return void 0===o&&(o=null),void 0===n&&(n=null),void 0===i&&(i=!0),this.create(!0,!0,e,t,o,n,i)},Object.defineProperty(e.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0}),e.prototype.clearTimer=function(e){var t=this._handlers[e];null!=t&&(delete this._handlers[e],t.clear(),this._pool.push(t),this._count--)},e.prototype.running=function(e){return null!=this._handlers[e]},e.prototype.release=function(){for(var e in this._handlers)this.clearTimer(this._handlers[e])},e.INTERVAL=1/60,e}();o.default=n;var i=function(){function e(){this.delay=0,this.exeTime=0}return e.prototype.clear=function(){this.method=null,this.args=null,this.thisObj=null},e}(),r=function(){function e(e){this.signKey=e}return e.prototype.resetDurTime=function(){this.durTime=0},e}();cc._RF.pop()},{}]},{},["TigoManager","AssetItem","AssetsManger","AudioManager","AudioUtil","BaseEvent","ListenerManager","TimerSystem"]);