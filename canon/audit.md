# Canon website audit

@author Bill Coloe

## Notes

Your contact at AWA is john.barnes@awa-digital.com - feedback directly to him. 

You have AWA email addresses but you must run any correspondence that comes out of 
them through John before sending. Copy Jim in to all correspondence.

## Audit

Here are my notes on the Canon site:

GENERAL DOMAIN

http://www.canon.co.uk/
http://www.canon.dk/
http://www.canon.fr/

Using jQuery v1.11.1

Optimizely already installed which will save implementation time.

Responsive site using CSS media queries - any proposed tests will need to detail a design for each major point of viewport size.

Heavy use of animations for menus, dropdowns, etc. Most modifications to these animated elements will add complexity and some may not be doable.

The site has a good deal of selectors available but most are at the class level are not very semantic. It may take extra time to be specific enough to target the right element.

A significant challenge will be ensuring that the same HTML dependencies exist at the correct lexical location between the different domains. This will add extra time during development if running tests simultaneously on each domain.

STORE

https://store.canon.co.uk
https://store.canon.fr

I could not locate the store on the Denmark domain

The PDPs are using using an image carousel. Experiments modifying this element will have added complexity.

The store's site is using a simpler menu with basic HTML and CSS which should make modifications easy. 

The PLPs have a faceted search system that will reset the entire page when selected. Any changes made via experiments will need to be reapplied after every filter or sort request.

The store's site is also using a bootstrap-like CSS layout but the selectors have approximately the same specificity as the general domain.

In summary, the largest anticipated challenge will be ensuring consistency between each domain. Generally most basic tests will be possible but as always be cognizant of the challenges of working with forms and high complexity tests so we can investigate further. The site is obviously very large so this general audit cannot cover every single aspect and all possible experiments cannot be anticipated so it is recommended to undergo an individual audit/proof of concept before confirming with the client particular for experiments that change site functionality or introduce new features.