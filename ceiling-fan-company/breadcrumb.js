console.warn("CURRENT BREADCRUMB: " + sessionStorage.getItem('lastPage'));

getBreadCrumb();

function getBreadCrumb() {
	// Insert link to last page
	if (sessionStorage.getItem('lastPage') != null) {
		$('body').prepend("<a id='AWA-last-page' href='" + sessionStorage.getItem('url') + "'>" + sessionStorage.getItem('lastPage') + "</a>");
	}

	var breadCrumbLength = $('.Breadcrumb').find('li:not(:has(a))').length;

	if (breadCrumbLength == 1) {
		sessionStorage.setItem('lastPage', $('.Breadcrumb').find('li:not(:has(a))').text());
		sessionStorage.setItem('url', window.location.href);
		console.info('Last page set to: ' + $('.Breadcrumb').find('li:not(:has(a))').text());
	} else if (breadCrumbLength > 1) {
		sessionStorage.setItem('lastPage', $('.BlockContent').find('h2').text());
		sessionStorage.setItem('url', window.location.href);
		console.info('Last page set to: ' + $('.Breadcrumb').find('li:not(:has(a))').text());
	} else if (window.location.href == "http://www.theceilingfancompany.co.uk/") {
		sessionStorage.setItem('lastPage', "Home");
		sessionStorage.setItem('url', window.location.href);
		console.info('Last page set to HOME');
	} else {
		sessionStorage.setItem('lastPage', null);
		sessionStorage.setItem('url', window.location.href);
		console.info('Set to null');
	}
}
