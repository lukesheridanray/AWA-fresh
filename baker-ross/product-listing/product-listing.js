/*!
   --------------------------------
   Infinite Scroll
   --------------------------------
   + https://github.com/paulirish/infinite-scroll
   + version 2.0.2
   + Copyright 2011/12 Paul Irish & Luke Shumard
   + Licensed under the MIT license

   + !! Modified by CGIT

   + Documentation: http://infinite-scroll.com/
*/

(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($,undefined){"use strict";$.infinitescroll=function infscr(options,callback,element){this.element=$(element);if(!this._create(options,callback)){this.failed=true}};$.infinitescroll.defaults={loading:{finished:undefined,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"data:image/gif;base64,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",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:undefined},state:{isDuringAjax:false,isInvalidPage:false,isDestroyed:false,isDone:false,isPaused:false,isBeyondMaxPage:false,currPage:1},debug:false,behavior:undefined,binder:$(window),nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:false,pathParse:undefined,dataType:"html",appendCallback:true,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:undefined,path:undefined,prefill:false,maxPage:undefined,lastUrl:undefined};$.infinitescroll.prototype={_binding:function infscr_binding(binding){var instance=this,opts=instance.options;opts.v="2.0b2.120520";if(!!opts.behavior&&this["_binding_"+opts.behavior]!==undefined){this["_binding_"+opts.behavior].call(this);return}if(binding!=="bind"&&binding!=="unbind"){this._debug("Binding value  "+binding+" not valid");return false}if(binding==="unbind"){this.options.binder.unbind("smartscroll.infscr."+instance.options.infid)}else{this.options.binder[binding]("smartscroll.infscr."+instance.options.infid,function(){instance.scroll()})}this._debug("Binding",binding)},_create:function infscr_create(options,callback){var opts=$.extend(true,{},$.infinitescroll.defaults,options);this.options=opts;var $window=$(window);var instance=this;if(!instance._validate(options)){return false}var path=$(opts.nextSelector).attr("href");if(!path){this._debug("Navigation selector not found");return false}opts.path=opts.path||this._determinepath(path);opts.contentSelector=opts.contentSelector||this.element;opts.loading.selector=opts.loading.selector||opts.contentSelector;opts.loading.msg=opts.loading.msg||$("<div id='infscr-loading'><img alt='Loading...' src=\""+opts.loading.img+'" /><div>'+opts.loading.msgText+"</div></div>");(new Image).src=opts.loading.img;if(opts.pixelsFromNavToBottom===undefined){opts.pixelsFromNavToBottom=$(document).height()-$(opts.navSelector).offset().top;this._debug("pixelsFromNavToBottom: "+opts.pixelsFromNavToBottom)}var self=this;opts.loading.start=opts.loading.start||function(){$(opts.navSelector).hide();opts.loading.msg.appendTo(opts.loading.selector).show(opts.loading.speed,$.proxy(function(){this.beginAjax(opts)},self))};opts.loading.finished=opts.loading.finished||function(){if(!opts.state.isBeyondMaxPage)opts.loading.msg.fadeOut(opts.loading.speed)};opts.callback=function(instance,data,url){if(!!opts.behavior&&instance["_callback_"+opts.behavior]!==undefined){instance["_callback_"+opts.behavior].call($(opts.contentSelector)[0],data,url)}if(callback){callback.call($(opts.contentSelector)[0],data,opts,url)}if(opts.prefill){$window.bind("resize.infinite-scroll",instance._prefill)}};if(options.debug){if(Function.prototype.bind&&(typeof console==="object"||typeof console==="function")&&typeof console.log==="object"){["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(method){console[method]=this.call(console[method],console)},Function.prototype.bind)}}this._setup();if(opts.prefill){this._prefill()}return true},_prefill:function infscr_prefill(){var instance=this;var $window=$(window);function needsPrefill(){return instance.options.contentSelector.height()<=$window.height()}this._prefill=function(){if(needsPrefill()){instance.scroll()}$window.bind("resize.infinite-scroll",function(){if(needsPrefill()){$window.unbind("resize.infinite-scroll");instance.scroll()}})};this._prefill()},_debug:function infscr_debug(){if(true!==this.options.debug){return}if(typeof console!=="undefined"&&typeof console.log==="function"){if(Array.prototype.slice.call(arguments).length===1&&typeof Array.prototype.slice.call(arguments)[0]==="string"){console.log(Array.prototype.slice.call(arguments).toString())}else{console.log(Array.prototype.slice.call(arguments))}}else if(!Function.prototype.bind&&typeof console!=="undefined"&&typeof console.log==="object"){Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}},_determinepath:function infscr_determinepath(path){var opts=this.options;if(!!opts.behavior&&this["_determinepath_"+opts.behavior]!==undefined){return this["_determinepath_"+opts.behavior].call(this,path)}if(!!opts.pathParse){this._debug("pathParse manual");return opts.pathParse(path,this.options.state.currPage+1)}else if(path.match(/^(.*?)\b2\b(.*?$)/)){path=path.match(/^(.*?)\b2\b(.*?$)/).slice(1)}else if(path.match(/^(.*?)2(.*?$)/)){if(path.match(/^(.*?page=)2(\/.*|$)/)){path=path.match(/^(.*?page=)2(\/.*|$)/).slice(1);return path}path=path.match(/^(.*?)2(.*?$)/).slice(1)}else{if(path.match(/^(.*?page=)1(\/.*|$)/)){path=path.match(/^(.*?page=)1(\/.*|$)/).slice(1);return path}else{this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");opts.state.isInvalidPage=true}}this._debug("determinePath",path);return path},_error:function infscr_error(xhr){var opts=this.options;if(!!opts.behavior&&this["_error_"+opts.behavior]!==undefined){this["_error_"+opts.behavior].call(this,xhr);return}if(xhr!=="destroy"&&xhr!=="end"){xhr="unknown"}this._debug("Error",xhr);if(xhr==="end"||opts.state.isBeyondMaxPage){this._showdonemsg()}opts.state.isDone=true;opts.state.currPage=1;opts.state.isPaused=false;opts.state.isBeyondMaxPage=false;this._binding("unbind")},_loadcallback:function infscr_loadcallback(box,data,url){var opts=this.options,callback=this.options.callback,result=opts.state.isDone?"done":!opts.appendCallback?"no-append":"append",frag;if(!!opts.behavior&&this["_loadcallback_"+opts.behavior]!==undefined){this["_loadcallback_"+opts.behavior].call(this,box,data);return}switch(result){case"done":this._showdonemsg();return false;case"no-append":if(opts.dataType==="html"){data="<div>"+data+"</div>";data=$(data).find(opts.itemSelector)}break;case"append":var children=box.children();if(children.length===0){return this._error("end")}frag=document.createDocumentFragment();while(box[0].firstChild){frag.appendChild(box[0].firstChild)}this._debug("contentSelector",$(opts.contentSelector)[0]);$(opts.contentSelector)[0].appendChild(frag);data=children.get();break}opts.loading.finished.call($(opts.contentSelector)[0],opts);if(opts.animate){var scrollTo=$(window).scrollTop()+$(opts.loading.msg).height()+opts.extraScrollPx+"px";$("html,body").animate({scrollTop:scrollTo},800,function(){opts.state.isDuringAjax=false})}if(!opts.animate){opts.state.isDuringAjax=false}callback(this,data,url);if(opts.prefill){this._prefill()}},_nearbottom:function infscr_nearbottom(){var opts=this.options,pixelsFromWindowBottomToBottom=0+$(document).height()-opts.binder.scrollTop()-$(window).height();if(!!opts.behavior&&this["_nearbottom_"+opts.behavior]!==undefined){return this["_nearbottom_"+opts.behavior].call(this)}this._debug("math:",pixelsFromWindowBottomToBottom,opts.pixelsFromNavToBottom);return pixelsFromWindowBottomToBottom-opts.bufferPx<opts.pixelsFromNavToBottom},_pausing:function infscr_pausing(pause){var opts=this.options;if(!!opts.behavior&&this["_pausing_"+opts.behavior]!==undefined){this["_pausing_"+opts.behavior].call(this,pause);return}if(pause!=="pause"&&pause!=="resume"&&pause!==null){this._debug("Invalid argument. Toggling pause value instead")}pause=pause&&(pause==="pause"||pause==="resume")?pause:"toggle";switch(pause){case"pause":opts.state.isPaused=true;break;case"resume":opts.state.isPaused=false;break;case"toggle":opts.state.isPaused=!opts.state.isPaused;break}this._debug("Paused",opts.state.isPaused);return false},_setup:function infscr_setup(){var opts=this.options;if(!!opts.behavior&&this["_setup_"+opts.behavior]!==undefined){this["_setup_"+opts.behavior].call(this);return}this._binding("bind");return false},_showdonemsg:function infscr_showdonemsg(){var opts=this.options;if(!!opts.behavior&&this["_showdonemsg_"+opts.behavior]!==undefined){this["_showdonemsg_"+opts.behavior].call(this);return}opts.loading.msg.find("img").hide().parent().find("div").html(opts.loading.finishedMsg).animate({opacity:1},2e3,function(){$(this).parent().fadeOut(opts.loading.speed)});opts.errorCallback.call($(opts.contentSelector)[0],"done")},_validate:function infscr_validate(opts){for(var key in opts){if(key.indexOf&&key.indexOf("Selector")>-1&&$(opts[key]).length===0){this._debug("Your "+key+" found no elements.");return false}}return true},bind:function infscr_bind(){this._binding("bind")},destroy:function infscr_destroy(){this.options.state.isDestroyed=true;this.options.loading.finished();return this._error("destroy")},pause:function infscr_pause(){this._pausing("pause")},resume:function infscr_resume(){this._pausing("resume")},beginAjax:function infscr_ajax(opts){var instance=this,path=opts.path,box,desturl,method,condition;opts.state.currPage++;if(opts.maxPage!==undefined&&opts.state.currPage>opts.maxPage){opts.state.isBeyondMaxPage=true;this.destroy();return}box=$(opts.contentSelector).is("table, tbody")?$("<tbody/>"):$("<div/>");desturl=typeof path==="function"?path(opts.state.currPage):path.join(opts.state.currPage);instance._debug("heading into ajax",desturl);method=opts.dataType==="html"||opts.dataType==="json"?opts.dataType:"html+callback";if(opts.appendCallback&&opts.dataType==="html"){method+="+callback"}switch(method){case"html+callback":instance._debug("Using HTML via .load() method");box.load(desturl+" "+opts.itemSelector,undefined,function infscr_ajax_callback(responseText){if($(responseText).find(".products-grid:last .item:last").html()==$(".products-grid:last .item:last").html()){instance._error("end")}else{instance._loadcallback(box,responseText,desturl)}});break;case"html":instance._debug("Using "+method.toUpperCase()+" via $.ajax() method");$.ajax({url:desturl,dataType:opts.dataType,complete:function infscr_ajax_callback(jqXHR,textStatus){condition=typeof jqXHR.isResolved!=="undefined"?jqXHR.isResolved():textStatus==="success"||textStatus==="notmodified";if(condition){instance._loadcallback(box,jqXHR.responseText,desturl)}else{instance._error("end")}}});break;case"json":instance._debug("Using "+method.toUpperCase()+" via $.ajax() method");$.ajax({dataType:"json",type:"GET",url:desturl,success:function(data,textStatus,jqXHR){condition=typeof jqXHR.isResolved!=="undefined"?jqXHR.isResolved():textStatus==="success"||textStatus==="notmodified";if(opts.appendCallback){if(opts.template!==undefined){var theData=opts.template(data);box.append(theData);if(condition){instance._loadcallback(box,theData)}else{instance._error("end")}}else{instance._debug("template must be defined.");instance._error("end")}}else{if(condition){instance._loadcallback(box,data,desturl)}else{instance._error("end")}}},error:function(){instance._debug("JSON ajax request failed.");instance._error("end")}});break}},retrieve:function infscr_retrieve(pageNum){pageNum=pageNum||null;var instance=this,opts=instance.options;if(!!opts.behavior&&this["retrieve_"+opts.behavior]!==undefined){this["retrieve_"+opts.behavior].call(this,pageNum);return}if(opts.state.isDestroyed){this._debug("Instance is destroyed");return false}opts.state.isDuringAjax=true;opts.loading.start.call($(opts.contentSelector)[0],opts)},scroll:function infscr_scroll(){var opts=this.options,state=opts.state;if(!!opts.behavior&&this["scroll_"+opts.behavior]!==undefined){this["scroll_"+opts.behavior].call(this);return}if(state.isDuringAjax||state.isInvalidPage||state.isDone||state.isDestroyed||state.isPaused){return}if(!this._nearbottom()){return}this.retrieve()},toggle:function infscr_toggle(){this._pausing()},unbind:function infscr_unbind(){this._binding("unbind")},update:function infscr_options(key){if($.isPlainObject(key)){this.options=$.extend(true,this.options,key)}}};$.fn.infinitescroll=function infscr_init(options,callback){var thisCall=typeof options;switch(thisCall){case"string":var args=Array.prototype.slice.call(arguments,1);this.each(function(){var instance=$.data(this,"infinitescroll");if(!instance){return false}if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return false}instance[options].apply(instance,args)});break;case"object":this.each(function(){var instance=$.data(this,"infinitescroll");if(instance){instance.update(options)}else{instance=new $.infinitescroll(options,callback,this);if(!instance.failed){$.data(this,"infinitescroll",instance)}}});break}return this};var event=$.event,scrollTimeout;event.special.smartscroll={setup:function(){$(this).bind("scroll",event.special.smartscroll.handler)},teardown:function(){$(this).unbind("scroll",event.special.smartscroll.handler)},handler:function(event,execAsap){var context=this,args=arguments;event.type="smartscroll";if(scrollTimeout){clearTimeout(scrollTimeout)}scrollTimeout=setTimeout(function(){$(context).trigger("smartscroll",args)},execAsap==="execAsap"?0:100)}};$.fn.smartscroll=function(fn){return fn?this.bind("smartscroll",fn):this.trigger("smartscroll",["execAsap"])}});

//
// CGIT Optimizely Boilerplate - version 0.1.3
//

/*
Notes
-----

Exclude mobile, but include tablet (and of course desktop)

100% (50/50)
4
Crazy Egg

"Revenue Per Visitor
Number of Transactions
Clicks in the left nav
Clicks on Add To Basket"

"http://www.bakerross.co.uk/pocket-money-toys/toys-party-bag-fillers

and all other product listings pages

/arts-and-crafts/arts-crafts-.*|/themed-crafts/themed-.*|/christmas|/easter|/fathers-day|/halloween|/mothers-day|/valentines-day|/pocket-money-toys/toys-.*|/fundraising-products/fundraising-.*|/educational-supplies/educational-.*|/educational-supplies/edcuational-.*|/super-value-packs/super-value-packs-.*|/football|/christmas/.*|/easter/.*|/fathers-day/.*|/halloween/.*|/mothers-day/.*|/valentines-day/.*|/football/.*|/.*-sale"

"See 3 wireframes

1. Checkboxes in left navigation, enabling user to switch items in and out of view. In our correspondence about this we referred to the 
Macy's example. Also the links are styled as hyperlinks (blue underlined).

2. Smaller item containers in the product grid, removing calls to action on default view (i.e. Quick View & Shop buttons).

3. Item container now shows up to three different product variations, whereas currently only one is shown. You mentioned it would be possible to 
scrape this from the product page. When more than three options are available (for example http://www.bakerross.co.uk/large-18ml-face-paint-pots), 
it simply says ""x options available"" as shown in the wireframe on the far right of each row.

4. On mouse-over, item container becomes taller and a call to action ""Add to Basket"" appears along with checkboxes next to the product 
variations - See Wireframe 2. The user can then select one or more option and click ""Add To Basket"" to add the items to his basket straight 
from this page. An ""Added to Cart"" modal will appear - see point 8.

5. Clicking anywhere else in the container will open the Quick View modal, exactly the same as currently on the site. Clicking on ""view product 
details"" at the bottom is the only way to get to the product page.

6. At the bottom of the page is a Load More button which acts in the same way as the ""Next"" button in current scenario, except that it adds items 
at the bottom instead of moving to a new view.

The ideal is for 24 items to be loaded initially, 24 more to auto-load as the user scroll down (can you use the existing functionality for this?) and 
only then the Load More button appears.


7. Ideally the left nav can be "sticky" so that it moves down the page as the user scrolls down.

7. Price filter from x to y at the bottom of the left nav is new, as is the On SALE facet which simply loads items on sale in this category.

8. When an item is added to basket, an ""Added to Basket"" modal appears in the same way as now. It is important that this shows product recommendations, 
which you will see if you add an item to basket from the product page on the live site. However, currently it doesn't happen when you add an item to basket 
from Quick View because of a technical reason, which they are fixing. This is very important so please investigate if necessary. 
Could the feed be scraped from relevant product page?

9. Retain ""Clear All"" filter functionality. To see how this works, apply a facet on the site. Next to the facet appears a ""close"" symbol and below 
""Clear All"".

10. A minor change is that the SEO blurb and hero image at the top of the page disappear.

11. Another minor change is that the Sort By filter at the top of the page is presented differently. When the page first loads, you can use the 
existing default. The user can then apply anyone of those filters at a time (Best Sellers - Lowest Price - Highest Price) which will become underlined 
when selected. It's probably best to include another one - ""Default"" at the start of that series.

12. Price Promise Guarantee is clickable and opens a modal. I'll send copy for that separately.

Wireframe 3 shows view when an item has been added to cart.
"

*/

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Product listing - 0.1');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'primePromiseHeading': '<p class="price-promise-heading">YOU CAN\'T BUY CHEAPER - our <a href="#" data-behaviour="pricePromiseModal">100% PRICE PROMISE GAURANTEE</a></p>',
    'amountText': $('.toolbar:eq(0).amount').text()
};

// Styles
// String containing the CSS for the experiment
exp.css = 
/* General / Product Grid */ ' \
.category-image { display: none; } \
.toolbar .limiter, .toolbar .pages  { display: none; } \
.toolbar { margin: -10px 0 0 0; } \
.price-promise-heading { text-align: center; font-size: 1.2em; padding: 0 0 15px 0; } \
.price-promise-heading a { color: #333; font-weight: bold; } \
.price-promise-heading a:hover { text-decoration: underline; } \
.pager.sorter { padding: 0 0 15px 0; } \
.sorter .sort-by { float: right !important; margin-right: 0 !important; } \
.sort-by label { font-weight: bold; padding: 0 15px 0 0; } \
.sort-by a { color: #333; padding: 0 15px; } \
.sort-by a.active { text-decoration: underline; } \
.sort-by a:hover { text-decoration: underline; } \
';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// This function waits till a DOM element is available, then runs a callback function
exp.func.waitForElement = function(selector, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($(selector).length) {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                callback();
            } else if (attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts ++;
        }, intervalTime);
};

// This function waits till a function is available, then runs a callback function
exp.func.waitForFunction = function(func, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($.isFunction(func)) {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                callback();
            } else if (attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts ++;
        }, intervalTime);
};

// Functon to sort products
exp.func.sortProducts = function(e) {
    e.preventDefault();
    var search = window.location.search;
    var loc;
    var self = $(this);
    var dir = self.attr('data-dir');
    var order = self.attr('data-order');
    if( search ) {
        if( search.indexOf('order=') !== -1 ) {
            loc = window.location.toString().replace(/(.*)(dir=)(.*)(sc)(.*)(&)(.*)(order=)(.*)/g,function(p1,p2,p3,p4,p5,p6,p7,p8,p9){
                return p2 + p3 + dir + p6 + p7 + p9 + order;
            });
        } else {
            loc = window.location + '&dir=' + dir + '&order=' + order;
        }
    } else {
        loc = window.location + '?dir=' + dir + '&order=' + order;
    }
    window.location = loc;
};

// Function to open price promise modal
exp.func.pricePromiseModal = function(e) {
    e.preventDefault();
    alert('I am an old skool modal');
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // **
    // Toolbars, general and Product Grid
    //

    $('.toolbar:eq(1), .toolbar .limiter').remove();

    $('.toolbar').html(
        $('.toolbar').html().replace(/(.*)(of)(.*)(<\/p>)/, function(p1,p2,p3,p4,p5) {
            return p4 + ' results' + p5;
        })
    );

    $('.toolbar').prepend( exp.vars.primePromiseHeading );
    $('[data-behaviour="pricePromiseModal"]').bind('click', exp.func.pricePromiseModal);

    $('.sort-by').html(
        '<label>Sort By:</label> \
        <a href="#" data-behaviour="sortProducts" data-dir="asc" data-order="bestseller_sequence">Best Sellers</a> \
        <a href="#" data-behaviour="sortProducts" data-dir="asc" data-order="price">Lowest Price</a> \
        <a href="#" data-behaviour="sortProducts" data-dir="desc" data-order="price">Highest Price</a>'              
    );
    $('[data-behaviour="sortProducts"]').bind('click',exp.func.sortProducts);

    if( window.location.search.toString().indexOf('bestseller_sequence') !== -1 ) {
        $('[data-order="bestseller_sequence"]').addClass('active');
    } else if( window.location.search.toString().indexOf('order=price') !== -1 ) {
        if( window.location.search.toString().indexOf('dir=desc') !== -1 ) {
            $('[data-dir="desc"]').addClass('active');
        } else {
            $('[data-order="price"][data-dir="asc"]').addClass('active');
        }
    }

    // Init infinate scroll
    $('.category-products').infinitescroll({
        navSelector  : ".pages", 
        nextSelector : ".pages .i-next",
        itemSelector : ".products-grid",
        debug        : false,
        loadingImg   : "/img/loading.gif",
        loadingText  : "Loading new posts...",
        animate      : false,
        extraScrollPx: 50,
        donetext     : "I think we've hit the end, Jim",
        bufferPx     : 40,
        errorCallback: function(){},
        localMode    : true
        },
        function(arrayOfNewElems){
        }
    );
    $('.category-products').infinitescroll('unbind');
    $('.category-products').after(
        '<div class="load-more-wrapper">'+ $('.toolbar .amount').html().replace(/(.*)(of)(.*)(<\/p>)/, function(p1,p2,p3,p4,p5) {
            return p4 + ' results' + p5;
        })+' <a href="#" data-behaviour="loadMore" class="load-more-button">LOAD MORE</a></div>'
    );

    $('[data-behaviour="loadMore"]').bind('click',function(e){
        e.preventDefault();
        $('.category-products').infinitescroll('retrieve');
    });
    

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);