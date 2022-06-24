window.__require=function t(e,o,i){function n(s,c){if(!o[s]){if(!e[s]){var a=s.split("/");if(a=a[a.length-1],!e[a]){var u="function"==typeof __require&&__require;if(!c&&u)return u(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+s+"'")}s=a}var p=o[s]={exports:{}};e[s][0].call(p.exports,function(t){return n(e[s][1][t]||t)},p,p.exports,t,e,o,i)}return o[s].exports}for(var r="function"==typeof __require&&__require,s=0;s<i.length;s++)n(i[s]);return n}({AnswerItem:[function(t,e,o){"use strict";cc._RF.push(e,"de911k7qNBBNI2WXjopCaSw","AnswerItem");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,c=s.ccclass,a=s.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e}var o;return n(e,t),o=e,e.prototype.setString=function(t){this.label.string=t},e.prototype.getString=function(){return this.label.string},e.prototype.isValueEqual=function(t){return t.getString()==this.getString()},e.prototype.onDestroy=function(){this.unuse(),kit.pool.PrefabPool.put(this.node,"answerItem",o)},e.prototype.reuse=function(){cc.log("reuse item")},e.prototype.unuse=function(){cc.log("unuse item")},r([a(cc.Label)],e.prototype,"label",void 0),o=r([c],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],Config:[function(t,e,o){"use strict";cc._RF.push(e,"7d259bcpq1GepgSPh9U8W5v","Config"),Object.defineProperty(o,"__esModule",{value:!0}),o.Config=void 0,o.Config={data:[{index:0,correctAnswer:"What's your name",questions:["your","name","What's"],stopCode:"?"},{index:1,correctAnswer:"How old are you",questions:["old","you","are","How"],stopCode:"?"},{index:2,correctAnswer:"I am seven",questions:["am","I","seven"],stopCode:"."},{index:3,correctAnswer:"Raise your hand please",questions:["please","your","Raise","hand"],stopCode:"."},{index:4,correctAnswer:"Be quiet please",questions:["quiet","Be","please"],stopCode:"."}]},cc._RF.pop()},{}],Delegate:[function(t,e,o){"use strict";cc._RF.push(e,"c986aZS7eJF9LbSvqvx3QPN","Delegate"),Object.defineProperty(o,"__esModule",{value:!0});var i=t("./AnswerItem"),n=t("./Config"),r=t("./QuestionItem"),s=function(){function t(t){this.lastOpTime=0,this.tipSpaceTime=5e3,this.root=t,this.operateLock=!1}return t.prototype.start=function(t){var e=this;void 0===t&&(t=!1),this.addListener(),!t&&this.gameStart(),t||this.root.isTeacher||this.root.scheduleOnce(function(){var t=e.root.questionNode.children[2].convertToWorldSpaceAR(cc.Vec3.ZERO);t=e.root.node.convertToNodeSpaceAR(cc.v2(t.x,t.y));var o=e.root.rootNode.children[0].convertToWorldSpaceAR(cc.Vec3.ZERO);o=e.root.node.convertToNodeSpaceAR(cc.v2(o.x,o.y)),e.root.guildHand(t,o)},.5)},t.prototype.onDestroy=function(){this.delListener(),this.root=null,this.operation=null,this.curRoundData=null,this.curTarget=null,this.curTargetBasePos=null},t.prototype.setOperationLock=function(){this.operateLock=!0,this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.backToBase()},t.prototype.setOperationFree=function(){var t=this;this.operateLock=!1,this.step>0&&(this.timeout=setTimeout(function(){t.checkShowOpTip()},this.tipSpaceTime))},t.prototype.checkShowOpTip=function(){var t=Date.now();if(t-this.lastOpTime>=this.tipSpaceTime){this.lastOpTime=t;var e=[];this.operation.data.forEach(function(t){t.correct||e.push(t.content)}),this.root.tipShow(e)}},t.prototype.backToBase=function(){var t=this;if(this.curTarget&&this.curTargetBasePos){var e=this.operation.data,o=this.curTarget.getComponent(r.default).getString();e.forEach(function(e){if(e.content==o){var i=t.curTargetBasePos.clone();e.position=cc.v2(i.x>>0,i.y>>0)}}),cc.tween(this.curTarget).to(.5,{x:this.curTargetBasePos.x>>0,y:this.curTargetBasePos.y>>0},cc.easeCubicActionOut()).call(function(){t.root.exportOperationData(t.operation,"operation",-1)}).start(),this.curTarget=null,this.curTargetBasePos=null}},t.prototype.addListener=function(){this.root.node.on(cc.Node.EventType.TOUCH_START,this.onTouchBegin,this),this.root.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMoved,this),this.root.node.on(cc.Node.EventType.TOUCH_END,this.onTouchReleased,this),this.root.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchReleased,this)},t.prototype.delListener=function(){this.root.node.off(cc.Node.EventType.TOUCH_START,this.onTouchBegin,this),this.root.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMoved,this),this.root.node.off(cc.Node.EventType.TOUCH_END,this.onTouchReleased,this),this.root.node.off(cc.Node.EventType.TOUCH_CANCEL,this.onTouchReleased,this)},t.prototype.onTouchBegin=function(t){var e=this;if(!this.operateLock){this.root.stopHand(),this.root.stopTip(),this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.removeLayoutFromRoot();var o=t.getLocation();this.root.questionNode.children.forEach(function(t){var i=t.getComponent(r.default).getString();if(!e.getCorrect(i)){var n=t.getBoundingBoxToWorld();!e.curTarget&&n.contains(o)&&(e.curTarget=t,e.curTargetBasePos=e.curTarget.getPosition(),e.curTarget.setSiblingIndex(e.root.questionNode.childrenCount-1),cc.log("get target, name: "+i))}})}},t.prototype.onTouchMoved=function(t){this.operateLock||this.curTarget&&(this.curTarget.x+=t.getDeltaX(),this.curTarget.y+=t.getDeltaY())},t.prototype.onTouchReleased=function(t){var e=this;if(!this.operateLock){if(this.curTarget){var o=t.getLocation();this.operation.step++;var i,n=this.curTarget.getComponent(r.default).getString(),s=this.operation.data,c=!1,a=[];if(this.root.rootNode.children.forEach(function(t,r){var s=t.getBoundingBoxToWorld();if(e.curTarget&&s.contains(o))i=e.root.questionNode.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.Vec3.ZERO)),cc.tween(e.curTarget).to(.25,{x:i.x,y:i.y},cc.easeCubicActionOut()).start(),r==e.curRoundData.correctAnswer.split(" ").indexOf(n)&&(c=!0);else{var u=e.curTarget.getBoundingBoxToWorld();if(u.intersects(s)){var p=new cc.Rect;u.intersection(p,s),a.push({item:t,rect:p,index:r})}}}),!c&&a.length>0){for(var u=void 0,p=0;p<a.length;){if(u){var h=a[p].rect.size,l=h.width*h.height,d=u.rect.size;d.width*d.height<l&&(u=a[p])}else u=a[p];p++}u&&(i=this.root.questionNode.convertToNodeSpaceAR(u.item.convertToWorldSpaceAR(cc.Vec3.ZERO)),cc.tween(this.curTarget).to(.25,{x:i.x,y:i.y},cc.easeCubicActionOut()).start(),u.index==this.curRoundData.correctAnswer.split(" ").indexOf(n)&&(c=!0))}s.forEach(function(t){t.content==n&&(t.correct=c,t.position=i?cc.v2(i.x>>0,i.y>>0):cc.v2(e.curTarget.x>>0,e.curTarget.y>>0))}),this.root.exportOperationData(this.operation,"operation",c?1:0),c||(this.root.playersHurt(),this.backToBase()),this.checkAllCorrect()}this.curTarget=null,this.timeout=setTimeout(function(){e.checkShowOpTip()},this.tipSpaceTime)}},t.prototype.resumeGameStatus=function(){var t=this;this.curRound=this.operation.round,this.curRoundData=n.Config.data[this.curRound],this.root.rootNode.removeAllChildren(),this.root.questionNode.removeAllChildren(),this.createRoundElement(),this.step=this.operation.step,this.root.questionNode.children.forEach(function(e){t.resumePosition(e)})},t.prototype.resumePosition=function(t){var e=t.getComponent(r.default).getString();this.operation.data.forEach(function(o){e==o.content&&(t.x=o.position.x,t.y=o.position.y)})},t.prototype.gameStart=function(){this.curRound=0,this.curRoundData=n.Config.data[this.curRound],this.createRoundElement()},t.prototype.nextRound=function(){if(this.curTarget=null,this.curTargetBasePos=null,this.curRound++,this.curRound>=n.Config.data.length)return this.root.sentenceComplete(!0),void this.root.exportOperationData(this.operation,"gameComplete");this.curRoundData=n.Config.data[this.curRound],this.root.rootNode.removeAllChildren(),this.root.questionNode.removeAllChildren(),this.operation=null,this.createRoundElement()},t.prototype.createRoundElement=function(){var t=this;if(this.addItemToQuestion(),this.addItemToRoot(),!this.operation){this.addLayoutToRoot(),this.step=0;var e=[];this.root.questionNode.children.forEach(function(t){e.push({content:t.getComponent(r.default).getString(),position:cc.v2(t.x>>0,t.y>>0),correct:!1})}),this.operation={round:this.curRound,step:this.step,data:e},this.curRound>0&&this.root.exportOperationData(this.operation,"operation",-1),this.root.scheduleOnce(function(){t.removeLayoutFromRoot()},.5)}},t.prototype.addLayoutToRoot=function(){if(this.root.questionNode){var t=this.root.questionNode.getComponent(cc.Layout);t.type=cc.Layout.Type.GRID,t.resizeMode=cc.Layout.ResizeMode.CONTAINER,t.startAxis=cc.Layout.AxisDirection.HORIZONTAL,t.spacingX=58,t.spacingY=40,t.updateLayout()}},t.prototype.removeLayoutFromRoot=function(){if(this.root.questionNode){var t=this.root.questionNode.getComponent(cc.Layout);t.resizeMode=cc.Layout.ResizeMode.NONE,t.type=cc.Layout.Type.NONE}},t.prototype.addItemToRoot=function(){for(var t=this.curRoundData.correctAnswer.split(" "),e=t.length,o=0;o<e;){var n=kit.pool.PrefabPool.get(this.root.answerPrefab,"answerItem",i.default);t[o].includes(this.curRoundData.stopCode)?n.getComponent(i.default).setString(t[o].substring(0,t[o].length-1)):n.getComponent(i.default).setString(t[o]),this.root.rootNode&&(n.parent=this.root.rootNode),o++}this.root.stopCode.string=this.curRoundData.stopCode},t.prototype.addItemToQuestion=function(){if(this.curRoundData&&this.curRoundData.questions)for(var t=this.curRoundData.questions.length,e=0;e<t;){var o=kit.pool.PrefabPool.get(this.root.questionPrefab,"questionItem",r.default);o.getComponent(r.default).setString(this.curRoundData.questions[e]),o.parent=this.root.questionNode,e++}},t.prototype.synchronous=function(t,e){var o=this;if(void 0===e&&(e=!1),this.operation&&this.operation.round==t.round){this.removeLayoutFromRoot(),this.operation.round=t.round,this.step=this.operation.step=t.step;for(var i=t.data,n=0;n<i.length;){var r=i[n];r&&this.operation.data[n]&&r.content==this.operation.data[n].content&&(this.operation.data[n].position.x==r.position.x&&this.operation.data[n].position.y==r.position.y||(this.syncItemPosition(r),this.operation.data[n].position.x=r.position.x,this.operation.data[n].position.y=r.position.y)),n++}}else this.operation=t,0==this.operation.step?this.addLayoutToRoot():this.removeLayoutFromRoot(),this.resumeGameStatus(),0==this.operation.step&&this.root.scheduleOnce(function(){o.removeLayoutFromRoot()},.5)},t.prototype.syncItemPosition=function(t){this.root.questionNode.children.forEach(function(e){e.getComponent(r.default).getString()==t.content&&cc.tween(e).to(.5,{x:t.position.x,y:t.position.y},cc.easeCubicActionOut()).start()})},t.prototype.getCorrect=function(t){var e=!1;return this.operation.data.forEach(function(o){o.content==t&&(e=o.correct)}),e},t.prototype.checkAllCorrect=function(){var t=this,e=!0;this.operation.data.forEach(function(t){e&&(e=t.correct)}),e&&(this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.root.hideLaser(this.operation.round),this.root.sentenceComplete(),setTimeout(function(){t.root.exportOperationData(t.operation,"roundComplete")},1e3))},t}();o.default=s,cc._RF.pop()},{"./AnswerItem":"AnswerItem","./Config":"Config","./QuestionItem":"QuestionItem"}],IItem:[function(t,e,o){"use strict";cc._RF.push(e,"86e5arO89pFsLVBZpQgK5bu","IItem"),Object.defineProperty(o,"__esModule",{value:!0}),cc._RF.pop()},{}],MakeASentenceScript:[function(t,e,o){"use strict";cc._RF.push(e,"75b66DIknBJ84XES7ar8Uwp","MakeASentenceScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=t("./Delegate"),c=t("./QuestionItem"),a=cc._decorator,u=a.ccclass,p=a.property,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.answerPrefab=null,e.questionPrefab=null,e.rootNode=null,e.stopCode=null,e.questionNode=null,e.cheerAudio=null,e.suspireAudio=null,e.laserAudio=null,e.hand=null,e.leftDoor=null,e.rightDoor=null,e.lasers=[],e}return n(e,t),e.prototype.onLoad=function(){this.delegate=new s.default(this),this.laserBaseOpacity=[];for(var t=0;t<this.lasers.length;){var e=this.lasers[t];this.laserBaseOpacity.push(e.opacity),e.opacity=0,t++}},e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this),this.delegate.onDestroy(),this.delegate=null},e.prototype.start=function(){var t=this;if(this.content&&this.content.onGameReady(),this.isTeacher?this.delegate.setOperationLock():this.delegate.setOperationFree(),this.playIdle(),this.snapData&&"gameComplete"!=this.snapData.action){var e=this.snapData.actionData.round;this.lasers.forEach(function(o,i){i>=e&&(o.opacity=t.laserBaseOpacity[i])}),this.delegate.synchronous(this.snapData.actionData),this.delegate.start(!0)}else this.showLasers(this.onStart.bind(this))},e.prototype.onStart=function(){this.delegate.start()},e.prototype.cloneActDt=function(t){return JSON.parse(JSON.stringify(t))},e.prototype.setParams=function(t){cc.log("set params: "+JSON.stringify(t)),this.isTeacher=t.isTeacher||!1},e.prototype.setContent=function(t){this.content=t;var e=this.content.getSnapshot();this.snapData=e},e.prototype.receiveMessage=function(t){if(cc.log("receiveMessage: "+t),t.isTeacher){if(!this.isTeacher)switch(t.actionData){case"nextRound":this.delegate.nextRound()}}else if(this.isTeacher)switch(t.action){case"operation":this.delegate.synchronous(t.actionData),0==t.correct&&this.playersHurt();break;case"roundComplete":var e=t.actionData.round;this.hideLaser(e),this.sentenceComplete();break;case"gameComplete":this.sentenceComplete(!0)}},e.prototype.timeout=function(){},e.prototype.showLasers=function(t){var e=this,o=this,i=0;this.lasers.forEach(function(n,r){n.active=!0,cc.audioEngine.play(e.laserAudio,!1,1),cc.tween(n).delay(.2*r).to(.5,{opacity:e.laserBaseOpacity[r]}).call(function(){++i==o.lasers.length&&t&&t.apply(null)}).start()})},e.prototype.hideLaser=function(t){this.lasers.forEach(function(e,o){t==o&&cc.tween(e).to(.5,{opacity:0},cc.easeCubicActionOut()).call(function(){e.active=!1}).start()})},e.prototype.guildHand=function(t,e){this.hand&&(this.hand.active=!0,cc.tween(this.hand).repeatForever(cc.tween().set({x:t.x,y:t.y}).to(1.5,{x:e.x,y:e.y},cc.easeCubicActionOut()).delay(.5)).start())},e.prototype.stopHand=function(){cc.Tween.stopAllByTarget(this.hand),this.hand.active=!1},e.prototype.tipShow=function(t){this.questionNode.children.forEach(function(e){t.includes(e.getComponent(c.default).getString())&&e.getComponent(c.default).showTip()})},e.prototype.stopTip=function(){this.questionNode.children.forEach(function(t){t.getComponent(c.default).hideTip()})},e.prototype.playIdle=function(){},e.prototype.playersHurt=function(){cc.log("playersHurt"),cc.audioEngine.play(this.suspireAudio,!1,1)},e.prototype.sentenceComplete=function(t){var e=this;void 0===t&&(t=!1),cc.log("sentenceComplete"),t?this.openTheDoor():(cc.audioEngine.play(this.cheerAudio,!1,1),setTimeout(function(){!e.isTeacher&&e.onNextRound(!1)},2e3))},e.prototype.openTheDoor=function(){var t=this;cc.tween(this.leftDoor).to(1,{x:-164},cc.easeCubicActionOut()).start(),cc.tween(this.rightDoor).to(1,{x:164},cc.easeCircleActionOut()).delay(2).call(function(){t.content&&t.content.onGameComplete()}).start()},e.prototype.exportOperationData=function(t,e,o){if(void 0===o&&(o=-1),!this.isTeacher){var i={isTeacher:this.isTeacher,action:e,actionData:t,correct:o};this.content&&this.content.postMessage(JSON.stringify(i))}},e.prototype.onNextRound=function(t){void 0===t&&(t=!1);var e={isTeacher:this.isTeacher,actionData:"nextRound"};this.isTeacher&&t&&this.content&&(cc.log("dispatch NextRound"),this.content.postMessage(JSON.stringify(e))),this.delegate&&this.delegate.nextRound()},e.prototype.onToggleSwitch=function(){var t={isTeacher:this.isTeacher,actionData:""};this.content&&this.content.postMessage(JSON.stringify(t))},e.prototype.playSpine=function(t,e,o,i){void 0===o&&(o=!1),t&&t.animation!=e&&(t.clearTracks(),t.setToSetupPose(),t.setAnimation(0,e,o),i&&t.setCompleteListener(i))},r([p(cc.Prefab)],e.prototype,"answerPrefab",void 0),r([p(cc.Prefab)],e.prototype,"questionPrefab",void 0),r([p(cc.Node)],e.prototype,"rootNode",void 0),r([p(cc.Label)],e.prototype,"stopCode",void 0),r([p(cc.Node)],e.prototype,"questionNode",void 0),r([p(cc.AudioClip)],e.prototype,"cheerAudio",void 0),r([p(cc.AudioClip)],e.prototype,"suspireAudio",void 0),r([p(cc.AudioClip)],e.prototype,"laserAudio",void 0),r([p(cc.Node)],e.prototype,"hand",void 0),r([p(cc.Node)],e.prototype,"leftDoor",void 0),r([p(cc.Node)],e.prototype,"rightDoor",void 0),r([p([cc.Node])],e.prototype,"lasers",void 0),r([u],e)}(cc.Component);o.default=h,cc._RF.pop()},{"./Delegate":"Delegate","./QuestionItem":"QuestionItem"}],QuestionItem:[function(t,e,o){"use strict";cc._RF.push(e,"a4ec2E+YkNGQ504oIEscwLh","QuestionItem");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=t("./AnswerItem"),c=cc._decorator,a=c.ccclass,u=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}var o;return n(e,t),o=e,e.prototype.showTip=function(){cc.Tween.stopAllByTarget(this.node),cc.tween(this.node).repeatForever(cc.tween(this.node).to(.5,{scale:1.2},cc.easeCubicActionOut()).delay(.2).to(.5,{scale:1},cc.easeCubicActionOut())).start()},e.prototype.hideTip=function(){cc.Tween.stopAllByTarget(this.node),this.node.scale=1},e.prototype.onDestroy=function(){this.unuse(),kit.pool.PrefabPool.put(this.node,"questionItem",o)},e.prototype.reuse=function(){cc.log("QuestionItem reuse item")},e.prototype.unuse=function(){cc.log("QuestionItem un use")},o=r([a],e)}(s.default));o.default=u,cc._RF.pop()},{"./AnswerItem":"AnswerItem"}]},{},["AnswerItem","Config","Delegate","IItem","MakeASentenceScript","QuestionItem"]);