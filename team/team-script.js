function changePics(show){
	
	var current = document.getElementById(show)

	document.getElementById("senior-photos").className = "hidden"
	document.getElementById("junior-photos").className = "hidden"
	document.getElementById("sophomore-photos").className = "hidden"
	document.getElementById("freshman-photos").className = "hidden"

	current.className = "headshot"
	
}