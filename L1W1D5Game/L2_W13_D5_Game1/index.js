window.__require=function t(e,n,o){function i(r,c){if(!n[r]){if(!e[r]){var s=r.split("/");if(s=s[s.length-1],!e[s]){var l="function"==typeof __require&&__require;if(!c&&l)return l(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+r+"'")}r=s}var u=n[r]={exports:{}};e[r][0].call(u.exports,function(t){return i(e[r][1][t]||t)},u,u.exports,t,e,n,o)}return n[r].exports}for(var a="function"==typeof __require&&__require,r=0;r<o.length;r++)i(o[r]);return i}({BucketCollision_L2W13D5Game1:[function(t,e,n){"use strict";cc._RF.push(e,"d65b1ELIuhCbrj1R6VtIBKD","BucketCollision_L2W13D5Game1");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r};Object.defineProperty(n,"__esModule",{value:!0});var r=t("./StaticInstance_L2W13D5Game1"),c=cc._decorator,s=c.ccclass,l=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.onBeginContact=function(t,e,n){r.StaticInstance.PC.checkAnswerType(e.node.name,n.node.name,n.node)},a([s],e)}(cc.Component));n.default=l,cc._RF.pop()},{"./StaticInstance_L2W13D5Game1":"StaticInstance_L2W13D5Game1"}],GameConfig_L2W13D5Game1:[function(t,e,n){"use strict";cc._RF.push(e,"fac8clKbx9P04FoRbr2kzmb","GameConfig_L2W13D5Game1"),Object.defineProperty(n,"__esModule",{value:!0}),n.GC=n.GameConfig=void 0;var o=function(){function t(){this.gameIndex=0,this.gameTotal=8,this.comAudioUrl="res/audios/",this.gameWordArr=["r","ed","b","ed","T","ed","N","ed"],this.showLabelArr=["red","red","bed","bed","Ted","Ted","Ned","Ned"],this.gameAudioArr=["r_ed_red","r_ed_red","b_ed_bed","b_ed_bed","T_ed_ted","T_ed_ted","n_ed_ned","n_ed_ned"],this.tipAudio="res/audios/drag_and_listen",this.audio={bgm:"BGM_jieyijie_01_ytz",audio1:"SE_jieyijie_01"}}return t.getInstance=function(){return this._instance||(this._instance=new t),this._instance},t.prototype.addGameIndex=function(){this.gameIndex+=1},t}();n.GameConfig=o,n.GC=o.getInstance(),cc._RF.pop()},{}],GameManager_L2W13D5Game1:[function(t,e,n){"use strict";cc._RF.push(e,"b00b38NmVBI9rlA5RE7RrDZ","GameManager_L2W13D5Game1");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,a){function r(t){try{s(o.next(t))}catch(e){a(e)}}function c(t){try{s(o.throw(t))}catch(e){a(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(r,c)}s((o=o.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var n,o,i,a,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(t){return function(e){return s([t,e])}}function s(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=2&a[0]?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,o=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(6===a[0]&&r.label<i[1]){r.label=i[1],i=a;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(a);break}i[2]&&r.ops.pop(),r.trys.pop();continue}a=e.call(t,r)}catch(c){a=[6,c],o=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0}),n.GameManager=void 0;var s=t("../../../../module/component/scripts/GameCompBase"),l=t("../../../../module/component/word/scripts/WordTool"),u=t("../../../../module/kit/audio/AudioManager"),p=t("./GameConfig_L2W13D5Game1"),d=t("./StaticInstance_L2W13D5Game1"),h=t("./Util_L2W13D5Game1"),f=cc._decorator,y=f.ccclass,m=(f.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handCom=null,e.transferMain=null,e.feedbackCom=null,e.colorWord=null,e.bundleName=e.bundleName,e.isStartTip=!1,e.num_waitTime=0,e.tipCallback=null,e}return i(e,t),e.prototype.onLoad=function(){t.prototype.onLoad.call(this),d.StaticInstance.setGameManager(this),cc.director.getCollisionManager().enabled=!0,cc.director.getPhysicsManager().enabled=!0},e.prototype.start=function(){var e=this;t.prototype.start.call(this),this.initHandComponent().then(function(t){e.handCom=t}),this.initTransferComponent().then(function(t){e.transferMain=t}),this.initFeedBackComponent().then(function(t){e.feedbackCom=t,e.feedbackCom.node.parent=e.node.getChildByName("PlayerCollector")}),this.initColorWordComponent().then(function(t){e.colorWord=t})},e.prototype.onGameStart=function(){t.prototype.onGameStart.call(this),cc.log("-------onGameStart----"),this.startRunGame(),this.palyBGM()},e.prototype.startRunGame=function(){return r(this,void 0,void 0,function(){var t;return c(this,function(e){switch(e.label){case 0:return this.setBlockInputEvent(!0),[4,this.sleep(1)];case 1:return e.sent(),[4,this.palyTipAudio()];case 2:return e.sent(),(t=this.node.getChildByName("startSpine")).active=!0,[4,h.playSpineAnimation(t.getComponent(sp.Skeleton),"start")];case 3:return e.sent(),t.active=!1,this.startGame(),[2]}})})},e.prototype.gameEnd=function(){t.prototype.gameEnd.call(this)},e.prototype.palyTipAudio=function(){return r(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return u.default.playEffect(this.bundleName,p.GC.tipAudio),[4,this.sleep(2)];case 1:return t.sent(),[2]}})})},e.prototype.palyBGM=function(){return r(this,void 0,void 0,function(){return c(this,function(){return u.default.playMusic(this.bundleName,p.GC.comAudioUrl+p.GC.audio.bgm),[2]})})},e.prototype.stopBGM=function(){cc.log("\u6682\u505cbgm~~"),cc.audioEngine.pauseMusic()},e.prototype.resumeBGM=function(){cc.log("\u6062\u590dbgm~~"),cc.audioEngine.resumeMusic()},e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this)},e.prototype.startGame=function(){return r(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return d.StaticInstance.PC.initWordLabel(),[4,d.StaticInstance.PC.showPlayer()];case 1:return t.sent(),0!==p.GC.gameIndex?[3,3]:[4,this.sleep(1)];case 2:return t.sent(),this.isStartTip=!0,d.StaticInstance.IM.startCreatItem(),[3,4];case 3:d.StaticInstance.IM.startCreatItem(),d.StaticInstance.IM.startCreatObs(),d.StaticInstance.GM.setBlockInputEvent(!1),t.label=4;case 4:return[2]}})})},e.prototype.nextLevel=function(){return r(this,void 0,void 0,function(){var t=this;return c(this,function(e){switch(e.label){case 0:return p.GC.gameIndex>=p.GC.gameTotal?[4,this.sleep(2)]:[3,2];case 1:return e.sent(),this.stopBGM(),this.gameEnd(),[2];case 2:return this.scheduleOnce(function(){t.startGame()},1),[2]}})})},e.prototype.palyNodeScaleAction=function(t,e,n){return void 0===n&&(n=.5),new Promise(function(o){cc.tween(t).to(n,{scale:e}).call(function(){o()}).start()})},e.prototype.showWordByName=function(t){var e=this;return new Promise(function(n){return r(e,void 0,void 0,function(){var e,o,i,a=this;return c(this,function(s){switch(s.label){case 0:return e=this.node.getChildByName("showWord"),o=this.node.getChildByName("mask"),e?(o.active=!0,e.active=!0,e.getChildByName("item").children.forEach(function(e){e.active=e.name===t}),e.getChildByName("word").getComponent(cc.Label).string=t,[4,this.palyNodeScaleAction(e,1)]):[3,2];case 1:s.sent(),i=p.GC.gameAudioArr[p.GC.gameIndex-1],cc.log("audioName=",i),u.default.playAudioSound(this.bundleName,p.GC.comAudioUrl+i,function(){return r(a,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,this.sleep(1)];case 1:return t.sent(),[4,this.palyNodeScaleAction(e,0)];case 2:return t.sent(),o.active=!1,n(),[2]}})})}),s.label=2;case 2:return[2]}})})})},e.prototype.setBlockInputEvent=function(t){void 0===t&&(t=!0);var e=this.node.getChildByName("Mask");if(!e){(e=new cc.Node("Mask")).zIndex=1e4,e.name="Mask",e.parent=this.node,e.addComponent(cc.BlockInputEvents);var n=e.addComponent(cc.Widget);n.isAlignLeft=!0,n.isAlignRight=!0,n.isAlignTop=!0,n.isAlignBottom=!0,n.alignMode=cc.Widget.AlignMode.ONCE}e.x=t?0:9999},e.prototype.sleep=function(t){var e=this;return new Promise(function(n){e.scheduleOnce(function(){n()},t)})},e.prototype.playClickTipAnimation=function(){cc.tween().repeatForever(cc.tween().to(.2,{scale:1.1}).to(.4,{scale:.9}).to(.2,{scale:1}))},e.prototype.playClickTip=function(t){var e=cc.tween().repeat(2,cc.tween().by(.1,{scale:.1}).by(.2,{scale:-.2}).by(.1,{scale:.1}));t.forEach(function(t){e.clone(t).start()})},e.prototype.palyTransitionAni=function(t){this.transferMain.transferInit(function(){t&&t()}),this.transferMain.startTransferAni()},e.prototype.showFeedBack=function(t,e){void 0===t&&(t=!0),t?(this.feedbackCom.showRightAnimation(e),u.default.playEffect("commonRes","audio/game_right")):(this.feedbackCom.showErrorAnimation(e),u.default.playEffect("commonRes","audio/game_error"))},e.prototype.showWordLabel=function(t,e){var n=this;return new Promise(function(o){n.colorWord=n.node.getChildByName("Word").getComponent(l.default),n.colorWord?(n.colorWord.showWordAni(t,cc.v2(0,-60),function(){},1.5),u.default.playAudioSound(n.bundleName,e,function(){o()})):o()})},e.prototype.showHandTipDrag=function(t,e){return r(this,void 0,void 0,function(){return c(this,function(){return this.handCom.node.active?[2]:(this.handCom.TouchCycle(t,e),[2])})})},e.prototype.showHandTip=function(t){return r(this,void 0,void 0,function(){return c(this,function(){return this.handCom.node.active=!0,t?this.handCom.node.setPosition(t):this.handCom.node.setPosition(-25,0),this.handCom.ClickCycle(),[2]})})},e.prototype.hideHandTip=function(){this.handCom.node.active=!1},e.prototype.setTip=function(){var t=this;this.cancelTip(),this.schedule(this.tipCallback=function(){t.DetectionTip()},1)},e.prototype.cancelTip=function(){this.num_waitTime=0,this.tipCallback&&this.unschedule(this.tipCallback)},e.prototype.DetectionTip=function(){this.num_waitTime+=1,this.num_waitTime>5&&(this.num_waitTime=-1)},a([y],e)}(s.default));n.GameManager=m,cc._RF.pop()},{"../../../../module/component/scripts/GameCompBase":void 0,"../../../../module/component/word/scripts/WordTool":void 0,"../../../../module/kit/audio/AudioManager":void 0,"./GameConfig_L2W13D5Game1":"GameConfig_L2W13D5Game1","./StaticInstance_L2W13D5Game1":"StaticInstance_L2W13D5Game1","./Util_L2W13D5Game1":"Util_L2W13D5Game1"}],ItemManager_L2W13D5Game1:[function(t,e,n){"use strict";cc._RF.push(e,"a82f9H5PblBxbMcgoZ0CxWz","ItemManager_L2W13D5Game1");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,a){function r(t){try{s(o.next(t))}catch(e){a(e)}}function c(t){try{s(o.throw(t))}catch(e){a(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(r,c)}s((o=o.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var n,o,i,a,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(t){return function(e){return s([t,e])}}function s(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=2&a[0]?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,o=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(6===a[0]&&r.label<i[1]){r.label=i[1],i=a;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(a);break}i[2]&&r.ops.pop(),r.trys.pop();continue}a=e.call(t,r)}catch(c){a=[6,c],o=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var s=t("./GameConfig_L2W13D5Game1"),l=t("./StaticInstance_L2W13D5Game1"),u=cc._decorator,p=u.ccclass,d=u.property,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.redPrefabs=null,e.greedPrefabs=null,e.obstaclePrefabs=null,e.playerNode=null,e.startNode=null,e.endNode=null,e.isCreatItem=!1,e.isCreatObs=!1,e.tipNodePosition=null,e.poolRed=new cc.NodePool("poolRed"),e.poolGreen=new cc.NodePool("poolGreen"),e.poolObs=new cc.NodePool("poolObs"),e}return i(e,t),e.prototype.onLoad=function(){l.StaticInstance.setItemManager(this)},e.prototype.start=function(){cc.log(cc.winSize)},e.prototype.destroyNodeToPutPool=function(t){"ItemRed"===t.name?this.poolRed.put(t):"Obstacle"===t.name?this.poolObs.put(t):"ItemGreen"===t.name&&this.poolGreen.put(t)},e.prototype.destroyAllNode=function(){this.node.children.forEach(function(){}),this.node.getChildByName("Obstacle")&&(this.node.getChildByName("Obstacle").active=!1,this.destroyNodeToPutPool(this.node.getChildByName("Obstacle")))},e.prototype.creatItem=function(){if(!this.node.getChildByName("ItemRed")&&!this.node.getChildByName("ItemGreen")){var t;t=s.GC.gameIndex%2==0?this.poolRed.size()>0?this.poolRed.get():cc.instantiate(this.redPrefabs):this.poolGreen.size()>0?this.poolGreen.get():cc.instantiate(this.greedPrefabs),this.setCreatMes(t)}},e.prototype.creatObstacle=function(){if(!this.node.getChildByName("Obstacle")){var t;t=this.poolObs.size()>0?this.poolObs.get():cc.instantiate(this.obstaclePrefabs),this.setCreatMes(t)}},e.prototype.setCreatMes=function(t){t.parent=this.node,t.x=this.getPositionX(),t.y=200,t.active=!0;var e=t.getComponent(cc.RigidBody);t.getComponent(cc.Collider).enabled=!0,e.linearVelocity=cc.v2(0,900),e.linearDamping=.3,e.gravityScale=1.5,"Obstacle"===t.name&&(e.linearVelocity=cc.v2(0,1200),e.gravityScale=2.5,t.getComponent(cc.PhysicsCircleCollider).enabled=!0);var n=t.getChildByName("word");if(n)switch(n.getComponent(cc.Label).string=s.GC.gameWordArr[s.GC.gameIndex],n.scale=.8,s.GC.gameWordArr[s.GC.gameIndex]){case"r":n.x=0,n.y=50;break;case"b":n.x=7,n.y=40;break;case"T":n.x=0,n.y=32,n.scale=.7;break;case"N":n.x=0,n.y=31,n.scale=.7;break;case"ed":n.x=0,n.y=42}},e.prototype.getPositionX=function(){if(0===s.GC.gameIndex&&l.StaticInstance.GM.isStartTip)return 300;var t=this.playerNode.position.x-350,e=this.playerNode.position.x+350,n=this.startNode.position.x,o=this.endNode.position.x,i=Math.abs(t)-Math.abs(n),a=Math.abs(o)-Math.abs(e),r=Math.abs(i)<Math.abs(a)?e:n,c=Math.abs(i)<Math.abs(a)?o:t;return Math.random()*(c-r+1)+r},e.prototype.stopCreatItem=function(){this.isCreatItem=!1},e.prototype.stopCreatObs=function(){this.isCreatObs=!1},e.prototype.startCreatItem=function(){cc.log("\u5f00\u59cb\u521b\u5efa item"),this.isCreatItem=!0,this.creatItem()},e.prototype.startCreatObs=function(){var t=this;this.isCreatObs=!0,this.scheduleOnce(function(){t.creatObstacle()},2)},e.prototype.resumeItem=function(){if(this.node.children[0]){var t=this.node.children[0].getComponent(cc.RigidBody);t.gravityScale=1.5,t.linearVelocity=cc.v2(0,-100),cc.log("resumeItem")}},e.prototype.startTipAnimation=function(){return r(this,void 0,void 0,function(){var t,e,n;return c(this,function(){return this.node.children[0]&&(t=this.node.parent.getChildByName("PlayerCollector"),e=cc.v2(t.position.x,t.position.y-50),n=cc.v2(this.node.children[0].x,t.position.y-50),l.StaticInstance.GM.showHandTipDrag(e,n),l.StaticInstance.GM.setBlockInputEvent(!1)),[2]})})},e.prototype.onBeginContact=function(t,e,n){var o=this;switch(n.node.getComponent(cc.Collider).enabled=!1,n.node.name){case"ItemRed":case"ItemGreen":this.isCreatItem&&this.scheduleOnce(function(){o.creatItem()},0);break;case"Obstacle":this.isCreatObs&&this.scheduleOnce(function(){o.creatObstacle()},2)}this.destroyNodeToPutPool(n.node)},e.prototype.cancelObsCollision=function(){this.node.children.forEach(function(t){"Obstacle"===t.name&&(t.getComponent(cc.PhysicsCircleCollider).enabled=!1)})},e.prototype.update=function(){if(0===s.GC.gameIndex&&l.StaticInstance.GM.isStartTip&&this.node.children[0]){var t=this.node.children[0].getComponent(cc.RigidBody);t.linearVelocity.y<0&&(t.gravityScale=0,t.linearVelocity=cc.v2(0,0),this.startTipAnimation())}},a([d(cc.Prefab)],e.prototype,"redPrefabs",void 0),a([d(cc.Prefab)],e.prototype,"greedPrefabs",void 0),a([d(cc.Prefab)],e.prototype,"obstaclePrefabs",void 0),a([d(cc.Node)],e.prototype,"playerNode",void 0),a([d(cc.Node)],e.prototype,"startNode",void 0),a([d(cc.Node)],e.prototype,"endNode",void 0),a([p],e)}(cc.Component);n.default=h,cc._RF.pop()},{"./GameConfig_L2W13D5Game1":"GameConfig_L2W13D5Game1","./StaticInstance_L2W13D5Game1":"StaticInstance_L2W13D5Game1"}],PalyerCollector_L2W13D5Game1:[function(t,e,n){"use strict";cc._RF.push(e,"279841pNQFGoYZ9k9OcHvIq","PalyerCollector_L2W13D5Game1");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,a){function r(t){try{s(o.next(t))}catch(e){a(e)}}function c(t){try{s(o.throw(t))}catch(e){a(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(r,c)}s((o=o.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var n,o,i,a,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(t){return function(e){return s([t,e])}}function s(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=2&a[0]?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,o=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(6===a[0]&&r.label<i[1]){r.label=i[1],i=a;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(a);break}i[2]&&r.ops.pop(),r.trys.pop();continue}a=e.call(t,r)}catch(c){a=[6,c],o=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var s,l=t("../../../../module/kit/audio/AudioManager"),u=t("./GameConfig_L2W13D5Game1"),p=t("./StaticInstance_L2W13D5Game1"),d=t("./Util_L2W13D5Game1"),h=cc._decorator,f=h.ccclass,y=h.property;(function(t){t.chenggong="chenggong",t.daiji="daiji",t.faguang="faguang",t.shibai="shibai",t.tuowei="tuowei",t.zhengfankui="zhengfankui"})(s||(s={}));var m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.rigidBody=[],e.smallSpine=null,e.bigSpine=null,e.isOpenX=!0,e.isOpenY=!1,e.materialArr=[],e.word1=null,e.word2=null,e.xiaoGuo1=null,e.xiaoGuo2=null,e.playerPosY=0,e.isCanMove=!0,e.PlayerCollectorMask=null,e}return i(e,t),e.prototype.onLoad=function(){p.StaticInstance.setPlayCollector(this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchEnd,this)},e.prototype.start=function(){this.setNodePositionY(),this.PlayerCollectorMask=this.node.parent.getChildByName("PlayerCollectorMask")},e.prototype.setNodePositionY=function(){this.playerPosY=-cc.winSize.height/2+200,this.node.y=this.playerPosY-400,this.hideAllCollision()},e.prototype.onTouchMove=function(t){if(this.isCanMove){var e=t.getDelta();this.isOpenX&&(this.node.x+=e.x),this.isOpenY&&(this.node.y+=e.y),this.updateCollision(),p.StaticInstance.GM.isStartTip&&(p.StaticInstance.GM.isStartTip=!1,p.StaticInstance.IM.resumeItem(),p.StaticInstance.GM.hideHandTip())}},e.prototype.onTouchEnd=function(){},e.prototype.checkPos=function(){if(p.StaticInstance.GM.isStartTip){var t=p.StaticInstance.IM.node.children[0].convertToWorldSpaceAR(cc.Vec2.ZERO),e=this.node.getChildByName("InSmallBucketCollision").convertToWorldSpaceAR(cc.Vec2.ZERO),n=t.x-10,o=t.x+10;if(n<e.x&&o>e.x)return!0}return!1},e.prototype.updateCollision=function(){this.rigidBody.forEach(function(t){t.syncPosition(!0)})},e.prototype.hideAllCollision=function(){this.rigidBody.forEach(function(t){t.node.active=!1})},e.prototype.showAllCollision=function(){this.rigidBody.forEach(function(t){t.node.active=!0})},e.prototype.palySpineByName=function(t,e,n){return r(this,void 0,void 0,function(){return c(this,function(o){switch(o.label){case 0:return t?[4,d.playSpineAnimation(this.smallSpine,e)]:[3,2];case 1:return o.sent(),[3,4];case 2:return[4,d.playSpineAnimation(this.bigSpine,e)];case 3:o.sent(),o.label=4;case 4:return n&&n(),[2]}})})},e.prototype.stopAllCreat=function(){p.StaticInstance.IM.stopCreatObs(),p.StaticInstance.IM.stopCreatItem()},e.prototype.checkAnswerType=function(t,e,n){return r(this,void 0,void 0,function(){var o,i=this;return c(this,function(){return(o=u.GC.gameIndex%2==0?"InSmallBucketCollision":"InBigBucketCollision")===t&&"ItemRed"===e?(p.StaticInstance.IM.destroyAllNode(),this.stopAllCreat(),this.playFeedBackAnimation(!0,this.word1.position),this.palySpineByName(!0,s.chenggong).then(function(){i.palySpineByName(!0,s.daiji)}),this.collisionRightFeedback()):o===t&&"ItemGreen"===e?(p.StaticInstance.IM.destroyAllNode(),this.stopAllCreat(),this.playFeedBackAnimation(!0,this.word2.position),this.palySpineByName(!1,s.chenggong).then(function(){i.palySpineByName(!1,s.daiji)}),this.collisionRightFeedback()):(cc.log("\u9519\u8bef~~"),"InSmallBucketCollision"===t&&"ItemGreen"===e&&(n.active=!1,n.destroy(),this.scheduleOnce(function(){p.StaticInstance.IM.startCreatItem()},1)),"InSmallBucketCollision"===t?this.playFeedBackAnimation(!1,this.word1.position):(this.palySpineByName(!1,s.daiji),this.playFeedBackAnimation(!1,this.word2.position))),[2]})})},e.prototype.collisionRightFeedback=function(){return r(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return u.GC.gameIndex%2==0&&this.shoWLabelProgress(this.word1,1),u.GC.gameIndex%2==1&&this.shoWLabelProgress(this.word2,1),[4,p.StaticInstance.GM.showWordLabel(u.GC.gameWordArr[u.GC.gameIndex],u.GC.comAudioUrl+u.GC.gameWordArr[u.GC.gameIndex])];case 1:return t.sent(),u.GC.addGameIndex(),this.isCanMove=!0,u.GC.gameIndex%2!=0?[3,4]:(p.StaticInstance.GM.setBlockInputEvent(!0),[4,this.movePlayerToCenter()]);case 2:return t.sent(),this.hidePlayer(),[4,p.StaticInstance.GM.showWordByName(u.GC.showLabelArr[u.GC.gameIndex-1])];case 3:t.sent(),t.label=4;case 4:return p.StaticInstance.GM.nextLevel(),[2]}})})},e.prototype.playFeedBackAnimation=function(t,e){p.StaticInstance.GM.showFeedBack(t,e)},e.prototype.movePlayerToCenter=function(){var t=this;return new Promise(function(e){t.node.x=0,t.updateCollision();var n=t.xiaoGuo1.node.y,o=t.xiaoGuo2.node.y;t.xiaoGuo1.node.active=!0,t.xiaoGuo2.node.active=!0,l.default.playEffect(p.StaticInstance.GM.bundleName,u.GC.comAudioUrl+u.GC.audio.audio1),cc.tween(t.xiaoGuo1.node).call(function(){d.playSpineAnimation(t.xiaoGuo1,s.tuowei,!0)}).to(1,{y:400}).call(function(){d.playSpineAnimation(t.xiaoGuo1,s.zhengfankui).then(function(){t.xiaoGuo1.node.y=n,t.xiaoGuo1.node.active=!1})}).start(),cc.tween(t.xiaoGuo2.node).call(function(){d.playSpineAnimation(t.xiaoGuo2,s.tuowei,!0)}).to(1,{y:400}).call(function(){d.playSpineAnimation(t.xiaoGuo2,s.zhengfankui).then(function(){t.xiaoGuo2.node.y=o,t.xiaoGuo2.node.active=!1,e()})}).start()})},e.prototype.hidePlayer=function(){var t=this;return new Promise(function(e){var n=t.playerPosY-300;cc.tween(t.node).to(.5,{y:n}).call(function(){e()}).start(),t.updateCollision()})},e.prototype.showPlayer=function(){var t=this;return new Promise(function(e){var n=t.playerPosY;cc.tween(t.node).to(.5,{y:n}).call(function(){e(),t.showAllCollision(),t.updateCollision()}).start()})},e.prototype.initWordLabel=function(){u.GC.gameIndex%2==0&&(this.word1.getComponent(cc.Label).string=u.GC.gameWordArr[u.GC.gameIndex],this.shoWLabelProgress(this.word1,0),this.word2.getComponent(cc.Label).string=u.GC.gameWordArr[u.GC.gameIndex+1],this.shoWLabelProgress(this.word2,0))},e.prototype.shoWLabelProgress=function(t,e){var n=this;return void 0===e&&(e=1),new Promise(function(o){t.getComponents(cc.RenderComponent).forEach(function(t){var o=n.materialArr[e];t.setMaterial(0,o)}),n.scheduleOnce(function(){o()},1)})},e.prototype.update=function(){this.PlayerCollectorMask.position=this.node.position},a([y([cc.RigidBody])],e.prototype,"rigidBody",void 0),a([y(sp.Skeleton)],e.prototype,"smallSpine",void 0),a([y(sp.Skeleton)],e.prototype,"bigSpine",void 0),a([y({tooltip:"\u662f\u5426\u5f00\u542f\u79fb\u52a8 X"})],e.prototype,"isOpenX",void 0),a([y({tooltip:"\u662f\u5426\u5f00\u542f\u79fb\u52a8 Y"})],e.prototype,"isOpenY",void 0),a([y(cc.Material)],e.prototype,"materialArr",void 0),a([y(cc.Node)],e.prototype,"word1",void 0),a([y(cc.Node)],e.prototype,"word2",void 0),a([y(sp.Skeleton)],e.prototype,"xiaoGuo1",void 0),a([y(sp.Skeleton)],e.prototype,"xiaoGuo2",void 0),a([f],e)}(cc.Component);n.default=m,cc._RF.pop()},{"../../../../module/kit/audio/AudioManager":void 0,"./GameConfig_L2W13D5Game1":"GameConfig_L2W13D5Game1","./StaticInstance_L2W13D5Game1":"StaticInstance_L2W13D5Game1","./Util_L2W13D5Game1":"Util_L2W13D5Game1"}],StaticInstance_L2W13D5Game1:[function(t,e,n){"use strict";cc._RF.push(e,"f4256TmyEZA2ZTnwGt/fKzX","StaticInstance_L2W13D5Game1"),Object.defineProperty(n,"__esModule",{value:!0}),n.StaticInstance=void 0;var o=function(){function t(){}return t.setGameManager=function(e){t.GM=e},t.setItemManager=function(e){t.IM=e},t.setPlayCollector=function(e){t.PC=e},t.PC=void 0,t.IM=void 0,t.GM=void 0,t}();n.StaticInstance=o,cc._RF.pop()},{}],Util_L2W13D5Game1:[function(t,e,n){"use strict";cc._RF.push(e,"32e84PTu/FHIZSGjWcbrOLq","Util_L2W13D5Game1"),Object.defineProperty(n,"__esModule",{value:!0}),n.throttle=n.playSpineAnimation=void 0,n.playSpineAnimation=function(t,e,n,o){if(void 0===n&&(n=!1),void 0===o&&(o=0),!n)return new Promise(function(i){var a=t.setAnimation(o,e,n);t.setTrackCompleteListener(a,function(){i(null)})});Promise.resolve().then(function(){t.setAnimation(o,e,n)})},n.throttle=function(t,e){var n=this;void 0===e&&(e=500);var o=Date.now();return function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];var r=(new Date).valueOf();r-o>=e&&(t.apply(n,i),o=r)}},cc._RF.pop()},{}],update_L2W13D5Game1:[function(t,e,n){"use strict";cc._RF.push(e,"79dab0bR9ZEzaKKloqn8JwX","update_L2W13D5Game1");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r};Object.defineProperty(n,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,s=(r.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.updateCollision=function(){this.node.getComponent(cc.RigidBody).linearVelocity.y>500?this.node.getComponent(cc.Collider).enabled=!1:this.node.getComponent(cc.Collider).enabled=!0},e.prototype.update=function(){this.updateCollision()},a([c],e)}(cc.Component));n.default=s,cc._RF.pop()},{}]},{},["BucketCollision_L2W13D5Game1","GameConfig_L2W13D5Game1","GameManager_L2W13D5Game1","ItemManager_L2W13D5Game1","PalyerCollector_L2W13D5Game1","StaticInstance_L2W13D5Game1","Util_L2W13D5Game1","update_L2W13D5Game1"]);