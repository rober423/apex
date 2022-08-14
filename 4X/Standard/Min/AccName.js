/*@license
CalcNames: The AccName Computation Prototype, compute the Name and Description property values for a DOM node
Returns an object with 'name' and 'desc' properties.
Functionality mirrors the steps within the W3C Accessible Name and Description computation algorithm.
https://w3c.github.io/accname/
Author: Bryan Garaventa
https://github.com/whatsock/w3c-alternative-text-computation
Distributed under the terms of the Open Source Initiative OSI - MIT License
*/
!function(){var i=window.AccNamePrototypeNameSpace||window;i&&"string"==typeof i&&i.length&&(window[i]={},i=window[i]),i.getAccNameVersion="2.60",i.getAccName=i.calcNames=function(e,t,ee,r){var te=(r=r||{}).document||document,n={name:"",desc:"",error:""},u=!1,re=!1;try{if(!e||1!==e.nodeType)return n;function i(e,t){var r=t;if(-1!==r.indexOf("attr("))for(var n=r.match(/attr\((.|\n|\r\n)*?\)/g),i=0;i<n.length;i++){var a=n[i].slice(5,-1);a=e.getAttribute(a)||"",r=r.replace(n[i],a)}return r=r.replace(/url\((.*?)\)\s+\/|url\((.*?)\)/g,"").replace(/^\s+|\s+$/g,"").replace(/\"/g,"")}var ne=e,a=Se(e.getAttribute("role")||""),ie={name:[],desc:[]},ae=[],oe=function(z,F,J,K,X,Y,Z){(Z=Z||{}).tag=Z.tag||!1,Z.role=Z.role||!1,Z.go=Z.go||!1;var e={name:"",title:""},_=!1,l=function(e,t){for(var r=[];e;){if((e=e.id&&Y[e.id]&&Y[e.id].node&&-1===r.indexOf(e)?(r.push(e),Y[e.id].node):e.parentNode)&&e===t)return!0;if(!e||e===Y.top||e===te.body)return!1}return!1},t={before:"",after:""};Z.tag||Z.role||-1!==ie[Y.computingDesc?"desc":"name"].indexOf(z)||(t=Ne(z,null),ee&&(-1===t.before.indexOf(" [ARIA] ")&&-1===t.before.indexOf(" aria-")&&-1===t.before.indexOf(" accName: ")||(t.before=""),-1===t.after.indexOf(" [ARIA] ")&&-1===t.after.indexOf(" aria-")&&-1===t.after.indexOf(" accDescription: ")||(t.after="")));var d=function(e,t,r){var n={name:"",title:""};if(!e)return n;var i=!(!e||1!==e.nodeType||!g(e)),a=e,o=t(e)||{};if(o.name&&o.name.length&&(n.name+=o.name),!o.skip&&!function(e,t){if(!t||!e||1!==t.nodeType||1!==e.nodeType)return!1;function r(e,t){return n&&0<=t.roles.indexOf(n)||!n&&0<=t.tags.indexOf(i)}var n=de(e),i=e.nodeName.toLowerCase();return r(0,c)?e!==t||e.id&&Y[e.id]&&Y[e.id].node?!(l(e,Y.top)&&"select"!==e.nodeName.toLowerCase()||r(0,s)):!ue(e):!(!r(0,f)&&(e!==ne||r(0,s))||!(n||-1===["section"].indexOf(i)||e.getAttribute("aria-labelledby")||e.getAttribute("aria-label"))||Z.go)}(e,Y.top))for(Z.go&&(Z.go=!1),e=e.firstChild;e;)n.name+=d(e,t,r).name,e=e.nextSibling;return n.name+=o.owns||"",ne===a&&r===a&&!Se(n.name)&&Se(o.title)?n.name=we(o.title):ne===a&&r===a&&Se(o.title)&&(n.title=we(o.title)),ne===a&&r===a&&Se(o.desc)&&(n.title=we(o.desc)),ne===a&&r===a&&Se(o.placeholder)&&!Se(n.name)?(n.name=we(o.placeholder),u=!0):ne===a&&r===a&&Se(o.placeholder)&&!Se(n.title)&&(n.title=we(o.placeholder)),(i||o.isWidget)&&(n.name=we(n.name)),n};return e=d(z,function(e){var t=0,r=null,n=[],i=[],a={name:"",title:"",owns:"",skip:!1},o=!!(e&&1===e.nodeType&&K&&K.length&&-1!==K.indexOf(e)&&e===ne&&e!==z),l=!1;if((J||!e||ye(e,Y.top))&&!X&&!o)return a;if(Z.tag||Z.role||-1!==ie[Y.computingDesc?"desc":"name"].indexOf(e))return a;ie[Y.computingDesc?"desc":"name"].push(e);var d="",u="",s={before:"",after:""},f=z===e?e:e.parentNode;if(Z.tag||Z.role||-1!==ie[Y.computingDesc?"desc":"name"].indexOf(f)||(ie[Y.computingDesc?"desc":"name"].push(f),s=Ne(f,z),ee&&(-1===s.before.indexOf(" [ARIA] ")&&-1===s.before.indexOf(" aria-")&&-1===s.before.indexOf(" accName: ")||(s.before=""),-1===s.after.indexOf(" [ARIA] ")&&-1===s.after.indexOf(" aria-")&&-1===s.after.indexOf(" accDescription: ")||(s.after=""))),1===e.nodeType){var c=e.nodeName.toLowerCase(),g=de(e),p=!Z.tag&&!Z.role&&e.getAttribute("aria-labelledby")||"",m=!Z.tag&&!Z.role&&e.getAttribute("aria-describedby")||"",b=!Z.tag&&!Z.role&&e.getAttribute("aria-description"),h=!Z.tag&&!Z.role&&e.getAttribute("aria-label")||"",x=!Z.tag&&!Z.role&&e.getAttribute("title")||"";if(e===ne&&!g&&-1!==se.indexOf(c))return a;if(e===ne&&(-1!==fe.indexOf(g)||!g&&-1!==ce.indexOf(c)))return a;var v=-1!==ge.indexOf(c),y=-1!==["input"].indexOf(c),A=-1!==pe.indexOf(g),O=-1!==me.indexOf(g),w=-1!==be.indexOf(g),N=A||O||w||"combobox"===g,C=(N||-1!==he.indexOf(g))&&"link"!==g;a.isWidget=v||C;var k=!1,S=!1,L=e.getAttribute("aria-owns")||"",T=!(Z.tag||Z.role||o||!(e!==z&&(v||N)||e.id&&Y[e.id]&&Y[e.id].target&&Y[e.id].target===e));if(!F&&!Z.tag&&!Z.role&&p){for(n=p.split(/\s+/),i=[],t=0;t<n.length;t++)r=te.getElementById(n[t]),i.push(oe(r,!0,J,[e],r===z,{ref:Y,top:r}).name);d=Se(i.join(" ")),Se(d)&&(_=l=k=!0,a.skip=!0)}if(!F&&e===z&&!Z.tag&&!Z.role&&(m||b)){if(m){var V;for(n=m.split(/\s+/),i=[],t=0;t<n.length;t++)r=te.getElementById(n[t]),i.push(oe(r,!0,!1,[e],!1,{ref:Y,top:r,computingDesc:!0}).name);V=Se(i.join(" "))}else V=Se(b);Se(V)&&(a.desc=V,S=!0)}Z.tag||Z.role||k||!Se(h)||T||Se(d=h)&&(l=k=!0,e===z&&(_=J=!0));var D=!Z.tag&&!Z.role&&!k&&"iframe"!==c&&g&&-1!==xe.indexOf(g)&&!ue(e)&&!ve(e);if(!T){if(!Z.tag&&!Z.role&&!k&&e===z&&v){var j=te.querySelectorAll("label"),q="",I=Ce(e,"label")||!1;for(t=0;t<j.length;t++)(j[t]!==I||"string"==typeof I.getAttribute("for"))&&j[t].getAttribute("for")!==e.id||Ae(j[t],te.body,!0)||(q+=we(oe(j[t],!0,J,[e],!1,{ref:Y,top:j[t]}).name));Se(d=q)&&(k=!0)}var P=!Z.tag&&!Z.role&&y&&(e.getAttribute("type")||"").toLowerCase()||!1,R=!Z.tag&&!Z.role&&P&&Se(e.getAttribute("value"))||!1,E=D&&"img"===c?"":Se(e.alt||e.getAttribute("alt"));if(Z.tag||Z.role||k||D||"img"!==g&&"img"!==c&&"image"!==P||!E&&!Se(x)||(d=Se(E)||Se(x),Se(d)&&(k=!0)),Z.tag||Z.role||k||D||"area"!==c||!E||(d=Se(E),Se(d)&&(k=!0)),"optgroup"===c&&(Z.tag||Z.role||k||D||!e.getAttribute("label")||(d=Se(e.getAttribute("label")),Se(d)&&(k=!0)),a.skip=!0),!Z.tag&&!Z.role&&!k&&e===z&&P&&-1!==["button","submit","reset"].indexOf(P)){if(R)d=R;else switch(P){case"submit":d="submit";break;case"reset":d="reset";break;default:d=""}Se(d)&&(k=!0)}if(!Z.tag&&!Z.role&&k&&e===z&&P&&-1!==["button","submit","reset"].indexOf(P)&&R&&R!==d&&!a.desc&&(a.desc=R,S=!0),Z.tag||Z.role||k||e!==z||!P||"image"!==P||(d="Submit Query",re=k=!0),!(Z.tag||Z.role||k||e!==ne||"group"!==g&&"radiogroup"!==g&&(g||"fieldset"!==c))){var B=le(e,["legend"],["legend"])||!1;B&&(d=Se(oe(B,F,!1,[],!1,{ref:Y,top:B}).name)),Se(d)&&(k=!0),J=!0}if(!(Z.tag||Z.role||k||e!==ne||"table"!==g&&(g||"table"!==c))&&((B=le(e,["caption"],["caption"])||!1)&&(d=Se(oe(B,F,!1,[],!1,{ref:Y,top:B}).name)),Se(d)&&(k=!0),J=!0),!Z.tag&&!Z.role&&"svg"===c){var H=e.querySelector("title")||!1,$=e===ne&&e.querySelector("desc")||!1;if(!k&&H&&(d=Se(oe(H,!0,!1,[],!1,{ref:Y,top:H}).name)),!S&&$){var M=Se(oe($,!0,!1,[],!1,{ref:Y,top:$}).name);Se(M)&&(a.desc=M)}a.skip=!0}}Z.tag||Z.role||!T||K&&K.length&&-1!==K.indexOf(e)||(A?d=Oe(g,e,!0):O||"combobox"===g&&v?d=Oe(g,e,!1,!0):w?d=Oe(g,e,!1,!1,!0):!v||-1===["input","textarea"].indexOf(c)||C&&!O?!v||"select"!==c||C&&"combobox"!==g||(d=Oe(g,e,!1,!1,!0,!0)):d=Oe(g,e,!1,!1,!1,!0),d=Se(d)),Z.tag||Z.role||D||!Se(x)||d&&" "===b||(a.title=Se(x));var W=v&&Se(e.getAttribute("type")||"").toLowerCase();W=W||"text";var G=!Z.tag&&!Z.role&&e===ne&&e===z&&(O||v&&("textarea"===c||"input"===c&&-1!==["password","search","tel","text","url","email"].indexOf(W)))&&Se(e.getAttribute("placeholder")||e.getAttribute("aria-placeholder"));G&&(a.placeholder=G);var Q=Z.role&&Z.role===g||!g&&Z.tag&&Z.tag===c;if(Q&&(d=Se(oe(e,F,!1,[],!1,{ref:Y,top:e}).name),Se(d)&&(J=!0)),!Q&&L&&-1===["input","img","progress"].indexOf(c)){for(n=L.split(/\s+/),i=[],t=0;t<n.length;t++)if((r=te.getElementById(n[t]))&&-1===ae.indexOf(n[t])){ae.push(n[t]);var U={ref:Y,top:Y.top};U[n[t]]={refNode:z,node:e,target:r},Ae(r,te.body,!0)||i.push(oe(r,!0,J,[],!1,U).name)}u=i.join("")}}else Z.tag||Z.role||3!==e.nodeType||(d=e.data);return l||(d=s.before+d.replace(/\s+/g," ")+s.after),d.length&&!ke(e,Y.top,Y)&&(a.name=d),a.owns=u,a},z),_||(e.name=t.before+e.name.replace(/\s+/g," ")+t.after),e},le=function(e,t,r,n){for(e=e?e.firstChild:null;e;){var i=de(e)||!1;if(1===e.nodeType&&(!t&&!r||i&&r&&-1!==r.indexOf(i)||!i&&t&&-1!==t.indexOf(e.nodeName.toLowerCase())))return e;if(!n&&1===e.nodeType&&(t||r))return null;e=e.nextSibling}return e},de=function(e){var t=e&&e.getAttribute?(e.getAttribute("role")||"").toLowerCase():"";if(!Se(t))return"";function r(e){return 0<Se(t).length&&0<=e.roles.indexOf(t)}for(var n=t.split(/\s+/),i=0;i<n.length;i++)if(t=n[i],r(s)||r(f)||r(c)||r(o)||-1!==xe.indexOf(t))return t;return""},ue=function(e){var t=e.nodeName.toLowerCase();return!!e.getAttribute("tabindex")||(!("a"!==t||!e.getAttribute("href"))||-1!==["button","input","select","textarea"].indexOf(t)&&"hidden"!==(e.getAttribute("type")||"").toLowerCase())},s={roles:["button","checkbox","link","option","radio","switch","tab","treeitem","menuitem","menuitemcheckbox","menuitemradio","row","cell","gridcell","columnheader","rowheader","tooltip","heading"],tags:["a","button","summary","input","h1","h2","h3","h4","h5","h6","menuitem","option","tr","td","th"]},f={roles:["application","alert","log","marquee","timer","alertdialog","dialog","banner","complementary","form","main","navigation","region","search","article","document","feed","figure","img","math","toolbar","menu","menubar","grid","listbox","radiogroup","textbox","searchbox","spinbutton","scrollbar","slider","tablist","tabpanel","tree","treegrid","separator","rowgroup","group"],tags:["article","aside","body","select","datalist","optgroup","dialog","figure","footer","form","header","hr","iframe","img","textarea","input","main","math","menu","nav","section","thead","tbody","tfoot","fieldset"]},c={roles:["term","definition","directory","list","note","status","table","contentinfo"],tags:["dl","ul","ol","dd","details","output","table"]},o={roles:["legend","caption","code","deletion","emphasis","generic","insertion","paragraph","strong","subscript","superscript"],tags:["legend","caption","figcaption","code","del","em","div","span","ins","p","strong","sub","sup"]},se=["div","span"],fe=["caption","code","deletion","emphasis","generic","insertion","none","paragraph","presentation","strong","subscript","superscript"],ce=["caption","figcaption","code","del","em","div","span","ins","p","strong","sub","sup"],ge=["button","input","select","textarea"],pe=["scrollbar","slider","spinbutton"],me=["searchbox","textbox"],be=["grid","listbox","tablist","tree","treegrid"],he=["button","checkbox","link","switch","option","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","radio","tab","treeitem","gridcell"],xe=["presentation","none"],ve=function(e){for(var t=["labelledby","label","describedby","busy","controls","current","details","disabled","dropeffect","errormessage","flowto","grabbed","haspopup","invalid","keyshortcuts","live","owns","roledescription"],r=0;r<t.length;r++){if(Se(e.getAttribute("aria-"+t[r])))return!0}return!1},ye=r.isHidden||function(e,r){return function(e){if(!e||1!==e.nodeType||e===r)return!1;if("true"===e.getAttribute("aria-hidden"))return!0;if(e.getAttribute("hidden"))return!0;var t=l(e);return"none"===t.display||"hidden"===t.visibility}(e)},Ae=function(e,t,r,n){for(;e&&e!==t;){if(!n&&1===e.nodeType&&ye(e,t))return!0;n=!1,e=e.parentNode}return!1},l=r.getStyleObject||function(e){var t={};return te.defaultView&&te.defaultView.getComputedStyle?t=te.defaultView.getComputedStyle(e,""):e.currentStyle&&(t=e.currentStyle),t},g=function(e,t){var r=t||l(e);for(var n in d)for(var i=d[n],a=0;a<i.length;a++)if(r[n]&&(0===i[a].indexOf("!")&&-1===[i[a].slice(1),"inherit","initial","unset"].indexOf(r[n])||0===r[n].indexOf(i[a])))return!0;return!t&&e.nodeName&&-1!==p.indexOf(e.nodeName.toLowerCase())&&!(r.display&&0===r.display.indexOf("inline")&&"br"!==e.nodeName.toLowerCase())},d={display:["block","grid","table","flow-root","flex"],position:["absolute","fixed"],float:["left","right","inline"],clear:["left","right","both","inline"],overflow:["hidden","scroll","auto"],"column-count":["!auto"],"column-width":["!auto"],"column-span":["all"],contain:["layout","content","strict"]},p=["address","article","aside","blockquote","br","canvas","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","legend","li","main","nav","noscript","ol","output","p","pre","section","table","td","tfoot","th","tr","ul","video"],Oe=function(e,t,r,n,i,a){var o="",l=!1;if(r&&!a)o=t.getAttribute("aria-valuetext")||t.getAttribute("aria-valuenow")||"";else if(n&&!a)o=h(t)||"";else if(i&&!a){var d=[];"grid"===e||"treegrid"===e?d=["gridcell","rowheader","columnheader"]:"listbox"===e?d=["option"]:"tablist"===e?d=["tab"]:"tree"===e&&(d=["treeitem"]),o=m(t,t.querySelectorAll('*[aria-selected="true"]'),!1,d),l=!0}return!(o=Se(o))&&(r||n)&&t.value&&(o=t.value),l||o||!a||(o=i?m(t,t.querySelectorAll("option[selected]"),!0):t.value),o},we=function(e){return Se(e).length?" "+e+" ":" "},m=function(e,t,r,n){if(!t||!t.length)return"";for(var i=[],a=0;a<t.length;a++){var o=de(t[a]);(!n||-1!==n.indexOf(o))&&i.push(r?h(t[a]):oe(t[a],!0,!1,[],!1,{top:t[a]}).name)}return i.join(" ")},b=r.getPseudoElStyleObj||function(e,t){var r={};for(var n in d)r[n]=te.defaultView.getComputedStyle(e,t).getPropertyValue(n);return r.content=te.defaultView.getComputedStyle(e,t).getPropertyValue("content").replace(/^"|\\|"$/g,""),r},h=function(e,t){if(!t&&1===e.nodeType)return e.innerText||e.textContent||"";var r=b(e,t),n=r.content;return n&&"none"!==n?(g({},r)&&(":before"===t?n+=" ":":after"===t&&(n=" "+n)),n):""},Ne=r.getCSSText||function(e,t){return e&&1!==e.nodeType||e===t||-1!==["input","select","textarea","img","iframe","optgroup"].indexOf(e.nodeName.toLowerCase())?{before:"",after:""}:{before:i(e,h(e,":before")),after:i(e,h(e,":after"))}},Ce=function(e,t,r,n){for(n=!!n;e;)if((e=e.parentNode)&&(r&&de(e)===r||t&&e.nodeName&&e.nodeName.toLowerCase()===t&&(!n||de(e).length<1)))return e;return{}},ke=function(e,t,r,n){for(var i=[];e&&e!==t;)if((e=e.id&&r&&r[e.id]&&r[e.id].node&&-1===i.indexOf(e)?(i.push(e),r[e.id].node):e.parentNode)&&e.getAttribute&&(Se(e.getAttribute("aria-label"))||!n&&ye(e,t)))return!0;return!1};if(Ae(e,te.body,!0,!(!e||!e.nodeName||"area"!==e.nodeName.toLowerCase())))return n;var x=oe(e,!1,!1,[],!1,{top:e}),v=Se(x.name.replace(/\s+/g," ")),y=Se(x.title.replace(/\s+/g," "));n.hasUpperCase=!(!a||a===a.toLowerCase()),n.name=v,n.desc=y,ie={name:[],desc:[]},ae=[]}catch(e){n.error=e}return n.placeholder=u,n.userAgent=re,t&&"function"==typeof t?t.apply(e,[n,e]):n};var Se=function(e){return"string"!=typeof e?"":e.replace(/^\s+|\s+$/g,"")};i.getAccNameMsg=i.getNames=function(e,t){var r=i.getAccName(e,null,!1,t);if(r.error)return r.error+"\n\nAn error has been thrown in AccName Prototype version "+i.getAccNameVersion+". Please copy this error message and the HTML markup that caused it, and submit both as a new GitHub issue at\nhttps://github.com/whatsock/w3c-alternative-text-computation";var n='accName: "'+r.name+'"\n\naccDesc: "'+r.desc+'"\n\n';return r.placeholder&&(n+="Name from placeholder: true\n\n"),r.userAgent&&(n+="Name from user agent: true\n\n"),n+="(Running AccName Computation Prototype version: "+i.getAccNameVersion+")"},"object"==typeof module&&module.exports&&(module.exports={getNames:i.getNames,calcNames:i.calcNames})}();