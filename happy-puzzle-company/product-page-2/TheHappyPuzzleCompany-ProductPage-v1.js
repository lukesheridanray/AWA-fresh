//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
// 
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  };
}

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

	// Initialise the experiment object
	var exp = {};

	// Wrapper for console.log, to prevent the exp breaking on browsers which don't
	// (always) have 'console' set (e.g. IE9)
	exp.log = function (str) {
	    if (typeof window.console !== 'undefined') {
	        console.log(str);
	    }
	};

	// Log the experiment, useful when multiple experiments are running
	exp.log('Product Page v1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("#main_internal_full_box");

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Gift Guide 2 failed a condition');
	//     return false;
	// }
	// Commenting out conditions since IE is having a hard time with it

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		tabs: 	"<div id='AWA-tabs'>\
					<ul>\
						<li id='AWA-information-tab'><a href='#'>Information</a></li>\
						<li id='AWA-how-to-play-tab'><a href='#'>How to play</a></li>\
					</ul><div style='clear: both;'></div>\
					<div id='AWA-information'></div>\
					<div id='AWA-how-to-play'></div>\
				</div>",
		data: {
			  "/products/the-amazing-clock-kit.aspx": { "game":"The Amazing Clock Kit", "headline":"excellent service,recommend this company.", "review":"we bought the clock kit for our grandson last Christmas and were very pleased with both the product and service.", "author":"Sheila", "info":"<p><strong>The best selling product in our history, with sales of over 110,000 in the UK alone, this remarkable kit is outstanding fun and educational too.</strong></p><p>Both sides of the wind-up clock are transparent, meaning that the workings of the clock are completely visible.</p><p>This brilliant discovery kit is designed to give children aged from 5 to 15 an understanding of how a clock actuallyworks.</p><p>Children will be able to see why the different cogs and springs rotate and how they cause the pendulum to swing, turn the hands of the clock and make the bell chime too!</p><p>The full colour illustrated manual will guide you through the process in just 13 steps.</p><p>The clock face diameter is approx. 19.5cm</p>", "how_to_play":"<p>The Amazing Clock Kit contains everything that you will need to make the clock work. There are 31 high-quality pieces which are assembled over the course of 13 straightforward building steps, as illustrated in the accompanying booklet.</p><p>Once built correctly, set the time and wind the mechanism. The clock will begin ticking as the pendulum swings back and forth and it will hold its time accurately until it is ready to be rewound.</p><p>Remember that this is a clever discovery kit rather than a long-term time piece, but it really does work and will sit proudly on any mantelpiece!</p>"},
			  "/products/the-amazing-flower-kit.aspx": { "game":"The Amazing Flower Kit", "headline":"Flower Kit", "review":"Very efficient. Received my parcel very quickly after placing my order. Well packaged and am extremely pleased with item, so much so I have ordered another one.", "author":"Mrs Healey", "info":"<p>This fabulous puzzle craft kit will keep your children thoroughly entertained for hours!  The set contains everything they need to create a stunning bouquet of 48 multi-coloured flowers (there are eight different kinds of flowers!). There's no need for glue or even scissors! It all just pops apart and goes creatively together! Please note that the bucket in the image is not included.</p>", "how_to_play":"<p>It couldn’t be simpler. All of the pieces that you need pop out of the coloured foam sheets that are together in the pack. Having taken everything out, the frame of the foam can be discarded, leaving perfect shapes to make the flowers. All of the instructions to make the eight different types of flowers are clearly displayed in the full colour booklet. The green stems are sturdy and the tops of the stems push through the holes in each part of the flower, holding them well and in position.</p><p>Of course, you don’t have to stick to the designs that are included – simply create your own beautiful and multi-coloured ideas. When you have finished, you can arrange the flowers into a bouquet, or why not buy a pot and an oasis and start flower arranging. It’s all straightforward and outstanding fun, even for the smallest hands. What’s more, all of the pieces are reusable, so you can take apart your creations and start again if you wish! Either way, the set is fantastically well made and durable. It’s a stunning gift for creative hands!</p>"},
			  "/products/waxidoodles.aspx": { "game":"Waxidoodles", "headline":"Brilliant product and service!", "review":"Excellent product - waxidoodles, packaged well and prompt delivery. My 4 year old boy loves them!", "author":"Emm", "info":"<p>WaxiDoodles are modelling sticks coated with a wax formula so that they stick to almost any surface (without leaving permanent marks behind) and to each other, with just fingertip pressure, making them great for 3D activities and model building. A hugely creative activity that can help children understand and feel letter and shape formation. Brilliant as a learning tool, the colours don't blend and they can be used again and again! The set contains 150 WaxiDoodles plus a durable playing board and an activity booklet.</p>", "how_to_play":"<p>The rules are... there are no rules! Simply pop open the packet and get creative! The wax sticks can be used in a multitude of ways: You can build 3D models or use the playboard provided to create 2D designs. You can even stick them on to boring everyday objects and add a little bit of pizzazz to your things!</p><p>You can follow the designs on the booklet provided or let your imagination run free and create your own original designs.</p><p>When you're finished, you'll be amazed at how simple it is to tidy up. Your designs can be kept to display to friends and family or you can unravel everything back to its original state, ready for next time, because everything is completely reusable and a handy storage bag is provided too!</p>"},
			  "/products/jigraphy-united-kingdom-ireland.aspx": { "game":"Jigraphy UK & Ireland", "headline":"Pandemonium and Jigraphy", "review":"The Jigraphy was for one of my grandsons, was well made and proved to be just the right amount of difficulty for him.Great company to deal with and I have no hesitation in recommending them or their products.", "author":"Mrs Lynne Scott", "info":"<p>This outstanding, high quality, 100 piece jigsaw builds into a stunning map, illustrating the United Kingdom and Ireland by counties. The bizarrely shaped pieces turn the puzzle into an ingenious challenge that is both great fun and highly educational too. Follow the picture to build the puzzle or use your own geographical knowledge to create this stunning full-colour map. The finished puzzle is approximately 50cm x 40cm.</p>", "how_to_play":"<p>This map jigsaw is built like a classic jigsaw puzzle, with the one difference being getting used to the uniquely-shaped pieces.</p><p>Once completed, you can use the map to help improve your geographical knowledge of the UK and Ireland!</p>"},
			  "/products/welcome-to-puzzlington.aspx": { "game":"Welcome To Puzzlington", "headline":"Brilliant puzzles and amazing customer service", "review":"Puzzlington is brilliant - we have to take it everywhere. It's fun to make up the routes. But the best bit is the wind-up car and train which whizz around the completed track at breakneck speed. ", "author":"JR LEES", "info":"<p>Genuinely a superb game! There are 24 sections of road and train tracks. Your task is to construct the roads and railways correctly. However, with each of the 48 graded puzzles you'll need to solve maths puzzles and use logical deduction to work out what goes where. The best bit? Once you've completed the puzzle, the wind-up train and car will go speeding around your solution! absolutely brilliant!</p>", "how_to_play":"<p>Turn to the instruction booklet to see the list of challenges. Start at the beginning and work your way through - they get harder and harder!</p><p>In each challenge you'll be given all the details you need to solve the puzzle - You'll be told whether you need to build a road or a railway, you'll be given a target number and you'll be told whether that target needs to be reached through addition or subtraction.</p><p>You will find that each of the 24 road and railway tiles has a number on it. in each challenge, your task is to locate the tiles whose numbers can be used to reach the desired target number, using the specified mathematical method. Use those tiles to build a complete road or railway circuit and then wind up your train or car and watch it whizz around the track!</p><p>Once you've finished with the puzzles, the tiles can be used to create thousands more track designs for endless fun!</p>"},
			  "/products/thinktangles.aspx": { "game":"Thinktangles", "headline":"", "review":"", "author":"", "info":"<p>Every now and again, a game comes along which is so utterly brilliant, it simply makes you shout 'wow!'. Thinktangles! falls into that category. The game consists of a series of challenges that require you to think at speed and race against your opponent(s) to locate images, words and letters in a constantly changing playing area. The twist is that the item you are trying to find might not even be there!</p><p>Each of the 32 shaped cards in play contains ten images, words or letters, making a total of 320 across the cards. Every card also has a border of one, two or three colours. The 200 challenge cards give you a clue to something that needs to be located. However, there is a catch! Rolling the special dice will determine which of the shaped cards and which border colours you can use to complete the challenge. So your brain needs to concentrate on three things simultaneously!</p><p>What starts as a simple looking challenge will soon leave you tied up in thinking knots and a mistake could cost you the game! Thinktangles! can be played with different difficulty levels making it a wonderful game for the whole family!</p>", "how_to_play":"<p>The aim of the game is to win more of the shaped cards than your opponents!</p><p>Players take turns rolling the dice and reading out an instruction card that will tell players exactly what picture they are looking for. Each player has a 'match' card and a 'no match card' and everyone must race to be the first to hold up the correct card, depending on whether the picture they are looking for can be found on the shaped cards or not!</p><p>The first person with the correct answer wins the shaped card that displayed the answer but don't rush as other players can challenge your answer and mistakes will be costly!</p><p>There are two alternative ways of playing outlined in the instruction booklet, to make the game a little simpler for younger players.</p>"},
			  "/products/jigraphy-world.aspx": { "game":"Jigraphy World", "headline":"Great products and service", "review":"Great fun had by all with Perilous Penguins and Jigraphy World.", "author":"Mrs Beryl Andrew", "info":"<p>This brilliant 112 piece jigsaw challenge creates a stunning, full colour map of the world (the finished puzzle is approx. 70cm x 42cm). Many of the pieces have been shaped around country borders. Follow the image included inside, or use your own knowledge to work out where each piece should be positioned! Please note that this map displays the name of all full member states of the United Nations as of June 2014. Selected other locations are also shown.</p>", "how_to_play":"<p>This map jigsaw is built like a classic jigsaw puzzle, with the one difference being getting used to the uniquely-shaped pieces.</p><p>Once completed, you can use the map to help improve your geographical knowledge of the world!</p>"},
			  "/products/perilous-penguins.aspx": { "game":"Perilous Penguins", "headline":"A great toy for Christmas", "review":"We were looking for something that our 7 year old grandchildren could play and found the 'Perilous Penguins' which caused lots of laughs for quite some time. Unusual with children these days as they seem to lose interest very quickly, but not with this game!", "author":"Robert", "info":"<p>There's room on the moving iceberg for all 24 of your penguins, but making sure they don't slide off is easier said than done!</p><p>Your task is to find a way of getting all of the penguins to balance at the same time on the iceberg without them falling into the pond. If you try and get them to stand up there too quickly, they'll fall straight back into the pond and you're back to square one! Go slowly and carefully, come up with an effective strategy and you'll succeed! You'll need a steady hand to make sure they balance though! Play with up to five opponents or as a team!</p>", "how_to_play":"<p>Play on your own, against your friends, or as a team, but the aim is the same - get all the penguins standing on the iceberg at the same time!</p><p>Carefully balance the white iceberg on the blue lake and then share out the 24 penguins amongst the players. If playing competitively, the aim is to be the first player to be left with no penguins! Players take turns place one penguin at a time on the iceberg but the iceberg is extremely wobbly and any penguins that you cause to fall off the iceberg will get added to your pile!</p><p>When playing alone, or as a team, the aim is simply to devise and carry out a plan to get all 24 penguins standing on the iceberg together.</p>"},
			  "/products/pandemonium.aspx": { "game":"Pandemonium", "headline":"Pandemonium", "review":"What a super game! Our 4year oldgrandson didn't want to stop playing it.. Rivalry was rife. Suitable for all ages. Fully recommended and so simple.", "author":"Brenda", "info":"<p>This fabulous game is about thinking at speed without dissolving into panic. It's about distinguishing between colours, shapes and orientations simultaneously in an effort to beat your opponent. There are 60 graded challenges, each chosen randomly. Everyone sees the same image at the same time, and must recreate the image first to win the round. Both players or teams have six tiles, each with four shape holes and 24 shapes with which to fill the holes. Unfortunately, Each tile can go either way up and rotate there are numerous pieces that could fill each hole, but won't. And it's that easy - it's just shape sorting gone extreme! A thoroughly deserved award winner.</p>", "how_to_play":"<p>Share the tile and shape pieces equally between the two players, making sure that each player has the same six tiles and 24 shapes as each other. Each player also takes a set of challenge cards. The aim of the game is to be the fastest at sorting the shapes and tiles to match the arrangements pictured on the challenge cards.</p><p>In each round of the game, one player will choose a number disc from the bag. The number selected will be the number of the challenge that the two players must race to complete. Whichever player completes the challenge first, wins the round but be careful - many of the shapes and tiles look very similar and you have to make sure your arrangement is absolutely identical to the one on the challenge card.</p><p>The player that wins each round will receive a Pandemonium jigsaw puzzle piece. A player wins the game when they have completed the entire six-piece Pandemonium jigsaw puzzle.</p>"},
			  "/products/ice-cubed.aspx": { "game":"Ice Cubed", "headline":"", "review":"", "author":"", "info":"<p>This ingenious set of 48 graded 3D challenges requires you to use logical deduction combined with maths to correctly position up to five colour-coded ice cubes in a tower. To solve each puzzle, the numbers on the outer face of each side of the ice cubes must vertically add up to the totals shown at the foot of each of the four sides of the tower... all at the same time. It's straightforward enough until you start tackling puzzles without knowing which ice cubes you need to use. This brand new set of puzzles will slowly drive you mad with sub-zero frustration, but each time you succeed, you'll want to push yourself that bit further! The concept is so clever and the puzzles incredibly addictive. Wonderful.</p>", "how_to_play":"<p>So simple to understand and yet so fiendishly difficult to complete! The game is played with 6 cubes and an upright plastic tube. Each cube has 4 numbered sides.</p><p>Choose a challenge card and place it over the plastic tube. The card will tell you how many cubes are needed to solve that challenge and may tell you some or all of the colours of the blocks that are needed. Each card also displays four 'target numbers'.</p><p>Your job is to slide the correct cubes onto the tube to create a vertical tower such that the total of all of the numbers on each side of the tower is equal to the target numbers specified on the challenge cards.</p><p>The challenges get progressively harder, with progressively more cubes being needed and less information being given to help you find the solution.</p>"},
			  "/products/timeshock.aspx": { "game":"Time Shock", "headline":"", "review":"", "author":"", "info":"<p>A great little challenge in which players race against a timer to try and fit the 26 shapes into their correct homes. If time runs out the board pops up and all of the shapes come flying out! The board has a built-in score sheet to record the performance of up to five players. No batteries required. Pieces are stored in a side container.</p>", "how_to_play":"<p>Players take turns to try to beat the clock. The 26 shapes should be scattered around the game board. The timer is wound up and then released, immediately starting a 50-second countdown. The player must try to place all 26 shapes in their correct positions before the time runs out. Failure to do so will result in the game board popping up and all of the pieces being thrown out!</p><p>Individual players can take turns and keep score of how many shapes they were each able to place before the time ran out.</p"},
			  "/products/football-stadium-3d-puzzles-old-trafford.aspx": { "game":"3D Stadium Puzzle - Old Trafford", "headline":"Excellent service", "review":"Delivery was very speedy and item is brilliant a great 3d stadium and a very happy son,looking at other items on the web site as Christmas approaching so Will be purchasing again", "author":"Mark Scott", "info":"<p>Bring your own favourite teams stadium to life in 3D. Each of the sets have been officially licensed from the football club.  There is no mess, no special tools are required and no glue is needed. The kits are also reuseable.</p><p>Made from high quality foam board, each kit should take around 90 to 120 minutes to complete,  leaving you with a detailed replica, constructed on its own base. Outstanding.</p>", "how_to_play":"<p>All 186 pieces need to be popped out of their frames, which can then be discarded. Follow the instructions and slowly but surely you will build this stunning, to-scale, replica model of Manchester United's iconic Old Trafford Stadium. Pieces all fit together perfectly, without any need for tools, glue or anything else!</p><p>Once completed, this intricate stadium model would take pride of place on any football fan's mantelpiece!</p>"},
			  "/products/jigraphy-football-jigsaw-map.aspx": { "game":"Jigraphy Football", "headline":"Really good service and products", "review":"My grandson, who normally cannot be torn away from the Wii and XBox, became so engrossed in both these puzzles that he completed them in one hit. The Jigraphy one is great because it's a good learning tool for geography as well as football!", "author":"M Stephen", "info":"<p>This ingenious 150 piece puzzle starts as a jigsaw. Once finished, 150 numbered footballs appear on the map, each one representing the location of the home stadium of every team in England's Premier League, Championship, League One and League Two, plus Scotland's Premier League and Championship and the top divisions in Wales, Northern Ireland and the Republic of Ireland. Each ball is coded with a border colour representing the league in which the team plays and the balls are coloured in the teams' current kit colours. Your task is simply to work out which ball represents which team on the map.</p><p><strong>All of the information is up to date for the 2014/15 season. </strong></p>", "how_to_play":"<p>This jigsaw puzzle works the same way as any other regular jigsaw, except that when the puzzle is complete, the fun is just beginning!</p><p>The completed jigsaw will depict a map of the UK and Ireland with 150 footballs placed on the locations of 150 English, Scottish, Welsh, Northern Irish and Irish football clubs. Your task is to work out which club is represented by which ball. Colour-coded clues are provided to help you to identify each club, as well as a list of all 150 clubs that are featured.</p>"},
			  "/products/iq-block.aspx": { "game":"IQ Block", "headline":"", "review":"", "author":"", "info":"<p>A devilish little puzzle in which just eight high-quality pieces need to fit perfectly into the box. Great fun and there are more than 40 solutions too. Storage box included.</p>", "how_to_play":"<p>Remove the eight pieces from the frame. Start by placing any of the eight pieces into the frame and then see if you can find a way to fit the other seven in too. There are over 40 possible solutions. Can you find them all?</p>"},
			  "/products/silly-story-laboratory.aspx": { "game":"Silly Story Laboratory", "headline":"Excellent products", "review":"Both the \"Silly story maker\" and the \"Football team jigsaw\" were well received by my grandchildren.", "author":"Geoff Meadowcroft", "info":"<p>Each of the ten Silly Stories and two Even Sillier Stories is full of missing words - nouns, adjectives, verbs and adverbs. There are over 200 magnetic words which can be used to fill the blanks... either in a sensible way, or more likely to create hilarious silly stories! The whole game is fantastic and children will absolutely love creating their own ridiculous tales within the different story themes, whilst strengthening their understanding of words and how they are used to build sentences and stories...</p>", "how_to_play":"<p>Take all of the magnets out of the storage area at the back of the book. Then pick one of the ten stories and get creative! Each story has a number of words missing and the idea is to use the words on the magnets to fill in the blank spaces and write your own totally original version of the story. Each space is colour-coded to match the different categories of words - Verbs, Nouns, Adjectives and Adverbs.</p><p>There are 10 story templates to work with and with so many magnets to choose from, there are literally thousands of different fun and whacky stories to be written!</p>"},
			  "/products/information-overload.aspx": { "game":"Information Overload", "headline":"excellent products and service", "review":"Recently ordered overload. Looks an excellent game, high standard of material. I love all the items we have ordered from happy puzzle company. My only problem is trying not to order more!", "author":"Lizzy Day", "info":"<p>Undoubtedly the best game we have seen this year. A simple idea, ingeniously put together.</p><p>Words, letters, numbers, shapes, colours and an assortment of random objects! How much information can you absorb in a few seconds? You can look at what's in front of you, but how much detail will you actually see... and how well can you remember what was there? If you can scan everything and commit it effectively to your memory, then you'll do very well playing Information Overload. You might need some practise though!</p><p>With eight categories to choose from, round by round, you'll be confronted by images, words and numbers. In just 30 seconds, you'll need to remember as much as you can and then answer questions based on what you've seen. Beware though, the questions are clever and can easily trip you up! The winner will be the player who has recalled things most effectively and accumulated the highest number of points in the process. It's incredibly clever and a huge amount of fun. Once you start playing, you won't want to stop! A junior version of the game is included.</p>", "how_to_play":"<p>This fabulous game is for 2-4 players. Start by shuffling each set of category cards and placing them face down, along with the eight question cards.</p><p>On each turn, one player spins the wheel and rolls the die to determine the category and number of picture cards to be used. Players then have 30 seconds to study the pictures. The spinner then rolls an eight-sided die to determine which question they will answer about the pictures they have studied. A correct answer will earn them a token, which they can either keep, or gamble and try to win a second token, with the risk of losing their first!</p><p>The winner is the person who accumulates the most tokens by the end of the game!</p><p>Instructions for a simpler version of the game are included too, for younger players.</p>"},
			  "/products/squigz-24-piece.aspx": { "game":"Squigz – 24", "headline":"Great place to buy interesting toys", "review":"Bought some map jigsaws, origami dinosaur and squigz. All as described and (with one exception) delivered promptly. The exception was an error on their part which was quickly rectified so all presents arrived in time for Christmas", "author":"Leo Doyle", "info":"<p>We have never seen anything quite like Squigz before and they have just won a major award in the USA.</p><p>Apply pressure to any 2 Squigz. The air rushes out and the fun rushes in (possibly the most fun we have ever had).</p><p>Made from high-quality silicone and fully washable, they connect to each other and to any solid, non-porous surface. The flex and they stick. They suck people into creativity - it's what we call \"suction construction\".</p><p>There are 8 different types of Squigz in various quantities within each set.</p><p>Squigz are scientific sorts - always up for playful experimentation and defying gravity - sticking to the walls, windows, school lockers, tabletops, and desktops - and they don't leave marks either. They're therapeutic as well.</p><p>This remarkable invention in something really special!</p>", "how_to_play":"<p>There are no rules with Squigz... just open them up and play! Create towers, bridges, animals or anything you fancy! Squigz pop together and apart so simply, and yet they stay together so securely.</p><p>The possibilities are literally endless so let your imagination run wild!</p>"},
			  "/products/squigz-50-piece.aspx": { "game":"Squigz – 50", "headline":"Great place to buy interesting toys", "review":"Bought some map jigsaws, origami dinosaur and squigz. All as described and (with one exception) delivered promptly. The exception was an error on their part which was quickly rectified so all presents arrived in time for Christmas", "author":"Leo Doyle", "info":"<p>We have never seen anything quite like Squigz before and they have just won a major award in the USA.</p><p>Apply pressure to any 2 Squigz. The air rushes out and the fun rushes in (possibly the most fun we have ever had).</p><p>Made from high-quality silicone and fully washable, they connect to each other and to any solid, non-porous surface. The flex and they stick. They suck people into creativity - it's what we call \"suction construction\".</p><p>There are 8 different types of Squigz in various quantities within each set.</p><p>Squigz are scientific sorts - always up for playful experimentation and defying gravity - sticking to the walls, windows, school lockers, tabletops, and desktops - and they don't leave marks either. They're therapeutic as well.</p><p>This remarkable invention in something really special!</p>", "how_to_play":"<p>There are no rules with Squigz... just open them up and play! Create towers, bridges, animals or anything you fancy! Squigz pop together and apart so simply, and yet they stay together so securely.</p><p>The possibilities are literally endless so let your imagination run wild!</p>"},
			  "/products/soccerbrain.aspx": { "game":"Soccer Brain", "headline":"", "review":"", "author":"", "info":"<p>An outstanding new family game designed to improve a variety of Thinking Skills. The game begins with a 'cup draw' of eight teams who round by round play the quarter finals, semi-finals and final. With five minutes per half, each player moves across the board, tackling various football-related thinking challenges as they go. There are four kinds of challenge - Memory, Visual Perception, Lateral Thinking and Conundrums. If you're lucky, you'll win a penalty and have the chance to 'score from the spot'. Great fun in a game that really will improve thinking skills!</p>", "how_to_play":"<p>The aim of the game is to score as many goals as you can, by working your way across the pitch, and solving plenty of puzzles and challenges along the way!</p><p>Players spin the wheel to determine how many spaces they move their pawn and then, depending on the colour that they land on, will face a challenge from a certain category. If they correctly solve it, they get to spin again, otherwise play passes to their opponent!</p><p>A goal is scored when a player reaches the 'Go For Goal' spot and correctly completes the challenge, after which, both players return their pawns to the centre and start again!</p><p>There are yellow cards, red cards and penalties too, making this mind-bending thinking game the real deal for any football fan!</p>", "how_to_play":"<p>The aim of the game is to score as many goals as you can, by working your way across the pitch, and solving plenty of puzzles and challenges along the way!</p><p>Players spin the wheel to determine how many spaces they move their pawn and then, depending on the colour that they land on, will face a challenge from a certain category. If they correctly solve it, they get to spin again, otherwise play passes to their opponent!</p><p>A goal is scored when a player reaches the 'Go For Goal' spot and correctly completes the challenge, after which, both players return their pawns to the centre and start again!</p><p>There are yellow cards, red cards and penalties too, making this mind-bending thinking game the real deal for any football fan!</p>"},
			  "/products/thought-exchange.aspx": { "game":"Thought Exchange", "headline":"All good!", "review":"My package arrived as expected. Very well packed. All items as expected. The game \"Thought Exchange\" is very interesting.", "author":"Jill", "info":"<p>Thought Exchange is a superb game that will really challenge your thinking skills! The aim of the game is to be the first player to reach your destination solving the puzzles as you go.</p><p>Your playing piece will always be on a spot on one of the route 'lines' and each line has a category of thinking challenges associated with it. To win the game you will need to conquer the challenges on several different 'lines':</p><p><strong>On The Sequence Line</strong> - Continue or complete the sequences based on the information in front of you!</p><p><strong>On The Code Line</strong> - Crack the cryptic codes!</p><p><strong>On The Process Line</strong> - Process the information at speed and then use it to make logical deductions!</p><p><strong>On The Memory Line</strong> - Process the information... and then try and recall what you've heard!</p><p><strong>On The Perception Line</strong> - Remember what you've seen and where you've seen it!</p><p><strong>On The Lateral Line</strong> - Key your mind into the subject and name everything that you can associated with that subject!</p><p>You certainly do not need to be a genius to win the game. Rather, the challenges will really require you to think at speed!</p>", "how_to_play": "<p>The aim of Thought Exchange is to be the first to negotiate your route across the board to your final destination! Each player has their own unique journey to complete and must plot the best route, whilst remembering to change lines at least three times along the way!</p><p>Players take turns rolling the die moving the relevant number of spaces and each spot on the board is colour-coded to represent the type of challenge that must be tackled there. There are 'Risk It' spots along the way where you have the chance to turn over a 'Risk It' card but be careful as each card could work to your advantage or to the benefit or your opponents!</p><p>The winner is the first person to reach their correct destination spot and solve one final challenge, having remembered, of course, to change lines at least three times!</p>"},
			  "/products/scratchidoodles.aspx": { "game":"Scratchidoodles", "headline":"", "review":"", "author":"", "info":"<p><strong>They're scratchable, colourful and designable!</strong></p><p>ScratchiDoodles are hands-on foam shapes with sticky sides. Place the colourful foil sheets onto each section, remove the sheet and the bright shiny colours remain behind. This set contains hundreds of ScratchiDoodles to design with themes that will appeal to both girls and boys. 40 colourful foil sheets are included plus the special ScrachiDoodles design tool, giant ScratchiDoodles fridge magnets and badges and a door hanger to design. Hours of fun with no mess!</p>", "how_to_play":"<p>This is one of those creative activities that is so simple and quick to get the hang of and, in no time, your children will be producing beautiful designs that they'll be so proud of!</p><p>Simply choose one of the stickers that you'd like to work with and peel off the section that you'd like to colour. Place the coloured foil sheet on the exposed area, gently press it down and then remove it and there you have it - a colour explosion!</p><p>The children will love making these stickers and the huge variety of designs and colours will keep them occupied for hours. </p><p>Plain fridge magnets, badges and door hangers are provided for the children to design, decorate and share!</p>"},
			  "/products/thinking-dice.aspx": { "game":"Thinking Dice", "headline":"", "review":"", "author":"", "info":"<p>Thinking Dice are a fun way of improving children's thinking skills and they can easily be adapted for a wide age range. The set includes six large, colour-coded foam dice which use different types of thinking to encourage children to engage in higher order thinking and questioning: These are; remembering and recalling information, understanding ideas and concepts, applying information, analysing information in order to explore and understand relationships, evaluating situations and creativity. There are almost endless applications for the Thinking Dice!</p>", "how_to_play":"<p>Roll a die and away you go! Each die has an open-ended question on each side, which will inspire the child to think, question and explore without boundaries.</p><p>It's an ideal activity for two people to enjoy together and works especially well when played by a child together with their parent. There are no rules and no specified ending time. Keep going for as long as you like. This is the sort of learning aid that you will be sure to return to again and again!</p>"},
			  "/products/teeter-popper-blue.aspx": { "game":"Teeter Poppers – Blue", "headline":"", "review":"", "author":"", "info":"<p>This bizarre, yet brilliant creation is the therapeutic equivalent of sitting on a giant never-ending bubble wrap. Sit, kneel or balance on the Teeter Popper and move back and forth or from side to side. The suction from the poppers grips and releases as you move creating a satisfying popping sensation. A superb therapy tool to help children relax, and equally good for developing gross motor skills.</p>", "how_to_play":"<p>Sit in it, kneel on it or rock from side to side. You cannot understand the incredible sensation of using a Teeter Popper until you have tried one.</p><p>There are no rules and no end to the ways that we have seen Teeter Poppers used. Every movement that you make with your Teeter Popper will create infectious and relaxing popping sounds that will make you never want to put it down!</p><p>Can be used for fun, relaxation or as a therapeutic tool!</p>"},
			  "/products/teeter-popper-green.aspx": { "game":"Teeter Poppers – Green", "headline":"", "review":"", "author":"", "info":"<p>This bizarre, yet brilliant creation is the therapeutic equivalent of sitting on a giant never-ending bubble wrap. Sit, kneel or balance on the Teeter Popper and move back and forth or from side to side. The suction from the poppers grips and releases as you move creating a satisfying popping sensation. A superb therapy tool to help children relax, and equally good for developing gross motor skills.</p>", "how_to_play":"<p>Sit in it, kneel on it or rock from side to side. You cannot understand the incredible sensation of using a Teeter Popper until you have tried one.</p><p>There are no rules and no end to the ways that we have seen Teeter Poppers used. Every movement that you make with your Teeter Popper will create infectious and relaxing popping sounds that will make you never want to put it down!</p><p>Can be used for fun, relaxation or as a therapeutic tool!</p>"},
			  "/products/teeter-popper-pink.aspx": { "game":"Teeter Poppers – Pink", "headline":"", "review":"", "author":"", "info":"<p>This bizarre, yet brilliant creation is the therapeutic equivalent of sitting on a giant never-ending bubble wrap. Sit, kneel or balance on the Teeter Popper and move back and forth or from side to side. The suction from the poppers grips and releases as you move creating a satisfying popping sensation. A superb therapy tool to help children relax, and equally good for developing gross motor skills.</p>", "how_to_play":"<p>Sit in it, kneel on it or rock from side to side. You cannot understand the incredible sensation of using a Teeter Popper until you have tried one.</p><p>There are no rules and no end to the ways that we have seen Teeter Poppers used. Every movement that you make with your Teeter Popper will create infectious and relaxing popping sounds that will make you never want to put it down!</p><p>Can be used for fun, relaxation or as a therapeutic tool!</p>"},
			  "/products/laser-maze.aspx": { "game":"Laser Maze", "headline":"Laser Maze An ideal present for all ages", "review":"This box was received with minimum delay, and when opened as a Christmas Present has given a number of hours of enjoyment and thought stimulation to both our Grandson, Father, and Granddad. Great results from a quite small box!", "author":"Eileen Thompson", "info":"<p>This astonishing new puzzle set comes from the makers of 'Rush Hour' and is one of the cleverest challenges we have ever seen. 60 multi-level puzzles, in which the aim is always to work out how to position the pieces so that when you shoot the laser beam it bounces off the designated mirrors and beam splitters, changing direction across the maze until it hits its target. This is not just a set of puzzles, it's real-life science! Absolutely awesome. Batteries included.</p>", "how_to_play":"<p>Work your way through the 60 challenges one by one - they get progressively harder. Each numbered card tells you how to arrange the board and which pieces may be used in that challenge. Your job is then to use the specified pieces to find a way to direct the laser to its target.</p><p>There are mirrors, beam-splitters, blockers and more, making this an ingenious activity that will help to develop skills in logic and strategy.</p>"}
			}
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-tabs ul {\
		list-style-type: none;\
		padding-left: 10px;\
	}\
	#AWA-tabs ul li {\
		display: inline-block;\
		float: left;\
	}\
	#AWA-tabs ul li a {\
		padding: 10px;\
		border: solid 1px darkgrey;\
	}\
	#AWA-tabs ul #AWA-how-to-play-tab a {\
		border-left: none;\
	}\
	#AWA-tabs ul #AWA-how-to-play-tab a, #AWA-tabs ul #AWA-information-tab a {\
		background-color: #EAF3F7;\
	}\
	.AWA-active {\
		background-color: white !important;\
		border-bottom: 0 !important;\
	}\
	#AWA-information, #AWA-how-to-play {\
		margin-top: 10px;\
		border: solid 1px darkgrey;\
		padding: 5px;\
	}\
	#AWA-how-to-play p {\
		margin-bottom: 10px;\
		margin-top: 10px;\
	}';


	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    // Add tabs to DOM
	    $(".main_product_details_border").after(exp.vars.tabs);

	    // Insert product info into tabs
	    var productInfo = $("table[summary='Product details container']").last();
	    $("#AWA-information").append(productInfo);

	    // Move Add to basket button outside of tabs
	    var basketButton = $("#AWA-information").find("td").first();
	    basketButton.remove();
	    $("#AWA-tabs").before("<div id='AWA-basket'>" + basketButton.html() + "</div>");

	    // Tab functionality
	    $("#AWA-how-to-play").hide();
	    $("#AWA-information-tab a").addClass("AWA-active");

	    $("#AWA-information-tab a").click(function(e) {
	    	e.preventDefault();
	    	$("#AWA-how-to-play-tab a").removeClass("AWA-active");
	    	$("#AWA-information-tab a").addClass("AWA-active");
	    	$("#AWA-information").show();
	    	$("#AWA-how-to-play").hide();
	    });
	    $("#AWA-how-to-play-tab a").click(function(e) {
	    	e.preventDefault();
	    	$("#AWA-information-tab a").removeClass("AWA-active");
	    	$("#AWA-how-to-play-tab a").addClass("AWA-active");
	    	$("#AWA-information").hide();
	    	$("#AWA-how-to-play").show();
	    });

	    // Insert new Product Information text
	    var product = window.location.pathname.toLowerCase(); // If toLowerCase() is not called then mobile browsers and destop browsers will have a different value since some use uppercase and others use lower case

	    // Determine if product description includes a video
	    var video = $("#ctl00_cphInnerMaster_tdProductInformation").find("object").parent();
	    if (video.length) {
	    	video.detach(); // IE needs the detach method, otherwise it won't save the video object
	    }

	    // Replace old product description with new one
	    if (product == "/products/teeter-popper-pink.aspx") { // Special case for this product since it is in preorder
	    	exp.log("Preorder product - not inserting new product description");
	    } else {
	    	$("#ctl00_cphInnerMaster_tdProductInformation").html(exp.vars.data[product]["info"]);
	    }

	    $("#ctl00_cphInnerMaster_tdProductInformation").find("p").attr('style', 'margin-bottom: 10px');

	    // If a video exists, then add it back on to the end
	    if (video.length) {
	    	$("#ctl00_cphInnerMaster_tdProductInformation").append(video);
	    }


	    // Insert How to play text
	    $("#AWA-how-to-play").html(exp.vars.data[product]["how_to_play"]);

	    // Chagne review
	    var reviewAnchor = $(".product_detail_titles:contains('Customer reviews')").parent();

	    // Ensure that review is always five stars
	    reviewAnchor.find('img').attr('src', '/images/products/trustpilot-five-stars.png');

	    // Change review title
	    if (exp.vars.data[product]["headline"]) {
	    	reviewAnchor.find('strong').text(exp.vars.data[product]["headline"]);
	    }

	    // Change review body
	    var reviewBody = reviewAnchor.find('strong').parent().next();
	    if (exp.vars.data[product]["review"]) {
	    	reviewBody.html(exp.vars.data[product]["review"]);
	    }

	    // Add review author
	    var readMoreLink = reviewAnchor.find('p:contains("Click here to read more customer reviews")');
	    if (exp.vars.data[product]["author"]) {
	    	readMoreLink.before($("<br><p>-" + exp.vars.data[product]["author"] + "</p><br>"));
	    }
	    
	    // Change exclusivity message
	    $("strong:contains('Available exclusively from the Happy Puzzle Company')").text("Exclusive to the Happy Puzzle Company");

	    // Change ages text
	    $(".product_info:contains('Suitable for ages:')").text("Ages:");



	};

	// Run the experiment
	//setTimeout(function() {
		exp.init();
	//}, 1000)


	

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
