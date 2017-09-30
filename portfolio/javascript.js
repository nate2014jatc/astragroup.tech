window.addEvent("domready",function() {
	var cssPrefix = "";
	switch(Browser.name) {
		case "safari":
			cssPrefix = "webkit";
			break;
		case "chrome":
			cssPrefix = "webkit";
			break;
		case "firefox":
			cssPrefix = "moz";
			break;
		case "opera":
			cssPrefix = "o";
			break;
		case "ie":
			cssPrefix = "ms";
			break;
	}
// Spin them rays!
	if(cssPrefix) {
		speed = 0.3;
		(function() {
			var rays = $("rays"), d = 0, dir = 1;
			(function() {
				d += speed * dir;
				rays.set("style","-" + cssPrefix + "-transform:rotate(" + d + "deg)");
			}).periodical(20);
		})();
	}
});

