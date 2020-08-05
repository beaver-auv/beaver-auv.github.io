/*
function changePics(show){
	
	var current = document.getElementById(show)

	document.getElementById("senior-photos").className = "hidden"
	document.getElementById("junior-photos").className = "hidden"
	document.getElementById("sophomore-photos").className = "hidden"
	document.getElementById("freshman-photos").className = "hidden"

	current.className = "headshot"
	
}
*/
// for "to top" button
	//Get the button
	var mybutton = document.getElementById("myBtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	    mybutton.style.display = "block";
	  } else {
	    mybutton.style.display = "none";
	  }
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	  document.body.scrollTop = 0;
	  document.documentElement.scrollTop = 0;
	}

