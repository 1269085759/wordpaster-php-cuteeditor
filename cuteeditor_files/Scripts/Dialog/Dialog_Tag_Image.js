var OxO8b9e=["inp_src","btnbrowse","AlternateText","inp_id","longDesc","Align","optNotSet","optLeft","optRight","optTexttop","optAbsMiddle","optBaseline","optAbsBottom","optBottom","optMiddle","optTop","Border","bordercolor","bordercolor_Preview","inp_width","imgLock","inp_height","constrain_prop","HSpace","VSpace","outer","img_demo","onclick","src","width","height","value","cssText","style","","src_cetemp","id","vspace","hspace","border","borderColor"," ","backgroundColor","align","alt","ValidNumber","ValidID","longdesc","checked","../Images/locked.gif","../Images/1x1.gif","length"];var inp_src=Window_GetElement(window,OxO8b9e[0],true);var btnbrowse=Window_GetElement(window,OxO8b9e[1],true);var AlternateText=Window_GetElement(window,OxO8b9e[2],true);var inp_id=Window_GetElement(window,OxO8b9e[3],true);var longDesc=Window_GetElement(window,OxO8b9e[4],true);var Align=Window_GetElement(window,OxO8b9e[5],true);var optNotSet=Window_GetElement(window,OxO8b9e[6],true);var optLeft=Window_GetElement(window,OxO8b9e[7],true);var optRight=Window_GetElement(window,OxO8b9e[8],true);var optTexttop=Window_GetElement(window,OxO8b9e[9],true);var optAbsMiddle=Window_GetElement(window,OxO8b9e[10],true);var optBaseline=Window_GetElement(window,OxO8b9e[11],true);var optAbsBottom=Window_GetElement(window,OxO8b9e[12],true);var optBottom=Window_GetElement(window,OxO8b9e[13],true);var optMiddle=Window_GetElement(window,OxO8b9e[14],true);var optTop=Window_GetElement(window,OxO8b9e[15],true);var Border=Window_GetElement(window,OxO8b9e[16],true);var bordercolor=Window_GetElement(window,OxO8b9e[17],true);var bordercolor_Preview=Window_GetElement(window,OxO8b9e[18],true);var inp_width=Window_GetElement(window,OxO8b9e[19],true);var imgLock=Window_GetElement(window,OxO8b9e[20],true);var inp_height=Window_GetElement(window,OxO8b9e[21],true);var constrain_prop=Window_GetElement(window,OxO8b9e[22],true);var HSpace=Window_GetElement(window,OxO8b9e[23],true);var VSpace=Window_GetElement(window,OxO8b9e[24],true);var outer=Window_GetElement(window,OxO8b9e[25],true);var img_demo=Window_GetElement(window,OxO8b9e[26],true);btnbrowse[OxO8b9e[27]]=function btnbrowse_onclick(){function Ox25b(Ox27){if(Ox27){function Actualsize(){var Ox2e4= new Image();Ox2e4[OxO8b9e[28]]=Ox27;if(Ox2e4[OxO8b9e[29]]>0&&Ox2e4[OxO8b9e[30]]>0){inp_width[OxO8b9e[31]]=Ox2e4[OxO8b9e[29]];inp_height[OxO8b9e[31]]=Ox2e4[OxO8b9e[30]];FireUIChanged();} else {setTimeout(Actualsize,400);} ;} ;inp_src[OxO8b9e[31]]=Ox27;setTimeout(Actualsize,400);} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox25b,inp_src.value,inp_src);} else {editor.ShowSelectImageDialog(Ox25b,inp_src.value);} ;} ;UpdateState=function UpdateState_Image(){img_demo[OxO8b9e[33]][OxO8b9e[32]]=element[OxO8b9e[33]][OxO8b9e[32]];if(Browser_IsWinIE()){img_demo.mergeAttributes(element);} ;if(element[OxO8b9e[28]]){img_demo[OxO8b9e[28]]=element[OxO8b9e[28]];} else {img_demo.removeAttribute(OxO8b9e[28]);} ;} ;SyncToView=function SyncToView_Image(){var src;src=element.getAttribute(OxO8b9e[28])+OxO8b9e[34];if(element.getAttribute(OxO8b9e[35])){src=element.getAttribute(OxO8b9e[35])+OxO8b9e[34];} ;inp_src[OxO8b9e[31]]=src;inp_width[OxO8b9e[31]]=element[OxO8b9e[29]];inp_height[OxO8b9e[31]]=element[OxO8b9e[30]];inp_id[OxO8b9e[31]]=element[OxO8b9e[36]];if(element[OxO8b9e[37]]<=0){VSpace[OxO8b9e[31]]=OxO8b9e[34];} else {VSpace[OxO8b9e[31]]=element[OxO8b9e[37]];} ;if(element[OxO8b9e[38]]<=0){HSpace[OxO8b9e[31]]=OxO8b9e[34];} else {HSpace[OxO8b9e[31]]=element[OxO8b9e[38]];} ;Border[OxO8b9e[31]]=element[OxO8b9e[39]];if(Browser_IsWinIE()){bordercolor[OxO8b9e[31]]=element[OxO8b9e[33]][OxO8b9e[40]];} else {var arr=revertColor(element[OxO8b9e[33]].borderColor).split(OxO8b9e[41]);bordercolor[OxO8b9e[31]]=arr[0];} ;bordercolor[OxO8b9e[33]][OxO8b9e[42]]=bordercolor[OxO8b9e[31]]||OxO8b9e[34];bordercolor[OxO8b9e[33]][OxO8b9e[42]]=bordercolor[OxO8b9e[31]];bordercolor_Preview[OxO8b9e[33]][OxO8b9e[42]]=bordercolor[OxO8b9e[31]];Align[OxO8b9e[31]]=element[OxO8b9e[43]];AlternateText[OxO8b9e[31]]=element[OxO8b9e[44]];longDesc[OxO8b9e[31]]=element[OxO8b9e[4]];} ;SyncTo=function SyncTo_Image(element){element[OxO8b9e[28]]=inp_src[OxO8b9e[31]];element.setAttribute(OxO8b9e[35],inp_src.value);element[OxO8b9e[39]]=Border[OxO8b9e[31]];element[OxO8b9e[38]]=HSpace[OxO8b9e[31]];element[OxO8b9e[37]]=VSpace[OxO8b9e[31]];try{element[OxO8b9e[29]]=inp_width[OxO8b9e[31]];element[OxO8b9e[30]]=inp_height[OxO8b9e[31]];} catch(er){alert(CE_GetStr(OxO8b9e[45]));return false;} ;if(element[OxO8b9e[33]][OxO8b9e[29]]||element[OxO8b9e[33]][OxO8b9e[30]]){try{element[OxO8b9e[33]][OxO8b9e[29]]=inp_width[OxO8b9e[31]];element[OxO8b9e[33]][OxO8b9e[30]]=inp_height[OxO8b9e[31]];} catch(er){alert(CE_GetStr(OxO8b9e[45]));return false;} ;} ;var Ox276=/[^a-z\d]/i;if(Ox276.test(inp_id.value)){alert(CE_GetStr(OxO8b9e[46]));return ;} ;element[OxO8b9e[36]]=inp_id[OxO8b9e[31]];element[OxO8b9e[43]]=Align[OxO8b9e[31]];element[OxO8b9e[44]]=AlternateText[OxO8b9e[31]];element[OxO8b9e[4]]=longDesc[OxO8b9e[31]];element[OxO8b9e[33]][OxO8b9e[40]]=bordercolor[OxO8b9e[31]];if(element[OxO8b9e[47]]==OxO8b9e[34]||element[OxO8b9e[47]]==null){element.removeAttribute(OxO8b9e[47]);} ;if(element[OxO8b9e[4]]==OxO8b9e[34]||element[OxO8b9e[4]]==null){element.removeAttribute(OxO8b9e[4]);} ;if(element[OxO8b9e[29]]==0){element.removeAttribute(OxO8b9e[29]);} ;if(element[OxO8b9e[30]]==0){element.removeAttribute(OxO8b9e[30]);} ;if(element[OxO8b9e[38]]==OxO8b9e[34]){element.removeAttribute(OxO8b9e[38]);} ;if(element[OxO8b9e[37]]==OxO8b9e[34]){element.removeAttribute(OxO8b9e[37]);} ;if(element[OxO8b9e[36]]==OxO8b9e[34]){element.removeAttribute(OxO8b9e[36]);} ;if(element[OxO8b9e[43]]==OxO8b9e[34]){element.removeAttribute(OxO8b9e[43]);} ;if(element[OxO8b9e[39]]==OxO8b9e[34]){element.removeAttribute(OxO8b9e[39]);} ;} ;function toggleConstrains(){if(constrain_prop[OxO8b9e[48]]){imgLock[OxO8b9e[28]]=OxO8b9e[49];checkConstrains(OxO8b9e[29]);} else {imgLock[OxO8b9e[28]]=OxO8b9e[50];} ;} ;var checkingConstrains=false;function checkConstrains(Ox2fd){if(checkingConstrains){return ;} ;checkingConstrains=true;try{var Ox84,Ox237;if(constrain_prop[OxO8b9e[48]]){var Ox2e4= new Image();Ox2e4[OxO8b9e[28]]=inp_src[OxO8b9e[31]];var Ox2fe=Ox2e4[OxO8b9e[29]];var Ox2ff=Ox2e4[OxO8b9e[30]];if((Ox2fe>0)&&(Ox2ff>0)){var Ox33=inp_width[OxO8b9e[31]];var Ox261=inp_height[OxO8b9e[31]];if(Ox2fd==OxO8b9e[29]){if(Ox33[OxO8b9e[51]]==0||isNaN(Ox33)){inp_width[OxO8b9e[31]]=OxO8b9e[34];inp_height[OxO8b9e[31]]=OxO8b9e[34];} else {Ox261=parseInt(Ox33*Ox2ff/Ox2fe);inp_height[OxO8b9e[31]]=Ox261;} ;} ;if(Ox2fd==OxO8b9e[30]){if(Ox261[OxO8b9e[51]]==0||isNaN(Ox261)){inp_width[OxO8b9e[31]]=OxO8b9e[34];inp_height[OxO8b9e[31]]=OxO8b9e[34];} else {Ox33=parseInt(Ox261*Ox2fe/Ox2ff);inp_width[OxO8b9e[31]]=Ox33;} ;} ;} ;} ;} finally{checkingConstrains=false;} ;} ;bordercolor[OxO8b9e[27]]=bordercolor_Preview[OxO8b9e[27]]=function bordercolor_onclick(){SelectColor(bordercolor,bordercolor_Preview);} ;