$(function(){       
    // 核心；
    // 要显示谁；

    // 1、要显示的图片下标；
    // 2、要隐藏的图片下标；

    var index=0;

    var prve_index=0;

    // 选中所有的图片；
    var $slides=$(".slide");
    console.log($slides);

    var $slidewrap=$(".wrap");
    console.log($slidewrap);
    // 选中按钮的包裹；
    var $pages=$(".pages");
    console.log($pages);
    
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
        

        // 更改按钮；
        $pages.children().eq(index).addClass("active")
        .siblings("span")
        .removeClass("active");

        // 创建一辆车，车移动；

        // 如果存在就不创建了；
        if(!changeClass.$car){
            changeClass.$car=$("<div>");
            changeClass.$car.css({
                height:$slides.height(),
                width:$slides.width()*2,
                position:"absolute"
            })
            $slides.append(changeClass.$car);
        }

        // 放入元素；
        // 清空；
        changeClass.$car.html("");
        // 放入对应元素；
        changeClass.$car.css({
            "z-index":11
        })

        // 创建slide副本，设置副本位置；

        var clone_prve=$slides.eq(prve_index).clone().css({
            left:0
        })

        var clone_index=$slides.eq(index).clone().css({
            left:$slides.width()
        })

        // 插入副本；
        changeClass.$car
        .css({
            left:0,
            display:"block"
        })
        .stop().animate({
            left:-$slides.width()
        },function(){
            changeClass.$car.hide();
        })
    }

    // 自动播放就是让js帮我点击按钮 right；
    var banner_timer=setInterval('$(".right").trigger("click")',3000);

    // 用户体验的完善；
    $(".container").hover(function(){
        clearInterval(banner_timer);
    },function(){
        banner_timer=setInterval('$(".right").trigger("click")',3000)
    })
})
    