# Optimizely Developers Guide #

Note - The developers guide is not yet finished and is essentially notes at the moment, feel free to tidy this up and finish bits off.

This guide assumes you are familiar with the Optimizely application, for more information see https://help.optimizely.com/hc/en-us

## Auditing ##

Each new site needs a full audit

TO DO: list steps to take in a full audit

Validate HTML, check for errors. Check for JavaScript errors.

Experiments need auditing individually, some more so than others. Initially check the page on all browsers, that way we are already aware of browser inconsistencies, 
broken behaviour in old IE's etc, also test the page(s) fully, that way we know how things 'should' work, 
and can document any broken functionality, before it gets blamed on the experiment.

## Setting up ##

When setting up the experiment in Optimizely it is a good idea to run seperate `dev` and `live`
experiments. The live version can be a `duplicate` of the dev experiment, once that is approved.
While this does not give us any real benefit technically (as experiments will always end up on
the live site for AWA and the client to test), it is good as it forces a mental distinction between 
what is live and not, it also allows you to make changes to the experiment while the live 
version is running.

In order to distinguish between the dev and live versions you should add rules to the `targeting` 
settings, i.e. for the live version we add a rule `Don't match any of these query parameters: dev`, 
and vice versa for the dev version. adding the query paramater rule to the dev version should be the
first thing you do.

In order to ensure AWA and the client always see the experiment when showing them for approval, 
you should make sure that the `traffic allocation` settings for the dev version are set to include 
100% of visitors in the experiment and display the variation to 100%.

Goals can be set up in the dev version, these will be copied across to the live version when you 
duplicate that.

## Development ##

Experiments should be written manually and run in browser dev tools, creating the experiment in Optimizely can be an awkward
process, and not possible for some experiments. You can write the experiment in a text editor and then run it in the browsers console.
Alternatively you can code from within the browser, Firefox allows you to do this using its `scratchpad` https://developer.mozilla.org/en-US/docs/Tools/Scratchpad I believe you can also do a similar thing with Chrome?

Always add a console.log(), noting the experiment name, that way when developing future exepriments developers can see what other experiments are running on the same page.

## Testing ##

Run code through jshint. Test in all major browsers, paying particular attention to IE8 because of its old JS engine, however it 
may be a good idea to check the original pages browser support.