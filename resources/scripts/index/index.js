var Index = function () {
    /**
     * 菜单
     */
    var menus = function() {

        $.ajax( {
              url:'productManager_reverseUpdate',// 跳转到 action
              data:{

                   },
              type:'GET',
              dataType:'JSON',
              success:function(data) {
                  console.log(data);



               },
           error : function() {
                   // view("异常！");
                     alert("异常！");
               }
         });
    }


    return {
        //main function to initiate the module
        init: function () {

            menus();

        }
    };

}();

jQuery(document).ready(function() {
    Index.init();
});