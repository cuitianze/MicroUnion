/**
 * Created by boling on 14-5-5.
 */
$(function() {
    $("#school li").each(function(index){
        $(this).mouseenter(function(){
            var thisPos = $(this).position();
            var X = thisPos.top;
            var Y = thisPos.left;
            //console.log( X + "   " + Y);
            var nowSchool = $(".school").eq(index);
            nowSchool.css("top",X+24);
//            nowSchool.css("left",Y-15);
            nowSchool.fadeIn().siblings(".school").hide();
            nowSchool.mouseleave(function(){
                $(".school").hide();
            });
            var nowWx = $(nowSchool).children("ul").children("li").children(".wx");
            $(nowWx).each(function(i) {
                $(this).bind("mouseenter",function() {
                    $(nowSchool).children(".weixin").eq(i).css("display","block");
                });
                $(this).bind("mouseleave",function() {
                    $(".weixin").hide();
                });

            });
        });
    });
});

