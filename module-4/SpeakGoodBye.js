(function(window) {
	var word = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(word + " " + name);
	}	
	window.byeSpeaker = byeSpeaker;
})(window);
