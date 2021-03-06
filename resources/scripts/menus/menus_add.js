var MenusForm  = function () {
    var basicUrl = commonUtil.httpUrl;
    var pid = commonUtil.getUrlParams("pid");
    var index = parent.layer.getFrameIndex(window.name);
    function submitForm() {
        $("#parentMenuNumber").val(pid);
        commonUtil.inputTrim();
        $.ajax({
            url: basicUrl+ "/resourceMenus",
            data:$("#muens-form").serialize(),
            type:"POST",
            dataType:"json",
            success :function (data,textStatus) {
                console.log(data);
                if(data.status == 0){
                    $("#muens-form")[0].reset();
                    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                    parent.layer.close(index);
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


    $('#submit-btn').on('click', function(){
        submitForm();
    });


    return {
        //main function to initiate the module
        init: function () {



        }
    };
}();

jQuery(document).ready(function() {
    MenusForm.init();
});