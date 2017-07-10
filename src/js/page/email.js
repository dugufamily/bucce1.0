import 'bootstrap/dist/css/bootstrap.css';
import "./../../css/page/login.css";
import {req as axio, getPsn} from './../common/common.js'
import vue from 'vue';
 
var logVm = new vue({
    el:"#emailApp",
    data:{
        activeemail:{
            "cno": 108,
            "appid": "ibooth",
            "uno": "",
            "token": "" ,
            "email": ""
        }   
    },
    methods:{
        fnactive:function(){
            var vm = this;
            if(vm.activeemail.email==""){
                alert("邮箱不能为空");
                return false;
            }
            vm.activeemail.token = getPsn("PSN_NO");
            vm.activeemail.uno = getPsn("PSN_UNO");

            axio({
                cmd:this.activeemail,
                success:function(res){
                    var d = res.data;
                    console.log(d)
                    if(d.err == 0) {
                        alert("邮件已发送")
                        window.location.href="index.html";
                    }else{
                        alert(d.error)
                    }
                },
                fail:function(error){
                    alert(error)
                }                                    
            });            
 
        } 
    }
})
               