/*@license
Roving TabIndex Module 1.0 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Home: WhatSock.com  :  Download: https://github.com/whatsock/apex
License: MIT (https://opensource.org/licenses/MIT)

Required dependencies: AccName.js
*/
"RovingTabIndex"in $A||$A.extend({RovingTabIndex:function(t){var a,v=this;for(v.typed="",v.lastTyped="",v.nodes=t.nodes,v.container=t.container||!1,v.orientation=t.orientation&&0<=t.orientation&&t.orientation<=2?t.orientation:0,v.autoSwitch=t.autoSwitch||"off",v.index=t.startIndex&&0<=t.startIndex?t.startIndex:0,v.parent=!!(t.parent&&t.parent.nodes&&t.parent.nodes.length)&&t.parent,v.top=v;v.top.parent;)v.top=v.top.parent;return v.children=new Map,v.trigger=!(!t.trigger||1!==t.trigger.nodeType)&&t.trigger,v.autoLoop=t.autoLoop||!1,$A.loop(t,function(t,e){"on"===t.slice(0,2)&&$A.isFn(e)&&(v[t]=e)},"object"),v.isTree=!0===t.isTree,v.parent&&v.trigger&&v.parent.children.set(v.trigger,v),v.dc=v.DC=t.dc||t.DC||null,t.breakPoint&&(1<t.breakPoint.horizontal||1<t.breakPoint.vertical)?v.breakPoint={horizontal:1<t.breakPoint.horizontal?t.breakPoint.horizontal:0,vertical:1<t.breakPoint.vertical?t.breakPoint.vertical:0,horizontalStop:!!t.breakPoint.horizontalStop,verticalStop:!!t.breakPoint.verticalStop}:v.breakPoint=!1,v.activate=function(n){var t=v;return $A.isNum(n)&&(n=v.nodes[n]||null,t=$A.data(n,"RTI")||v),n=n||t.nodes[0]||null,$A.isNode(n)&&$A.isNum($A.data(n,"RTI-Index"))&&(t=$A.data(n,"RTI"),$A.isHidden(n)||(t.index=$A.data(n,"RTI-Index"),$A.loop(t.nodes,function(t,e){$A.setAttr(e,{tabindex:n===e?0:-1})},"array"))),t},v.setFocus=function(t,e,n){return(e=e||v).activate(this),n||this.focus(),e},v.focus=function(t){var e=v;return $A.isNum(t)&&(t=v.nodes[t]||null,e=$A.data(t,"RTI")||v),t=t||e.nodes[0]||null,$A.isNode(t)&&$A.isNum($A.data(t,"RTI-Index"))&&(e=$A.data(t,"RTI"),$A.isHidden(t)||(e.activate(t),t.focus())),e},v.off=function(){return $A.off(v.nodes,".RovingTabIndex"),v},v.on=function(){var k=[],t=0,e=0,b=0,S=new Map;v.off(),$A.loop(v.nodes,function(i,C){$A.data(C,"RTI",v),$A.data(C,"RTI-Index",i),$A.data(C,"AccName",$A.trim($A.isFn($A.getAccName)&&$A.getAccName(C).name||$A.getText(C)).toLowerCase()),v.breakPoint&&(k[e]||(k[e]=[]),k[e].push(C),S.set(C,{i:i,x:t,y:e}),b=e,v.breakPoint.horizontal===t?(t=0,e++):t++);function y(t){P.alt=t.altKey,P.ctrl=t.ctrlKey,P.shift=t.shiftKey}function $(t,i,o,a,r){a=a||$A.boundTo(o);var l=!1;return $A.loop(t,function(t,e){var n;(n=$A.isFn(v["on"+e])?!1===v["on"+e].call(o,i,o,v,a,r,0===v.index,v.index===v.nodes.length-1):n)&&(l=!0)},"array"),l}var P={};$A.on(C,{click:function(t,e){var n=v.children.get(C),n=n&&n.DC||e;if(v.index=i,v.setFocus.apply(v.nodes[v.index],[t,v]),v.DC&&(v.DC.loading||v.DC.closing)||n&&(n.loading||n.closing))return t.preventDefault(),t.stopPropagation(),!1;$(["Click","Open"],t,C,n,0)},touchstart:function(t,e){var n=v.children.get(C),n=n&&n.DC||e;if(v.index=i,v.setFocus.apply(v.nodes[v.index],[t,v]),v.DC&&(v.DC.loading||v.DC.closing)||n&&(n.loading||n.closing))return t.preventDefault(),t.stopPropagation(),!1;$(["TouchStart"],t,C,n,0)},keydown:function(t,e){y(t),"semi"!==v.autoSwitch&&"full"!==v.autoSwitch||("vertical"===(n=$A.getOrientation(v.nodes)).orientation?v.orientation=2:"horizontal"===n.orientation&&(v.orientation="full"===v.autoSwitch&&n.lineWrap?0:1));var n=$A.keyEvent(t),i=0,o=S.get(C),a=v.children.get(C),a=a&&a.DC||e,e=[],r=!1,l=!1;if(v.DC&&(v.DC.loading||v.DC.closing)||a&&(a.loading||a.closing))return t.preventDefault(),t.stopPropagation(),!1;if(35<=n&&n<=40){var i=37<=n&&n<=40?n:0,s=v.index,h=!1;i&&(v.arrowPressed=!0,e.push("Arrow")),37===n?P.alt||P.ctrl||P.shift?P.alt||!P.ctrl||P.shift?P.alt||P.ctrl||!P.shift?!P.alt&&P.ctrl&&P.shift&&e.push("CtrlShiftLeft"):e.push("ShiftLeft"):e.push("CtrlLeft"):e.push("Left"):38===n?P.alt||P.ctrl||P.shift?P.alt||!P.ctrl||P.shift?P.alt||P.ctrl||!P.shift?!P.alt&&P.ctrl&&P.shift&&e.push("CtrlShiftUp"):e.push("ShiftUp"):e.push("CtrlUp"):e.push("Up"):39===n?P.alt||P.ctrl||P.shift?P.alt||!P.ctrl||P.shift?P.alt||P.ctrl||!P.shift?!P.alt&&P.ctrl&&P.shift&&e.push("CtrlShiftRight"):e.push("ShiftRight"):e.push("CtrlRight"):e.push("Right"):40===n&&(P.alt||P.ctrl||P.shift?P.alt||!P.ctrl||P.shift?P.alt||P.ctrl||!P.shift?!P.alt&&P.ctrl&&P.shift&&e.push("CtrlShiftDown"):e.push("ShiftDown"):e.push("CtrlDown"):e.push("Down")),r=$(e,t,C,a,i),e=[],r&&(l=!0),P.alt||P.ctrl||P.shift||!(39===n&&2===v.orientation||40===n&&1===v.orientation)?P.alt||P.ctrl||P.shift||!(37===n&&2===v.orientation||38===n&&1===v.orientation)?37===n&&(0===v.orientation||1===v.orientation)||38===n&&(0===v.orientation||2===v.orientation)?((r=0===v.index?$(["Top"],t,C,a,i):r)&&(l=!0),v.breakPoint?!v.breakPoint.horizontal||37!==n||0!==v.orientation&&1!==v.orientation?!v.breakPoint.vertical||38!==n||0!==v.orientation&&2!==v.orientation||(0<o.y?v.index=S[k[o.y-1][o.x]].i:0===o.y&&$A.isFn(v.onBounds)&&v.onBounds.apply(C,[t,C,v,n])):0<o.x||0===o.x&&0<o.y&&!v.breakPoint.horizontalStop?v.index--:0===o.x&&0===o.y&&$A.isFn(v.onBounds)&&v.onBounds.apply(C,[t,C,v,n]):l||(v.index=0===v.index?v.autoLoop?v.nodes.length-1:s:v.index-1)):39===n&&(0===v.orientation||1===v.orientation)||40===n&&(0===v.orientation||2===v.orientation)?((r=v.index===v.nodes.length-1?$(["Bottom"],t,C,a,i):r)&&(l=!0),v.breakPoint?!v.breakPoint.horizontal||39!==n||0!==v.orientation&&1!==v.orientation?!v.breakPoint.vertical||40!==n||0!==v.orientation&&2!==v.orientation||(o.y<b?v.index=S[k[o.y+1][o.x]].i:o.y===b&&$A.isFn(v.onBounds)&&v.onBounds.apply(C,[t,C,v,n])):o.x<v.breakPoint.horizontal||o.x===v.breakPoint.horizontal&&o.y<b&&!v.breakPoint.horizontalStop?v.index++:o.x===v.breakPoint.horizontal&&o.y===b&&$A.isFn(v.onBounds)&&v.onBounds.apply(C,[t,C,v,n]):l||(v.index=v.index===v.nodes.length-1?v.autoLoop?0:s:v.index+1)):35===n?(P.alt||P.ctrl||P.shift?P.alt||!P.ctrl||P.shift?P.alt||P.ctrl||!P.shift?!P.alt&&P.ctrl&&P.shift&&e.push("CtrlShiftEnd"):e.push("ShiftEnd"):(e.push("CtrlEnd"),h=!0):e.push("End"),r=$(e,t,C,a,i),e=[],!(l=r?!0:l)&&v.breakPoint&&0<v.breakPoint.horizontal&&o.x<v.breakPoint.horizontal?v.index=S[k[o.y][v.breakPoint.horizontal]].i:l||(v.index=v.nodes.length-1)):36===n&&(P.alt||P.ctrl||P.shift?P.alt||!P.ctrl||P.shift?P.alt||P.ctrl||!P.shift?!P.alt&&P.ctrl&&P.shift&&e.push("CtrlShiftHome"):e.push("ShiftHome"):(e.push("CtrlHome"),h=!0):e.push("Home"),r=$(e,t,C,a,i),e=[],!(l=r?!0:l)&&v.breakPoint&&0<v.breakPoint.horizontal&&0<o.x?v.index=S[k[o.y][0]].i:l||(v.index=0)):(e.push("Close"),h=!0):(e.push("Open"),h=!0),l||h||v.index===s||v.setFocus.apply(v.nodes[v.index],[t,v]),t.stopPropagation(),t.preventDefault()}else if(9!==n||P.alt||P.ctrl)if(27!==n||P.alt||P.ctrl||P.shift){if(46===n)P.alt||P.ctrl||P.shift?P.alt||!P.ctrl||P.shift?P.alt||P.ctrl||!P.shift?!P.alt&&P.ctrl&&P.shift&&e.push("CtrlShiftDelete"):e.push("ShiftDelete"):e.push("CtrlDelete"):e.push("Delete");else if(33===n||34===n)P.alt||P.ctrl||P.shift?!P.alt||P.ctrl||P.shift?P.alt||!P.ctrl||P.shift?P.alt||P.ctrl||!P.shift?!P.alt&&P.ctrl&&P.shift&&e.push(33===n?"CtrlShiftPageUp":"CtrlShiftPageDown"):e.push(33===n?"ShiftPageUp":"ShiftPageDown"):e.push(33===n?"CtrlPageUp":"CtrlPageDown"):e.push(33===n?"AltPageUp":"AltPageDown"):e.push(33===n?"PageUp":"PageDown");else if(13===n||32===n)13===n?(P.alt||P.ctrl||P.shift?P.alt||!P.ctrl||P.shift?P.alt||P.ctrl||!P.shift?!P.alt&&P.ctrl&&P.shift&&e.push("CtrlShiftEnter"):e.push("ShiftEnter"):e.push("CtrlEnter"):e.push("Enter"),e.push("Open")):32===n&&(P.alt||P.ctrl||P.shift?P.alt||!P.ctrl||P.shift?P.alt||P.ctrl||!P.shift?!P.alt&&P.ctrl&&P.shift&&e.push("CtrlShiftSpace"):e.push("ShiftSpace"):e.push("CtrlSpace"):e.push("Space"));else if((48<=n&&n<=57||65<=n&&n<=90)&&!P.alt&&!P.ctrl&&!P.shift){v.keyReset&&clearTimeout(v.keyReset),v.keyReset=setTimeout(function(){v.typed=""},1e3);v.lastTyped===n?v.typed=String.fromCharCode(n):v.typed+=String.fromCharCode(n);for(var p,c,d=v.isTree?v.top.treeNodes:v.nodes,f=0,u=v.isTree?$A.data(C,"RTI-TreeIndex"):v.index,g=u+1,A=d.length-1,x=!1;g<=A;g++)if(p=d[g],c=$A.data(p,"AccName")||"",!$A.isHidden(p)&&0===c.indexOf(v.typed.toLowerCase())){x=!0,v.focus(p);break}if(!x)for(;f<u;f++)if(p=d[f],c=$A.data(p,"AccName")||"",!$A.isHidden(p)&&0===c.indexOf(v.typed.toLowerCase())){v.focus(p);break}v.lastTyped=n,t.stopPropagation(),t.preventDefault()}}else e.push("Esc"),e.push("Close");else P.shift?e.push("ShiftTab"):e.push("Tab");$(e,t,C,a,i)},keyup:function(t,e){y(t);var n=[],i=v.children.get(C),i=i&&i.DC||e,e=$A.keyEvent(t),e=37<=e&&e<=40?e:0;if(v.DC&&(v.DC.loading||v.DC.closing)||i&&(i.loading||i.closing))return t.preventDefault(),t.stopPropagation(),!1;"a"!==t.key||P.alt||!P.ctrl||P.shift?"c"!==t.key||P.alt||!P.ctrl||P.shift?"x"!==t.key||P.alt||!P.ctrl||P.shift?"v"!==t.key||P.alt||!P.ctrl||P.shift||n.push("Paste"):n.push("Cut"):n.push("Copy"):n.push("SelectAll"),$(n,t,C,i,e)},focus:function(t,e){var n=v.children.get(C),n=n&&n.DC||e;v.index=i,v.setFocus.apply(v.nodes[v.index],[t,v]),$(["Focus"],t,C,n,0)}},".RovingTabIndex"),$A.setAttr(C,{tabindex:i===v.index?0:-1})},"array")},v.isTree&&(v.top.treeNodes=[],(a=function(t,o){t.length&&$A.loop(t,function(t,e){var n=o.children.get(e),i=o.top.treeNodes.length;$A.data(e,"RTI-TreeIndex",i),o.top.treeNodes[i]=e,n&&$A.isArray(n.nodes)&&a(n.nodes,n)},"array")})(v.top.nodes,v.top)),v.on(),v}});