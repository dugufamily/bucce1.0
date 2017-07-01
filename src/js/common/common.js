import axios from 'axios'
import store from 'store';
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
 

export function getItem (item) {
            return store.get(item);
        }
export function setItem (item, value) {
            store.set(item, value);
        }
export function removeItem (item) {
            store.remove(item);
        }
export function clearItem () {
            store.clear();
 }
 export function timeInteval (o,time,fn,content){
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
 