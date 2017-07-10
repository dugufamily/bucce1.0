import 'bootstrap/dist/css/bootstrap.css';
//require("./../../css/page/login.css");
import "./../../css/page/login.css";
import { req as axio, setItem, clearItem, timeInteval, tip } from './../common/common.js'
import vue from 'vue';

var logVm = new vue({
    el: "#loginApp",
    data: {
        sendcode: {
            "cno": 101,
            "appid": "ibooth",
            "uno": 0,
            "phone": "",
            "vertype": 1
        },
        reg: {
            "cno": 102,
            "appid": "ibooth",
            "phone": "",
            "pwd": "",
            "uname": "",
            "verycode": ""
        },
        log: {
            "cno": 103,
            "appid": "ibooth",
            "uname": "",
            "pwd": ""
        }
    },
    methods: {
        fnlog: function () {
            axio({
                cmd: this.log,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        clearItem();
                        setItem("PGINFO", { "PSN_NAME": data.uname, "PSN_NO": data.token, "PSN_UNO": data.uno, "PSN_USTATE": data.ustate, "PSN_UMAILVFLAG": data.umailvflg })
                        window.location.href = "index.html";
                    } else {
                        alert(data.error)
                    }
                },
                fail: function (error) {
                    alert(error)
                }
            })
        },
        fnreg: function () {
            var vm = this;
            if(vm.reg.uname==""){
                alert("用户名不能为空");
                return false;
            }
            if(vm.reg.pwd==""){
                alert("密码不能为空");
                return false;
            }
            if(vm.reg.verycode==""){
                alert("请输入正确验证码");
                return false;
            }
            vm.reg.phone = vm.sendcode.phone
            axio({
                cmd: this.reg,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        clearItem();
                        setItem("PGINFO", { "PSN_NAME": data.uname, "PSN_NO": data.token, "PSN_UNO": data.uno, "PSN_USTATE": data.ustate, "PSN_UMAILVFLAG": data.umailvflg });
                        window.location.href = "email.html";
                    } else {
                        alert(data.error)
                    }
                },
                fail: function (error) {
                    alert(error)
                }
            })
        },
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
        }
    }
})
