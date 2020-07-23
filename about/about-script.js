function run(){
	var w = window.innerWidth;
	var twitterFeed = document.getElementById("twitter-feed");

	var oldWidth = twitterFeed.dataset.width


	/*var width = twitterFeed.dataset.width;*/


	var newWidth = Math.round((w/5)*3);

	if(newWidth < 200){
		newWidth = 200
	}

	twitterFeed.dataset.width = String(newWidth)

	/*twitterFeed.dataset.width = String(newWidth);*/

}