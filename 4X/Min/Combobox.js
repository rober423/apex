/*@license
ARIA Combobox Module 3.7 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Home: WhatSock.com  :  Download: https://github.com/whatsock/apex
License: MIT (https://opensource.org/licenses/MIT)

Required dependencies: SmoothScroll.js, AccName.js, CurrentDevice.js
*/
"Combobox"in $A||$A.import(["CurrentDevice","SmoothScroll","AccName"],{name:"ComboboxModule",props:props,once:!0,call:function(e){$A.extend({Combobox:function(e){var c=e.select||!1,s=e.input||!1,t=$A.isFn($A.getAccName)&&$A.getAccName(e.input).name||"",n=e.childNode||!1;if(!c||!s)return null;var o=-1!==["input","textarea"].indexOf(s.nodeName.toLowerCase());if(!o&&!n)return null;$A.setAttr(s,{role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-haspopup":"listbox"});var l=$A.genId(),A=this,a=!1,o=(s.id||(s.id=l),{id:l,role:"List",returnFocus:!1,exposeBounds:!0,exposeHiddenClose:!0,delay:e.delay||1e3,style:e.style,animate:e.animate,hiddenCloseName:"Close Popup",displayHiddenClose:!1,className:"toplevel-div clearfix",middleClass:"middle-div clearfix",listboxClass:"listbox clearfix",optionClass:"option clearfix",activeClass:"active",toggleClassName:"pressed",triggerNode:s,widgetType:"Combobox",autoCloseSameWidget:!0,cb:{selected:[],select:function(e,c,t){$A.isNode(c)&&c.id&&($A.remClass(e.cb.selected,e.activeClass),e.cb.selected=[],t)?($A.setAttr(e.triggerNode,"aria-activedescendant",c.id),e.cb.activeDescendant=!0,$A.addClass(c,e.activeClass),e.cb.selected.push(c),A.scrollIntoView(c,e.scrollCallback,e)):($A.remAttr(e.triggerNode,["aria-activedescendant","aria-controls"]),e.cb.activeDescendant=!1)},key:"",charMin:0,baseId:l,baseInc:1,options:{},optionNodes:[],size:0,readonly:!1,multiple:!1,checked:!1,multipleDivider:function(e){return e.join("")},required:!1,parentTag:e.parentTag||"ul",childTag:e.childTag||"li",names:[],values:[],matches:[],value:"",showAll:!1,substringMatch:!1,wordMatch:!1,autoComplete:!1,currentOption:null,activeDescendant:!1,sIndex:-1,clicked:!1,mClicked:!1,isInput:o,setDefault:!0,bound:!1,fn:{update:function(){var e=this.dc;A.close(),e.cb.options={},e.cb.currentOption=null,e.cb.names=[],e.cb.values=[],e.cb.readonly=!e.cb.isInput||!!s.readOnly,e.cb.required=e.cb.isInput?!!s.required:"true"===$A.getAttr(e.triggerNode,"aria-required"),e.cb.multiple=!!$A.getAttr(e.cb.sel,"multiple"),e.cb.optionNodes=$A.query("option",e.cb.sel),e.cb.readonly&&(e.cb.substringMatch=e.cb.wordMatch=!1);for(var c=0;c<e.cb.optionNodes.length;c++){e.cb.baseInc++;var t=$A.trim($A.getText(e.cb.optionNodes[c])).replace(/<|>/g,""),n=e.cb.baseId+e.cb.baseInc,o="<"+e.cb.childTag+' role="option" tabindex="-1" id="'+n+'" data-value="'+e.cb.optionNodes[c].value+'" class="'+e.optionClass+'" ';e.cb.multiple&&(o+='aria-selected="false" '),o+="><a><span>"+t+"</span></a></"+e.cb.childTag+">",e.cb.options[e.cb.optionNodes[c].value]={content:o,id:n,so:e.cb.optionNodes[c],checked:e.cb.optionNodes[c].selected,no:t,v:e.cb.optionNodes[c].value,i:c},e.cb.names.push(t),e.cb.values.push(e.cb.optionNodes[c].value)}e.cb.sel.selectedIndex=0<=e.cb.sel.selectedIndex?e.cb.sel.selectedIndex:0,e.cb.multiple?(e.cb.autoComplete=!0,e.cb.fn.setValue(!1,!0)):e.cb.fn.setValue(e.cb.options[e.cb.optionNodes[e.cb.sel.selectedIndex].value],!0),e.cb.required&&e.cb.isInput&&$A.setAttr(e.triggerNode,{"aria-required":"true"})},render:function(e,c,t){var n,o=this.dc;if(o.cb.multiple&&!t)for(var s in o.cb.options){s=o.cb.options[s];$A.setAttr(s.o,"aria-selected",s.checked?"true":"false")}if(o.cb.readonly&&(n=o.cb.showAll,o.cb.showAll=!0),!o.cb.readonly&&!o.cb.showAll&&!o.cb.value)return o.cb.showAll=n,!0;if(!c&&(o.cb.sIndex=o.cb.sel.selectedIndex,o.cb.matches=[],o.loaded))return A.close(function(){A.open(!0)}),o;if(c&&o.cb.key){var l=o.cb.key.toLowerCase(),a=!1,i=o.cb.sIndex;o.cb.sIndex++;for(var b=o.cb.sIndex;b<o.cb.names.length;b++)if(0===$A.inArray(l,o.cb.names[b].toLowerCase())){a=!0,o.cb.sIndex=b;break}if(!a){o.cb.sIndex=0;for(b=o.cb.sIndex;b<i;b++)if(0===$A.inArray(l,o.cb.names[b].toLowerCase())){a=!0,o.cb.sIndex=b;break}}a?(o.cb.multiple?(o.cb.currentOption=[],o.cb.currentOption[0]=o.cb.options[o.cb.values[o.cb.sIndex]],o.cb.value=o.cb.currentOption[0].no):(o.cb.currentOption=o.cb.options[o.cb.values[o.cb.sIndex]],o.cb.value=o.cb.currentOption.no),o.cb.multiple?o.cb.select(o,o.cb.currentOption[0].o,!0):o.cb.select(o,o.cb.currentOption.o,!0)):o.cb.sIndex=i}else{if(e||o.cb.showAll||o.cb.readonly)o.cb.matches=o.cb.values;else for(b=0;b<o.cb.names.length;b++)if(o.cb.wordMatch){for(var r=$A.trim(o.cb.value).toLowerCase().split(" "),d=$A.trim(o.cb.names[b]).toLowerCase().split(" "),u=0,p=0,f=0;f<r.length;f++){for(var g=0;g<d.length;g++)if($A.trim(r[f])&&$A.trim(d[g])&&-1!==$A.inArray($A.trim(r[f]),$A.trim(d[g]))&&$A.trim(r[f]).length===$A.trim(d[g]).length){p++;break}u++}u&&p&&u<=p&&o.cb.matches.push(o.cb.values[b])}else(!o.cb.wordMatch&&!o.cb.substringMatch&&0===$A.inArray(o.cb.value.toLowerCase(),o.cb.names[b].toLowerCase())||!o.cb.wordMatch&&o.cb.substringMatch&&-1!==$A.inArray(o.cb.value.toLowerCase(),o.cb.names[b].toLowerCase()))&&o.cb.matches.push(o.cb.values[b]);if(!o.cb.matches.length)return!0;o.cb.readonly?o.cb.sIndex=o.cb.sel.selectedIndex:o.cb.sIndex=0,o.cb.readonly&&(o.cb.showAll=n,o.cb.currentObject=o.cb.options[o.cb.matches[o.cb.sIndex]])}return!1},setAltTrigger:function(e){var c;e&&1===e.nodeType&&(c=this.dc,$A.setAttr(e,{role:"button","aria-expanded":"false"}),$A.setAttr(e,{"aria-label":$A.isFn($A.getAccName)&&$A.getAccName(c.triggerNode).name||$A.getText(c.triggerNode)}),c.cb.altClicked=!1,$A.off(e,"click"),$A.on(e,"click",function(e){c.cb.altClicked||(c.cb.altClicked=!0,c.loaded?(c.cb.multiple&&c.cb.mClicked&&(c.cb.fn.setValue(!1,!1,!0),c.cb.mClicked=!1),A.close()):A.open(),c.triggerNode.focus(),setTimeout(function(){c.cb.altClicked=!1},300)),e.stopPropagation(),e.preventDefault()}),c.cb.altTrigger=e)},setValue:function(e,c,t){var n=this.dc;if(e&&!n.cb.multiple)n.cb.value=e.no,n.cb.currentOption=e,c||(e.so.selected=!0),!c&&n.cb.fn.onSelect&&$A.isFn(n.cb.fn.onSelect)?((a=n.cb.fn.onSelect.apply(n.triggerNode,[e.no,e.v,n.triggerNode,n.cb.sel]))||$A.isStr(a))&&(n.cb.value=a):n.cb.isInput?(t||n.cb.setDefault)&&(n.triggerNode.value=n.cb.value):(t||n.cb.setDefault)&&(n.cb.child.innerHTML=n.cb.value);else if(!e&&n.cb.multiple){var o=[];if(c)for(var o=$A.query("option[selected]",n.cb.sel),s=0;s<o.length;s++)n.cb.options[o[s].value].checked=!0;n.cb.currentOption=[],n.cb.value="";var l,a,i=[];for(l in n.cb.options){e=n.cb.options[l];c||(e.checked="true"===$A.getAttr(e.o,"aria-selected"),e.so.selected=e.checked),e.checked&&(n.cb.currentOption.push(e),o.push(e.so),i.push(e.no))}n.cb.value=n.cb.multipleDivider(i),!c&&n.cb.fn.onSelect&&$A.isFn(n.cb.fn.onSelect)?((a=n.cb.fn.onSelect.apply(n.triggerNode,[n.cb.value,o,n.triggerNode,n.cb.sel]))||$A.isStr(a))&&(n.cb.value=a):n.cb.isInput?(t||n.cb.setDefault)&&(n.triggerNode.value=n.cb.value):(t||n.cb.setDefault)&&(n.cb.child.innerHTML=n.cb.value)}n.cb.pValue=n.cb.value},checkValue:function(e){var c=this.dc;if(e&&e.length>=c.cb.charMin)for(var t=0;t<c.cb.names.length;t++)if($A.trim(e)&&$A.trim(e.toLowerCase())==$A.trim(c.cb.names[t].toLowerCase()))return t;return-1},unsetValue:function(e){var c=this.dc;!e&&0<=c.cb.sel.selectedIndex&&(c.cb.optionNodes[c.cb.sel.selectedIndex].selected=!1),c.cb.currentOption=null,c.cb.isInput?c.cb.value=c.triggerNode.value:c.cb.value=$A.getText(c.cb.child)},bind:function(){var c,t,n,o=this.dc;o.cb.bound||($A.off(o.triggerNode,".4XCombobox"),c=!1,t=null,n=function(e){o.cb.altTrigger||(o.loaded?o.loaded&&A.close():A.open())},$A.on(o.triggerNode,{touchstart:function(e){c=!0,!t&&o.loaded&&n.call(this,e),t=setTimeout(function(){t=null},1e3)},mousedown:function(e){e.stopPropagation()},click:function(e){o.cb.isInput||n.call(this,e),e.stopPropagation()},keydown:function(e){var c=$A.keyEvent(e);e.stopPropagation(),9===c?o.loaded&&(o.cb.autoComplete&&o.cb.activeDescendant&&(o.cb.multiple?o.cb.fn.setValue(!1,!1,!0):o.cb.fn.setValue(o.cb.options[o.cb.matches[o.cb.sIndex]],!1,!0)),A.close()):13!==c&&32!==c||o.cb.isInput||o.cb.activeDescendant||o.loaded?o.cb.multiple||13!==c&&32!==c||!o.cb.activeDescendant||!o.loaded?o.cb.multiple&&13===c&&o.cb.activeDescendant&&o.loaded?(o.cb.fn.setValue(!1,!1,!0),A.close(),b(),e.preventDefault()):o.cb.multiple&&32===c&&o.cb.activeDescendant&&o.loaded?($A.setAttr(o.cb.options[o.cb.matches[o.cb.sIndex]].o,"aria-selected","true"===$A.getAttr(o.cb.options[o.cb.matches[o.cb.sIndex]].o,"aria-selected")?"false":"true"),o.cb.autoSaveIfChecked&&o.cb.fn.setValue(!1,!1,!0),e.preventDefault()):o.cb.readonly&&(48<=c&&c<=57||65<=c&&c<=90)&&(o.cb.key+=String.fromCharCode(c),o.cb.fn.render(!1,!0,!0),o.cb.keyReset&&clearTimeout(o.cb.keyReset),o.cb.keyReset=setTimeout(function(){o.cb.key=""},1500)):(o.cb.fn.setValue(o.cb.options[o.cb.matches[o.cb.sIndex]],!1,!0),A.close(),b(),e.preventDefault()):(A.open(),e.preventDefault()),o.cb.showAllIfEmpty&&this.value&&(o.cb.showAll=o.fn.showAll),o.cb.readonly&&o.loaded&&(37===c||39===c)?e.preventDefault():40!==c||o.cb.activeDescendant||o.loaded||this.value||!o.cb.showAllIfEmpty?40!==c||o.cb.activeDescendant||o.loaded||!o.cb.readonly?40===c&&!o.cb.activeDescendant&&o.loaded?(o.cb.sIndex=o.cb.readonly&&o.cb.showAll&&0<=o.cb.sel.selectedIndex?o.cb.sel.selectedIndex:0,o.cb.select(o,o.cb.options[o.cb.matches[o.cb.sIndex]].o,!0),e.preventDefault()):40===c&&o.cb.activeDescendant&&o.loaded?(o.cb.sIndex<o.cb.matches.length-1?o.cb.sIndex++:o.cb.sIndex=0,o.cb.select(o,o.cb.options[o.cb.matches[o.cb.sIndex]].o,!0),e.preventDefault()):e.altKey&&38===c&&o.cb.activeDescendant&&o.loaded?(o.cb.multiple?o.cb.fn.setValue(!1,!1,!0):o.cb.fn.setValue(o.cb.options[o.cb.matches[o.cb.sIndex]],!1,!0),A.close(),b(),e.preventDefault()):38===c&&o.cb.activeDescendant&&o.loaded?(0<o.cb.sIndex?o.cb.sIndex--:o.cb.sIndex=o.cb.matches.length-1,o.cb.select(o,o.cb.options[o.cb.matches[o.cb.sIndex]].o,!0),e.preventDefault()):27!==c&&37!==c&&39!==c||(o.cb.select(o),27===c&&A.close()):(o.cb.sIndex=(o.cb.readonly||o.cb.showAll)&&0<=o.cb.sel.selectedIndex?o.cb.sel.selectedIndex:0,$A.isNum(o.cb.sIndex)||(o.cb.sIndex=0),A.open(),e.preventDefault()):(o.cb.showAll=!0,o.cb.sIndex=(o.cb.readonly||o.cb.showAll)&&0<=o.cb.sel.selectedIndex?o.cb.sel.selectedIndex:0,$A.isNum(o.cb.sIndex)||(o.cb.sIndex=0),A.open(),e.preventDefault())},keyup:function(e){var c,e=$A.keyEvent(e);o.cb.readonly||9===e||(o.cb.isInput&&(o.cb.value=this.value),c=o.cb.fn.checkValue(o.cb.value),o.cb.value&&-1!==c?(c=o.cb.options[o.cb.values[c]],o.cb.multiple?(o.cb.currentOption=[],o.cb.currentOption[0]=c):o.cb.currentOption=c,c.so.selected=!0,A.close()):o.cb.value&&o.cb.value.length>=o.cb.charMin?(!(c=!(!o.cb.isInput||o.cb.readonly))||o.cb.pValue&&o.cb.pValue===s.value||(o.cb.pValue=s.value,c=!1),c||(o.cb.fn.render(),A.open(!0))):o.cb.multiple||38===e||40===e||A.close())},focus:function(e){},blur:function(e){c||o.cb.multiple||setTimeout(function(){o.cb.altClicked||(o.loaded&&(o.cb.autoComplete&&o.cb.activeDescendant&&!o.cb.clicked&&o.cb.fn.setValue(o.cb.options[o.cb.matches[o.cb.sIndex]],!1,!0),A.close()),o.cb.clicked=!1)},150)}},null,".4XCombobox"),o.cb.bound=!0)},set:function(){var e=this.dc;e.cb.select(e),$A.setAttr(e.triggerNode,{"aria-expanded":"false"}),e.cb.isInput||(e.cb.baseInc++,e.cb.child.id||$A.setAttr(e.cb.child,{tabindex:"-1",id:e.cb.baseId+e.cb.baseInc}),$A.addIdRef(e.triggerNode,"aria-labelledby",e.cb.child.id))},onSelect:null,onOpen:null,onClose:null,onTriggerChange:null,setSize:function(){var e=this.dc,c=(e.cb.size||5)<=e.cb.matches.length?e.cb.size||5:e.cb.matches.length,t=e.cb.options[e.cb.matches[0]].o,n=$A.elementHeight(t),n=c*(n+=parseInt($A.css(t,"margin-top"),10)+parseInt($A.css(t,"margin-bottom"),10))+(parseInt($A.css(e.content,"padding-top"),10)+parseInt($A.css(e.content,"padding-bottom"),10));$A.css(e.content,"height",n)}}},click:function(e,c){e.stopPropagation()},beforeRender:function(e){if(!e.cb.matches.length)return e.cancel=!0;e.fn.matches=e.cb.matches,e.cb.baseInc++,e.content=A.listboxNode=$A.create(e.cb.parentTag,{role:"listbox","aria-label":t,id:e.cb.baseId+e.cb.baseInc,"aria-multiselectable":e.cb.multiple?"true":"false"},null,e.listboxClass);for(var c=0;c<e.cb.matches.length;c++)$A.isNode(e.cb.options[e.cb.matches[c]].o)||(e.cb.options[e.cb.matches[c]].o=$A.toNode(e.cb.options[e.cb.matches[c]].content,!0)),e.content.appendChild(e.cb.options[e.cb.matches[c]].o)},duringRender:function(e){$A.addClass(e.container,e.middleClass)},afterRender:function(n){$A.setAttr(A.combobox,"aria-controls",A.listboxNode.id),n.cb.matches!==n.fn.matches&&(n.beforeRender(n),n.insert(n.content)),$A.query(n.cb.matches,function(e,t){$A.off(n.cb.options[t].o,"click"),$A.on(n.cb.options[t].o,{click:function(e){var c;n.cb.multiple?((c=n.cb.options[t].o)&&$A.setAttr(c,"aria-selected","true"===$A.getAttr(c,"aria-selected")?"false":"true"),n.cb.mClicked=!0):(n.cb.fn.setValue(n.cb.options[t],!1,!0),n.cb.clicked=!0,A.close(),b()),e.preventDefault()},focus:function(e){}})}),0<=n.cb.sIndex||(n.cb.sIndex=0),n.cb.readonly&&n.cb.select(n,n.cb.options[n.cb.matches[n.cb.sIndex]].o,!0),n.cb.fn.setSize(),"desktop"!==$A.device.type&&setTimeout(function(){$A.announce(n.cb.options[n.cb.matches[n.cb.sIndex]].no,!1)},1),$A.setAttr(n.triggerNode,"aria-expanded","true"),n.cb.altTrigger&&1===n.cb.altTrigger.nodeType&&($A.addClass(n.cb.altTrigger,n.toggleClassName),$A.setAttr(n.cb.altTrigger,"aria-expanded","true"),n.cb.fn.onTriggerChange)&&$A.isFn(n.cb.fn.onTriggerChange)&&n.cb.fn.onTriggerChange.apply(n.cb.altTrigger,[n.cb.altTrigger,n.loaded]),n.cb.fn.onOpen&&$A.isFn(n.cb.fn.onOpen)&&n.cb.fn.onOpen.apply(n.triggerNode,[n])},beforeRemove:function(e){e.loaded&&e.cb.multiple&&e.cb.mClicked&&e.cb.fn.setValue(!1,!1,!0)},afterRemove:function(e){e.cb.mClicked=!1,e.cb.select(e),$A.setAttr(e.triggerNode,{"aria-expanded":"false"}),e.cb.altTrigger&&1===e.cb.altTrigger.nodeType&&($A.remClass(e.cb.altTrigger,e.toggleClassName),$A.setAttr(e.cb.altTrigger,{"aria-expanded":"false"}),e.cb.fn.onTriggerChange)&&$A.isFn(e.cb.fn.onTriggerChange)&&e.cb.fn.onTriggerChange.apply(e.cb.altTrigger,[e.cb.altTrigger,e.loaded]),e.cb.fn.onClose&&$A.isFn(e.cb.fn.onClose)&&e.cb.fn.onClose.apply(e.triggerNode,[e])},onCreate:function(e){A.combobox=e.triggerNode,A.select=e.cb.sel},scrollConfig:e.scrollConfig||{}}),i=($A.extend(o,e.override||{}),$A([o])[0]),b=((i.cb.dc=i.cb.fn.dc=A.dc=i).cb.sel=c,i.cb.child=n,function(){i.cb.fn.onSelect&&$A.isFn(i.cb.fn.onSelect)||setTimeout(function(){!i.cb.multiple||i.cb.isInput?$A.announce(i.cb.value.toString(),!1,!0):i.cb.child&&$A.announce(i.cb.child,!1,!0)},150)});return A.setCharMin=function(e){$A.isNum(e)&&0<=e&&(i.cb.charMin=e)},A.setShowAll=function(e){i.cb.showAll=i.fn.showAll=!!e},A.setShowAllIfEmpty=function(e){i.cb.showAllIfEmpty=!!e},A.setAutoSaveIfChecked=function(e){i.cb.autoSaveIfChecked=!!e},A.setSubstringMatch=function(e){i.cb.substringMatch=!!e},A.setWordMatch=function(e){i.cb.wordMatch=!!e},A.setTags=function(e){e.parentTag&&(i.cb.parentTag=e.parentTag),e.childTag&&(i.cb.childTag=e.childTag)},A.setOffset=function(e){isNaN(e.left)||(i.offsetLeft=e.left),isNaN(e.top)||(i.offsetTop=e.top)},A.setAutoComplete=function(e){i.cb.autoComplete=!!e},A.close=function(e){i.remove(e)},A.open=function(e){i.loaded||a&&(i.cb.fn.render(),i.render(function(){"desktop"===$A.device.type&&i.cb.select(i,i.cb.options[i.cb.matches[i.cb.sIndex]].o,!0)}))},A.setAltTrigger=function(e){i.cb.fn.setAltTrigger(e)},A.setAutoPosition=function(e){!isNaN(e)&&e<10&&(i.autoPosition=e)},A.setSize=function(e){!isNaN(e)&&0<e&&(i.cb.size=e)},A.setPosAnchor=function(e){i.posAnchor=e},A.setTargetNode=function(e){i.targetNode=e},A.setClassNames=function(e){e.toplevelClass&&(i.className=e.toplevelClass),e.middleClass&&(i.middleClass=e.middleClass),e.listboxClass&&(i.listboxClass=e.listboxClass),e.optionClass&&(i.optionClass=e.optionClass),e.activeClass&&(i.activeClass=e.activeClass),e.toggleClass&&(i.toggleClassName=e.toggleClass)},A.setDefault=function(e){i.cb.setDefault=!!e},A.setMultipleDivider=function(e){e&&$A.isFn(e)&&(i.cb.multipleDivider=e)},A.clearAll=function(){for(var e in A.close(),i.cb.options){e=i.cb.options[e];e.so.selected=!1,e.checked=!1,$A.setAttr(e.o,"aria-selected","false")}i.cb.isInput?i.triggerNode.value="":i.cb.child&&(i.cb.multiple?i.cb.fn.setValue(!1,!0):$A.empty(i.cb.child))},A.update=function(){i.cb.fn.update()},A.start=function(){a=!0,i.cb.fn.bind(),i.cb.fn.update(),document.activeElement===s&&(i.cb.readonly||i.cb.value)&&A.open()},A.stop=function(){a=!1,A.close()},A.onSelect=function(e){e&&$A.isFn(e)&&(i.cb.fn.onSelect=e)},A.onOpen=function(e){e&&$A.isFn(e)&&(i.cb.fn.onOpen=e)},A.onClose=function(e){e&&$A.isFn(e)&&(i.cb.fn.onClose=e)},A.onTriggerChange=function(e){e&&$A.isFn(e)&&(i.cb.fn.onTriggerChange=e)},A.setPromptText=function(e){$A.setAttr(s,"aria-description",e)},A.setCloseText=function(e){e?(i.exposeHiddenClose=!0,i.hiddenCloseName=e):i.exposeHiddenClose=!1},A.scrollIntoView=function(e,c,t){$A.scrollTo(e,$A.extend({duration:100,container:A.listboxNode,complete:function(){$A.isFn(c)&&c.call(e,e)}},t.scrollConfig||{}))},A.getValue=function(){if(i.cb.multiple){var e,c=[];for(e in i.cb.options){var t=i.cb.options[e];t.checked&&t.so.selected&&c.push(t.so)}return c}return i.cb.sel.value},$A.on(window,"resize."+l,function(){i&&i.loaded&&(i.setPosition(),i.cb.fn.setSize())}),$A(s).on("remove",function(e,c){$A.off(window,"."+l)}),i.cb.isInput||$A.getAttr(i.triggerNode,"tabindex")||$A.setAttr(i.triggerNode,"tabindex","0"),i.cb.fn.set(),$A.remAttr(i.triggerNode,["data-controls"]),A}})}});