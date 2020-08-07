
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


const appearOptions = {
  root: null,
  threshold: 0.15, // how much of content is in view (0-1)
  rootMargin: "0px 0px -200px 0px" // fade in when item is over 200px in view

};

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {// if false
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

