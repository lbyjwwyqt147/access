var Index = function () {
    var basicUrl = commonUtil.httpUrl;
    var userId = "";
    var token = commonUtil.getUrlParams("TOKEN");
    var sessionId = commonUtil.getUrlParams("SESSION");
    var roleId = 1;
    /**
     * 菜单数据源
     */
    var menusData = function() {
        commonUtil.setToken(token);
        commonUtil.setSeesionId(sessionId);
        console.log(commonUtil.getSessionId());
        // data()读取属性
        console.log($.data({}, 'name'));//aty

        $.ajax( {
            url: basicUrl+ "/resourceMenus/user",
            data:{
                "userId":userId,
                "SESSION":sessionId,
                "token":token
            },
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            beforeSend: function(request) {
                request.setRequestHeader("x-auth-token", token);
            },
            type:'GET',
            dataType:'JSON',
            success:function(data) {
                console.log(data);

                initMenus(data.data);

            },
            error : function() {
               layer.open({
                   title: '提示',
                   content: '获取资源菜单树异常.'
               });
            }
         });
    }

    /**
     * 初始化菜单
     * @param data
     */
    function initMenus(data) {
        var menusHtml = "";
        $.each(data,function(i,v){
            console.log(v);
            if(i == 0){
                menusHtml+='<li class="nav-item start active open">';
            }else {
                menusHtml+='<li class="nav-item ">';
            }
            menusHtml+='<a href="javascript:Index.openPageHtml(\''+v.a_attr.url+'\');" onclick="Index.openPageHtml(\''+v.a_attr.url+'\');" class="nav-link nav-toggle">';
            menusHtml+='<i class="'+v.icon+'"></i>';
            menusHtml+='<span class="title">'+v.text+'</span>';
            if(i == 0){
                menusHtml+='<span class="selected"></span>';
            }else {

            }
            menusHtml+='<span class="arrow open"></span>';
            menusHtml+='</a>';
            menusHtml+=findChildren(v);
        });

       // console.log(menusHtml)
       $("#page-sidebar-menu").html(menusHtml);
    }

    /**
     * 叶子节点
     * @param html
     * @param arrays
     */
    function findChildren(v2) {
        var html = '<ul class="sub-menu">';
        var  children = v2.children;
        console.log(children);
        $.each(children,function (i,v) {
                html+='<li class="nav-item ">';
                html+='<a href="javascript:Index.openPageHtml(\''+v.a_attr.url+'\');" class="nav-link">';
                html+='<i class="'+v.icon+'"></i>';
                html+='<span class="title">'+v.text+'</span>';
                html+='</a>';
                html+='</li>';
                findChildren(html,v);
        })
        html+='</ul>';
        html+='</li>';
       return html;
    }

    /**
     * 打开页面
     * @param url
     */



    return {
        //main function to initiate the module
        init: function () {

            menusData();

        },
        openPageHtml: function(url) {
            if(url != "" || url != null){
                $("#mainIframe").attr("src",url);
            }

        }
    };

}();

jQuery(document).ready(function() {
    Index.init();
});