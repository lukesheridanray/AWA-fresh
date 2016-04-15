/**
 * Just some snippets from the VWO training calls that were worth noting.
 */


// see list of actions taken in editor, outputs list of the DOM nodes modified
VWO.currentState.stack();


// force VWO to recheck the segmentation
// this must be run before the VWO 'smart code' snippet, so needs to be added by site admins
// VWO are due to roll out the ability to add code before the snippet
_vis_opt_check_segment = {
    '1': true
}

// Global var available to see details of current experiment, goals etc
_vwo_exp