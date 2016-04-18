//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
// 
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  };
}

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

	// Initialise the experiment object
	var exp = {};

	// Wrapper for console.log, to prevent the exp breaking on browsers which don't
	// (always) have 'console' set (e.g. IE9)
	exp.log = function (str) {
	    if (typeof window.console !== 'undefined') {
	        console.log(str);
	    }
	};

	// Log the experiment, useful when multiple experiments are running
	exp.log('Product Images v2');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	//exp.condition = $("#main_internal_full_box");

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Gift Guide 2 failed a condition');
	//     return false;
	// }
	// Commenting out conditions since IE is having a hard time with it

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		pompidou: {
			desktopImages: [
				'<a data-image-count="4" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/373961d3affd42caa77be1e82741946e_ojhseh4qtgklstb02zrm1sjplmj6s9ajxnjtvuwuqt8.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/373961d3affd42caa77be1e82741946e_ojhseh4qtgklstb02zrm1sjplmj6s9ajxnjtvuwuqt8.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/373961d3affd42caa77be1e82741946e_ojhseh4qtgklstb02zrm1sjplmj6s9ajxnjtvuwuqt8.jpg" class="" alt="Pompidou Metal &amp; Gladfass Side Table, Small - Metal">\
				</a>',
				'<a data-image-count="5" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/36c185d6fcdf3add8e27425699bdd581_g3haa5u1ehqqwdrtgctzeqp6pm4-rijou3-1joesu84.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/36c185d6fcdf3add8e27425699bdd581_g3haa5u1ehqqwdrtgctzeqp6pm4-rijou3-1joesu84.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
								<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/36c185d6fcdf3add8e27425699bdd581_g3haa5u1ehqqwdrtgctzeqp6pm4-rijou3-1joesu84.jpg" class="" alt="Pompidou Metal &amp; Gladfass Side Table, Small - Metal">\
				</a>',
				'<a data-image-count="6" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/b086d0864e9e1f33f13d51f44d27459e_flayjgn5lo4xjdcelqvtqf7hkgepup1__j4_geiyoio.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/b086d0864e9e1f33f13d51f44d27459e_flayjgn5lo4xjdcelqvtqf7hkgepup1__j4_geiyoio.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
								<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/b086d0864e9e1f33f13d51f44d27459e_flayjgn5lo4xjdcelqvtqf7hkgepup1__j4_geiyoio.jpg" class="" alt="Pompidou Metal &amp; Gladfass Side Table, Small - Metal">\
				</a>',
				'<a data-image-count="7" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/3fbc5167ea0d74c9f5f4afec435352a9_ac17ggya4izjdllgkctku_vqrkokayzxwcbcgzerj3i.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/3fbc5167ea0d74c9f5f4afec435352a9_ac17ggya4izjdllgkctku_vqrkokayzxwcbcgzerj3i.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
								<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/3fbc5167ea0d74c9f5f4afec435352a9_ac17ggya4izjdllgkctku_vqrkokayzxwcbcgzerj3i.jpg" class="last" alt="Pompidou Metal &amp; Gladfass Side Table, Small - Metal">\
				</a>'
			],
			mobileImages: [
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/373961d3affd42caa77be1e82741946e_ojhseh4qtgklstb02zrm1sjplmj6s9ajxnjtvuwuqt8.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/373961d3affd42caa77be1e82741946e_ojhseh4qtgklstb02zrm1sjplmj6s9ajxnjtvuwuqt8.jpg' class='' alt='Pompidou Metal &amp; Glass Side Table, Small - Metal' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/36c185d6fcdf3add8e27425699bdd581_g3haa5u1ehqqwdrtgctzeqp6pm4-rijou3-1joesu84.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/36c185d6fcdf3add8e27425699bdd581_g3haa5u1ehqqwdrtgctzeqp6pm4-rijou3-1joesu84.jpg' class='' alt='Pompidou Metal &amp; Glass Side Table, Small - Metal' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/b086d0864e9e1f33f13d51f44d27459e_flayjgn5lo4xjdcelqvtqf7hkgepup1__j4_geiyoio.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/b086d0864e9e1f33f13d51f44d27459e_flayjgn5lo4xjdcelqvtqf7hkgepup1__j4_geiyoio.jpg' class='' alt='Pompidou Metal &amp; Glass Side Table, Small - Metal' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/3fbc5167ea0d74c9f5f4afec435352a9_ac17ggya4izjdllgkctku_vqrkokayzxwcbcgzerj3i.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/3fbc5167ea0d74c9f5f4afec435352a9_ac17ggya4izjdllgkctku_vqrkokayzxwcbcgzerj3i.jpg' class='' alt='Pompidou Metal &amp; Glass Side Table, Small - Metal' draggable='false'></li>"
				]
		},
		lampshade: {
			desktopImages: [
				'<a data-image-count="5" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/053b548ef07373f3928270d817278385_lvphmvlieuhuaqfkim-nz9cw57mlbj9yepu4tbb8k6q.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/053b548ef07373f3928270d817278385_lvphmvlieuhuaqfkim-nz9cw57mlbj9yepu4tbb8k6q.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/053b548ef07373f3928270d817278385_lvphmvlieuhuaqfkim-nz9cw57mlbj9yepu4tbb8k6q.jpg" class="" alt="45cm Drum Linen Lampshade - Natural">\
				</a>',
				'<a data-image-count="6" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/d6971d14a969b2273a548c23f33a8e51_tzzihwlkyzbx8zdsofhx09-a1nkb22srj5osk0odhmk.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/d6971d14a969b2273a548c23f33a8e51_tzzihwlkyzbx8zdsofhx09-a1nkb22srj5osk0odhmk.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/d6971d14a969b2273a548c23f33a8e51_tzzihwlkyzbx8zdsofhx09-a1nkb22srj5osk0odhmk.jpg" class="" alt="45cm Drum Linen Lampshade - Natural">\
				</a>',
				'<a data-image-count="7" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/d7e69067dc93662f423f8921dcc58980_kzbdpkgmon3t0r3irw-tfhfphfst_xo7wv0nhkiyu8g.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/d7e69067dc93662f423f8921dcc58980_kzbdpkgmon3t0r3irw-tfhfphfst_xo7wv0nhkiyu8g.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/d7e69067dc93662f423f8921dcc58980_kzbdpkgmon3t0r3irw-tfhfphfst_xo7wv0nhkiyu8g.jpg" class="" alt="45cm Drum Linen Lampshade - Natural">\
				</a>',
				'<a data-image-count="8" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/cb8aaac68495e3b156406d1865601af3_ybwsgg-pty9ofajgdimjg8fvmme36qaakmepaos4thc.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/cb8aaac68495e3b156406d1865601af3_ybwsgg-pty9ofajgdimjg8fvmme36qaakmepaos4thc.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
								<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/cb8aaac68495e3b156406d1865601af3_ybwsgg-pty9ofajgdimjg8fvmme36qaakmepaos4thc.jpg" class="last" alt="45cm Drum Linen Lampshade - Natural">\
				</a>'
			],
			mobileImages: [
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/053b548ef07373f3928270d817278385_lvphmvlieuhuaqfkim-nz9cw57mlbj9yepu4tbb8k6q.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/053b548ef07373f3928270d817278385_lvphmvlieuhuaqfkim-nz9cw57mlbj9yepu4tbb8k6q.jpg' class='' alt='45cm Drum Linen Lampshade - Natural' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/d6971d14a969b2273a548c23f33a8e51_tzzihwlkyzbx8zdsofhx09-a1nkb22srj5osk0odhmk.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/d6971d14a969b2273a548c23f33a8e51_tzzihwlkyzbx8zdsofhx09-a1nkb22srj5osk0odhmk.jpg' class='' alt='45cm Drum Linen Lampshade - Natural' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/d7e69067dc93662f423f8921dcc58980_kzbdpkgmon3t0r3irw-tfhfphfst_xo7wv0nhkiyu8g.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/d7e69067dc93662f423f8921dcc58980_kzbdpkgmon3t0r3irw-tfhfphfst_xo7wv0nhkiyu8g.jpg' class='' alt='45cm Drum Linen Lampshade - Natural' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/cb8aaac68495e3b156406d1865601af3_ybwsgg-pty9ofajgdimjg8fvmme36qaakmepaos4thc.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/cb8aaac68495e3b156406d1865601af3_ybwsgg-pty9ofajgdimjg8fvmme36qaakmepaos4thc.jpg' class='' alt='45cm Drum Linen Lampshade - Natural' draggable='false'></li>"
			]
		},
		cutlerySet: {
			desktopImages: [
				'<a data-image-count="4" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/6d5c45b63a1f4f0ca03f9ec80717d055_w18ygid5wywf19s-n9f_gzzu3hvgwspezpcpbrtpteg.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/6d5c45b63a1f4f0ca03f9ec80717d055_w18ygid5wywf19s-n9f_gzzu3hvgwspezpcpbrtpteg.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/6d5c45b63a1f4f0ca03f9ec80717d055_w18ygid5wywf19s-n9f_gzzu3hvgwspezpcpbrtpteg.jpg" class="" alt="Harlequin 24-piece Cutlery Set - Denim Blue">\
				</a>',
				'<a data-image-count="5" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/a0626f1233e0562b88d69546ce20b0a1_hbsevypbn9nfuhmhoq399kela5pksa0ya0ykzthb8gy.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/a0626f1233e0562b88d69546ce20b0a1_hbsevypbn9nfuhmhoq399kela5pksa0ya0ykzthb8gy.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/a0626f1233e0562b88d69546ce20b0a1_hbsevypbn9nfuhmhoq399kela5pksa0ya0ykzthb8gy.jpg" class="" alt="Harlequin 24-piece Cutlery Set - Denim Blue">\
				</a>',
				'<a data-image-count="6" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/754d7a4dff2cf4094bc9ee0291919dac_3mj1x2-akhhpsexwzz6cikutict4ev9fha_cy9smmkc.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/754d7a4dff2cf4094bc9ee0291919dac_3mj1x2-akhhpsexwzz6cikutict4ev9fha_cy9smmkc.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/754d7a4dff2cf4094bc9ee0291919dac_3mj1x2-akhhpsexwzz6cikutict4ev9fha_cy9smmkc.jpg" class="last" alt="Harlequin 24-piece Cutlery Set - Denim Blue">\
				</a>'
			],
			mobileImages: [
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/6d5c45b63a1f4f0ca03f9ec80717d055_w18ygid5wywf19s-n9f_gzzu3hvgwspezpcpbrtpteg.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/6d5c45b63a1f4f0ca03f9ec80717d055_w18ygid5wywf19s-n9f_gzzu3hvgwspezpcpbrtpteg.jpg' class='' alt='Harlequin 24-piece Cutlery Set - Denim Blue' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/a0626f1233e0562b88d69546ce20b0a1_hbsevypbn9nfuhmhoq399kela5pksa0ya0ykzthb8gy.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/a0626f1233e0562b88d69546ce20b0a1_hbsevypbn9nfuhmhoq399kela5pksa0ya0ykzthb8gy.jpg' class='' alt='Harlequin 24-piece Cutlery Set - Denim Blue' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/754d7a4dff2cf4094bc9ee0291919dac_3mj1x2-akhhpsexwzz6cikutict4ev9fha_cy9smmkc.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/754d7a4dff2cf4094bc9ee0291919dac_3mj1x2-akhhpsexwzz6cikutict4ev9fha_cy9smmkc.jpg' class='' alt='Harlequin 24-piece Cutlery Set - Denim Blue' draggable='false'></li>"
			]
		},
		diningChair: {
			desktopImages: [
				'<a data-image-count="5" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/65be9678a20c6f17e4587053d9a9383a_g2lnvjl5tnpc45gng-v9io-mndmot8ljxjwcyczknug.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/65be9678a20c6f17e4587053d9a9383a_g2lnvjl5tnpc45gng-v9io-mndmot8ljxjwcyczknug.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/65be9678a20c6f17e4587053d9a9383a_g2lnvjl5tnpc45gng-v9io-mndmot8ljxjwcyczknug.jpg" class="" alt="Camargue Weathered Oak Dining Chair">\
				</a>',
				'<a data-image-count="6" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/9b502a9aac3d9449799e8d05f9bc1ebe_jopyoh1sow0m0qmxsxizovrnqabwofmzqqpwqu9bqea.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/9b502a9aac3d9449799e8d05f9bc1ebe_jopyoh1sow0m0qmxsxizovrnqabwofmzqqpwqu9bqea.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/9b502a9aac3d9449799e8d05f9bc1ebe_jopyoh1sow0m0qmxsxizovrnqabwofmzqqpwqu9bqea.jpg" class="" alt="Camargue Weathered Oak Dining Chair">\
				</a>',
				'<a data-image-count="7" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/df5b4ebc6aa22b59ab7e9decaadfb67d_3tvefupdbjoecftm4n7geaamyyofu1nx3em6gmq0s0s.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/df5b4ebc6aa22b59ab7e9decaadfb67d_3tvefupdbjoecftm4n7geaamyyofu1nx3em6gmq0s0s.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/df5b4ebc6aa22b59ab7e9decaadfb67d_3tvefupdbjoecftm4n7geaamyyofu1nx3em6gmq0s0s.jpg" class="" alt="Camargue Weathered Oak Dining Chair">\
				</a>',
				'<a data-image-count="8" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/0aa061531ccabc5f1670caf651560131_mz8vtmp_bwifbcmjosi2hspfhjvmu5sxzcq71rw3diq.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/0aa061531ccabc5f1670caf651560131_mz8vtmp_bwifbcmjosi2hspfhjvmu5sxzcq71rw3diq.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/0aa061531ccabc5f1670caf651560131_mz8vtmp_bwifbcmjosi2hspfhjvmu5sxzcq71rw3diq.jpg" class="" alt="Camargue Weathered Oak Dining Chair">\
				</a>',
				'<a data-image-count="9" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/6aef74969660de0e35b6b98c2610e51a_mz9wvn-j-ilolbm3nykxz4y8sgoo4mk9fhn4vwbr-hy.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/6aef74969660de0e35b6b98c2610e51a_mz9wvn-j-ilolbm3nykxz4y8sgoo4mk9fhn4vwbr-hy.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/6aef74969660de0e35b6b98c2610e51a_mz9wvn-j-ilolbm3nykxz4y8sgoo4mk9fhn4vwbr-hy.jpg" class="last" alt="Camargue Weathered Oak Dining Chair">\
				</a>',
			],
			mobileImages: [
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/65be9678a20c6f17e4587053d9a9383a_g2lnvjl5tnpc45gng-v9io-mndmot8ljxjwcyczknug.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/65be9678a20c6f17e4587053d9a9383a_g2lnvjl5tnpc45gng-v9io-mndmot8ljxjwcyczknug.jpg' class='' alt='Camargue Weathered Oak Dining Chair' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/9b502a9aac3d9449799e8d05f9bc1ebe_jopyoh1sow0m0qmxsxizovrnqabwofmzqqpwqu9bqea.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/9b502a9aac3d9449799e8d05f9bc1ebe_jopyoh1sow0m0qmxsxizovrnqabwofmzqqpwqu9bqea.jpg' class='' alt='Camargue Weathered Oak Dining Chair' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/df5b4ebc6aa22b59ab7e9decaadfb67d_3tvefupdbjoecftm4n7geaamyyofu1nx3em6gmq0s0s.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/df5b4ebc6aa22b59ab7e9decaadfb67d_3tvefupdbjoecftm4n7geaamyyofu1nx3em6gmq0s0s.jpg' class='' alt='Camargue Weathered Oak Dining Chair' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/0aa061531ccabc5f1670caf651560131_mz8vtmp_bwifbcmjosi2hspfhjvmu5sxzcq71rw3diq.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/0aa061531ccabc5f1670caf651560131_mz8vtmp_bwifbcmjosi2hspfhjvmu5sxzcq71rw3diq.jpg' class='' alt='Camargue Weathered Oak Dining Chair' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/6aef74969660de0e35b6b98c2610e51a_mz9wvn-j-ilolbm3nykxz4y8sgoo4mk9fhn4vwbr-hy.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/6aef74969660de0e35b6b98c2610e51a_mz9wvn-j-ilolbm3nykxz4y8sgoo4mk9fhn4vwbr-hy.jpg' class='' alt='Camargue Weathered Oak Dining Chair' draggable='false'></li>"
			]
		},
		cushionCover: {
			desktopImages: [
				'<a data-image-count="5" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/55fb5958cc0f17cdbfb401b587d5d519_gbibvurzsmpgrsqeh40kbx7ous089y1uloe03ehodm0.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/55fb5958cc0f17cdbfb401b587d5d519_gbibvurzsmpgrsqeh40kbx7ous089y1uloe03ehodm0.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/55fb5958cc0f17cdbfb401b587d5d519_gbibvurzsmpgrsqeh40kbx7ous089y1uloe03ehodm0.jpg" class="" alt="Plain Velvet Cushion Cover, Large - Teal">\
				</a>',
				'<a data-image-count="6" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/aa3f7ee4fbd9007286e815a5e5874a3f_htapq8finczdqrttuihqgvtbcnvy7zwopjxgx5vvy0y.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/aa3f7ee4fbd9007286e815a5e5874a3f_htapq8finczdqrttuihqgvtbcnvy7zwopjxgx5vvy0y.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/aa3f7ee4fbd9007286e815a5e5874a3f_htapq8finczdqrttuihqgvtbcnvy7zwopjxgx5vvy0y.jpg" class="" alt="Plain Velvet Cushion Cover, Large - Teal">\
				</a>',		
				'<a data-image-count="7" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/744bb4cff81ce1e619188cb9246206b8_uossm-jnnqwjb9x4m6ekc0ho9qvfvegla-gaqt_o85m.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/744bb4cff81ce1e619188cb9246206b8_uossm-jnnqwjb9x4m6ekc0ho9qvfvegla-gaqt_o85m.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/744bb4cff81ce1e619188cb9246206b8_uossm-jnnqwjb9x4m6ekc0ho9qvfvegla-gaqt_o85m.jpg" class="last" alt="Plain Velvet Cushion Cover, Large - Teal">\
				</a>'
			],
			mobileImages: [
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/55fb5958cc0f17cdbfb401b587d5d519_gbibvurzsmpgrsqeh40kbx7ous089y1uloe03ehodm0.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/55fb5958cc0f17cdbfb401b587d5d519_gbibvurzsmpgrsqeh40kbx7ous089y1uloe03ehodm0.jpg' class='' alt='Plain Velvet Cushion Cover, Large - Teal' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/aa3f7ee4fbd9007286e815a5e5874a3f_htapq8finczdqrttuihqgvtbcnvy7zwopjxgx5vvy0y.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/aa3f7ee4fbd9007286e815a5e5874a3f_htapq8finczdqrttuihqgvtbcnvy7zwopjxgx5vvy0y.jpg' class='' alt='Plain Velvet Cushion Cover, Large - Teal' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/744bb4cff81ce1e619188cb9246206b8_uossm-jnnqwjb9x4m6ekc0ho9qvfvegla-gaqt_o85m.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/744bb4cff81ce1e619188cb9246206b8_uossm-jnnqwjb9x4m6ekc0ho9qvfvegla-gaqt_o85m.jpg' class='' alt='Plain Velvet Cushion Cover, Large - Teal' draggable='false'></li>"
			]
		},
		fauxMohairThrow: {
			desktopImages: [
				'<a data-image-count="1" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/cbc18bcf477a59dca8bac2a3e7fc25d4_v26yf327mr6he_fgisiaj-l9b1midomjku5ocfnrxui.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/cbc18bcf477a59dca8bac2a3e7fc25d4_v26yf327mr6he_fgisiaj-l9b1midomjku5ocfnrxui.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/cbc18bcf477a59dca8bac2a3e7fc25d4_v26yf327mr6he_fgisiaj-l9b1midomjku5ocfnrxui.jpg" class="" alt="Faux Mohair Throw - Faded Blue">\
				</a>',
				'<a data-image-count="2" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/9bb225a5079a2e38daab7ac2a13d83e4_hhpyc7smvilikekmx-jmdriao-g98210sm1hbrat4do.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/9bb225a5079a2e38daab7ac2a13d83e4_hhpyc7smvilikekmx-jmdriao-g98210sm1hbrat4do.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/9bb225a5079a2e38daab7ac2a13d83e4_hhpyc7smvilikekmx-jmdriao-g98210sm1hbrat4do.jpg" class="" alt="Faux Mohair Throw - Faded Blue">\
				</a>',
				'<a data-image-count="3" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/321f22d5582884bbb40b781159b99a6e_hz9p6hgf82z7gteyuhzuxmbudtubsgq7looqg3zfyrg.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/321f22d5582884bbb40b781159b99a6e_hz9p6hgf82z7gteyuhzuxmbudtubsgq7looqg3zfyrg.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/321f22d5582884bbb40b781159b99a6e_hz9p6hgf82z7gteyuhzuxmbudtubsgq7looqg3zfyrg.jpg" class="" alt="Faux Mohair Throw - Faded Blue">\
				</a>',
				'<a data-image-count="4" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/5705dcd44784545d3ea00e18c85efac0_k9lo6wibslphjsapew3wip9zyovy-92k-8vfz9nsp8k.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/5705dcd44784545d3ea00e18c85efac0_k9lo6wibslphjsapew3wip9zyovy-92k-8vfz9nsp8k.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/5705dcd44784545d3ea00e18c85efac0_k9lo6wibslphjsapew3wip9zyovy-92k-8vfz9nsp8k.jpg" class="" alt="Faux Mohair Throw - Faded Blue">\
				</a>',
				'<a data-image-count="5" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/f7fae64ceb756754d1b78677afdac1bf_noq2dguxbat_tm-dpatd56twa8nmtgaxxuqzi6lkdpo.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/f7fae64ceb756754d1b78677afdac1bf_noq2dguxbat_tm-dpatd56twa8nmtgaxxuqzi6lkdpo.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/f7fae64ceb756754d1b78677afdac1bf_noq2dguxbat_tm-dpatd56twa8nmtgaxxuqzi6lkdpo.jpg" class="" alt="Faux Mohair Throw - Faded Blue">\
				</a>',
				'<a data-image-count="6" data-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/b0a4974a7f9d16c368e2ad4a25bbfea9_yivmxqbmdkf4wnmmpt7pdmua3ts1gc52h0hlycc_y-e.jpg" data-zoom-image="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/b0a4974a7f9d16c368e2ad4a25bbfea9_yivmxqbmdkf4wnmmpt7pdmua3ts1gc52h0hlycc_y-e.jpg" class="last prod-carousal-img-count-for-zoom prod-carousal-small-img cursor-pointer AWA-image">\
					<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/b0a4974a7f9d16c368e2ad4a25bbfea9_yivmxqbmdkf4wnmmpt7pdmua3ts1gc52h0hlycc_y-e.jpg" class="last" alt="Faux Mohair Throw - Faded Blue">\
				</a>'
			],
			mobileImages: [
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/cbc18bcf477a59dca8bac2a3e7fc25d4_v26yf327mr6he_fgisiaj-l9b1midomjku5ocfnrxui.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/cbc18bcf477a59dca8bac2a3e7fc25d4_v26yf327mr6he_fgisiaj-l9b1midomjku5ocfnrxui.jpg' class='' alt='Faux Mohair Throw - Faded Blue' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/9bb225a5079a2e38daab7ac2a13d83e4_hhpyc7smvilikekmx-jmdriao-g98210sm1hbrat4do.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/9bb225a5079a2e38daab7ac2a13d83e4_hhpyc7smvilikekmx-jmdriao-g98210sm1hbrat4do.jpg' class='' alt='Faux Mohair Throw - Faded Blue' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/321f22d5582884bbb40b781159b99a6e_hz9p6hgf82z7gteyuhzuxmbudtubsgq7looqg3zfyrg.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/321f22d5582884bbb40b781159b99a6e_hz9p6hgf82z7gteyuhzuxmbudtubsgq7looqg3zfyrg.jpg' class='' alt='Faux Mohair Throw - Faded Blue' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/5705dcd44784545d3ea00e18c85efac0_k9lo6wibslphjsapew3wip9zyovy-92k-8vfz9nsp8k.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/5705dcd44784545d3ea00e18c85efac0_k9lo6wibslphjsapew3wip9zyovy-92k-8vfz9nsp8k.jpg' class='' alt='Faux Mohair Throw - Faded Blue' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/f7fae64ceb756754d1b78677afdac1bf_noq2dguxbat_tm-dpatd56twa8nmtgaxxuqzi6lkdpo.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/f7fae64ceb756754d1b78677afdac1bf_noq2dguxbat_tm-dpatd56twa8nmtgaxxuqzi6lkdpo.jpg' class='' alt='Faux Mohair Throw - Faded Blue' draggable='false'></li>",
				"<li class='item' style='width: 666px; float: left; display: block;'>" +
					'<img onclick="' + "MobilePanZoom('" + "//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/b0a4974a7f9d16c368e2ad4a25bbfea9_yivmxqbmdkf4wnmmpt7pdmua3ts1gc52h0hlycc_y-e.jpg'" + ");" + '" ' + "src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/b0a4974a7f9d16c368e2ad4a25bbfea9_yivmxqbmdkf4wnmmpt7pdmua3ts1gc52h0hlycc_y-e.jpg' class='' alt='Faux Mohair Throw - Faded Blue' draggable='false'></li>"
			]
		},
		dummyFlexSlider: '<div id="galleryMob" class="flexslider"><div class="flex-viewport" style="overflow: hidden; position: relative;"><ul class="slides" style="width: 800%; transition-duration: 0s; transform: translate3d(-596px, 0px, 0px);"><li class="item clone" aria-hidden="true" style="width: 596px; float: left; display: block;"><img onclick="MobilePanZoom(\'http://resources1.okadirect.com/assets/en/new/catalogue/1200x1200/QTH006OGE-0_L.jpg?version=7\');" src="http://resources1.okadirect.com/assets/en/new/catalogue/570x570/QTH006OGE-0_L.jpg?version=7" class="" alt="Faux Mohair Throw – Burnt Orange" draggable="false"></li><li class="item flex-active-slide" style="width: 596px; float: left; display: block;"><img onclick="MobilePanZoom(\'http://resources1.okadirect.com/assets/en/new/catalogue/1200x1200/QTH006OGE-0_01.jpg?version=7\');" src="http://resources1.okadirect.com/assets/en/new/catalogue/570x570/QTH006OGE-0_01.jpg?version=7" class=" active" alt="Faux Mohair Throw – Burnt Orange" draggable="false"></li><li class="item" style="width: 596px; float: left; display: block;"><img onclick="MobilePanZoom(\'http://resources1.okadirect.com/assets/en/new/catalogue/1200x1200/QTH006OGE-0_L.jpg?version=7\');" src="http://resources1.okadirect.com/assets/en/new/catalogue/570x570/QTH006OGE-0_L.jpg?version=7" class="" alt="Faux Mohair Throw – Burnt Orange" draggable="false"></li><li class="item clone" aria-hidden="true" style="width: 596px; float: left; display: block;"><img onclick="MobilePanZoom(\'http://resources1.okadirect.com/assets/en/new/catalogue/1200x1200/QTH006OGE-0_01.jpg?version=7\');" src="http://resources1.okadirect.com/assets/en/new/catalogue/570x570/QTH006OGE-0_01.jpg?version=7" class=" active" alt="Faux Mohair Throw – Burnt Orange" draggable="false"></li></ul></div><ol class="flex-control-paging flex-control-nav flex-control-paging"><li><a class="flex-active">1</a></li><li><a>2</a></li></ol><ul class="flex-direction-nav"><li class="flex-nav-prev"><a class="carousel-control left flex-prev" href="#">‹</a></li><li class="flex-nav-next"><a class="carousel-control right flex-next" href="#">›</a></li></ul></div>'
	   									
	};


	// Styles
	// String containing the CSS for the experiment
	exp.css = '';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

		function addDesktopImages(array) {
			// Add new pictures to DOM
			for (var i = 0; i < array.length; i++) {
				$("#gallery").find(".item").last().append(array[i]);
			}

			// Handle show/hide classes, activate background image zoom, and add artificial fade
			$(".AWA-image").on('click', function() {
				$(".prod-carousal-img-count-for-zoom.prod-carousal-small-img.cursor-pointer").removeClass("active");
				$(this).addClass("active");
				$("#zoom").attr('src', $(this).data('zoom-image')).hide().fadeIn(700);
				$(".zoomLens").css({ backgroundImage: 'url(' + $(this).data("zoom-image") + ')' });
			});
		}


		function addMobileImages(array) {
			// We cannot immediately add the new images to the slider since there are special clone images that are prevent this. To make this work, we need to remove all images from the slider and reitialize it with only the old images (not clones) and new images

			// First collect all mobile images, and not the clone duplicates
			var mobileImages = [];
			$('#galleryMob').find('.item').each(function() {
				if (!$(this).hasClass("clone")) {
					mobileImages.push($(this));
				}
			});

			// Remove all exisiting images
			var slider = $('.flexslider').data('flexslider');
			while (slider.data('flexslider').count > 0) {
			    slider.data('flexslider').removeSlide(0);
			}

			// Re-add old images
			for (var i = 0; i < mobileImages.length; i++) {
				slider.data('flexslider').addSlide(mobileImages[i]);
			}

			// Add new images
			for (var i = 0; i < array.length; i++) {
				slider.data('flexslider').addSlide($(array[i]));
			}
		}


		// Control board - Some products need image sectioning in groups of 3
		var product = $.trim($('h1.bliss.upper.strong').text());
		switch(product) {
			case "Pompidou Metal & Glass Side Table, Small":
				addDesktopImages(exp.vars.pompidou.desktopImages);
				addMobileImages(exp.vars.pompidou.mobileImages);
				$("#gallery").append("<div class='item'></div>");
				$("#gallery").find(".item").last().append($("#gallery").find("a[data-image-count='4']"), $("#gallery").find("a[data-image-count='5']"), $("#gallery").find("a[data-image-count='6']"));
					$("#gallery").append("<div class='item'></div>");
				$("#gallery").find(".item").last().append($("#gallery").find("a[data-image-count='7']"));
				$(".controls").attr('style', 'display: block');
				break;
			case "45cm Drum Linen Lampshade":
				addDesktopImages(exp.vars.lampshade.desktopImages);
				addMobileImages(exp.vars.lampshade.mobileImages);
				$("#gallery").find(".item").last().append($("#gallery").find("a[data-image-count='5']"), $("#gallery").find("a[data-image-count='6']"));
				$("#gallery").append("<div class='item'></div>");
				$("#gallery").find(".item").last().append($("#gallery").find("a[data-image-count='7']"), $("#gallery").find("a[data-image-count='8']"));
				$(".controls").attr('style', 'display: block');
				break;
			case "Harlequin Cutlery Set - 24 Piece Denim":
				addDesktopImages(exp.vars.cutlerySet.desktopImages);
				addMobileImages(exp.vars.cutlerySet.mobileImages);
				$("#gallery").append("<div class='item'></div>");
				$("#gallery").find(".item").last().append($("#gallery").find("a[data-image-count='4']"), $("#gallery").find("a[data-image-count='5']"), $("#gallery").find("a[data-image-count='6']"));
				$(".controls").attr('style', 'display: block');
				break;
			case "Camargue Weathered Oak Dining Chair":
				addDesktopImages(exp.vars.diningChair.desktopImages);
				addMobileImages(exp.vars.diningChair.mobileImages);
				$("#gallery").append("<div class='item'></div>");
				$("#gallery").find(".item").last().append($("#gallery").find("a[data-image-count='7']"), $("#gallery").find("a[data-image-count='8']"), $("#gallery").find("a[data-image-count='9']"));
				break;
			case "Plain Velvet Cushion Cover, Large":
				jQuery( document ).ajaxSuccess(function( event, request, settings ) {
					if ($("#colourname:contains('Teal')").length) {
						if (!$("#gallery").find("a[data-image-count='5']").length) {
							addDesktopImages(exp.vars.cushionCover.desktopImages);
							$("#gallery").find(".item").last().append($("#gallery").find("a[data-image-count='5']"), $("#gallery").find("a[data-image-count='6']"));
							$("#gallery").append("<div class='item'></div>");
							$("#gallery").find(".item").last().append($("#gallery").find("a[data-image-count='7']"));
						}
						if (!$("#galleryMob img[src$='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/55fb5958cc0f17cdbfb401b587d5d519_gbibvurzsmpgrsqeh40kbx7ous089y1uloe03ehodm0.jpg']").length) {
							addMobileImages(exp.vars.cushionCover.mobileImages);
						}
					}
				});
				var queryParams = getParameterByName('vid');
				if (queryParams == "QCH073BLG-0" || queryParams == null) {
					$("img[src='http://resources1.okadirect.com/assets/en/new/catalogue/swatch/teal.jpg']").trigger('click');
				}
				break;
			case "Faux Mohair Throw":
				jQuery( document ).ajaxSuccess(function( event, request, settings ) {
					if ($("#colourname:contains('Faded Blue')").length) {
						if (!$("#gallery").find("a[data-image-count='2']").length) {
							// Remove old gray color throw
							$("#gallery").find("a[data-image-count='1']").first().remove();
							addDesktopImages(exp.vars.fauxMohairThrow.desktopImages);
							$("#gallery").append("<div class='item'></div>");
							$("#gallery").find(".item").last().append($("#gallery").find("a[data-image-count='4']"), $("#gallery").find("a[data-image-count='5']"), $("#gallery").find("a[data-image-count='6']"));
							$(".controls").attr('style', 'display: block');
							setTimeout(function() {
								$("#gallery").find("a[data-image-count='1']").first().trigger('click');
								$(".zoomLens").css({ backgroundImage: "url('http://useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/cbc18bcf477a59dca8bac2a3e7fc25d4_v26yf327mr6he_fgisiaj-l9b1midomjku5ocfnrxui.jpg')" });
							}, 1000);
						}
						if (!$("#galleryMob img[src$='http://resources1.okadirect.com/assets/en/new/catalogue/swatch/faded-blue.jpg']").length) {
							// We need to add in dummy code to reinitialize the slider and then reset its settings
							$("#galleryMob").replaceWith(exp.vars.dummyFlexSlider);
							$('.flexslider').flexslider({
					          animation: "slide",
					          slideshow: true,
					          allowOneSlide: false,
					          prevText: "&lsaquo;",
					          nextText: "&rsaquo;"
					        });
							addMobileImages(exp.vars.fauxMohairThrow.mobileImages);
							// Remove dummy images
							var slider = $('.flexslider').data('flexslider');
							slider.data('flexslider').removeSlide(0);
							slider.data('flexslider').removeSlide(0);
						}
					}
				});
				// Trigger faded blue selection only if on the original faded blue product page (as defined by the query parameters)
				var queryParams = getParameterByName('vid');
				if (queryParams == "QTH006BLL-0" || queryParams == null) {
					$("img[src='http://resources1.okadirect.com/assets/en/new/catalogue/swatch/faded-blue.jpg']").trigger('click');				}
				break;
		}
	   
	};

	function getParameterByName(name) {
	    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	}



	// Run the experiment
	$(document).ready(function() {
		var checkExist = setInterval(function() {
			if ($(".prod-carousal-img-count-for-zoom.prod-carousal-small-img.cursor-pointer").length) {
				exp.init();
				clearInterval(checkExist);
			}
		}, 100); 
	});


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
