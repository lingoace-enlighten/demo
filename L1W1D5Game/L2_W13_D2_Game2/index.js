window.__require=function t(e,n,i){function r(c,s){if(!n[c]){if(!e[c]){var a=c.split("/");if(a=a[a.length-1],!e[a]){var u="function"==typeof __require&&__require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var f=n[c]={exports:{}};e[c][0].call(f.exports,function(t){return r(e[c][1][t]||t)},f,f.exports,t,e,n,i)}return n[c].exports}for(var o="function"==typeof __require&&__require,c=0;c<i.length;c++)r(i[c]);return r}({L2_W13_D2_Game2:[function(t,e,n){"use strict";cc._RF.push(e,"dffb6Y2rntAlb7xYDrS2R8T","L2_W13_D2_Game2");var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=t("../../../module/kit/assets/AssetsManger"),s=t("../../../module/kit/event/ListenerManager"),a=t("../../QiangYiQiang/scritpts/L2_W6_D2_GameBase"),u=cc._decorator,f=u.ccclass,p=u.property,_=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.spIcon=[],e}return r(e,t),e.prototype.start=function(){var t=this;c.default.instance.loadPrefab("res/prefab/QiangYiQiang","QiangYiQiang").then(function(e){var n=cc.instantiate(e);n.setParent(t.node),n.setPosition(cc.Vec2.ZERO),n.getComponent(a.default).SetGameData(l.getInstance),n.getComponent(a.default).spIcon=t.spIcon}),s.ListenerManager.on("GameEnd",function(){t.destroy()},this)},e.prototype.onDestroy=function(){s.ListenerManager.removeAll()},o([p({type:[cc.SpriteFrame],displayName:"icon"})],e.prototype,"spIcon",void 0),o([f],e)}(cc.Component);n.default=_;var l=function(){function t(){this.list_aiPos=[cc.v2(-439,-298),cc.v2(-305,-310),cc.v2(-159,-304),cc.v2(-60,-310),cc.v2(68,-314),cc.v2(180,-291)],this.v2_happerPos=cc.v2(-551,-257),this.num_aiWith=54,this.num_tigoWith=223,this.num_maxLevel=3,this.list_topic=["police officer","waiter","chef"],this.list_audios=["police officer","waiter","chef"],this.list_select=[[2,1,0],[0,2,1],[1,2,0]],this.list_right=[2,2,1],this.list_aiIndex=[[1,1,4],[1,1,2],[0,2,0],[1,0,1]]}return Object.defineProperty(t,"getInstance",{get:function(){return this.instance||(this.instance=new t),this.instance},enumerable:!1,configurable:!0}),t}();cc._RF.pop()},{"../../../module/kit/assets/AssetsManger":void 0,"../../../module/kit/event/ListenerManager":void 0,"../../QiangYiQiang/scritpts/L2_W6_D2_GameBase":void 0}]},{},["L2_W13_D2_Game2"]);