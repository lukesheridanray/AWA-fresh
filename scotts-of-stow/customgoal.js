var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);



$('#Logon').keypress(function(e) {
	if (e.which == 13) {
		e.preventDefault();
		window._vis_opt_queue = window._vis_opt_queue || [];
		window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(200);});
		return false;
	}
});

$("#Logon .btn_apply").click(function(e) {
	e.preventDefault();
	window._vis_opt_queue = window._vis_opt_queue || [];
	window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(200);});
});