function tileCalculatorExperiment() {

    if(jQuery('.tile-calculator-btn').attr('data-purpose') !== 'tile-calculator') {
       console.log('Failed for CTM flow and buttons experiment - not a tile product');
       return false;
    }
  
    console.log('Running CTM flow and buttons experiment - tile product');
    
    jQuery('head').append('<style type="text/css"> \
@media (min-width: 768px) { \
.add-item-btn { \
color: transparent!important; \
height: 59px!important; \
line-height: 48px!important; \
} \
.add-item-btn i { \
color: white!important; \
position: relative!important; \
left: 60px!important; \
} \
.add-item-btn i::after { \
content: \'Add to Basket\'; \
color: white; \
font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; \
font-size: 16px; \
font-weight: bold; \
margin-left: 6px; \
} \
.product-top-container { \
  padding-bottom:26px!important; \
} \
.product-shop .picker-or { \
  display:none!important; \
} \
.product-shop .picker-suom { \
  display:none!important; \
} \
.product-shop .picker-extra-container { \
  position:absolute!important; \
} \
.tile-calculator-btn { \
top: -70px!important; \
position: relative!important; \
left: 214px!important; \
} \
#availability_btn { \
  color: transparent!important; \
  background: none!important; \
  border: none!important; \
  box-shadow: none!important; \
  position: relative!important; \
  top: 140px!important; \
  left: -150px!important; \
} \
#availability_btn::after { \
  color:#428bca!important; \
  content: \'Buying instore? Check stock.\'!important; \
  position: relative!important; \
  left: -90px!important; \
} \
#availability_btn:hover::after { \
text-decoration:underline!important; \
} \
} \
@media (min-width: 992px) { \
.product-top-container { \
  padding-bottom:6px!important; \
} \
.tile-calculator-btn { \
left: 168px!important; \
} \
#availability_btn { \
top: 160px!important; \
left: -150px!important; \
} \
} \
@media (min-width: 1200px) { \
.tile-calculator-btn { \
left: 235px!important; \
} \
#availability_btn { \
left: -150px!important; \
} \
} \
</style> ');
    
}

tileCalculatorExperiment();