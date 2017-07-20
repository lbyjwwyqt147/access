var RoleMenus  = function () {
    var basicUrl = commonUtil.httpUrl;

    //初始化未分配菜单树
    var initMenusTree = function () {
     /*   $("#tree_menus").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                },
                // so that create works
                "check_callback" : true,
                'data' : {
                    'url' : function (node) {
                        return '../demo/jstree_ajax_data.php';
                    },
                    'data' : function (node) {
                        return { 'parent' : node.id };
                    }
                }
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            },
            "state" : { "key" : "demo3" },
            "plugins" : [ "dnd", "state", "types" ]
        });*/


        $('#tree_menus').jstree({
            'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },
                'data': [{
                    "text": "Same but with checkboxes",
                    "children": [{
                        "text": "initially selected",
                        "state": {
                            "selected": true
                        }
                    }, {
                        "text": "custom icon",
                        "icon": "fa fa-warning icon-state-danger"
                    }, {
                        "text": "initially open",
                        "icon" : "fa fa-folder icon-state-default",
                        "state": {
                            "opened": true
                        },
                        "children": ["Another node"]
                    }, {
                        "text": "custom icon",
                        "icon": "fa fa-warning icon-state-warning"
                    }, {
                        "text": "disabled node",
                        "icon": "fa fa-check icon-state-success",
                        "state": {
                            "disabled": true
                        }
                    }]
                },
                    "And wholerow selection"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            }
        });
    };

    //初始化已分配菜单树
    var initRoleMenusTree = function () {


        $('#role-menus-tree').jstree({
            'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },
                'data': [{
                    "text": "Same but with checkboxes",
                    "children": [{
                        "text": "initially selected",
                        "state": {
                            "selected": true
                        }
                    }, {
                        "text": "custom icon",
                        "icon": "fa fa-warning icon-state-danger"
                    }, {
                        "text": "initially open",
                        "icon" : "fa fa-folder icon-state-default",
                        "state": {
                            "opened": true
                        },
                        "children": ["Another node"]
                    }, {
                        "text": "custom icon",
                        "icon": "fa fa-warning icon-state-warning"
                    }, {
                        "text": "disabled node",
                        "icon": "fa fa-check icon-state-success",
                        "state": {
                            "disabled": true
                        }
                    }]
                },
                    "And wholerow selection"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            }
        });


  /*      $("#role-menus-tree").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                },
                // so that create works
                "check_callback" : true,
                'data' : {
                    'url' : function (node) {
                        return '../demo/jstree_ajax_data.php';
                    },
                    'data' : function (node) {
                        return { 'parent' : node.id };
                    }
                }
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            },
            "state" : { "key" : "demo3" },
            "plugins" : [ "dnd", "state", "types" ]
        });*/
    };

    return {
        //main function to initiate the module
        init: function () {
            initMenusTree();
            initRoleMenusTree();
        }
    };
}();

jQuery(document).ready(function() {
    RoleMenus.init();
});