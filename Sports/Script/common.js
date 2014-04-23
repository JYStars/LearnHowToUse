// JavaScript Document
$(function () {
    //首页大图伸缩
    $(".i_index_list li").hover(function () {
        $(this).find(".i_mask").stop().animate({ bottom: 0 }, 300);
    }, function () {
        $(this).find(".mask").stop().animate({ bottom: "-33px" }, 300);
    })

    //导航
    jQuery("#nav").slide({
        type: "menu",
        titCell: ".dp",
        targetCell: ".sub",
        delayTime: 0,
        defaultPlay: false,
        returnDefault: true
    });

})