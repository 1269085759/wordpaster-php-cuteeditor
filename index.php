<?php include_once("cuteeditor_files/include_CuteEditor.php") ; ?>
<html>	
    <head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<link rel="stylesheet" href="php.css"  type="text/css" />
        <link type="text/css" rel="Stylesheet" href="WordPaster/css/WordPaster.css"/>
	<link type="text/css" rel="Stylesheet" href="WordPaster/js/skygqbox.css"/>
    <script type="text/javascript" src="WordPaster/js/json2.min.js" charset="utf-8"></script>
    <script type="text/javascript" src="WordPaster/js/jquery-1.4.min.js" charset="utf-8"></script>
        <script type="text/javascript" src="WordPaster/js/WordPaster.js" charset="utf-8"></script>
	<script type="text/javascript" src="WordPaster/js/skygqbox.js" charset="utf-8"></script>
	</head>
    <body>
		
		<form name="theForm" action="Get_HtmlContent.php" method="post" ID="Form1">
					
		<h1>Enable All Toolbars</h1>
		
		<p>This example shows you all the predefined buttons. </p>
		<br />
        <?php
            $editor=new CuteEditor();
            $editor->ID="Editor1";
            $editor->Text="WordPaster for CuteEditor php";
            $editor->EditorBodyStyle="font:normal 12px arial;";
            $editor->EditorWysiwygModeCss="php.css";
			$editor->CustomAddons = "<img title=\"粘贴来自剪帖板，Word文档中的图片\" class=\"CuteEditorButton\" onmouseover=\"CuteEditor_ButtonCommandOver(this)\" onmouseout=\"CuteEditor_ButtonCommandOut(this)\" onmousedown=\"CuteEditor_ButtonCommandDown(this)\" onmouseup=\"CuteEditor_ButtonCommandUp(this)\" ondragstart=\"CuteEditor_CancelEvent()\" Command=\"WordPaster\" src=\"WordPaster/css/paster.png\" /><img title=\"自动上传远程服务器图片\" class=\"CuteEditorButton\" onmouseover=\"CuteEditor_ButtonCommandOver(this)\" onmouseout=\"CuteEditor_ButtonCommandOut(this)\" onmousedown=\"CuteEditor_ButtonCommandDown(this)\" onmouseup=\"CuteEditor_ButtonCommandUp(this)\" ondragstart=\"CuteEditor_CancelEvent()\" Command=\"NetPaster\" src=\"WordPaster/css/ico.png\" />";
            $editor->Draw();
			$ClientID = $editor->ClientID();
            $editor=null;
            
            //use $_POST["Editor1"]to retrieve the data
        ?>
					
		<script type="text/javascript">
            var pasterMgr = new WordPasterManager();
            pasterMgr.Config["PostUrl"] = "http://localhost:81/WordPaster2/WordPasterCuteEditor/upload.php"
            pasterMgr.Load(); //加载控件
            var edt = document.getElementById('<?php echo $ClientID;?>');
    
            $(document).ready(function()
            {
                pasterMgr.SetEditor(edt);
            });
			
			function CuteEditor_OnCommand(editor,command,ui,value)    
			{    
				//handle the command by yourself    
				if(command=="WordPaster")
				{    
					pasterMgr.Paste();
					return true;    
				}    
			}    
        </script>
						
		</form>
	</body>
</html>