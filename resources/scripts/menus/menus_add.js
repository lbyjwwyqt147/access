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
                $("#muens-form")[0].reset();
                parent.refurbish();
                parent.layer.close(index);
            },
            error:function (XMLHttpRequest, textStatus, errorThrown) {

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