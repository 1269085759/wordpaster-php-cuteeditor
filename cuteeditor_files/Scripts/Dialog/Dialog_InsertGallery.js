var OxO5404=["browse_Img_gallery","TargetUrl","uploader1","src","upload.php?","\x26FP=","\x26Type=Image","value","lightyellow","0px","-3px","all","getElementById","\x3Cdiv id=\x22tooltipdiv\x22 style=\x22visibility:hidden;background-color:","\x22 \x3E\x3C/div\x3E","tooltipdiv","left","offsetLeft","offsetTop","offsetParent","style","top","visibility","compatMode","BackCompat","documentElement","body","rightedge","opera","scrollLeft","clientWidth","pageXOffset","innerWidth","contentmeasure","offsetWidth","x","scrollTop","clientHeight","pageYOffset","innerHeight","offsetHeight","y","innerHTML","visible","hidden","px","bottomedge","undefined","hidetip()","element","editor","editdoc","^[a-z]*:[/][/][^/]*","","width","height","IMG","border","alt","product","Gecko","src_cetemp","Edit"];var browse_Img_gallery=Window_GetElement(window,OxO5404[0],true);var TargetUrl=Window_GetElement(window,OxO5404[1],true);function SetUpload_imagePath(Ox2a7){if(document.getElementById(OxO5404[2])){document.getElementById(OxO5404[2])[OxO5404[3]]=OxO5404[4]+setting+OxO5404[5]+Ox2a7+OxO5404[6];} ;} ;function row_click(Ox2a7){TargetUrl[OxO5404[7]]=Ox2a7;} ;function cancel(){Window_CloseDialog(window);} ;var tipbgcolor=OxO5404[8];var disappeardelay=250;var vertical_offset=OxO5404[9];var horizontal_offset=OxO5404[10];var delayhidetimerid;var ie4=document[OxO5404[11]];var ns6=document[OxO5404[12]]&&!document[OxO5404[11]];if(ie4||ns6){document.write(OxO5404[13]+tipbgcolor+OxO5404[14]);var dropmenuobj=Window_GetElement(window,OxO5404[15],true);} ;function getposOffset(Ox2d4,Ox2d5){var Ox2d6=(Ox2d5==OxO5404[16])?Ox2d4[OxO5404[17]]:Ox2d4[OxO5404[18]];var Ox2d7=Ox2d4[OxO5404[19]];while(Ox2d7!=null){Ox2d6+=(Ox2d5==OxO5404[16])?Ox2d7[OxO5404[17]]:Ox2d7[OxO5404[18]];Ox2d7=Ox2d7[OxO5404[19]];} ;return Ox2d6;} ;function showhide(obj,Ox2d9,Ox2da){if(ie4||ns6){dropmenuobj[OxO5404[20]][OxO5404[16]]=dropmenuobj[OxO5404[20]][OxO5404[21]]=-500;} ;obj[OxO5404[22]]=Ox2d9;} ;function iecompattest(){return (document[OxO5404[23]]&&document[OxO5404[23]]!=OxO5404[24])?document[OxO5404[25]]:document[OxO5404[26]];} ;function clearbrowseredge(obj,Ox2dd){var Ox2de=(Ox2dd==OxO5404[27])?parseInt(horizontal_offset)*-1:parseInt(vertical_offset)*-1;if(Ox2dd==OxO5404[27]){var Ox2df=ie4&&!window[OxO5404[28]]?iecompattest()[OxO5404[29]]+iecompattest()[OxO5404[30]]-15:window[OxO5404[31]]+window[OxO5404[32]]-15;dropmenuobj[OxO5404[33]]=dropmenuobj[OxO5404[34]];if(Ox2df-dropmenuobj[OxO5404[35]]<dropmenuobj[OxO5404[33]]){Ox2de=dropmenuobj[OxO5404[33]]-obj[OxO5404[34]];} ;} else {var Ox2df=ie4&&!window[OxO5404[28]]?iecompattest()[OxO5404[36]]+iecompattest()[OxO5404[37]]-15:window[OxO5404[38]]+window[OxO5404[39]]-18;dropmenuobj[OxO5404[33]]=dropmenuobj[OxO5404[40]];if(Ox2df-dropmenuobj[OxO5404[41]]<dropmenuobj[OxO5404[33]]){Ox2de=dropmenuobj[OxO5404[33]]+obj[OxO5404[40]];} ;} ;return Ox2de;} ;function showTooltip(Ox2e1,obj){Event_CancelEvent();clearhidetip();dropmenuobj[OxO5404[42]]=Ox2e1;if(ie4||ns6){showhide(dropmenuobj.style,OxO5404[43],OxO5404[44]);dropmenuobj[OxO5404[35]]=getposOffset(obj,OxO5404[16]);dropmenuobj[OxO5404[41]]=getposOffset(obj,OxO5404[21]);dropmenuobj[OxO5404[20]][OxO5404[16]]=dropmenuobj[OxO5404[35]]-clearbrowseredge(obj,OxO5404[27])+OxO5404[45];dropmenuobj[OxO5404[20]][OxO5404[21]]=dropmenuobj[OxO5404[41]]-clearbrowseredge(obj,OxO5404[46])+obj[OxO5404[40]]*1.1+2+OxO5404[45];} ;} ;function hidetip(){if( typeof dropmenuobj!=OxO5404[47]){if(ie4||ns6){dropmenuobj[OxO5404[20]][OxO5404[22]]=OxO5404[44];} ;} ;} ;function delayhidetip(){if(ie4||ns6){delayhidetimerid=setTimeout(OxO5404[48],disappeardelay);} ;} ;function clearhidetip(){clearTimeout(delayhidetimerid);} ;function cancel(){Window_CloseDialog(window);} ;var obj=Window_GetDialogArguments(window);var element=obj[OxO5404[49]];var editor=obj[OxO5404[50]];var editdoc=obj[OxO5404[51]];function insert(src){if(src){var Ox180=src.replace( new RegExp(OxO5404[52],OxO5404[53]),OxO5404[53]);function Actualsize(){var Ox2e4= new Image();Ox2e4[OxO5404[3]]=Ox180;if(Ox2e4[OxO5404[54]]>0&&Ox2e4[OxO5404[55]]>0){element[OxO5404[54]]=Ox2e4[OxO5404[54]];element[OxO5404[55]]=Ox2e4[OxO5404[55]];} else {setTimeout(Actualsize,400);} ;} ;if(element){element[OxO5404[3]]=Ox180;} else {element=editdoc.createElement(OxO5404[56]);element[OxO5404[3]]=Ox180;element[OxO5404[57]]=0;element[OxO5404[58]]=OxO5404[53];Actualsize();} ;if(navigator[OxO5404[59]]==OxO5404[60]){try{element.setAttribute(OxO5404[61],Ox180);} catch(e){} ;} else {if(editor.GetActiveTab()==OxO5404[62]){element.setAttribute(OxO5404[61],Ox180);} ;} ;editor.InsertElement(element);Window_CloseDialog(window);} ;} ;