/* SECTION 1 */
// Make checkout button link to the same postback as the "Go to secure checkout" button 
var waitFor1 = function(condition1, callback1, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if (condition1()) {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                callback1();
            } else if (attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts ++;
        }, intervalTime);
};

var condition1 = function() {
	return $("#ctl00_ucHeader_aCheckout").length;
}

var callback1 = function() {
	$("#ctl00_ucHeader_aCheckout").attr('href', "javascript:__doPostBack('ctl00$cphInnerMaster$imgBtnCheckOut','')");
}

waitFor1(condition1, callback1, 10000);



/* SECTION 2 */
// Make images 80px x 80px
var waitFor2 = function(condition2, callback2, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if (condition2()) {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                callback2();
            } else if (attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts ++;
        }, intervalTime);
};

var condition2 = function() {
	return $("img.basket_image").length;
}

var callback2 = function() {
	$("img.basket_image").attr('style', 'width: 80px; height: 80px; max-width: 80px;');
}

waitFor2(condition2, callback2, 10000);



/* SECTION 3 */
// Format Basket Summary
var waitFor3 = function(condition3, callback3, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if (condition3()) {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                callback3();
            } else if (attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts ++;
        }, intervalTime);
};

var condition3 = function() {
	return $("#tblDelivery").length;
}

var callback3 = function() {

	// Get Subtotal (including VAT)
	var subtotal = $("#ctl00_cphInnerMaster_lblSubTotal").text();
	var grandtotal = $("#ctl00_cphInnerMaster_lblGrandTotal").text();

	// Create new subtotal row
	var subtotalDiv = "<tr><td colspan='2'>Subtotal <small>(inc. VAT)</small> <span id='AWA-sub'>" + subtotal + "</td></tr>";
	// Insert new subtotal row
	$("#tblDelivery").find('tbody').first().prepend(subtotalDiv);
	$("#AWA-sub").attr('style', 'float: right');
	$("#AWA-sub").parent().attr('style', 'padding-bottom: 10px;');

	// Add dividing line
	$("#tblDelivery").find('tbody').first().append("<tr><td colspan='3' id='AWA-table-line'></td></tr>");
	$("#AWA-table-line").attr('style', 'border-bottom: solid 1px #CCCCCC; padding-top: 10px;');

	// Create new total costs row
	var totalCostsDiv = "<tr><td colspan='2'>Total costs <span id='AWA-gt'><strong>" + grandtotal + "</strong></td></tr>";
	$("#tblDelivery").find('tbody').first().append(totalCostsDiv);
	$("#AWA-gt").attr('style', 'float: right');
	$("#AWA-gt").parent().attr('style', 'padding-top: 10px;');


	// Hide existing basket summary and move new one to the right
	$('.basket_basket_summary').hide();
	$(".basket_delivery_options").attr('style', 'margin-right: 0; float: right;');


	// Change "Delivery options" title to "Basket summary"
	$(".basket_delivery_options").find('h1.account_titles').text("Basket summary");
}

waitFor3(condition3, callback3, 10000);

