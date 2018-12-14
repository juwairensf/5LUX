
/********放大镜*******/
function Magnifier(){}
$.extend(Magnifier.prototype,{
    init:function(){
        this.oSmall = $(".small_pic");
        this.oSaMg = $(".small_pic img");
        this.oFrame = $(".frame");
        this.oBig = $(".big");
        this.oBigImg = $(".big img");
        this.bindEvent()
    },
    bindEvent:function(){
        this.oSmall.on("mouseenter",this.show.bind(this));
        this.oSmall.on("mouseleave",this.hide.bind(this));
        this.oSmall.on("mousemove",this.picMove.bind(this));
    },
    show:function(){
        this.oBig.css({
            display:"block"
        })
		this.oFrame.css({
            display:"block"
        })
        this.oSaMg.css({
            opacity:0.3,
        })
    },
    hide:function(){
        this.oBig.css({
            display:"none"
        })
		this.oFrame.css({
            display:"none"
        })
        this.oSaMg.css({
            opacity:1,
        })
    },
    picMove(event){
        var e = event || window.event;
        var offsetX = e.offsetX;
        var offsetY = e.offsetY;
        var nleft = offsetX - 45;
        var ntop = offsetY - 68;
        // 边界检测
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
            left: -nleft * 3,
            top: -ntop * 3
        })
    }
}) 
var magnifier = new Magnifier();
magnifier.init();