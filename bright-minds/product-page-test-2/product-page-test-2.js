//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Define safe console log function
exp.log = function (str) {
    if (typeof window.console !== 'undefined') {
        console.log(str);
    }
};

// Log the experiment, useful when multiple experiments are running
exp.log('Bright Minds: Product Page Test 2 v0.3');

// // Condition
// // If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
// exp.condition = $('#product');

// // Check for a condition and return false if it has not been met
// if(exp.condition && !exp.condition.length) {
//     exp.log('Experiment failed a condition');
//     return false;
// }

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {

    // Complete benefit box and copy
    benefit_content: '<div class="exp-box exp-box-benefit"> <img src="http://www.brightminds.co.uk/rte_img_standard_8.jpg" alt="" /> <h3>Alison Quill, ex-teacher and founder of BrightMinds says &hellip;</h3> <blockquote> <p>I personally handpick and test each innovative product. They all must:</p> </blockquote> <ul><li>Stimulate learning through play &ndash; the best learning environment.</li><li>Encourage a child&rsquo;s (or adult&rsquo;s) individual interests.</li><li>Feed creativity, imagination and curiosity.</li><li>Hold interest longer than generic high street toys.</li><li>Be more personal and individual than the latest toy craze.</li><li>BE FUN!</li></ul> </div>',

    // Delivery information for product pages (variations 0 and 1)
    delivery_info: [
        '<h2>Delivery &amp; Returns</h2> <img src="//cdn.optimizely.com/img/174847139/9eaaadf2dedb4d4785ecddfad85006fc.png" alt="" class="exp-delivery-image" /> <p>We can deliver anywhere in the world, and offer a generous 90 days returns policy.</p> <table class="exp-delivery-info"> <tr> <th>UK Mainland</th> <th>Time</th> <th>Delivery Charge</th> </tr> <tr> <td>Standard Delivery</td> <td>5-7 working days</td> <td>£4.95</td> </tr> <tr> <td>48 Hours Delivery</td> <td>2 working days</td> <td>£7.95</td> </tr> <tr> <td>24 Hours Delivery</td> <td>Next working day</td> <td>£9.95</td> </tr> </table> <ul> <li>48 Hours and 24 Hours Delivery are only available on items marked &lsquo;In-Stock&rsquo;.</li> <li>Please order before 12noon for 24 Hour Delivery and before 12noon for 48 Hours Delivery.</li> <li>48 Hour &amp; 24 Hour Delivery: Items in your order shown as In Stock will be shipped immediately. Other items will be sent in a single, separate shipment as soon as new stock arrives. We will let you know by email.</li> </ul> <p>Standard Delivery:  If your order includes any goods which are currently not in stock, we will hold your order for up to 5 working days so that you receive your complete order in one shipment. If, after that time, some items are still out of stock we will dispatch part of your order and send the remaining items as soon as we receive them.  We will let you know by email.</p> <p>Personalised items will follow 7-10 days following your order.  Please choose Standard Delivery for personalised items.</p> <p>If we send your order in part-shipments, there will be no extra charge to you after your first delivery.</p> <h3>UK Offshore, overseas and BFPO</h3> <p>We can deliver anywhere in the world. Your delivery charge will be calculated at the checkout and clearly shown before you pay.  Delivery times vary depending on weight and destination.</p> <p><strong>For full information please see our <a href="/delivery-information/i5">Delivery information</a> page.</strong></p>',
        '<h2>Delivery &amp; Returns</h2> <img src="//cdn.optimizely.com/img/174847139/9eaaadf2dedb4d4785ecddfad85006fc.png" alt="" class="exp-delivery-image" /> <p>We can deliver anywhere in the world, and offer a generous 90 days returns policy.</p> <table class="exp-delivery-info"> <tr> <th>UK Mainland</th> <th>Time</th> <th>Delivery Charge</th> </tr> <tr> <td>Standard Delivery</td> <td>5-7 working days</td> <td>FREE when you spend £60 or more<br /> £4.95 for orders under £60.</td> </tr> <tr> <td>48 Hours Delivery</td> <td>2 working days</td> <td>£7.95</td> </tr> <tr> <td>24 Hours Delivery</td> <td>Next working day</td> <td>£9.95</td> </tr> </table> <ul> <li>48 Hours and 24 Hours Delivery are only available on items marked &lsquo;In-Stock&rsquo;.</li> <li>Please order before 12noon for 24 Hour Delivery and before 12noon for 48 Hours Delivery.</li> <li>48 Hour &amp; 24 Hour Delivery: Items in your order shown as In Stock will be shipped immediately. Other items will be sent in a single, separate shipment as soon as new stock arrives. We will let you know by email.</li> </ul> <p>Standard Delivery:  If your order includes any goods which are currently not in stock, we will hold your order for up to 5 working days so that you receive your complete order in one shipment. If, after that time, some items are still out of stock we will dispatch part of your order and send the remaining items as soon as we receive them.  We will let you know by email.</p> <p>Personalised items will follow 7-10 days following your order.  Please choose Standard Delivery for personalised items.</p> <p>If we send your order in part-shipments, there will be no extra charge to you after your first delivery.</p> <h3>UK Offshore, overseas and BFPO</h3> <p>We can deliver anywhere in the world. UK orders &pound;60 or more are free (including Highlands, Islands and Northern Ireland). All other delivery charges are calculated at the checkout and clearly shown before you pay.  Delivery times vary depending on weight and destination.</p> <p><strong>For full information please see our <a href="/delivery-information/i5">Delivery information</a> page.</strong></p>'
    ],

    // Delivery page copy (variations 0 and 1)
    delivery_page: [
        '<p>We can deliver anywhere in the world, and offer a generous 90 Days returns policy. Please see below for full information.</p> <h3>UK Mainland Delivery</h3> <table class="exp-delivery-info"> <tr> <th>UK Mainland</th> <th>Time</th> <th>Delivery Charge</th> </tr> <tr> <td>Standard Delivery</td> <td>5-7 working days</td> <td>&pound;4.95</td> </tr> <tr> <td>48 Hours Delivery<br /> Order must be placed by 12noon Monday-Friday</td> <td>2 working days</td> <td>&pound;7.95</td> </tr> <tr> <td>24 Hours Delivery<br /> Order must be by 12 noon, Monday-Friday</td> <td>Next working day</td> <td>&pound;9.95</td> </tr> <tr> <td colspan="3"> <p>24 and 48 Hour Delivery is only available on &lsquo;In-Stock&rsquo; items. It is not available on items marked as:</p> <ul> <li>&lsquo;Direct From Supplier&rsquo;</li> <li>Personalised Items</li> <li>Made-to-Order Items such as furniture </li> <li>Not in Stock </li> </ul> </td> </tr> </table> <h3>UK Offshore Delivery</h3> <table class="exp-delivery-info"> <tr> <td>Delivery to addresses outwith the UK Mainland, including Isles of Scilly, Isle of Man and Scottish Islands.</td> <td>Delivery charge will be calculated at the checkout when you enter your address. You will be able to review your order and see all charges before you pay.</td> </tr> </table> <h3>International Delivery – EU COUNTRIES</h3> <table class="exp-delivery-info"> <tr> <th>Destination</th> <th>Delivery Costs</th> <th>Taxes &amp; Surcharges</th> </tr> <tr> <td>Delivery to addresses in EU Member States.</td> <td>Delivery charge is based on weight, and will be calculated at the checkout when you enter your address. You will be able to review your order and see all charges before you pay.</td> <td>All prices include VAT at 20% (where applicable)</td> </tr> </table> <h3>International Delivery – Non EU Countries</h3> <table class="exp-delivery-info"> <tr> <th>Destination</th> <th>Delivery Costs</th> <th>Taxes &amp; Surcharges</th> </tr> <tr> <td>Delivery to addresses outside the EU.</td> <td>Delivery charge is based on weight, and will be calculated at the checkout when you enter your address. You will be able to review your order and see all our charges before you pay. However, you may have to pay additional import duty charges when your parcel arrives.</td> <td>VAT will be deducted where appropriate. Please ensure you have correctly entered the destination country.<br /> Your goods may be subject to import duty. These are not included in our prices and are the responsibility the purchaser.</td> </tr> </table> <h3>B.F.P.O.</h3> <table class="exp-delivery-info"> <tr> <td>We are delighted to support British Forces Posted Overseas.<br /> Please make sure you select BFPO from the country field when you enter your address, otherwise you will be charged at overseas rates.</td> <td>Delivery charges are in line with our MOD Contract and calculated during the checkout. You will be able to see all charges and review your order before you pay.</td> </tr> </table> <h3>Returns and Refunds</h3> <p>We want you to be delighted with the quality of the goods you receive from BrightMinds. If for any reason you wish to return any items from your order, please do so within 90 days of receipt and in resalable condition. You will be offered a full refund of the value of the goods or an exchange - whichever you prefer. </p> <p>Refunds are normally processed within 7 days of receipt although please allow extra time over busy periods such as Christmas, January and Easter. </p> <p>We recommend you use recorded delivery and obtain insurance, as we are only responsible for the goods once they are back with us in resalable condition.   The exception to this is on the rare occasions when your goods arrive faulty or in error, when the cost of returning them is at our expense. </p> <h3>Faulty Goods</h3> <p>If you receive goods which are faulty or have been damaged in transit, please let us know straight away and we will either offer you a full refund or replace the goods at our cost. </p> <h3>Cancelling an Order</h3> <p>If you wish to cancel your order, please call us on 0844 41 222 49 or email us <a href="mailto:info@brightminds.co.uk">info@brightminds.co.uk</a>. We will do our best to stop the goods coming to you,</p> <p>If they have already been despatched we ask you to package them up, unused in original packaging and return them as soon as possible. </p> <p>You will need to pay the delivery costs, and we can only refund your money when the goods have been returned. We recommend you use a signed-for insured service. </p> <h3>Your consumer rights</h3> <p>Our generous 90 Day No Quibble Guarantee is provided in addition to your statutory rights as a consumer.</p>',
        '<p>We can deliver anywhere in the world, and offer a generous 90 Days returns policy. Please see below for full information. </p> <h3>UK Mainland Delivery</h3> <table class="exp-delivery-info"> <tr> <th>UK Mainland</th> <th>Time</th> <th>Delivery Charge</th> </tr> <tr> <td>Standard Delivery</td> <td>5-7 working days</td> <td>FREE on orders &pound;60 or more<br /> &pound;4.95 on orders under &pound;60</td> </tr> <tr> <td>48 Hours Delivery<br /> Order must be placed by 12noon Monday-Friday</td> <td>2 working days</td> <td>&pound;7.95</td> </tr> <tr> <td>24 Hours Delivery<br /> Order must be by 12 noon, Monday-Friday</td> <td>Next working day</td> <td>&pound;9.95</td> </tr> <tr> <td colspan="3"> <p>24 and 48 Hour Delivery is only available on &lsquo;In-Stock&rsquo; items. It is not available on items marked as:</p> <ul> <li>&lsquo;Direct From Supplier&rsquo;</li> <li>Personalised Items</li> <li>Made-to-Order Items such as furniture </li> <li>Not in Stock </li> </ul> </td> </tr> </table> <h3>UK Offshore Delivery</h3> <table class="exp-delivery-info"> <tr> <td>Delivery to addresses outwith the UK Mainland, including Isles of Scilly, Isle of Man and Scottish Islands</td> <td>FREE on orders &pound;60 or more<br /> On orders under &pound;60, delivery charge will be calculated at the checkout when you enter your address. You will be able to review your order and see all charges before you pay.</td> </tr> </table> <h3>International Delivery – EU COUNTRIES</h3> <table class="exp-delivery-info"> <tr> <th>Destination</th> <th>Delivery Costs</th> <th>Taxes &amp; Surcharges</th> </tr> <tr> <td>Delivery to addresses in EU Member States</td> <td>Delivery charge is based on weight, and will be calculated at the checkout when you enter your address. You will be able to review your order and see all charges before you pay.</td> <td>All prices include VAT at 20% (where applicable)</td> </tr> </table> <h3>International Delivery – Non EU Countries</h3> <table class="exp-delivery-info"> <tr> <th>Destination</th> <th>Delivery Costs</th> <th>Taxes &amp; Surcharges</th> </tr> <tr> <td>Delivery to addresses outside the EU.</td> <td>Delivery charge is based on weight, and will be calculated at the checkout when you enter your address. You will be able to review your order and see all our charges before you pay. However, you may have to pay additional import duty charges when your parcel arrives.</td> <td>VAT will be deducted where appropriate. Please ensure you have correctly entered the destination country.<br /> Your goods may be subject to import duty. These are not included in our prices and are the responsibility the purchaser.</td> </tr> </table> <h3>B.F.P.O.</h3> <table class="exp-delivery-info"> <tr> <td>We are delighted to support British Forces Posted Overseas. <br /> Please make sure you select BFPO from the country field when you enter your address, otherwise you will be charged at overseas rates.</td> <td>Delivery charges are in line with our MOD Contract and calculated during the checkout. You will be able to see all charges and review your order before you pay.</td> </tr> </table> <h3>Returns and Refunds</h3> <p>We want you to be delighted with the quality of the goods you receive from BrightMinds. If for any reason you wish to return any items from your order, please do so within 90 days of receipt and in resalable condition. You will be offered a full refund of the value of the goods or an exchange - whichever you prefer. </p> <p>Refunds are normally processed within 7 days of receipt although please allow extra time over busy periods such as Christmas, January and Easter. </p> <p>We recommend you use recorded delivery and obtain insurance, as we are only responsible for the goods once they have arrived back with us in resalable condition.   The exception to this is on the rare occasions when your goods arrive faulty or in error, when the cost of returning them is at our expense. </p> <h3>Faulty Goods</h3> <p>If you receive goods which are faulty or have been damaged in transit, please let us know straight away and we will either offer you a full refund or replace the goods at our cost. </p> <h3>Cancelling an Order</h3> <p>If you wish to cancel your order, please call us on 0844 41 222 49 or email us <a href="mailto:info@brightminds.co.uk">info@brightminds.co.uk</a>. We will do our best to stop the goods coming to you,</p> <p>If they have already been despatched we ask you to package them up, unused in original packaging and return them as soon as possible. </p> <p>You will need to pay the delivery costs, and we can only refund your money when the goods have been returned. We recommend you use a signed-for insured service. </p> <h3>Your consumer rights</h3> <p>Our generous 90 Day No Quibble Guarantee is provided in addition to your statutory rights as a consumer.</p>'
    ],

    copy: {
        "http://www.brightminds.co.uk/rainbow-in-your-room/p841": {
            specs: ["Age 4 and above"],
            description: "<p>Bring nature's most beautiful light-show into your bedroom. \
            This enchanting light projector displays a rainbow on walls or ceilings in \
            a darkened room. Includes a sunlight crystal for daytime rainbows.</p> \
            <p>Requires 4 AAA batteries, supplied separately.</p>"
            },
        "http://www.brightminds.co.uk/atm-bank/p202": {
            specs: ["Age 8+"],
            description: "<p>A superb way to learn about money handling and setting \
            a target for saving, whilst protecting pocket money from prying eyes.</p> \
            <p>To bank money, notes are automatically drawn into the slot and the \
            cashpoint identifies coins and adds the coin values to your running \
            total. Realistic ATM noises and lights help you set a target figure you \
            want to save to and compare your coin total to this value. When you are \
            ready, draw out your cash by setting your own 4 digit PIN and using \
            the ATM included.</p> \
            <p>A fun and engaging learning toy for any child who knows their \
            number bonds and is starting to take an interest in money.</p> \
            <p>Works with £ currency. Size: H 22cm x W 26cm.</p> \
            <p>Requires 3 AA batteries, not supplied.</p>"
            },
        "http://www.brightminds.co.uk/junior-carpenter-tool-set/p132": {
            specs: ["Age 8 to adult"],
            description: "<p>A scaled-down working version of a <strong>real carpenter's tool set</strong> this \
            set is an ideal kids tool set for children who like working with the real thing.</p> \
            <p>Contents (which may vary) include a saw with metal blade, claw hammer, \
            pliers, chisel, 2 screwdrivers, mallet, plane, clamp, nail puller, set \
            square, retractable tape measure and nails, pins and screws plus a leaflet \
            explaining the function of each tool.</p> \
            <p>Packed in a tough solid wooden storage cabinet with hinged winged doors \
            and metal carrying handle, this makes a great gift for a Junior Carpenter.</p> \
            <p>Cabinet Size:  36 x 24 x 8.5 cm.</p>"
            },
        "http://www.brightminds.co.uk/design-and-drill-centre/p133": {
            specs: ["Ages 3 to 6"],
            description: "<p>Creativity and construction come together in this Award winning \
            activity set that engages fine motor skills as kids create their own designs, \
            or those featured in the 20 included activity cards.</p> \
            <p>This kit blends creativity with 'hands-on doing' activity as you build \
            patterns up from the chunky, colourful bolts.</p> \
            <p>Includes plastic bolts, reversible power drill, screwdriver, three drill \
            bits and combination wrench.</p> \
            <p>Requires 3 AA batteries, not included.</p>"
            },
        "http://www.brightminds.co.uk/city-of-zombies-maths-game/p2787": {
            specs: ["Age 8+", "For 1 to 6 players"],
            description: "<p>Lock and Load your dice – the Zombies are coming! You’ll need to \
            use your brains if they’re not going to get you. Select your heroes and team \
            up to fight for your lives against an advancing Zombie horde. Roll the dice \
            and combine all the numbers on the dice to take out as many Zombies as possible.</p> \
            <p>Unlock power ups and battle the Zombie bosses. Clear the board for bonus \
            survivor cards, but beware! The Zombies are after you and if your barricade \
            gets overrun, it’s game over…</p> \
            <p>City of Zombies is a co-operative, dice-based intense team survival game. \
            Players must work together, discuss and share ideas in their fight for \
            survival in this fun and frantic family game. They combine dice to target \
            and remove Zombies from an ever-advancing horde before their barricade is overrun.</p> \
            <p>City of Zombies only takes moments to set up and minutes to learn, and \
            right from the start you’re thrown into the action. The game is suitable for \
            all ages and abilities, and can be played in as little as 15 minutes (in the \
            shorter version). The game involves manipulating the numbers rolled on the \
            dice using different combinations of mathematical functions (from basic \
            addition and subtraction through to squaring and cube rooting) to hit \
            the exact numbers on the encroaching Zombie cards.</p> \
            <p>Originally developed to assist the designer's daughter with her maths, \
            City of Zombies is a fun way to improve numeracy, using non-threatening maths \
            play.  It encourages confidence, communication & learning.</p> \
            <p>Contents:</p> \
            <ul> \
                <li>Game Rules</li> \
                <li>Dice</li> \
                <li>Turn counter</li> \
                <li>Family friendly Zombie cards</li> \
                <li>‘Walker’ Zombie cards</li> \
                <li>2 Styles of Hero cards</li> \
                <li>Survivor cards</li> \
                <li>Event cards</li> \
                <li>Game Board</li> \
            </ul>"
            },
        "http://www.brightminds.co.uk/bookmark-dictionary-white/p1784": {
            specs: ["Age 6+"],
            description: "<p>There will be no need to ask Mum next time you read a word you \
                    don’t understand. This electronic dictionary bookmark can be used to \
                    keep your place in the conventional way, but also offers 38,000 \
                    definitions from The Collins English Dictionary at your fingertips.</p> \
                    <p>Although this does not act as a spelling corrector it is a great \
                    gadget for children and adults to enrich their reading experience.</p> \
                    <p>Easy to use. Battery included. Size 17 x 4.5cm.</p>"
            },
        "http://www.brightminds.co.uk/anatomy-model/p15": {
            specs: ["Ages 6+"],
            description: "<p>Anatomy model with removable organs and a rubbery realistic feel.</p> \
                    Kidneys remain attached to main back body part bit- half of lungs, \
                    liver, stomach, gut, heart, eye, part of brain all remove. No sex organs. \
                    Really helps children to identify organs and learn where they are located.</p> \
                    <p>Size 27 cm tall.</p>"
            },
        "http://www.brightminds.co.uk/john-adams-science-is-magic/p262": {
            specs: ["Ages 7 to 11"],
            description: "<p>Over 30 experiments to learn about the magic of science, including \
                    a flying phoenix, magic spinning broomstick and a warthog optical illusion.</p>"
            },
        "http://www.brightminds.co.uk/rc-illuminated-solar-system/p843": {
            specs: ["Age 6+"],
            description: "<p>A fabulous, motorised model of the solar system based around an \
                    illuminated sun light. The eight planets rotate on three independent \
                    orbits and can be controlled remotely, making this an ideal bedroom \
                    accessory as well as an impressive educational toy.</p> \
                    <p>Requires 3 AA and 2 AAA batteries, supplied separately.</p>"
            },
        "http://www.brightminds.co.uk/native-american-bead-loom/p245": {
            specs: ["Age 8+"],
            description: "<p>Learn the art of Native American beading. High quality bead loom \
                    comes with over 2,000 beads and instructions for creating dozens of \
                    beaded projects.</p>"
            },
        "http://www.brightminds.co.uk/introduction-to-engineering-thames-and-kosmos-little-labs/p801": {
            specs: ["Age 5 +"],
            description: "<p>A brilliant kit to welcome young children to the field of \
                    engineering. Includes an excellent colour manual with 25 experiments \
                    and building projects such as building a helicopter, a glider, a \
                    pinwheel and a dragster. A Thames and Kosmos Little Labs kit of good quality.</p>"
            },
        "http://www.brightminds.co.uk/microscope-set-in-handy-carry-case/p164": {
            specs: ["Age 10+"],
            description: "<p>This is our best selling children's microscope in the under £50 \
                    bracket, with excellent reviews.</p> \
                    <p>A superior-quality children's microscope with a built-in light \
                    source, giving a range of magnifications up to x1200.</p> \
                    <p>The sturdy, fold-out storage case contains blank slides and a \
                    prepared viewer card together with instruments for making your own slides.</p> \
                    <p>The kit includes a selection of pre-made slides of algae, fibres, and other items.</p> \
                    <p>Requires 2 AA batteries (not supplied) for the sub-stage light. \
                    Please note that some of the instruments are some very sharp and only \
                    be used under supervision. These include a scalpel, a micro-slicer \
                    and a pointed seeker.)</p> \
                    <p><em>Please note, this a high quality working toy microscope offering \
                    great functionality at an excellent price. If you require a metal \
                    body microscope we recommend the more expensive \
                    <a href=\"http://www.brightminds.co.uk/tk2-scope-thames-and-kosmos/p802\" target=\"_blank\">TK2</a> \
                    </em></p>"
            },
        "http://www.brightminds.co.uk/chemistry-lab-kit-senior-large/p375": {
            specs: ["Age 10+"],
            description: "<p>Complete Chemistry lab set with all the necessary instructions. \
            Kit includes litmus paper, a glass beaker and rods, flask, test tube holder \
            and rack with corks and stoppers, funnel and filter papers and a spirit \
            burner lamp (without spirit). A detailed instruction manual for experiments \
            is included, using the supplied chemicals plus, other easily obtainable \
            household items. as is common with all chemistry sets.</p> \
            <p>Contains:</p> \
            <ul> \
                <li>1 - 100ml beaker</li> \
                <li>1 - Universal Indicator papers</li> \
                <li>1 - 100ml conical flask</li> \
                <li>2 - stoppers - cork</li> \
                <li>3 - stoppers - cork with hole</li> \
                <li>Filter papers</li> \
                <li>Litmus papers</li> \
                <li>1 - Plastic funnel</li> \
                <li>1 - 120mm glass stirring rod</li> \
                <li>3 - 100mm glass tubing</li> \
                <li>1 - Measuring spoon</li> \
                <li>1 - Plastic dropping pipette</li> \
                <li>1 - 100mm rubber tubing</li> \
                <li>1 - Safety goggles</li> \
                <li>1 - Small scoop</li> \
                <li>1 - Spirit burner</li> \
                <li>4 - Test tube caps</li> \
                <li>1 - Test tube cleaning brush</li> \
                <li>1 - Test tube holder</li> \
                <li>1 - Test tube rack</li> \
                <li>4 - Test tubes</li> \
                <li>Ammonium chloride</li> \
                <li>Calcium Carbonate</li> \
                <li>Iron fillings</li> \
                <li>Copper (II) Sulphate</li> \
                <li>Calcium Hydroxide</li> \
                <li>Litmus Blue</li> \
                <li>Copper Foil</li> \
                <li>Copper (II) oxide</li> \
                <li><strong>Magnesium Strip</strong></li> \
                <li>Magnesium sulphate</li> \
                <li>Methyl orange</li> \
                <li>Sodium carbonate</li> \
                <li>Sodium hydrogen sulphate</li> \
                <li>Aluminium potassium sulphate</li> \
                <li>Potassium iodide</li> \
                <li>Sodium sulphate</li> \
                <li>Sodium thiosulphate</li> \
                <li>Zinc Pellets</li> \
                <li>Iron (II) Sulphate</li> \
                <li>100 experiments in a 71 page black and white booklet.</li> \
            </ul>"
            },
        "http://www.brightminds.co.uk/thames-and-kosmos-electricity-magnetism/p803": {
            specs: ["Age 8+"],
            description: "<p>Explore electricity and magnetism with easy snap-together blocks \
            which help you complete projects such as a loudspeaker, an electromagnet \
            relay switch, and a Morse code telegraph key. The blocks are brightly \
            coloured and have unique shapes, making this set a brilliant starter kit.</p> \
            <p>Conduct more than 60 electrifying experiments with circuits and magnetic \
            contraptions to learn about electricity and magnetism, and how these two \
            fundamental properties are closely related. Children eight and up can safely \
            and easily experiment with electric current and magnetic fields using the \
            colorful snap-together blocks and components in this hands-on kit.</p> \
            <p>Build series and parallel circuits to light up a light bulb. Experiment \
            with push buttons and on-off switches. Assemble circuits that include a \
            spinning motor, two switches, and up to three light bulbs.</p> \
            <p>Conduct tests to see which materials are magnetic. Learn about the force \
            of magnetism and magnetic poles. Magnetize a metal. Use iron fillings to \
            make invisible magnetic fields visible. Investigate magnetic force and \
            direction with a magnetic pendulum device. Learn how a compass works and \
            about Earth's magnetic fields. Conduct a series of experiments with a \
            sturdy electromagnet.</p> \
            <p>Finally, put everything you have learned to good use by constructing a \
            loudspeaker, an electromagnetic relay switch, and a morse code telegraph key.</p> \
            <p>The components are specially designed to make learning fun and accessible. \
            The electrical blocks fit together with simple plugand- socket connectors. \
            Because the blocks are brightly coloured and have unique shapes, it is easy \
            to follow the assembly diagrams to construct functional devices.</p> \
            <p>The 64-page, full-colour experiment manual guides you through \
            experiments with easy-to follow diagrams.</p> \
            <p>60 components.</p>"
            },
        "http://www.brightminds.co.uk/spacebot/p1901": {
            specs: ["Age 5+"],
            description: "<p>Infrared remote control robot with walking, kind of talking actions \
                    and the ability to shoot disks from his mouth. He lights up when in \
                    action and makes typical robot noises!</p> \
                    <p>Size 30cm. Requires 6 AA batteries.</p>"
            }
    }
};

// Styles
// String containing the CSS for the experiment
exp.css = '\
#centre.exp-centre { width: 940px; } \
.exp-box:after, \
.exp-inner:after { clear: both; content: ""; display: block; } \
.exp-column { float: left; width: 460px; } \
.exp-column + .exp-column { float: right; } \
.exp-box { border: 3px solid #f0f1f2; padding: 15px; position: relative; } \
.exp-box + .exp-box { margin-top: 20px; } \
.exp-box > h2 { border-bottom: 3px solid #f0f1f2; padding-bottom: 0.5em; text-align: center; } \
.exp-box-returns > h2 { padding-right: 240px; text-align: right; } \
.exp-box > #desc_6.exp-overflow-scroll { max-height: 400px; overflow-y: scroll; padding-right: 15px; } \
.exp-box-benefit img { border-radius: 50%; float: left; margin: 0 20px 20px 0; width: 150px; } \
.exp-box-benefit h3 { margin: 20px 0; } \
.exp-box-benefit blockquote { background: transparent; font-style: italic; font-size: 14px; margin: 1.5em 0; padding: 0; } \
.exp-box-benefit blockquote + ul { clear: both; font-style: italic; margin: 0; } \
.exp-box-benefit blockquote + ul li { margin: 0.5em 0; } \
.exp-box-description { font-size: 13px; } \
.exp-delivery-info { font-size: 14px; margin: 1em 0; width: 100%; } \
.exp-delivery-info td, \
.exp-delivery-info th { padding: 0.5em 1em; } \
.exp-delivery-info th { font-weight: bold; } \
.exp-delivery-image { float: left; margin: 0 1em 2em 0; } \
.exp-delivery-image + p { font-size: 16px; font-weight: bold; margin: 2em 0; } \
.exp-model { color: #A7A7A7; display: block; margin-bottom: 15px; font-size: 14px; } \
#product .pageheading { border: 0; padding: 0; text-align: right; } \
#product #summary { float: none; margin: 0; text-align: right; width: auto; } \
#product #summary #details dd.rating { position: static; } \
#product #summary #print-page, \
#product #summary #details dd.refer, \
#product #summary #details dd#prodModel, \
#product #summary #details dt.model { display: none; } \
#product #summary #addtowishlist { display: none; } \
#product #summary #addthis { display: none; } \
#product #summary #attriblist { display: none; } \
#product #summary .restrictions { display: none; } \
#product #summary .message { position: absolute; left: 0; bottom: -22px; width: 100px; height: 100px; text-align: center; display: block; } \
#product #summary .message .exp-message-inner { display: block; position: relative; top: 50%; transform: translateY(-50%); transform: -ms-translateY(-50%); -webkit-transform: translateY(-50%); } \
#product #summary #reviews_link { text-decoration: underline; } \
#product #eimgHoverscontainer { padding-top: 0; } \
.has-extra-images #product #imagewrapper, \
#product #imagewrapper { float: none; width: 400px; min-height: 320px; } \
#product #imagewrapper #eimgHovers { height: auto; } \
#product #imagewrapper #eimgHoverswrapper { width: 90px; } \
#product #imagewrapper #eimgHoverswrapper.exp-overflow-scroll { max-height: 320px; overflow-y: scroll; } \
#product #imagewrapper #eimgHoverscontrols { display: none; } \
.has-extra-images #product #imagewrapper #prod_img, \
#product #imagewrapper #prod_img { margin-left: 95px; width: 340px; } \
.has-extra-images #product #imagewrapper #prod_img a, \
#product #imagewrapper #prod_img a { width: 340px !important; } \
#product #eimgHoverscontainer #eimgHovers dd a { display: inline-block; margin: 0 0 10px 0; width: 60px; } \
#product #reviews .hreview-aggregate { border: 0; margin: 0; padding: 0 5px 0 0; position: absolute; left: 215px; top: 21px; white-space: nowrap; width: auto; } \
#product #reviews .hreview-aggregate .smaller { display: inline; position: relative; left: 5px; top: 0; } \
#product #reviews .hreview-aggregate .col { display: inline; } \
#product #reviews .hreview-aggregate .rating { display: none; } \
#product #questions .prompt h3, #product #reviews .prompt h3 { height: auto; } \
#product #questions .prompt h3, #product #reviews .prompt h3 a { display: inline-block; margin-top: 0.5em; } \
#product .prodlist.galleryview { float: none; margin: 0 auto; } \
#p_page .rtecontent h3 { margin-top: 24px; } \
#product .prodlist.offerlist { float: none; } \
@media only screen  \
and (max-width : 950px) { \
    .exp-column { width: 100%; } \
    #product #summary .message { position: static; width: 100%; } \
} \
ul.product-specs { \
    list-style-type: none; \
    border: 2px solid #f0f1f2; \
    padding: 7px; \
} \
.product-specs li { \
    font-weight: bold; \
    display: inline-block; \
    margin-right: 1em; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// This function waits till a DOM element is available, then runs a callback function
exp.func.waitForElement = function(selector, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($(selector).length) {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                callback();
            } else if (attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts ++;
        }, intervalTime);
};

// This function waits till a function is available, then runs a callback function
exp.func.waitForFunction = function(func, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($.isFunction(func)) {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                callback();
            } else if (attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts ++;
        }, intervalTime);
};

exp.func.waitForObject = function (obj, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if (typeof obj !== 'undefined') {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                callback();
            } else if (attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts ++;
        }, intervalTime);
}

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // Add or update inline CSS
    var style = $('#exp-style');

    if (style.length === 0) {
        exp.log('Adding inline CSS');
        $('head').append('<style id="exp-style">' + this.css + '</style>');
    } else {
        exp.log('Editing inline CSS');
        style.html(this.css);
    }

    // Check variation from "Free Delivery Threshold Experiment"
    // 0: control
    // 1: treatment
    var variation = window.optimizely.data.state.variationMap[2202620370];

    // Apply layout and content changes to product page
    // Use presence of #product to determine whether product page
    if ( $('#product').length > 0 ) {

        // Log page type
        exp.log('Found product page: running experiment');

        // Check if already manipulated DOM (i.e. script has already run)
        if ( $('.exp-inner').length !== 0 ) {
            exp.log('Experiment has already run: skipping DOM manipulation');
            return;
        }

        // Add identifier to centre
        // Makes CSS changes to #centre apply only to product page
        $('#centre').addClass('exp-centre');

        // Select existing elements
        var model_no    = $('#prodModel').text();
        var product     = $('#product');
        var images      = $('<div class="exp-box"></div>').append( $('#imagewrapper') );
        var summary     = $('<div class="exp-box"></div>').append( $('#summary') );
        var description = $('<div class="exp-box exp-box-description"></div>').append( $('#desc_1').show() );
        var deliveries  = $('<div class="exp-box exp-box-deliveries"></div>').append( $('#desc_2').show() );
        var reviews     = $('<div class="exp-box exp-box-returns"></div>').append( $('#desc_6').show() );
        var title       = $('.pageheading');
        var stars       = $('#reviews_link');
        var form        = $('#cmform');
        var obsolete    = $('#right, #tabwrapper, .refer, #print-page, .model, #prodModel');
        var message     = summary.find('.message');

        // Add model number
        images.prepend( $('<span class="exp-model">Code: ' + model_no + '</span>') );

        // Update delivery content (and variation variable)
        this.func.waitForObject(window.optimizely.data.state.variationMap, function () {
            variation = window.optimizely.data.state.variationMap[2202620370];
            deliveries.html(exp.vars.delivery_info[variation]);
        });

        // Create new elements (to apply new layout)
        var expInner = $('<div class="exp-inner"></div>');
        var expLeft  = $('<div class="exp-column"></div>');
        var expRight = $('<div class="exp-column"></div>');

        // Add headings
        description.prepend( $('<h2>Description</h2>') );
        reviews.prepend( $('<h2>Reviews</h2>') );

        // Create benefit box
        // Include name of current top level category in copy
        var benefit_cat  = $('#crumbs dd:eq(1)').text();
        var benefit = $( exp.vars.benefit_content.replace('innovative', benefit_cat) );

        // Edit "back in stock soon" message
        // Note:  We check for this "Available for Christmas" ... later on for
        // a custom goal.  If it is changed here, please also change below.
        message.html( message.html().replace(/back in stock soon|available for christmas/i, 'Available for Christmas &ndash; Order Now') );

        // Wrap message in span for styling
        message.wrapInner('<span class="exp-message-inner"></span>');

        // Rearrange elements to create new layout
        summary.prepend(title);
        form.before(stars);
        expLeft.append(images, benefit, reviews);
        expRight.append(summary, description, deliveries);
        expInner.append(expLeft, expRight);
        product.prepend(expInner);
        obsolete.remove();

        // Test thumbnail overflow (development only)
        // if ( window.location.search.match(/[?&]debug/) ) {
        //     $('#eimgHovers dd').clone().appendTo('#eimgHovers');
        // }

        // Add "overflow: scroll" to image thumbnails (if too tall)
        if ( $('#eimgHovers').height() > $('#imagewrapper').height() ) {
            $('#eimgHoverswrapper').addClass('exp-overflow-scroll');
        }

        // Add "overflow: scroll" to reviews (if too tall)
        if ( $('.exp-box > #desc_6').height() > 400 ) {
            $('.exp-box > #desc_6').addClass('exp-overflow-scroll');
        }

        // Remove brackets from aggregate review stars
        this.func.waitForElement('.hreview-aggregate .smaller', function () {
            var smaller = $('.hreview-aggregate .smaller');
            smaller.text( smaller.text().replace(/[()]/g, '') );
        });

        // Restore scroll to reviews link
        // Note: can't use `on()` until jQuery v1.7
        $('#reviews_link').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#desc_6').parent().offset().top - 20
            });
        });

        // If the product is out of stock track clicks on Add To Basket with a custom event
        if (message.html().indexOf('Available for Christmas') !== -1)
        {
            $('#addtobasket #action_button').click(function(){
                optimizely.push(["trackEvent", "AddToBasketOutOfStock"]);
                return true;
            });
        }

    }

    // Apply content changes to delivery information page
    // Use URL to determine whether on delivery page
    if ( window.location.pathname.indexOf('/delivery-information/i5') === 0 ) {
        this.func.waitForObject(window.optimizely.data.state.variationMap, function () {
            exp.log('Found delivery page: running experiment');
            variation = window.optimizely.data.state.variationMap[2202620370];
            $('.rtecontent').html(exp.vars.delivery_page[variation]);
        });
    }

    // Update copy
    var page_url = window.location.href.match(/http:.*\/p[0-9]+/)[0];
    var copy = exp.vars.copy[page_url];
    if (copy) {
        $('#desc_1').html(copy.description);
        if (copy.specs.length) {
            $('#desc_1').prepend('<ul class="product-specs"><li>Key specifications:</li><li>'
                + copy.specs.join('</li><li>') + '</li></ul>');
        }
    }
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(optimizely.$);