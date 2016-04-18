console.log('testing - 1 - with optimizely $');

console.log('testing - 2');
(function($) {
	console.log('testing - 3');

})(optimizely.$); // YOU MUST USE optimizely.$!!!

console.log('testing - end');