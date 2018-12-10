$(function(){
    // 核心；
    // 要显示谁；

    // 1、要显示的图片下标；
    // 2、要隐藏的图片下标；

    var index=0;

    var prve_index=0;

    // 选中所有的图片；
    var $slides=$(".slide");
    // console.log($slides);

    // 选中按钮的包裹；
    var $pages=$(".pages");
    // console.log($pages);

    // 找到最后的一张图片的下标；
    var maxIndex=$slides.length-1;
    // console.log(maxIndex);

    // 轮播就是控制index 自增自减 及 范围的一个小特效；

    // 选中左按钮并绑定事件；
    $(".left").on("click",prve);
    // console.log($(".left"))

    // 选中右按钮并绑定事件；
    $(".right").on("click",next);

    // 切换下一张图片；
    function next(){
        prve_index=index;
        if(index == maxIndex){
            index=0;
        }else{
            index ++;
        }
        changeClass();
    }
    function prve(){
        prve_index=index;
        if(index == 0){
            index=maxIndex;
        }else{
            index --;
        }
        changeClass();
    }

    //当我们在切换图片的时候，只不过是在操作index；

    function changeClass(){
        $slides.eq(prve_index).addClass("slide-willhide")
        .siblings(".slide")
        .removeClass("slide-willhide")

        $slides.eq(index).addClass("slide-show")
        .siblings(".slide")
        .removeClass("slide-show")
        // 动画效果；
        .end()
        // 给上一张图片加上class willhide；
        .hide()
        .stop()
        .fadeIn();


        // 更改按钮；
        $pages.children().eq(index).addClass("active")
        .siblings("span")
        .removeClass("active");
    }



    // 根据图片的多少创建按钮；
    function initPagination(){
        // 创建$slides数量的按钮；
        for(var i = 0;i<$slides.length;i++){
            var $span=$("<span>");
            if(i===index){
                $span.addClass("active");
            }
            $pages.append($span);
        }
    }

    initPagination();

    // 事件委托；
    $pages.on("mouseover","span",toIndex);
    function toIndex(event){
        // 获取当前元素的下标；
        // 获取事件源；（获取当期发生事件的元素）；
        var e = event || window.event;
        var target=e.target || e.srcElement;

        // jQuery提供了一个index()方法；
        // 在一组元素之中，查找到某个元素的下标；
        prve_index=index;
        index=$pages.children().index(target);
        // console.log(index);
        changeClass();
    }

    // 自动播放就是让js帮我点击按钮 right；
    var banner_timer=setInterval('$(".right").trigger("click")',2000);

    // 用户体验的完善；
    $(".container").hover(function(){
        clearInterval(banner_timer);
    },function(){
        banner_timer=setInterval('$(".right").trigger("click")',3000)
    })
})