webpackJsonp([5],{

/***/ 173:
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
    el: "#getPerInfor",
    data: {
        getPerInfor: {
            "cno": 111,
            "appid": "ibooth",
            "uno": __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_common_js__["a" /* getPsn */])("PSN_UNO"),
            "token": __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_common_js__["a" /* getPsn */])("PSN_NO")
        },
        backPerInfor: {
            "uname": "",
            "company": "",
            "usccode": "",
            "province": "",
            "city": "",
            "district": "",
            "address": "",
            "email": "",
            "phone": "",
            "telphone": "",
            "umailvflg": "",
            "ustate": ""
        }
    },
    mounted: function () {
        var vm = this;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_common_js__["b" /* req */])({
            cmd: vm.getPerInfor,
            success: function (res) {
                var data = res.data;
                vm.backPerInfor.uname = data.uname;
                vm.backPerInfor.company = data.company;
                vm.backPerInfor.usccode = data.usccode;
                vm.backPerInfor.province = data.province;
                vm.backPerInfor.city = data.city;
                vm.backPerInfor.district = data.district;
                vm.backPerInfor.address = data.address;
                vm.backPerInfor.email = data.email;
                vm.backPerInfor.phone = data.phone;
                vm.backPerInfor.telphone = data.telphone;
                vm.backPerInfor.umailvflg = data.umailvflg;
                vm.backPerInfor.ustate = data.ustate;
            },
            fail: function (error) {
                console.log(error);
            }
        });
    },
    methods: {}
});

/***/ })

},[173]);