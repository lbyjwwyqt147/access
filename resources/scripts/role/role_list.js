var Role  = function () {
    var basicUrl = commonUtil.httpUrl;
    var initRoleTable = function(){
        //先销毁表格
        $('#role-table-pagination').bootstrapTable('destroy');
        //初始化表格,动态从服务器加载数据
        $("#role-table-pagination").bootstrapTable({
            method: "get",  //使用get请求到服务器获取数据
            url:basicUrl+"/roles" , //获取数据的Servlet地址
            striped: true,  //表格显示条纹
            pagination: true, //启动分页
            pageSize: 20,  //每页显示的记录数
            pageNumber:1, //当前第几页
            pageList: [5, 10, 15, 20, 25],  //记录数可选列表
            search: false,  //是否启用查询
            showColumns: true,  //显示下拉框勾选要显示的列
            showRefresh: true,  //显示刷新按钮
            sidePagination: "server", //表示服务端请求
            //设置为undefined可以获取pageNumber，pageSize，searchText，sortName，sortOrder
            //设置为limit可以获取limit, offset, search, sort, order
            queryParamsType : "undefined",
            queryParams: function queryParams(params) {   //设置查询参数
                var param = {
                    pageNumber: params.pageNumber,
                    pageSize: params.pageSize,
                    orderNum : $("#orderNum").val()
                };
                return param;
            },
            onLoadSuccess: function(){  //加载成功时执行
                alert("加载成功");
            },
            onLoadError: function(){  //加载失败时执行
                alert("加载数据失败");
            }
        });
    }

 /*   $('#openAddRoleForm').on('click', function(){
        layer.open({
            type: 1,
            area: ['600px', '360px'],
            shadeClose: true, //点击遮罩关闭
            content: initaddForm()
        });
    });*/

    $('#openAddRoleForm').on('click', function(){
        layer.open({
            type: 2,
            title: 'iframe父子操作',
            maxmin: true,
            shadeClose: true, //点击遮罩关闭层
            area : ['800px' , '520px'],
            content: '../../../access/pages/authority/role_add.html'
        });
    });

    var initaddForm = function(){
        var formContent = '\<\div class="portlet-body form"> <form class="form-horizontal" role="form" id="addRoleForm">'
            + '<div class="form-body">'
            + '<div class="form-group">'
            +  '<label class="col-md-3 control-label">Block Help</label>'
            +  '<div class="col-md-9">'
            + '<input type="text" class="form-control" placeholder="Enter text">'
            + '<span class="help-block"> A block of help text. </span>'
            +  '</div>'
       + '</div>'

            + '</form>'
            +'<\/div>';
        //formContent.concat('')
      //  formContent.concat('<\/div>');
        return formContent;
    }

    return {
        //main function to initiate the module
        init: function () {

            initRoleTable();

        }
    };
}();

jQuery(document).ready(function() {
    Role.init();
});