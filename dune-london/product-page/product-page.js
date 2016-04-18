// jshint multistr: true

var duneLondonProductPage = {

    'condition' :  jQuery('#holder_PRODUCT'),
     
    'vars': {
        'reviews_test': jQuery('#review-anchor .cont-reviewstar'),
        'is_footwear': (dataLayer[0]['product']['category'] === 'Bags' || dataLayer[0]['product']['category'] === 'Accessories') ? false : true,
        'outofstock_test': jQuery('img[src="/images/buttons/out_of_stock.gif"]'),
        'size_label': jQuery('.sizelabel'),
        'copy_delivery': '<strong>To a UK Dune store</strong> – free with Click & Collect.<br /><br /> \
                          <strong>To your home</strong> - Just £3.50 per order – usually arrives within 2-5 days (UK mainland).<br /><br /> \
                          <strong>Need it fast?</strong> Order before 4pm for Next Day delivery, Monday - Friday (£6.50 per order).<br /><br /> \
                          RETURNS ARE FREE<br /><br /> \
                          For more delivery options, including Saturday deliveries, Scottish Highlands, UK offshore and international deliveries please see our <a href="/delivery/">Delivery page.</a>',
        'copy_returns': 'Returns are free from the following countries:<br /><br /> \
                             <ul class="accordian-list"> \
                             <li>UK</li> \
                             <li>Republic of Ireland</li> \
                             <li>France</li> \
                             <li>Germany</li> \
                             <li>United States</li> \
                             </ul><br /> \
                             Simply follow the instructions in your parcel, or see our <a href="/returns/">returns page</a> for full information. ',
        'copy_care': 'Leather – Treat your leather footwear to an occasional polish with shoe cream or wax to protect the leather and reduce creasing.<br /><br /> \
                      Heel Tips – Most of our styles come with a spare pair of heel tips. Replacing the tips before they\'re fully worn helps keep your \
                      footwear looking new and prevents damage to the heels.'
    },
     
    'styles': ' \
.variantHeader { border-top: 1px solid  #ddd; } \
.variantTableHolder, .variantHeader, #priceCopy2Wrap, #canProductBeAdded { border-left: 1px solid  #ddd; border-right: 1px solid  #ddd; } \
#canProductBeAdded { border-bottom: 1px solid  #ddd; } \
.dashed-underline, .writereview a { border-bottom: 1px dashed #666; } \
.dashed-underline:hover,.dashed-underline:focus, .writereview a:hover, .writereview a:focus { border-bottom: 1px dashed transparent; text-decoration: none !important; } \
#prodDETAILS .priceRow { position: relative; top: -23px; padding: 6px 0 30px 0 !important; } \
.prodOPTIONS #prodReviews { position: relative; top: 42px !important; margin: 0 auto; width: 100px; } \
.prodOPTIONS #prodReviews.got-reviews { width: 200px; } \
.prodOPTIONS #prodReviews a { border-bottom: 1px dashed #666; } \
.prodOPTIONS #prodReviews a:hover, .prodOPTIONS #prodReviews a:focus { border-bottom-color: #fff; text-decoration: none; } \
.emwaHolder { display: none; } \
.writereview { position: relative; top: -2px; } \
.writereview.got-reviews { left: 10px; } \
.wishicon { border: 0 !important; background-color: transparent !important; font-size: 1em !important; } \
.ui-tooltip { background: #fff; padding: 8px; position: absolute; z-index: 9999; max-width: 300px; -webkit-box-shadow: 0 0 5px #aaa; box-shadow: 0 0 5px #aaa; } \
body .ui-tooltip { border-width: 2px; } \
.fit-scale { width: 190px; margin: 0 auto; } \
.fit-scale-brand { width: 260px; } \
.variantHeader, .variantTableHolder, #canProductBeAdded, #priceCopy2Wrap { position: relative; } \
#priceCopy2Wrap { display: block; visibility: visible !important; top: -10px; padding-bottom: 10px; min-height: 10px; } \
#canProductBeAdded { top: -15px; padding-left: 5px; } \
.size-guide-popup-link { position: absolute; top: 12px; right: 25px; font-size: 1.1em; } \
.size-guide-popup-link.movemeup { top: -21px; } \
.div_large { border-color: #ddd; } \
.variantHeader { padding-left: 5px; padding-top: 5px; font-size: 1.2em; font-weight: bold; } \
#canProductBeAdded .addtobagbtn { font-size: 1.4em; font-weight: bold; width: 233px; height: 20px; line-height: 20px; } \
.your-size-out-stock-action { color: #175392; width: 215px; display: block; text-align: center; font-size: 1.2em; margin: 10px 0 0 0; } \
.free-returns-popup-link { position: absolute; bottom: 15px; right: 25px; } \
#divReserveCollect .addtobagbtn { border: 1px solid #666; background: #ddd; color: #333 !important; \
     text-transform: none; float: none; float: right; padding: 3px 10px; width: auto !important; position: relative; top: -3px; left: 10px; } \
#divReserveCollect .rcRow { padding-top: 3px; } \
.productCODE { display: none; } \
.tooltip-trigger { position: relative; top: 2px; } \
.fit-survey-summary { width: 100px; } \
.fit-survey-summary-brand { width: 210px; } \
.fit-survey-summary th, .fit-survey-summary td { padding: 4px; } \
.fit-survey-summary th { font-size: 1.2em } \
.accordian-list, .accordian-list li { margin: 0 !important;padding: 0 !important; } \
.ajaxArticleTEXT .accordian-list,.ajaxArticleTEXT .accordian-list li { color: #101010 !important; margin: 0 !important;padding: 0 !important; } \
.modal-content { display: none; } \
#ajaxEditorialReturns { background-color: #FFF; border: 0px solid #000; color: #101010; position: absolute; z-index: 9998; width: 400px; height: 200px; overflow-y: auto; padding: 20px; } \
    ',
     
    'functions': {
        'getPerfectFitFromReviews': function() {
            var result,
                negative,
                positive;
            var reviews_obj = {
                'Fit : Very small': 0,
                'Fit : Small': 0,
                'Fit : Perfect fit': 0,
                'Fit : Large': 0,
                'Fit : Very large': 0
            }
            jQuery('.review-fit').each(function() {
                var this_val = jQuery(this).html();
                switch (this_val) {
                    case 'Fit : 1':
                    this_val = 'Fit : Very small';
                    break;
                    case 'Fit : 2':
                    this_val = 'Fit : Small';
                    break;
                    case 'Fit : 3':
                    this_val = 'Fit : Perfect fit';
                    break;
                    case 'Fit : 4':
                    this_val = 'Fit : Large';
                    break;
                    case 'Fit : 5':
                    this_val = 'Fit : Very large';
                    break;
                    default:
                }
                if(reviews_obj[this_val] !== undefined) {
                    reviews_obj[this_val] = reviews_obj[this_val] + 1;
                }
            });
            negative = reviews_obj['Fit : Very small'] + reviews_obj['Fit : Small'] + reviews_obj['Fit : Large'] + reviews_obj['Fit : Very large'];
            positive = reviews_obj['Fit : Perfect fit'];
            tot_reviews = negative+positive;
            if(tot_reviews === 0) {
                this.getPerfectFitFromBrandAverages();
                return false;
            }
            result = ( 100 / (negative+positive) ) * positive;
            result = Math.round(result);

            this.appendPerfectFitScale(result, false);
            this.createScaleTable(reviews_obj, false);
        },
        'getPerfectFitFromBrandAverages': function() {
            var result,
                brand = dataLayer[0]['product']['brand'],
                results_json = {
                    'DUNE LADIES': {
                        'Large': 25,
                        'Perfect fit': 198,
                        'Small': 20,
                        'Very large': 0,
                        'Very small': 8,
                        'Empty': 12,
                        'Result': 78.88
                    },
                    'STEVE MADDEN': {
                        'Large': 9,
                        'Perfect fit': 28,
                        'Small': 5,
                        'Very large': 1,
                        'Very small': 4,
                        'Empty': 3,
                        'Result': 59.57
                    },
                    'H OVER H LADIES': {
                        'Large': 7,
                        'Perfect fit': 34,
                        'Small': 4,
                        'Very large': 0,
                        'Very small': 1,
                        'Empty': 0,
                        'Result': 73.91
                    },
                    'BERTIE LADIES': {
                        'Large': 6,
                        'Perfect fit': 25,
                        'Small': 3,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 1,
                        'Result': 73.53
                    },
                    'DUNE ACCESSORIES': {
                        'Large': 4,
                        'Perfect fit': 10,
                        'Small': 1,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 11,
                        'Result': 66.67
                    },
                    'DUNE MENS': {
                        'Large': 2,
                        'Perfect fit': 13,
                        'Small': 2,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 1,
                        'Result': 76.47
                    },
                    'PAT LADIES': {
                        'Large': 0,
                        'Perfect fit': 11,
                        'Small': 2,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 0,
                        'Result': 84.62
                    },
                    'DUNE BLACK LADIES': {
                        'Large': 1,
                        'Perfect fit': 7,
                        'Small': 1,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 1,
                        'Result': 77.78
                    },
                    'R VIANNI LADIES': {
                        'Large': 0,
                        'Perfect fit': 9,
                        'Small': 0,
                        'Very large': 0,
                        'Very small': 1,
                        'Empty': 0,
                        'Result': 90
                    },
                    'BERTIE MENS': {
                        'Large': 0,
                        'Perfect fit': 3,
                        'Small': 1,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 2,
                        'Result': 75
                    },
                    'CAMPER MENS': {
                        'Large': 0,
                        'Perfect fit': 1,
                        'Small': 0,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 0,
                        'Result': 100
                    },
                    'R CARTIER LADIES': {
                        'Large': 0,
                        'Perfect fit': 3,
                        'Small': 0,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 2,
                        'Result': 100
                    },
                    'LOAKE MENS': {
                        'Large': 0,
                        'Perfect fit': 1,
                        'Small': 0,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 0,
                        'Result': 100
                    },
                    'RC MENS': {
                        'Large': 1,
                        'Perfect fit': 1,
                        'Small': 0,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 0,
                        'Result': 50
                    },
                    'TIMBERLAND MENS': {
                        'Large': 0,
                        'Perfect fit': 1,
                        'Small': 0,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 0,
                        'Result': 100
                    },
                    'PAT ACCESSORIES': {
                        'Large': 0,
                        'Perfect fit': 0,
                        'Small': 0,
                        'Very large': 1,
                        'Very small': 0,
                        'Empty': 0,
                        'Result': 100
                    },
                    'TED BAKER MENS': {
                        'Large': 0,
                        'Perfect fit': 1,
                        'Small': 0,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 0,
                        'Result': 100
                    },
                    'PAUL SMITH MENS': {
                        'Large': 0,
                        'Perfect fit': 1,
                        'Small': 0,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 0,
                        'Result': 100
                    },
                    'STEVE MADDEN MENS': {
                        'Large': 0,
                        'Perfect fit': 1,
                        'Small': 0,
                        'Very large': 0,
                        'Very small': 0,
                        'Empty': 0,
                        'Result': 100
                    }
                };
            if(results_json[brand] === undefined) {
                return false;
            }
            var reviews_obj = {
                'Fit : Very small': results_json[brand]['Very small'],
                'Fit : Small': results_json[brand]['Small'],
                'Fit : Perfect fit': results_json[brand]['Perfect fit'],
                'Fit : Large': results_json[brand]['Large'],
                'Fit : Very large': results_json[brand]['Very large']
            }
            result = results_json[brand]['Result'];
            result = Math.round(result);
            this.appendPerfectFitScale(result, true);
            this.createScaleTable(reviews_obj, true);
        },
        'createScaleTable': function(reviews_obj, brand) {
            var results_html = ' \
                <table class="fit-survey-summary"><tr><th colspan="2">Fit Survey</th></tr> \
                <tr><td>Very small</td><td>'+reviews_obj['Fit : Very small']+'</td> \
                <tr><td>Small</td><td>'+reviews_obj['Fit : Small']+'</td> \
                <tr><td>Perfect fit</td><td>'+reviews_obj['Fit : Perfect fit']+'</td> \
                <tr><td>Large</td><td>'+reviews_obj['Fit : Large']+'</td> \
                <tr><td>Very large</td><td>'+reviews_obj['Fit : Very large']+'</td> \
                </table> \
            ';
                
            this.waitForFunction(jQuery(document).tooltip, function() {
                jQuery(document).tooltip({
                    items: '.tooltip-trigger',
                    content: results_html
                });
            });
        },
        'appendPerfectFitScale': function(percentage, brand) {
            if(brand === true) {
                var brandstr = 'this brand runs ';
                var brandcls = ' fit-scale-brand';
            } else {
                var brandstr = '';
                var brandcls = '';
            }
            jQuery('#prodDETAILS').append('<div class="fit-scale'+brandcls+'">'+percentage+'% said '+brandstr+'<strong>True to size</strong> <a href="#" class="tooltip-trigger"><img src="http://www.awa-digital.com/optimizely/dune-london/images/info-icon.gif" /></a></div>');
        },
        'waitForFunction' : function(_func, experiment, timeout, keepAlive) {
            var intervalTime = 50;
            var timeout = timeout || 20000;
            var keepAlive = keepAlive || false;
            var maxAttempts = timeout / intervalTime;
            var attempts = 0;
            var interval = setInterval(function() {
                if (jQuery.isFunction(_func)) {
                    if (!keepAlive) {
                        clearInterval(interval);
                    }
                    experiment();
                } else if (attempts > maxAttempts) {
                    clearInterval(interval);
                }
                attempts ++;
                }, intervalTime);
            },
        'hideReturnsPopup': function(){
            jQuery("#ajaxEditorialReturns").hide();
            hidePopup();
            return false;
        }
    },
        
    'run': function(){
        
        // check for a condition and check it has been met
        if(this.condition && !this.condition.length) {
            console.log('Experiment stopped due to failing an internal condition');
            return false;
        }
        
        // append styles to head
        $('head').append('<style type="text/css">'+this.styles+'</style>');
        
        // If we have reviews remove 'read' from the link and add class to review cta
        if( this.vars.reviews_test.length ) {
            var read_link = jQuery('.readreviews a');
            read_link.html(read_link.html().replace('Read ',''));
            jQuery('.prodOPTIONS #prodReviews').addClass('got-reviews');
            jQuery('.writereview').addClass('got-reviews');
        }
        
        // Move write a review call to action
        jQuery('.writereview').appendTo(jQuery('.priceRow'));
        
        // if it is footwear run the relevant perfectFit function
        if( this.vars.is_footwear === true ) {
           if( this.vars.reviews_test.length ) {
               this.functions.getPerfectFitFromReviews();
           } else {
               this.functions.getPerfectFitFromBrandAverages();
           }
        }
        
        // if it is footwear amend the sizes
        if( this.vars.is_footwear === true ) {
            jQuery('.variantTableHolder .sizelabel').each( function(){
                var _this = jQuery(this),
                    new_html = _this.html().toString().match(/(.*)(\/)/);
                _this.html(new_html[1]);
            });
        }
        
        //Wrap price copy in div for styling
        jQuery('#priceCopy2').wrap('<div id="priceCopy2Wrap"></div>');
        
        // if footwear and any sizes are out out stock show out of stock call to action
        if( this.vars.is_footwear === true && this.vars.outofstock_test.length ) {
            jQuery('.variantTableHolder table').after('<a class="your-size-out-stock-action" href="javascript:ajaxEMWA();">Your size out of stock?</a>');
            jQuery('.your-size-out-stock-action').bind('click',function() { window.setTimeout(function(){ jQuery('.ajaxEMWA .ajxboxheader h3').html('Email me when in stock');}, 900) } );
        }
        
        // Add size guide link
        jQuery('.variantTableHolder').prepend('<a href="javascript:showPopupA(\'sizeguide2013%20\')" class="dashed-underline size-guide-popup-link">Size Guide</a>');
        
        // Add free returns link
        jQuery('#canProductBeAdded').append('<a href="#" class="dashed-underline free-returns-popup-link">Free Returns</a>')
        
        // if we have a check stock in store button, make amendments
        var instore_check_button = jQuery('#divReserveCollect .addtobagbtn');
        if( instore_check_button.length ) {
            instore_check_button.html('Check Stock').before('Find this in my local store:');
        }
        
        // Change copy in accordians
        jQuery('#prodaccordion h3:eq(3)').next('div').html(this.vars.copy_delivery);
        jQuery('#prodaccordion h3:eq(4)').next('div').html(this.vars.copy_care);
        jQuery('#prodaccordion h3:eq(5)').next('div').html(this.vars.copy_returns);

        // prevent default action on tooltip
        jQuery('.tooltip-trigger').bind('click',function(e){
            e.preventDefault();
        });
        
        // if we have more than 9 size labels, move the size guide link up
        if( this.vars.size_label.length > 8 ) {
            jQuery('.size-guide-popup-link').addClass('movemeup');
        }
        
        // Free returns listener
        /*jQuery('.free-returns-popup-link').click(function(e) {
            location.hash = 'htdeopl';
            location.hash = '#prodaccordion';
            e.preventDefault();
            jQuery('.prodaccordion > h3').removeClass('collapsed').next('div').slideUp('slow');
            jQuery('#prodaccordion h3:eq(5)').addClass('collapsed').next('div').slideDown('slow');
        });
        */
        jQuery('body').append('<div id="ajaxEditorialReturns" style="display:none"></div>');
        jQuery('.free-returns-popup-link').click(function(e) {
            e.preventDefault();
            function setBoxHTML() {
                jQuery('#ajaxEditorialReturns').fadeTo(0, 0).fadeTo(200, 1);
                jQuery('#ajaxEditorialReturns').css({
                    top: (jQuery(document).scrollTop() + 150),
                    left: '50%',
                    width: '400px',
                    height: '200px',
                    margin: '0 0 0 -200px'
                });
                var ajxedret = jQuery('#ajaxEditorialReturns');
                jQuery('#ajaxEditorialReturns').html( '<div class="ajxboxheader"> \
                   <h3>FREE RETURNS</h3> \
                   <div class="close"> \
                       <span class="label"><a href="#" onclick="jQuery(\'#ajaxEditorialReturns\').hide();hidePopup();return false;">Close</a></span> \
                       <span class="icon"><a href="#" onclick="jQuery(\'#ajaxEditorialReturns\').hide();hidePopup();return false;"><img src="http://www.dunelondon.com/images/buttons/lb_close.gif?Lo0P=a204f51e68e4e22a5fcc82cc3c182a53404" alt="Close"></a></span> \
                   </div> \
                 </div> \
                 <div class="ajaxArticleTEXT">'+duneLondonProductPage.vars.copy_returns+'</div>' );
               jQuery('#ajaxEditorialReturns').show();
             };
            jQuery('#overlayBox').css({
                display: 'block',
                width: jQuery(document).outerWidth(),
                height: jQuery(document).outerHeight()
            });
            jQuery('#overlayBox').fadeTo(0, 0).fadeTo(200, 0.5, setBoxHTML);
            jQuery('#overlayBox').bind('click',function(){ jQuery("#ajaxEditorialReturns").hide(); });
        });

    }
//duneLondonProductPage.functions.hideReturnsPopup();

}
// Log the experiment version (can handy for debugging on the live site)
console.log('Product page experiment - 1.0.10');

// Run the experiment
duneLondonProductPage.run();