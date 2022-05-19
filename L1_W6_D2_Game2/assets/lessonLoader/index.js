window.__require=function t(e,i,o){function n(c,a){if(!i[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var p="function"==typeof __require&&__require;if(!a&&p)return p(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var u=i[c]={exports:{}};e[c][0].call(u.exports,function(t){return n(e[c][1][t]||t)},u,u.exports,t,e,i,o)}return i[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<o.length;c++)n(o[c]);return n}({gameGate:[function(t,e,i){"use strict";cc._RF.push(e,"8b9b24zqddLhIrtEjxJu1Ux","gameGate");var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__decorate||function(t,e,i,o){var n,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(r<3?n(c):r>3?n(e,i,c):n(e,i))||c);return r>3&&c&&Object.defineProperty(e,i,c),c};Object.defineProperty(i,"__esModule",{value:!0});var c=t("../../../scripts/GameData"),a=t("../../kit/assets/AssetsManger"),s=cc._decorator,p=s.ccclass,u=s.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.quizLabel=null,e.selecNode=null,e.showSpr=null,e.btnbg=null,e.veilNode=null,e.popenNdoe=null,e.clickBut=null,e.udAni=null,e.gameid=0,e.curGid=0,e.gMenu=null,e.isSec=0,e}return n(e,t),e.prototype.onLoad=function(){},e.prototype.initInfo=function(t,e,i,o){this.gameid=t,this.curGid=e,this.isSec=i,this.gMenu=o,console.log("game gate id ="+t),console.log("game isSec ="+this.isSec),this.gameid==this.curGid?(this.selecNode.active=!0,this.veilNode.active=!1,this.popenNdoe.active=!0,this.udAni.play()):this.gameid<this.curGid&&0==this.isSec?(this.veilNode.active=!1,this.popenNdoe.active=!0,this.clickBut.interactable=!1,this.showSpr.node.opacity=190,this.btnbg.node.opacity=190,this.quizLabel.node.opacity=190):this.gameid>this.curGid&&(this.clickBut.interactable=!1),1==this.isSec&&(this.veilNode.active=!1,this.popenNdoe.active=!0,this.clickBut.interactable=!0),this.setShowImage()},e.prototype.setShowImage=function(){var t=this,e="";this.quizLabel.string="Game "+(this.gameid+1),c.default.gameConfig[this.gameid].icon&&(e=c.default.gameConfig[this.gameid].icon),a.default.instance.loadImg(e,"GameIcon").then(function(e){t.showSpr.spriteFrame=e})},e.prototype.start=function(){},e.prototype.onClickBut=function(){this.gMenu.gateClick(this.gameid)},r([u(cc.Label)],e.prototype,"quizLabel",void 0),r([u(cc.Node)],e.prototype,"selecNode",void 0),r([u(cc.Sprite)],e.prototype,"showSpr",void 0),r([u(cc.Sprite)],e.prototype,"btnbg",void 0),r([u(cc.Node)],e.prototype,"veilNode",void 0),r([u(cc.Node)],e.prototype,"popenNdoe",void 0),r([u(cc.Button)],e.prototype,"clickBut",void 0),r([u(cc.Animation)],e.prototype,"udAni",void 0),r([p],e)}(cc.Component);i.default=l,cc._RF.pop()},{"../../../scripts/GameData":void 0,"../../kit/assets/AssetsManger":void 0}],gameMenu:[function(t,e,i){"use strict";cc._RF.push(e,"621c94W4qhLfbbf5qvvzCWM","gameMenu");var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__decorate||function(t,e,i,o){var n,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(r<3?n(c):r>3?n(e,i,c):n(e,i))||c);return r>3&&c&&Object.defineProperty(e,i,c),c},c=this&&this.__spreadArrays||function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var o=Array(t),n=0;for(e=0;e<i;e++)for(var r=arguments[e],c=0,a=r.length;c<a;c++,n++)o[n]=r[c];return o};Object.defineProperty(i,"__esModule",{value:!0});var a=t("../../../scripts/GameData"),s=cc._decorator,p=s.ccclass,u=s.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.gpList=[],e.gatePre=null,e.curgameId=0,e.isSecgame=0,e.mainS=null,e.canClick=!0,e}return n(e,t),e.prototype.initMenu=function(t,e,i,o){var n,r=this;cc.log("game menu curid(page_num) == "+t),this.curgameId=t,this.isSecgame=e,this.mainS=o;var s=a.default.gameCount;if(2==s)n=[this.gpList[1],this.gpList[2]];else if(4==s)n=c(this.gpList);else if(3==s){n=[this.gpList[0],this.gpList[1],this.gpList[2]];for(var p=0;p<n.length;p++)n[p].x+=200;n[0].y+=50,n[1].y-=30,n[2].y-=40}for(p=0;p<n.length;p++){var u=cc.instantiate(this.gatePre);n[p].addChild(u),u.getComponent("gameGate").initInfo(p,this.curgameId,this.isSecgame,this)}i&&0==e&&this.scheduleOnce(function(){return r.autoGame()},2)},e.prototype.start=function(){},e.prototype.autoGame=function(){cc.log("\u81ea\u52a8\u8fdb\u5165 gameid = "+this.curgameId),this.mainS.openGame(this.curgameId)},e.prototype.gateClick=function(t){cc.log("\u70b9\u51fb\u8fdb\u5165 gameid = "+t),this.mainS.openGame(t)},r([u(cc.Node)],e.prototype,"gpList",void 0),r([u(cc.Prefab)],e.prototype,"gatePre",void 0),r([p],e)}(cc.Component);i.default=l,cc._RF.pop()},{"../../../scripts/GameData":void 0}]},{},["gameGate","gameMenu"]);