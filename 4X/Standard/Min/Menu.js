/*@license
ARIA Menu Module 3.3 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Home: WhatSock.com  :  Download: https://github.com/whatsock/apex
License: MIT (https://opensource.org/licenses/MIT)

Required dependencies: RovingTabIndex.js
  */
!function(){var t;"setMenu"in $A||($A.dcMenus=[],$A.addWidgetProfile("Menu",{configure:function(e){return{horizontalHelpTip:"To move through items, press left or right arrow.",verticalHelpTip:"To move through items, press up or down arrow.",toggleHide:!0,forceFocus:!0,forceFocusWithin:!0,returnFocus:!0,preload:!0,preloadImages:!0,preloadCSS:!0,className:"menu",escToClose:!0,click:function(e,t){e.stopPropagation()},storeData:!0}},role:function(e){return{role:"menu","aria-orientation":$A.getOrientation(e.RTI.nodes).orientation}},beforeRender:function(e){if(e.isTopMenu)for(var t=0;t<$A.dcMenus.length;t++){var n=$A.dcMenus[t];n&&e!==n&&(n.loaded?n.bypass():n.isAnimating&&n.loading&&window.Velocity&&(n.abortLoad=!0,window.Velocity.animate(n.wrapper,"finish"),n.css(n.style)))}},afterRender:function(e){$A.isTouch||setTimeout(function(){$A.announce(e["horizontal"===e.getAttr("aria-orientation")?"horizontalHelpTip":"verticalHelpTip"])},1)},beforeRemove:function(e){$A.loop(e.RTI.children,function(e,t){t.DC.remove()},"map")}}),t=$A.isIE(),$A.extend({setMenu:function(e,u){if(this._4X&&(u=e,e=this._X),!(e=$A.isPlainObject(e)?(u=e).trigger||null:e))return null;u=u||{};var a=null,r=$A.extend(!0,{parent:"ul",child:"a",parse:function(e){var n;return t?(n=[],$A.query(e.children,function(e,t){t=$A.first(t,function(e){if(e.nodeName.toLowerCase()===r.child)return!0});$A.isNode(t)&&n.push(t)}),n):e.querySelectorAll(":scope > * > "+r.child)}},u.tag||{}),c=function(n,e,t,o,r){var i;return t?(t="menuitemradio"===$A.getAttr(n,"role"),i=0,"true"===e?i=1:t||"mixed"!==e?e="false":i=2,$A.data(n,"check",i),o&&(t&&$A.isArray(r)&&$A.loop(r,function(e,t){$A.hasAttr(t,"aria-checked")&&t!==n&&$A.setAttr(t,"aria-checked","false")},"array"),$A.setAttr(n,"aria-checked",e)),i):(o=$A.data(n,"check"),!!$A.isNum(o)&&o)},s=function(e,t,n,o){if($A.isNode(e)){var i,a=n||$A.getAttr(e,"data-menu")||$A.next(e,function(e){if(e.nodeName.toLowerCase()===r.parent)return!0}),a=$A.morph(a);if($A.isNode(a))return $A.setAttr(e,"aria-haspopup","true"),n=r.parse(a),$A.svgFix(a),i=$A.toDC($A.extend({trigger:e,content:a,on:"openmenu",widgetType:"Menu",isTopMenu:o,autoCloseSameWidget:!1,toggleHide:!0,getState:c},u)),t&&i.map({parent:t.DC}),i.RTI=new $A.RovingTabIndex($A.extend({DC:i,parent:t,trigger:e,nodes:n,startIndex:0,orientation:2,autoSwitch:u.autoSwitch||"semi",autoLoop:!0,onOpen:function(e,o,r,t,n){var i=$A.isDisabled(this),a=c(o);i&&!n?$A.isDC(r.DC)&&r.DC.top.remove():$A.isDC(t)?(t.render(),e.preventDefault()):n||$A.isFn(u.onActivate)&&u.onActivate.apply(this,[e,o,r,t||$A.boundTo(o),a,function(e){var t=$A.getAttr(o,"role"),n=-1!==["menuitemradio"].indexOf(t),t=-1!==["menuitemcheckbox"].indexOf(t);(n||t)&&c(o,e,!0,!0,n?r.nodes:null)},"menuitemradio"===$A.getAttr(o,"role")])},onSpace:function(e,t,n,o){$A.isDC(o)&&o.render(),e.preventDefault()},onEnter:function(e,t,n,o){$A.isDC(o)&&o.render(),e.preventDefault()},onClose:function(e,t,n,o,r){$A.isDC(n.DC)&&n.parent&&n.DC.remove(function(){setTimeout(function(){$A.announce(n.parent.DC["horizontal"===n.parent.DC.getAttr("aria-orientation")?"horizontalHelpTip":"verticalHelpTip"])},1)}),e.preventDefault()},onEsc:function(e,t,n,o){$A.isDC(n.DC)&&n.DC.remove(),e.preventDefault()},onShiftTab:function(e,t,n,o){$A.isDC(n.DC)&&n.DC.top.remove(),e.preventDefault()},onTab:function(e,t,n,o){$A.isDC(n.DC)&&n.DC.top.remove(),e.preventDefault()}},u.extendRTI||{})),$A.loop(n,function(e,t){s(t,i.RTI);var n,o=c(t,$A.getAttr(t,"data-radio"),$A.hasAttr(t,"data-radio")),r=c(t,$A.getAttr(t,"data-check"),$A.hasAttr(t,"data-check")),u=$A.isFn(t.querySelector)&&t.querySelector("input")||!1;$A.isNum(o)?(u&&u.checked&&(o=1),$A.setAttr(t,{role:"menuitemradio","aria-checked":o?"true":"false"})):$A.isNum(r)?(n="false",1===(r=u&&u.checked?1:r)?n="true":2===r&&(n="mixed"),$A.setAttr(t,{role:"menuitemcheckbox","aria-checked":n})):$A.setAttr(t,"role","menuitem"),!1===o&&!1===r||$A(t).on("attributeChange",function(e,t,n,o,r,i,a){$A.isNode(u)&&(t=c(t,o,!0),u.checked=!!t)},{attributeFilter:["aria-checked"]}),$A.closest(t,function(e){if(e===a)return!0;$A.setAttr(e,"role","presentation")})},"array"),$A.updateDisabled(n),i}},l=null;return $A.query(e,u.context||document,function(e,n){function t(e){var t;l=s(n,null,e,!0),$A.isDC(l.top)&&-1===$A.inArray(l.top,$A.dcMenus)&&$A.dcMenus.push(l.top),$A.on(window.document,"click.closemenus",function(){l.top.remove()}),u.rightClick||(u.leftClick=!0),u.leftClick&&(t={keydown:function(e,t){var n=$A.keyEvent(e);40!==n&&13!==n&&32!==n||(t.render(),e.stopPropagation(),e.preventDefault())},click:function(e,t){t.render(),e.stopPropagation(),e.preventDefault()}}),u.rightClick&&(t={contextmenu:function(e,t){e.preventDefault()},mouseup:function(e,t){2===($A.isNum(e.which)?e.which<2?1:2===e.which?3:2:e.button<2?1:4===e.button?3:2)&&(t.render(),e.preventDefault())},keydown:function(e,t){var n=$A.keyEvent(e);(93===n||e.shiftKey&&121===n)&&(t.render(),e.preventDefault())}}),$A.on(n,t)}var o=u.fetch&&u.fetch.url||$A.getAttr(n,"data-menu"),r=u.fetch&&u.fetch.data&&u.fetch.data.selector||$A.getSelectorFromURI(o),i=!(!r||!$A.isPath(o));u.fetch=null,i?(u.toggleHide=!1,i=$A.toNode(),$A.load(o,i,{selector:r},function(e){t(a=e)})):t(a)}),$A._XR.call(this,l)}}))}();