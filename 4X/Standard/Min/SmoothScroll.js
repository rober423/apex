/*@license
ARIA Smooth Scroll and Skip Link Module 1.0 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Home: WhatSock.com  :  Download: https://github.com/whatsock/apex
License: MIT (https://opensource.org/licenses/MIT)

Required dependencies: Animate.js
*/
"scrollTo"in $A||$A.extend({isScrolling:!1,scrollTo:function(e,n,t){return this._4X&&(t=n,n=e,e=this._X),$A.isFn(n)&&(t=n,n=null),$A.isNode(e)||(e=$A.morph(e)),$A.isNode(e)&&($A.isScrolling=!0,window.Velocity(e,"scroll",$A.extend({duration:700,easing:"ease-in",complete:function(){$A.isScrolling=!1,$A.isFn(t)&&t.call(e,e,t.target)}},n||{}))),$A._XR.call(this,e)},moveTo:function(e,n,t){return this._4X&&(t=n,n=e,e=this._X),e=$A.morph(e),$A.isNode(e)&&$A.scrollTo(e,n,t||function(e){$A.focus(e)}),$A._XR.call(this,e)},skipTo:function(e,n,t,i){return this._4X&&(i=t,t=n,n=e,e=this._X),e=$A.morph(e),n=$A.morph(n),$A.isNode(e)&&$A.isNode(n)&&(e=$A.setSkipLink(e,$A.extend({target:n,skipReturn:!0,callback:i},t||{}))),$A._XR.call(this,e)},setSkipLink:function(e,i,o,n){this._4X&&(o=i,i=e,e=this._X);var s=(i=i||{}).callback||null,A=i.isOffScreen||!1,$=i.style||{},c=(o=i.context||o,!(!n&&!i.skipReturn));return $A.isNode(o,null,document)||(o=document),$A.query(e,o,function(e,n){var t=i.target||$A.getAttr(n,"href");$A.isSelector(t)&&(t=o.querySelector(t)),$A.isNode(t)&&!$A.data(n,"_isBoundFn")&&($A.data(n,"_isBoundFn",!0),$A.bindObjects(n,t),$A.on(n,{click:function(e){$A.bindObjects(n,t),$A.isFn(s)&&(s.target=t),$A.moveTo(t,i.override||{},s),e.preventDefault()}}),A&&($A.setOffScreen(n),$A.on(n,{focus:function(e){$A.css(n,$A.extend({},$A.sraCSSClear,$||{}))},blur:function(e){$A.setOffScreen(n)}})),!c&&$A.isFocusable(t)&&$A.on(t,{click:function(e){$A.isFn(s)&&(s.target=$A.boundTo(t)),$A.moveTo($A.boundTo(t),i.override||{},s),e.preventDefault()}}))}),$A._XR.call(this,e)}});