$(function(){
    // 列表详情；
    // console.log(getCookie("data"))

    var dId = getCookie("data")
    var json = ""
    $.get("./json/cm.json")
    .then(function(res){
        // console.log(res)
        json = res.result.wall.docs;
        render()
    })
    var goodsJson = [];
    function render(){
        goodsJson = json;
        for(var i = 0 ; i < json.length ; i++){
            if(dId == json[i].tradeItemId){
                $(".Magnifier_shop img").attr("src",json[i].img)
                $("h4").html(json[i].title)
                $(".Details_right_prices p").html(json[i].price);
                $(".Details_right_prices span").html(json[i].orgPrice);
                $(".Simg1").attr("src",json[i].img)
                $(".Details_rightphone_qr span").html(json[i].price);
                $(".buy_img").attr("src",json[i].img)
                $("#title").html(json[i].title);
                $("#price").html(json[i].price);
                $(".add_buy").attr("data-id",json[i].tradeItemId)
            }
        }
    }


    // 点击出现购物车商品列表；

    $(".car-container").on("mouseenter",function(){
        $(".car-list").css({
            display:"block"
        })
        $(".car-list ul").html(renderCart());
    })
    $(".car-container").on("mouseleave",function(){
        $(".car-list").css({
            display:"none"
        })
    })


    // 购物车；
    // var goodsJson = [];

    // 1. 所有的按钮绑定事件; 

    $(".add_buy").on("click",handleCarClick);

    function handleCarClick(event){
        var e = event || window.event;
        var target = e.target || e.srcElement;
        var iid = $(target).attr("data-id");

        var nowMsg = findJson(iid)[0];
        // console.log(nowMsg)
        addCar(nowMsg,iid);
    }
    // localStroage =>

    // 1. 增删改查 ; setItem getItem length key() clear();
    // 2. 遵循同源策略; 
    // 3. 只能存储纯字符;


    function addCar(nowMsg , iid){
        // 存数据;
        // 1. 因为我们要存的数据是对象,但是localstroage可以存储的数据只有字符;
        // object => string;
        $.extend(nowMsg , {count : 1});
        var sNowMsg = JSON.stringify(nowMsg);
        console.log(sNowMsg);
        // localStorage.setItem("cart",`[${sNowMsg}]`)
        // 2. 如果直接进行存储的话会导致购物车里只有一个数据。如果要储存多个，那么购物车里的数据应该以数组为数据类型;
        
        // 3. 还是覆盖是为什么，因为如果已经有了数据,那么这时候我们会覆盖之前的数据;
        // 先把结构取出来 查看一下是否存在，如果存在，我就向里面拼接,如果不存在我再建立结构;

        if(!localStorage.cart){
                localStorage.setItem("cart",`[${sNowMsg}]`);
                return false;
        }
        // 如果存在对结构进行插入;

        // aMsg 变成数组了; localStorage 字符串转换成数组的数据;
        console.log(localStorage.cart)
        var aMsg = JSON.parse(localStorage.cart);
        // console.log(aMsg)

        // 如果存在数据就不push ， 而是增加 count 值;
        if(!hasIid(aMsg,iid)){
                aMsg.push(nowMsg);
        }

        //localStorage 重新设置；
        localStorage.setItem("cart",JSON.stringify(aMsg));

        console.log(JSON.parse(localStorage.cart));
    }



    function hasIid(aMsg,iid){
        for(var i = 0 ; i < aMsg.length ; i ++){
                if(aMsg[i].tradeItemId == iid){
                    aMsg[i].count ++;
                    return true;
                }
        }
        return false;
    }
    function findJson(iid){
        return  goodsJson.filter(function(item){
                return  item.tradeItemId === iid
        })
    }

    // 购物车获取;
    function getCart(){
        if(!localStorage.cart) return 0;
        var aMsg = JSON.parse(localStorage.cart);
        return aMsg;
    }

    function renderCart(){
        var html = "";
        var cart_json = getCart();
        if(!cart_json) return 0;
        for(var i = 0 ; i < cart_json.length ; i ++){
                html += `<li class="clearfix">
                <img class="buy_img" src="${cart_json[i].img}" alt="">
                 <strong id="title">${cart_json[i].title}</strong >
                <strong id="price">${cart_json[i].price}</strong >
                <strong id="mount">${cart_json[i].count}</strong >
                
            </li> `
        }

        return html;
    }

    $("#clear").on("click",function(){
        localStorage.clear("cart");
    })





})


