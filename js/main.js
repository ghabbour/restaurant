$(document).ready(function(){

	// nav-btn click event
	var clicked = false;
	var $header = $('header');
	$('.nav-btn').click(function(e){
		var $this = $(this);

		if(!clicked) {
			clicked = true;
			e.stopPropagation();
			$this.parent().toggleClass('active');
			setTimeout(function(){
				clicked = false;
				}, 1000);
		}
		
	});

	$(document).click(function(){

		$('.nav-btn').parent().removeClass('active');
	});

	var $mainsection = $('.main-section');
	$(window).scroll(function(){
		if ( $(window).scrollTop() >= $mainsection.height() - 120 ){
			$header.addClass('sticky');
		}
		else {
			$header.removeClass('sticky');	
		}
	});


	/* slider function */
	function menuSlider(){
		var $sliderContainer = $('.menu-slider');
		var $sliderBanner = $sliderContainer.find('.slider-banner');
		var $slider = $sliderContainer.find('.slider');
		var $sliderItems = $sliderBanner.find('.slider-item');
		var itemsLength = $sliderItems.length;
		var $nextBtn = $sliderContainer.find('.arrow.next');
		var $prevBtn = $sliderContainer.find('.arrow.prev');
		
		var slidesToShow = 3;
		var activeSlides = slidesToShow;
		$sliderItems.outerWidth( ( $slider.width() / slidesToShow ) );

		var itemWidth ;
		var itemsWidth ;

		function fixWidth() {

			itemWidth = $('.menu-slider .slider-item').outerWidth();
			itemsWidth = itemWidth * itemsLength;
			$sliderBanner.width(itemsWidth);
		} fixWidth();

		$(window).resize(function(){
			activeSlides -= slidesToShow;
			if( $(window).width() <= 991  && $(window).width() > 550 ) {
				slidesToShow = 2;
			}
			else if( $(window).width() <= 550 ) {
				slidesToShow = 1;
			}
			else {
				slidesToShow = 3;
			}

			activeSlides += slidesToShow;
			$sliderItems.outerWidth( ( $slider.width() / slidesToShow ) );		
			fixWidth();
		});

		var left = 0;

		var clicked = false;

		function checkStatus() {
			if(activeSlides == itemsLength ) {
				$nextBtn.addClass('disabled');
			}
			else {
				$nextBtn.removeClass('disabled');	
			}

			if( activeSlides == slidesToShow ) {
				$prevBtn.addClass('disabled');
			}
			else {
				$prevBtn.removeClass('disabled');	
			}
		} checkStatus();

		$nextBtn.click(function(){
			if (!clicked) {
				
				if( activeSlides != itemsLength) {
				
				clicked = true;
				left -= itemWidth;	
				$sliderBanner.css('left' , left);
				activeSlides ++;
				setTimeout(function(){
					clicked = false;
				}, 400)
				checkStatus();
				}
			}
		});

		$prevBtn.click(function(){
			if(!clicked) {

				if( activeSlides > slidesToShow) {
				
				clicked = true;
				left += itemWidth;	
				$sliderBanner.css('left' , left);
				activeSlides --;
				setTimeout(function(){
						clicked = false;
					}, 400)
				checkStatus();
				}
			}
		});

	}
	menuSlider();



	/* slider function */
	function chefSlider(){
		var $sliderContainer = $('.chef-slider');
		var $sliderBanner = $sliderContainer.find('.slider-banner');
		var $slider = $sliderContainer.find('.slider');
		var $sliderItems = $sliderBanner.find('.slider-item');
		var itemsLength = $sliderItems.length;
		var $nextBtn = $sliderContainer.find('.arrow.next');
		var $prevBtn = $sliderContainer.find('.arrow.prev');
		
		var slidesToShow = 1;
		var activeSlides = slidesToShow;
		$sliderItems.outerWidth( ( $slider.width() / slidesToShow ) );

		var itemWidth ;
		var itemsWidth ;

		function fixWidth() {

			itemWidth = $('.chef-slider .slider-item').outerWidth();
			itemsWidth = itemWidth * itemsLength;
			$sliderBanner.width(itemsWidth);
		} fixWidth();


		$(window).resize(function(){
			 
			$sliderItems.outerWidth( ( $slider.width() / slidesToShow ) );		
			fixWidth();
		});


		var left = 0;

		var clicked = false;

		function checkStatus() {
			if(activeSlides == itemsLength ) {
				$nextBtn.addClass('disabled');
			}
			else {
				$nextBtn.removeClass('disabled');	
			}

			if( activeSlides == slidesToShow ) {
				$prevBtn.addClass('disabled');
			}
			else {
				$prevBtn.removeClass('disabled');	
			}
		} checkStatus();

		$nextBtn.click(function(){
			if (!clicked) {
				
				if( activeSlides != itemsLength) {
				
				clicked = true;
				left -= itemWidth;	
				$sliderBanner.css('left' , left);
				activeSlides ++;
				setTimeout(function(){
					clicked = false;
				}, 400)
				checkStatus();
				}
			}
		});

		$prevBtn.click(function(){
			if(!clicked) {

				if( activeSlides > slidesToShow) {
				
				clicked = true;
				left += itemWidth;	
				$sliderBanner.css('left' , left);
				activeSlides --;
				setTimeout(function(){
						clicked = false;
					}, 400)
				checkStatus();
				}
			}
		});

	}
	chefSlider();

});