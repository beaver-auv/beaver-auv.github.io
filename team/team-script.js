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

// Render team from JSON
window.addEventListener('DOMContentLoaded', function() {
  // Helper to map grade to section
  const gradeToSection = grade => {
    if (grade === '12') return 'Seniors';
    if (grade === '11') return 'Juniors';
    if (grade === '10') return 'Sophomores';
    if (grade === '9')  return 'Freshmen';
    return 'Other';
  };
  // Fetch and render team
  fetch('../images/team-headshots/people.json')
    .then(r => r.json())
    .then(people => {
      // Group by section
      const sections = { Seniors: [], Juniors: [], Sophomores: [], Freshmen: [] };
      people.forEach(person => {
        const section = gradeToSection(person.Grade);
        if (sections[section]) sections[section].push(person);
      });
      // Render
      const sectionOrder = [
        { name: 'Seniors', id: 'co2023' },
        { name: 'Juniors', id: 'co2024' },
        { name: 'Sophomores', id: 'co2025' },
        { name: 'Freshmen', id: 'co2026' }
      ];
      let html = '';
      sectionOrder.forEach(sectionObj => {
        const section = sectionObj.name;
        const sectionId = sectionObj.id;
        if (sections[section].length === 0) return;
        html += `<h2 class='dm-sans underline-heading' id='${sectionId}' style='margin-top:2.5rem; text-align:left;'>${section}</h2>`;
        html += `<div class='team-flex' style='display:flex; flex-wrap:wrap; gap:2.2rem 2.2rem; margin-top:2rem; text-align:left;'>`;
        sections[section].forEach(person => {
          const imgSrc = '../images/team-headshots/placeholder.png';
          html += `<div style='width:220px; background:none; box-shadow:none; border-radius:0; padding:0; margin-bottom:2.2rem; text-align:center;'>`;
          html += `<img src='${imgSrc}' alt='${person.Name}' style='width:100%; max-width:160px; border-radius:14px; margin-bottom:1rem; box-shadow:none; display:block; margin-left:auto; margin-right:auto;'>`;
          html += `<h5 class='dm-sans' style='color:#395674; font-size:1.1rem; margin-bottom:0.3rem; text-align:center;'>${person.Name}</h5>`;
          html += `</div>`;
        });
        html += `</div>`;
      });
      var teamSections = document.getElementById('team-sections');
      if (teamSections) teamSections.innerHTML = html;
    });
});

