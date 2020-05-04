$(function() {
    var w_height = $(window).height()+40;
    
    $('.welcome').css('height', w_height);

    // $.srSmoothscroll({
    //      // defaults
    //      step: 75,
    //      speed: 250,
    //      ease: 'linear'
    // });

});

$(document).ready(function(){
	if (window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(max-width: 991px)').matches) {

	} else {
		$('.dropdown').on('mouseenter', function(e){
			$(this).trigger("show.bs.dropdown");
		});

		$('.dropdown').on('mouseleave', function(e){
			$(this).trigger("hide.bs.dropdown");
		});

		// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
		$('.dropdown').on('show.bs.dropdown', function(e){
			var elem = $(this);
		    $(elem).find('.dropdown-menu').first().stop(true, true).slideDown(400, function() {
		    	$(elem).addClass('open');
		        $(elem).find('.dropdown-toggle').attr('aria-expanded','false');
		    });
		});

		// ADD SLIDEUP ANIMATION TO DROPDOWN //
		$('.dropdown').on('hide.bs.dropdown', function(e){
		    e.preventDefault();
		    var elem = $(this);
		    $(elem).find('.dropdown-menu').first().stop(true, true).slideUp(400, function(){
		        //On Complete, we reset all active dropdown classes and attributes
		        //This fixes the visual bug associated with the open class being removed too fast
		        $(elem).removeClass('open');
		        $(elem).find('.dropdown-toggle').attr('aria-expanded','false');
		    });
		});
	}
});

$('.ecta-header').click(function(){
	$('.email-cta').toggleClass("open");
	if ($('.email-cta').hasClass("open")) {
		$('.ecta-header i').addClass("fa-chevron-down");
		$('.ecta-header i').removeClass("fa-chevron-up");
	} else {
		$('.ecta-header i').removeClass("fa-chevron-down");
		$('.ecta-header i').addClass("fa-chevron-up");
	}
});

$('#ecta-form').submit(function(e){
	e.preventDefault();
	var form = $('#ecta-form');
	$.ajax({
		url: '/includes/send-email.php',
		type: "POST",
		data: form.serialize(),
		success: function(data) {
			if (data == 'Sent Successfully!') {
				$('.ecta-body').html('<p>Thank you for your enquiry, we will be in touch shortly.</p>');
				form[0].reset();
			}
		}
	});
});