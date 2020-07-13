window.onload = function() {
	var modal = document.getElementById("email-container");

	// Get the button that opens the modal
	var btn = document.getElementById("emailUs");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	  modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}

	// get email-from address
	//var emailBody = document.getElementById("email-script").value


}

function sendEmail(){

	var emailBody = document.getElementById("email-script").value

	var emailBodywithLineBreak = emailBody.replace(/\r\n|\r|\n/g, "%0D%0A");

	

	var email = "beaverauv@bcdschool.org";
	var subject = "BeaverAuv Inquery";
	var emailBody = emailBody;
	document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBodywithLineBreak;
	/*var emailFrom = document.getElementById("email-from").value
	var emailBody = document.getElementById("email-script").value

	alert(emailFrom, emailBody)*/
	/*Email.send({
	    Host : "smtp.yourisp.com",
	    Username : "fascettij21@bcdschool.org",
	    Password : "jfascetti21",
	    To : 'them@website.com',
	    From : "you@isp.com",
	    Subject : "This is the subject",
	    Body : "And this is the body"
	}).then(
	  message => alert(message)
	);*/
}