var RoleForm  = function () {
    var basicUrl = commonUtil.httpUrl;

    function submitForm() {
        commonUtil.inputTrim();
        $.ajax({
            url: basicUrl+ "/roles",
            data:$("#addRoleForm").serialize(),
            type:"POST",
            dataType:"json",
            success :function (data,textStatus) {
                console.log(data);
                if(data.status == 0){

                }else{
                    layer.alert(data.msg, {
                        skin: 'layui-layer-lan',
                        closeBtn: 1,
                        anim: 4 //动画类型
                    });
                }
            },
            error:function (XMLHttpRequest, textStatus, errorThrown) {
                layer.alert('网络出现错误!', {
                    skin: 'layui-layer-lan',
                    closeBtn: 1,
                    anim: 4 //动画类型
                });
            }
        });
    }


    $('#save-button').on('click', function(){
        submitForm();
    });


    return {
        //main function to initiate the module
        init: function () {



        }
    };
}();

jQuery(document).ready(function() {
    RoleForm.init();
});