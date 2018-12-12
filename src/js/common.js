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



    
})


