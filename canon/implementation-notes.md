# Canon implementation notes

## Previews

We should not be making any experiment live until it is actually ready to go live, even with query parameter restrictions.
All previews should be done using the Optimizely preview tool and preview URL.

## QA

For each experiment Canon will provide a QA sheet for us to fill in, we only need to fill in the tabs 'use cases' and 'QA links'.

## Domains

Each country specific domain has its own project in Optimizely, some goals are shared between projects, some are specific to the domain.

## Google Analytics

Use universal analytics, set the custom tracker to 'tealium_0' and custom dimension to '11'.