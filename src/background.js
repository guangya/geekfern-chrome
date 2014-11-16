chrome.browserAction.onClicked.addListener( function(tab) {
	// window.open('http://www.geekfern.com');
	chrome.tabs.create({url:"http://www.geekfern.com"}, function (tab){
		// do something after the window opened
	});
});