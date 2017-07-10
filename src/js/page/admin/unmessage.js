import Header from './../../vue/head.vue'
import Bottom from './../../vue/bottom.vue'
import 'bootstrap/dist/css/bootstrap.css';
require("./../../../css/common/common.css");
require("./../../../css/page/beecubic.css");

import { req as axio, getPsn } from './../../common/common.js'
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
    el: "#messageCenter",
    data: {
        smslist: "",
        getMessage: {
            "cno": 301,
            "appid": "ibooth",
            "uno": getPsn("PSN_UNO"),
            "token": getPsn("PSN_NO")
        },
        readMessage: {
            "cno": 302,
            "appid": "ibooth",
            "uno": getPsn("PSN_UNO"),
            "token": getPsn("PSN_NO"),
            "smsno": "",
            "upstatus": 2
        }
    },
    mounted: function () {
        var vm = this;
        axio({
            cmd: vm.getMessage,
            success: function (res) {
                var data = res.data
                vm.smslist = data.smslist;
                console.log(vm.smslist[0])
            },
            fail: function (error) {
                console.log(error)
            }
        })
    },
    methods: {
        fnreadMessage: function (no,index) {
            var vm = this;
            vm.readMessage.smsno = no;
            axio({
                cmd: vm.readMessage,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                        vm.smslist[index].status=2;
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