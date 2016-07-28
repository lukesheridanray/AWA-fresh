# Canon implementation notes

## Previews

We should not be making any experiment live until it is actually ready to go live, even with query parameter restrictions.
All previews should be done using the Optimizely preview tool and preview URL, or alternatively, Optimizely force parameters, 
which Canon turned on for us at request.

## QA

For each experiment Canon will provide a QA sheet for us to fill in, we only need to fill in the tabs `use cases` and `QA links`.
Adding any use cases which are relevant to the experiment.

## Domains

Each country specific domain has its own project in Optimizely, some goals are shared between projects, some are specific to the domain.

## Google Analytics

Use universal analytics, set the custom tracker to `tealium_0` and custom dimension to `11`. There are 3 possible values for dimension, 
depending on what is being tracked, these are: 9 - hit, 10 - session, 11 - user. Unless specified we will always be tracking user (11).

We also need to add a snippet of code to each variation, including the original. An example of this is shown below, where `dimensionValue`
is a unique value for that variation, this includes the test name, country code, ID number and varation, e.g. variation1, or original.
Once this has been done please pass the value onto the optimiser.

    var dimensionValue = 'RangeVP-UK-6330551084-Variation1';
    ga('tealium_0.set', 'dimension11', dimensionValue);
    ga('tealium_0.send', 'event', 'E-Commerce', 'Optimizely', dimensionValue, 0, {nonInteraction: true});
