if(typeof $ !== 'function') {
    $ = window.jQuery;
}

var fandata = {
  "Tau": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Included", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"Y", "Speeds":6, "Size":"50\"/1270CM", "Warranty":"15 YEARS", "Bulb Type":"1 x 10w GX53", "Notes":""},
  "Zeta": { "Flush Mount":"Y", "Drop Mount":"", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"", "Low Energy Motor":"Y", "Speeds":6, "Size":"52\"/1320CM", "Warranty":"15 YEARS", "Bulb Type":"1 x 60w G9", "Notes":""},
  "Delta": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"Y", "Speeds":6, "Size":"52\"/1320cm or 44\"/1120cm", "Warranty":"15 YEARS", "Bulb Type":"2 x G9", "Notes":"can be fitted flush if a flush mount kit is purchased"},
  "Blade": { "Flush Mount":"Y", "Drop Mount":"", "Dual Mount":"", "Remote Control":"Included", "Light":"NO", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070CM", "Warranty":"15 YEARS", "Bulb Type":"", "Notes":""},
  "Omega": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"Y", "Speeds":6, "Size":"52\"/1320cm or 44\"/1120cm", "Warranty":"", "Bulb Type":"2 X G9", "Notes":"can be fitted flush if a flush mount kit is purchased"},
  "Viper Plus": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"", "Speeds":3, "Size":"54\"/1370cm or 44\"/1120cm", "Warranty":"15 YEARS", "Bulb Type":"2 X G9", "Notes":"can be fitted flush if a flush mount kit is purchased"},
  "Splash": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"", "Speeds":3, "Size":"36\"/914cm", "Warranty":"15 YEARS", "Bulb Type":"7 x 1w LED", "Notes":""},
  "Viper": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"", "Speeds":3, "Size":"54\"/1370cm or 44\"/1120cm", "Warranty":"10 YEARS", "Bulb Type":"2 X G9", "Notes":"can be fitted flush if a flush mount kit is purchased"},
  "Sigma": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"10 YEARS", "Bulb Type":"2 x 502 G9", "Notes":""},
  "Propeller": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"54\"/1370cm or 44\"/1120cm", "Warranty":"10 YEARS", "Bulb Type":"1 x 60w G9", "Notes":""},
  "Orion": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"44\"/1120cm", "Warranty":"10 YEARS", "Bulb Type":"1 x 100w J-Type 78mm Halogen", "Notes":""},
  "Phoenix": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"10 YEARS", "Bulb Type":"2 x G9", "Notes":""},
  "Spinnaker": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"52\"/1320cm or 40\"/1020cm", "Warranty":"10 YEARS", "Bulb Type":"3 x G9", "Notes":""},
  "Gemini": { "Flush Mount":"Y", "Drop Mount":"", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"10 YEARS", "Bulb Type":"3 x GU10", "Notes":"can be fitted with a drop rod if a conversion kit is purchased"},
  "Medina": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Compatible", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"52\"/1320cm", "Warranty":"10 YEARS", "Bulb Type":"", "Notes":"this fan is IP rated which means it can be fitted outdoors"},
  "Palm": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"52\"/1320cm", "Warranty":"10 YEARS", "Bulb Type":"2 60w ES", "Notes":"this fan is IP rated which means it can be fitted outdoors"},
  "Wicker": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Compatible", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"48\"/1220cm", "Warranty":"10 YEARS", "Bulb Type":"", "Notes":"this fan is IP rated which means it can be fitted outdoors"},
  "Trinity": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"44\"/1120cm", "Warranty":"10 YEARS", "Bulb Type":"1 x 100w J-Type 78mm Halogen", "Notes":""},
  "Amalfi": { "Flush Mount":"Y", "Drop Mount":"", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"36\"/914cm", "Warranty":"10 YEARS", "Bulb Type":"3 x 60w G9", "Notes":"can be fitted with a drop rod if a conversion kit is purchased"},
  "Riviera": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Compatible", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"52\"/1320CM", "Warranty":"10 YEARS", "Bulb Type":"", "Notes":""},
  "Classic": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Compatible", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"52\"/1320CM", "Warranty":"10 YEARS", "Bulb Type":"", "Notes":""},
  "Vienna": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"10 YEARS", "Bulb Type":"3 x 60w BC or 3 x G9", "Notes":"comes with an 18\" drop rod but can be fitted with shorter/longer rods"},
  "Mayfair": { "Flush Mount":"Y", "Drop Mount":"", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"10 YEARS", "Bulb Type":"3 x G9", "Notes":"can be fitted with a drop rod if a conversion kit is purchased"},
  "Capri": { "Flush Mount":"Y", "Drop Mount":"", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"36\"/914cm", "Warranty":"10 YEARS", "Bulb Type":"3 x 60w BC  ", "Notes":"can be fitted with a drop rod if a conversion kit is purchased"},
  "Vento Hurricane": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"NO", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"54\"/1370cm", "Warranty":"10 YEARS", "Bulb Type":"", "Notes":""},
  "Neptune": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Included", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"52\"/ 1320cm or44”/1120cm", "Warranty":"5 YEARS", "Bulb Type":"2 x G9", "Notes":""},
  "Genoa": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"5 YEARS", "Bulb Type":"3 x G9", "Notes":""},
  "Belaire": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"5 YEARS", "Bulb Type":"3 x 60w BC  ", "Notes":""},
  "Bali": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"5 YEARS", "Bulb Type":"3 x GU10", "Notes":""},
  "Scorpion": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"5 YEARS", "Bulb Type":"3 x 60w E14", "Notes":""},
  "Rio": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm or 36\"/914cm", "Warranty":"5 YEARS", "Bulb Type":"3 x 60w E14", "Notes":""},
  "Atlanta": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"30\"/762cm", "Warranty":"5 YEARS", "Bulb Type":"1 x E14", "Notes":""},
  "Rimini": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm or 36\"/914cm", "Warranty":"5 YEARS", "Bulb Type":"1 x B22 Golf", "Notes":""},
  "Commercial": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"No remote control", "Light":"NO", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"", "Warranty":"2 YEARS", "Bulb Type":"", "Notes":""}
};

var classifications = ["Tau", "Zeta", "Delta", "Blade", "Omega", "Viper Plus", "Splash", "Sigma", "Propeller", "Orion", "Phoenix", "Spinnaker", "Gemini", "Medina", "Palm", "Wicker", "Trinity", "Amalfi", "Riviera", "Classic", "Vienna", "Mayfair", "Capri", "Vento Hurricane", "Neptune", "Genoa", "Belaire", "Bali", "Scorpion", "Rio", "Atlanta", "Rimini", "Commercial"];
var fanCategory;
var newFanData = {};

var fanTitle = $('.BlockContent').find('h2').text();

function populateFeatures() {
    newFanData.energySaving = fandata[fanCategory]["Low Energy Motor"];
    newFanData.speeds = fandata[fanCategory]["Speeds"];
    newFanData.size = fandata[fanCategory]["Size"];
    newFanData.warranty = fandata[fanCategory]["Warranty"];
    newFanData.remote = fandata[fanCategory]["Remote Control"];
    newFanData.LED = fandata[fanCategory]["LED Option"];
    newFanData.flush = fandata[fanCategory]["Flush Mount"];
    newFanData.drop = fandata[fanCategory]["Drop Mount"];
    newFanData.dual = fandata[fanCategory]["Dual Mount"];
    newFanData.bulb = fandata[fanCategory]["Bulb Type"];

    if (fanTitle.toLowerCase().indexOf("with light") != -1) {
        newFanData.light = "With light";
    } else {
        newFanData.light = "Light Compatible";
    }

    var newList = "<ul class='AWA-newList'>";

    if (newFanData.light) {
        newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>" + newFanData.light + "</span></li>";
    }
    if (newFanData.remote) {
        newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>Remote " + newFanData.remote + "</span></li>";
    }
    if (newFanData.energySaving) {
        newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>Low Energy</span></li>";
    }
    if (newFanData.speeds) {
        newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>" + newFanData.speeds + " Speeds</span></li>";
    }
    if (newFanData.size) {
        newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>Size: " + newFanData.size + "</span></li>";
    }
    if (newFanData.warranty) {
        newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>Warranty: " + newFanData.warranty.toLowerCase() + "</span></li>";
    }
    if (newFanData.light && newFanData.light == "With light") {
        if (newFanData.LED && newFanData.LED == "Y") {
            newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>LED Option</span></li>";
        }
    }
    if (fanCategory == "Medina" || fanCategory == "Palm" || fanCategory == "Wicker") {
        newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>IP Rated for Outdoor Use</span></li>";
    }

    newList += "</ul>";
    $('#Wrapper').prepend(newList);

    if ($('.AWA-newList li').length == 5) {
        $('.AWA-newList li').attr('style', 'margin-right: 33px; font-size: .95em;');
    } else if ($('.AWA-newList li').length >= 6) {
        $('.AWA-newList li').attr('style', 'margin-right: 11px; font-size: .84em;');
    }

}

for (var i = 0; i < classifications.length; i++) {
    if (fanTitle.indexOf(classifications[i]) != -1) {
        fanCategory = classifications[i];
        populateFeatures();
    }
}