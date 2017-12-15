$(function(){
	if($(".scroll_arrow").length > 0) {
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$(".scroll_arrow").show()
			} else {
				$(".scroll_arrow").hide()
			}
		});
		$(".scroll_arrow").click(function () {
			$("body,html").animate({scrollTop: 0}, 2000);
		})
	}

	$(".collapse > ul > li > a").each(function() {
		var t = window.location.pathname
		, a = $(this).attr("href");
	  a && t == a && $(this).parent("li").addClass("active_1")
	})
});
