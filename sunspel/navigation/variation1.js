// jshint multistr: true
// jshint strict: true

(function($) {

    'use strict';

    var AWA = {};

    // Logging

    AWA.log = function(str) {
        if(typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    AWA.vars = {
        replacement_menu_content: {
            mens: {
                't-shirts': '\
                    <li>                                                                            \
                        <a href="http://www.sunspel.com/uk/mens/tshirts/short-sleeve-crew.html">    \
                            Short Sleeve Crew Neck                                                  \
                        </a>                                                                        \
                    </li>                                                                           \
                    <li>                                                                            \
                        <a href="http://www.sunspel.com/uk/mens/tshirts/long-sleeve-crew-neck.html">\
                            Long Sleeve Crew Neck                                                   \
                        </a>                                                                        \
                    </li>                                                                           \
                    <li>                                                                            \
                        <a href="http://www.sunspel.com/uk/mens/tshirts/short-sleeve-henley.html">  \
                            Short Sleeve Henley                                                     \
                        </a>                                                                        \
                    </li>                                                                           \
                    <li>                                                                            \
                        <a href="http://www.sunspel.com/uk/mens/tshirts/long-sleeve-henley.html">   \
                            Long Sleeve Henley                                                      \
                        </a>                                                                        \
                    </li>                                                                           \
                    <li>                                                                            \
                        <a href="http://www.sunspel.com/uk/mens/tshirts/t-shirts-view-all.html">    \
                            View All                                                                \
                        </a>                                                                        \
                    </li>',

                'polo shirts': '\
                    <li>                                                                                    \
                        <a href="http://www.sunspel.com/uk/mens/polo-shirts/riviera-polo.html">             \
                            Riviera Polos                                                                   \
                        </a>                                                                                \
                    </li>                                                                                   \
                    <li>                                                                                    \
                        <a href="http://www.sunspel.com/uk/mens/polo-shirts/pique-polo-shirts.html">        \
                            Pique Polos                                                                     \
                        </a>                                                                                \
                    </li>                                                                                   \
                    <li>                                                                                    \
                        <a href="http://www.sunspel.com/uk/mens/polo-shirts/long-sleeve-jersey-polos.html"> \
                            Long Sleeve Polos                                                               \
                        </a>                                                                                \
                    </li>                                                                                   \
                    <li>                                                                                    \
                        <a href="http://www.sunspel.com/uk/mens/polo-shirts/jersey-polos.html">             \
                            Jersey Polos                                                                    \
                        </a>                                                                                \
                    </li>                                                                                   \
                    <li>                                                                                    \
                        <a href="http://www.sunspel.com/uk/mens/polo-shirts/polo-shirt-view-all.html">      \
                            View All                                                                        \
                        </a>                                                                                \
                    </li>',

                'clothing':  '\
                    <li>                                                                         \
                        <a href="http://www.sunspel.com/uk/mens/clothing/loopback-sweats.html">  \
                            Loopback Sweats                                                      \
                        </a>                                                                     \
                    </li>                                                                        \
                    <li>                                                                         \
                        <a href="http://www.sunspel.com/uk/mens/clothing/shirts.html">           \
                            Shirts                                                               \
                        </a>                                                                     \
                    </li>                                                                        \
                    <li>                                                                         \
                        <a href="http://www.sunspel.com/uk/mens/clothing/trousers.html">         \
                            Trousers                                                             \
                        </a>                                                                     \
                    </li>                                                                        \
                    <li>                                                                         \
                        <a href="http://www.sunspel.com/uk/mens/clothing/coats-jackets.html">    \
                            Coats &amp; Jackets                                                  \
                        </a>                                                                     \
                    </li>                                                                        \
                    <li>                                                                         \
                        <a href="http://www.sunspel.com/uk/mens/clothing/loungewear.html">       \
                            Loungewear                                                           \
                        </a>                                                                     \
                    </li>                                                                        \
                    <li>                                                                         \
                        <a href="http://www.sunspel.com/uk/mens/clothing/shorts.html">           \
                            Shorts                                                               \
                        </a>                                                                     \
                    </li>                                                                        \
                    <li>                                                                         \
                        <a href="http://www.sunspel.com/uk/mens/clothing/swimwear.html">         \
                            Swimwear                                                             \
                        </a>                                                                     \
                    </li>                                                                        \
                    <li>                                                                         \
                        <a href="http://www.sunspel.com/uk/mens/clothing/cellulock.html">        \
                            Cellulock                                                            \
                        </a>                                                                     \
                    </li>                                                                        \
                    <li>                                                                         \
                        <a href="http://www.sunspel.com/uk/mens/clothing/clothing-view-all.html">\
                            View All                                                             \
                        </a>                                                                     \
                    </li>',

                'underwear': '\
                    <li>                                                                           \
                        <a href="http://www.sunspel.com/uk/mens/underwear/boxer-shorts.html">      \
                            Boxer Shorts                                                           \
                        </a>                                                                       \
                    </li>                                                                          \
                    <li>                                                                           \
                        <a href="http://www.sunspel.com/uk/mens/underwear/trunks-and-shorts.html"> \
                            Trunks and Shorts                                                      \
                        </a>                                                                       \
                    </li>                                                                          \
                    <li>                                                                           \
                        <a href="http://www.sunspel.com/uk/mens/underwear/t-shirt.html">           \
                            T-Shirts and Vests                                                     \
                        </a>                                                                       \
                    </li>                                                                          \
                    <li>                                                                           \
                        <a href="http://www.sunspel.com/uk/mens/underwear/brief.html">             \
                            Briefs                                                                 \
                        </a>                                                                       \
                    </li>                                                                          \
                    <li>                                                                           \
                        <a href="http://www.sunspel.com/uk/mens/underwear/underwear-sets.html">    \
                            Underwear Sets                                                         \
                        </a>                                                                       \
                    </li>                                                                          \
                    <li>                                                                           \
                        <a href="http://www.sunspel.com/uk/mens/underwear/cellular.html">          \
                            Cellular Cotton                                                        \
                        </a>                                                                       \
                    </li>                                                                          \
                    <li>                                                                           \
                        <a href="http://www.sunspel.com/uk/mens/underwear/sea-island-cotton.html"> \
                            Sea Island Cotton                                                      \
                        </a>                                                                       \
                    </li>                                                                          \
                    <li>                                                                           \
                        <a href="http://www.sunspel.com/uk/mens/underwear/thermals.html">          \
                            Thermals                                                               \
                        </a>                                                                       \
                    </li>                                                                          \
                    <li>                                                                           \
                        <a href="http://www.sunspel.com/uk/mens/underwear/view-all.html">          \
                            View All                                                               \
                        </a>                                                                       \
                    </li>',
            },
            womens: {
                'clothing': '\
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/clothing/loopback-sweats.html"> \
                            Loopback sweats                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/clothing/dresses-and-skirts.html"> \
                            Dresses and Skirts                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/clothing/trousers.html"> \
                            Trousers and Shorts                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/clothing/jackets.html"> \
                            Jackets                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/clothing/loungewear.html"> \
                            Loungewear                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/clothing/polo-shirts.html"> \
                            Polo Shirts                                \
                        </a> \
                    </li>',
                'underwear': '\
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/underwear/sleepwear.html"> \
                            Sleepwear                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/underwear/vests-and-camis.html"> \
                            Vests and Tops                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/underwear/briefs.html"> \
                            Briefs and Hipsters                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/underwear/sea-island-cotton.html"> \
                            Sea Island Cotton                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/underwear/underwear-view-all.html"> \
                            View All                                \
                        </a> \
                    </li>',
                't-shirts': '\
                    <li>\
                        <a href="http://www.sunspel.com/uk/womens/womens-tshirts/t-shirts.html">\
                            T-Shirts                               \
                        </a>\
                    </li>\
                    <li>\
                        <a href="http://www.sunspel.com/uk/womens/womens-tshirts/three-quarter-sleeve.html">\
                            3/4 Sleeve                               \
                        </a>\
                    </li>\
                    <li>\
                        <a href="http://www.sunspel.com/uk/womens/womens-tshirts/long-sleeve.html">\
                            Long Sleeve                               \
                        </a>\
                    </li>\
                    <li>\
                        <a href="http://www.sunspel.com/uk/womens/womens-tshirts/short-sleeve.html">\
                            Short Sleeve                               \
                        </a>\
                    </li>\
                    <li>\
                        <a href="http://www.sunspel.com/uk/womens/womens-tshirts/vests.html">\
                            Vests                               \
                        </a>\
                    </li>\
                    <li>\
                        <a href="http://www.sunspel.com/uk/womens/womens-tshirts/tops.html">\
                            Tops                               \
                        </a>\
                    </li>\
                    <li>\
                        <a href="http://www.sunspel.com/uk/womens/womens-tshirts/view-all.html">\
                            View All                               \
                        </a>\
                    </li>',
                'knitwear': '\
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/womens-knitwear/fine-merino-wool.html"> \
                            Fine Merino Wool                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/womens-knitwear/jumpers.html"> \
                            Jumpers                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/womens-knitwear/cardigans.html"> \
                            Cardigans                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/womens-knitwear/vintage-wool.html"> \
                            Vintage Wool                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/womens-knitwear/cashmere.html"> \
                            Cashmere                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/womens-knitwear/cellulock.html"> \
                            Cellulock                                \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/womens/womens-knitwear/knitwear-view-all.html"> \
                            View All                                \
                        </a> \
                    </li>',
            },
            accessories: {
                'men\'s': '\
                    <li>\
                        <a href="http://www.sunspel.com/uk/accessories/mens-accessories/socks.html">\
                            Socks                                      \
                        </a>\
                    </li>\
                    <li>\
                        <a href="http://www.sunspel.com/uk/accessories/mens-accessories/hats-and-scarves.html">\
                            Hats and Scarves                                      \
                        </a>\
                    </li>\
                    <li>\
                        <a href="http://www.sunspel.com/uk/accessories/mens-accessories/wallets.html">\
                            Wallets                                      \
                        </a>\
                    </li>\
                    <li>\
                        <a href="http://www.sunspel.com/uk/accessories/mens-accessories/belts.html">\
                            Belts                                      \
                        </a>\
                    </li>\
                    <li>\
                        <a href="http://www.sunspel.com/uk/accessories/mens-accessories/shoes.html">\
                            Shoes                                      \
                        </a>\
                    </li>\
                    <li>\
                        <a href="http://www.sunspel.com/uk/accessories/mens-accessories/bags.html">\
                            Bags                                      \
                        </a>\
                    </li>\
                    <li>\
                        <a href="http://www.sunspel.com/uk/accessories/mens-accessories/sunglasses.html">\
                            Sunglasses                                      \
                        </a>\
                    </li>\
                    <li>\
                        <a href="http://www.sunspel.com/uk/accessories/mens-accessories/stationery.html">\
                            Stationery                                      \
                        </a>\
                    </li>',
                'women\'s': '\
                    <li> \
                        <a href="http://www.sunspel.com/uk/accessories/womens-accessories/hats-and-scarves.html"> \
                            Hats and Scarves                                       \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/accessories/womens-accessories/bags.html"> \
                            Bags                                       \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/accessories/womens-accessories/shoes.html"> \
                            Shoes                                       \
                        </a> \
                    </li> \
                    <li> \
                        <a href="http://www.sunspel.com/uk/accessories/womens-accessories/women-s-underwear.html"> \
                            Underwear                                       \
                        </a> \
                    </li>'
            }
        }
    }

    AWA.func = {
        getMenuItems: function(){
            var menu_items = {
                'new': undefined,
                'mens': undefined,
                'womens': undefined,
                'accessories': undefined,
                'about_us': undefined,
                'journal': undefined
            };

            $('.site-nav__sections > li').each(function(){
                var $item = $(this);

                switch (true) {
                    case $item.hasClass('site-nav__new'):
                        menu_items.new = $item;
                        break;

                    case $item.hasClass('site-nav__mens'):
                        menu_items.mens = $item;
                        break;

                    case $item.hasClass('site-nav__womens'):
                        menu_items.womens = $item;
                        break;

                    case $item.hasClass('site-nav__accessories'):
                        menu_items.accessories = $item;
                        break;

                    case $item.text().trim().toLowerCase() == 'about us':
                        menu_items.about_us = $item;
                        break;

                    case $item.text().trim().toLowerCase() == 'journal':
                        menu_items.journal = $item;
                        break;
                }
            });

            return menu_items;

        },
        rearrangeMensNav: function($mens){
            var groups = {
                'tshirts':     undefined,
                'polo':        undefined,
                'clothing':    undefined,
                'knitwear':    undefined,
                'underwear':   undefined,
                'accessories': undefined
            };

            // Identify the various sections
            // Also swap out the group contents, where relevant
            $mens.find('.megamenu__group').each(function(){
                var $group = $(this),
                    group_title = $group.find('> a').text().trim().toLowerCase();

                switch (group_title) {
                    case 't-shirts':
                        groups.tshirts = $group;
                        break;

                    case 'polo shirts':
                        groups.polo = $group;
                        break;

                    case 'clothing':
                        groups.clothing = $group;
                        break;

                    case 'knitwear':
                        groups.knitwear = $group;
                        break;

                    case 'underwear':
                        groups.underwear = $group;
                        break;

                    case 'accessories':
                        groups.accessories = $group;
                        break;
                }

                // Swippity swoppoty
                if (Object.keys(AWA.vars.replacement_menu_content.mens).indexOf(group_title) !== -1) {
                    $group
                        .find('ul')
                        .empty()
                        .append(AWA.vars.replacement_menu_content.mens[group_title]);
                }
            });

            // Re-arrange into desired order for groups
            groups.tshirts.after(
                groups.underwear
            );
            groups.underwear.after(
                groups.clothing
            );
            groups.clothing.after(
                groups.polo
            );
            groups.polo.after(
                groups.knitwear
            );
            groups.accessories.remove(); // No accessories!

            // Rename "Clothing" to "Other clothing"
            groups.clothing.find('> a').get(0).childNodes[0].nodeValue = 'Other clothing';
        },
        rearrangeWomensNav: function($mens){
            var groups = {
                'tshirts':     undefined,
                'clothing':    undefined,
                'knitwear':    undefined,
                'underwear':   undefined,
                'accessories': undefined
            };

            // Identify the various sections
            // Also swap out the group contents, where relevant
            $mens.find('.megamenu__group').each(function(){
                var $group = $(this),
                    group_title = $group.find('> a').text().trim().toLowerCase();

                switch (group_title) {
                    case 't-shirts':
                        groups.tshirts = $group;
                        break;

                    case 'clothing':
                        groups.clothing = $group;
                        break;

                    case 'knitwear':
                        groups.knitwear = $group;
                        break;

                    case 'underwear':
                        groups.underwear = $group;
                        break;

                    case 'accessories':
                        groups.accessories = $group;
                        break;
                }

                // Swippity swoppoty
                if (Object.keys(AWA.vars.replacement_menu_content.womens).indexOf(group_title) !== -1) {
                    $group
                        .find('ul')
                        .empty()
                        .append(AWA.vars.replacement_menu_content.womens[group_title]);
                }
            });

            // Re-arrange into desired order for groups
            groups.clothing.after(
                groups.underwear
            );
            groups.underwear.after(
                groups.tshirts
            );
            groups.tshirts.after(
                groups.knitwear
            );
            groups.accessories.remove(); // No accessories!

            // Rename "Clothing" to "Other clothing"
            groups.clothing.find('> a').get(0).childNodes[0].nodeValue = 'Other clothing';
        },
        rearrangeAccessoriesNav: function($mens){
            // swap out the group contents
            $mens.find('.megamenu__group').each(function(){
                var $group = $(this),
                    group_title = $group.find('> a').text().trim().toLowerCase();

                // Swippity swoppoty
                if (Object.keys(AWA.vars.replacement_menu_content.accessories).indexOf(group_title) !== -1) {
                    $group
                        .find('ul')
                        .empty()
                        .append(AWA.vars.replacement_menu_content.accessories[group_title]);
                }
            });
        }
    };

    // CSS

    AWA.css = '\
    @media only screen and (min-width: 900px) { \
        .skip--about_us:after {                 \
            content: " ";                       \
            width: 1px;                         \
            position: absolute;                 \
            height: 22px;                       \
            background: #fff;                   \
            top: 18px;                          \
            right: 0;                           \
        }                                       \
        .skip--about_us .label {                \
            display: inline-block;              \
        }                                       \
        .site-search {                          \
            right: 128px;                       \
        }                                       \
        .site-nav__sections>li {                \
            width: 25%;                         \
        }                                       \
        .megamenu__group a {                    \
            font-weight: 700;                   \
        }                                       \
        .megamenu__group a.megamenu__expand {   \
            color: #000;                        \
        }                                       \
        .megamenu {                             \
            text-align: left;                   \
        }                                       \
    }                                           \
    .no-touch .skip--about_us:hover span {      \
        text-decoration: underline;             \
    }                                           \
    .AWA-site-nav__sections {                   \
        -webkit-transition: padding .3s ease;   \
        transition: padding .3s ease;           \
        font-size: .875rem;                     \
        text-align: center;                     \
        margin: 0;                              \
        list-style: none;                       \
    }                                           \
                                                \
    .AWA-site-nav__sections > li {              \
        float: left;                            \
        width: 50%;                             \
    }                                           \
                                                \
    .AWA-site-nav__sections > li > a {          \
        position: relative;                     \
        padding: 15px 0;                        \
        line-height: 15px;                      \
        display: block;                         \
        color: #fff;                            \
        font-weight: 700;                       \
        text-transform: uppercase;              \
        letter-spacing: .2em;                   \
        -webkit-transform: scaleX(1);           \
        transform: scaleX(1);                   \
        -webkit-font-smoothing: antialiased;    \
    }                                           \
                                                \
    .site-header {                              \
        height: 135px;                          \
    }                                           \
                                                \
                                                \
    @media only screen and (min-width: 400px) { \
        .site-header {                          \
            height: 150px;                      \
        }                                       \
    }                                           \
                                                \
    @media only screen and (min-width: 480px) { \
        .site-header {                          \
            height: 110px;                      \
        }                                       \
        .AWA-site-nav__sections > li {          \
            float: left;                        \
            width: 23%;                         \
        }                                       \
        .AWA-site-nav__sections >               \
            li:nth-of-type(3) {                 \
            width: 30%;                         \
        }                                       \
    }                                           \
                                                \
    @media only screen and (min-width: 900px) { \
        .site-header {                          \
            height: 60px;                       \
        }                                       \
        .AWA-nondesktop-nav {                   \
            display: none;                      \
        }                                       \
    }                                           \
    ';

    $('body').append('<style type="text/css">'+AWA.css+'</style>');

    AWA.log('Sunspel Navigation Test');

    var menu_items = AWA.func.getMenuItems();

    // Completely drop "Journal"
    if (menu_items.journal !== undefined) {
        menu_items.journal.remove();
    }

    // Move contents of "About us" link to elsewhere in the header
    if (menu_items.about_us !== undefined) {

        // Fetch & fiddle with the anchor
        var $about_us_link = menu_items.about_us.find('> a');
        $about_us_link.addClass('skip skip--about_us');
        $about_us_link.html(
            '<span class="label">' +
            $about_us_link.text().trim() +
            '</span>'
        );

        // Steal the little separator line and give it to our new about-us link


        // Add it to the nav, remove the old menu item -- it's empty and
        // useless now.
        $('.skip__links.skip__links--right .skip.skip--search').after($about_us_link);

        menu_items.about_us.remove();
    }

    // Move 'New' to the end of the nav
    if (menu_items.new !== undefined && menu_items.accessories !== undefined) {
        menu_items.new.insertAfter(menu_items.accessories);
    }

    // New menu structure for mens
    if (menu_items.mens !== undefined) {
        AWA.func.rearrangeMensNav(menu_items.mens);
        AWA.func.rearrangeWomensNav(menu_items.womens);
        AWA.func.rearrangeAccessoriesNav(menu_items.accessories);
    }

    // Add flat links to "Sale", Men's", "Women's", "Accessories"
    // under main nav, for tablet & smaller layouts
    var $links = $('.site-nav__sections > li > a')
        .clone()
        .removeClass('megamenu__expand')
        .removeAttr('nav-toggle');

    // Honey, I killed the kids.
    $links.each(function(){
        var $link = $(this);
        $link.children().remove();
    });

    var $non_desktop_nav = $('<div>', {
        'class': 'container AWA-nondesktop-nav'
    });
    var $links_container = $('<ul>', {
        'class': 'AWA-site-nav__sections'
    });
    $non_desktop_nav.append($links_container);
    $links_container.append($links);
    $links.wrap('<li>');

    $('.site-header').append($non_desktop_nav);

})(jQuery); // vwo_$ || optimizely.$
