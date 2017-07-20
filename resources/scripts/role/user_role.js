var RoleUser  = function () {
    var basicUrl = commonUtil.httpUrl;
    //初始化未分配角色表格
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
            showColumns: false,  //显示下拉框勾选要显示的列
            showRefresh: false,  //显示刷新按钮
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


    //初始化已分配角色表格
    var initUserRoleTable = function(){
        //先销毁表格
        $('#user-role-table-pagination').bootstrapTable('destroy');
        //初始化表格,动态从服务器加载数据
        $("#user-role-table-pagination").bootstrapTable({
            method: "get",  //使用get请求到服务器获取数据
            url:basicUrl+"/roles" , //获取数据的Servlet地址
            striped: true,  //表格显示条纹
            pagination: true, //启动分页
            pageSize: 20,  //每页显示的记录数
            pageNumber:1, //当前第几页
            pageList: [5, 10, 15, 20, 25],  //记录数可选列表
            search: false,  //是否启用查询
            showColumns: false,  //显示下拉框勾选要显示的列
            showRefresh: false,  //显示刷新按钮
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


    $('#delRoleBtn').on('click', function(){
        alert("删除");
    });
    $('#addRoleBtn').on('click', function(){
        alert("添加");
    });



    return {
        //main function to initiate the module
        init: function () {

            initRoleTable();
            initUserRoleTable();

        }
    };
}();

jQuery(document).ready(function() {
    RoleUser.init();
});