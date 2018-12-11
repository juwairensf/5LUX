$(function(){
    $("#close").on("click",function(){
        $("#popup").css({
            display:"none"
        })
    })
})




// 选择器的封装

function _(selector){
    var ele=document.querySelectorAll(selector);
    if(ele.length===0) return null;
    return ele.length===1 ? ele[0] : ele;
}

function _jsonp(url,cb){
    return new Promise(function(resolve,reject){
        cb=cb ? cb : "callback";
        var script=document.createElement("script");
        var randomName="h"+Date.now();
        url += (/\?/.test(url) ? "&" : "?")+`${cb}=${randomName}`;
        script.src=url;
        document.body.appendChild(script);

        window[randomName]=function(res){
            resolve(res)
        }

        script.onload=function(){
            this.remove();
        }
    })
}

// 兼容型伪数组转真数组；
function _slice(args){
    return Array.prototype.slice.call(args)
}

//移除class的类名；
function _removeClass(dom,className){
    return dom.className=dom.className.replace(className,"");
}