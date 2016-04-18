/* CUSTOM JS TARGETING OF MUTUALLY EXCLUSIVE EXPERIMENTS
 *
 * Traffic allocation weighting is confined to the context of each 
 * individual experiment. In other words, each experiment has an 
 * equal chance of bucketing the visitor, regardless of if the 
 * chosen experiment has a large exclusion percentage due to 
 * traffic allocation.
 */

expArray=[experimentId1,experimentId2,experimentId3];              
 /* If left empty by changing this line to "expArray = []", all active experiments from the project will 
 * be used - this will update every time the snippet runs & 
 * experiments are started & paused. */

curExperiment = experimentId1;
/* [curExperiment] - Set the id for the current experiment being 
 * evaluated */

groupName = "groupA";
/* [groupName] - Optional. Needed if excluding multiple groupings */

chooseRandom = 1;
/* 1 - YES - if no match is found pick at random from expArray
 * 0 - NO - if no match is found, pick this experiment */

logging = 0;
/* 1 - YES   0 - NO */

/*--  Do not modify below this line --*/
/* Internal comments below:
 * Iterate over current bucket mappings and
 * set the global variable to the experiment
 * the user is already included in.
 */

groupName = window.groupName || "groupA";

// Safety
groupName = "__" + groupName;

if(expArray.length == 0){
   var allExp = window.optimizely.allExperiments || [];
   for (key in allExp) {
      if (allExp.hasOwnProperty(key) && allExp[key].hasOwnProperty("enabled")) {
         expArray.push(key);
      }
   }
}

var cookieMatch = document.cookie.match("optimizelyBuckets=([^;]*)");
if(cookieMatch){
    for(var key = 0; key < expArray.length; key++) {
         /* Check 3 things to find a match and break the loop:
          * 1-The experimentID is in the cookie
          * 2-The experimentID is set to enabled
          * 3-The value of the experiment's variation ID is not zero
          */
         if (cookieMatch[1].indexOf(expArray[key]) > -1 && window.optimizely.allExperiments[expArray[key]].hasOwnProperty("enabled") && decodeURIComponent(cookieMatch[1]).indexOf('"'+expArray[key]+'":"0"') < 0) {
               optimizely[groupName] = expArray[key];
               break; /* we found what we're looking for so end loop */
         }
    }
}

if(logging){
    if(optimizely[groupName]){
        console.log("Experiment " + optimizely[groupName] + " is active - No others in the array will be distributed.")
    } else{
        console.log("No active experiments. " + curExperiment + " is eligible for distribution.")
    }
}

/* If the global variable hasn't been set, set it now to 
 * curExperiment or random choice from expArray.
 * To prioritize a certain experiment over another instead of 
 * random choice, change the Math.floor function.
 */

optimizely[groupName] = optimizely[groupName] || (chooseRandom ? expArray[Math.floor(Math.random()*expArray.length)] : curExperiment);

/* Check if the current experiment matches the global experiment. Return boolean */
optimizely[groupName] == curExperiment;