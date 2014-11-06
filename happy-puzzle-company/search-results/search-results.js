//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var hp_search_page_exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Happy Puzzle Search Results Experiment - dev 0.1');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('.search_tab_container');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'search_tab_container': $('.search_tab_container'),
    'search_term': $('.search_term').text(),
    'search_box': $('#ctl00_ucHeader_txtKeywordSearch'),

    'all_skills': $('.skill_scroller ul li'),
    'all_skills_list': $('.skill_scroller ul'),

    'skill_aggregation': {
        'All': [
            'Code Breaking',
            'Communication Skills',
            'Concentration',
            'Creative Thinking',
            'Creativity',
            'Fine Motor Skills',
            'General Knowledge',
            'General Skills',
            'Geography Skills',
            'Gross Motor Skills',
            'Hand/Eye Co-ordination',
            'Lateral Thinking',
            'Literacy',
            'Logical Deduction',
            'Memory',
            'Numeracy',
            'Observation Skills',
            'Problem Solving',
            'Sequencing',
            'Social Skills',
            'Spatial Awareness',
            'Speed Of Thought',
            'Strategic Planning',
            'Team Building',
            'Thinking Skills',
            'Understanding 3D Concepts',
            'Understanding Balance',
            'Understanding Colour',
            'Understanding Instructions',
            'Understanding Shapes',
            'Visual Perception',
            'Visual Tracking',
            'Understanding The Human Body',
            'Understanding Programming'
        ],
        'Social': [
            'Communication Skills',
            'Memory',
            'Observation Skills',
            'Social Skills',
            'Team Building',
        ],
        'Hand-Eye Co-ordination': [
            'Fine Motor Skills',
            'Gross Motor Skills',
            'Hand/Eye Co-ordination',
            'Understanding Balance',
        ],
        'Maths': [
            'Code Breaking',
            'Numeracy',
            'Sequencing',
            'Spatial Awareness',
            'Understanding 3D Concepts',
            'Understanding Shapes',
            'Understanding Programming'
        ],
        'General Knowlege': [
            'General Knowledge',
            'Geography Skills',
            'Understanding Instructions',
            'Understanding Colour',
            'Visual Perception',
            'Visual Tracking',
            'Understanding The Human Body',
            'General Skills',
            'Literacy'
        ],
        'Creativity': [
            'Concentration',
            'Creative Thinking',
            'Creativity',
            'Lateral Thinking',
            'Logical Deduction',
            'Problem Solving',
            'Speed Of Thought',
            'Strategic Planning',
            'Thinking Skills'
        ]
    },
    'skill_map': {}, // Used to map skill nodes to their names
    'aggregate_skill_nodes': []
};

// Styles
// String containing the CSS for the experiment
exp.css = '';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Remove 'Product' and 'Information' tabs
    this.vars.search_tab_container.hide();

    // Add search term to search box
    this.vars.search_box.val(
        this.vars.search_term
    );

    // Do stuff to skills
    $.each(this.vars.all_skills, function(){
        var $this = $(this);

        // STRIP ALL OF THE SKILLS OF THEIR DOPOSTBACKS!
        $this.find('a').attr('href', '#');
        $this.find('input').attr('onclick', '');

        // Map input to skill name
        exp.vars.skill_map[$this.find('a').text()] = $this.find('input');

        // Hide this skill
        $this.hide();
    });

    // Add skill aggregates to skills list
    $.each(Object.keys(this.vars.skill_aggregation), function(i, skill_aggregate_name){
        var html_template = '<li id="AWA_SKILL_AGGR_'+ skill_aggregate_name +'">\
                <span class="filter_checkbox" rel="lightbox[colour]"><input type="checkbox"></span>\
                <a class="filter_link" rel="lightbox[colour]" href="#">' + skill_aggregate_name + '</a>\
            </li>',
            aggregate_skill_node = $(html_template);

        // Should our czechbox be czeched?  Skil this for 'All' - we'll check if we should check that later.
        if (skill_aggregate_name !== 'All') {
            var czeched = false;
            $.each(exp.vars.skill_aggregation[skill_aggregate_name], function(i, subskill_name){
                if (exp.vars.skill_map[subskill_name] !== undefined && exp.vars.skill_map[subskill_name].prop('checked'))
                {
                    czeched = true;
                }
            });

            if (czeched) {
                aggregate_skill_node.find('input').prop('checked', true);
            }
        }

        aggregate_skill_node.find('a, input').on('click', function(e){
            var $this = $(this);

            // Uncheck all skills if we have 'all' ticked
            if (exp.vars.aggregate_skill_nodes[0].find('input').prop('checked'))
            {
                $.each(exp.vars.all_skills, function(i, skill_node){
                    $(skill_node).find('input').prop('checked', false);
                });
            }

            // If this is alredy checked then we now want to uncheck all our aggregated skills and submit the form.
            if ((this.nodeName == 'A' && $this.parents('li').find('input').prop('checked')) ||  // If we clicked the link to check the box it will NOT be checked
                (this.nodeName == 'INPUT' && !$this.parents('li').find('input').prop('checked'))) // If we clicked the input to check the box it WILL be checked
            {
                $.each(exp.vars.skill_aggregation[skill_aggregate_name], function(i, subskill_name){
                    if (exp.vars.skill_map[subskill_name] !== undefined)
                    {
                        exp.vars.skill_map[subskill_name].prop('checked', false);
                    }
                });
                setTimeout(__doPostBack, 100);
            }
            // Otherwise we want to check our aggregated skills and submit the form.
            else {
                $.each(exp.vars.skill_aggregation[skill_aggregate_name], function(i, subskill_name){
                    if (exp.vars.skill_map[subskill_name] !== undefined)
                    {
                        exp.vars.skill_map[subskill_name].prop('checked', true);
                    }
                });
                setTimeout(__doPostBack, 100);
            }
        });

        exp.vars.all_skills_list.append(aggregate_skill_node);
        exp.vars.aggregate_skill_nodes.push(aggregate_skill_node);
    });

    var checkAll = true;
    $.each(this.vars.aggregate_skill_nodes, function(){
        var $this = $(this);

        if ($this.attr('id') == 'AWA_SKILL_AGGR_All') {
            return;
        }

        if (!$this.find('input').prop('checked'))
        {
            checkAll = false;
        }
    });

    if (checkAll) {
        // Uncheck everything else
        $.each(this.vars.aggregate_skill_nodes, function(){
            $(this).find('input').prop('checked', false);
        });

        // Check all
        this.vars.aggregate_skill_nodes[0].find('input').prop('checked', true);
    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);
