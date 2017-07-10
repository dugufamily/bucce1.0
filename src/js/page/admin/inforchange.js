import Header from './../../vue/head.vue'
import Bottom from './../../vue/bottom.vue'
import 'bootstrap/dist/css/bootstrap.css';
require("./../../../css/common/common.css");
require("./../../../css/page/beecubic.css");

import { req as axio, getPsn } from './../../common/common.js'
import vue from 'vue'
import vueForm from 'vue-form';

new vue({
    el: "#pgHead",
    render: h => h(Header)
})
new vue({
    el: "#pgFoot",
    render: h => h(Bottom)
})

vue.use(vueForm, {
    inputClasses: {
        valid: 'form-control-success',
        invalid: 'form-control-danger'
    }
});

var postVm = new vue({
    el: "#postPerInfor",
    data: {
        umailvflg: "",
        ustate: "",
        formstate: {},
        getPerInfor: {
            "cno": 111,
            "appid": "ibooth",
            "uno": getPsn("PSN_UNO"),
            "token": getPsn("PSN_NO"),
        },
        postEmail: {
            "cno": 108,
            "appid": "ibooth",
            "uno": getPsn("PSN_UNO"),
            "token": getPsn("PSN_NO"),
            "email": ""
        },
        postPerInfor: {
            "cno": 112,
            "appid": "ibooth",
            "uno": getPsn("PSN_UNO"),
            "token": getPsn("PSN_NO"),
            "company": "",
            "usccode": "",
            "province": "",
            "city": "",
            "district": "",
            "address": "",
            "email": "",
            "phone": "",
            "telphone": ""
        }
    },
    mounted: function () {
        var vm = this;
        axio({
            cmd: vm.getPerInfor,
            success: function (res) {
                var data = res.data
                if (data.err == 0) {
                    vm.postPerInfor.company = data.company;
                    vm.postPerInfor.usccode = data.usccode;
                    vm.postPerInfor.province = data.province;
                    vm.postPerInfor.city = data.city;
                    vm.postPerInfor.district = data.district;
                    vm.postPerInfor.address = data.address;
                    vm.postPerInfor.email = data.email;
                    vm.postPerInfor.phone = data.phone;
                    vm.postPerInfor.telphone = data.telphone;
                    vm.umailvflg = data.umailvflg;
                    vm.ustate = data.ustate;
                } else {
                    alert(data.error)
                }

            },
            fail: function (error) {
                console.log(error)
            }
        })
    },
    methods: {
        fieldClassName: function (field) {
            if (!field) {
                return '';
            }
            if ((field.$touched || field.$submitted) && field.$valid) {
                return 'has-success';
            }
            if ((field.$touched || field.$submitted) && field.$invalid) {
                return 'has-error';
            }
        },
        fnpostEmail: function () {
            var vm = this;
            vm.postEmail.email = vm.postPerInfor.email;
            if (vm.postEmail.email == "") {
                alert("请填写邮箱");
                return false;
            }
            var regex = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            var email = vm.postEmail.email;
            if (!regex.test(email)) {
                alert("请填写正确邮箱");
                return false;
            }
            axio({
                cmd: vm.postEmail,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        vm.umailvflg = 2;
                    } else {
                        alert(data.error)
                    }
                },
                fail: function (error) {
                    console.log(error)
                }
            })
        },
        onSubmit: function () {
            console.log(this.postPerInfor.province)
            var vm = this;
            if (this.formstate.$invalid) {
                alert("请正确填写信息");
                return false;
            }
            if (vm.umailvflg != 2) {
                alert("请先验证您的邮箱");
                return false;
            }
            if (vm.ustate == 4) {
                alert("您的信息已通过验证");
                return false;
            }
            if (vm.ustate == 2) {
                alert("您的信息已经提交审核，请勿重复提交");
                return false;
            }
            if ($("#province").val() == "") {
                alert("请选择公司地址");
                return false;
            }
            if ($("#city").val() == "") {
                alert("请选择公司地址");
                return false;
            }
            if ($("#district").val() == "") {
                if ($("#district").children().length > 1) {
                    alert("请选择公司地址");
                    return false;
                }
            }
            axio({
                cmd: vm.postPerInfor,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        vm.ustate = 2;
                        alert("信息提交成功");
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
});

setTimeout(function () {
    require("./../../lib/distpicker.data");
    $('#distpicker').distpicker({
        autoSelect: false
    });
}, 1000); 