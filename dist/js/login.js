webpackJsonp([0],{

/***/ 30:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_page_login_css__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_page_login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_page_login_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(3);
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
            var vm = this,
                regex = /^0?1[3|4|5|8|7][0-9]\d{8}$/;

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
                reg = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
            var $tel = $(this.$refs["regphone"]).val();
            console.log(this.reg.phone);
            this.sendcode.phone = $tel;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_common_js__["b" /* req */])({
                cmd: this.sendcode,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        vm.reg.verycode = data.vuerycode;
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })

},[63]);