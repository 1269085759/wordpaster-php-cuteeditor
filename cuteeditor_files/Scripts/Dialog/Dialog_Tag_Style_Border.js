var OxO107e=["SetStyle","length","","GetStyle","GetText",":",";","cssText","div_selector_event","div_selector","sel_part","tb_margin","sel_margin_unit","tb_padding","sel_padding_unit","tb_border","sel_border_unit","sel_border","sel_style","inp_color","inp_color_Preview","outer","div_demo","offsetWidth","offsetHeight","Top","Left","Bottom","Right","onmousemove","runtimeStyle","border","4px solid red","style","onmouseout","onclick","value","onchange","disabled","selectedIndex","4px solid blue","-","Color"," ","#7f7c75","backgroundColor","Style","Width","options","margin","padding"];function pause(Ox37b){var Ox2f9= new Date();var Ox37c=Ox2f9.getTime()+Ox37b;while(true){Ox2f9= new Date();if(Ox2f9.getTime()>Ox37c){return ;} ;} ;} ;function StyleClass(Oxed){var Ox37e=[];var Ox37f={};if(Oxed){Ox384();} ;this[OxO107e[0]]=function SetStyle(name,Ox7,Ox381){name=name.toLowerCase();for(var i=0;i<Ox37e[OxO107e[1]];i++){if(Ox37e[i]==name){break ;} ;} ;Ox37e[i]=name;Ox37f[name]=Ox7?(Ox7+(Ox381||OxO107e[2])):OxO107e[2];} ;this[OxO107e[3]]=function GetStyle(name){name=name.toLowerCase();return Ox37f[name]||OxO107e[2];} ;this[OxO107e[4]]=function Ox383(){var Oxed=OxO107e[2];for(var i=0;i<Ox37e[OxO107e[1]];i++){var Ox8d=Ox37e[i];var p=Ox37f[Ox8d];if(p){Oxed+=Ox8d+OxO107e[5]+p+OxO107e[6];} ;} ;return Oxed;} ;function Ox384(){var arr=Oxed.split(OxO107e[6]);for(var i=0;i<arr[OxO107e[1]];i++){var p=arr[i].split(OxO107e[5]);var Ox8d=p[0].replace(/^\s+/g,OxO107e[2]).replace(/\s+$/g,OxO107e[2]).toLowerCase();Ox37e[Ox37e[OxO107e[1]]]=Ox8d;Ox37f[Ox8d]=p[1];} ;} ;} ;function GetStyle(Ox21,name){return  new StyleClass(Ox21.cssText).GetStyle(name);} ;function SetStyle(Ox21,name,Ox7,Ox385){var Ox386= new StyleClass(Ox21.cssText);Ox386.SetStyle(name,Ox7,Ox385);Ox21[OxO107e[7]]=Ox386.GetText();} ;function ParseFloatToString(Ox1b){var Ox84=parseFloat(Ox1b);if(isNaN(Ox84)){return OxO107e[2];} ;return Ox84+OxO107e[2];} ;var div_selector_event=Window_GetElement(window,OxO107e[8],true);var div_selector=Window_GetElement(window,OxO107e[9],true);var sel_part=Window_GetElement(window,OxO107e[10],true);var tb_margin=Window_GetElement(window,OxO107e[11],true);var sel_margin_unit=Window_GetElement(window,OxO107e[12],true);var tb_padding=Window_GetElement(window,OxO107e[13],true);var sel_padding_unit=Window_GetElement(window,OxO107e[14],true);var tb_border=Window_GetElement(window,OxO107e[15],true);var sel_border_unit=Window_GetElement(window,OxO107e[16],true);var sel_border=Window_GetElement(window,OxO107e[17],true);var sel_style=Window_GetElement(window,OxO107e[18],true);var inp_color=Window_GetElement(window,OxO107e[19],true);var inp_color_Preview=Window_GetElement(window,OxO107e[20],true);var outer=Window_GetElement(window,OxO107e[21],true);var div_demo=Window_GetElement(window,OxO107e[22],true);function GetPartFromEvent(){var src=Event_GetSrcElement();var Oxf1=Event_GetOffsetX();var Oxbf=Event_GetOffsetY();if(src==div_selector){Oxf1+=10;Oxbf+=10;} ;var Ox3d=15-Oxf1;var Oxae=Oxf1-(div_selector_event[OxO107e[23]]-15);var Ox3e=15-Oxbf;var Ox3b=Oxbf-(div_selector_event[OxO107e[24]]-15);if(Ox3d>0){if(Ox3e>0){return Ox3d>Ox3e?OxO107e[25]:OxO107e[26];} ;if(Ox3b>0){return Ox3d>Ox3b?OxO107e[27]:OxO107e[26];} ;return OxO107e[26];} ;if(Oxae>0){if(Ox3e>0){return Oxae>Ox3e?OxO107e[25]:OxO107e[28];} ;if(Ox3b>0){return Oxae>Ox3b?OxO107e[27]:OxO107e[28];} ;return OxO107e[28];} ;if(Ox3e>0){return OxO107e[25];} ;if(Ox3b>0){return OxO107e[27];} ;return OxO107e[2];} ;div_selector_event[OxO107e[29]]=function div_selector_event_onmousemove(){var Ox39f=GetPartFromEvent();if(Browser_IsWinIE()){div_selector[OxO107e[30]][OxO107e[7]]=OxO107e[2];div_selector[OxO107e[30]][OxO107e[31]+Ox39f]=OxO107e[32];} else {div_selector[OxO107e[33]][OxO107e[7]]=OxO107e[2];div_selector[OxO107e[33]][OxO107e[31]+Ox39f]=OxO107e[32];} ;} ;div_selector_event[OxO107e[34]]=function div_selector_event_onmouseout(){if(Browser_IsWinIE()){div_selector[OxO107e[30]][OxO107e[7]]=OxO107e[2];} else {div_selector[OxO107e[33]][OxO107e[7]]=OxO107e[2];} ;} ;div_selector_event[OxO107e[35]]=function div_selector_event_onclick(){sel_part[OxO107e[36]]=GetPartFromEvent();SyncToViewInternal();UpdateState();} ;sel_part[OxO107e[37]]=function sel_part_onchange(){SyncToViewInternal();UpdateState();} ;UpdateState=function UpdateState_Border(){tb_border[OxO107e[38]]=sel_border_unit[OxO107e[38]]=(sel_border[OxO107e[39]]>0);div_demo[OxO107e[33]][OxO107e[7]]=element[OxO107e[33]][OxO107e[7]];div_selector[OxO107e[33]][OxO107e[7]]=OxO107e[2];div_selector[OxO107e[33]][OxO107e[31]+(sel_part[OxO107e[36]]||OxO107e[2])]=OxO107e[40];} ;SyncToView=function SyncToView_Border(){var Ox39f=sel_part[OxO107e[36]];var Ox3a0=Ox39f?OxO107e[41]+Ox39f:Ox39f;if(Browser_IsWinIE()){inp_color[OxO107e[36]]=element[OxO107e[33]][OxO107e[31]+Ox39f+OxO107e[42]];} else {var arr=revertColor(element[OxO107e[33]][OxO107e[31]+Ox39f+OxO107e[42]]).split(OxO107e[43]);if(arr[0]!=OxO107e[44]){inp_color[OxO107e[36]]=arr[0];} ;} ;inp_color[OxO107e[33]][OxO107e[45]]=inp_color[OxO107e[36]];sel_style[OxO107e[36]]=element[OxO107e[33]][OxO107e[31]+Ox39f+OxO107e[46]];sel_border[OxO107e[36]]=element[OxO107e[33]][OxO107e[31]+Ox39f+OxO107e[47]];var Ox4b0=element[OxO107e[33]][OxO107e[31]+Ox39f+OxO107e[47]];tb_border[OxO107e[36]]=ParseFloatToString(Ox4b0);if(tb_border[OxO107e[36]]){for(var i=0;i<sel_border_unit[OxO107e[48]][OxO107e[1]];i++){var Ox2b=sel_border_unit[OxO107e[48]][i][OxO107e[36]];if(Ox2b&&Ox4b0.indexOf(Ox2b)!=-1){sel_border_unit[OxO107e[39]]=i;break ;} ;} ;} ;var Ox4b1=element[OxO107e[33]][OxO107e[49]+Ox39f];tb_margin[OxO107e[36]]=ParseFloatToString(Ox4b1);if(tb_margin[OxO107e[36]]){for(var i=0;i<sel_margin_unit[OxO107e[48]][OxO107e[1]];i++){var Ox2b=sel_margin_unit[OxO107e[48]][i][OxO107e[36]];if(Ox2b&&Ox4b1.indexOf(Ox2b)!=-1){sel_margin_unit[OxO107e[39]]=i;break ;} ;} ;} ;var Ox4b2=element[OxO107e[33]][OxO107e[50]+Ox39f];tb_padding[OxO107e[36]]=ParseFloatToString(Ox4b2);if(tb_padding[OxO107e[36]]){for(var i=0;i<sel_padding_unit[OxO107e[48]][OxO107e[1]];i++){var Ox2b=sel_padding_unit[OxO107e[48]][i][OxO107e[36]];if(Ox2b&&Ox4b2.indexOf(Ox2b)!=-1){sel_padding_unit[OxO107e[39]]=i;break ;} ;} ;} ;} ;SyncTo=function SyncTo_Border(element){var Ox39f=sel_part[OxO107e[36]];var Ox3a0=Ox39f?OxO107e[41]+Ox39f:Ox39f;var Ox3a1=OxO107e[2];if(sel_border[OxO107e[39]]>0){Ox3a1=sel_border[OxO107e[36]];} else {if(ParseFloatToString(tb_border.value)){Ox3a1=ParseFloatToString(tb_border.value)+sel_border_unit[OxO107e[36]];} else {Ox3a1=OxO107e[2];} ;} ;var Ox16=inp_color[OxO107e[36]]||OxO107e[2];var Ox21=sel_style[OxO107e[36]]||OxO107e[2];if(Ox3a1||Ox21){SetStyle(element.style,OxO107e[31]+Ox3a0,Ox3a1+OxO107e[43]+Ox21+OxO107e[43]+Ox16);} else {SetStyle(element.style,OxO107e[31]+Ox3a0,OxO107e[2]);} ;SetStyle(element.style,OxO107e[49]+Ox3a0,ParseFloatToString(tb_margin.value),sel_margin_unit.value);SetStyle(element.style,OxO107e[50]+Ox3a0,ParseFloatToString(tb_padding.value),sel_padding_unit.value);} ;inp_color[OxO107e[35]]=inp_color_Preview[OxO107e[35]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_Preview);} ;