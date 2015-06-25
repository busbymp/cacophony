$(document).ready(function () {
	var owl = $('#puzzle-carousel');
	owl.owlCarousel({ 
    pagination:false,  
    autoPlay : 4000, 
    slideSpeed : 300,
    paginationSpeed : 400,
 
    items : 3, 
    itemsDesktop : false,
    itemsDesktopSmall : [912,3],
    itemsTablet: [600,2],
    itemsMobile : [420,1]
  });

	$(".carousel-next").click(function(){
    owl.trigger('owl.next');
  })
  $(".carousel-prev").click(function(){
    owl.trigger('owl.prev');
  })

	/* suspect the below is causing the images to get cut off, height must be set before images are loaded - SA - 14/4/2014 */
	/*
	$('.owl-wrapper .owl-item').each(function (index, item) {
		var $item = $(item);
		var parentHeight = $item.parent().height();
		$item.height(parentHeight);
	})
	*/
});