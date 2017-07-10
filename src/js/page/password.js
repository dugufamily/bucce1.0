import 'bootstrap/dist/css/bootstrap.css';
import "./../../css/page/login.css";
import { req as axio } from './../common/common.js'
import vue from 'vue';

var logVm = new vue({
    el: "#passwordApp",
    data: {
        sendcode: {
            "cno": 101,
            "appid": "ibooth",
            "uno": 0,
            "phone": "",
            "vertype": 2
        },
        password: {
            "cno": 104,
            "appid": "ibooth",
            "uno": 0,
            "phone": "",
            "newpwd": "",
            "verycode": "",
            "lgtype": 1,
        }
    },
    methods: {
        fnchkcode: function () {
            var vm = this,
                regex = /^1[34578]\d{9}$/,
                phone = vm.sendcode.phone;
            if (!regex.test(phone)) {
                alert("请填写正确手机号");
                return false;
            }
            axio({
                cmd: this.sendcode,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        alert('验证码是测试用，用警告框模拟手机查看验证码：' + data.verycode)
                    } else {
                        alert(data.error)
                    }

                },
                fail: function (error) {
                    console.log(error)
                }
            })
        },
        fnpassword: function () {
            var vm = this;
            vm.password.phone = vm.sendcode.phone
            axio({
                cmd: this.password,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        alert("重置密码成功，请返回登录")
                    } else {
                        alert(data.error)
                    }
                },
                fail: function (error) {
                    alert(error)
                }
            })
        }
    }
})
