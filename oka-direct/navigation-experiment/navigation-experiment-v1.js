// simple experiment
// a proof of concept for AWA
// removing 3 items from the menu

// Desktop / tablet

// remove Gifts
$('#cat-nav .custom-touch2').filter(
    function(){
        return $(this).find('a:eq(0)').text().trim().indexOf('Gifts') !== -1;
    }
).remove();

// Remove Online exclusives and Blog
$('#cat-nav .ie7hidden,#cat-nav .last-child.container').remove();

// Add last-child class to New Season
$('#cat-nav .custom-touch2').filter(
    function(){
        return $(this).find('a:eq(0)').text().trim().indexOf('New Season') !== -1;
    }
).addClass('last-child');

// Mobile

// Remove menu items
$('.mobile-nav li:contains("Gifts"), \
    .mobile-nav li:contains("Online Exclusives"), \
    .mobile-nav li:contains("OKA Blog")'
).remove();

// Log to console if available
if (typeof window.console !== 'undefined') {
    console.log('Navigation experiment v1');
}