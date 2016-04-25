/*
// This is a collection of JavaScript code to allow easy integration of 
// postcode / address finder functionality into any website
//
// Provided by www.CraftyClicks.co.uk
//
// Version - 4.9.2 (17/05/2011)
//
// Feel free to copy/use/modify this code any way you see fit. Please keep this
// comment header in place when you do.
//
// To integrate UK postcode / address lookup on your website, please visit www.craftyclicks.co.uk for
// details of how to sign up for an account.
//
**********************************************************************************/
if(!_cp_js_included){var _cp_js_included=1;var _cp_instances=[],_cp_instance_idx=0,_cp_pl=["FLAT","SHOP","UNIT","BLOCK","STALL","SUITE","APARTMENT","MAISONETTE","HOUSE NUMBER"];function CraftyPostcodeCreate(){_cp_instance_idx++;_cp_instances[_cp_instance_idx]=new CraftyPostcodeClass();_cp_instances[_cp_instance_idx].obj_idx=_cp_instance_idx;return _cp_instances[_cp_instance_idx]}function _cp_sp(b){var d="",c;for(c=0;c<_cp_pl.length;c++){d=_cp_pl[c];if(d==b.substr(0,d.length).toUpperCase()){return(b.substr(d.length))}}return("")}function _cp_eh(a){var b="";while(b=a.shift()){if(!isNaN(parseInt(b))){return(parseInt(b))}}return""}function _cp_kp(a){var b;if(!a){a=window.event}if(a.keyCode){b=a.keyCode}else{if(a.which){b=a.which}}if(b==13){this.onclick()}}function CraftyPostcodeClass(){this.config={lookup_url:"pcls1.craftyclicks.co.uk/js/",access_token:"",basic_address:0,traditional_county:0,busy_img_url:"crafty_postcode_busy.gif",hide_result:0,org_uppercase:1,town_uppercase:1,county_uppercase:0,addr_uppercase:0,delimiter:", ",msg1:"Please wait while we find the address",err_msg1:"This postcode could not be found, please try again or enter your address manually",err_msg2:"This postcode is not valid, please try again or enter your address manually",err_msg3:"Unable to connect to address lookup server, please enter your address manually.",err_msg4:"An unexpected error occured, please enter your address manually.",res_autoselect:1,res_select_on_change:1,debug_mode:0,lookup_timeout:10000,form:"",elements:"",max_width:"400px",max_lines:1,first_res_line:"---- please select your address ----",result_elem_id:"",on_result_ready:null,on_result_selected:null,on_error:null,pre_populate_common_address_parts:0,elem_company:"crafty_out_company",elem_house_num:"",elem_street1:"crafty_out_street1",elem_street2:"crafty_out_street2",elem_street3:"crafty_out_street3",elem_town:"crafty_out_town",elem_county:"crafty_out_county",elem_postcode:"crafty_in_out_postcode",elem_udprn:"crafty_out_udprn",single_res_autoselect:0,single_res_notice:"---- address found, see below ----",elem_search_house:"crafty_in_search_house",elem_search_street:"crafty_in_search_street",elem_search_town:"crafty_in_search_town",max_results:25,err_msg5:"The house name/number could not be found, please try again.",err_msg6:"No results found, please modify your search and try again.",err_msg7:"Too many results, please modify your search and try again.",err_msg9:"Please provide more data and try again.",err_msg8:"Trial account limit reached, please use AA11AA, AA11AB, AA11AD or AA11AE."};this.xmlhttp=null;this.res_arr=null;this.disp_arr=null;this.res_arr_idx=0;this.dummy_1st_line=0;this.cc=0;this.flexi_search=0;this.lookup_timeout=null;this.obj_name="";this.house_search=0;this.set=function(a,b){this.config[a]=b};this.res_clicked=function(a){this.cc++;if(this.res_selected(a)){if(0!=this.config.hide_result&&((2>=this.config.max_lines&&1<this.cc)||(2<this.config.max_lines))){this.update_res(null);this.cc=0}}};this.res_selected=function(a){if(1==this.dummy_1st_line){if(0==a){return 0}else{a--}}a=this.disp_arr[a]["index"];this.populate_form_fields(this.res_arr[a]);if(this.config.on_result_selected){this.config.on_result_selected(a)}return 1};this.populate_form_fields=function(j){var b=[];var o=this.config.delimiter;for(var e=0;e<8;e++){b[e]=this.get_elem(e)}b[11]=this.get_elem(11);if(b[11]){b[11].value=j.udprn}if(b[0]){if(b[0]==b[1]&&""!=j.org){b[1].value=j.org;b[1]=b[2];b[2]=b[3];b[3]=null}else{b[0].value=j.org}}var n=j.housename2;if(""!=n&&""!=j.housename1){n+=o}n+=j.housename1;var k=j.housenumber;if(b[7]){b[7].value=n;if(""!=n&&""!=k){b[7].value+=o}b[7].value+=k;n="";k=""}var d=j.street1;var c=j.street2;if(""!=k){if(""!=c){c=k+" "+c}else{if(""!=d){d=k+" "+d}else{d=k}}}var g=c+(c==""?"":(d==""?"":o))+d;var m=j.locality_dep;var h=j.locality;if(""!=g&&parseInt(g)==g){if(""!=m){m=parseInt(g)+" "+m}else{h=parseInt(g)+" "+h}g="";d=""}var f=m+(m==""||h==""?"":o)+h;var a=g+(g==""||f==""?"":o)+f;if(b[1]&&b[2]&&b[3]){if(""!=j.pobox||""!=n){if(""!=j.pobox){b[1].value=j.pobox}else{b[1].value=n}if(""==f){if(""==c){b[2].value=d;b[3].value=""}else{b[2].value=c;b[3].value=d}}else{if(""==g){if(""==m){b[2].value=h;b[3].value=""}else{b[2].value=m;b[3].value=h}}else{b[2].value=g;b[3].value=f}}}else{if(""==g){if(""==m){b[1].value=h;b[2].value="";b[3].value=""}else{b[1].value=m;b[2].value=h;b[3].value=""}}else{if(""==f){if(""==c){b[1].value=d;b[2].value="";b[3].value=""}else{b[1].value=c;b[2].value=d;b[3].value=""}}else{if(""==c){b[1].value=d;if(""==m){b[2].value=h;b[3].value=""}else{b[2].value=m;b[3].value=h}}else{if(""==m){b[1].value=c;b[2].value=d;b[3].value=h}else{if(g.length<f.length){b[1].value=g;b[2].value=m;b[3].value=h}else{b[1].value=c;b[2].value=d;b[3].value=f}}}}}}}else{if(b[1]&&b[2]){if(""!=j.pobox){b[1].value=j.pobox;b[2].value=a}else{if(""!=n&&""!=g&&""!=f){if((n.length+g.length)<(g.length+f.length)){b[1].value=n+(n==""?"":o)+g;b[2].value=f}else{b[1].value=n;b[2].value=g+(g==""?"":o)+f}}else{if(""!=n&&""!=g){b[1].value=n;b[2].value=g}else{if(""==n&&""!=g){if(""==f){if(""!=c){b[1].value=c;b[2].value=d}else{b[1].value=g;b[2].value=""}}else{b[1].value=g;b[2].value=f}}else{if(""==g&&""!=n){b[1].value=n;b[2].value=f}else{b[1].value=f;b[2].value=""}}}}}}else{var l;if(b[1]){l=b[1]}else{if(b[2]){l=b[2]}else{l=b[3]}}if(""!=j.pobox){l.value=j.pobox+o+f}else{l.value=n+(n==""||a==""?"":o)+a}}}if(b[4]){b[4].value=j.town}if(b[5]){b[5].value=j.county}if(b[6]){b[6].value=j.postcode}return 1};this.show_busy=function(){var b=document.createElement("img");var a=document.createAttribute("src");a.value=this.config.busy_img_url;b.setAttributeNode(a);a=document.createAttribute("title");a.value=this.config.msg1;b.setAttributeNode(a);this.update_res(b)};this.disp_err=function(d,b){var a=null;var e="";if(""!=d){switch(d){case"0001":e=this.config.err_msg1;break;case"0002":e=this.config.err_msg2;break;case"9001":e=this.config.err_msg3;break;case"0003":e=this.config.err_msg9;break;case"0004":e=this.config.err_msg6;break;case"0005":e=this.config.err_msg7;break;case"7001":e=this.config.err_msg8;break;default:e="("+d+") "+this.config.err_msg4;break}if(this.config.debug_mode){var c="";switch(d){case"8000":c=" :: No Access Token ";break;case"8001":c=" :: Invalid Token Format ";break;case"8002":c=" :: Invalid Token ";break;case"8003":c=" :: Out of Credits ";break;case"8004":c=" :: Restricted by rules ";break;case"8005":c=" :: Token suspended ";break}e+=c+" :: DBG :: "+b}a=document.createTextNode(e)}this.update_res(a);if(this.config.on_error){this.config.on_error(e)}};this.disp_err_msg=function(b){var a=null;if(""!=b){a=document.createTextNode(b)}this.update_res(a);if(this.config.on_error){this.config.on_error(b)}};this.display_res_line=function(d,c){var b=document.getElementById("crafty_postcode_lookup_result_option"+this.obj_idx);var e=document.createElement("option");e.appendChild(document.createTextNode(d));if(null!=b){b.appendChild(e)}else{var a=document.createElement("select");a.id="crafty_postcode_lookup_result_option"+this.obj_idx;a.onclick=Function("_cp_instances["+this.obj_idx+"].res_clicked(this.selectedIndex);");a.onkeypress=_cp_kp;if(0!=this.config.res_select_on_change){a.onchange=Function("_cp_instances["+this.obj_idx+"].res_selected(this.selectedIndex);")}if(this.config.max_width&&""!=this.config.max_width){a.style.width=this.config.max_width}var f=this.res_arr_idx;if(1==this.dummy_1st_line){f++}if((navigator.appName=="Microsoft Internet Explorer")&&(parseFloat(navigator.appVersion)<=4)){a.size=0}else{if(f>=this.config.max_lines){a.size=this.config.max_lines}else{a.size=f}}a.appendChild(e);this.update_res(a)}};this.update_res=function(a){if(this.lookup_timeout){clearTimeout(this.lookup_timeout)}try{if(document.getElementById){var b=document.getElementById(this.config.result_elem_id);if(b.hasChildNodes()){while(b.firstChild){b.removeChild(b.firstChild)}}if(null!=a){b.appendChild(a)}}}catch(c){}};this.str_trim=function(b){var a=0;var c=b.length-1;while(a<b.length&&b[a]==" "){a++}while(c>a&&b[c]==" "){c-=1}return b.substring(a,c+1)};this.cp_uc=function(e){if("PC"==e||"UK"==e||"EU"==e){return(e)}var d="ABCDEFGHIJKLMNOPQRSTUVWXYZ";var c="";var f=1;var b=0;for(var a=0;a<e.length;a++){if(-1!=d.indexOf(e.charAt(a))){if(f||b){c=c+e.charAt(a);f=0}else{c=c+e.charAt(a).toLowerCase()}}else{c=c+e.charAt(a);if(a+2>=e.length&&"'"==e.charAt(a)){f=0}else{if("("==e.charAt(a)){close_idx=e.indexOf(")",a+1);if(a+3<close_idx){b=0;f=1}else{b=1}}else{if(")"==e.charAt(a)){b=0;f=1}else{if("-"==e.charAt(a)){close_idx=e.indexOf("-",a+1);if((-1!=close_idx&&a+3>=close_idx)||a+3>=e.length){b=0;f=0}else{b=0;f=1}}else{if(a+2<e.length&&"0"<=e.charAt(a)&&"9">=e.charAt(a)){f=0}else{f=1}}}}}}}return(c)};this.leading_caps=function(a,b){if(0!=b||2>a.length){return(a)}var d="";var f=a.split(" ");for(var c=0;c<f.length;c++){var e=this.str_trim(f[c]);if(""!=e){if(""!=d){d=d+" "}d=d+this.cp_uc(e)}}return(d)};this.new_res_line=function(){var a=[];a.org="";a.housename1="";a.housename2="";a.pobox="";a.housenumber="";a.street1="";a.street2="";a.locality_dep="";a.locality="";a.town="";a.county="";a.postcode="";a.udprn="";return(a)};this.res_arr_compare=function(e,c){if(e.match_quality>c.match_quality){return(1)}if(e.match_quality<c.match_quality){return(-1)}if(e.street1>c.street1){return(1)}if(e.street1<c.street1){return(-1)}if(e.street2>c.street2){return(1)}if(e.street2<c.street2){return(-1)}var h;if(""==e.housenumber){h=_cp_eh(Array(e.housename1,e.housename2))}else{h=parseInt(e.housenumber)}var g;if(""==c.housenumber){g=_cp_eh(Array(c.housename1,c.housename2))}else{g=parseInt(c.housenumber)}if(""==h&&""!=g){return(1)}else{if(""!=h&&""==g){return(-1)}else{if(h>g){return(1)}if(h<g){return(-1)}}}var f=_cp_sp(e.housename1);if(!isNaN(parseInt(f))){f=parseInt(f)}var d=_cp_sp(c.housename1);if(!isNaN(parseInt(d))){d=parseInt(d)}if(f>d){return(1)}if(f<d){return(-1)}var f=_cp_sp(e.housename2);if(!isNaN(parseInt(f))){f=parseInt(f)}var d=_cp_sp(c.housename2);if(!isNaN(parseInt(d))){d=parseInt(d)}if(f>d){return(1)}if(f<d){return(-1)}f=e.housename2+e.housename1;d=c.housename2+c.housename1;if(f>d){return(1)}if(f<d){return(-1)}if(e.org>c.org){return(1)}if(e.org<c.org){return(-1)}return(1)};this.disp_res_arr=function(){this.res_arr=this.res_arr.sort(this.res_arr_compare);if(0!=this.config.res_autoselect){this.populate_form_fields(this.res_arr[0])}var a=this.config.delimiter;this.disp_arr=[];for(var c=0;c<this.res_arr_idx;c++){var e=this.res_arr[c];var b=e.org+(e.org!=""?a:"")+e.housename2+(e.housename2!=""?a:"")+e.housename1+(e.housename1!=""?a:"")+e.pobox+(e.pobox!=""?a:"")+e.housenumber+(e.housenumber!=""?" ":"")+e.street2+(e.street2!=""?a:"")+e.street1+(e.street1!=""?a:"")+e.locality_dep+(e.locality_dep!=""?a:"")+e.locality+(e.locality!=""?a:"")+e.town;if(this.flexi_search){b+=a+e.postcode}var d=[];d.index=c;d.str=b;this.disp_arr[c]=d}this.dummy_1st_line=0;if(""!=this.config.first_res_line){this.dummy_1st_line=1;this.display_res_line(this.config.first_res_line,-1)}for(var c=0;c<this.res_arr_idx;c++){this.display_res_line(this.disp_arr[c]["str"],c)}if(this.config.pre_populate_common_address_parts){var f=this.new_res_line();f.org=this.res_arr[0]["org"];f.housename1=this.res_arr[0]["housename1"];f.housename2=this.res_arr[0]["housename2"];f.pobox=this.res_arr[0]["pobox"];f.housenumber=this.res_arr[0]["housenumber"];f.street1=this.res_arr[0]["street1"];f.street2=this.res_arr[0]["street2"];f.locality_dep=this.res_arr[0]["locality_dep"];f.locality=this.res_arr[0]["locality"];f.town=this.res_arr[0]["town"];f.county=this.res_arr[0]["county"];f.postcode=this.res_arr[0]["postcode"];f.udprn=this.res_arr[0]["udprn"];for(var c=1;c<this.res_arr_idx;c++){if(this.res_arr[c]["org"]!=f.org){f.org=""}if(this.res_arr[c]["housename2"]!=f.housename2){f.housename2=""}if(this.res_arr[c]["housename1"]!=f.housename1){f.housename1=""}if(this.res_arr[c]["pobox"]!=f.pobox){f.pobox=""}if(this.res_arr[c]["housenumber"]!=f.housenumber){f.housenumber=""}if(this.res_arr[c]["street1"]!=f.street1){f.street1=""}if(this.res_arr[c]["street2"]!=f.street2){f.street2=""}if(this.res_arr[c]["locality_dep"]!=f.locality_dep){f.locality_dep=""}if(this.res_arr[c]["locality"]!=f.locality){f.locality=""}if(this.res_arr[c]["town"]!=f.town){f.town=""}if(this.res_arr[c]["county"]!=f.county){f.county=""}if(this.res_arr[c]["postcode"]!=f.postcode){f.postcode=""}if(this.res_arr[c]["udprn"]!=f.udprn){f.udprn=""}}this.populate_form_fields(f)}};this.get_elem=function(a){var d="";var c=null;if(""!=this.config.elements){var b=this.config.elements.split(",");d=b[a]}else{switch(a){case 0:d=this.config.elem_company;break;case 1:d=this.config.elem_street1;break;case 2:d=this.config.elem_street2;break;case 3:d=this.config.elem_street3;break;case 4:d=this.config.elem_town;break;case 5:d=this.config.elem_county;break;case 6:default:d=this.config.elem_postcode;break;case 7:d=this.config.elem_house_num;break;case 8:d=this.config.elem_search_house;break;case 9:d=this.config.elem_search_street;break;case 10:d=this.config.elem_search_town;break;case 11:d=this.config.elem_udprn;break}}if(""!=d){if(""!=this.config.form){c=document.forms[this.config.form].elements[d]}else{if(document.getElementById){c=document.getElementById(d)}}}return(c)};this.doHouseSearch=function(){var a=this.get_elem(8);if(a&&0<a.value.length){this.house_search=1}this.doLookup()};this.doLookup=function(){this.xmlhttp=null;var a=this.get_elem(6);var b=null;if(a){this.show_busy();this.lookup_timeout=setTimeout("_cp_instances["+this.obj_idx+"].lookup_timeout_err()",this.config.lookup_timeout);b=this.validate_pc(a.value)}if(null!=b){this.direct_xml_fetch(0,b)}else{this.disp_err("0002","invalid postcode format")}};this.flexiSearch=function(){this.xmlhttp=null;var a="";if(this.get_elem(8)&&""!=this.get_elem(8).value){a+="&search_house="+this.get_elem(8).value}if(this.get_elem(9)&&""!=this.get_elem(9).value){a+="&search_street="+this.get_elem(9).value}if(this.get_elem(10)&&""!=this.get_elem(10).value){a+="&search_town="+this.get_elem(10).value}if(""!=a){this.show_busy();this.lookup_timeout=setTimeout("_cp_instances["+this.obj_idx+"].lookup_timeout_err()",this.config.lookup_timeout);this.direct_xml_fetch(1,a)}else{this.disp_err("0003","search string too short")}};this.validate_pc=function(c){var b="";do{b=c;c=c.replace(/[^A-Za-z0-9]/,"")}while(b!=c);b=c.toUpperCase();if(7>=b.length&&5<=b.length){var d=b.substring(b.length-3,b.length);var a=b.substring(0,b.length-3);if(true==/[CIKMOV]/.test(d)){return null}if("0"<=d.charAt(0)&&"9">=d.charAt(0)&&"A"<=d.charAt(1)&&"Z">=d.charAt(1)&&"A"<=d.charAt(2)&&"Z">=d.charAt(2)){switch(a.length){case 2:if("A"<=a.charAt(0)&&"Z">=a.charAt(0)&&"0"<=a.charAt(1)&&"9">=a.charAt(1)){return(b)}break;case 3:if("A"<=a.charAt(0)&&"Z">=a.charAt(0)){if("0"<=a.charAt(1)&&"9">=a.charAt(1)&&"0"<=a.charAt(2)&&"9">=a.charAt(2)){return(b)}else{if("A"<=a.charAt(1)&&"Z">=a.charAt(1)&&"0"<=a.charAt(2)&&"9">=a.charAt(2)){return(b)}else{if("0"<=a.charAt(1)&&"9">=a.charAt(1)&&"A"<=a.charAt(2)&&"Z">=a.charAt(2)){return(b)}}}}break;case 4:if("A"<=a.charAt(0)&&"Z">=a.charAt(0)&&"A"<=a.charAt(1)&&"Z">=a.charAt(1)&&"0"<=a.charAt(2)&&"9">=a.charAt(2)){if("0"<=a.charAt(3)&&"9">=a.charAt(3)){return(b)}else{if("A"<=a.charAt(3)&&"Z">=a.charAt(3)){return(b)}}}break;default:break}}}return null};this.direct_xml_fetch=function(d,a){try{var e=document.getElementById(this.config.result_elem_id);var b="";if("https:"==document.location.protocol){b="https://"}else{b="http://"}if(0==d){b+=this.config.lookup_url;if(this.config.basic_address){b+="basicaddress"}else{b+="rapidaddress"}b+="?postcode="+a+"&callback=_cp_instances["+this.obj_idx+"].handle_js_response&callback_id=0"}else{if(this.config.basic_address){this.disp_err("1207","BasicAddress can't be used for Flexi Search!");return}else{b+=this.config.lookup_url+"flexiaddress?callback=_cp_instances["+this.obj_idx+"].handle_js_response&callback_id=1";b+="&max_results="+this.config.max_results;b+=a}}if(""!=this.config.access_token){b+="&key="+this.config.access_token}var c=document.createElement("script");c.src=encodeURI(b);c.type="text/javascript";e.appendChild(c)}catch(f){this.disp_err("1206",f)}};this.handle_js_response=function(c,d,e){if(!d){var f=e.error_code;var a=e.error_msg;this.disp_err(f,a)}else{this.res_arr=[];this.res_arr_idx=0;if(0==c){this.flexi_search=0;if(this.house_search){e=this.filter_data_by_house_name(e);if(null==e){this.disp_err_msg(this.config.err_msg5);return}}this.add_to_res_array(e)}else{this.flexi_search=1;this.res_arr.total_postcode_count=e.total_postcode_count;this.res_arr.total_thoroughfare_count=e.total_thoroughfare_count;this.res_arr.total_delivery_point_count=e.total_delivery_point_count;for(var i=1;i<=e.total_postcode_count;i++){this.add_to_res_array(e[i])}}if(this.res_arr_idx){var b=false;if(1==this.res_arr_idx&&this.config.single_res_autoselect){var g=null;if(""!=this.config.single_res_notice){g=document.createTextNode(this.config.single_res_notice)}this.update_res(g);this.populate_form_fields(this.res_arr[0]);b=true}else{this.disp_res_arr();document.getElementById("crafty_postcode_lookup_result_option"+this.obj_idx).focus()}if(0==c&&""!=e.postcode){var h=this.get_elem(6);h.value=e.postcode}if(this.config.on_result_ready){this.config.on_result_ready()}if(b&&this.config.on_result_selected){this.config.on_result_selected(0)}}else{this.disp_err("1205","no result to display")}}};this.add_to_res_array=function(f){for(var d=1;d<=f.thoroughfare_count;d++){var e=f[d]["thoroughfare_name"];if(""!=f[d]["thoroughfare_descriptor"]){e+=" "+f[d]["thoroughfare_descriptor"]}e=this.leading_caps(e,this.config.addr_uppercase);var c=f[d]["dependent_thoroughfare_name"];if(""!=f[d]["dependent_thoroughfare_descriptor"]){c+=" "+f[d]["dependent_thoroughfare_descriptor"]}c=this.leading_caps(c,this.config.addr_uppercase);if("delivery_point_count" in f[d]&&0<f[d]["delivery_point_count"]){for(var a=1;a<=f[d]["delivery_point_count"];a++){var g=this.new_res_line();g.street1=e;g.street2=c;var b=f[d][a];if("match_quality" in b){g.match_quality=b.match_quality}else{g.match_quality=1}g.housenumber=b.building_number;g.housename2=this.leading_caps(b.sub_building_name,this.config.addr_uppercase);g.housename1=this.leading_caps(b.building_name,this.config.addr_uppercase);g.org=b.department_name;if(""!=g.org&&""!=b.organisation_name){g.org+=this.config.delimiter}g.org=this.leading_caps(g.org+b.organisation_name,this.config.org_uppercase);g.pobox=this.leading_caps(b.po_box_number,this.config.addr_uppercase);g.postcode=f.postcode;g.town=this.leading_caps(f.town,this.config.town_uppercase);g.locality=this.leading_caps(f.dependent_locality,this.config.addr_uppercase);g.locality_dep=this.leading_caps(f.double_dependent_locality,this.config.addr_uppercase);if(this.config.traditional_county){g.county=this.leading_caps(f.traditional_county,this.config.county_uppercase)}else{g.county=this.leading_caps(f.postal_county,this.config.county_uppercase)}g.udprn=b.udprn;this.res_arr[this.res_arr_idx]=g;this.res_arr_idx++}}else{var g=this.new_res_line();g.street1=e;g.street2=c;g.postcode=f.postcode;g.town=this.leading_caps(f.town,this.config.town_uppercase);g.locality=this.leading_caps(f.dependent_locality,this.config.addr_uppercase);g.locality_dep=this.leading_caps(f.double_dependent_locality,this.config.addr_uppercase);if(this.config.traditional_county){g.county=this.leading_caps(f.traditional_county,this.config.county_uppercase)}else{g.county=this.leading_caps(f.postal_county,this.config.county_uppercase)}g.match_quality=2;this.res_arr[this.res_arr_idx]=g;this.res_arr_idx++}}};this.filter_data_by_house_name=function(f){var g=this.get_elem(8);if(!g||!g.value.length){return f}var j=g.value.toUpperCase();var k=-1;if(parseInt(j)==j){k=parseInt(j)}var l=" "+j;var e=[];var i=1;var b=0;for(var c=1;c<=f.thoroughfare_count;c++){e[i]=[];b=0;for(var d=1;d<=f[c]["delivery_point_count"];d++){var h=f[c][d];var a=" "+h.sub_building_name+" "+h.building_name+" ";if(-1!=a.indexOf(l)||k==parseInt(h.building_number)){b++;e[i][b]=[];e[i][b]["building_number"]=h.building_number;e[i][b]["sub_building_name"]=h.sub_building_name;e[i][b]["building_name"]=h.building_name;e[i][b]["department_name"]=h.department_name;e[i][b]["organisation_name"]=h.organisation_name;e[i][b]["po_box_number"]=h.po_box_number;e[i][b]["udprn"]=h.udprn}}if(b){e[i]["delivery_point_count"]=b;e[i]["thoroughfare_name"]=f[c]["thoroughfare_name"];e[i]["thoroughfare_descriptor"]=f[c]["thoroughfare_descriptor"];e[i]["dependent_thoroughfare_name"]=f[c]["dependent_thoroughfare_name"];e[i]["dependent_thoroughfare_descriptor"]=f[c]["dependent_thoroughfare_descriptor"];i++}}if(1<i){e.thoroughfare_count=i-1;e.town=f.town;e.dependent_locality=f.dependent_locality;e.double_dependent_locality=f.double_dependent_locality;e.traditional_county=f.traditional_county;e.postal_county=f.postal_county;e.postcode=f.postcode;return e}return null};this.lookup_timeout_err=function(){this.disp_err("9001","Internal Timeout after "+this.config.lookup_timeout+"ms")}}};

var cp_obj = CraftyPostcodeCreate();

if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}
// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = function($) {

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
    exp.log('Checkout v2');

    
    // Condition
    // If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
    //exp.condition = $('.unique-selector');
    exp.condition = $("img[src='assets/images/payment-step1.gif']");

    // Check for a condition and return false if it has not been met
    if (exp.condition && !exp.condition.length) {
        exp.log('Checkout failed a condition');
        return false;
    }

    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    exp.vars = {
        stepRow:    "<div id='AWA-step-row' class='row'>\
                        <div class='col-sm-9'>\
                            <img id='AWA-payment-bar' src='//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/8c51c8a76fc625a11b72bb14291286da_paymentbar_copy.jpg' class='img-responsive' alt='Step 1 of 6'>\
                        </div>\
                        <div id='AWA-sp' class='col-sm-2'>\
                            <img id='AWA-sp-desktop' src='assets/images/SecuredBy.png' alt='transactions secured by Sagepay' width='100'>\
                        </div>\
                        <div class='col-sm-1'>\
                            <img id='AWA-sp-mobile' src='assets/images/SecuredBy.png' alt='transactions secured by Sagepay' width='100'>\
                            <img src='assets/images/TrustedShops-rgb-Seal_60Hpx.png' alt='Trusted Shops Guarantee'>\
                        </div>\
                    </div>",
        manual: "<div class='row'>\
                    <div id='AWA-manual' class='col-md-12'>\
                        Manually enter your address. <a href='#' id='AWA-manual-link'>Click here.</a>\
                    </div>\
                </div>"
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
    #AWA-payment-bar {\
        margin-top: 14px;\
    }\
    #AWA-sp {\
        text-align: right;\
    }\
    #AWA-sp-mobile {\
        display: none;\
    }\
    .AWA-small {\
        font-size: 12px;\
        text-align: right;\
    }\
    #crafty_postcode_result_display {\
        display: block;\
    }\
    #crafty_postcode_lookup_result_option1 {\
        margin-bottom: 15px;\
    }\
    .AWA-hidden-form {\
        display: none;\
    }\
    #AWA-manual-link {\
        color: #777;\
        text-decoration: underline;\
    }\
    #AWA-manual-link:hover {\
        text-decoration: none;\
    }\
    @media (max-width: 767px) {\
        .hero-header {\
            width: 100%;\
        }\
        #AWA-sp-mobile {\
            display: inline-block;\
        }\
        #AWA-sp-desktop {\
            display: none;\
        }\
    }\
    @media (min-width: 1200px) {\
        #AWA-left {\
            width: 50%;\
            float: left;\
        }\
        #AWA-right {\
            width: 50%;\
            float: right;\
        }\
        .transaction-form input {\
            width: 300px;\
        }\
        .transaction-form select, .transaction-form textarea {\
            width: 300px;\
        }\
        .AWA-proceed {\
            margin-top: 15px;\
        }\
        #AWA-right .col-md-3 {\
            padding-right: 10px;\
        }\
    }\
    ';


	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
        // Append style to head
        $('head').append('<style type="text/css">'+exp.css+'</style>');

        // Removal of big orange Sagepay banner
        $(".checkout-transfer-warn").closest('.row').hide();

        // Removal of copy at the top of the page
        $(".checkoutTxt").closest('.row').hide();

        // Putting Sagepay and Trusted shops logoes on one line.
        // Making progress indicator black and grey (instead of orange and grey) and making it smaller
        $(".checkoutTxt").closest('.row').after(exp.vars.stepRow);
        $("img[src='assets/images/payment-step1.gif']").closest('.row').hide();

        // Adding in the ability to change quantity (this waiting on their cooperation/development)


        // Adding in wording if someone is coming from a food hygiene page (EHO accreditation)


        // Changing shape of page (making billing address and details sit next to each other.
        $("h2:contains('Personal Details')").text("Billing Details");
        $("p:contains('Please enter your personal details')").text("Please enter your billing details here. (Candidates will enter their name for the certificate later).");
        $(".col-sm-12.marketing-checkbox").prepend($("label:contains('Will you allow us')"));
        $("label:contains('Will you allow us')").text("Yes, I'd like to hear about special offers and other relevant courses");
        $("h2:contains('Address Details')").text("Billing Address");
        $("p:contains('Please enter your billing address details')").after("<hr>");
        $("p:contains('Please enter your billing address details')").text("Please enter your billing address details. (The postal address for the certificate(s) will be entered later)");

        $(".transaction-form").prepend("<div id='AWA-left'></div>");
        $("#AWA-left").append($(".transaction-form").find(".row").eq(0), $(".transaction-form").find(".row").eq(1), $(".transaction-form").find(".row").eq(2), $(".transaction-form").find(".row").eq(3), $(".transaction-form").find(".row").eq(4), $("#hint"), $(".transaction-form").find(".row").eq(5));
        $("#AWA-left").after("<div id='AWA-right'></div>");
        $("#AWA-right").append($(".transaction-form").find(".row").eq(6), $(".transaction-form").find(".row").eq(7), $(".transaction-form").find(".row").eq(8), $(".transaction-form").find(".row").eq(9), $(".transaction-form").find(".row").eq(10), $(".transaction-form").find(".row").eq(11), $(".transaction-form").find(".row").eq(12));
        $("#AWA-right").append($("#LinkButton2").closest(".row"));
        $("#AWA-right .txt-rgt").after("<div class='AWA-small'>You are about to be transferred to Sage Page who will process your credit card securely.</div><div class='AWA-small'>Details of the candidate(s) taking the courses will be confirmed after your oder is complete.</div>");
        $("#AWA-left, #AWA-right").find(".col-md-2").addClass("col-md-3").removeClass("col-md-2");
        $("#AWA-left, #AWA-right").find(".col-md-10").addClass("col-md-9").removeClass("col-md-10");
        $("#AWA-left, #AWA-right").find(".col-sm-10").addClass("col-sm-9").removeClass("col-sm-10");
        $("#LinkButton2").closest(".row").addClass("AWA-proceed");

        // Hide first link button
        $("#LinkButton1").hide();
        // Hide Address 2
        $("label:contains('Address 2')").closest('.row').hide();
        // Move Postcode
        $("label:contains('Address 2')").closest('.row').after($("#tb_Postcode").closest(".row"));
        // Change text for Address 1    
        $("label:contains('Address 1*')").text("House name or number:");



        // Making the marketing message less blatant
        $("h2:contains('Marketing Options')").closest(".row").hide();



        // Add in span for Crafty Clicks drowndown area
        $("#tb_Postcode").after("<span id='crafty_postcode_result_display'></span><br/><button type='button' onclick='cp_obj.doLookup()''>Find Address</button");




        cp_obj.set("access_token", "837a6-54655-23cc0-018dd");
        cp_obj.set("result_elem_id", "crafty_postcode_result_display");
        cp_obj.set("form", ""); 
        cp_obj.set("elem_postcode" , "tb_Postcode");


        cp_obj.set("elem_street1", "tb_Address1");
        cp_obj.set("elem_street2", "");
        cp_obj.set("elem_street3", "");
        cp_obj.set("elem_town", "tb_Town");
        cp_obj.set("elem_county", "tb_County");
        cp_obj.set("elem_house_num", ""); 

        cp_obj.set("busy_img_url", "//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/22f129c73111a449ad64443d9493df6e_ajax-loader.gif");
        //cp_obj.set("debug_mode",   "1");



        // Final formatting
        $("#tb_Postcode").parent().find("br").remove();
        var $phoneRow = $("label:contains('Phone:')").closest('.row');
        var $townRow = $("label:contains('Town*:')").closest('.row');
        $townRow.before($phoneRow);
        $("label:contains('Phone:')").text("Phone (optional)");
        $("label:contains('Town*:')").closest(".row").addClass("AWA-hidden-form");
        $("label:contains('County:')").closest(".row").addClass("AWA-hidden-form");
        $("label:contains('Country:')").closest(".row").addClass("AWA-hidden-form");
        $("#tb_Phone").closest(".row").after(exp.vars.manual);

        $("#AWA-manual-link").click(function(e) {
            e.preventDefault();
            $(".AWA-hidden-form").show();
            $("#AWA-manual").hide();
        });

        // AA11AA
	};




    // Run the experiment
    exp.waitFor = function(condition, callback, timeout, keepAlive) {
        timeout = timeout || 20000;
        keepAlive = keepAlive || false;
        var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if (condition()) {
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


    exp.waitFor(function(){return $("#LinkButton2").length;}, exp.init);


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
};
var waitForjQuery = function(time) {
    time = time || 50;
    var $ = window.jQuery;
    if ($) {
        exp($);
    } else {
        setTimeout(function () {
            waitForjQuery(time * 2);
        }, time);
    }
};
waitForjQuery(1000);