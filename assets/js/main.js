
//Smooth scrolling
$(document).ready(function() {
	setBindings();
});

function setBindings(){
	$(".navLink").click(function(event){
		event.preventDefault();
		var sectionId = $(this).attr('href');
		$("html, body").animate({
			scrollTop: ($(sectionId).offset().top)
		}, 800);
	});
};

//Open/Closed based on time
$(document).ready(function() {
	// Date time variables
	var dtNow;       // Now
	var dtOpen;    // Weekday - Open
	var dtCloseWD;   // Weekday - Close
	var dtCloseFriSat;  // Saturday - Close
	var isOpen;      // is open?
	var openDisplay = $("#openSign");

	// Initialize date values
	dtNow = new Date();
	dtOpen = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 12);
	dtCloseWD = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 23);
	dtCloseFriSat = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 24);
	// Determine day and calculate isOpen
	switch (dtNow.getDay()) {

		case 5:
		isOpen = (dtNow.getTime() > dtOpen.getTime() && dtNow.getTime() < dtCloseFriSat.getTime());
		break;
		case 6:
		isOpen = (dtNow.getTime() > dtOpen.getTime() && dtNow.getTime() < dtCloseFriSat.getTime());
		break;
		default:
		isOpen = (dtNow.getTime() > dtOpen.getTime() && dtNow.getTime() < dtCloseWD.getTime());
	}

	if (isOpen){
		openDisplay.text(moment().format("h:mm a ddd MMM Do ") + " - Open Now")
	}
	else{
		openDisplay.text(moment().format("h:mm a ddd MMM Do ") + " - Closed Now")

	}
});


if($(window).width() > 812){
	$(window).on("resize scroll", function(){
		if($('.blankLeft').visible(true) && !$('.foodRight').visible(true)){
			$('.drinksLeftFixed').removeAttr('id');
		}
		else{
			$('.drinksLeftFixed').attr('id', 'hidden');
		}

		if($('.secondBlankLeft').visible(true) && !$('footer').visible(true)){
			$('.foodLeftFixed').removeAttr('id');
		}
		else{
			$('.foodLeftFixed').attr('id', 'hidden');
		}
	});
}


// $(window).on('resize scroll', function() {
//   $('.left').each(function() {
//       var activeColumn = $(this).attr('id');
//     if ($(this).isFullyInViewport()) {
//       $(activeColumn + 'Left').addClass('fixed');
//     } else {
//       $(activeColumn + 'Left').removeClass('fixed');
//     }
//   });
// });

//Grid Size Generator
// var images = document.querySelectorAll("img");
// var maxHeight = 0;
//
// for(int i = 0, i < images.length, i++){
// 	if(maxHeight < images[i].height){
// 		maxHeight = images[i].height;
// 	}
// }



//Gallery Image Slider
const slide = document.querySelector('.slider');
const slideImages = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

let counter = 1;
const size = slideImages[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', function(){
	if(counter >= slideImages.length - 1) return;
	slide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', function(){
	if(counter <= 0) return;
	slide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slide.addEventListener('transitionend', function(){
	if(slideImages[counter].id === 'lastClone'){
		slide.style.transition = "none";
		counter = slideImages.length - 2;
		slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}

	if(slideImages[counter].id === 'firstClone'){
		slide.style.transition = "none";
		counter = slideImages.length - counter;
		slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
});
