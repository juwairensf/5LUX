$(function(){
    $("#close").on("click",function(){
        $("#popup").css({
            display:"none"
        })
    })



    // 二级菜单；
    $("#menu").on("mouseenter",function(){
        $(".ejcd").css({
            display:"block"
        })
    })
    $("#menu").on("mouseleave",function(){
        $(".ejcd").css({
            display:"none"
        })
    })

    $("#menu1").on("mouseenter",function(){
        $(".ejcd1").css({
            display:"block"
        })
    })
    $("#menu1").on("mouseleave",function(){
        $(".ejcd1").css({
            display:"none"
        })
    })

    //返回顶部；
    $('.GoToTop').click(function(){
        $('html , body').animate({scrollTop: 0},'slow');
    });

    
})



//设置cookie；
function setCookie(name,value,options){
    //默认参数；
    if(!options){
        options={}
    }

    // 根据参数判定是否拼接path和expires；
    document.cookie=(function(name,value,options){
        var str=name+"="+value;
        if(options.path){
            str+=";path="+options.path;
        }
        if(options.expires){
            var d=new Date();
            d.setDate(d.getDate()+expires);
            str+=";expires="+d;
        }
        return str;
    })(name,value,options)
}


function getCookie(name){
    var str = document.cookie;
    // console.log(str);  //imgSrc=http://p0.qhimgs4.com/t01279f64f0bc88d79c.jpg
    var arr=str.split("; ");
    // console.log(arr);//["imgSrc=http://p0.qhimgs4.com/t01279f64f0bc88d79c.jpg"]
    for(var i = 0;i < arr.length;i++){
        if(name===arr[i].split("=")[0]){
            return arr[i].split("=")[1];
            // console.log(arr[i].split("=")[0]);//imgSrc
            // console.log(arr[i].split("=")[1]);//http://p0.qhimgs4.com/t01279f64f0bc88d79c.jpg
        }
    }
    return "";
}

