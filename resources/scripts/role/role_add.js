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
            },
            error:function (XMLHttpRequest, textStatus, errorThrown) {

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