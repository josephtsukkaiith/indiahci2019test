$(document).ready(function () {
	function show_nav_menu() {
		//To show the additional menu in the top nav bar. For desktop only
		$('#more-nav').show();
		$('#more img').addClass("active");
	}

	function hide_nav_menu() {
		//To hide the additional menu in the top nav bar. For desktop only
		//This nullifies whatever happens in the show_nav_menu() function
		$('#more-nav').hide();
		$('#more img').removeClass("active");
	}
	$("#more").bind("clickoutside", function (event) {
		//Hides the menu when someone clicks outside of it.
		//Source: http://benalman.com/projects/jquery-outside-events-plugin/
		//Also depends on the js file js/jquery.ba-outside-events.min.js
		hide_nav_menu();
	});
	$('#more').on('click focus', function () {
		//Shows additional menu when you click on the dots
		// or if the element is in focus through a keyboard
		show_nav_menu();
	});
	$('#more-nav').focusout(function () {
		//Shows additional menu when you click on the dots
		// or if the element is in focus through a keyboard
		//       hide_nav_menu();
	});
	$('.hamburger').click(function () {
		$('.primary-nav').show("slide");
		//      	$('ul#more-nav').show();
		$('.primary-nav').addClass('primary-vertical');
		$(".modal-bg").fadeIn(100);
	});
	$(".price-slab-more").click(function () {
		$('.price-slab-ext').show();
		$(".price-slab-more").hide();
		$(".price-slab-less").show();
		return (false);
	});
	$(".price-slab-less").click(function () {
		$('.price-slab-ext').hide();
		$(".price-slab-less").hide();
		$(".price-slab-more").show();
		return (false);
	});
	$(".modal-bg").click(function () {
		$('.primary-nav').hide("slide");
		$(this).hide();
	});
	$(".close-nav-img").click(function () {
		$('.primary-nav').hide("slide");
		$('.modal-bg').hide();
	});
	$('#close-nav').click(function () {
		//        $('.primary-nav').hide("slide");
		//        $('.primary-nav').addClass('primary-vertical');
	});
	$('.print-page  a').click(function () {
		return (false);
	});
	$('#now-showing').click(function () {
		$("ul.secondary-nav").toggle();
		$(this).toggleClass("active");
	});
	var viewportHeight = $(window).height();
	viewportHeight = viewportHeight - 75;
	//    console.log(viewportHeight);
	$(".stage").css("min-height", viewportHeight);

	//Code to highlight active link - STARTS here
	var href = document.location.href;
	var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
	var index = lastPathSegment.indexOf("?");
	if (index && index > 0) {
		lastPathSegment = lastPathSegment.substr(0, index);
	}
	var segment = "#" + lastPathSegment;
	//    console.log(lastPathSegment);
	if (lastPathSegment != "") {
		$("li").find(segment).addClass("active");
		var currentPage = $("li").find(segment).text();
		//		console.log(currentPage);
		$("#now-showing").append("Now Showing: " + currentPage);
	}
	if (lastPathSegment == "cfp") {
		$(".cfp").addClass("active");
		$("#now-showing").append("Call for Participation");
	}
	//    console.log("->", $(".left-col").has("#cfp-nav").length);
	if ($("ul.secondary-nav").hasClass("cfp-nav")) {
		$(".cipn").addClass("active");
	}
	//Code to highlight active link - ENDs here
	var pageTop = $(window).scrollTop();
	//    console.log("Page top is: ", pageTop);
	var logoTransHeight = viewportHeight;
	$(window).scroll(function () {
		if ($(this).scrollTop() > logoTransHeight) {
			//$(".stage h2").hide();
			//            $(".top-bar").removeClass("trans");

		}
		if ($(this).scrollTop() < logoTransHeight) {
			//            $(".top-bar").addClass("trans");

		}
	});
	//Code to ensure that the sticky sec-nav starts moving after the footer comes into view
	//    //    Source: http://jsfiddle.net/tovic/vVaat/light/
	//    function isScrolledIntoView(elem) {
	//        var $window = $(window),
	//            docViewTop = $window.scrollTop(),
	//            docViewBottom = docViewTop + $window.height(),
	//            elemTop = $(elem).offset().top,
	//            elemBottom = elemTop + $(elem).outerHeight();
	//        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	//    }
	//    $(window).on("scroll", function () {
	//        if (isScrolledIntoView('.socialize')) {
	//            //do something
	//        } else {
	//            //do something
	//        }
	//    });
	var docuHeight = $(document).height();
	$(document).scroll(function () {
		if ($(document).scrollTop() >= 100) {
			//$(".top-bar").removeClass(".trans");
			// user scrolled 50 pixels or more;
			// do stuff
			//            $(".sec-nav").addClass("red");
		} else {
			//            $(".sec-nav").removeClass("red");
		}
	});
	//Following code generates a random background image for the top bar
	//Dependent file - rand.bg.js
	$(".top-bar").RandBG({
		ClassPrefix: "bg",
		count: 7
	});

	var pricingRadio = "normal";
	var currCurrency = "inr";

	//Pricing page
	$('#normal-pricing-radio').click(function () {
		if ($(this).is(':checked')) {
			pricingRadio = "normal";
			console.log(currCurrency);

			$(".developing").hide();
			if (currCurrency == "inr") {
				$(".usd.normal").hide();
				$(".euro.normal").hide();
				$(".inr.normal").show();
			}
			if (currCurrency == "usd") {
				$(".inr.normal").hide();
				$(".euro.normal").hide();
				$(".usd.normal").show();
			}
			if (currCurrency == "euro") {
				$(".usd.normal").hide();
				$(".euro.normal").hide();
				$(".euro.normal").show();
			}
			$(".normal").addClass("yel-fade");
		}
	});
	$('#developing-pricing-radio').click(function () {
		if ($(this).is(':checked')) {
						console.log(currCurrency);
			pricingRadio = "developing";
			$(".normal").hide();
			if (currCurrency == "inr") {
				$(".developing").hide();
				$(".inr.developing").show();
			}
			if (currCurrency == "usd") {
				$(".developing").hide();
				$(".usd.developing").show();
			}
			if (currCurrency == "euro") {
				$(".developing").hide();
				$(".euro.developing").show();
			}
			$(".developing").addClass("yel-fade");
		}
	});


	//For Changing Currency that is currently being shown
	$('#show-inr').click(function () {
		$(".currency-buttons ul li").removeClass("active");
		$(this).addClass("active");
		currCurrency = "inr";
		$(".usd").hide();
		$(".euro").hide();
		$(".inr").show();
		$(".inr").addClass("yel-fade");
		if (pricingRadio == "developing") {
			$(".inr.normal").hide();
			$(".inr.developing").show();
			$(".inr.developing").addClass("yel-fade");
		}
		if (pricingRadio == "normal") {
			$(".inr.developing").hide();
			$(".inr.normal").show();
			$(".inr.normal").addClass("yel-fade");
		}
	});
	$('#show-usd').click(function () {
		$(".currency-buttons ul li").removeClass("active");
		$(this).addClass("active");
		currCurrency = "usd";
		$(".inr").hide();
		$(".euro").hide();
		$(".usd").show();
		$(".usd").addClass("yel-fade");
		if (pricingRadio == "developing") {
			$(".usd.normal").hide();
			$(".usd.developing").show();
			$(".usd.developing").addClass("yel-fade");
		}
		if (pricingRadio == "normal") {
			$(".usd.developing").hide();
			$(".usd.normal").show();
			$(".usd.normal").addClass("yel-fade");
		}
	});
	$('#show-euro').click(function () {
		$(".currency-buttons ul li").removeClass("active");
		$(this).addClass("active");
		currCurrency = "euro";
		$(".inr").hide();
		$(".usd").hide();
		$(".euro").show();
		$(".euro").addClass("yel-fade");
		if (pricingRadio == "developing") {
			$(".euro.normal").hide();
			$(".euro.developing").show();
			$(".euro.developing").addClass("yel-fade");
		}
		if (pricingRadio == "normal") {
			$(".euro.developing").hide();
			$(".euro.normal").show();
			$(".euro.normal").addClass("yel-fade");
		}
	});

	$('a.not-open').click(function () {
		return false;
	});



	// Email Checking

	var emailForValidation = "";
	var emailCheck = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	var emailCheckFlag = 0;
	var checkForAvailability = 0;
	var emailAvailable = 0;
	
	var forgottenEmail = "";
	var forgottenEmailCheckFlag = "";
	
	var forgotEmail = {};
	forgotEmail.email = "";
	
	
	$("#forgot-password-textbox").on("input propertychange", function() {
		forgottenEmail = $.trim($("#forgot-password-textbox").val());
		
		if (forgottenEmail.match(emailCheck)) {
			forgottenEmailCheckFlag = 1;
			$("#forgot-password-submit").css({"pointer-events":"auto", "opacity":"1"});
		
		} else {
			forgottenEmailCheckFlag = 0;
			$("#forgot-password-submit").css({"pointer-events":"none", "opacity":"0.2"});
		}
	});
	
	
	
	
	$("#forgot-password-submit").on("click", function(e){
		e.preventDefault();
		
		$("#forgot-password-no").hide();
		$("#forgot-password-yes").hide();
		$("#forgot-password-container").slideUp(100);
		
		
		$("#forgotten-email-confirm").text(forgottenEmail);
		$("#forgotten-email-error").text(forgottenEmail);
		
		forgotEmail.email = forgottenEmail;
		
		$.ajax({
			method: "POST",
			url: "php-scripts/forgot-password.php",
			data: forgotEmail,
			success: function (msg) {
				
				if (msg == "found") {
					$("#forgot-password-no").hide();
					$("#forgot-password-container").fadeOut(150);
					$("#forgot-password-yes").slideDown(250);
					
				} else {
					$("#forgot-password-yes").hide();
					$("#forgot-password-container").show();
					$("#forgot-password-no").slideDown(250);
				}
			}
		});
	
	});
	
	
	var password1 = "";
	var password1Length = 0;
	var password2 = "";
	var password2Length = 0;
	var emailForPasswordChange = "";
	var newPassword = {};

	
	
	$("#password-change-1").on("input propertychange", function(){
		password1 = $("#password-change-1").val();
		password1Length = password1.length;
		
		password2 = $("#password-change-2").val();
		password2Length = password2.length;
		
		if (password1 == "") {
			$("#password-change-2").val("");
			password2 = "";
			password1Length = 0;
			password2Length = 0;
			$("#password-change-submit").css({"pointer-events":"none", "opacity":"0.2"});
		}
		
		
		if ((password1Length == password2Length) && (password1 == password2)) {
			$("#password-change-submit").css({"pointer-events":"auto", "opacity":"1"});
		} else {
			$("#password-change-submit").css({"pointer-events":"none", "opacity":"0.2"});
		}
	});
	
	
	
	$("#password-change-2").on("input propertychange", function(){
		password1 = $("#password-change-1").val();
		password1Length = password1.length;
		
		password2 = $("#password-change-2").val();
		password2Length = password2.length;
		
		
		if ((password1Length == password2Length) && (password1 == password2)) {
			$("#password-change-submit").css({"pointer-events":"auto", "opacity":"1"});
		} else {
			$("#password-change-submit").css({"pointer-events":"none", "opacity":"0.2"});
		}
		
	});
	
	
	
	$("#password-change-submit").on("click", function (e){
		e.preventDefault();
		
		emailForPasswordChange = $.trim($("#hidden-email-for-password-change").val());
		
		newPassword.email = emailForPasswordChange;
		newPassword.newpass = $("#password-change-1").val();
		
		$("#password-change-success").hide();
		$("#password-change-fail").hide();
		$("#new-password-container").slideUp(150);
		
		$.ajax({
			method: "POST",
			url: "../register/php-scripts/new-password.php",
			data: newPassword,
			success: function (msg) {
				if (msg == "success") {
					$("#password-change-fail").hide();
					$("#new-password-container").slideUp(150);
					$("#password-change-success").slideDown(250);
				
				} else {
					$("#password-change-fail").slideDown();
					$("#new-password-container").fadeIn(150);
					$("#password-change-success").hide();
				}
			}
		});
	});
	
	
	
	
	
	
	
	
	


	$("#email-verification-textbox").on("input propertychange", function() {
		emailForValidation = $.trim($("#email-verification-textbox").val());
		if (emailForValidation.match(emailCheck)) {
			emailCheckFlag = 1;
			checkForAvailability = 1;
			$("#available-spinner").show();

			if (checkForAvailability == 1) {	

				var data = {};
				var emailForAvailability = $.trim($("#email-verification-textbox").val());
				data.emailForAvailability = emailForAvailability;

				$.ajax({
					type: "POST",
					url:"../register/php-scripts/check-for-availability.php",
					data: data,
					success: function(msg) {
					
						
						if (msg == 1) {
							$("#verification-email-noexists-container").slideDown(200);
							$("#available-spinner").hide();
							$("#verification-email-exists-container").slideUp(100);
							$("#email-verification-submit").css({"pointer-events":"none", "opacity":"0.2"});
							
						} 

						else  {
							$("#verification-email-exists-container").slideDown(200);
							$("#verification-email-noexists-container").slideUp(100);
							$("#available-spinner").hide();
							$("#email-verification-submit").css({"pointer-events":"auto", "opacity":"1"});
							
						}
					}
				});
			}
			
		} else {
			emailCheckFlag = 0;
			$("#email-verification-submit").css({"pointer-events":"none", "opacity":"0.2"});
			checkForAvailability = 0;
			$("#available-spinner").hide();
			$("#verification-email-noexists-container").slideUp(100);
			$("#verification-email-exists-container").slideUp(100);
		}
	});











	$("#nav-login-register-textbox-email").on("input propertychange", function() {

		emailForValidation = $.trim($("#nav-login-register-textbox-email").val());

		if (emailForValidation.match(emailCheck)) {
			emailCheckFlag = 1;
			$("#nav-login-register-submit").css({"pointer-events":"auto", "opacity":"1"});
		
			
		} else {
			emailCheckFlag = 0;
			$("#nav-login-register-submit").css({"pointer-events":"none", "opacity":"0.2"});
		}
	});

	var verificationEmail = "";

	$("#email-verification-submit").on("click", function(e){
		e.preventDefault();

		verificationEmail = $.trim($("#email-verification-textbox").val());

		$("#verification-email-sent-to").text(verificationEmail);

		var data = {};
		data.verificationEmail = verificationEmail;

		$("#email-verification-container").fadeOut(100, function(){
			$("#verification-spinner-container").fadeIn(200);
		});
		

		$.ajax({
			type: "POST",
			url:"../register/php-scripts/email-verification.php",
			data: data,
			success: function(response){
				
				setTimeout( function(){
					
	 
					if (response.length <= 9) {
						$("#verification-spinner-container").hide();
						$("#check-your-email-container").slideDown(200);
					} else {
						$("#verification-spinner-container").hide();
						$("#verification-error-container").slideDown(200);
					}
				}, 5000);
			}
		});

	});


		navLoginPanelFlag = 0;


		$("#nav-login-register-link").on("click", function(e){
			e.preventDefault();
			if (navLoginPanelFlag == 0) {
				$("#nav-login-register-container").slideDown(50);
				navLoginPanelFlag = 1;
				$(this).css({"color":"#f6901e"});
			} else if (navLoginPanelFlag == 1) {
				$("#nav-login-register-container").slideUp(100);
				navLoginPanelFlag = 0;
				$(this).css({"color":"#cfb7c6"});
			}
		});

		$("#more").on("click", function(e){
			e.preventDefault();
			if (navLoginPanelFlag == 1) {
				$("#nav-login-register-container").slideUp(100);
				navLoginPanelFlag = 0;
				$(this).css({"color":"#cfb7c6"});
			}
		});
		
	
});
