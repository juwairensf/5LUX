$(function(){
     
    // 获取数据；
    $.get("./json/cm.json")
    .then(function(res){
        // console.log(res);
        var list=res.result.wall.docs;
        console.log(list);
        render(list);
        // console.log(html);
    },function(error){
        console.log(error);
    })


    function render(json){
        html="";
        for(var i = 0;i<json.length;i++){
            html+=`
                    <div class="goods-list">
                        <div class="good-image">
                            <img src="${json[i].img}" alt="">
                        </div>
                        <div class="good-title">
                            <p>${json[i].title}</p>
                        </div>
                        <div class="good-detail clearfix">
                            <span>￥${json[i].price}</span>
                            <span>￥${json[i].orgPrice}</span>
                            <button class="buybtns" data="${json[i].tradeItemId}">立即购买</button>
                        </div>
                        
                    </div>
            `
            
            
        }
        $(".container-goods").on("click",".buybtns",function(){
            // console.log(111)
            var dataId = $(this).attr("data");
            console.log(dataId)
            setCookie("data",dataId)
            location.href = "http://localhost:8888/details.html"
        })
        return $(".container-goods").html(html);
    }
})

