$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
	});
	$('.slider__recent').slick({
		arrows: true,
		slidesToShow: 3,
		adaptiveHeight: true,
		variableWidth: true
	});
	$(".search__link").on("click",function(){
		if ($(this).hasClass('search__link__block')){
            $(".search__form").css("display","none")
    		$(".search__link").removeClass("search__link__block")

          }else{
            $(".search__form").css("display","block")
    		$(".search__link").addClass("search__link__block")

          };


}); 
/*------ FoterSlider ------------*/
	$('.footer__slider').slick({
  		dots: false,
  		infinite: true,
  		speed: 300,
  		slidesToShow: 1,
  		adaptiveHeight: true
});
$(".five li ul").hide();
$(".five li:has('.submenu')").hover(
  function(){
  $(".five li ul").stop().fadeToggle(300);}
);

/*------ Post ------------*/


	$('.post__describe i').on('click', function() {
		let elem = $(this).closest('.post__title__accordeon').children('.post__describe__more');
		let classElements = $('.post__title__accordeon');

		if(elem.css('display') === 'block') {
			elem.css('display', 'none');
			$(this).closest('.post__title__accordeon').find('.post__describe__text').css('color', '#000000');
			$(this).attr('class', 'fa fa-plus');
		} else {

			classElements.children('.post__describe__more').each((i, obj) => {
				obj.style.display = 'none';
			});

			classElements.find('.post__describe__text').each((i, obj) => {
				obj.style.color = '#000000';
			});

			classElements.find('i').each((i, obj) => {
				obj.className = 'fa fa-plus';
			});


			elem.css('display', 'block');
			$(this).closest('.post__title__accordeon').find('.post__describe__text').css('color', '#008fd5');
			$(this).attr('class', 'fa fa-minus');
		}
		console.log(elem);
	});
/*------ MultiSlider ------------*/

	$(".multiSlider")
		.jcarousel({
			items: '.multiSlider__item',
			wrap: 'circular'
		})
		.jcarouselAutoscroll({
			interval: 3000,
			target: '+=1',
			autostart: true
		});
})