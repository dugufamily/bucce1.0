import axios from 'axios'
import store from 'store';
import layer from './../lib/layer/layer.js';
import './../lib/layer/skin/layer.css';
 
export function req (option) {
    axios.post('/beecubic/ubserver/', option.cmd)
    .then(function (response) {
        option.success(response)
    })
    .catch(function (error) {
        
        option.fail(error)
    });
}
export function reqajx (option) {      
    var ajaxTimeOut = $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        cache: false,
        url: '/beecubic/ubserver/',
        data: JSON.stringify(option.data),
        timeout: 30000,
        dataType: "json",
        beforeSend: function () {
            if (typeof (option.bfn) == "function" && option.bfn != "") {
                option.bfn();
            }
        },
        success: function (d) {
            if (typeof (option.sucfn) == "function" && option.sucfn != "") {
                option.sucfn(d);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (typeof (option.errfn) == "function" && option.errfn != "") {
                option.errfn(errorThrown);
            }
        },
        complete: function (XMLHttpRequest, status) {
            if (status == 'timeout') {
                ajaxTimeOut.abort();
            } else {
            }
            if (typeof (comfn) == "function" && comfn != "") {
                option.comfn();
            }
        }
    });
    return ajaxTimeOut;
}
function getItem (item) {
            return store.get(item);
        }
function setItem (item, value) {
            store.set(item, value);
        }
function removeItem (item) {
            store.remove(item);
        }
function clearItem () {
            store.clearAll();
}
function getPsn (item) {
    if (!!getItem("PGINFO")) {
        return getItem("PGINFO")[item];
    } else {
        return false;
        //window.location.href=WEBOOS.CFG.LOCURL+"index.shtml"
    }
}
function timeInteval (o,time,fn,content){
    var wait = time;
    var stime=function(){
        if (wait == 0) {
            fn();
            stime=null;
        } else {
            wait--;
            $(o).html(wait+content)
            setTimeout(function() {
                stime()
            },1000)
        }
    };
    stime();
}

var tip = {
        open:function(str,num){
            return layer.open({
                type: num||1,
                content: str
            });
        },
        alert:function(cont){
            var arg = arguments,tit,fn;
            if(typeof (arg[1])=="string"){
                tit = arg[1];
            }else if(typeof (arg[1])=="function"&&arg[1]!="undefined"){
                fn = arg[1];
            }else {
                tit="",fn=null;
            }
            return layer.alert(cont,{title:tit||"提示框",move: false,closeBtn: 0},function(index){
                typeof (fn)=="function"&&fn!="undefined"&&fn();
                layer.close(index)
            });
        },
        confirm:function(cont){
            var arg = arguments, tit, fn, fn2;
            if(typeof (arg[1])=="string"){
                tit = arg[1];
            }else if(typeof (arg[1])=="function"&&arg[1]!="undefined"){
                fn = arg[1];
            }
            if(typeof (arg[2])=="function"&&arg[2]!="undefined"){
                fn2 = arg[2];
            }
            return layer.confirm(cont, {title:tit||"询问框",move: false}, function(index){
                typeof (fn)=="function"&&fn!="undefined"&&fn();
                layer.close(index);
            }, function(index){
                typeof (fn2)=="function"&&fn2!="undefined"&&fn2();
                layer.close(index);
            });
        },
        openIframe:function(obj){
            if(typeof obj !="object"){
                return;
            }
            return layer.open({
                type: 2,
                title: obj.title,
                shadeClose: true,
                scrollbar: false,
                shade: 0.8,
                area: ['98%', '90%'],
                content: obj.url,
                success: function(layero, index){
                    if(typeof obj.success == "function" ){
                        obj.success.apply(this,Array.prototype.slice.call(arguments));
                    }
                }
            });
        },
        openHtml:function(obj){
            if(typeof obj !="object"){
                return;
            }
            return layer.open({
                title : obj.title,
                type: 1,
                scrollbar: false,
                skin: 'layui-layer-rim', //加上边框
                area: [obj.width, obj.height], //宽高
                content: obj.html,
                cancel: typeof (obj.cancel) === 'function'? obj.cancel :null,
                success: typeof (obj.success) === 'function'? obj.success :null
            });
        },
        closeLayer:function(index,name){
            if(typeof index =="undefined" && typeof name =="undefined"){
                layer.closeAll();
            }
            if( typeof name =="undefined"){
                layer.close(index);
            }else{
                var ind = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                parent.layer.close(ind);
            }
        },
        tips:function(tit,id){
            layer.tips(tit, id,{
                tips: [1, '#3595CC'],
                time: 2000
            });
        }
    }

export { getItem,setItem,removeItem,clearItem,timeInteval,getPsn, tip}

 