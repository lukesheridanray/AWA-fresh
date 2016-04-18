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
var exp = (function(vwo_$) {

    // Initialise the experiment object
    var exp = {};

    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
    // (always) have 'console' set (e.g. IE9)
    exp.log = function(str) {
        if (typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    // Log the experiment, useful when multiple experiments are running
    exp.log('Product Page - v1 - var4');

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
        reviewBox:  "<div id='AWA-review-box'>\
                        <h1>What customers say about this shoe</h1>\
                        <div id='AWA-review'></div>\
                        <div id='AWA-author'></div>\
                        <a id='AWA-read-more-reviews' href='#'>read more reviews</a>\
                    </div>",
        ztrek: [
            {
                review: "These are how sandals should be. Light and comfortable. Note that the sole is thin so you will feel everything under your feet. They fit as advertised. I traced my foot on the template and was in between sizes. I went with the smaller one and it fits perfectly.",
                author: "Ian Butterworth"
            },
            {
                review: "There is nothing better than running 'free' in an open sandal that doesn't even feel like a sandal, but rather like an extension of my feet... Amuri Z-Treks allow for very natural running posture and are a true pleasure to run in. After runs they leave your feet feeling 'alive' and refreshed, as my arthritis in my toes no longer get in the way during my runs. Highly recommended...'be a kid again' and really enjoy your runs.....",
                author: "Louis"
            },
            {
                review: "Absolutely love them, the ground feel is incredible. Due to their hard yet flexible sole, I can even feel fallen autumn leaves on the ground. The lacing is simple and the fit is secure and comfortable. I use them for hiking, running, working, playing with the children and just being, and they perform well for all of these activities.",
                author: "Mike Jarrett"   
            },
            {
                review: "I followed all the directions to get a good fit because I hate any tightness and irritation on my feet. And, it absolutely worked. I have wide feet and they were in between a woman's and man's size so I went for the men's size. They are totally comfortable. They are not a fashion statement for me especially b/c they are probably a bit big/wide. But, THEY ARE COMFORTABLE! And that is what counts. I live in Southern California so I justified the price by planning to wear them with socks in the winter.",
                author: "Pam Forrester"
            },
            {
                review: "I've been wearing the Z-Treks now for about a week and I'm very pleased. The big selling points for me with this model were 1) the design allows for wearing normal socks if it gets cold 2) the design blends right in and is aesthetically pleasing and 3) the sole is supposed to last for a long time. The Z's are really comfortable and I'm looking forward to wearing these guys throughout my upcoming backpacking trip to SE Asia as my main footwear.",
                author: "Dave"
            }
        ],
        amuri: [
            {
                review: "It has only been about a week since I started wearing the Cloud but I can honestly say they are some of the most comfortable footwear I have ever used, barefoot or otherwise, in this amount of time. The barefoot sensation is much more natural and seamless than I have experienced in the Vibram five fingers, the only other \"barefoot\" shoes I own. Also you don't look like a clown wearing these ones...",
                author: "Drew Reuss"
            },
            {
                review: "These Amuri Cloud sandals are in virtually every regard the finest sandals I have ever owned. While the cushioning on the Amuri Cloud is thin, it does work very well at mitigating some impact load off your forefoot while walking or running, as well as making standing slightly more comfortable. The lacing system is elegant in its simplicity and offers a huge amount of room to customize the fit to different shapes and sizes of feet; for myself, my feet are very tall for their length which can make shoe shopping difficult, an issue I have not had with the Amuri Clouds. ",
                author: "Michael Cormier"
            },
            {
                review: "The straps are comfortable and can be adjusted to exactly the right level of tightness, and they're like being barefoot without having to worry about stepping on something sharp. In short, they're great sandals at a great price.",
                author: "Bryan Cheron"
            },
            {
                review: "I'm not a runner, or much of a walker for that matter, but I love to be barefoot, but can't seem to be able to be barefoot everywhere. Enter the Amuri Cloud sandals. I've worn them everyday since I received them (about a week), and after making some adjustments to the length of the laces these are by far the most comfortable shoes I've ever worn. It really makes me feel like I'm not wearing anything on my feet! I am able to wear them to work and it's fantastic!",
                author: "Brett Reimer"
            },
            {
                review: "I've had mine for about a month now and I love them! Once I got the right adjustment for them (which they're really easy to adjust), they were super comfortable. I've worn them while running and climbing, and they've also become my favorite work and after-practice shoes. It takes a little while to get used to the heel, but otherwise, they've been amazing from the start!",
                author: "Lakeisha Story"
            },
            {
                review: "I was shocked by how much more comfortable my knees, hips, and back, too, felt after switching from regular shoes to my Xeros! I enjoyed the way that the articulated soles allowed me to feel the differences between sidewalk, sand, and boardwalk. Also, several people admired the unique appearance of my sandals. I'm a fan.",
                author: "Rebecca Rock"
            }
        ],
        sensori: [
            {
                review: "I bought my first pair of Amuri Ventures on May 16, 2014 they have held up great. I have hiked, biked, walked, ran, and swam in these shoes for over a year now. I would recommend them to anyone who loves to feel the earth under there feet.",
                author: "Jim Rolfson"
            },
            {
                review: "Forget the slides and expensive name brand sandals, these look good, feel good and are durable. One of the best $40 I ever spent!",
                author: "Tommy Turk"
            },
            {
                review: "I have been wearing my sandals almost daily for over a year. I wear them to work, hiking, walking, on vacations, in and around the water, and pretty much everything else. I like that they don't slip on most slick surfaces and are easy to clean by hosing them off after a particularly dusty hike. They have held up well there is some fraying on my laces, but I honestly didn't think the shoe would hold up this long. Not only do I have a great barefoot feel, but I get lots of \"those are cute\" comments from other people (not something that normally happens with barefoot-type shoes!).",
                author: "Kathi"
            }
        ],
        feeltrue: [
            {
                review: "I often forget to take them off because they're actually THAT comfortable. I can run in them, walk in them and even swim in them if I want to (for those rocky beaches). They're small to pack, light to carry, thin to get that barefoot feeling and they literally fit the form of your foot. Overall, they're FANTASTIC and I've just made my second order ...",
                author: "Mitch Harasym"
            },
            {
                review: "Finally, shoes that don't hurt my feet. I find it nearly impossible to find shoes on the high street that fit. Even when the size is right the excessive support in most styles leaves me with persistent pain. The Xero shoes kit was easy to use, with excellent instructions, and high quality materials. They are super comfy. My plantar faciitis stopped almost immediately. This had been dragging on for over 6 months so I'm really impressed.",
                author: "Jackie"
            },
            {
                review: "They feel like they are almost a part of me. Walking on ANYTHING, even cement, brings so many good sensations up through my feet that it makes them happy to go anywhere. I also love how empowered I feel having put these sandals together myself. It's like knowing how to change a tire or jump-start your car. I feel like I really understand them. And there is this wonderful knowledge that when it's time to change the laces I can just do it myself in a flash. ",
                author: "Linda"
            },
            {
                review: "My feet were hurting constantly and I read that barefoot walking and running were good for helping strengthen the feet and correcting the damage traditional footwear has caused. Since I've had them my feet feel much better, I wear these shoes as much as I can!",
                author: "Matt"
            }
        ]
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
    #AWA-review-box {\
        padding-top: 15px;\
    }\
    #AWA-review-box h1 {\
        font-size: 20px;\
    }\
    #AWA-review, #AWA-author {\
        margin-top: 12px;\
    }\
    #AWA-read-more-reviews {\
        display: block;\
        text-decoration: underline;\
        font-weight: bold;\
        margin-top: 12px;\
    }\
    #AWA-read-more-reviews a:hover {\
        color: midnightblue;\
    }';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		vwo_$('head').append('<style type="text/css">'+exp.css+'</style>');


        // The Norton Box area and much of the page has a loading delay
        var waitFor = function(condition, callback, timeout, keepAlive) {
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
        };

        // Hide Norton box
        var callback = function() {
            // Insert reviews box
            vwo_$(".divider").first().after(exp.vars.reviewBox);

            // Hide Norton box
            vwo_$(".buysafe-kicker").hide();

            // Control panel to determine what reviews should be inserted
            switch(window.location.pathname) {
                case "/shop/amuri/ztrek-men/":
                case "/shop/amuri/ztrek-women/":
                    insertReviews(exp.vars.ztrek);
                    break;
                case "/shop/amuri/amuri-cloud-mens-barefoot-sandal/":
                case "/shop/amuri/amuri-cloud-womens-barefoot-sandal/":
                    insertReviews(exp.vars.amuri);
                    break;
                case "/shop/amuri/sensori-venture-mens-barefoot-sandals/":
                case "/shop/amuri/sensori-venture-womens-barefoot-sandals/":
                    insertReviews(exp.vars.sensori);
                case "/shop/diy-kits/diy-feeltrue/":
                    insertReviews(exp.vars.feeltrue);
                default:
                    vwo_$("AWA-review-box").hide();
            }

            // Define insertReviews function
            function insertReviews(array) {
                var reviewNum = Math.floor(Math.random() * array.length);
                vwo_$("#AWA-review").text(array[reviewNum].review);
                vwo_$("#AWA-author").text(array[reviewNum].author);
            }


            // "read more reviews" link click handler
            vwo_$("#AWA-read-more-reviews").click(function(e) {
                e.preventDefault();
                jQuery('a[href="#tab-reviews"]').trigger("click"); //jQuery is needed because it seems vwo_$ does not support "trigger"
            });
        };

        var condition = function() {
            return vwo_$(".divider").length;
        };

        // Call polling functions
        waitFor(condition, callback);

	};


	// Run the experiment
    exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(vwo_$);