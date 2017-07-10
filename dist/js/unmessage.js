webpackJsonp([3],{

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_head_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_bottom_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue__);



__webpack_require__(32);
__webpack_require__(33);



new __WEBPACK_IMPORTED_MODULE_4_vue___default.a({
    el: "#pgHead",
    render: h => h(__WEBPACK_IMPORTED_MODULE_0__vue_head_vue__["a" /* default */])
});
new __WEBPACK_IMPORTED_MODULE_4_vue___default.a({
    el: "#pgFoot",
    render: h => h(__WEBPACK_IMPORTED_MODULE_1__vue_bottom_vue__["a" /* default */])
});

var getVm = new __WEBPACK_IMPORTED_MODULE_4_vue___default.a({
    el: "#messageCenter",
    data: {
        smslist: "",
        getMessage: {
            "cno": 301,
            "appid": "ibooth",
            "uno": __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_common_js__["a" /* getPsn */])("PSN_UNO"),
            "token": __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_common_js__["a" /* getPsn */])("PSN_NO")
        },
        readMessage: {
            "cno": 302,
            "appid": "ibooth",
            "uno": __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_common_js__["a" /* getPsn */])("PSN_UNO"),
            "token": __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_common_js__["a" /* getPsn */])("PSN_NO"),
            "smsno": "",
            "upstatus": 2
        }
    },
    mounted: function () {
        var vm = this;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_common_js__["b" /* req */])({
            cmd: vm.getMessage,
            success: function (res) {
                var data = res.data;
                vm.smslist = data.smslist;
                console.log(vm.smslist[0]);
            },
            fail: function (error) {
                console.log(error);
            }
        });
    },
    methods: {
        fnreadMessage: function (no, index) {
            var vm = this;
            vm.readMessage.smsno = no;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_common_js__["b" /* req */])({
                cmd: vm.readMessage,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        vm.smslist[index].status = 2;
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

/***/ })

},[176]);