window.__require=function a(r,t,e){function i(n,d){if(!t[n]){if(!r[n]){var o=n.split("/");if(o=o[o.length-1],!r[o]){var s="function"==typeof __require&&__require;if(!d&&s)return s(o,!0);if(g)return g(o,!0);throw new Error("Cannot find module '"+n+"'")}n=o}var h=t[n]={exports:{}};r[n][0].call(h.exports,function(a){return i(r[n][1][a]||a)},h,h.exports,a,r,t,e)}return t[n].exports}for(var g="function"==typeof __require&&__require,n=0;n<e.length;n++)i(e[n]);return i}({DragTemplate1Config:[function(a,r,t){"use strict";cc._RF.push(r,"97fe7ALYmlIPaowdtUAcCTw","DragTemplate1Config"),Object.defineProperty(t,"__esModule",{value:!0}),t.DragTemplate1Config=void 0,t.DragTemplate1Config={gameBg:"res/images/image29",drag:[{dragImage:"res/images/image35",dragAudio:"res/audios/media5",zIndexDrag:1,dragPosition:[-567,314],dragRightImage:"res/images/image33",dragRightPosition:[140,51],dragEndImage:"res/images/image35",dragEndPosition:[320,115],zIndexDragRight:3},{dragImage:"res/images/image36",dragAudio:"res/audios/media6",zIndexDrag:2,dragPosition:[-567,58],dragRightImage:"res/images/image32",dragRightPosition:[300,330],dragEndImage:"res/images/image36",dragEndPosition:[477,340],zIndexDragRight:2},{dragImage:"res/images/image37",dragAudio:"res/audios/media4",zIndexDrag:3,dragPosition:[-567,-178],dragRightImage:"res/images/image34",dragRightPosition:[461,-314],dragEndImage:"res/images/image37",dragEndPosition:[535,-232],zIndexDragRight:4}],else:[{dragRightImage:"res/images/image31",dragRightPosition:[-330,340],zIndexDragRight:1}]},cc._RF.pop()},{}],DragTemplate1:[function(a,r,t){"use strict";cc._RF.push(r,"1ca6bCjMn1Ocrvvx7eMKMB7","DragTemplate1");var e,i=this&&this.__extends||(e=function(a,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])})(a,r)},function(a,r){function t(){this.constructor=a}e(a,r),a.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}),g=this&&this.__decorate||function(a,r,t,e){var i,g=arguments.length,n=g<3?r:null===e?e=Object.getOwnPropertyDescriptor(r,t):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(a,r,t,e);else for(var d=a.length-1;d>=0;d--)(i=a[d])&&(n=(g<3?i(n):g>3?i(r,t,n):i(r,t))||n);return g>3&&n&&Object.defineProperty(r,t,n),n},n=this&&this.__awaiter||function(a,r,t,e){return new(t||(t=Promise))(function(i,g){function n(a){try{o(e.next(a))}catch(r){g(r)}}function d(a){try{o(e.throw(a))}catch(r){g(r)}}function o(a){var r;a.done?i(a.value):(r=a.value,r instanceof t?r:new t(function(a){a(r)})).then(n,d)}o((e=e.apply(a,r||[])).next())})},d=this&&this.__generator||function(a,r){var t,e,i,g,n={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return g={next:d(0),throw:d(1),return:d(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function d(a){return function(r){return o([a,r])}}function o(g){if(t)throw new TypeError("Generator is already executing.");for(;n;)try{if(t=1,e&&(i=2&g[0]?e.return:g[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,g[1])).done)return i;switch(e=0,i&&(g=[2&g[0],i.value]),g[0]){case 0:case 1:i=g;break;case 4:return n.label++,{value:g[1],done:!1};case 5:n.label++,e=g[1],g=[0];continue;case 7:g=n.ops.pop(),n.trys.pop();continue;default:if(!(i=(i=n.trys).length>0&&i[i.length-1])&&(6===g[0]||2===g[0])){n=0;continue}if(3===g[0]&&(!i||g[1]>i[0]&&g[1]<i[3])){n.label=g[1];break}if(6===g[0]&&n.label<i[1]){n.label=i[1],i=g;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(g);break}i[2]&&n.ops.pop(),n.trys.pop();continue}g=r.call(a,n)}catch(d){g=[6,d],e=0}finally{t=i=0}if(5&g[0])throw g[1];return{value:g[0]?g[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var o=a("./DragTemplate1Config"),s=cc._decorator,h=s.ccclass,c=s.property,m=function(a){function r(){var r=null!==a&&a.apply(this,arguments)||this;return r.answerNode=null,r.dragNode=null,r.dragBox=null,r.dragEndBox=null,r.dragBoxMask=null,r.answerBox=null,r.elseBox=null,r.gameBg=null,r.TemplateGameType="edit",r.message={dragStart:!1,dragNum:null,rightArr:[],rightNum:null,errorNum:null},r.dragArr=[],r.dragArr2=[],r.dragEndArr=[],r.dragEndArr2=[],r.canMove=!1,r.canClick=!0,r.dragData={drag:[{dragPosition:[-567,314],dragRightPosition:[140,51],dragEndPosition:[320,115]},{dragPosition:[-567,58],dragRightPosition:[300,330],dragEndPosition:[477,340]},{dragPosition:[-567,-178],dragRightPosition:[461,-314],dragEndPosition:[535,-232]}],else:[{dragRightPosition:[-330,340]}]},r}return i(r,a),r.prototype.onLoad=function(){this.gameData=o.DragTemplate1Config,"game"==this.state&&(this.TemplateGameType="game"),this.changeData(),this.gameInit(),this.content.open(center.components.type.StartGame).show(function(){},this);var a=this.content.getSnapshot();a&&(console.log("\u91cd\u8fde"),this.receiveMessage(a)),this.onGameReady()},r.prototype.changeData=function(){console.log("\u5f97\u5230lessonConfig",this.lessonConfig);for(var a=1;a<4;a++)""!=this.lessonConfig.data[0]["dragImage"+a]&&(this.gameData.drag[a-1].dragImage=this.lessonConfig.data[0]["dragImage"+a]),""!=this.lessonConfig.data[0]["dragEndImage"+a]&&(this.gameData.drag[a-1].dragEndImage=this.lessonConfig.data[0]["dragEndImage"+a]),""!=this.lessonConfig.data[0]["dragAudio"+a]&&(this.gameData.drag[a-1].dragAudio=this.lessonConfig.data[0]["dragAudio"+a]),""!=this.lessonConfig.data[0]["dragRightImage"+a]&&(this.gameData.drag[a-1].dragRightImage=this.lessonConfig.data[0]["dragRightImage"+a]);if(""!=this.lessonConfig.data[0].gameBg&&(this.gameData.gameBg=this.lessonConfig.data[0].gameBg),""!=this.lessonConfig.data[0].elseDragRightImage&&(this.gameData.elseDragRightImage=this.lessonConfig.data[0].elseDragRightImage),""!=this.lessonConfig.data[0].dragData){for(a=0;a<this.lessonConfig.data[0].dragData.drag.length;a++)this.dragData.drag[a].dragPosition[0]=this.lessonConfig.data.dragData.drag[a].dragPosition[0],this.dragData.drag[a].dragPosition[1]=this.lessonConfig.data.dragData.drag[a].dragPosition[1],this.dragData.drag[a].dragEndPosition[0]=this.lessonConfig.data.dragData.drag[a].dragEndPosition[0],this.dragData.drag[a].dragEndPosition[1]=this.lessonConfig.data.dragData.drag[a].dragEndPosition[1],this.dragData.drag[a].dragRightPosition[0]=this.lessonConfig.data.dragData.drag[a].dragRightPosition[0],this.dragData.drag[a].dragRightPosition[1]=this.lessonConfig.data.dragData.drag[a].dragRightPosition[1];for(a=0;a<this.lessonConfig.data[0].dragData.else.length;a++)this.dragData.else[a].dragRightPosition[0]=this.lessonConfig.data.dragData.else[a].dragRightPosition[0],this.dragData.else[a].dragRightPosition[1]=this.lessonConfig.data.dragData.else[a].dragRightPosition[1]}},r.prototype.gameInit=function(){var a=this;console.log("gameData",this.gameData),this.loadImage(this.gameData.gameBg).then(function(r){a.gameBg.getComponent(cc.Sprite).spriteFrame=r});for(var r=function(a){var r=cc.instantiate(t.dragNode);r.setParent(t.dragBoxMask),r.x=t.gameData.drag[a].dragPosition[0],r.y=t.gameData.drag[a].dragPosition[1],r.zIndex=t.gameData.drag[a].zIndexDrag,t.loadImage(t.gameData.drag[a].dragImage).then(function(a){r.getChildByName("image").getComponent(cc.Sprite).spriteFrame=a,r.width=r.getChildByName("image").width,r.height=r.getChildByName("image").height}),t.loadImage(t.gameData.drag[a].dragEndImage).then(function(a){r.getChildByName("endImage").getComponent(cc.Sprite).spriteFrame=a}),t.dragArr.push(r);var e=cc.instantiate(t.answerNode);e.setParent(t.answerBox),e.x=t.gameData.drag[a].dragRightPosition[0],e.y=t.gameData.drag[a].dragRightPosition[1],e.zIndex=t.gameData.drag[a].zIndexDragRight,t.loadImage(t.gameData.drag[a].dragRightImage).then(function(a){e.getChildByName("image").getComponent(cc.Sprite).spriteFrame=a,e.width=e.getChildByName("image").width,e.height=e.getChildByName("image").height}),t.dragEndArr.push(e)},t=this,e=0;e<this.gameData.drag.length;e++)r(e);var i=function(a){var r=cc.instantiate(g.answerNode);r.setParent(g.elseBox),r.x=g.gameData.else[a].dragRightPosition[0],r.y=g.gameData.else[a].dragRightPosition[1],r.zIndex=g.gameData.else[a].zIndexDragRight,g.loadImage(g.gameData.else[a].dragRightImage).then(function(a){r.getChildByName("image").getComponent(cc.Sprite).spriteFrame=a,r.width=r.getChildByName("image").width,r.height=r.getChildByName("image").height}),g.dragEndArr2.push(r)},g=this;for(e=0;e<this.gameData.else.length;e++)i(e);if("game"==this.TemplateGameType){var n=function(r){d.dragArr[r].on(cc.Node.EventType.TOUCH_START,function(){a.dragStart(r)}),d.dragArr[r].on(cc.Node.EventType.TOUCH_MOVE,function(t){a.dragMove(r,t)}),d.dragArr[r].on(cc.Node.EventType.TOUCH_END,function(){a.dragEnd(r)}),d.dragArr[r].on(cc.Node.EventType.TOUCH_CANCEL,function(){a.dragEnd(r)})},d=this;for(e=0;e<this.dragArr.length;e++)n(e)}else{var o=function(a){var r=cc.instantiate(s.dragNode);r.setParent(s.dragEndBox),r.x=s.gameData.drag[a].dragEndPosition[0],r.y=s.gameData.drag[a].dragEndPosition[1],r.getChildByName("text").active=!0,r.zIndex=s.gameData.drag[a].zIndexDrag,s.loadImage(s.gameData.drag[a].dragEndImage).then(function(a){r.getChildByName("image").getComponent(cc.Sprite).spriteFrame=a,r.width=r.getChildByName("image").width,r.height=r.getChildByName("image").height}),s.dragArr2.push(r)},s=this;for(e=0;e<this.gameData.drag.length;e++)o(e);var h=function(r){c.dragArr[r].on(cc.Node.EventType.TOUCH_START,function(){a.dragStartEdit(a.dragArr,r)}),c.dragArr[r].on(cc.Node.EventType.TOUCH_MOVE,function(t){a.dragMoveEdit(a.dragArr,r,t)}),c.dragArr[r].on(cc.Node.EventType.TOUCH_END,function(){a.dragEndEdit(a.dragArr,r)}),c.dragArr[r].on(cc.Node.EventType.TOUCH_CANCEL,function(){a.dragEndEdit(a.dragArr,r)})},c=this;for(e=0;e<this.dragArr.length;e++)h(e);var m=function(r){l.dragArr2[r].on(cc.Node.EventType.TOUCH_START,function(){a.dragStartEdit(a.dragArr2,r)}),l.dragArr2[r].on(cc.Node.EventType.TOUCH_MOVE,function(t){a.dragMoveEdit(a.dragArr2,r,t)}),l.dragArr2[r].on(cc.Node.EventType.TOUCH_END,function(){a.dragEndEdit(a.dragArr2,r)}),l.dragArr2[r].on(cc.Node.EventType.TOUCH_CANCEL,function(){a.dragEndEdit(a.dragArr2,r)})},l=this;for(e=0;e<this.dragArr2.length;e++)m(e);var u=function(r){p.dragEndArr[r].on(cc.Node.EventType.TOUCH_START,function(){a.dragStartEdit(a.dragEndArr,r)}),p.dragEndArr[r].on(cc.Node.EventType.TOUCH_MOVE,function(t){a.dragMoveEdit(a.dragEndArr,r,t)}),p.dragEndArr[r].on(cc.Node.EventType.TOUCH_END,function(){a.dragEndEdit(a.dragEndArr,r)}),p.dragEndArr[r].on(cc.Node.EventType.TOUCH_CANCEL,function(){a.dragEndEdit(a.dragEndArr,r)})},p=this;for(e=0;e<this.dragEndArr.length;e++)u(e);var f=function(r){y.dragEndArr2[r].on(cc.Node.EventType.TOUCH_START,function(){a.dragStartEdit(a.dragEndArr2,r)}),y.dragEndArr2[r].on(cc.Node.EventType.TOUCH_MOVE,function(t){a.dragMoveEdit(a.dragEndArr2,r,t)}),y.dragEndArr2[r].on(cc.Node.EventType.TOUCH_END,function(){a.dragEndEdit(a.dragEndArr2,r)}),y.dragEndArr2[r].on(cc.Node.EventType.TOUCH_CANCEL,function(){a.dragEndEdit(a.dragEndArr2,r)})},y=this;for(e=0;e<this.dragEndArr2.length;e++)f(e)}},r.prototype.dragStartEdit=function(){},r.prototype.dragMoveEdit=function(a,r,t){var e=t.touch.getDelta();a[r].x+=e.x/this.dragBox.scale,a[r].y+=e.y/this.dragBox.scale},r.prototype.dragEndEdit=function(a,r){switch(a[r].parent.name){case"dragBoxMask":this.dragData.drag[r].dragPosition[0]=a[r].x,this.dragData.drag[r].dragPosition[1]=a[r].y;break;case"dragEndBox":this.dragData.drag[r].dragEndPosition[0]=a[r].x,this.dragData.drag[r].dragEndPosition[1]=a[r].y;break;case"answerBox":this.dragData.drag[r].dragRightPosition[0]=a[r].x,this.dragData.drag[r].dragRightPosition[1]=a[r].y;break;case"elseBox":this.dragData.else[r].dragRightPosition[0]=a[r].x,this.dragData.else[r].dragRightPosition[1]=a[r].y}console.log("\u6e38\u620f\u53d1\u7ed9\u5927\u5385\u6570\u636e",this.dragData),this.saveData(JSON.stringify(this.dragData))},r.prototype.dragStart=function(a){if(this.canClick){if(this.message.rightArr)for(var r=0;r<this.message.rightArr.length;r++)if(a==this.message.rightArr[r])return;this.canMove=!0,this.message.dragStart=!0,this.message.dragNum=a,this.postMessage(JSON.stringify(this.message))}},r.prototype.dragMove=function(a,r){if(this.canMove){var t=r.touch.getDelta();this.dragArr[a].x+=t.x/this.dragBox.scale,this.dragArr[a].y+=t.y/this.dragBox.scale,this.dragArr[a].zIndex=100}},r.prototype.dragEnd=function(a){if(this.canMove){if(this.canMove=!1,this.message.dragNum=a,this.dragArr[a].zIndex=this.gameData.drag[a].zIndexDrag,this.dragArr[a].x>=this.dragEndArr[a].x-this.dragEndArr[a].width/2&&this.dragArr[a].x<=this.dragEndArr[a].x+this.dragEndArr[a].width/2&&this.dragArr[a].y>=this.dragEndArr[a].y-this.dragEndArr[a].height/2&&this.dragArr[a].y<=this.dragEndArr[a].y+this.dragEndArr[a].height/2)this.message.rightArr.push(a),this.message.rightNum=a,this.message.errorNum=null;else{for(var r=-1,t=0;t<this.dragEndArr.length;t++)this.dragArr[a].x>=this.dragEndArr[t].x-this.dragEndArr[t].width/2&&this.dragArr[a].x<=this.dragEndArr[t].x+this.dragEndArr[t].width/2&&this.dragArr[a].y>=this.dragEndArr[t].y-this.dragEndArr[t].height/2&&this.dragArr[a].y<=this.dragEndArr[t].y+this.dragEndArr[t].height/2&&(r=t);this.message.rightNum=null,this.message.errorNum=r}this.postMessage(JSON.stringify(this.message))}},r.prototype.receiveMessage=function(a){return n(this,void 0,Promise,function(){var r,t;return d(this,function(){if(r=JSON.parse(a),console.log("getData",r),!r)return[2];for(t=0;t<r.rightArr.length;t++)this.dragArr[r.rightArr[t]].x=this.gameData.drag[r.rightArr[t]].dragEndPosition[0],this.dragArr[r.rightArr[t]].y=this.gameData.drag[r.rightArr[t]].dragEndPosition[1],this.dragArr[r.rightArr[t]].getChildByName("image").active=!1,this.dragArr[r.rightArr[t]].getChildByName("endImage").active=!0;return r.dragStart?(kit.Audio.playEffect(this.gameData.drag[r.dragNum].dragAudio),this.message.dragStart=!1,this.message.dragNum=null,this.dragArr[r.dragNum].parent=this.dragBox):(null!=r.rightNum?this.dragRight(r):this.dragError(r),this.message=r),[2]})})},r.prototype.dragRight=function(a){return n(this,void 0,void 0,function(){return d(this,function(){return this.dragArr[a.dragNum].x=this.gameData.drag[a.dragNum].dragEndPosition[0],this.dragArr[a.dragNum].y=this.gameData.drag[a.dragNum].dragEndPosition[1],this.dragArr[a.dragNum].getChildByName("image").active=!1,this.dragArr[a.dragNum].getChildByName("endImage").active=!0,kit.Audio.playEffect("res/audios/media7",{bundleName:"DragTemplate1"}),[2]})})},r.prototype.dragError=function(a){return n(this,void 0,void 0,function(){return d(this,function(r){switch(r.label){case 0:return this.canClick=!1,-1==a.errorNum?[3,2]:(kit.Audio.playEffect("res/audios/media8",{bundleName:"DragTemplate1"}),[4,this.errorTween(this.dragEndArr[a.errorNum])]);case 1:r.sent(),r.label=2;case 2:return this.canClick=!0,this.dragArr[a.dragNum].x=this.gameData.drag[a.dragNum].dragPosition[0],this.dragArr[a.dragNum].y=this.gameData.drag[a.dragNum].dragPosition[1],this.dragArr[a.dragNum].parent=this.dragBoxMask,[2]}})})},r.prototype.errorTween=function(a){return new Promise(function(r){cc.tween(a).by(.1,{x:15}).by(.2,{x:-30}).by(.2,{x:30}).by(.1,{x:-15}).call(function(){r()}).start()})},r.prototype.timeout=function(){},r.prototype.update=function(){},r.prototype.loadImage=function(a){return new Promise(function(r){kit.CCMLoader.loadImage(a,"DragTemplate1").then(function(a){var t=new cc.SpriteFrame(a);r(t)})})},g([c({type:cc.Prefab,displayName:"answerNode"})],r.prototype,"answerNode",void 0),g([c({type:cc.Prefab,displayName:"dragNode"})],r.prototype,"dragNode",void 0),g([c({type:cc.Node,displayName:"dragBox"})],r.prototype,"dragBox",void 0),g([c({type:cc.Node,displayName:"dragEndBox"})],r.prototype,"dragEndBox",void 0),g([c({type:cc.Node,displayName:"dragBoxMask"})],r.prototype,"dragBoxMask",void 0),g([c({type:cc.Node,displayName:"answerBox"})],r.prototype,"answerBox",void 0),g([c({type:cc.Node,displayName:"elseBox"})],r.prototype,"elseBox",void 0),g([c({type:cc.Node,displayName:"gameBg"})],r.prototype,"gameBg",void 0),g([h],r)}(center.SubGameBase);t.default=m,cc._RF.pop()},{"./DragTemplate1Config":"DragTemplate1Config"}]},{},["DragTemplate1","DragTemplate1Config"]);
//# sourceMappingURL=index.js.map
