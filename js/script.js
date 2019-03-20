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
		$('.login-button').show("slide");
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
		$('.login-button').hide("slide");
		$(this).hide();
	});
	$(".close-nav-img").click(function () {
		$('.primary-nav').hide("slide");
		$('.login-button').hide("slide");
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
//	console.log("Last Path Segment: " +lastPathSegment);
	if (lastPathSegment.indexOf('.') > -1)
	{
		console.log("contains .php");
		lastPathSegment = lastPathSegment.substring(0, lastPathSegment.indexOf('.'));
	}
	if (lastPathSegment.indexOf('#') > -1)
	{
		console.log("contains #");
		lastPathSegment = lastPathSegment.substring(0, lastPathSegment.indexOf('#'));
	}
	var segment = "#" + lastPathSegment;
//	console.log("New Last Path Segment: " +lastPathSegment);
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
	if (lastPathSegment == "registration") {
		$("#now-showing").empty();
		$("#now-showing").append("Now Showing: Registration");
	}
	if ($("ul.secondary-nav").hasClass("attending-nav")) {
		$(".attn").addClass("active");
	}
	if (lastPathSegment == "organizers") {
		$("#now-showing").empty();
		$("#now-showing").append("Now Showing: Organizers");
	}
	if (lastPathSegment == "field-trips-cfp") {
		$("#field-trips").addClass("active");
		$("#now-showing").empty();
		$("#now-showing").append("Now Showing: Field Trip CFP");
	}
	if ($("ul.secondary-nav").hasClass("org-nav")) {
		$(".orgn").addClass("active");
	}
	//Code to highlight active link - ENDs here
	var pageTop = $(window).scrollTop();
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
	$('.show-inr').click(function () {
		$(".currency-buttons ul li").removeClass("active");
		$('.show-inr').addClass("active");
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
	$('.show-usd').click(function () {
		$(".currency-buttons ul li").removeClass("active");
		$('.show-usd').addClass("active");
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
	$('.show-euro').click(function () {
		$(".currency-buttons ul li").removeClass("active");
		$('.show-euro').addClass("active");
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
	$(".show-abstract").click(function () {
		$(this).siblings(".ft-abstract").addClass("open");
		$(this).hide();
		$(this).siblings(".ft-abstract").children(".grad-layer").hide();
		$(this).siblings(".hide-abstract").show();
	});
	$(".hide-abstract").click(function () {
		$(this).siblings(".ft-abstract").removeClass("open");
		$(this).hide();
		$(this).siblings(".ft-abstract").children(".grad-layer").show();
		$(this).siblings(".show-abstract").show();
	});
	$(".show-abstract a").click(function (){
		return false;
	});
	$(".see-details").click(function (){
		$(this).parent().siblings(".row-details").addClass("open");
		$(this).parent().parent().addClass("yel-fade");
		$(this).siblings(".hide-details").show();
		$(this).hide();
		return false;
	});
	$(".hide-details").click(function (){
		$(this).parent().siblings(".row-details").removeClass("open");
		$(this).parent().parent().removeClass("yel-fade");
		$(this).siblings(".see-details").show();
		$(this).hide();
		return false;
	});
	//-----------------------------------
	// For Gallery using Colorbox Library
	// Source: http://www.jacklmoore.com/colorbox/
	$(".gallery").colorbox({rel:'gallery', transition:"none", width:"75%", height:"75%"});
	//-----------------------------------
	// For Tabs
	function tabs_reset(){
		$(".panel").hide();
		$(".tabs li").removeClass("active");
		$(".tabs li").attr("aria-selected","false");
		$(".panel").attr("aria-hidden","true");
	}
	$("#tab1").click(function (){
		tabs_reset();
		$("#panel1").show();
		$("#panel1").attr("aria-hidden","false");
		$(this).addClass("active");
		$(this).attr("aria-selected","true");
		return false;
	});
	$("#tab2").click(function (){
		tabs_reset();
		$("#panel2").show();
		$("#panel2").attr("aria-hidden","false");
		$(this).addClass("active");
		$(this).attr("aria-selected","true");
		return false;
	});
	$("#tab3").click(function (){
		tabs_reset();
		$("#panel3").show();
		$("#panel3").attr("aria-hidden","false");
		$(this).addClass("active");
		$(this).attr("aria-selected","true");
		return false;
	});
	$("#tab4").click(function (){
		tabs_reset();
		$("#panel4").show();
		$("#panel4").attr("aria-hidden","false");
		$(this).addClass("active");
		$(this).attr("aria-selected","true");
		return false;
	});
	$("#tab5").click(function (){
		tabs_reset();
		$("#panel5").show();
		$("#panel5").attr("aria-hidden","false");
		$(this).addClass("active");
		$(this).attr("aria-selected","true");
		return false;
	});
	$("#tab6").click(function (){
		tabs_reset();
		$("#panel6").show();
		$("#panel6").attr("aria-hidden","false");
		$(this).addClass("active");
		$(this).attr("aria-selected","true");
		return false;
	});
	$("#tab7").click(function (){
		tabs_reset();
		$("#panel7").show();
		$("#panel7").attr("aria-hidden","false");
		$(this).addClass("active");
		$(this).attr("aria-selected","true");
		return false;
	});
	
	//For Accommodation Listing
	function show_acco_list(){
//		$(this).children(".view-h").toggle();
//		$(this).children(".hide-h").toggle();
		console.log("hi");
//		$(this).parent().next(".inclusion-box").toggle();
//		$(".view-h").children().toggle();
//		$(".hide-h").children().toggle();
//		$(".inclusion-box").toggle();
	}
	$(".view-inclusion").click(function (){
//		show_acco_list();
		$(this).children(".view-h").toggle();
		$(this).children(".hide-h").toggle();
		$(this).parent().siblings(".inclusion-box").toggle();
		return false;
	});
	$(".hide-inclusion a").click(function (){
//		show_acco_list();
		$(this).parent().parent(".inclusion-box").toggle();
		$(this).parent().parent().siblings(".inclusions").children().children(".view-h").toggle();
		$(this).parent().parent().siblings(".inclusions").children().children(".hide-h").toggle();
		$(this).children(".hide-h").toggle();
		console.log("ytyt")
		return false;
	});
	function food_menu_hide(){
		$(".food-menu-panel").hide();
	}
	 $('#food-menu-select').change(function(){
        if($('#food-menu-select').val() == 'day-1') {
            console.log("Day 1");
			food_menu_hide();
			$(".day-1-menu").show();
        }
		 if($('#food-menu-select').val() == 'day-2') {
            console.log("Day 2");
			 food_menu_hide();
			$(".day-2-menu").show();
        }
		  if($('#food-menu-select').val() == 'day-3') {
            console.log("Day 3");
			  food_menu_hide();
			$(".day-3-menu").show();
        }
		  if($('#food-menu-select').val() == 'day-4') {
            console.log("Day 4");
			  food_menu_hide();
			$(".day-4-menu").show();
        }
		  if($('#food-menu-select').val() == 'day-5') {
            console.log("Day 5");
			  food_menu_hide();
			$(".day-5-menu").show();
        }
    });
});
