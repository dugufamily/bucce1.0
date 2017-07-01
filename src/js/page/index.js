import Header from './../vue/head.vue'
import Bottom from './../vue/bottom.vue'
import 'bootstrap/dist/css/bootstrap.css';
require("./../../css/common/common.css");
require("./../../css/page/beecubic.css");
require("./../../css/page/index.css")
 
import vue from 'vue'
new vue({
    el:"#pgHead",
    render: h => h(Header)
})
new vue({
    el:"#pgFoot",
    render: h => h(Bottom)
})
 
$(document).ready(function () {
    $(".carousel-inner").height($(window).height() - 110);
    $(".green_body").height($(window).height() - 110);
    $("#carousel-example-generic2 .carousel-caption").css("top", ($(window).height() - 220) / 2);
    console.log($("#carousel-example-generic2 .carousel-caption").position().top)

    $(window).resize(function () {
        $(".carousel-inner").height($(window).height() - 110);
        $(".green_body").height($(window).height() - 110);
        $("#carousel-example-generic2 .carousel-caption").css("top", ($(window).height() - 220) / 2);
    });

    $('.middle_show').hover(function() {
        var _this=$(this);
        _this.find(".show_div").css('display', 'block');
    }, function() {
        var _this=$(this);
        _this.find(".show_div").css('display', 'none');
    });
})