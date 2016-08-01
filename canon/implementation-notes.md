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

Do not set up analytics using the usual integrations options. Instead analytics must be manually triggered via a snippet of code for each 
variation and the control. An example of the code required is included in the `ga-snippet.js` file, along with some explanation as 
to how to configure it for each variation.
