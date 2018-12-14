
/********放大镜*******/
$(function(){
    function Magnifier(){}
    $.extend(Magnifier.prototype,{
        init:function(){
            this.oSmall = $(".Magnifier_shop");
            this.oSaMg = $(".Magnifier_shop img");
            this.oFrame = $("#Magnifier_shop_S");
            this.oBig = $(".Magnifier_shop_B");
            this.pop=$(".pop")
            this.oBigImg = $(".Magnifier_shop_B img");
            this.bindEvent();
        },
        bindEvent:function(){
            this.oSmall.on("mouseenter",this.show.bind(this));
            this.oSmall.on("mouseleave",this.hide.bind(this));
            this.pop.on("mousemove",this.picMove.bind(this));
        },
        show:function(){
            this.oBig.css({
                display:"block"
            })
            this.oFrame.css({
                display:"block",
            })
        },
        hide:function(){
            this.oBig.css({
                display:"none"
            })
            this.oFrame.css({
                display:"none",
            })
        },
        
        picMove(event){
            var e = event || window.event;
            // 获取定位的x,y 值;
            var offsetX = e.offsetX;
            var offsetY = e.offsetY;
            // console.log(offsetX,offsetY)
            // 给元素设置的left 值 和top值;
            var nleft = offsetX - 50;
            var ntop = offsetY - 75;
            //边界检测
            //最小值
            nleft = nleft < 0 ? 0 : nleft;
            ntop = ntop < 0 ? 0 : ntop;
            // 最大值；
            //console.log(this.oSmall.offsetHeight);
            var maxLeft = this.oSmall.innerWidth() - this.oFrame.innerWidth();
            var maxTop = this.oSmall.innerHeight() - this.oFrame.innerHeight();
            //console.log(maxLeft);
            nleft = nleft > maxLeft ? maxLeft : nleft;
            ntop = ntop > maxTop ? maxTop : ntop;
            this.oFrame.css({
                left:nleft,
                top:ntop,
                backgroundPosition: `${-nleft}Px ${-ntop}px`
            });
            this.oBigImg.css({
                left: -nleft * 4,
                top: -ntop * 4
            })
        }
    }) 
    var magnifier = new Magnifier();
    magnifier.init();
})