import 'bootstrap/dist/css/bootstrap.css';
//require("./../../css/page/login.css");
import "./../../css/page/login.css";
import {req as axio,setItem,clearItem,timeInteval,tip } from './../common/common.js'
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
                success:function(res){
                    var data = res.data;
                    if(data.err==0){
                        clearItem();
                        setItem("PGINFO",{"PSN_NAME": data.uname, "PSN_NO": data.token, "PSN_UNO": data.uno, "PSN_USTATE":data.ustate,"PSN_UMAILVFLAG": data.umailvflg }) 
                        window.location.href="index.html";
                    }else{
                        alert(data.error)
                    }                    
                },
                fail:function(error){
                   alert(error)
                }
            })
        },
        fnreg:function(){
            var vm = this,
                regex = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
            
            axio({
                cmd:this.reg,
                success:function(res){
                    var data = res.data;
                    if(data.err==0){
                        clearItem();
                        setItem("PGINFO",{"PSN_NAME": data.uname, "PSN_NO": data.token, "PSN_UNO": data.uno, "PSN_USTATE":data.ustate,"PSN_UMAILVFLAG": data.umailvflg });
                        window.location.href="email.html";
                    }else{
                        alert(data.error)
                    }  
                },
                fail:function(error){
                    alert(error)
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
                success:function(res){
                    var data = res.data;
                    if(data.err == 0) {
                        vm.reg.verycode = data.vuerycode;
                        alert('验证码是测试用，用警告框模拟手机查看验证码：'+data.verycode)
                    }else{
                        alert(data.error)
                    }
                    
                },
                fail:function(error){
                    console.log(error)
                }
            }) 
        }
    }
})
