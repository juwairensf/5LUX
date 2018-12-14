// 登录页面效果
$(function(){

    // 立即注册鼠标移入移出淡入效果；
    $("#register").on("mouseenter",function(){
        $("#register")
        .css({
            background:"#A60000"
        })
        .fadeIn(2000)
    })
    $("#register").on("mouseleave",function(){
        $("#register")
        .css({
            background:"#333"
        })
        .fadeIn(2000);
    })

   // input框聚焦改变边框效果；
    var $input=$("input");
    $($input).each(function(item){
        // console.log($input[item]);
        $($input[item]).on("focus",function(){
            $($input[item]).css({
                border: "1px solid #333"
            })
        })
        $($input[item]).on("blur",function(){
            $($input[item]).css({
                border: "1px solid #ccc"
            })
        })
    })
})

