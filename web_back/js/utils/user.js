// 优化代码

var user = {
    // 登录请求
    login: function (userName, passWord, callBack) {
        $.post('http://localhost:8000/admin/login', { user_name: userName, password: passWord }, function (res) {
            console.log(res);
            // 调用
            callBack(res);
        });
    },
    // 主页退出请求
    quit_user: function (callBack) {
        $.post('http://localhost:8000/admin/logout', function (res) {
            console.log(res);
            callBack(res);
        });
    },

    //获取管理员信息请求
    getInfo: function (callBack) {
        $.get('http://localhost:8000/admin/getuser', function (res) {
            callBack(res);
        });
    }
}