var OxOcf08=["ua","userAgent","isOpera","opera","isSafari","safari","isGecko","gecko","isWinIE","msie","compatMode","document","CSS1Compat","head","script","language","javascript","type","text/javascript","src","id","undefined","Microsoft.XMLHTTP","readyState","onreadystatechange","","length","all","childNodes","nodeType","\x0D\x0A","caller","onchange","oninitialized","command","commandui","commandvalue","returnValue","oncommand","string","_fireEventFunction","event","parentNode","_IsCuteEditor","True","readOnly","_IsRichDropDown","null","value","selectedIndex","nodeName","TR","cells","display","style","nextSibling","innerHTML","\x3Cimg src=\x22","/Images/t-minus.gif\x22\x3E","onclick","CuteEditor_CollapseTreeDropDownItem(this,\x22","\x22)","onmousedown","none","/Images/t-plus.gif\x22\x3E","CuteEditor_ExpandTreeDropDownItem(this,\x22","contains","UNSELECTABLE","on","tabIndex","-1","//TODO: event not found? throw error ?","contentWindow","contentDocument","parentWindow","frames","frameElement","//TODO:frame contentWindow not found?","preventDefault","arguments","parent","top","opener","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","cancelBubble","stopPropagation","CuteEditor_GetEditor(this).ExecImageCommand(this.getAttribute(\x27Command\x27),this.getAttribute(\x27CommandUI\x27),this.getAttribute(\x27CommandArgument\x27),this)","CuteEditor_GetEditor(this).PostBack(this.getAttribute(\x27Command\x27))","this.onmouseout();CuteEditor_GetEditor(this).DropMenu(this.getAttribute(\x27Group\x27),this)","ResourceDir","Theme","/Themes/","/Images/all.png","/Images/blank2020.png","IMG","alt","title","Command","Group","ThemeIndex","width","20px","height","backgroundImage","url(",")","backgroundPosition","0 -","px","onload","className","separator","CuteEditorButton","onmouseover","CuteEditor_ButtonCommandOver(this)","onmouseout","CuteEditor_ButtonCommandOut(this)","CuteEditor_ButtonCommandDown(this)","onmouseup","CuteEditor_ButtonCommandUp(this)","oncontextmenu","ondragstart","ondblclick","_ToolBarID","_CodeViewToolBarID","_FrameID"," CuteEditorFrame"," CuteEditorToolbar","cursor","no-drop","ActiveTab","Edit","Code","View","buttonInitialized","isover","CuteEditorButtonOver","CuteEditorButtonDown","CuteEditorDown","border","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","cmd_fromfullpage","(","href","location",",DanaInfo=",",","+","scriptProperties","GetScriptProperty","/Scripts/Opera_Implementation/CuteEditorImplementation.js","CuteEditorImplementation","function","GET","responseText"," \x0D\x0A window.CuteEditorImplementation=CuteEditorImplementation","block","contentEditable","body"," \x3Cbr /\x3E ","designMode","InitializeCode","CuteEditorInitialize"];var _Browser_TypeInfo=null;function Browser__InitType(){if(_Browser_TypeInfo!=null){return ;} ;var Ox118={};Ox118[OxOcf08[0]]=navigator[OxOcf08[1]].toLowerCase();Ox118[OxOcf08[2]]=(Ox118[OxOcf08[0]].indexOf(OxOcf08[3])>-1);Ox118[OxOcf08[4]]=(Ox118[OxOcf08[0]].indexOf(OxOcf08[5])>-1);Ox118[OxOcf08[6]]=(!Ox118[OxOcf08[2]]&&Ox118[OxOcf08[0]].indexOf(OxOcf08[7])>-1);Ox118[OxOcf08[8]]=(!Ox118[OxOcf08[2]]&&Ox118[OxOcf08[0]].indexOf(OxOcf08[9])>-1);_Browser_TypeInfo=Ox118;} ;Browser__InitType();function Browser_IsWinIE(){return _Browser_TypeInfo[OxOcf08[8]];} ;function Browser_IsGecko(){return _Browser_TypeInfo[OxOcf08[6]];} ;function Browser_IsOpera(){return _Browser_TypeInfo[OxOcf08[2]];} ;function Browser_IsSafari(){return _Browser_TypeInfo[OxOcf08[4]];} ;function Browser_UseIESelection(){return _Browser_TypeInfo[OxOcf08[8]];} ;function Browser_IsCSS1Compat(){return window[OxOcf08[11]][OxOcf08[10]]==OxOcf08[12];} ;function include(Ox17f,Ox180){var Ox181=document.getElementsByTagName(OxOcf08[13]).item(0);var Ox182=document.getElementById(Ox17f);if(Ox182){Ox181.removeChild(Ox182);} ;var Ox183=document.createElement(OxOcf08[14]);Ox183.setAttribute(OxOcf08[15],OxOcf08[16]);Ox183.setAttribute(OxOcf08[17],OxOcf08[18]);Ox183.setAttribute(OxOcf08[19],Ox180);Ox183.setAttribute(OxOcf08[20],Ox17f);Ox181.appendChild(Ox183);} ;function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxOcf08[21]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxOcf08[21]){return  new ActiveXObject(OxOcf08[22]);} ;} catch(x){return null;} ;} ;function LoadXMLAsync(Ox962,Ox180,Ox126,Ox963){var Ox7ac=CreateXMLHttpRequest();function Ox964(){if(Ox7ac[OxOcf08[23]]!=4){return ;} ;Ox7ac[OxOcf08[24]]= new Function();var Ox188=Ox7ac;Ox7ac=null;if(Ox126){Ox126(Ox188);} ;} ;Ox7ac[OxOcf08[24]]=Ox964;Ox7ac.open(Ox962,Ox180,true);Ox7ac.send(Ox963||OxOcf08[25]);} ;function Element_GetAllElements(p){var arr=[];if(Browser_IsWinIE()){for(var i=0;i<p[OxOcf08[27]][OxOcf08[26]];i++){arr.push(p[OxOcf08[27]].item(i));} ;return arr;} ;Ox134(p);function Ox134(Ox132){var Ox135=Ox132[OxOcf08[28]];var Ox3d=Ox135[OxOcf08[26]];for(var i=0;i<Ox3d;i++){var Ox8d=Ox135.item(i);if(Ox8d[OxOcf08[29]]!=1){continue ;} ;arr.push(Ox8d);Ox134(Ox8d);} ;} ;return arr;} ;var __ISDEBUG=false;function Debug_Todo(msg){if(!__ISDEBUG){return ;} ;throw ( new Error(msg+OxOcf08[30]+Debug_Todo[OxOcf08[31]]));} ;function Window_GetElement(Ox90,Oxaa,Ox131){var Ox132=Ox90[OxOcf08[11]].getElementById(Oxaa);if(Ox132){return Ox132;} ;var Ox1f=Ox90[OxOcf08[11]].getElementsByName(Oxaa);if(Ox1f[OxOcf08[26]]>0){return Ox1f.item(0);} ;return null;} ;function CuteEditor_AddMainMenuItems(Ox54b){} ;function CuteEditor_AddDropMenuItems(Ox54b,Ox552){} ;function CuteEditor_AddTagMenuItems(Ox54b,Ox554){} ;function CuteEditor_AddVerbMenuItems(Ox54b,Ox554){} ;function CuteEditor_OnInitialized(editor){} ;function CuteEditor_OnCommand(editor,Ox558,Ox559,Ox7){} ;function CuteEditor_OnChange(editor){} ;function CuteEditor_FilterCode(editor,Ox15e){return Ox15e;} ;function CuteEditor_FilterHTML(editor,Ox177){return Ox177;} ;function CuteEditor_FireChange(editor){window.CuteEditor_OnChange(editor);CuteEditor_FireEvent(editor,OxOcf08[32],null);} ;function CuteEditor_FireInitialized(editor){window.CuteEditor_OnInitialized(editor);CuteEditor_FireEvent(editor,OxOcf08[33],null);} ;function CuteEditor_FireCommand(editor,Ox558,Ox559,Ox7){var Ox27=window.CuteEditor_OnCommand(editor,Ox558,Ox559,Ox7);if(Ox27==true){return true;} ;var Ox560={};Ox560[OxOcf08[34]]=Ox558;Ox560[OxOcf08[35]]=Ox559;Ox560[OxOcf08[36]]=Ox7;Ox560[OxOcf08[37]]=true;CuteEditor_FireEvent(editor,OxOcf08[38],Ox560);if(Ox560[OxOcf08[37]]==false){return true;} ;} ;function CuteEditor_FireEvent(editor,Ox562,Ox563){if(Ox563==null){Ox563={};} ;var Ox564=editor.getAttribute(Ox562);if(Ox564){if( typeof (Ox564)==OxOcf08[39]){editor[OxOcf08[40]]= new Function(OxOcf08[41],Ox564);} else {editor[OxOcf08[40]]=Ox564;} ;editor._fireEventFunction(Ox563);} ;} ;function CuteEditor_GetEditor(element){for(var Ox3a=element;Ox3a!=null;Ox3a=Ox3a[OxOcf08[42]]){if(Ox3a.getAttribute(OxOcf08[43])==OxOcf08[44]){return Ox3a;} ;} ;return null;} ;function CuteEditor_DropDownCommand(element,Ox966){var editor=CuteEditor_GetEditor(element);if(editor[OxOcf08[45]]){return ;} ;if(element.getAttribute(OxOcf08[46])==OxOcf08[44]){var Ox2b=element.GetValue();if(Ox2b==OxOcf08[47]){Ox2b=OxOcf08[25];} ;var Oxed=element.GetText();if(Oxed==OxOcf08[47]){Oxed=OxOcf08[25];} ;element.SetSelectedIndex(0);editor.ExecCommand(Ox966,false,Ox2b,Oxed);} else {if(element[OxOcf08[48]]){var Ox2b=element[OxOcf08[48]];if(Ox2b==OxOcf08[47]){Ox2b=OxOcf08[25];} ;element[OxOcf08[49]]=0;editor.ExecCommand(Ox966,false,Ox2b,Oxed);} else {element[OxOcf08[49]]=0;} ;} ;editor.FocusDocument();} ;function CuteEditor_ExpandTreeDropDownItem(src,Ox638){var Oxcf=null;while(src!=null){if(src[OxOcf08[50]]==OxOcf08[51]){Oxcf=src;break ;} ;src=src[OxOcf08[42]];} ;var Oxd0=Oxcf[OxOcf08[52]].item(0);Oxcf[OxOcf08[55]][OxOcf08[54]][OxOcf08[53]]=OxOcf08[25];Oxd0[OxOcf08[56]]=OxOcf08[57]+Ox638+OxOcf08[58];Oxcf[OxOcf08[59]]= new Function(OxOcf08[60]+Ox638+OxOcf08[61]);Oxcf[OxOcf08[62]]= new Function(OxOcf08[60]+Ox638+OxOcf08[61]);} ;function CuteEditor_CollapseTreeDropDownItem(src,Ox638){var Oxcf=null;while(src!=null){if(src[OxOcf08[50]]==OxOcf08[51]){Oxcf=src;break ;} ;src=src[OxOcf08[42]];} ;var Oxd0=Oxcf[OxOcf08[52]].item(0);Oxcf[OxOcf08[55]][OxOcf08[54]][OxOcf08[53]]=OxOcf08[63];Oxd0[OxOcf08[56]]=OxOcf08[57]+Ox638+OxOcf08[64];Oxcf[OxOcf08[59]]= new Function(OxOcf08[65]+Ox638+OxOcf08[61]);Oxcf[OxOcf08[62]]= new Function(OxOcf08[65]+Ox638+OxOcf08[61]);} ;function Element_Contains(element,Ox68){if(!Browser_IsOpera()){if(element[OxOcf08[66]]){return element.contains(Ox68);} ;} ;for(;Ox68!=null;Ox68=Ox68[OxOcf08[42]]){if(element==Ox68){return true;} ;} ;return false;} ;function Element_SetUnselectable(element){element.setAttribute(OxOcf08[67],OxOcf08[68]);element.setAttribute(OxOcf08[69],OxOcf08[70]);var arr=Element_GetAllElements(element);var len=arr[OxOcf08[26]];if(!len){return ;} ;for(var i=0;i<len;i++){arr[i].setAttribute(OxOcf08[67],OxOcf08[68]);arr[i].setAttribute(OxOcf08[69],OxOcf08[70]);} ;} ;function Event_GetEvent(Ox138){Ox138=Event_FindEvent(Ox138);if(Ox138==null){Debug_Todo(OxOcf08[71]);} ;return Ox138;} ;function Frame_GetContentWindow(Ox246){if(Ox246[OxOcf08[72]]){return Ox246[OxOcf08[72]];} ;if(Ox246[OxOcf08[73]]){if(Ox246[OxOcf08[73]][OxOcf08[74]]){return Ox246[OxOcf08[73]][OxOcf08[74]];} ;} ;var Ox90;if(Ox246[OxOcf08[20]]){Ox90=window[OxOcf08[75]][Ox246[OxOcf08[20]]];if(Ox90){return Ox90;} ;} ;var len=window[OxOcf08[75]][OxOcf08[26]];for(var i=0;i<len;i++){Ox90=window[OxOcf08[75]][i];if(Ox90[OxOcf08[76]]==Ox246){return Ox90;} ;if(Ox90[OxOcf08[11]]==Ox246[OxOcf08[73]]){return Ox90;} ;} ;Debug_Todo(OxOcf08[77]);} ;function Array_IndexOf(arr,Ox13a){for(var i=0;i<arr[OxOcf08[26]];i++){if(arr[i]==Ox13a){return i;} ;} ;return -1;} ;function Array_Contains(arr,Ox13a){return Array_IndexOf(arr,Ox13a)!=-1;} ;function Event_FindEvent(Ox138){if(Ox138&&Ox138[OxOcf08[78]]){return Ox138;} ;if(Browser_IsGecko()){return Event_FindEvent_FindEventFromCallers();} else {if(window[OxOcf08[41]]){return window[OxOcf08[41]];} ;return Event_FindEvent_FindEventFromWindows();} ;return null;} ;function Event_FindEvent_FindEventFromCallers(){var Ox75=Event_GetEvent[OxOcf08[31]];for(var i=0;i<100;i++){if(!Ox75){break ;} ;var Ox138=Ox75[OxOcf08[79]][0];if(Ox138&&Ox138[OxOcf08[78]]){return Ox138;} ;Ox75=Ox75[OxOcf08[31]];} ;} ;function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox141(window);function Ox141(Ox90){if(Ox90==null){return null;} ;if(Ox90[OxOcf08[41]]){return Ox90[OxOcf08[41]];} ;if(Array_Contains(arr,Ox90)){return null;} ;arr.push(Ox90);var Ox142=[];if(Ox90[OxOcf08[80]]!=Ox90){Ox142.push(Ox90.parent);} ;if(Ox90[OxOcf08[81]]!=Ox90[OxOcf08[80]]){Ox142.push(Ox90.top);} ;if(Ox90[OxOcf08[82]]){Ox142.push(Ox90.opener);} ;for(var i=0;i<Ox90[OxOcf08[75]][OxOcf08[26]];i++){Ox142.push(Ox90[OxOcf08[75]][i]);} ;for(var i=0;i<Ox142[OxOcf08[26]];i++){try{var Ox138=Ox141(Ox142[i]);if(Ox138){return Ox138;} ;} catch(x){} ;} ;return null;} ;} ;function Event_GetSrcElement(Ox138){Ox138=Event_GetEvent(Ox138);if(Ox138[OxOcf08[83]]){return Ox138[OxOcf08[83]];} ;if(Ox138[OxOcf08[84]]){return Ox138[OxOcf08[84]];} ;Debug_Todo(OxOcf08[85]);return null;} ;function Event_GetFromElement(Ox138){Ox138=Event_GetEvent(Ox138);if(Ox138[OxOcf08[86]]){return Ox138[OxOcf08[86]];} ;if(Ox138[OxOcf08[87]]){return Ox138[OxOcf08[87]];} ;return null;} ;function Event_GetToElement(Ox138){Ox138=Event_GetEvent(Ox138);if(Ox138[OxOcf08[88]]){return Ox138[OxOcf08[88]];} ;if(Ox138[OxOcf08[87]]){return Ox138[OxOcf08[87]];} ;return null;} ;function Event_GetKeyCode(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOcf08[89]];} ;function Event_GetClientX(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOcf08[90]];} ;function Event_GetClientY(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOcf08[91]];} ;function Event_GetOffsetX(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOcf08[92]];} ;function Event_GetOffsetY(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOcf08[93]];} ;function Event_IsLeftButton(Ox138){Ox138=Event_GetEvent(Ox138);if(Browser_IsWinIE()){return Ox138[OxOcf08[94]]==1;} ;if(Browser_IsGecko()){return Ox138[OxOcf08[94]]==0;} ;return Ox138[OxOcf08[94]]==0;} ;function Event_IsCtrlKey(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOcf08[95]];} ;function Event_IsAltKey(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOcf08[96]];} ;function Event_IsShiftKey(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxOcf08[97]];} ;function Event_PreventDefault(Ox138){Ox138=Event_GetEvent(Ox138);Ox138[OxOcf08[37]]=false;if(Ox138[OxOcf08[78]]){Ox138.preventDefault();} ;} ;function Event_CancelBubble(Ox138){Ox138=Event_GetEvent(Ox138);Ox138[OxOcf08[98]]=true;if(Ox138[OxOcf08[99]]){Ox138.stopPropagation();} ;return false;} ;function Event_CancelEvent(Ox138){Ox138=Event_GetEvent(Ox138);Event_PreventDefault(Ox138);return Event_CancelBubble(Ox138);} ;function CuteEditor_BasicInitialize(editor){var Ox5c4=Browser_IsOpera();var Ox601= new Function(OxOcf08[100]);var Oxa57= new Function(OxOcf08[101]);var Ox96a= new Function(OxOcf08[102]);var Ox96b=editor.GetScriptProperty(OxOcf08[103]);var Ox96c=editor.GetScriptProperty(OxOcf08[104]);var Ox96d=Ox96b+OxOcf08[105]+Ox96c+OxOcf08[106];var Ox96e=Ox96b+OxOcf08[107];var images=editor.getElementsByTagName(OxOcf08[108]);var len=images[OxOcf08[26]];for(var i=0;i<len;i++){var img=images[i];if(img.getAttribute(OxOcf08[109])&&!img.getAttribute(OxOcf08[110])){img.setAttribute(OxOcf08[110],img.getAttribute(OxOcf08[109]));} ;var Ox1e=img.getAttribute(OxOcf08[111]);var Ox552=img.getAttribute(OxOcf08[112]);if(!(Ox1e||Ox552)){continue ;} ;var Ox96f=img.getAttribute(OxOcf08[113]);if(parseInt(Ox96f)>=0){img[OxOcf08[54]][OxOcf08[114]]=OxOcf08[115];img[OxOcf08[54]][OxOcf08[116]]=OxOcf08[115];img[OxOcf08[19]]=Ox96e;img[OxOcf08[54]][OxOcf08[117]]=OxOcf08[118]+Ox96d+OxOcf08[119];img[OxOcf08[54]][OxOcf08[120]]=OxOcf08[121]+(Ox96f*20)+OxOcf08[122];img[OxOcf08[54]][OxOcf08[53]]=OxOcf08[25];} ;if(!Ox1e&&!Ox552){if(Ox5c4){img[OxOcf08[123]]=CuteEditor_OperaHandleImageLoaded;} ;continue ;} ;if(img[OxOcf08[124]]!=OxOcf08[125]){img[OxOcf08[124]]=OxOcf08[126];img[OxOcf08[127]]= new Function(OxOcf08[128]);img[OxOcf08[129]]= new Function(OxOcf08[130]);img[OxOcf08[62]]= new Function(OxOcf08[131]);img[OxOcf08[132]]= new Function(OxOcf08[133]);} ;if(!img[OxOcf08[134]]){img[OxOcf08[134]]=Event_CancelEvent;} ;if(!img[OxOcf08[135]]){img[OxOcf08[135]]=Event_CancelEvent;} ;if(Ox1e){var Ox75=Ox601;if(img[OxOcf08[59]]==null){img[OxOcf08[59]]=Ox75;} ;if(img[OxOcf08[136]]==null){img[OxOcf08[136]]=Ox75;} ;} else {if(Ox552){if(img[OxOcf08[59]]==null){img[OxOcf08[59]]=Ox96a;} ;} ;} ;} ;var Ox66d=Window_GetElement(window,editor.GetScriptProperty(OxOcf08[137]),true);var Ox66e=Window_GetElement(window,editor.GetScriptProperty(OxOcf08[138]),true);var Ox66a=Window_GetElement(window,editor.GetScriptProperty(OxOcf08[139]),true);Ox66a[OxOcf08[124]]+=OxOcf08[140];Ox66d[OxOcf08[124]]+=OxOcf08[141];Ox66e[OxOcf08[124]]+=OxOcf08[141];Element_SetUnselectable(Ox66d);Element_SetUnselectable(Ox66e);try{editor[OxOcf08[54]][OxOcf08[142]]=OxOcf08[143];} catch(x){} ;var Ox6f3=editor.GetScriptProperty(OxOcf08[144]);switch(Ox6f3){case OxOcf08[145]:Ox66d[OxOcf08[54]][OxOcf08[53]]=OxOcf08[25];break ;;case OxOcf08[146]:Ox66e[OxOcf08[54]][OxOcf08[53]]=OxOcf08[25];break ;;case OxOcf08[147]:break ;;} ;} ;function CuteEditor_OperaHandleImageLoaded(){var img=this;if(img[OxOcf08[54]][OxOcf08[53]]){img[OxOcf08[54]][OxOcf08[53]]=OxOcf08[63];setTimeout(function Ox971(){img[OxOcf08[54]][OxOcf08[53]]=OxOcf08[25];} ,1);} ;} ;function CuteEditor_ButtonOver(element){if(!element[OxOcf08[148]]){element[OxOcf08[134]]=Event_CancelEvent;element[OxOcf08[129]]=CuteEditor_ButtonOut;element[OxOcf08[62]]=CuteEditor_ButtonDown;element[OxOcf08[132]]=CuteEditor_ButtonUp;Element_SetUnselectable(element);element[OxOcf08[148]]=true;} ;element[OxOcf08[149]]=true;element[OxOcf08[124]]=OxOcf08[150];} ;function CuteEditor_ButtonOut(){var element=this;element[OxOcf08[124]]=OxOcf08[126];element[OxOcf08[149]]=false;} ;function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this;element[OxOcf08[124]]=OxOcf08[151];} ;function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxOcf08[149]]){element[OxOcf08[124]]=OxOcf08[150];} else {element[OxOcf08[124]]=OxOcf08[152];} ;} ;function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxOcf08[148]]){element[OxOcf08[134]]=Event_CancelEvent;element[OxOcf08[129]]=CuteEditor_ColorPicker_ButtonOut;element[OxOcf08[62]]=CuteEditor_ColorPicker_ButtonDown;Element_SetUnselectable(element);element[OxOcf08[148]]=true;} ;element[OxOcf08[149]]=true;element[OxOcf08[54]][OxOcf08[153]]=OxOcf08[154];element[OxOcf08[54]][OxOcf08[155]]=OxOcf08[156];element[OxOcf08[54]][OxOcf08[157]]=OxOcf08[158];} ;function CuteEditor_ColorPicker_ButtonOut(){var element=this;element[OxOcf08[149]]=false;element[OxOcf08[54]][OxOcf08[153]]=OxOcf08[159];element[OxOcf08[54]][OxOcf08[155]]=OxOcf08[25];element[OxOcf08[54]][OxOcf08[157]]=OxOcf08[158];} ;function CuteEditor_ColorPicker_ButtonDown(){var element=this;element[OxOcf08[54]][OxOcf08[153]]=OxOcf08[160];element[OxOcf08[54]][OxOcf08[155]]=OxOcf08[25];element[OxOcf08[54]][OxOcf08[157]]=OxOcf08[158];} ;function CuteEditor_ButtonCommandOver(element){element[OxOcf08[149]]=true;if(element[OxOcf08[161]]){element[OxOcf08[124]]=OxOcf08[162];} else {element[OxOcf08[124]]=OxOcf08[150];} ;} ;function CuteEditor_ButtonCommandOut(element){element[OxOcf08[149]]=false;if(element[OxOcf08[163]]){element[OxOcf08[124]]=OxOcf08[164];} else {if(element[OxOcf08[161]]){element[OxOcf08[124]]=OxOcf08[162];} else {if(element[OxOcf08[20]]!=OxOcf08[165]){element[OxOcf08[124]]=OxOcf08[126];} ;} ;} ;} ;function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ;element[OxOcf08[124]]=OxOcf08[151];} ;function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxOcf08[161]]){element[OxOcf08[124]]=OxOcf08[162];return ;} ;if(element[OxOcf08[149]]){element[OxOcf08[124]]=OxOcf08[150];} else {if(element[OxOcf08[163]]){element[OxOcf08[124]]=OxOcf08[164];} else {element[OxOcf08[124]]=OxOcf08[126];} ;} ;} ;var CuteEditorGlobalFunctions=[CuteEditor_GetEditor,CuteEditor_ButtonOver,CuteEditor_ButtonOut,CuteEditor_ButtonDown,CuteEditor_ButtonUp,CuteEditor_ColorPicker_ButtonOver,CuteEditor_ColorPicker_ButtonOut,CuteEditor_ColorPicker_ButtonDown,CuteEditor_ButtonCommandOver,CuteEditor_ButtonCommandOut,CuteEditor_ButtonCommandDown,CuteEditor_ButtonCommandUp,CuteEditor_DropDownCommand,CuteEditor_ExpandTreeDropDownItem,CuteEditor_CollapseTreeDropDownItem,CuteEditor_OnInitialized,CuteEditor_OnCommand,CuteEditor_OnChange,CuteEditor_AddVerbMenuItems,CuteEditor_AddTagMenuItems,CuteEditor_AddMainMenuItems,CuteEditor_AddDropMenuItems,CuteEditor_FilterCode,CuteEditor_FilterHTML];function SetupCuteEditorGlobalFunctions(){for(var i=0;i<CuteEditorGlobalFunctions[OxOcf08[26]];i++){var Ox75=CuteEditorGlobalFunctions[i];var name=Ox75+OxOcf08[25];name=name.substr(8,name.indexOf(OxOcf08[166])-8).replace(/\s/g,OxOcf08[25]);if(!window[name]){window[name]=Ox75;} ;} ;} ;SetupCuteEditorGlobalFunctions();var __danainfo=null;var danaurl=window[OxOcf08[168]][OxOcf08[167]];var danapos=danaurl.indexOf(OxOcf08[169]);if(danapos!=-1){var pluspos1=danaurl.indexOf(OxOcf08[170],danapos+10);var pluspos2=danaurl.indexOf(OxOcf08[171],danapos+10);if(pluspos1!=-1&&pluspos1<pluspos2){pluspos2=pluspos1;} ;__danainfo=danaurl.substring(danapos,pluspos2)+OxOcf08[171];} ;function CuteEditor_GetScriptProperty(name){var Ox2b=this[OxOcf08[172]][name];if(Ox2b&&__danainfo){if(name==OxOcf08[103]){return Ox2b+__danainfo;} ;var Ox73b=this[OxOcf08[172]][OxOcf08[103]];if(Ox2b.substr(0,Ox73b.length)==Ox73b){return Ox73b+__danainfo+Ox2b.substring(Ox73b.length);} ;} ;return Ox2b;} ;function CuteEditor_SetScriptProperty(name,Ox2b){if(Ox2b==null){this[OxOcf08[172]][name]=null;} else {this[OxOcf08[172]][name]=String(Ox2b);} ;} ;function CuteEditorInitialize(Ox97c,Ox97d){var editor=Window_GetElement(window,Ox97c,true);editor[OxOcf08[172]]=Ox97d;editor[OxOcf08[173]]=CuteEditor_GetScriptProperty;var Ox66a=Window_GetElement(window,editor.GetScriptProperty(OxOcf08[139]),true);var editwin=Frame_GetContentWindow(Ox66a);var editdoc=editwin[OxOcf08[11]];var Ox97e=false;var Ox97f;var Ox980=false;var Ox981=editor.GetScriptProperty(OxOcf08[103])+OxOcf08[174];function Ox982(){if( typeof (window[OxOcf08[175]])==OxOcf08[176]){return ;} ;var Ox188=CreateXMLHttpRequest();Ox188.open(OxOcf08[177],Ox981,true,null,null);Ox188[OxOcf08[24]]=function (){if(Ox188[OxOcf08[23]]<4){return ;} ;var Ox15e=Ox188[OxOcf08[178]];Ox188=null;eval(Ox15e+OxOcf08[179]);if(Ox97e){Ox985();} ;} ;Ox188.send(OxOcf08[25]);} ;function Ox985(){if(Ox980){return ;} ;Ox980=true;Ox66a[OxOcf08[54]][OxOcf08[53]]=OxOcf08[180];if(Browser_IsOpera()){editdoc[OxOcf08[182]][OxOcf08[181]]=true;} else {if(Browser_IsGecko()){editdoc[OxOcf08[182]][OxOcf08[56]]=OxOcf08[183];} ;editdoc[OxOcf08[184]]=OxOcf08[68];} ;window.CuteEditorImplementation(editor);try{editor[OxOcf08[54]][OxOcf08[142]]=OxOcf08[25];} catch(x){} ;try{editdoc[OxOcf08[182]][OxOcf08[54]][OxOcf08[142]]=OxOcf08[25];} catch(x){} ;var Ox986=editor.GetScriptProperty(OxOcf08[185]);if(Ox986){editor.Eval(Ox986);} ;} ;function Ox987(){if(!Element_Contains(window[OxOcf08[11]].body,editor)){return ;} ;try{Ox66a=Window_GetElement(window,editor.GetScriptProperty(OxOcf08[139]),true);editwin=Frame_GetContentWindow(Ox66a);editdoc=editwin[OxOcf08[11]];var Oxbf=editdoc[OxOcf08[182]];} catch(x){setTimeout(Ox987,100);return ;} ;if(!editdoc[OxOcf08[182]]){setTimeout(Ox987,100);return ;} ;if(!Ox97e){Ox97e=true;setTimeout(Ox987,50);return ;} ;if( typeof (window[OxOcf08[175]])==OxOcf08[176]){Ox985();} else {} ;} ;CuteEditor_BasicInitialize(editor);Ox982();Ox987();} ;function CuteEditorInstallScriptCode(Ox8bc,Ox8bd){eval(Ox8bc);window[Ox8bd]=eval(Ox8bd);} ;window[OxOcf08[186]]=CuteEditorInitialize;