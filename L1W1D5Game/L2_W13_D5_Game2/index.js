window.__require=function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var c=s.split("/");if(c=c[c.length-1],!t[c]){var u="function"==typeof __require&&__require;if(!a&&u)return u(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+s+"'")}s=c}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){return i(t[s][1][e]||e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof __require&&__require,s=0;s<r.length;s++)i(r[s]);return i}({ExtremeRescue_config:[function(e,t,n){"use strict";cc._RF.push(t,"3b366DjOqhEfbdkm+Y6hU8f","ExtremeRescue_config"),Object.defineProperty(n,"__esModule",{value:!0}),n.ExtremeRescue_config=void 0,n.ExtremeRescue_config={bundleName:"L2_W13_D5_Game2",starNum:10,UFOPos:[268,-207],questionText:[["","","ed"],["","b",""],["","","ed"],["","N",""]],questionPoxX:[-211,-25,162],questionPoxY:-158,questionIndex:[1,2,1,2],answerText:[["w","r","n"],["ap","at","ed"],["M","T","P"],["ed","at","ap"]],answerPoxX:[-300,0,300],answerPoxY:227.256,rightIndex:[1,2,1,0],rightAudio:["red","bed","ted","ned"],rightEndAudio:["r_e_d_red","b_e_d_bed","T_e_d_ted","n_e_d_ned"],dragError:100,player:["songshu3","qingwa","S_hopper_xie","tigo34"],playerSpeed:200,playerScale:.6,playPos:[[-220,-24],[-38,-105],[0,-75],[660,-50]]},cc._RF.pop()},{}],ExtremeRescue:[function(e,t,n){"use strict";cc._RF.push(t,"f8476rTjTdIO79ipBQzwufD","ExtremeRescue");var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},s=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var c=e("../../../module/component/scripts/GameCompBase"),u=e("../../../module/kit/assets/AssetsManger"),l=e("../../../module/kit/audio/AudioManager"),h=e("../../../module/kit/TigoManager"),d=e("./ExtremeRescue_config"),p=cc._decorator,f=p.ccclass,g=p.property,m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.bgBox=null,t.questionBoard=null,t.questionBgBoard=null,t.answerBoard=null,t.playerBoardMask=null,t.aisleMask=null,t.rightUFO=null,t.questionPrefab=null,t.questionBgPrefab=null,t.answerPrefab=null,t.playerPrefab=null,t.handCtr=null,t.feedBack=null,t.gameIndex=0,t.score=3,t.canClick=!1,t.touchStart=!1,t.questionArr=[],t.questionBgArr=[],t.answerArr=[],t.playerArr=[],t}return i(t,e),t.prototype.onLoad=function(){return s(this,void 0,void 0,function(){return a(this,function(){return e.prototype.onLoad.call(this),this.createPlayer(),[2]})})},t.prototype.start=function(){var t=this;e.prototype.start.call(this),this.initHandComponent().then(function(e){t.handCtr=e,t.handCtr.node.scale=.5}),this.initFeedBackComponent().then(function(e){t.feedBack=e})},t.prototype.onGameStart=function(){var t=this;e.prototype.onGameStart.call(this),l.default.playMusic(this.bundleName,"res/audios/BGM_jixianjiuyuan_01"),l.default.playLoopEffect(this.bundleName,"res/audios/SE_jixianjiuyuan_01"),cc.tween(this.rightUFO).to(1.5,{y:d.ExtremeRescue_config.UFOPos[1]}).call(function(){return s(t,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return l.default.playEffect(this.bundleName,"res/audios/SE_jixianjiuyuan_02"),[4,this.playSpine(this.rightUFO.getComponent(sp.Skeleton),"tingxia",!1)];case 1:return e.sent(),this.gameInit(),[2]}})})}).start()},t.prototype.gameEnd=function(){e.prototype.gameEnd.call(this)},t.prototype.gameInit=function(){return s(this,void 0,void 0,function(){return a(this,function(){return this.nextLeave(),[2]})})},t.prototype.nextLeave=function(){return s(this,void 0,void 0,function(){var e;return a(this,function(){for(e=0;e<this.answerArr.length;e++)this.answerArr[e].removeFromParent();for(e=0;e<this.questionArr.length;e++)this.questionArr[e].removeFromParent();for(e=0;e<this.questionBgArr.length;e++)this.questionBgArr[e].removeFromParent();return this.score=3,this.creatAnswer(),this.creatQuestion(),this.boardTween(),[2]})})},t.prototype.creatQuestion=function(){this.questionArr=[],this.questionBgArr=[];for(var e=0;e<d.ExtremeRescue_config.questionText[this.gameIndex].length;e++){var t=cc.instantiate(this.questionPrefab);t.parent=this.questionBoard,this.questionArr.push(t),t.getChildByName("text").getComponent(cc.Label).string=d.ExtremeRescue_config.questionText[this.gameIndex][e],t.x=d.ExtremeRescue_config.questionPoxX[e],t.y=d.ExtremeRescue_config.questionPoxY,t.opacity=0;var n=cc.instantiate(this.questionBgPrefab);n.parent=this.questionBgBoard,this.questionBgArr.push(n),n.x=d.ExtremeRescue_config.questionPoxX[e],n.y=d.ExtremeRescue_config.questionPoxY,n.opacity=0}this.questionSpin("begin")},t.prototype.creatAnswer=function(){var e=this;this.answerArr=[];for(var t=function(t){var r=cc.instantiate(n.answerPrefab);r.parent=n.answerBoard,n.answerArr.push(r),r.getChildByName("text").getComponent(cc.Label).string=d.ExtremeRescue_config.answerText[n.gameIndex][t],r.x=d.ExtremeRescue_config.answerPoxX[t],r.y=d.ExtremeRescue_config.answerPoxY,r.on(cc.Node.EventType.TOUCH_START,function(){e.answerTouchStart(t)}),r.on(cc.Node.EventType.TOUCH_MOVE,function(n){e.answerTouchMove(t,n)}),r.on(cc.Node.EventType.TOUCH_END,function(){e.answerTouchEnd(t)}),r.on(cc.Node.EventType.TOUCH_CANCEL,function(){e.answerTouchCancel(t)})},n=this,r=0;r<d.ExtremeRescue_config.answerText[this.gameIndex].length;r++)t(r)},t.prototype.boardTween=function(){var e=this;this.answerBoard.y=1e3,this.answerBoard.opacity=255,this.playerMove(0);for(var t=function(t){var r=255;t==d.ExtremeRescue_config.questionIndex[n.gameIndex]&&(r=120,n.questionBgArr[t].active=!1),cc.tween(n.questionBgArr[t]).delay(.5*t).to(.5,{opacity:r}).start(),cc.tween(n.questionArr[t]).delay(.5*t).to(.5,{opacity:r}).call(function(){t==e.questionArr.length-1&&cc.tween(e.answerBoard).to(1,{y:0}).call(function(){0==e.gameIndex?l.default.playEffect(e.bundleName,"res/audios/drag_and_drop",function(){l.default.playAudioSound(e.bundleName,"res/audios/"+d.ExtremeRescue_config.rightAudio[e.gameIndex],function(){e.creatHand(),e.canClick=!0})}):(e.scaleTimeoutCallback(),e.creatScaleTimeout(),l.default.playAudioSound(e.bundleName,"res/audios/"+d.ExtremeRescue_config.rightAudio[e.gameIndex],function(){e.canClick=!0}))}).start()}).start()},n=this,r=0;r<this.questionArr.length;r++)t(r)},t.prototype.creatHand=function(){var e=new cc.Vec2(this.answerArr[d.ExtremeRescue_config.rightIndex[this.gameIndex]].x,this.answerArr[d.ExtremeRescue_config.rightIndex[this.gameIndex]].y),t=new cc.Vec2(this.questionArr[d.ExtremeRescue_config.questionIndex[this.gameIndex]].x,this.questionArr[d.ExtremeRescue_config.questionIndex[this.gameIndex]].y);this.handCtr.TouchCycle(e,t)},t.prototype.answerTouchStart=function(e){this.canClick&&(this.touchStart=!0,this.oldQuestionPos=this.answerArr[e].position,this.answerArr[e].zIndex=10,this.handCtr.node.active=!1,this.unschedule(this.scaleTimeoutCallback),this.unschedule(this.scaleTimeoutCallback2))},t.prototype.answerTouchMove=function(e,t){if(this.touchStart){var n=t.touch.getDelta();this.answerArr[e].x+=n.x/this.node.scale,this.answerArr[e].y+=n.y/this.node.scale}},t.prototype.answerTouchEnd=function(e){if(this.touchStart){this.touchStart=!1,this.answerArr[e].zIndex=1;var t=this.answerBoard.x+this.answerArr[e].x,n=this.answerBoard.y+this.answerArr[e].y,r=new cc.Vec3(t,n),i=this.questionArr[d.ExtremeRescue_config.questionIndex[this.gameIndex]].x+this.questionArr[d.ExtremeRescue_config.rightIndex[this.gameIndex]].width-d.ExtremeRescue_config.dragError,o=this.questionArr[d.ExtremeRescue_config.questionIndex[this.gameIndex]].x-this.questionArr[d.ExtremeRescue_config.rightIndex[this.gameIndex]].width+d.ExtremeRescue_config.dragError,s=this.questionArr[d.ExtremeRescue_config.questionIndex[this.gameIndex]].y+this.questionArr[d.ExtremeRescue_config.rightIndex[this.gameIndex]].height,a=this.questionArr[d.ExtremeRescue_config.questionIndex[this.gameIndex]].y-this.questionArr[d.ExtremeRescue_config.rightIndex[this.gameIndex]].height;this.answerArr[e].x>=o&&this.answerArr[e].x<=i&&this.answerArr[e].y>=a&&this.answerArr[e].y<=s?e==d.ExtremeRescue_config.rightIndex[this.gameIndex]?this.answerRight(e,r):this.answerError(e,r):(this.answerArr[e].setPosition(this.oldQuestionPos),0==this.gameIndex?this.creatHand():this.creatScaleTimeout())}},t.prototype.answerTouchCancel=function(e){this.touchStart&&(this.touchStart=!1,this.answerArr[e].zIndex=1,this.answerArr[e].setPosition(this.oldQuestionPos))},t.prototype.answerRight=function(e,t){var n=this;this.unschedule(this.scaleTimeoutCallback),this.unschedule(this.scaleTimeoutCallback2),l.default.playEffect(this.bundleName,"res/audios/game_right"),h.default.callAppToTigoStar(this.score),this.feedBack.showRightAnimation(t),cc.tween(this.answerBoard).by(.5,{y:500}).start(),this.canClick=!1,this.questionArr[d.ExtremeRescue_config.questionIndex[this.gameIndex]].getChildByName("text").getComponent(cc.Label).string=this.answerArr[e].getChildByName("text").getComponent(cc.Label).string,this.answerArr[e].removeFromParent(),this.questionArr[d.ExtremeRescue_config.questionIndex[this.gameIndex]].opacity=255,this.questionBgArr[d.ExtremeRescue_config.questionIndex[this.gameIndex]].opacity=255,this.questionBgArr[d.ExtremeRescue_config.questionIndex[this.gameIndex]].active=!0,this.questionSpin("answerRight",d.ExtremeRescue_config.questionIndex[this.gameIndex]),d.ExtremeRescue_config.questionIndex[this.gameIndex]>=1&&this.questionSpin("answerRight",d.ExtremeRescue_config.questionIndex[this.gameIndex]-1),this.scheduleOnce(function(){l.default.playAudioSound(n.bundleName,"res/audios/"+d.ExtremeRescue_config.rightAudio[n.gameIndex],function(){l.default.playAudioSound(n.bundleName,"res/audios/"+d.ExtremeRescue_config.rightEndAudio[n.gameIndex]);for(var e=1;e<n.questionArr.length;e++)cc.tween(n.questionArr[e].getChildByName("text")).delay(.5*e-.5).by(.2,{scale:.1}).by(.2,{scale:-.1}).start();n.playerMove(1)})},1)},t.prototype.answerError=function(e,t){this.score=2,this.feedBack.showErrorAnimation(t),this.answerArr[e].setPosition(this.oldQuestionPos),l.default.playEffect(this.bundleName,"res/audios/game_error"),0==this.gameIndex?this.creatHand():this.creatScaleTimeout()},t.prototype.questionSpin=function(e,t){return s(this,void 0,void 0,function(){var n,r;return a(this,function(i){switch(i.label){case 0:switch(n="shangceng",e){case"begin":return[3,1];case"answerRight":return[3,2]}return[3,6];case 1:for(n="shangceng",r=0;r<this.questionArr.length;r++)this.playSpine(this.questionArr[r].getChildByName("spin").getComponent(sp.Skeleton),n,!0);return[3,7];case 2:return n="chuxian",[4,this.playSpine(this.questionBgArr[t].getChildByName("spin").getComponent(sp.Skeleton),n,!1)];case 3:case 4:return i.sent(),[4,this.playSpine(this.questionBgArr[t].getChildByName("spin").getComponent(sp.Skeleton),n,!1)];case 5:return i.sent(),n="jingzhen",this.playSpine(this.questionBgArr[t].getChildByName("spin").getComponent(sp.Skeleton),n,!1),[3,7];case 6:return[3,7];case 7:return[2]}})})},t.prototype.createPlayer=function(){return s(this,void 0,void 0,function(){var e,t,n;return a(this,function(r){switch(r.label){case 0:e=function(e){var n;return a(this,function(r){switch(r.label){case 0:return(n=cc.instantiate(t.playerPrefab)).parent=t.playerBoardMask,n.x=d.ExtremeRescue_config.playPos[0][0],n.y=d.ExtremeRescue_config.playPos[0][1],n.scale=d.ExtremeRescue_config.playerScale,t.playerArr.push(n),[4,u.default.instance.loadSpineData("res/spines/"+d.ExtremeRescue_config.player[e],t.bundleName).then(function(e){n.getChildByName("spin").getComponent(sp.Skeleton).skeletonData=e})];case 1:return r.sent(),t.playerSpin(e,"run"),[2]}})},t=this,n=0,r.label=1;case 1:return n<d.ExtremeRescue_config.player.length?[5,e(n)]:[3,4];case 2:r.sent(),r.label=3;case 3:return n++,[3,1];case 4:return[2]}})})},t.prototype.playerSpin=function(e,t){var n;switch(d.ExtremeRescue_config.player[e]){case"songshu3":"run"==t?n="songshu_43ce_daiji3":"stop"==t&&(n="songshu_43ce_daiji");break;case"qingwa":"run"==t?n="pao2":"stop"==t&&(n="daiji");break;case"S_hopper_xie":"run"==t?n="43_benpao":"stop"==t&&(n="43_daiji");break;case"tigo34":"run"==t?n="kuaipao":"stop"==t&&(n="daiji")}this.playSpine(this.playerArr[e].getChildByName("spin").getComponent(sp.Skeleton),n,!0)},t.prototype.playerMove=function(e){var t,n=this;switch(e){case 0:t=(d.ExtremeRescue_config.playPos[1][0]-d.ExtremeRescue_config.playPos[0][0])/d.ExtremeRescue_config.playerSpeed,this.playRunAudio(),this.playerSpin(this.gameIndex,"run"),cc.tween(this.playerArr[this.gameIndex]).to(t,{x:d.ExtremeRescue_config.playPos[1][0],y:d.ExtremeRescue_config.playPos[1][1]}).call(function(){n.stopRunAudio(),n.playerSpin(n.gameIndex,"stop")}).start();break;case 1:t=200/d.ExtremeRescue_config.playerSpeed,this.playRunAudio(),this.playerSpin(this.gameIndex,"run"),cc.tween(this.playerArr[this.gameIndex]).by(t,{x:200}).call(function(){n.playerArr[n.gameIndex].x=d.ExtremeRescue_config.playPos[2][0],n.playerArr[n.gameIndex].y=d.ExtremeRescue_config.playPos[2][1],n.playerArr[n.gameIndex].parent=n.aisleMask,n.playerMove(2)}).start();break;case 2:t=2,cc.tween(this.playerArr[this.gameIndex]).to(t,{x:d.ExtremeRescue_config.playPos[3][0]}).call(function(){n.stopRunAudio(),n.playerArr[n.gameIndex].active=!1;for(var e=function(e){cc.tween(n.questionBgArr[e]).delay(.5*e).call(function(){l.default.playEffect(n.bundleName,"res/audios/SE_jixianjiuyuan_05")}).by(.25,{y:-500}).start(),cc.tween(n.questionArr[e]).delay(.5*e).by(.25,{y:-500}).call(function(){e==n.questionArr.length-1&&n.moveEnd()}).start()},t=0;t<n.questionArr.length;t++)e(t)}).start()}},t.prototype.moveEnd=function(){return s(this,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return this.gameIndex++,this.gameIndex>=d.ExtremeRescue_config.rightIndex.length?(l.default.playEffect(this.bundleName,"res/audios/SE_jixianjiuyuan_03"),[4,this.playSpine(this.rightUFO.getComponent(sp.Skeleton),"guanshangcangmen",!1)]):[3,3];case 1:return e.sent(),l.default.playEffect(this.bundleName,"res/audios/SE_jixianjiuyuan_04"),[4,this.playSpine(this.rightUFO.getComponent(sp.Skeleton),"feijifeizou",!1)];case 2:return e.sent(),this.gameEnd(),[3,4];case 3:this.nextLeave(),e.label=4;case 4:return[2]}})})},t.prototype.creatScaleTimeout=function(){this.unschedule(this.scaleTimeoutCallback),this.unschedule(this.scaleTimeoutCallback2),this.schedule(this.scaleTimeoutCallback,5),this.schedule(this.scaleTimeoutCallback2,5)},t.prototype.scaleTimeoutCallback=function(){for(var e=0;e<this.answerArr.length;e++)cc.tween(this.answerArr[e]).to(.1,{scale:1.1}).to(.15,{scale:.9}).to(.15,{scale:1.1}).to(.1,{scale:1}).start()},t.prototype.scaleTimeoutCallback2=function(){l.default.playAudioSound(this.bundleName,"res/audios/"+d.ExtremeRescue_config.rightAudio[this.gameIndex],function(){})},t.prototype.playRunAudio=function(){l.default.playLoopEffect(this.bundleName,"res/audios/run")},t.prototype.stopRunAudio=function(){l.default.stopLoopEffect(this.bundleName,"res/audios/run")},t.prototype.playSpine=function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=0),!n)return new Promise(function(i){var o=e.setAnimation(r,t,n);e.setTrackCompleteListener(o,function(){i(null)})});Promise.resolve().then(function(){e.setAnimation(r,t,n)})},o([g({type:cc.Node,displayName:"\u80cc\u666f"})],t.prototype,"bgBox",void 0),o([g({type:cc.Node,displayName:"\u95ee\u9898\u64cd\u4f5c\u677f"})],t.prototype,"questionBoard",void 0),o([g({type:cc.Node,displayName:"\u95ee\u9898\u80cc\u666f\u677f"})],t.prototype,"questionBgBoard",void 0),o([g({type:cc.Node,displayName:"\u7b54\u6848\u64cd\u4f5c\u677f"})],t.prototype,"answerBoard",void 0),o([g({type:cc.Node,displayName:"\u89d2\u8272\u64cd\u4f5c\u677f\u906e\u7f69"})],t.prototype,"playerBoardMask",void 0),o([g({type:cc.Node,displayName:"\u7ba1\u9053\u5939\u5c42\u906e\u7f69"})],t.prototype,"aisleMask",void 0),o([g({type:cc.Node,displayName:"\u53f3\u4fa7\u98de\u8247"})],t.prototype,"rightUFO",void 0),o([g({type:cc.Prefab,displayName:"\u95ee\u9898\u9884\u5236\u4f53"})],t.prototype,"questionPrefab",void 0),o([g({type:cc.Prefab,displayName:"\u95ee\u9898\u80cc\u666f\u9884\u5236\u4f53"})],t.prototype,"questionBgPrefab",void 0),o([g({type:cc.Prefab,displayName:"\u7b54\u6848\u9884\u5236\u4f53"})],t.prototype,"answerPrefab",void 0),o([g({type:cc.Prefab,displayName:"\u89d2\u8272\u9884\u5236\u4f53"})],t.prototype,"playerPrefab",void 0),o([f],t)}(c.default);n.default=m,cc._RF.pop()},{"../../../module/component/scripts/GameCompBase":void 0,"../../../module/kit/TigoManager":void 0,"../../../module/kit/assets/AssetsManger":void 0,"../../../module/kit/audio/AudioManager":void 0,"./ExtremeRescue_config":"ExtremeRescue_config"}]},{},["ExtremeRescue","ExtremeRescue_config"]);