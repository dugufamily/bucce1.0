import Header from './../../vue/head.vue'
import Bottom from './../../vue/bottom.vue'
import 'bootstrap/dist/css/bootstrap.css';
require("./../../../css/common/common.css");
require("./../../../css/page/beecubic.css");
require("./../../../css/page/index.css");

import { req as axio, getItem, getPsn } from './../../common/common.js'
import vue from 'vue'
new vue({
    el: "#pgHead",
    render: h => h(Header)
})
new vue({
    el: "#pgFoot",
    render: h => h(Bottom)
})


var getVm = new vue({
    el: "#getPerInfor",
    data: {
        getPerInfor: {
            "cno": 111,
            "appid": "ibooth",
            "uno":  getPsn("PSN_UNO"),
            "token":  getPsn("PSN_NO")
        },
        backPerInfor: {
            "uname": "",
            "company": "",
            "usccode": "",
            "province": "",
            "city": "",
            "district": "",
            "address":"",
            "email": "",
            "phone": "",
            "telphone": "",
            "umailvflg":""
        }
    },
    mounted: function () {
        var vm = this;
        axio({
            cmd: vm.getPerInfor,
            success: function (res) {
                var data=res.data
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
                vm.backPerInfor.umailvflg=data.umailvflg;
            },
            fail: function (error) {
                console.log(error)
            }
        })
    },
    methods: {
    }
})