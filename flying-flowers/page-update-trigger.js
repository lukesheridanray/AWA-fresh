// Track if page has been updated at all
var pageUpdated = false;

// Listen for Ajax updates to the page
$(document).ajaxSuccess(function() {
	if (!pageUpdated) { // If the page hasn't been updated...
		console.log("Page has been updated");
		pageUpdated = true;
	}
});