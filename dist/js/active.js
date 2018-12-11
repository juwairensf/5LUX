$(function(){
    var $btns=$(".btn");
    var $lists=$(".list");
    $($btns).each(function(index){
        $($btns[index]).on("click",function(){
            $(this).find("i").toggleClass("active");
            // $($lists[index]).toggleClass("ul-active")
            // .slideToggle();
            $(this).next($lists[index]).toggleClass("ul-active").slideToggle();
        }) 
    })
})

