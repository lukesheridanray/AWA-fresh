window.optimizely = window.optimizely || [];

if ( window.optimizely.data.visitor.dimensions[1915070542] !== 'seen' ) {

    console.log('about to bucket user');

    // add visitor to dimension
    window.optimizely.push(['setDimensionValue', 1915070542, 'seen']);

    // bucket the user to the original
    window.optimizely.push(['bucketVisitor', 1931610162, 1897410324]);

    // activate experiment
    window.optimizely.push(['activate', 1931610162]);

} else {

    console.log('user has been bucketed already');

    // activate experiment
    window.optimizely.push(['activate', 1931610162]);

}