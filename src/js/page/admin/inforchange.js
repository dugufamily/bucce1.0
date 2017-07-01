import Header from './../../vue/head.vue'
import Bottom from './../../vue/bottom.vue'
import 'bootstrap/dist/css/bootstrap.css';
require("./../../../css/common/common.css");
require("./../../../css/page/beecubic.css");
require("./../../../css/page/index.css");
require("./../../lib/distpicker.data")

import { req as axio, getItem, getPsn  } from './../../common/common.js'
import vue from 'vue'
new vue({
    el: "#pgHead",
    render: h => h(Header)
})
new vue({
    el: "#pgFoot",
    render: h => h(Bottom)
})


var postVm = new vue({
    el: "#postPerInfor",
    data: {
        isClick: 0,
        umailvflg: "",
        ustate: "",
        getPerInfor: {
            "cno": 111,
            "appid": "ibooth",
            "uno":  getPsn("PSN_UNO"),
            "token": getPsn("PSN_NO"),
        },
        postEmail: {
            "cno": 108,
            "appid": "ibooth",
            "uno":  getPsn("PSN_UNO"),
            "token": getPsn("PSN_NO"),
            "email": ""
        },
        postPerInfor: {
            "cno": 112,
            "appid": "ibooth",
            "uno":  getPsn("PSN_UNO"),
            "token":  getPsn("PSN_NO"),
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
        fnpostEmail: function () {
            var vm = this;
            vm.postEmail.email=vm.postPerInfor.email;
            axio({
                cmd: vm.postEmail,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        vm.umailvflg=2;
                    } else {
                        console.log(res)
                    }
                },
                fail: function (error) {
                    console.log(error)
                }
            })
        },
        fnpostPerInfor: function () {
            var vm = this;
            for(var i=0;i<vm.postPerInfor.length;i++){
                if(vm.postPerInfor[i] == ""){
                    vm.isClick = 2;
                    return false;
                }
            }
            axio({
                cmd: vm.postPerInfor,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        vm.isClick = 1;
                    } else {
                        console.log(data.error)
                    }
                },
                fail: function (error) {
                    console.log(error)
                }
            })
        }
    }
})