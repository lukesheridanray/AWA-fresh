/*
//Use this to grab the meta data
var str = '';
for(var prod in exp.json ) {
    exp.json[prod]['lucky_dip'].forEach(function(prod){
        $.ajax( {
            async: false,
            url: prod.prod_url,
            success: function(resp) {
                var $resp = $(resp);
                var sku = $resp.find('[name="skuCodes"]:eq(0)').val();
                var code = $resp.find('#addToBasket').attr('action').match(/(productCode=)([a-zA-Z0-9]+)/)[2];
                var img = $resp.find('#myZoom img').attr('src');
                str += prod.prod_name + ' ' + img + ' ' + code + ' ' + sku + ' \n';
            },
            error: function() {
                str += prod.prod_name + ' failed \n';
            }
        });
    });
}
$('body').prepend(str);
*/

window.AWA_basket_flow_data = {
    'potatoes': {
        prod_1: [
            {
                prod_name: 'Chempak&reg; Potato Fertiliser',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-potato-fertiliser/zww2588TM',
                prod_image: '/static-images/tandm/qubit/recommendations/CHEM-ZWW2588-A_x.jpg',
                prod_code: 'zww2588TM',
                prod_sku: 'T14173C'
            },
            {
                prod_name: 'Potato Sacks',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/cropping-storing-and-harvesting/potato-sacks/zww2101TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/POTA-ZWW2101-A_x.jpg',
                prod_code: 'zww2101TM',
                prod_sku: 'T13888P'
            }
        ],
        prod_2: [
            {
                prod_name: 'Potato Scrubbing Gloves',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/cropping-storing-and-harvesting/potato-scrubbing-gloves/aww2509TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/POTA-2509-A_x.jpg',
                prod_code: 'aww2509TM',
                prod_sku: 'T13495'
            }
        ],
        prod_3: [],
        lucky_dip: [
        // veg plants
        ]
    },
    'onions_garlic': {
        prod_1: [
            {
                prod_name: 'Onion Bags',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/cropping-storing-and-harvesting/onion-bags/kww2014TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/ONIO-KWW2014-A_x.jpg',
                prod_code: 'kww2014TM',
                prod_sku: 'T13880P'
            }
        ],
        prod_2: [
            {
                prod_name: 'Chempak&reg; Onion Fertiliser',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-onion-fertiliser/zww2586TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/CHEM-ZWW2586-A_x.jpg',
                prod_code: 'zww2586TM',
                prod_sku: 'T14176C'
            }
        ],
        prod_3: [
            {
                prod_name: 'Horticultural Fleece',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/plant-protection-and-support/horticultural-fleece/kww2007TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/HORT-KWW2007-A_x.jpg',
                prod_code: 'kww2007TM',
                prod_sku: 'T18090'
            }
        ],
        lucky_dip: [
        // veg plants
        ]
    },
    'fruit_plants': {
        prod_1: [
            {
                prod_name: 'Chempak&reg; High Potash Feed - Formula 4',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-high-potash-feed-formula-4/kww2324TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/CHEM-KWW2552-A_x.jpg',
                prod_code: 'kww2324TM',
                prod_sku: 'T13839C'
            }
        ],
        prod_2: [
            {
                prod_name: 'Crop Protection Net',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/plant-protection-and-support/crop-protection-net/kww2298TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/CROP-KWW2298-A_x.jpg',
                prod_code: 'kww2298TM',
                prod_sku: 'T14068'
            },
            {
                prod_name: 'Birdscare Humming Line',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/pest-and-disease-control/birdscare-humming-line/kww2438TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/BIRD-KWW2438-A_x.jpg',
                prod_code: 'kww2438TM',
                prod_sku: 'T18107'
            }
        ],
        prod_3: [],
        lucky_dip: [
            {
                prod_name: 'Strawberry Full Season Collection',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/strawberry-plants/strawberry-extend-the-season-collection/cww3188TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8810946166814.jpg',
                prod_code: 'cww3188TM',
                prod_sku: 'T13899P'
            },
            {
                prod_name: 'Blueberry \'Full Season Collection\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/blueberry-plants/blueberry-full-season-collection/cww3308TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8804094443550.jpg',
                prod_code: 'cww3308TM',
                prod_sku: 'T99537P'
            },
            {
                prod_name: 'Strawberry \'Flamenco\' (Everbearer/ All Season)',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/strawberry-plants/strawberry-flamenco/cww3183TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796987818014.jpg',
                prod_code: 'cww3183TM',
                prod_sku: 'T13897P'
            },
            {
                prod_name: 'Strawberry \'Finesse\' (Everbearer/ All Season)',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/strawberry-plants/strawberry-finesse/cww4462TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8802815442974.jpg',
                prod_code: 'cww4462TM',
                prod_sku: 'T14213P'
            },
            {
                prod_name: 'Strawberry \'Mount Everest\' (Everbearer/ All Season)',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/strawberry-plants/strawberry-mount-everest/cww3590TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796988538910.jpg',
                prod_code: 'cww3590TM',
                prod_sku: 'T14241P'
            },
            {
                prod_name: 'Blueberry \'Pinkberry\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/blueberry-plants/blueberry-pinkberry/t14140TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8829736288286.jpg',
                prod_code: 't14140TM',
                prod_sku: 'T14140'
            },
            {
                prod_name: 'Strawberry \'Elsanta\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/strawberry-plants/strawberry-elsanta-mother-plants/t44199TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8827713617950.jpg',
                prod_code: 't44199TM',
                prod_sku: 'T44199P'
            },
            {
                prod_name: 'Blackcurrant \'Ben Connan\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/currant-plants/blackcurrant-ben-connan/cww3190TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796979101726.jpg',
                prod_code: 'cww3190TM',
                prod_sku: 'T14167'
            },
            {
                prod_name: 'Strawberry \'Cambridge Favourite\' (Mid Season)',
                prod_url: ' http://www.thompson-morgan.com/fruit/fruit-plants/strawberry-plants/strawberry-cambridge-favourite/cww3182TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796987752478.jpg',
                prod_code: 'cww3182TM',
                prod_sku: 'T14252P'
            },
            {
                prod_name: 'Blackcurrant \'Ebony\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/currant-plants/blackcurrant-ebony/cww3561TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8829736026142.jpg',
                prod_code: 'cww3561TM',
                prod_sku: 'T14238'
            },
            {
                prod_name: 'Blackcurrant \'Big Ben\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/currant-plants/blackcurrant-big-ben/t46910TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8830089003038.jpg',
                prod_code: 'T46910TM',
                prod_sku: 'T46910'
            },
            {
                prod_name: 'Strawberry \'Alice\' (Mid Season)',
                prod_url: 'http://www.thompson-morgan.com/fruit-plants/strawberry-plants/strawberry-alice/cww3181TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796987686942.jpg',
                prod_code: 'cww3181TM',
                prod_sku: 'T14325P'
            },
            {
                prod_name: 'Blueberry \'Chandler\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/blueberry-plants/blueberry-chandler/cww3179TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796979691550.jpg',
                prod_code: 'cww3179TM',
                prod_sku: 'T13868'
            },
            {
                prod_name: 'Strawberry \'Buddy\' (Everbearer/ All Season)',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/strawberry-plants/strawberry-buddy/t14157TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8819900448798.jpg',
                prod_code: 't14157TM',
                prod_sku: 'T14157P'
            },
            {
                prod_name: 'Strawberry \'Sweetheart\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/strawberry-plants/strawberry-sweetheart/t56485pTM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8866438512670.jpg',
                prod_code: 't56485pTM',
                prod_sku: 'T56485P'
            },
            {
                prod_name: 'Currant Collection',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/currant-plants/currant-collection/cww3358TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796981264414.jpg',
                prod_code: 'cww3358TM',
                prod_sku: 'T99572P'
            },
            {
                prod_name: 'Strawberry \'Florence\' (Late Season)',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/strawberry-plants/strawberry-florence/cww3184TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796987883550.jpg',
                prod_code: 'cww3184TM',
                prod_sku: 'T13898P'
            },
            {
                prod_name: 'Strawberry \'Elsanta\' (Mother Plants)',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/strawberry-plants/strawberry-elsanta-mother-plants/t44306TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8827713617950.jpg',
                prod_code: 't44306TM',
                prod_sku: 'T44307P'
            },
            {
                prod_name: 'Redcurrant \'Rovada\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/currant-plants/redcurrant-rovada/cww3192TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8829736845342.jpg',
                prod_code: 'cww3192TM',
                prod_sku: 'T14172'
            },
            {
                prod_name: 'Blueberry \'Bluecrop\' (Large Plant)',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/blueberry-plants/blueberry-bluecrop-large-plant/t57997TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8873926262814.jpg',
                prod_code: 't57997TM',
                prod_sku: 'T57997'
            },
            {
                prod_name: 'Grape \'Phoenix\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/vines-and-climbing-fruit/grape-phoenix/cww3248TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796982444062.jpg',
                prod_code: 'cww3248TM',
                prod_sku: 'T14280'
            },
            {
                prod_name: 'Blueberry \'Earliblue\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/blueberry-plants/blueberry-earliblue/cww3178TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8829736124446.jpg',
                prod_code: 'cww3178TM',
                prod_sku: 'T14245'
            },
            {
                prod_name: 'Casseille',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/currant-plants/casseille/dww3581TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796980215838.jpg',
                prod_code: 'dww3581TM',
                prod_sku: 'T14237'
            },
            {
                prod_name: 'Grape Collection',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-plants/vines-and-climbing-fruit/grape-collection/cww3249TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796982509598.jpg',
                prod_code: 'cww3249TM',
                prod_sku: 'T46913P'
            }
        ]
    },
    'fruit_trees': {
        prod_1: [
            {
                prod_name: 'Tree Stake &amp; Tie Pack',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/plant-protection-and-support/tree-stake-and-tie-pack/cww3409TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/TREE-CWW3409-A_x.jpg',
                prod_code: 'cww3409TM',
                prod_sku: 'T14281P'
            }
        ],
        prod_2: [
            {
                prod_name: 'Chempak&reg; High Potash Feed - Formula 4',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-high-potash-feed-formula-4/kww2324TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/CHEM-KWW2552-A_x.jpg',
                prod_code: 'kww2324TM',
                prod_sku: 'T13839C'
            },
            {
                prod_name: 'Pruning Saw',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/tools/spear-and-jackson-pruning-saw/kww2594TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/PRUN-KWW2594-A_x.jpg',
                prod_code: 'kww2594TM',
                prod_sku: 'T11551'
            }
        ],
        prod_3: [],
        lucky_dip: [
            {
                prod_name: 'Plum \'Victoria\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/stone-fruit-trees/plum-victoria/cww3217TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796984999966.jpg',
                prod_code: 'cww3217TM',
                prod_sku: 'T14169'
            },
            {
                prod_name: 'Cherry \'Sunburst\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/stone-fruit-trees/cherry-sunburst/cww3402TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8808471363614.jpg',
                prod_code: 'cww3402TM',
                prod_sku: 'T14283'
            },
            {
                prod_name: 'Apple \'Braeburn\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/apple-and-pear-trees/-apple-braeburn/cww3228TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796977725470.jpg',
                prod_code: 'cww3228TM',
                prod_sku: 'T40205'
            },
            {
                prod_name: 'Apple \'Family Apple Tree\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/apple-and-pear-trees/family-apple-tree/dww3680TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8829735862302.jpg',
                prod_code: 'dww3680TM',
                prod_sku: 'T14227'
            },
            {
                prod_name: 'Fig \'Brown Turkey\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/fig-trees/fig-brown-turkey/cww3243TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8799870451742.jpg',
                prod_code: 'cww3243TM',
                prod_sku: 'T14277'
            },
            {
                prod_name: 'Pear \'Family Pear Tree\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/apple-and-pear-trees/family-pear-tree/dww3681TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8798716133406.jpg',
                prod_code: 'dww3681TM',
                prod_sku: 'T14228'
            },
            {
                prod_name: 'Fig \'Brown Turkey\' Standard',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/fig-trees/fig-brown-turkey-standard/dww3594TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8806785155102.jpg',
                prod_code: 'dww3594TM',
                prod_sku: 'T14302'
            },
            {
                prod_name: 'Apple \'Bramley\'s Seedling\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/apple-and-pear-trees/apple-bramleys-seedling/cww3229TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796977791006.jpg',
                prod_code: 'cww3229TM',
                prod_sku: 'T14274'
            },
            {
                prod_name: 'Apple \'Cox\'s Orange Pippin\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/apple-and-pear-trees/apple-coxs-orange-pippin/cww3231TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796977856542.jpg',
                prod_code: 'cww3231TM',
                prod_sku: 'T14275'
            },
            {
                prod_name: 'Apricot \'Flavourcot\'&reg;',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/stone-fruit-trees/apricot-flavourcot/cww3222TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8829735895070.jpg',
                prod_code: 'cww3222TM',
                prod_sku: 'T14246'
            },
            {
                prod_name: 'Cherry \'Stella\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/stone-fruit-trees/cherry-stella/cww3244TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796980281374.jpg',
                prod_code: 'cww3244TM',
                prod_sku: 'T14248'
            },
            {
                prod_name: 'Damson Plum \'Merryweather\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/stone-fruit-trees/damson-merryweather/cww3220TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796981395486.jpg',
                prod_code: 'cww3220TM',
                prod_sku: 'T14273'
            },
            {
                prod_name: 'Apple (Britain\'s Favourites Collection)',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/apple-and-pear-trees/apple-britains-favourites-collection/cww3386TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796977987614.jpg',
                prod_code: 'cww3386TM',
                prod_sku: 'T99578P'
            },
            {
                prod_name: 'Apple and Pear Family Collection',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/apple-and-pear-trees/apple-and-pear-family-collection/dww3682TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8798716231710.jpg',
                prod_code: 'dww3682TM',
                prod_sku: 'T99584P'
            },
            {
                prod_name: 'Pear \'Conference\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/apple-and-pear-trees/pear-conference/cww3239TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796984672286.jpg',
                prod_code: 'cww3239TM',
                prod_sku: 'T14276'
            },
            {
                prod_name: 'Peach \'Avalon Pride\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/stone-fruit-trees/peach-avalon-pride/87129TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796984410142.jpg',
                prod_code: '87129TM',
                prod_sku: 'T14317'
            },
            {
                prod_name: 'Greengage Reine Claude',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/stone-fruit-trees/greengage-fruit/cww3367TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796982640670.jpg',
                prod_code: 'cww3367TM',
                prod_sku: 'T14272'
            },
            {
                prod_name: 'Peach \'Crimson Bonfire&reg;\' (patio)',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/stone-fruit-trees/peach-crimson-bonfire/87129TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8830089756702.jpg',
                prod_code: 'T46915TM',
                prod_sku: 'T46915'
            },
            {
                prod_name: 'Apple \'Egremont Russet\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/apple-and-pear-trees/apple-egremont-russet/dww3640TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796978053150.jpg',
                prod_code: 'dww3640TM',
                prod_sku: 'T14301'
            },
            {
                prod_name: 'Cherry \'Crown Morello\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/stone-fruit-trees/cherry-crown-morello/cww3245TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796980346910.jpg',
                prod_code: 'cww3245TM',
                prod_sku: 'T14278'
            },
            {
                prod_name: 'Pomegranate \'Provence\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/exotic-fruit-trees/pomegranate-provence/t14152TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8819899367454.jpg',
                prod_code: 't14152TM',
                prod_sku: 'T14152'
            },
            {
                prod_name: 'Plum \'Mirabelle de Nancy\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/stone-fruit-trees/plum-mirabelle-de-nancy/dww3679TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796985458718.jpg',
                prod_code: 'dww3679TM',
                prod_sku: 'T14225'
            },
            {
                prod_name: 'Lemon \'Eureka\'',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/citrus-trees/lemon-eureka/cww3360TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796983164958.jpg',
                prod_code: 'cww3360TM',
                prod_sku: 'T14288'
            },
            {
                prod_name: 'Apricot \'Aprigold\'&reg; (patio)',
                prod_url: 'http://www.thompson-morgan.com/fruit/fruit-trees/stone-fruit-trees/apricot-aprigold/t14146TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8829735927838.jpg',
                prod_code: 't14146TM',
                prod_sku: 'T14146'
            }
        ]
    },
    'flower_seeds': {
        prod_1: [
            {
                prod_name: 'Plant Labels',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/seed-sowing-and-propagation/plant-labels/kww2036TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/PLAN-KWW2036-A_x.jpg',
                prod_code: 'kww2036TM',
                prod_sku: 'T14383'
            }
        ],
        prod_2: [
            {
                prod_name: 'Vermiculite - Fine Grade',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/seed-sowing-and-propagation/vermiculite-fine-grade/kww2020TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/VERM-KWW2020-A_x.jpg',
                prod_code: 'kww2020TM',
                prod_sku: 'T13832'
            },
            {
                prod_name: 'Propagator - Electric Windowsill Propagator Super 7',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/seed-sowing-and-propagation/propagator-electric-windowsill-propagator-super-7/kww2058TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/PROP-KWW2058-A_x.jpg',
                prod_code: 'kww2058TM',
                prod_sku: 'T13134'
            }
        ],
        prod_3: [],
        lucky_dip: [
            {
                prod_name: 'Sweet Pea \'Collection\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/hardy-annual-seeds/sweet-pea-collection/t56301pTM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8866226044958.jpg',
                prod_code: 'T56301PTM',
                prod_sku: 'T56301P'
            },
            {
                prod_name: 'Nasturtium \'Phoenix\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/nasturtium-seeds/nasturtium-minor-phoenix/tt48052TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8864769310750.jpg',
                prod_code: 'TT48052TM',
                prod_sku: 'TT48052'
            },
            {
                prod_name: 'Begonia \'Apricot Shades\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/half-hardy-annual-seeds/begonia-x-tuberhybrida-illumination-apricot-shades-f1-hybrid/4500TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796472737822.jpg',
                prod_code: '4500TM',
                prod_sku: 'TM04500'
            },
            {
                prod_name: 'Busy Lizzie \'Divine Mixed\' (New Guinea)',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/busy-lizzie-plants/busy-lizzie-divine/p94608TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8895465455646.jpg',
                prod_code: 'p94608TM',
                prod_sku: 'T12809'
            },
            {
                prod_name: 'Bacopa (Duo)',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/half-hardy-annual-seeds/bacopa-duo/4696TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796467036190.jpg',
                prod_code: '4696TM',
                prod_sku: 'T99504P'
            },
            {
                prod_name: 'Rudbeckia hirta \'Cherry Brandy\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/hardy-annual-seeds/rudbeckia-hirta-cherry-brandy/5318TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8822021521438.jpg',
                prod_code: '5318TM',
                prod_sku: 'TT05318'
            },
            {
                prod_name: 'Cosmos sulphureus \'Brightness Mixed\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/cosmos-seeds/cosmos-sulphureus-brightness-mixed/8373TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8843118837790.jpg',
                prod_code: '8373TM',
                prod_sku: 'TT08373'
            },
            {
                prod_name: 'Begonia x tuberhybrida \'Non-Stop&reg; Mixed\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/half-hardy-annual-seeds/begonia-x-tuberhybrida-non-stop-mixed-f1/2309TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796472410142.jpg',
                prod_code: '2309TM',
                prod_sku: 'TM02309'
            },
            {
                prod_name: 'Sweet Pea \'King Size Navy Blue\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/sweet-pea-seeds/lathyrus-odoratus-king-size-navy-blue/2053TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796573007902.jpg',
                prod_code: '2053TM',
                prod_sku: 'TM02053'
            },
            {
                prod_name: 'Sweet Pea \'Fragrantissima\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/sweet-pea-seeds/lathyrus-odoratus-fragrantissima/6489TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8883880689694.jpg',
                prod_code: '6489TM',
                prod_sku: 'TT06489'
            },
            {
                prod_name: 'Marigold \'Durango Collection\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/marigold-seeds/marigold-durango-collection/4632TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8799363694622.jpg',
                prod_code: '4632TM',
                prod_sku: 'T99522P'
            },
            {
                prod_name: 'Antirrhinum majus \'Royal Bride\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/half-hardy-annual-seeds/antirrhinum-majus-royal-bride/6884TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796462514206.jpg',
                prod_code: '6884TM',
                prod_sku: 'TT06884'
            },
            {
                prod_name: 'Cornflower \'Blue Diadem\'',
                prod_url: 'http://www.thompson-morgan.com/flower-seeds/hardy-annual-seeds/cornflower-blue-diadem/1396TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796485451806.jpg',
                prod_code: '1396TM',
                prod_sku: 'TT01396'
            },
            {
                prod_name: 'Nasturtium \'Firebird\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/nasturtium-seeds/nasturtium-firebird/tt03599TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8830009540638.jpg',
                prod_code: 'tt03599TM',
                prod_sku: 'TT03599'
            },
            {
                prod_name: 'Aster \'Milady Mixed\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/half-hardy-annual-seeds/aster-chinensis-milady-mixed/1447TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796464939038.jpg',
                prod_code: '1447TM',
                prod_sku: 'TT01447'
            },
            {
                prod_name: 'Sunflower \'Helios Flame\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/sunflower-seeds/sunflower-helios-flame/tt52669TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8864769572894.jpg',
                prod_code: 'TT52669TM',
                prod_sku: 'TT52669'
            },
            {
                prod_name: 'Silene laciniata \'Jack Flash\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/perennial-and-biennial-seeds/silene-laciniata-jack-flash/3283TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8850421284894.jpg',
                prod_code: '3283TM',
                prod_sku: 'TT03283'
            },
            {
                prod_name: 'Antirrhinum majus \'Circus Clowns\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/half-hardy-annual-seeds/antirrhinum-circus-clowns/tm52049TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8864768196638.jpg',
                prod_code: 'TM52049TM',
                prod_sku: 'TM52049'
            },
            {
                prod_name: 'Cosmos bipinnatus \'Gazebo Mixed\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/cosmos-seeds/cosmos-bipinnatus-gazebo-mixed/2026TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796489711646.jpg',
                prod_code: '2026TM',
                prod_sku: 'TT02026'
            },
            {
                prod_name: 'Lobelia pendula \'Monsoon\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/half-hardy-annual-seeds/lobelia-pendula-monsoon/tp03820TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8883942162462.jpg',
                prod_code: 'tp03820TM',
                prod_sku: 'TP03820'
            }
        ]
    },
    'vegetable_seeds': {
        prod_1: [
            {
                prod_name: 'Module Trays',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/seed-sowing-and-propagation/module-trays/p89640TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/MODU-P89640-A_x.jpg',
                prod_code: 'p89640TM',
                prod_sku: 'T45103P'
            }
        ],
        prod_2: [
            {
                prod_name: 'Plant Labels',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/seed-sowing-and-propagation/plant-labels/kww2036TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/PLAN-KWW2036-A_x.jpg',
                prod_code: 'kww2036TM',
                prod_sku: 'T14383'
            },
            {
                prod_name: 'Windowsill Planter',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/baskets-and-containers/windowsill-salad-herb-planter/aww2512TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/WIND-AWW2512-A_x.jpg',
                prod_code: 'aww2512TM',
                prod_sku: 'T13904'
            }
        ],
        prod_3: [],
        lucky_dip: [
            {
                prod_name: 'Beetroot \'Boltardy\' (Globe)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/beetroot-and-chard-seeds/beetroot-boltardy-globe/288TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8829724622878.jpg',
                prod_code: '288TM',
                prod_sku: 'TT00288'
            },
            {
                prod_name: 'Tomato \'Sungold\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/tomato-seeds/tomato-sungold-f1/840TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796578643998.jpg',
                prod_code: '840TM',
                prod_sku: 'TT00840'
            },
            {
                prod_name: 'Climbing Bean \'Cobra\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/pea-and-bean-seeds/climbing-bean-cobra/843TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8883879542814.jpg',
                prod_code: '843TM',
                prod_sku: 'TR00843'
            },
            {
                prod_name: 'Carrot \'Flyaway\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/carrot-and-parsnip-seeds/carrot-flyaway-f1/966TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796482699294.jpg',
                prod_code: '966TM',
                prod_sku: 'TT00966'
            },
            {
                prod_name: 'Spring Onion \'White Lisbon\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/onion-and-leek-seeds/bunching-spring-onion-white-lisbon/528TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796541550622.jpg',
                prod_code: '528TM',
                prod_sku: 'TT00528'
            },
            {
                prod_name: 'Tomato \'Sweet Aperitif\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/tomato-seeds/tomato-sweet-aperitif/tt38816TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8873727229982.jpg',
                prod_code: 'tt38816TM',
                prod_sku: 'TT38816'
            },
            {
                prod_name: 'Squash \'Harrier\' F1 Hybrid (Winter)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/pumpkin-squash-and-courgette-seeds/squash-harrier-f1-hybrid-winter/76TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8850421317662.jpg',
                prod_code: '76TM',
                prod_sku: 'TT00076'
            },
            {
                prod_name: 'Runner Bean \'Firestorm\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/pea-and-bean-seeds/runner-bean-firestorm/tm01135TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8821287092254.jpg',
                prod_code: 'tm01135TM',
                prod_sku: 'TM01135'
            },
            {
                prod_name: 'Courgette \'Defender\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/pumpkin-squash-and-courgette-seeds/courgette-defender-f1-hybrid/432TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796491874334.jpg',
                prod_code: '432TM',
                prod_sku: 'TT00432'
            },
            {
                prod_name: 'Sweetcorn \'Lark\' F1 Hybrid (Tendersweet)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/all-other-vegetable-seeds/sweetcorn-lark-f1-hybrid/708TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8850421350430.jpg',
                prod_code: '708TM',
                prod_sku: 'TR00708'
            },
            {
                prod_name: 'Leek \'Musselburgh\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/onion-and-leek-seeds/leek-musselburgh/640TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796525232158.jpg',
                prod_code: '640TM',
                prod_sku: 'TT00640'
            },
            {
                prod_name: 'Parsnip \'Tender and True\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/carrot-and-parsnip-seeds/parsnip-tender-and-true/664TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796546596894.jpg',
                prod_code: '664TM',
                prod_sku: 'TT00664'
            },
            {
                prod_name: 'Courgette \'Black Forest\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/pumpkin-squash-and-courgette-seeds/courgette-black-forest-f1-hybrid/783TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796492070942.jpg',
                prod_code: '783TM',
                prod_sku: 'TM00783'
            },
            {
                prod_name: 'Parsnip \'Gladiator\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/carrot-and-parsnip-seeds/parsnip-gladiator-f1/706TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796546662430.jpg',
                prod_code: '706TM',
                prod_sku: 'TT00706'
            },
            {
                prod_name: 'Pea \'Rondo\' (Maincrop)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/pea-and-bean-seeds/pea-rondo/103TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796548628510.jpg',
                prod_code: '103TM',
                prod_sku: 'TT00103'
            },
            {
                prod_name: 'Brussels Sprout \'Trafalgar\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/brassica-and-leafy-green-seeds/brussels-sprout-trafalgar-f1/171TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796475949086.jpg',
                prod_code: '171TM',
                prod_sku: 'TT00171'
            },
            {
                prod_name: 'Swiss Chard \'Bright Lights\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/beetroot-and-chard-seeds/leaf-beet-bright-lights/45TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796486500382.jpg',
                prod_code: '45TM',
                prod_sku: 'TT00045'
            },
            {
                prod_name: 'Tomato \'Ferline\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/tomato-seeds/tomato-ferline-f1-hybrid/899TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796176580638.jpg',
                prod_code: '899TM',
                prod_sku: 'TT00899'
            },
            {
                prod_name: 'Runner Bean \'Snowstorm\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/pea-and-bean-seeds/runner-bean-snowstorm/tm01136TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8821287157790.jpg',
                prod_code: 'tm01136TM',
                prod_sku: 'TM01136'
            },
            {
                prod_name: 'Tomato \'Gardener\'s Delight\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/tomato-seeds/tomato-gardeners-delight/277TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796576677918.jpg',
                prod_code: '277TM',
                prod_sku: 'TT00277'
            },
            {
                prod_name: 'Pea \'Hurst Green Shaft\' (Second Early)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/pea-and-bean-seeds/pea-hurst-green-shaft/113TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8829725311006.jpg',
                prod_code: '113TM',
                prod_sku: 'TT00113'
            },
            {
                prod_name: 'Runner Bean \'White Lady\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/pea-and-bean-seeds/runner-bean-white-lady/231TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796562915358.jpg',
                prod_code: '231TM',
                prod_sku: 'TT00231'
            },
            {
                prod_name: 'Broad Bean \'Aquadulce Claudia\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/pea-and-bean-seeds/broad-bean-aquadulce-claudia/138TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796468215838.jpg',
                prod_code: '138TM',
                prod_sku: 'TT00138'
            },
            {
                prod_name: 'Broad Bean \'De Monica\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/pea-and-bean-seeds/broad-bean-de-monica/gww4942TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8810035183646.jpg',
                prod_code: 'gww4942TM',
                prod_sku: 'TM04942'
            },
            {
                prod_name: 'Carrot \'Kelly\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/carrot-and-parsnip-seeds/carrot-kelly/tt52079TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8866223128606.jpg',
                prod_code: 'TT52079TM',
                prod_sku: 'TT52079'
            },
            {
                prod_name: 'Spinach \'Perpetual\' (Spinach Beet)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/brassica-and-leafy-green-seeds/spinach-perpetual-spinach-beet/697TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796552757278.jpg',
                prod_code: '697TM',
                prod_sku: 'TT00697'
            }
        ]
    },
    'flower_plants': {
        prod_1: [
            {
                prod_name: 'Incredibloom&reg;',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-incredibloom/t47963TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/INCR-T47963-A_x.jpg',
                prod_code: 't47963TM',
                prod_sku: 'T47963P'
            }
        ],
        prod_2: [
            {
                prod_name: 'Tower Pot',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/plant-protection-and-support/tower-pot/t47569TM',
                prod_image: 'http://search.thompson-morgan.com/thumb.php?f=http%3a%2f%2fwww.tandmpics.com%2fpictures%2ftmuk%2f_l%2ftowe-t47569-a_l.jpg&s=180',
                prod_code: 't47569TM',
                prod_sku: 'T47569P'
            },
            {
                prod_name: 'Easy Fill Hanging Basket',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/baskets-and-containers/easy-fill-basket/t47549TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/EASY-T47549-A_x.jpg',
                prod_code: 't47549TM',
                prod_sku: 'T47549P'
            },
            {
                prod_name: 'Organic, Pet Friendly Super Slug Killer',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/pest-and-disease-control/super-slug-killer/t46413TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/SUPE-T46413-A_x.jpg',
                prod_code: 't46413TM',
                prod_sku: 'T52539'
            }
        ],
        prod_3: [],
        lucky_dip: [
            {
                prod_name: 'Begonia \'Apricot Shades\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/half-hardy-annual-seeds/begonia-x-tuberhybrida-illumination-apricot-shades-f1-hybrid/4500TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796472737822.jpg',
                prod_code: '4500TM',
                prod_sku: 'TM04500'
            },
            {
                prod_name: 'Busy Lizzie \'Divine Mixed\' (New Guinea)',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/busy-lizzie-plants/busy-lizzie-divine/p94608TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8895465455646.jpg',
                prod_code: 'p94608TM',
                prod_sku: 'T12809'
            },
            {
                prod_name: 'Begonia semperflorens \'Organdy Mixed\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/begonia-plants/begonia-tms-choice/t47463TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8843117625374.jpg',
                prod_code: 't47463TM',
                prod_sku: 'T12984'
            },
            {
                prod_name: 'Geranium \'Appleblossom Rosebud\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/geranium-and-pelargonium-plants/geranium-appleblossom-rosebud/t17214TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8869925355550.jpg',
                prod_code: 't17214TM',
                prod_sku: 'T57526'
            },
            {
                prod_name: 'Petunia \'Trailing Surfinia Mixed\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/petunia-plants/petunia-trailing-surfinia-mixed/p95805TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8873724510238.jpg',
                prod_code: 'p95805TM',
                prod_sku: 'T47615'
            },
            {
                prod_name: 'Geranium \'Jackpot Mixed\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/perennial-and-biennial-plants/geranium-f1-tms-choice/t47453TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8843120148510.jpg',
                prod_code: 't47453TM',
                prod_sku: 'T47453'
            },
            {
                prod_name: 'Fuchsia \'Pink Fizz\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/fuchsia-plants/fuchsia-pink-fizz/t57099TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8869937315870.jpg',
                prod_code: 't57099TM',
                prod_sku: 'T57100'
            },
            {
                prod_name: 'Fuchsia \'Giants Collection\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/fuchsia-plants/fuchsia-giants-collection-a/p89468TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8874436231198.jpg',
                prod_code: 'p89468TM',
                prod_sku: 'T12936'
            },
            {
                prod_name: 'Petunia \'Frills & Spills\'&trade; Mixed',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/petunia-plants/petunia-alans-frills-and-spills-collection/p95747TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8873724477470.jpg',
                prod_code: 'p95747TM',
                prod_sku: 'T57638'
            },
            {
                prod_name: 'Begonia semperflorens \'Lotto Mixed\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/begonia-plants/begonia-semperflorens-lotto-mixed/p83708TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8873616703518.jpg',
                prod_code: 'p83708TM',
                prod_sku: 'T47403'
            },
            {
                prod_name: 'Antirrhinum majus \'Madame Butterfly\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/annual-plants/antirrhinum-madame-butterfly-f1/p1121TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8883940524062.jpg',
                prod_code: 'p1121TM',
                prod_sku: 'T12976'
            },
            {
                prod_name: 'Petunia \'Peach Sundae\'',
                prod_url: 'http://www.thompson-morgan.com/vip/petunia-peach-sundae/tj57105TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8885948284958.jpg',
                prod_code: 'tj57105TM',
                prod_sku: 'TJ57105'
            },
            {
                prod_name: 'Petunia \'Damson Ripple\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/petunia-plants/petunia-damson-ripple/t57193TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8873724936222.jpg',
                prod_code: 't57193TM',
                prod_sku: 'T57193'
            },
            {
                prod_name: 'Geranium \'Rosebud Collection\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flowers-plants/geranium-and-pelargonium-plants/geranium-alans-rosebud-collection/p95741TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8883880198174.jpg',
                prod_code: 'p95741TM',
                prod_sku: 'T12643P'
            },
            {
                prod_name: 'Bacopa (Duo)',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/half-hardy-annual-seeds/bacopa-duo/4696TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796467036190.jpg',
                prod_code: '4696TM',
                prod_sku: 'T99504P'
            },
            {
                prod_name: 'Perennial  \'Best Value\' Collection',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/perennial-and-biennial-plants/perennial-best-value-collection/t47606TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8870175277086.jpg',
                prod_code: 't47606TM',
                prod_sku: 'T47606'
            },
            {
                prod_name: 'Petunia \'Orchid-Flowered Mixed\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/petunia-plants/petunia-orchid-flowered-mixed-f1/p4868TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8821052932126.jpg',
                prod_code: 'p4868TM',
                prod_sku: 'T12892'
            },
            {
                prod_name: 'Fuchsia \'Bella Collection\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-plants/fuchsia-plants/fuchsia-bella-collection/t57137TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8874956488734.jpg',
                prod_code: 't57137TM',
                prod_sku: 'T57137'
            }
        ]
    },
    'flower_bulbs': {
        prod_1: [
            {
                prod_name: 'Incredibloom&reg;',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-incredibloom/t47963TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/INCR-T47963-A_x.jpg',
                prod_code: 't47963TM',
                prod_sku: 'T47963P'
            }
        ],
        prod_2: [
            {
                prod_name: 'Easy Fill Hanging Basket',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/baskets-and-containers/easy-fill-basket/t47549TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/EASY-T47549-A_x.jpg',
                prod_code: 't47549TM',
                prod_sku: 'T47549P'
            },
            {
                prod_name: 'Organic, Pet Friendly Super Slug Killer',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/pest-and-disease-control/super-slug-killer/t46413TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/SUPE-T46413-A_x.jpg',
                prod_code: 't46413TM',
                prod_sku: 'T52539'
            }
        ],
        prod_3: [],
        lucky_dip: [
            {
                prod_name: 'Tree Lily&reg; Collection',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs-and-tubers/lily-bulbs/tree-lily-collection/p92145TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8875819991070.jpg',
                prod_code: 'p92145TM',
                prod_sku: 'T12251P'
            },
            {
                prod_name: 'Begonia x tuberhybrida \'Bumper Pack\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs-and-tubers/begonia-tubers/begonia-tuberhybrida-bumper-pack/p9748TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8883879772190.jpg',
                prod_code: 'p9748TM',
                prod_sku: 'T10822P'
            },
            {
                prod_name: 'Lily \'T&amp;M Bouquet Collection\'',
                prod_url: 'http://www.thompson-morgan.com/vip/default-incentives/lily-tandm-bouquet-collection/tz57111pTM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8873723658270.jpg',
                prod_code: 'tz57111pTM',
                prod_sku: 'TZ57111P'
            },
            {
                prod_name: 'Begonia \'Apricot Shades\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-seeds/half-hardy-annual-seeds/begonia-x-tuberhybrida-illumination-apricot-shades-f1-hybrid/4500TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796472737822.jpg',
                prod_code: '4500TM',
                prod_sku: 'TM04500'
            },
            {
                prod_name: 'Lily \'Black Jewel\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs/lily-bulbs/lily-black-jewel/t46421TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8828676800542.jpg',
                prod_code: 't46421TM',
                prod_sku: 'T45420'
            },
            {
                prod_name: 'Lily \'China Girl\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs/lily-bulbs/lily-china-girl/t16271TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8820329185310.jpg',
                prod_code: 't16271TM',
                prod_sku: 'T16271'
            },
            {
                prod_name: 'Freesia \'Patio Perfection\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs/other-flower-bulbs-and-tubers/freesia-patio-perfection/t47359TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8843119362078.jpg',
                prod_code: 't47359TM',
                prod_sku: 'T47359'
            },
            {
                prod_name: 'Polianthes tuberosa',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs-and-tubers/other-flower-bulbs-and-tubers/polianthes-tuberosa-the-pearl/p8521TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8823950213150.jpg',
                prod_code: 'p8521TM',
                prod_sku: 'T12452'
            },
            {
                prod_name: 'Dahlia \'Pompone Mixed\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs/dahlia-tubers/dahlia-pompone-mixed/t41861TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8843118968862.jpg',
                prod_code: 't41861TM',
                prod_sku: 'T47545'
            },
            {
                prod_name: 'Lily \'Disco\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs/lily-bulbs/lily-disco/t47334TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8843121360926.jpg',
                prod_code: 't47334TM',
                prod_sku: 'T47333'
            },
            {
                prod_name: 'Gladiolus murielae',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs/other-flower-bulbs-and-tubers/gladiolus-murielae/p7477TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8812687065118.jpg',
                prod_code: 'p7477TM',
                prod_sku: 'T12439'
            },
            {
                prod_name: 'Lily \'Dazzler\' (Ground Cover)',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs-and-tubers/lily-bulbs/ground-cover-lily-dazzler/p90807TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8805540134942.jpg',
                prod_code: 'p90807TM',
                prod_sku: 'T1013'
            },
            {
                prod_name: 'Hymenocallis x festalis \'Zwanenburg\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs/other-flower-bulbs-and-tubers/hymenocallis-x-festalis-zwanenburg/t47579TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8843121197086.jpg',
                prod_code: 't47579TM',
                prod_sku: 'T47579'
            },
            {
                prod_name: 'Perfect Partners Bulb Collection',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs/tulip-bulbs/perfect-partners-bulb-collection/t55729bTM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8860405334046.jpg',
                prod_code: 't55729bTM',
                prod_sku: 'T55729B'
            },
            {
                prod_name: 'Narcissus \'Tete-a-Tete\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs/daffodil-bulbs/narcissus-tete-a-tete/t46039TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8828624371742.jpg',
                prod_code: 't46039TM',
                prod_sku: 'T46039B'
            },
            {
                prod_name: 'Allium \'Big Impact Mixed\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs-and-tubers/allium-bulbs/alliums-big-impact-mixed/p93181TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8871818461214.jpg',
                prod_code: 'p93181TM',
                prod_sku: 'T45512B'
            },
            {
                prod_name: 'Crocus \'Bicolour Collection\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs/crocus-bulbs/crocus-bicolour-collection/t45526aTM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8828176957470.jpg',
                prod_code: 't45526aTM',
                prod_sku: 'T45526B'
            },
            {
                prod_name: 'Lily \'Colour Carpet&trade; Glimmer\'',
                prod_url: 'http://www.thompson-morgan.com/flowers/flower-bulbs-and-tubers/lily-bulbs/lily-colour-carpet-glimmer/p91802TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8802582134814.jpg',
                prod_code: 'p91802TM',
                prod_sku: 'T10136'
            }
        ]
    },
    'vegetable_plants': {
        prod_1: [
            {
                prod_name: 'Chempak&reg; Vegetable Fertiliser',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-vegetable-fertiliser/t11912TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/CHEM-T11912-A_x.jpg',
                prod_code: 't11912TM',
                prod_sku: 'T14376C'
            }
        ],
        prod_2: [
            {
                prod_name: 'Mini Greenhouse Cloche',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/greenhouses-and-equipment/mini-greenhouse-cloche/aww2605TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/GREE-AWW2605-A_x.jpg',
                prod_code: 'aww2605TM',
                prod_sku: 'T13042P'
            },
            {
                prod_name: 'Organic, Pet Friendly Super Slug Killer',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/pest-and-disease-control/super-slug-killer/t46413TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/SUPE-T46413-A_x.jpg',
                prod_code: 't46413TM',
                prod_sku: 'T52539'
            }
        ],
        prod_3: [],
        lucky_dip: [
            {
                prod_name: 'Potato \'Jazzy\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/potatoes/second-early/potato-jazzy/t56501TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8866437922846.jpg',
                prod_code: 't56501TM',
                prod_sku: 'T57616P'
            },
            {
                prod_name: 'Potato \'Charlotte\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/potatoes/second-early/potato-charlotte/zww5018TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8811135565854.jpg',
                prod_code: 'zww5018TM',
                prod_sku: 'T14069'
            },
            {
                prod_name: 'Potato \'Sarpo Mira\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/potatoes/maincrop/potato-sarpo-mira/zww5119TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8814018494494.jpg',
                prod_code: 'zww5119TM',
                prod_sku: 'T14052'
            },
            {
                prod_name: 'TomTato',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-plants/all-vegetable-plants/tomtato/t47176TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8830534189086.jpg',
                prod_code: 't47176TM',
                prod_sku: 'T57484'
            },
            {
                prod_name: 'Potato \'Rocket\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/potatoes/first-early/potato-rocket/zww5094TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8811243634718.jpg',
                prod_code: 'zww5094TM',
                prod_sku: 'T14042'
            },
            {
                prod_name: 'Onion \'Red Baron\' (Spring Planting)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/all-other-vegetables/onion-shallot-and-garlic-sets/onion-red-baron/aww4000TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8817285660702.jpg',
                prod_code: 'aww4000TM',
                prod_sku: 'T46529C'
            },
            {
                prod_name: 'Potato \'Abbot\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/potatoes/first-early/potato-abbott/t56497TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8866437857310.jpg',
                prod_code: 't56497TM',
                prod_sku: 'T56497'
            },
            {
                prod_name: 'Tomato \'Sweet Aperitif\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-plants/tomato-sweet-aperitif/t17053TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8873727229982.jpg',
                prod_code: 't17053TM',
                prod_sku: 'T17053'
            },
            {
                prod_name: 'Potato \'Desiree\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/potatoes/maincrop/potato-desiree/zww5037TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8811248287774.jpg',
                prod_code: 'zww5037TM',
                prod_sku: 'T14026'
            },
            {
                prod_name: 'Onion \'Electric\' (Autumn Planting)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/all-other-vegetables/onion-shallot-and-garlic-sets/onion-electric/aww4100TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8798333239326.jpg',
                prod_code: 'aww4100TM',
                prod_sku: 'T46560'
            },
            {
                prod_name: 'Potato \'Pink Fir Apple\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/potatoes/maincrop/potato-pink-fir-apple/zww5011TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796302049310.jpg',
                prod_code: 'zww5011TM',
                prod_sku: 'T14080'
            },
            {
                prod_name: 'Potato \'Cara\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/potatoes/maincrop/potato-cara/zww5052TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8818222268446.jpg',
                prod_code: 'zww5052TM',
                prod_sku: 'T14027'
            },
            {
                prod_name: 'Potato \'Lady Christl\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/potatoes/first-early/potato-lady-christl/zww5085TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796304080926.jpg',
                prod_code: 'zww5085TM',
                prod_sku: 'T14050'
            },
            {
                prod_name: 'Onion \'Hercules\' (Spring Planting)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/all-other-vegetables/onion-shallot-and-garlic-sets/onion-hercules/zww4002TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796173565982.jpg',
                prod_code: 'zww4002TM',
                prod_sku: 'T46362'
            },
            {
                prod_name: 'Potato \'Setanta\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/potatoes/maincrop/potato-setanta/t14625TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8819899400222.jpg',
                prod_code: 't14625TM',
                prod_sku: 'T14625'
            },
            {
                prod_name: 'Onion Mixed Red,White & Brown (Autumn Planting)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/all-other-vegetables/onion-shallot-and-garlic-sets/onion-mixed-red-white-and-brown-autumn-planting/aww4059TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796172845086.jpg',
                prod_code: 'aww4010TM',
                prod_sku: 'T46528'
            },
            {
                prod_name: 'Garlic \'Wight Cristo\' (Autumn Planting)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/all-other-vegetables/onion-shallot-and-garlic-sets/garlic-wight-cristo-autumn-planting/aww4040TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796171272222.jpg',
                prod_code: 'aww4040TM',
                prod_sku: 'T14198'
            },
            {
                prod_name: 'Garlic \'Solent Wight\' (Autumn Planting)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/all-other-vegetables/onion-shallot-and-garlic-sets/garlic-solent-wight/t14539TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8819053199390.jpg',
                prod_code: 't14539TM',
                prod_sku: 'T14539'
            },
            {
                prod_name: 'Onion \'Hylander\' F1 Hybrid (Spring Planting)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/all-other-vegetables/onion-shallot-and-garlic-sets/onion-hylander-spring-planting/t56504TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8866437726238.jpg',
                prod_code: 't56504TM',
                prod_sku: 'T56504'
            },
            {
                prod_name: 'Garlic \'Lautrec Wight\' (Autumn Planting)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/all-other-vegetables/onion-shallot-and-garlic-sets/garlic-lautrec-wight/aww4066TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796171403294.jpg',
                prod_code: 'aww4066TM',
                prod_sku: 'T14203'
            },
            {
                prod_name: 'Shallot \'Longor\' (Spring planting)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/all-other-vegetables/onion-shallot-and-garlic-sets/shallot-french-longor/zww4027TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796307357726.jpg',
                prod_code: 'zww4027TM',
                prod_sku: 'T40103'
            },
            {
                prod_name: 'Tomato \'Sungold\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-plants/all-vegetable-plants/tomato-sungold/a3006TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8892251209758.jpg',
                prod_code: 'a3006TM',
                prod_sku: 'T17040'
            },
            {
                prod_name: 'Cucumber \'Cucino\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/salad-seeds/cucumber-cucino-f1-hybrid/355TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796493250590.jpg',
                prod_code: '355TM',
                prod_sku: 'TT00355'
            },
            {
                prod_name: 'New Zealand Yam',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-plants/all-vegetable-plants/oca/aww4736TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8813445611550.jpg',
                prod_code: 'aww4736TM',
                prod_sku: 'T15092'
            },
            {
                prod_name: 'Broccoli \'Red Arrow\' (Purple Sprouting)',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-plants/all-vegetable-plants/broccoli-purple-sprouting-red-arrow/t46855TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8830089199646.jpg',
                prod_code: 't46855TM',
                prod_sku: 'T46855P'
            },
            {
                prod_name: 'Leek \'Full Season Collection\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-plants/all-vegetable-plants/leek-full-season-collection/t57574pTM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8873723625502.jpg',
                prod_code: 't57574pTM',
                prod_sku: 'T57574P'
            },
            {
                prod_name: 'Courgette \'Defender\' F1 Hybrid',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/pumpkin-squash-and-courgette-seeds/courgette-defender-f1-hybrid/432TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796491874334.jpg',
                prod_code: '432TM',
                prod_sku: 'TT00432'
            },
            {
                prod_name: 'Leek \'Blauwgroene Winter - Bandit\'',
                prod_url: 'http://www.thompson-morgan.com/vegetables/vegetable-seeds/onion-and-leek-seeds/leek-blauwgroene-winter-bandit/46TM',
                prod_image: 'http://media.thompson-morgan.com/medias/sys_tandm/8796525035550.jpg',
                prod_code: '46TM',
                prod_sku: 'TT00046'
            }
        ]
    },
    'tomato': {
        prod_1: [
            {
                prod_name: 'Chempak&reg; Soluble Tomato Food',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-soluble-tomato-food/kww2558TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/CHEM-KWW2558-A_x.jpg',
                prod_code: 'kww2558TM',
                prod_sku: 'T47553X'
            }
        ],
        prod_2: [
            {
                prod_name: 'Tomato Auto-Waterer',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/watering-and-irrigation/tomato-auto-waterer/p92320TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/TOMA-P92320-A_x.jpg',
                prod_code: 'p92320TM',
                prod_sku: 'T13053P'
            },
            {
                prod_name: 'Patio Vegetable Planters',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/baskets-and-containers/patio-vegetable-planters/kww2443TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/PATI-KWW2443-A_x.jpg',
                prod_code: 'kww2443TM',
                prod_sku: 'T14070'
            }
        ],
        prod_3: [],
        lucky_dip: [
        // veg plants
        ]
    }
};