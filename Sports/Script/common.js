// JavaScript Document
$(function () {
    //首页大图伸缩
    $(".i_index_list li").hover(function () {
        $(this).find(".i_mask").stop().animate({ bottom: 0 }, 300);
    }, function () {
        $(this).find(".i_mask").stop().animate({ bottom: "-33px" }, 300);
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

    //地图页高度
    var hh = $(window).height() - 152
    var ww = $(window).width() - 300
    $(".result_list").css("height", hh);
    $(".map_aside").css("height", hh - 43);
    $("#map-container").css({ "height": hh + 109 });

    $(window).on('resize', function () {
        var hh = $(window).height() - 152
        var ww = $(window).width() - 300
        $(".result_list").css("height", hh);
        $(".map_aside").css("height", hh - 43);
        $("#map-container").css({ "height": hh + 109 });
    })

    //地图页导航
    jQuery("#map_nav").slide({
        type: "menu",
        titCell: ".nav_li",
        targetCell: ".lay-screen:not('.sublevel')",
        delayTime: 0,
        triggerTime: 0,
        defaultPlay: false,
        returnDefault: true
    });

    $(".lay-screen li").hover(function () {
        $(this).find(".sublevel").toggle();
    })

    //地图页左侧折叠
    $(".packup").click(function () {
        var ts = $(this);
        if (ts.hasClass('packed')) {
            ts.removeClass('packed');
            ts.prev(".map_left").stop().css({ "border-right": "1px solid #ccc", "overflow": "visible" }).animate({ "width": 300 });

        } else {
            ts.addClass('packed');
            ts.prev(".map_left").stop().css({ "border": 0, "overflow": "hidden" }).animate({ "width": 0 });
        }
        //$(this).toggleClass("packed");
        //$(".map_left").stop().css({"border":"none","overflow":"hidden"}).animate({"width":0});
        //$(".map_left").stop().css({ width:0, border:"none", overflow:'hidden';});

    })
})