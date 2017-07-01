<template>
<header class="navbar navbar-default navbar-fixed-top header-height">
    <div class="container posre">
        <div id="topinfo" v-if="log">
            <p>欢迎您：{{uname}},<a href="admin/info.html">进入后台</a> | <a href="javascript:;" @click="logout">退出</a> </p>
        </div>
        <!--头部-->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-navbar-collapse" aria-expanded="false">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
                <img alt="BEECUBIC" src="./../../img/logo.png" class="img-responsive">
            </a>
        </div>
        <div class="collapse navbar-collapse" id="bs-navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">解决方案</a></li>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">联系我们</a></li>
                <li><a href="login.html">登录</a></li>
                <li>
                    <button type="button" class="btn btn-default navbar-btn" onClick="window.location.href='login.html'">注册</button>
                </li>
            </ul>
        </div>
    </div>
</header>
</template>
<script>
     
    import {req as axio, getItem, getPsn,clearItem } from './../common/common.js'
    let strName = getPsn("PSN_NAME");
    export default {
        data (){
            return {
                uname:strName==false?"":strName,
                logoutobj:{
                    "cno": 105,
                    "appid": "ibooth",
                    "uno":  getPsn("PSN_UNO"),
                    "token": getPsn("PSN_NO")
                },
                log: strName==false?false:true
            }
        },
        methods: {
            logout(){
                axio({
                    cmd:this.logoutobj,
                    success:function(res){
                        console.log(res);
                        var data = res.data;
                        if(data.err==0){
                            clearItem(); 
                            window.location.href="index.html";
                        }else{
                            alert(data.error)
                        }   
                    },
                    fail:function(error){

                    }
                })
            }
        },
        components:{

        }
    }
</script>
<style>
    
</style>

