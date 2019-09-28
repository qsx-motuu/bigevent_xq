
define(['config'], function (URLIST) {
    // 优化代码
    var user = {
        /**
         * 管理员登录
         * @param {*} userName 用户名
         * @param {*} passWord 密码
         * @param {*} callBack 回调函数
         */

        // 登录请求
        login: function (userName, passWord, callBack) {
            $.post(URLIST.user_login, { user_name: userName, password: passWord }, function (res) {
                console.log(res);
                // 调用
                callBack(res);
            });
        },
        // 主页退出请求
        quit_user: function (callBack) {
            $.post(URLIST.user_logout, function (res) {
                console.log(res);
                callBack(res);
            });
        },

        //获取管理员信息请求
        getInfo: function (callBack) {
            $.get(URLIST.user_info, function (res) {
                callBack(res);
            });
        }
    };
    return user;

});