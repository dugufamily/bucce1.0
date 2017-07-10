webpackJsonp([1],{

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_page_login_css__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_page_login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_page_login_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue__);

//require("./../../css/page/login.css");




var logVm = new __WEBPACK_IMPORTED_MODULE_3_vue___default.a({
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
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_common_js__["b" /* req */])({
                cmd: this.log,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_common_js__["c" /* clearItem */])();
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_common_js__["d" /* setItem */])("PGINFO", { "PSN_NAME": data.uname, "PSN_NO": data.token, "PSN_UNO": data.uno, "PSN_USTATE": data.ustate, "PSN_UMAILVFLAG": data.umailvflg });
                        window.location.href = "index.html";
                    } else {
                        alert(data.error);
                    }
                },
                fail: function (error) {
                    alert(error);
                }
            });
        },
        fnreg: function () {
            var vm = this;
            if (vm.reg.uname == "") {
                alert("用户名不能为空");
                return false;
            }
            if (vm.reg.pwd == "") {
                alert("密码不能为空");
                return false;
            }
            if (vm.reg.verycode == "") {
                alert("请输入正确验证码");
                return false;
            }
            vm.reg.phone = vm.sendcode.phone;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_common_js__["b" /* req */])({
                cmd: this.reg,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_common_js__["c" /* clearItem */])();
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_common_js__["d" /* setItem */])("PGINFO", { "PSN_NAME": data.uname, "PSN_NO": data.token, "PSN_UNO": data.uno, "PSN_USTATE": data.ustate, "PSN_UMAILVFLAG": data.umailvflg });
                        window.location.href = "email.html";
                    } else {
                        alert(data.error);
                    }
                },
                fail: function (error) {
                    alert(error);
                }
            });
        },
        fnchkcode: function () {
            var vm = this,
                regex = /^1[34578]\d{9}$/,
                phone = vm.sendcode.phone;
            if (!regex.test(phone)) {
                alert("请填写正确手机号");
                return false;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_common_js__["b" /* req */])({
                cmd: this.sendcode,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        alert('验证码是测试用，用警告框模拟手机查看验证码：' + data.verycode);
                    } else {
                        alert(data.error);
                    }
                },
                fail: function (error) {
                    console.log(error);
                }
            });
        }
    }
});

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[179]);