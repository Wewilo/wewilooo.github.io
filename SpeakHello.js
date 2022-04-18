(function(window) {
	var word = "Hello";
	var helloSpeaker = function (name) {
		console.log(word + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);