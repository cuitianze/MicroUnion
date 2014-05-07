/**
 * Created by boling on 14-4-30.
 */
$(function(){
    var videoLink = [
        'http://player.youku.com/player.php/sid/XNzAwODY5MjE2/v.swf',
        'http://player.youku.com/player.php/sid/XNTQxMzM5ODI0/v.swf'
    ];
    $(".video_btn").each(function(index){
        $(".video_btn").eq(index).click(function() {
            $("embed").attr('src',videoLink[index]);
            $(".video").css('display','block')
                .mouseout(function(){
                    $('.video_close').show();
                });
            $(".video_close").click(function() {
                $(".video").css('display','none')
            })
        });
    });

});
