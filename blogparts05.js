/******************************************************************************
	初期設定
******************************************************************************/
var gsTickerSwf_AN = "bp_rika.swf";

var gsTickerId_AN = "Ticker_AN";

// Tikerを作成する
//MakeTicker_AN();
LoadIFrameContents();

/******************************************************************************
	関数名		MakeTicker_AN
	機能		ティッカーを作成する
	
	入力		なし
	出力		document.writeによるHTML出力
******************************************************************************/
function MakeTicker_AN(){
	var sTickerUrl = gsTickerSwf_AN;
	var swf_width = 160;
	var swf_height = 285;
	
	var sHtml = "";
	sHtml += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="' + swf_width + '" height="' + swf_height + '" id="' + gsTickerId_AN + '" align="middle">';
	sHtml += '<param name="allowScriptAccess" value="always" />';
	sHtml += '<param name="movie" value="' + sTickerUrl + '" />';
	sHtml += '<param name="quality" value="high" />';
	sHtml += '<param name="bgcolor" value="#ffffff" />';
	sHtml += '<param name="wmode" value="transparent" />';
	sHtml += '<embed wmode="transparent" src="' + sTickerUrl + '" quality="high" bgcolor="#ffffff" width="' + swf_width + '" height="' + swf_height + '" name="' + gsTickerId_AN + '" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
	sHtml += '</object>';
	
	document.write(sHtml);
}


function LoadIFrameContents()
{
	var out_html = "";
	
	out_html += '<iframe src="https://www.marv.jp/products/higurashi_jan/home/blogparts/bp_rika.html" width="160" height="285" scrolling="no" marginheight="0" marginwidth="0" frameborder="0">';
	out_html += "</iframe>";
	
	document.write(out_html);
}