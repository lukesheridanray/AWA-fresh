function () {
  console.log("22");
  function waitFor(condition, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if (condition()) {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                callback();
            } else if (attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts ++;
        }, intervalTime);
  }

  var conditionImage = function() {
    imageData = imageData || undefined;
    if (imageData != undefined) {
      return imageData;
    }
  };


  var callback = function() {
    console.info("WORIKING!!!");
  	$('.resultSet .floatLeft').each(function() {
  		var $link = $(this).find('a').attr('href');
  		var urlCode = /[^/]*$/.exec($link)[0];
  
  		var img = $(this).find('img');
  		console.log(img);
  		img.attr('style', 'height: 230px; width: 230px');

      var imageDataLength = imageData.length;
    	for (var i = 0; i < imageDataLength; i++) {
    		if (/[^/]*$/.exec(imageData[i]["Product URL"])[0] == urlCode) {
    			var newImage = (imageData[i]["Image URL 230px X 230px jpgs"]);
    			img.attr('src', newImage);
    			return;
    		}
    	}
  	});
  
    $('.facetDescription').attr('style', 'width: 462px');
  };

  waitFor(conditionImage, callback);
  
  
  var conditionProductInfo = function() {
    productInfo = productInfo || undefined;
    if (productInfo != undefined) {
      return productInfo;
    }
  };
  
  var callback2 = function() {
    console.info("WORIKING222!!!");
    getNewData(productInfo);

    function getNewData(productInfo) {
    	$('.floatRight.facetDescription .season').each(function() {
    		var $listing = $(this);
    
    		var $description = $(this).parent();
    		var $link = $($description).find('a:nth-child(2)').attr('href');
    		var urlCode = /[^/]*$/.exec($link)[0];
    
    		$('.moreInfo').text("View Full Information");
    
    		var containsProductBullet = false;
    
    		var $productBullet = $(this).find('.productBullet');
    		if ($productBullet.length != 0) {
    			//console.log($productBullet);
    			containsProductBullet = true;
    			$productBullet.nextUntil("div").remove();
    		}
    
    		var $customerRatingText = $(this).find("b");
    		console.warn($customerRatingText.html())
    		if ($customerRatingText != null) {
    			$customerRatingText.attr('style', 'margin-left: 3px;');
    		}
    
    		var starsImage5 = $(this).find("img[src$='5-star.jpg']");
    		var starsImage4 = $(this).find("img[src$='4-star.jpg']");
    		var starsImage3 = $(this).find("img[src$='3-star.jpg']");
    		var starsImage2 = $(this).find("img[src$='2-star.jpg']");
    		var starsImage1 = $(this).find("img[src$='1-star.jpg']");
    
    		var containsRating = false;
    
    		if (starsImage5.length != 0) {
    			containsRating = true;
    		} else if (starsImage4.length != 0) {
    			containsRating = true;
    		} else if (starsImage3.length != 0) {
    			containsRating = true;
    		} else if (starsImage2.length != 0) {
    			containsRating = true;
    		} else if (starsImage1.length != 0) {
    			containsRating = true;
    		}
    
    		//console.info('Contains Product Bullet: ' + containsProductBullet + ", Contains Rating: " + containsRating);
    			
    		if (containsProductBullet == true && (containsRating == true || containsRating == false)) {
    			removeSpanTextOnly($listing)
    			findAndApply($listing, productInfo, urlCode);
    		} else if (containsProductBullet == false && containsRating == false) {
    			removeDescriptionText($listing);
    			findAndApply($listing, productInfo, urlCode);
    		} else if (containsProductBullet == false && containsRating == true) {
    			removeDescriptionText($listing);
    			findAndApply($listing, productInfo, urlCode);
    		}
    	});
    	$("<style type='text/css'> .newD{ color:#00572D !important; font-weight: bold} .newList {margin-left: 19px; margin-top: 10px; margin-bottom: 10px;</style>").appendTo("head");
    }
    
    function findAndApply($listing, productInfo, urlCode) {
    	var productInfoLength = productInfo.length;
    	for (var i = 0; i < productInfoLength; i++) {
    		if (/[^/]*$/.exec(productInfo[i]["deeplink_url"])[0] == urlCode) {
    			var newData = {};
    			newData.idealFor = productInfo[i]["ideal_for"].split(',').join(', ');;
    			newData.hardiness = productInfo[i]["hardiness"];
    			newData.sunShade = productInfo[i]["sun_shade"];
    			newData.height = productInfo[i]["height"];
    			newData.spread = productInfo[i]["spread"];
    			newData.floweringMonths = productInfo[i]["flowering_months"].split(',').join(', ');
    			//console.error(newData);
    	    	var newList = "<ul class='newList'>" + 
    	    		"<li><span class='newD'>Position:</span> " + newData.sunShade + "</li>" +
    	    		"<li><span class='newD'>Hardiness:</span> " + newData.hardiness + "</li>" +
    	    		"<li><span class='newD'>Flowering Period:</span> " + newData.floweringMonths + "</li>" + 
    	    		"<li><span class='newD'>Ideal For:</span> " + newData.idealFor + "</li>" + 
    	    		"<li><span class='newD'>Height:</span> " + newData.height + "</li>" +
    	    		"<li><span class='newD'>Spread:</span> " + newData.spread + "</li>" +
    	    		"</ul>";
    			$listing.after(newList);
    		    return;
    		}
    	}
    }
    
    function removeSpanTextOnly($listing) {
    	var text = $listing.contents().filter(function(){ 
    		if (this.nodeType == 3) {
    			console.log(this.nodeValue)
    			this.nodeValue = "";
    		}
    	});
    }
    
    function removeDescriptionText($listing) {
    	var $desc = $listing.find('p');
    	if ($desc.length != 0) {
    		$desc.nextUntil(".stockInfo").andSelf().remove();
    	}
    	var $extraList = $listing.find('ul');
    	if ($extraList.length != 0) {
    		$extraList.nextUntil(".stockInfo").andSelf().remove();
    	}
    	var text = $listing.contents().filter(function(){ 
    		if (this.nodeType == 3) {
    			console.log(this.nodeValue)
    			this.nodeValue = "";
    		}
    	});
    }
    
    
    $('.stockInfo').each(function() {
    	$(this).parent().after($(this));
    });
    $('.stockInfo').attr('style', 'float: left; margin-left: 95px;');
  };
  waitFor(conditionProductInfo, callback2);
  
  
}