webpackJsonp([2],{

/***/ 169:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_head_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_bottom_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue__);



__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(169);


new __WEBPACK_IMPORTED_MODULE_3_vue___default.a({
    el: "#pgHead",
    render: h => h(__WEBPACK_IMPORTED_MODULE_0__vue_head_vue__["a" /* default */])
});
new __WEBPACK_IMPORTED_MODULE_3_vue___default.a({
    el: "#pgFoot",
    render: h => h(__WEBPACK_IMPORTED_MODULE_1__vue_bottom_vue__["a" /* default */])
});

$(document).ready(function () {
    $(".carousel-inner").height($(window).height() - 110);
    $(".green_body").height($(window).height() - 110);
    $("#carousel-example-generic2 .carousel-caption").css("top", ($(window).height() - 220) / 2);
    console.log($("#carousel-example-generic2 .carousel-caption").position().top);

    $(window).resize(function () {
        $(".carousel-inner").height($(window).height() - 110);
        $(".green_body").height($(window).height() - 110);
        $("#carousel-example-generic2 .carousel-caption").css("top", ($(window).height() - 220) / 2);
    });

    $('.middle_show').hover(function () {
        var _this = $(this);
        _this.find(".show_div").css('display', 'block');
    }, function () {
        var _this = $(this);
        _this.find(".show_div").css('display', 'none');
    });
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ })

},[178]);