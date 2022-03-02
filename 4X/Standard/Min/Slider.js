/*@license
ARIA Slider Module 1.2 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Home: WhatSock.com  :  Download: https://github.com/whatsock/apex
License: MIT (https://opensource.org/licenses/MIT)

Required dependencies: CurrentDevice.js, Dragdealer.js
*/
"Slider"in $A||$A.extend({Slider:function(a,r){if($A.isPlainObject(a)&&(a=(r=a).slideBar||null),!a)return null;a=r.slideBar=$A.morph(a);var t=$A.first(a);if(!t)return null;function n(e){return r.max-($A.isNum(e)?e:r.current)+1}var i=this;function u(e,a){r.valueNow=Math.round(a),$A.setAttr(t,{"aria-valuenow":r.valueNow,"aria-valuetext":r.valueChange(r.valueNow,r.valueMin,r.valueMax,i)})}i.getPercent=function(){return Math.round(r.valueNow/r.valueMax*100)+"%"},i.computeSteps=function(){if(r.min=1,r.valueMin<=0){var e=Math.abs(r.valueMin)+1;r.max=e+r.valueMax}else 1<r.valueMin?r.max=r.valueMax-r.valueMin+1:r.max=r.valueMax;r.current=i.getCurrent()},i.getValue=function(e){return Math.round(r.valueMin+((r.valueReverse?n($A.isNum(e)?e:r.current):$A.isNum(e)?e:r.current)-1))},i.getCurrent=function(){var e=1;if(r.valueMin<=0){var a=Math.abs(r.valueMin)+1;e=r.valueNow<0?Math.abs(r.valueMin)-Math.abs(r.valueNow)+1:a+r.valueNow}else 1<r.valueMin?r.valueNow===r.valueMin?e=1:r.valueNow>r.valueMin&&(e=r.valueNow-r.valueMin+1):e=r.min;return r.valueReverse?n(e):e},i.refreshValues=function(){var e=r.orientation(a);$A.setAttr(t,{"aria-orientation":e,"aria-valuemin":r.valueMin,"aria-valuemax":r.valueMax,"aria-valuenow":r.valueNow,"aria-valuetext":r.valueChange(r.valueNow,r.valueMin,r.valueMax,i)})},r=$A.extend(!0,{label:null,description:null,slideBar:null,valueMin:0,valueMax:100,valueNow:0,valueReverse:!1,decreaseBtn:".slider.decrease.button",decreaseBtnLabel:"Decrease",increaseBtn:".slider.increase.button",increaseBtnLabel:"Increase",orientation:function(e){var a=$A.width(e)>$A.height(e)?"horizontal":"vertical";return r.isVertical="vertical"==a,a},dragStart:function(e,a,t,n,r,i){},dragging:function(e,a,t,n,r,i){},dragEnd:function(e,a,t,n,r,i){},valueChange:function(e,a,t,n){return n.getPercent()},dragdealer:{disabled:!1,snap:!1,slide:!1,loose:!1,handleClass:"handle",css3:!0}},r||{}),$A.setAttr(t,{role:"slider","aria-description":$A.isStr(r.description)?r.description:" ",tabindex:0}),$A.isStr(r.label)&&$A.setAttr(t,"aria-label",r.label),i.computeSteps(),i.refreshValues();var l=!1,o=new Dragdealer(a,$A.extend({horizontal:!r.isVertical,vertical:r.isVertical,x:0,y:0,steps:r.max,top:0,bottom:0,left:0,right:0,callback:function(e,a){var t=this.getStep()[r.isVertical?1:0],n=i.getValue(t);u(0,n)},dragStartCallback:function(e,a){this.options.dragging=!0,r.dragStart.call(i,e,a,i.getValue(this.getStep()[r.isVertical?1:0]),r.valueMin,r.valueMax,i)},dragStopCallback:function(e,a){this.options.dragging=!1;var t=r.current=this.getStep()[r.isVertical?1:0],n=i.getValue(t);u(0,n),r.dragEnd.call(i,e,a,n,r.valueMin,r.valueMax,i)},animationCallback:function(e,a){if(l&&this.options.dragging){var t=this.getStep()[r.isVertical?1:0],n=i.getValue(t);t!==r.current&&(r.current=t),u(0,n),r.dragging.call(i,e,a,n,r.valueMin,r.valueMax,i)}}},r.dragdealer||{}));return l=!0,i.dd=o,i.disable=function(e){o[e?"disable":"enable"](),$A.setAttr(t,{"aria-disabled":e?"true":"false",tabindex:e?-1:0})},i.setMin=function(e){$A.isNum(e)&&(r.valueMin=e),i.computeSteps(),i.refreshValues()},i.setMax=function(e){$A.isNum(e)&&(r.valueMax=e),i.computeSteps(),i.refreshValues()},i.setValue=function(e){$A.isNum(e)&&(r.valueNow=Math.round(e)),r.current=i.getCurrent(),r.isVertical?o.setStep(1,r.current):o.setStep(r.current,1)},i.setCurrent=function(e){$A.isNum(e)&&(r.current=Math.round(e)),r.valueNow=i.getValue(),r.isVertical?o.setStep(1,r.current):o.setStep(r.current,1)},i.setValueChange=function(e){$A.isFn(e)&&(r.valueChange=e),i.refreshValues()},i.back=function(e){r.current>r.min&&i.setCurrent(r.current-1)},i.next=function(e){r.current<r.max&&i.setCurrent(r.current+1)},i.home=function(e){i.setCurrent(r.min)},i.end=function(e){i.setCurrent(r.max)},i.pageDown=function(e){var a=r.current-Math.round(.1*r.max);r.current=a<r.min?r.min:a,i.setCurrent(r.current)},i.pageUp=function(e){var a=r.current+Math.round(.1*r.max);r.current=a>r.max?r.max:a,i.setCurrent(r.current)},$A.on(t,{keydown:function(e){var a=$A.keyEvent(e);(37<=a&&a<=40||33<=a&&a<=36)&&(o.options.kb=!0,r.isVertical?37===a||38===a?i.back(!0):39===a||40===a?i.next(!0):35===a?i.end(!0):36===a?i.home(!0):34===a?i.pageUp(!0):33===a&&i.pageDown(!0):37===a||40===a?i.back(!0):38===a||39===a?i.next(!0):35===a?i.end(!0):36===a?i.home(!0):33===a?i.pageUp(!0):34===a&&i.pageDown(!0),e.stopPropagation(),e.preventDefault())},keyup:function(e){},touchstart:function(e){o.options.touched=!0}},".ariaslider"),!$A.isTouch&&"mobile"!==window.device.type&&"tablet"!==window.device.type||($A(r.slideBar.parentNode.querySelector(r.decreaseBtn)).on("click",function(e){i.back(),e.stopPropagation(),e.preventDefault()},".ariaslider").setAttr({role:"button","aria-label":r.decreaseBtnLabel,"aria-description":r.label}),$A(r.slideBar.parentNode.querySelector(r.increaseBtn)).on("click",function(e){i.next(),e.stopPropagation(),e.preventDefault()},".ariaslider").setAttr({role:"button","aria-label":r.increaseBtnLabel,"aria-description":r.label})),i.setCurrent(),!o.disabled&&"true"!==$A.getAttr(t,"aria-disabled")||i.disable(!0),i}});