/*!
ARIA Tab Module 2.0 for Apex 4X
Copyright 2021 Bryan Garaventa (WhatSock.com)
https://github.com/whatsock/apex
Apex 4X is distributed under the terms of the Open Source Initiative OSI - MIT License.
*/
"setTab"in $A||$A.import("RovingTabIndex",{name:"TabModule",props:props,once:!0,call:function(e){$A.addWidgetProfile("Tab",{configure:function(e){return{exposeBounds:!0,isTab:!0,ariaControls:!0,ariaLabelledby:!0,isToggle:!1,allowMultiple:!1,isFocusable:!0,returnFocus:!1,on:"activatetab",click:function(e,t){e.stopPropagation()},afterRender:function(e,t){e.trackPage&&$A.setPage(e.id)}}},role:function(e){return{role:"tabpanel"}},duringRender:function(e,t){$A.setAttr(e.triggerNode,{"aria-expanded":"true","aria-selected":"true"})},afterRender:function(e,t){$A.setAttr(e.triggerNode,{"aria-describedby":e.containerId})},afterRemove:function(e,t){$A.setAttr(e.triggerNode,{"aria-expanded":"false","aria-selected":"false"}),$A.remAttr(e.triggerNode,"aria-describedby")}}),$A.extend({setTab:function(e,i){if(this._4X&&(i=e,e=this._X),$A.isPlainObject(e)&&(e=(i=e).trigger||i.content||null),!e)return null;var o=null;$A.isArray(e)?o=e:$A.isStr(e)&&(o=(i.context||document).querySelectorAll(e));var s=i.container&&$A.morph(i.container)||$A.closest(o[0],function(e){if("tablist"===$A.getAttr(e,"role"))return!0});$A.isNode(s)||function(){var t=[],n=[];$A.closest(o[0],function(e){if($A.isNode(e)&&t.push(e),e===document.body)return!0}),$A.closest(o[o.length-1],function(e){if($A.isNode(e)&&n.push(e),e===document.body)return!0}),t=t.reverse(),n=n.reverse();for(var e=null,r=0;r<t.length;r++)if(t[r]===n[r])e=t[r];else if(t[r]!==n[r])break;s=e}(),$A.setAttr(s,"role","tablist");var l=[],d=0;$A.loop(o,function(e,t){$A.svgFix(t);var n=[];$A.isNode(s)&&$A.closest(t,function(e){if(e===s)return!0;n.push(e)}),s!==document.body&&$A.isNode(s)&&n.length&&$A.setAttr(n,"role","presentation"),t.id||(t.id=$A.genId()),$A.setAttr(t,{role:"tab","aria-expanded":"false","aria-selected":"false"});var r=$A.get($A.getAttr(t,"root")),o=$A.hasAttr(t,"active"),a=$A.toDC(t,$A.extend({widgetType:"Tab",root:r,append:!0,autoRender:o},i||{}));l.push(a),o&&(d=e)},"array"),$A.map({siblings:l});var t=new $A.RovingTabIndex($A.extend({nodes:o,startIndex:d,orientation:1,autoSwitch:i.autoSwitch||"full",autoLoop:!0,onClick:function(e,t,n,r){r.render(),e.preventDefault()},onSpace:function(e,t,n,r){n.onClick.apply(t,arguments),e.preventDefault()},onEnter:function(e,t,n,r){n.onClick.apply(t,arguments),e.preventDefault()}},i.extendRTI||{}));return $A.updateDisabled(t.nodes),1===l.length?l[0]:l}})}});