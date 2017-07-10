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
    el: "#mymessage",
    data: {
        notelist: "",
        getMessage: {
            "cno": 303,
            "appid": "ibooth",
            "uno": getPsn("PSN_UNO"),
            "token": getPsn("PSN_NO")
        },
        postMessage: {
            "cno": 304,
            "appid": "ibooth",
            "uno": getPsn("PSN_UNO"),
            "token": getPsn("PSN_NO"),
            "note": "",
        }
    },
    mounted: function () {
        var vm = this;
        axio({
            cmd: vm.getMessage,
            success: function (res) {
                var data = res.data
                vm.notelist = data.notelist;
                console.log(vm.smslist[0])
            },
            fail: function (error) {
                console.log(error)
            }
        })
    },
    methods: {
        fnpostMessage: function () {
            var vm = this;
            if(vm.postMessage.note == ""){
               alert("请输入您的留言");
               return false;
            }
            axio({
                cmd: vm.postMessage,
                success: function (res) {
                    var data = res.data;
                    if (data.err == 0) {
                       alert("感谢您的留言，我们会尽快给您答复！");
                       window.location.reload();
                    } else {
                        alert(data.error)
                    }
                },
                fail: function (error) {
                    console.log(error)
                }
            })
        }
    },
    filters: {
        trim: function(value) {
            return value.trim();
        }
    }
})