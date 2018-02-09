
//Smooth scrolling
$(document).ready(function() {
		$('a[href]').bind('click', function(e) {

				var target = $(this).attr("href");
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top - 57 //Offset of scroll
				}, 800, function() {
						location.hash = target;
				});

				return false;
		});
});

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
  dtOpen = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 11);
  dtCloseWD = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 21);
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
