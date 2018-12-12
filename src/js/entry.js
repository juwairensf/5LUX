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
                            <button>立即购买</button>
                        </div>
                        
                    </div>
            `
        }
        return $(".container-goods").html(html);
    }
})

