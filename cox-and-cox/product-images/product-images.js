var productImagesExperiment = {

    // vars object
    'vars': {
        'p_code': CRITEO_CONF[0][0]['Product ID'].toLowerCase().replace(' ','', 'g'),
        'p_id': jQuery('.no-display input[name=product]').val(),
        'zoom_container': jQuery('.MagicToolboxContainer'),
        'initial_image_large': jQuery('.MagicZoomPlus').attr('href'),
        'initial_image_med': jQuery('.MagicZoomPlus img').attr('src'),
        'thumbs_url': 'http://www.awa-digital.com/optimizely/cox-cox/product-images/',
        'has_thumbs': ((jQuery('.MagicToolboxSelectorsContainer').length) ? true : false)
    },

    // function to run the actual experiment
    'run': function() {

        // create a reference to this.vars
        var _vars = this.vars;

        console.log('v3: ' + _vars.p_code);

        // add thumbs
        if(_vars.has_thumbs === true) {
            jQuery('.MagicToolboxSelectorsContainer ul').append(' \
              <li><a class="MagicThumb-swap" style="outline: 0px none; display: inline-block;" onclick="MagicToolboxChangeSelector(this);" href="'+_vars.thumbs_url+_vars.p_code+'-1-large.png" rel="zoom-id: MagicZoomPlusImage'+_vars.p_id+';caption-source: a:title;disable-zoom: false;disable-expand: false;" rev="'+_vars.thumbs_url+_vars.p_code+'-1-med.png"><img src="'+_vars.thumbs_url+_vars.p_code+'-1-thumb.png" alt=""></a></li> \
              '+((_vars.p_code !== 'h-zchest' && _vars.p_code !== 'h-knitstl') ? '<li><a class="MagicThumb-swap" style="outline: 0px none; display: inline-block;" onclick="MagicToolboxChangeSelector(this);" href="'+_vars.thumbs_url+_vars.p_code+'-2-large.png" rel="zoom-id: MagicZoomPlusImage'+_vars.p_id+';caption-source: a:title;disable-zoom: false;disable-expand: false;" rev="'+_vars.thumbs_url+_vars.p_code+'-2-med.png"><img src="'+_vars.thumbs_url+_vars.p_code+'-2-thumb.png" alt=""></a></li>' : '')+' \
'+((_vars.p_code === 'geometricrugs' || _vars.p_code === 'k-stepstl' || _vars.p_code === 'displaydomes' ||  _vars.p_code === 'woodeneggs' || _vars.p_code === 'k-cafe' || _vars.p_code === 'h-wdunit') ? '<li><a class="MagicThumb-swap" style="outline: 0px none; display: inline-block;" onclick="MagicToolboxChangeSelector(this);" href="'+_vars.thumbs_url+_vars.p_code+'-3-large.png" rel="zoom-id: MagicZoomPlusImage'+_vars.p_id+';caption-source: a:title;disable-zoom: false;disable-expand: false;" rev="'+_vars.thumbs_url+_vars.p_code+'-3-med.png"><img src="'+_vars.thumbs_url+_vars.p_code+'-3-thumb.png" alt=""></a></li>' : '')+' \
            ');
        } else {
            _vars.zoom_container.append(' \
              <div id="MagicToolboxSelectors'+_vars.p_id+'" class="more-views MagicToolboxSelectorsContainer" style="margin-top: 5px"> \
                <h4>More Views</h4><ul> \
                   <li><a class="MagicThumb-swap" style="outline: 0px none; display: inline-block;" onclick="MagicToolboxChangeSelector(this);" href="'+_vars.initial_image_large+'" rel="zoom-id: MagicZoomPlusImage'+_vars.p_id+';caption-source: a:title;disable-zoom: false;disable-expand: false;" rev="'+_vars.initial_image_med+'"><img src="'+_vars.thumbs_url+_vars.p_code+'-init-thumb.png" alt=""></a></li> \
                   <li><a class="MagicThumb-swap" style="outline: 0px none; display: inline-block;" onclick="MagicToolboxChangeSelector(this);" href="'+_vars.thumbs_url+_vars.p_code+'-1-large.png" rel="zoom-id: MagicZoomPlusImage'+_vars.p_id+';caption-source: a:title;disable-zoom: false;disable-expand: false;" rev="'+_vars.thumbs_url+_vars.p_code+'-1-med.png"><img src="'+_vars.thumbs_url+_vars.p_code+'-1-thumb.png" alt=""></a></li> \
                   '+((_vars.p_code !== 'g-rocker' && _vars.p_code !== 'h-hangphot') ? '<li><a class="MagicThumb-swap" style="outline: 0px none; display: inline-block;" onclick="MagicToolboxChangeSelector(this);" href="'+_vars.thumbs_url+_vars.p_code+'-2-large.png" rel="zoom-id: MagicZoomPlusImage'+_vars.p_id+';caption-source: a:title;disable-zoom: false;disable-expand: false;" rev="'+_vars.thumbs_url+_vars.p_code+'-2-med.png"><img src="'+_vars.thumbs_url+_vars.p_code+'-2-thumb.png" alt=""></a></li>' : '')+' \
'+((_vars.p_code === 'geometricrugs' || _vars.p_code === 'velvetandlinencushioncover' || _vars.p_code === 'k-stepstl' || _vars.p_code === 'displaydomes' ||  _vars.p_code === 'woodeneggs' || _vars.p_code === 'k-cafe' || _vars.p_code === 'h-wdunit') ? '<li><a class="MagicThumb-swap" style="outline: 0px none; display: inline-block;" onclick="MagicToolboxChangeSelector(this);" href="'+_vars.thumbs_url+_vars.p_code+'-3-large.png" rel="zoom-id: MagicZoomPlusImage'+_vars.p_id+';caption-source: a:title;disable-zoom: false;disable-expand: false;" rev="'+_vars.thumbs_url+_vars.p_code+'-3-med.png"><img src="'+_vars.thumbs_url+_vars.p_code+'-3-thumb.png" alt=""></a></li>' : '')+' \
                   '+((_vars.p_code === 'velvetandlinencushioncover') ? '<li><a class="MagicThumb-swap" style="outline: 0px none; display: inline-block;" onclick="MagicToolboxChangeSelector(this);" href="'+_vars.thumbs_url+_vars.p_code+'-4-large.png" rel="zoom-id: MagicZoomPlusImage'+_vars.p_id+';caption-source: a:title;disable-zoom: false;disable-expand: false;" rev="'+_vars.thumbs_url+_vars.p_code+'-4-med.png"><img src="'+_vars.thumbs_url+_vars.p_code+'-4-thumb.png" alt=""></a></li>' : '')+' \
              </ul></div> \
            ');
        }

        // re-initialize zoom
        MagicZoomPlus.refresh();

    }
}

// Run the experiment
productImagesExperiment.run();