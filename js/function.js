/**
 * @author minks
 */

$(function() {
	//검색창 보이기&숨기기
	$("header.header .header_search_area .header_search_footer").click(function() {
		if ($("header.header .header_search_area").hasClass("on")) {
			$("header.header .header_search_area").removeClass("on");
		} else {
			$("header.header .header_search_area").addClass("on");
		}
	});
	
    //swiper 슬라이드 (배너)
	var banner_swiper = new Swiper('.main_slide', {
        observer: true,
        observeParents: true,
        slidesPerView : 1,
        autoplay: {
            delay: 4000,
			disableOnInteraction: false
        },
        watchOverflow: true
    });
});

