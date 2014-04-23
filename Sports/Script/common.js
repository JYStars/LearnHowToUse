// JavaScript Document
$(function(){
	//首页大图伸缩
    $(".i_index_list li").hover(function () {
	    $(this).find(".i_mask").stop().animate({ bottom: 0 }, 300);
	},function(){
	    $(this).find(".i_mask").stop().animate({ bottom: "-33px" }, 300);
	})
})