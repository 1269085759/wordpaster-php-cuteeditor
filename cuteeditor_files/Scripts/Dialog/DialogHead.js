var OxObc24=["userAgent","ua","isOpera","opera","isSafari","safari","isWinIE","msie","isGecko","gecko","isMac","Mac","compatMode","document","CSS1Compat","XMLHttpRequest","","caller","(","\x0A","attachEvent","on","\x0D\x0A","closeeditordialog","top","returnValue","_dialog_returnvalue","opener","_dialog_arguments","dialogArguments","length","element \x27","\x27 not found","all","childNodes","nodeType","UNSELECTABLE","tabIndex","-1","//TODO: event not found? throw error ?","preventDefault","event","arguments","parent","frames","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","which","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","cancelBubble","stopPropagation","buttonInitialized","oncontextmenu","onmouseout","onmousedown","onmouseup","isover","className","CuteEditorButtonOver","CuteEditorButton","CuteEditorButtonDown","CuteEditorDown","border","style","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","onerror","\x0D\x0A\x0D\x0A","href","location","view-source:","?\x26view-source=","_blank","ondblclick","onkeydown","//duplicated?\x0D\x0A","var ","=Window_GetElement(window,\x22","\x22,true);","Text","clipboardData","addEventListener","isdir","path","url","text","return this.getAttribute(\x27","\x27);","prototype","attributes","\x3C","tagName","specified"," ","name","=\x22","value","\x22","\x3E","innerHTML","\x3C/","AREA","BASE","BASEFONT","COL","FRAME","HR","IMG","BR","INPUT","ISINDEX","LINK","META","PARAM","00","0123456789ABCDEF","#","object","undefined","Microsoft.XMLHTTP","head","script","language","javascript","type","text/javascript","src","id","_cpinstalled","1","../Scripts/ColorPicker.js","CuteEditorColorPickerInitialize","GET","onreadystatechange","readyState","responseText"," \x0D\x0A window.CuteEditorColorPickerInitialize=CuteEditorColorPickerInitialize","colorScript","oncolorselect","FireUIChanged","onclick","popupColorPicker"];var _Browser_TypeInfo=null;function Browser__InitType(){if(_Browser_TypeInfo!=null){return ;} ;var Ox118={};var Ox119=!!navigator[OxObc24[0]].match(/Trident\/7\./);Ox118[OxObc24[1]]=navigator[OxObc24[0]].toLowerCase();Ox118[OxObc24[2]]=(Ox118[OxObc24[1]].indexOf(OxObc24[3])>-1);Ox118[OxObc24[4]]=(Ox118[OxObc24[1]].indexOf(OxObc24[5])>-1);Ox118[OxObc24[6]]=(!Ox118[OxObc24[2]]&&Ox118[OxObc24[1]].indexOf(OxObc24[7])>-1)&&!Ox119;Ox118[OxObc24[8]]=(!Ox118[OxObc24[2]]&&Ox118[OxObc24[1]].indexOf(OxObc24[9])>-1)||Ox119;Ox118[OxObc24[10]]=navigator[OxObc24[0]].indexOf(OxObc24[11])!=-1;_Browser_TypeInfo=Ox118;} ;Browser__InitType();function Browser_IsWinIE(){return _Browser_TypeInfo[OxObc24[6]];} ;function Browser_IsGecko(){return _Browser_TypeInfo[OxObc24[8]];} ;function Browser_IsOpera(){return _Browser_TypeInfo[OxObc24[2]];} ;function Browser_IsSafari(){return _Browser_TypeInfo[OxObc24[4]];} ;function Browser_UseIESelection(){return _Browser_TypeInfo[OxObc24[6]];} ;function Browser_IsCSS1Compat(){return window[OxObc24[13]][OxObc24[12]]==OxObc24[14];} ;function Browser_IsIE7(){return _Browser_TypeInfo[OxObc24[6]]&&window[OxObc24[15]];} ;function GetStackTrace(){var Ox49=OxObc24[16];for(var Ox122=GetStackTrace[OxObc24[17]];Ox122!=null;Ox122=Ox122[OxObc24[17]]){var Ox123=Ox122+OxObc24[16];Ox123=Ox123.substr(0,Ox123.indexOf(OxObc24[18]));Ox49+=Ox123+OxObc24[19];} ;return Ox49;} ;function Event_Attach(obj,name,Ox126){if(obj[OxObc24[20]]){if(name.substr(0,2)!=OxObc24[21]){name=OxObc24[21]+name;} ;obj.attachEvent(name,Ox126);} else {if(name.substr(0,2)==OxObc24[21]){name=name.substring(2);} ;obj.addEventListener(name,Ox126,false);} ;} ;var __ISDEBUG=false;function Debug_Todo(msg){if(!__ISDEBUG){return ;} ;throw ( new Error(msg+OxObc24[22]+Debug_Todo[OxObc24[17]]));} ;function Window_CloseDialog(Ox12b){if(top[OxObc24[23]]){top.closeeditordialog();} else {top.close();} ;} ;function Window_SetDialogReturnValue(Ox90,Ox7){var Ox12d=Ox90[OxObc24[24]];Ox12d[OxObc24[25]]=Ox7;Ox12d[OxObc24[13]][OxObc24[26]]=Ox7;var Ox12e=Ox12d[OxObc24[27]];if(Ox12e==null){return ;} ;try{Ox12e[OxObc24[13]][OxObc24[26]]=Ox7;} catch(x){} ;} ;function Window_GetDialogArguments(Ox90){var Ox12d=Ox90[OxObc24[24]];try{var Ox12e=Ox12d[OxObc24[27]];if(Ox12e&&Ox12e[OxObc24[13]][OxObc24[28]]){return Ox12e[OxObc24[13]][OxObc24[28]];} ;} catch(x){} ;if(Ox12d[OxObc24[13]][OxObc24[28]]){return Ox12d[OxObc24[13]][OxObc24[28]];} ;if(Ox12d[OxObc24[29]]){return Ox12d[OxObc24[29]];} ;return Ox12d[OxObc24[13]][OxObc24[28]];} ;function Window_GetElement(Ox90,Oxaa,Ox131){var Ox132=Ox90[OxObc24[13]].getElementById(Oxaa);if(Ox132){return Ox132;} ;var Ox1f=Ox90[OxObc24[13]].getElementsByName(Oxaa);if(Ox1f[OxObc24[30]]>0){return Ox1f.item(0);} ;if(Ox131){if(__ISDEBUG){alert(OxObc24[31]+Oxaa+OxObc24[32]);} ;throw ( new Error(OxObc24[31]+Oxaa+OxObc24[32]));} ;return null;} ;function Element_GetAllElements(p){var arr=[];if(Browser_IsWinIE()){for(var i=0;i<p[OxObc24[33]][OxObc24[30]];i++){arr.push(p[OxObc24[33]].item(i));} ;return arr;} ;Ox134(p);function Ox134(Ox132){var Ox135=Ox132[OxObc24[34]];var Ox3d=Ox135[OxObc24[30]];for(var i=0;i<Ox3d;i++){var Ox8d=Ox135.item(i);if(Ox8d[OxObc24[35]]!=1){continue ;} ;arr.push(Ox8d);Ox134(Ox8d);} ;} ;return arr;} ;function Element_SetUnselectable(element){element.setAttribute(OxObc24[36],OxObc24[21]);element.setAttribute(OxObc24[37],OxObc24[38]);var arr=Element_GetAllElements(element);var len=arr[OxObc24[30]];if(!len){return ;} ;for(var i=0;i<len;i++){arr[i].setAttribute(OxObc24[36],OxObc24[21]);arr[i].setAttribute(OxObc24[37],OxObc24[38]);} ;} ;function Event_GetEvent(Ox138){Ox138=Event_FindEvent(Ox138);if(Ox138==null){Debug_Todo(OxObc24[39]);} ;return Ox138;} ;function Array_IndexOf(arr,Ox13a){for(var i=0;i<arr[OxObc24[30]];i++){if(arr[i]==Ox13a){return i;} ;} ;return -1;} ;function Array_Contains(arr,Ox13a){return Array_IndexOf(arr,Ox13a)!=-1;} ;function clearArray(Ox13d){for(var i=0;i<Ox13d[OxObc24[30]];i++){Ox13d[i]=null;} ;} ;function Event_FindEvent(Ox138){if(Ox138&&Ox138[OxObc24[40]]){return Ox138;} ;if(Browser_IsGecko()){return Event_FindEvent_FindEventFromCallers();} else {if(window[OxObc24[41]]){return window[OxObc24[41]];} ;return Event_FindEvent_FindEventFromWindows();} ;return null;} ;function Event_FindEvent_FindEventFromCallers(){var Ox75=Event_GetEvent[OxObc24[17]];for(var i=0;i<100;i++){if(!Ox75){break ;} ;var Ox138=Ox75[OxObc24[42]][0];if(Ox138&&Ox138[OxObc24[40]]){return Ox138;} ;Ox75=Ox75[OxObc24[17]];} ;} ;function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox141(window);function Ox141(Ox90){if(Ox90==null){return null;} ;if(Ox90[OxObc24[41]]){return Ox90[OxObc24[41]];} ;if(Array_Contains(arr,Ox90)){return null;} ;arr.push(Ox90);var Ox142=[];if(Ox90[OxObc24[43]]!=Ox90){Ox142.push(Ox90.parent);} ;if(Ox90[OxObc24[24]]!=Ox90[OxObc24[43]]){Ox142.push(Ox90.top);} ;if(Ox90[OxObc24[27]]){Ox142.push(Ox90.opener);} ;for(var i=0;i<Ox90[OxObc24[44]][OxObc24[30]];i++){Ox142.push(Ox90[OxObc24[44]][i]);} ;for(var i=0;i<Ox142[OxObc24[30]];i++){try{var Ox138=Ox141(Ox142[i]);if(Ox138){return Ox138;} ;} catch(x){} ;} ;return null;} ;} ;function Event_GetSrcElement(Ox138){Ox138=Event_GetEvent(Ox138);if(Ox138[OxObc24[45]]){return Ox138[OxObc24[45]];} ;if(Ox138[OxObc24[46]]){return Ox138[OxObc24[46]];} ;Debug_Todo(OxObc24[47]);return null;} ;function Event_GetFromElement(Ox138){Ox138=Event_GetEvent(Ox138);if(Ox138[OxObc24[48]]){return Ox138[OxObc24[48]];} ;if(Ox138[OxObc24[49]]){return Ox138[OxObc24[49]];} ;return null;} ;function Event_GetToElement(Ox138){Ox138=Event_GetEvent(Ox138);if(Ox138[OxObc24[50]]){return Ox138[OxObc24[50]];} ;if(Ox138[OxObc24[49]]){return Ox138[OxObc24[49]];} ;return null;} ;function Event_GetKeyCode(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxObc24[51]]||Ox138[OxObc24[52]];} ;function Event_GetClientX(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxObc24[53]];} ;function Event_GetClientY(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxObc24[54]];} ;function Event_GetOffsetX(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxObc24[55]];} ;function Event_GetOffsetY(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxObc24[56]];} ;function Event_IsLeftButton(Ox138){Ox138=Event_GetEvent(Ox138);if(Browser_IsWinIE()){return Ox138[OxObc24[57]]==1;} ;if(Browser_IsGecko()){return Ox138[OxObc24[57]]==0;} ;return Ox138[OxObc24[57]]==0;} ;function Event_IsCtrlKey(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxObc24[58]];} ;function Event_IsAltKey(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxObc24[59]];} ;function Event_IsShiftKey(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxObc24[60]];} ;function Event_PreventDefault(Ox138){Ox138=Event_GetEvent(Ox138);Ox138[OxObc24[25]]=false;if(Ox138[OxObc24[40]]){Ox138.preventDefault();} ;} ;function Event_CancelBubble(Ox138){Ox138=Event_GetEvent(Ox138);Ox138[OxObc24[61]]=true;if(Ox138[OxObc24[62]]){Ox138.stopPropagation();} ;return false;} ;function Event_CancelEvent(Ox138){Ox138=Event_GetEvent(Ox138);Event_PreventDefault(Ox138);return Event_CancelBubble(Ox138);} ;function CuteEditor_ButtonOver(element){if(!element[OxObc24[63]]){element[OxObc24[64]]=Event_CancelEvent;element[OxObc24[65]]=CuteEditor_ButtonOut;element[OxObc24[66]]=CuteEditor_ButtonDown;element[OxObc24[67]]=CuteEditor_ButtonUp;Element_SetUnselectable(element);element[OxObc24[63]]=true;} ;element[OxObc24[68]]=true;element[OxObc24[69]]=OxObc24[70];} ;function CuteEditor_ButtonOut(){var element=this;element[OxObc24[69]]=OxObc24[71];element[OxObc24[68]]=false;} ;function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this;element[OxObc24[69]]=OxObc24[72];} ;function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxObc24[68]]){element[OxObc24[69]]=OxObc24[70];} else {element[OxObc24[69]]=OxObc24[73];} ;} ;function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxObc24[63]]){element[OxObc24[64]]=Event_CancelEvent;element[OxObc24[65]]=CuteEditor_ColorPicker_ButtonOut;element[OxObc24[66]]=CuteEditor_ColorPicker_ButtonDown;Element_SetUnselectable(element);element[OxObc24[63]]=true;} ;element[OxObc24[68]]=true;element[OxObc24[75]][OxObc24[74]]=OxObc24[76];element[OxObc24[75]][OxObc24[77]]=OxObc24[78];element[OxObc24[75]][OxObc24[79]]=OxObc24[80];} ;function CuteEditor_ColorPicker_ButtonOut(){var element=this;element[OxObc24[68]]=false;element[OxObc24[75]][OxObc24[74]]=OxObc24[81];element[OxObc24[75]][OxObc24[77]]=OxObc24[16];element[OxObc24[75]][OxObc24[79]]=OxObc24[80];} ;function CuteEditor_ColorPicker_ButtonDown(){var element=this;element[OxObc24[75]][OxObc24[74]]=OxObc24[82];element[OxObc24[75]][OxObc24[77]]=OxObc24[16];element[OxObc24[75]][OxObc24[79]]=OxObc24[80];} ;function CuteEditor_ButtonCommandOver(element){element[OxObc24[68]]=true;if(element[OxObc24[83]]){element[OxObc24[69]]=OxObc24[84];} else {element[OxObc24[69]]=OxObc24[70];} ;} ;function CuteEditor_ButtonCommandOut(element){element[OxObc24[68]]=false;if(element[OxObc24[85]]){element[OxObc24[69]]=OxObc24[86];} else {if(element[OxObc24[83]]){element[OxObc24[69]]=OxObc24[84];} else {element[OxObc24[69]]=OxObc24[71];} ;} ;} ;function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ;element[OxObc24[69]]=OxObc24[72];} ;function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxObc24[83]]){element[OxObc24[69]]=OxObc24[84];return ;} ;if(element[OxObc24[68]]){element[OxObc24[69]]=OxObc24[70];} else {if(element[OxObc24[85]]){element[OxObc24[69]]=OxObc24[86];} else {element[OxObc24[69]]=OxObc24[71];} ;} ;} [CuteEditor_ButtonOver,CuteEditor_ColorPicker_ButtonOver];[Window_GetDialogArguments,Window_SetDialogReturnValue,Window_CloseDialog,Window_GetElement];function CancelEventIfNotDigit(){var Ox15e=Event_GetKeyCode();if(Browser_IsWinIE()){if((Ox15e>=48)&&(Ox15e<=57)){return true;} ;} else {if((Ox15e<48||Ox15e>57)&&Ox15e!=8&&(Ox15e<35||Ox15e>37)&&Ox15e!=39&&Ox15e!=46){} else {return true;} ;} ;return Event_CancelEvent();} ;window[OxObc24[87]]=function window_onerror(Ox160,Ox3b,Ox135){if(!__ISDEBUG){return false;} ;alert(Ox160+OxObc24[22]+Ox3b+OxObc24[22]+Ox135+OxObc24[88]+GetStackTrace());return true;} ;function DialogHandleDblClick(){if(Event_IsCtrlKey()){window[OxObc24[90]][OxObc24[89]]=OxObc24[91]+window[OxObc24[90]][OxObc24[89]]+OxObc24[92]+ new Date().getTime();} ;if(Event_IsShiftKey()){window.open(window[OxObc24[90]].href,OxObc24[93]);} ;} ;function DialogHandleKeyDown(){var Ox163=Event_GetKeyCode();if(Ox163==116){window[OxObc24[90]].reload();} ;if(Ox163==27){Window_SetDialogReturnValue(window,false);Window_CloseDialog(window);} ;} ;Event_Attach(document,OxObc24[94],DialogHandleDblClick);Event_Attach(document,OxObc24[95],DialogHandleKeyDown);function Debug_ReportElements(Ox165){var Ox166={};var Ox167=[];function Ox168(Oxaa){if(!Oxaa){return ;} ;if(Ox166[Oxaa]){Ox167.push(OxObc24[96]);} ;Ox166[Oxaa]=true;Ox167.push(OxObc24[97]);Ox167.push(Oxaa);Ox167.push(OxObc24[98]);Ox167.push(Oxaa);Ox167.push(OxObc24[99]);Ox167.push(OxObc24[22]);} ;var arr=Element_GetAllElements(Ox165);for(var i=0;i<arr[OxObc24[30]];i++){var Ox3a=arr[i];Ox168(Ox3a.id);} ;var Oxed=Ox167.join(OxObc24[16]);window[OxObc24[101]].setData(OxObc24[100],Oxed);} ;if(document[OxObc24[102]]){var rowprops=[OxObc24[103],OxObc24[104],OxObc24[105],OxObc24[106]];for(var rowpropi=0;rowpropi<rowprops[OxObc24[30]];rowpropi++){try{HTMLElement[OxObc24[109]].__defineGetter__(rowprops[rowpropi], new Function(OxObc24[107]+rowprops[rowpropi]+OxObc24[108]));} catch(x){} ;} ;} ;function outerHTML(element){var attr;var Ox16d=element[OxObc24[110]];var Ox1b=OxObc24[111]+element[OxObc24[112]];for(var i=0;i<Ox16d[OxObc24[30]];i++){attr=Ox16d[i];if(attr[OxObc24[113]]){Ox1b+=OxObc24[114]+attr[OxObc24[115]]+OxObc24[116]+attr[OxObc24[117]]+OxObc24[118];} ;} ;if(!canHaveChildren(element)){return Ox1b+OxObc24[119];} ;return Ox1b+OxObc24[119]+element[OxObc24[120]]+OxObc24[121]+element[OxObc24[112]]+OxObc24[119];} ;function canHaveChildren(element){switch(element[OxObc24[112]]){case OxObc24[122]:;case OxObc24[123]:;case OxObc24[124]:;case OxObc24[125]:;case OxObc24[126]:;case OxObc24[127]:;case OxObc24[128]:;case OxObc24[129]:;case OxObc24[130]:;case OxObc24[131]:;case OxObc24[132]:;case OxObc24[133]:;case OxObc24[134]:return false;;} ;return true;} ;function RGBtoHex(Ox170,Ox171,Ox172){return toHex(Ox170)+toHex(Ox171)+toHex(Ox172);} ;function toHex(Ox174){if(Ox174==null){return OxObc24[135];} ;Ox174=parseInt(Ox174);if(Ox174==0||isNaN(Ox174)){return OxObc24[135];} ;Ox174=Math.max(0,Ox174);Ox174=Math.min(Ox174,255);Ox174=Math.round(Ox174);return OxObc24[136].charAt((Ox174-Ox174%16)/16)+OxObc24[136].charAt(Ox174%16);} ;var dec_pattern=/rgb\((\d{1,3})[,]\s*(\d{1,3})[,]\s*(\d{1,3})\)/gi;function revertColor(Ox177){if(Ox177.match(dec_pattern)){var Ox178=Ox177.replace(dec_pattern,function (Ox1b,Ox179,Ox17a,Ox17b){return (OxObc24[137]+RGBtoHex(Ox179,Ox17a,Ox17b)).toLowerCase();} );return Ox178;} ;return Ox177;} ;function isNull(Ox160){return  typeof Ox160==OxObc24[138]&&!Ox160;} ;function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxObc24[139]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxObc24[139]){return  new ActiveXObject(OxObc24[140]);} ;} catch(x){return null;} ;} ;function include(Ox17f,Ox180){var Ox181=document.getElementsByTagName(OxObc24[141]).item(0);var Ox182=document.getElementById(Ox17f);if(Ox182){Ox181.removeChild(Ox182);} ;var Ox183=document.createElement(OxObc24[142]);Ox183.setAttribute(OxObc24[143],OxObc24[144]);Ox183.setAttribute(OxObc24[145],OxObc24[146]);Ox183.setAttribute(OxObc24[147],Ox180);Ox183.setAttribute(OxObc24[148],Ox17f);Ox181.appendChild(Ox183);} ;function SelectColor(Ox185,Ox186){if(Ox185.getAttribute(OxObc24[149])==OxObc24[150]){return ;} ;var Ox187=OxObc24[151];if(!window[OxObc24[152]]){var Ox188=CreateXMLHttpRequest();if(Ox188){Ox188.open(OxObc24[153],Ox187,true,null,null);Ox188[OxObc24[154]]=function (){if(Ox188[OxObc24[155]]<4){return ;} ;var Ox15e=Ox188[OxObc24[156]];Ox188=null;eval(Ox15e+OxObc24[157]);Ox189();} ;Ox188.send(OxObc24[16]);} else {include(OxObc24[158],Ox187);setTimeout(Ox189,100);} ;} else {Ox189();} ;function Ox189(){Ox185.setAttribute(OxObc24[149],OxObc24[150]);Ox185[OxObc24[117]]=OxObc24[16];window.CuteEditorColorPickerInitialize(Ox185,window.editor);Ox185[OxObc24[159]]=function (Ox16){if(Ox16!=null&&Ox16!==false){Ox185[OxObc24[117]]=Ox16.toUpperCase();Ox185[OxObc24[75]][OxObc24[77]]=Ox16;if(Ox186){Ox186[OxObc24[75]][OxObc24[77]]=Ox16;} ;if(window[OxObc24[160]]){window.FireUIChanged();} ;} ;} ;Ox185[OxObc24[161]]=Ox185[OxObc24[162]];if(Ox186){Ox186[OxObc24[161]]=function (){setTimeout(Ox185.popupColorPicker,100);} ;} ;setTimeout(Ox185.popupColorPicker,100);} ;} ;function row_click(src){} ;function do_Close(){Window_SetDialogReturnValue(window,null);Window_CloseDialog(window);} ;