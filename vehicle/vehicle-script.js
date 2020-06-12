function changeclassmech() {
    document.getElementById('mechanics-contents').className = 'contents';
    document.getElementById('electronics-contents').className = 'hidden';
    document.getElementById('software-contents').className = 'hidden';
}
function changeclasselec() {
    document.getElementById('mechanics-contents').className = 'hidden';
    document.getElementById('electronics-contents').className = 'contents';
    document.getElementById('software-contents').className = 'hidden';
}
function changeclasssoft() {
    document.getElementById('mechanics-contents').className = 'hidden';
    document.getElementById('electronics-contents').className = 'hidden';
    document.getElementById('software-contents').className = 'contents';
}

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