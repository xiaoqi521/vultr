//缁檒i鍔犱釜id
$(function(){ var obj = $('.summary li'); obj.each(function(i){ $(this).attr('id',"wzlist"+i); }) })
//涓婁竴椤典笅涓€椤�
$(function(){
//鑾峰彇褰撳墠椤甸潰li鐨刬d鍊硷紝骞舵埅鍙栧埌绾暟瀛�
var numb = $('.navbox li.current-menu-item').attr('id');
	numb = numb.split("wzlist");
	numb = numb[1];
//鑾峰彇涓嬩竴涓猧d鐨勫€硷紝閫氳繃閲嶇粍id 鑾峰彇姝d瀵瑰簲鐨刪ref锛�
var nextnumb = parseInt(numb)+1;
	nextnumb = "wzlist"+nextnumb;
var nextlink = $('.navbox li#'+nextnumb+' a').attr('href');
//鏇挎崲涓嬩竴椤电殑閾炬帴
$("#xiayige").attr("href",nextlink);

//鑾峰彇涓婁竴涓殑閾炬帴锛屾搷浣滃悓涓�
if(numb>0){
	var prevnumb = parseInt(numb)-1;
		prevnumb = "wzlist"+prevnumb;

	var prevlink = $('.navbox li#'+prevnumb+' a').attr('href');
	$("#shangyige").attr("href",prevlink);
}
});
//榛樿閰嶇疆
var gitbook = gitbook || [];
gitbook.push(function() {
    gitbook.page.hasChanged({
        "page": {
        },
        "config": {
            "pluginsConfig": {
                "fontsettings":{"theme":"white","family":"sans","size":2},
                "sharing": {
                    "all": []
                },
            },
        },
        "file": {
        },
        "gitbook": {
        },
        "basePath": ".",
        "book": {}
    });
});
//鐧惧害鍒嗕韩
//window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2.png","bdMiniList":false,"bdPic":"","bdStyle":"2.png","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

