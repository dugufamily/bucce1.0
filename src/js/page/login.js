import 'bootstrap/dist/css/bootstrap.css';
//require("./../../css/page/login.css");
import "./../../css/page/login.css";
import {req as axio,setItem,clearItem,timeInteval } from './../common/common.js'
import vue from 'vue';


var logVm = new vue({
    el:"#loginApp",
    data:{
        sendcode:{
            "cno": 101,
            "appid": "ibooth",
            "uno":  0,
            "phone": "",
            "vertype": 1
        },
        reg:{
            "cno": 102,
            "appid": "ibooth",
            "phone":  "",
            "pwd":  "",
            "uname": "",
            "verycode": "" 
        },
        log:{
            "cno": 103,
            "appid": "ibooth",
            "uname":  "",
            "pwd":  ""
        }        
    },
    methods:{
        fnlog:function(){
            axio({
                cmd:this.log,
                success:function(data){
                    console.log(data);

                },
                fail:function(error){
                    console.log(error)
                }
            })
        },
        fnreg:function(){
            var vm = this,
                regex = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
            
            axio({
                cmd:this.reg,
                success:function(data){
                    console.log(data);

                },
                fail:function(error){
                    console.log(error)
                }
            })
        },
        fnchkcode:function(){
            var vm = this,
                reg = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
            var $tel = $(this.$refs["regphone"]).val();  
            console.log(this.reg.phone)
            this.sendcode.phone = $tel   
            axio({
                cmd:this.sendcode,
                success:function(data){
 
                    vm.reg.verycode = data.vuerycode;
                    alert(data.vuerycode)
                },
                fail:function(error){
                    console.log(error)
                }
            }) 
        }
    }
})


// ajx({
//     data:{
// "cno": 101,
// "appid": "ibooth",
// "uno":  0,
// "phone": "15275209312",
// "vertype": 1

//     },
//     sucfn:function(){

//     },
//     errfn:function(error){
//         console.log(error)
//     }
// })

