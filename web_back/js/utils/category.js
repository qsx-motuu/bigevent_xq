// 类别模块

var category = {
    show: function(callback){
        $.get(URLIST.category_show,function(res){
            callback(res)
        });
    },
    add: function(classname,slug,callback){
        $.post(URLIST.category_add,{name:classname,slug:slug},function(res){
            callback(res);
        });
    },
    delete:function(id,callback){
        $.post(URLIST.category_delete,{id:id},function(res){
            callback(res);
        });
    },
    edit: function(id,classname,slug,callback){
        $.post(URLIST.category_edit,{id:id,name:classname,slug:slug},function(res){
            callback(res);
        });
    },
}