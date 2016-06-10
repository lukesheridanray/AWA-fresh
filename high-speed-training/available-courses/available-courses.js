//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

var COURSE_DESCS = {
  "Level 2 Food Hygiene & Safety - For Retail": "The course is aimed at anybody working in retail, for example market stalls, farm shops, grocery stores, supermarkets, butchers, bakers, fish shops, wholesalers and delicatessens.",
  "Level 2 Food Hygiene & Safety - For Manufacturing": "The course is aimed at food handlers working in the food and drink manufacturing industry and is suited to anyone working in food storage, packing, processing or assembly.",
  "Level 3 Food Hygiene & Safety in Catering": "The Level 3 Supervising Food Safety Course is designed for supervisors and food managers who require a broader understanding of food safety control in the catering sector. The course is recommended for anyone responsible for managing people in a food business.",
  "Level 3 Food Hygiene & Safety in Retail": "The Level 3 Supervising Food Safety Course is designed for supervisors and food managers who require a broader understanding of food safety control in the retail sector, for example market stalls, farm shops, grocery stores, supermarkets, butchers, bakers, fish shops, wholesalers and delicatessens. The course is recommended for anyone responsible for managing people in a food business. ",
  "Level 3 Food Hygiene & Safety in Manufacturing": "This Level 3 Supervising Food Safety course is designed for managers and supervisors in food manufacturing businesses who are responsible for implementing food safety controls and ensuring that an effective food safety management (HACCP) system is in place.",
  "Level 1 Food Safety Awareness": "This Level 1 Food Hygiene and Safety course is designed for workers who are not directly involved in the preparation or handling of high-risk food, or who only handle wrapped or pre-packaged food. This includes, but is not limited to:  Front of house employees, Checkout staff, bar workers, kitchen porters",
  "Health & Safety for Food Handlers": "This Health and Safety for Food Handlers course is suitable for anyone whose role in a food premises requires an understanding of health and safety law, hazards in the workplace, and appropriate control measures. Those who have a responsibility to uphold health and safety in a food premises and those who wish to contribute to this process, as well as improve their understanding of good work practices, will meet legal requirements and benefit greatly from its content – both employers and employees alike.",
  "Level 2 Cleaning in Food Premises Training": "This Level 2 Cleaning in Food Premises course is designed to ensure that employers are able to comply with Regulation (EC) No. 852/2004 on the hygiene of food stuffs.",
  "Level 2 HACCP Training": "This online Level 2 HACCP training has been designed to give workers in the food industry knowledge of the processes needed to maintain food safety in the workplace, enabling organisations to comply with the European Regulation (EC) No 852/2004 on the Hygiene of Foodstuffs.",
  "Level 3 HACCP Training": "This HACCP training is aimed at managers, supervisors and anyone in charge of managing food safety wishing to implement and manage the HACCP food safety system in their food business.",
  "COSHH - Control of Substances Hazardous to Health Course": "This COSHH training course provides suitable training for all levels of employees who work, or may come into contact with, hazardous substances in the workplace. All employees must have the necessary knowledge to be competent and do the job properly. This includes, but is not limited to, people who work in professions such as: Catering and baking, Cleaning, Beauty and hairdressing, Engineering, Vehicle repair and painting, Welding, Offshore oil and gas, Printing, Woodworking, Agriculture",
  "COSHH for Clinical Environments Training": "This COSHH for Clinical Environments training course provides suitable training for all levels of employees who work, or may come into contact with, hazardous substances in their workplace. This includes, but is not limited to, clinical professions such as: Dentists and assistants, Doctors and nurses, Midwives, Medical Radiographers, Healthcare Professionals, Physiotherapists, Beauticians, Hairdressers, Cleaners.",
  "CSCS Revision Guide Training": "This CSCS revision course has been written to aid those who are sitting the CITB Health, Safety and Environment Test, an essential part of achieving a CSCS (Construction Skills Certification Scheme) card. ",
  "Legionella and Legionnaires' Disease Awareness Course": "This course is suitable for anyone in charge of a premises (known as the dutyholder) no matter how big or small the premises and regardless of the number of people present. This includes all employers, self-employed people and anyone else in control of a premises, such as landlords and letting agents.",
  "Asbestos Awareness (Category A) Training Course": "All workers who are likely to disturb asbestos containing materials during their normal work should be trained so that they can work safely. This Asbestos Awareness (Category A) course is suitable for anyone who may be exposed to asbestos as part of their work so that they understand the dangers and can avoid any work which may disturb asbestos. This includes, but is not limited to, professions such as: Heating and Ventilation engineers, Demolition workers, Carpenters, joiners and construction workers, Plumbers, Roofing Contractors, Painters, decorators and plasterers, Fire and burglar alarm installers, shop fitters, gas fitters, computer installers and telecommunications engineers, general maintenance staff, cable layers and electricians.",
  "Social Responsibility in Gambling": "This course is suitable for staff of all levels who work in an environment where gambling is present. This includes those who work in bookmakers, casinos, arcades, bingo halls, shops, pubs and anywhere else where gambling machines or games exist, including the National Lottery and scratchcards. The Gambling Commission states that all workers need to be trained in order to react to any customer who either requests help or admits to a gambling problem.",
  "Autism Awareness": "This course is suitable for anyone whose job role requires them to work with autistic children, whether it’s on a full-time, part-time or voluntary basis. This includes professions such as teachers, tutors, nursery workers, carers and activity leaders.",
  "Dementia Awareness": "This course is suitable for carers who are looking after a person with dementia or who wish to learn more about the condition. The course is suitable for learners of all levels, including those who work in care home settings, medical settings or simply relatives who are looking after a family member with the condition at home.",
  "Dyslexia Awareness": "Anyone who takes care of or is involved in children’s learning should take this course, including parents, tutors, carers, and educators.",
  "Introduction to Safeguarding Children Training (formerly referred to as Level 1 Safeguarding)": "The course is also suitable for workers of all levels, including managers, supervisors, full-time staff, part-time staff and volunteers.Examples of people who may wish to take this training include: Teachers, nursery workers, carers and child-minders, Doctors, nurses, paramedics and health workers, social workers, council staff and immigration workers, youth workers, activity leaders and volunteers, sports coaches and teachers, police staff, church leaders, religious leaders and volunteers.",
  "Introduction to Safeguarding Children Refresher Training (formerly referred to as Level 1 Safeguarding)": "The course is suitable for workers of all levels, including managers, supervisors, full-time staff, part-time staff and volunteers.",
  "Advanced Safeguarding Children Training (formerly referred to as Level 2 Safeguarding)": "This Advanced Safeguarding Children course is suitable for anyone whose job role involves frequent or regular work with children and/or their families. This includes workers at all levels, including managers, supervisors, full-time and part-time staff.",
  "Advanced Safeguarding Children Refresher Training (formerly referred to as Level 2 Safeguarding)": "This Advanced Safeguarding Children Refresher course is suitable for anyone who works frequently with children and/or families, including managers, supervisors, full-time and part-time workers. The course is suitable for people of all professions.",
  "Safeguarding Vulnerable Adults Training": "This course is suitable for anyone whose job role involves working with vulnerable adults, whether it’s on a full-time or part-time basis. The course is suitable for workers at all levels, including managers, supervisors, full-time staff and volunteers, and requires no pre-requisite knowledge.Examples of people who may wish to take this training include: Dental Professionals, NHS Staff, Care home workers, Private healthcare workers, Education establishments ( e.g. adult learning)",
  "Promoting Positive Behaviour Training": "This course is recommended for any practitioner who wishes to have a better understanding of the children that they work with, including how to respond to their behaviour. This includes, but is not limited to, professionals such as teachers, teaching assistants, nursery nurses, nannies, after-school club workers and other childcare professionals.",
  "Domestic Violence and Abuse Training": "This online Domestic Violence and Abuse training course is suitable for anyone who works with either children or their families. ",
  "Safeguarding Children: Internet Safety": "This course is suitable for anyone who works or lives with children or their families. Internet safety for kids is a topical and significant matter and this course aims to provide an understanding of the risk for professionals, parents and carers alike.",
  "Mental Health Awareness Training Course": "This Mental Health Awareness course is suitable for all HR workers, managers, supervisors and employers who wish to understand more about mental health conditions so that employees can be better supported and positive mental health can be encouraged in the workplace.",
  "Introduction to Housing Management Training Course": "This training course is ideal for landlords and property owners who wish to improve their understanding of social housing law, allocations, rent management and resident involvement.",
  "Business Writing Skills Training Course": "This online business writing course is aimed at anyone in a business setting who wishes to improve their written skills.",
  "Minute Taking Training Course": "This course is suitable for those in a secretary or minute-taker role (the task of taking minutes is often assigned to secretaries) who aim to improve their minute taking skills or for those who are starting out as a minute-taker and are unsure about what they need to do",
  "PA and Secretarial Skills": "This course is suitable for assistants and secretaries of all levels who wish to gain a more thorough understanding of the skills needed to be able to perform their role efficiently and with confidence.",
  "Conflict Management Training Course": "This conflict management training is aimed at everybody within the workplace. It is useful for both employers and employees as it highlights what to do in situations of interpersonal conflict as well as how to deal with confrontation between others. This course is useful for managers looking to implement a conflict management risk assessment or those who wish to understand more about personal safety at work.",
  "Online Bookkeeping Course": "This online bookkeeping course is aimed at small business owners and management teams who want to learn how to run a successful bookkeeping system.",
  "Online Sales, Pricing and Marketing Training Course": "This course in online sales, pricing and marketing is suited to small business owners who are looking to improve their strategy and gain a greater market share with their business.",
  "Starting a Business Course": "This course in how to start a business is suitable for anyone considering starting up a business, or anyone who is currently in the early stages of their own project. The course is also suited to people who wish to understand what is included in the process of writing a business plan.",
  "Data Protection": "This course is suitable for anyone who handles personal information, either through manual or computer-held records. The Data Protection Act applies to any business or individual that uses or holds personal data and there can be severe penalties if the legislation is not adhered to.",
  "Anti-Money Laundering (AML) and Financial Crime": "This course is suitable for anyone who works within the regulated financial sectors, including all businesses where large amounts of illegally obtained cash, property or goods could be bought, sold or exchanged.",
  "Restaurant Hospitality Training": "This course is designed to help front-of-house staff needing to learn or improve their restaurant service skills. The course is suitable for waiters, maître d’s, front-of-house managers, hosts, bar staff, café workers and anyone else who has regular contact with guests and needs to provide excellent customer service.",
  "Leadership and Management Training": "The course is designed for those who wish to acquire an in-depth knowledge of leadership and who aim to become more confident and empowered in their team-leading skills.",
  "Project Management Training": "This course is suitable for people in every workplace and of any skill level. Project managers exist in all environments, on both large and small scales, and this course aims to provide a comprehensive introduction to those wishing to develop their project management skills.",
  "Negotiation Skills Training": "This course is suitable for all professionals who wish to improve on, or learn more about, negotiation skills",
  "Corporate Event Management Training Course": "This course is designed for anyone who is looking to enter the field of event management or for those who already have experience planning events and wish to hone their existing skills. It is suitable even for those without any former knowledge of event management; it covers all the fundamentals for organising a successful and memorable occasion.",
  "Equality and Diversity Training Course": "This course is suitable for learners of all levels, including employers, managers, supervisors, full-time and part-time workers, as everyone in the workplace has a responsibility for supporting equality and diversity.",
  "Equality and Diversity in Health and Social Care Training Course": "This Equality and Diversity in Health and Social Care training course is designed for those who provide care to patients and service users and any employees within a healthcare industry.",
  "Cross Cultural Awareness Training Course": "This cross cultural awareness training is particularly useful for people who work on a global scale, with virtual teams, who are looking to enter the international market or are moving abroad for business. It is also well suited to managers in charge of culturally diverse teams or for those people who welcome international visitors to the UK for meetings or events.",
  "Licensing Law Awareness Training Course": "This course is suitable for anyone who has responsibility for a premises covered by the regulations, including employers, Designated Premises Supervisors, managers and employees who wish to understand more about the role that they play in complying with the law.",
  "Time Management Training Course": "This course is primarily designed for those who work in an office-like environment, but is also suitable for anyone who is looking to improve their use of time at work. Anyone at any level of their company will benefit from the strategies and techniques discussed throughout this course; it will be useful to those who are looking for proven methods of time management",
  "Customer Service Training Course": "This Customer Service Skills course is suitable for anyone working in a customer service role, at all levels of employment, who wishes to improve their service skills. This includes all employees who deal directly with customers face-to-face, over the telephone or by e-mail. Examples of professions who may find this course useful include, but are not limited to: Receptionists, front-of-house staff, call centre workers, online support staff, front-line sales and customer service staff, trade and self-employed workers (builders,plumbers,cleaners etc)",
  "Patient Customer Service Course": "This Patient Customer Service Skills training course is suitable for anyone working in the health and social care sectors who wish to improve their patient care skills. The course is suitable for employees of all levels, including managers, supervisors, full-time and part-time staff. Examples of professions that may find this Patient Customer Service course useful include, but are not limited to: Doctors, nurses and assistants , Dentists and assistants, social care workers, care home and day centre staff.",
  "Retail Customer Service Course": "This Retail Customer Service Skills course is suitable for anyone working in a retail customer service role, at all levels of employment, who wishes to improve their service skills. This includes all employees who deal directly with customers face-to-face or over the telephone.",
  "Workplace First Aid Training": "This course is best suited to low-risk workplaces, such as shops, offices and restaurants, which do not require a qualified first-aider but must appoint somebody to be in charge of the first aid arrangements.",
  "Paediatric First Aid Training": "This online children’s first aid course is suitable for anyone who lives or works with children, for example parents, carers, child-minders, after-school club workers and sports team coaches, helpers and volunteers etc.",
  "Sports Nutrition Training": "This course is suitable for anyone who takes part in regular exercise or training sessions that wishes to improve their knowledge of the best diet for their performance.",
  "Nutrition for Pregnancy and Babies": "This course is suitable for all prospective parents, healthcare professionals and care workers who wish to understand more about pre-pregnancy, pregnancy, baby and infant nutrition.",
  "Nutrition for the Elderly": "This course is suitable for anyone who cares for people in later life, whether this is in a care home, healthcare setting or at home. ",
  "Attaining a 5 in the Food Hygiene Rating Scheme Training": "This course is suitable for all managers and supervisors of food premises who are looking to achieve the highest food hygiene rating score under the Food Hygiene Rating Scheme. The course is also suitable for all levels of food handler who wish to gain further knowledge of the Food Hygiene Rating Scheme and understand their role in achieving the best score",
  "Food Allergen Awareness Training": "This course is suitable for food handlers of all levels, including those in a managerial position, a full-time, part-time or voluntary role. ",
  "Food Labelling Requirements Training": "This Food Labelling course is suitable for all food businesses who package food for sale directly to the consumer. This includes large manufacturers, such as those who operate from factories, as well as smaller businesses, such as bakeries, delis and supermarkets that pre-package their own food to sell.",
  "Communication Skills Training": "This Communication Skills training is suitable for employers, managers, supervisors or anyone in a leadership role who wishes to improve their communication skills. The course is best suited to those who work within an office environment although the content is applicable to anyone required to communicate effectively on a regular basis.",
  "Presentation Skills Training": "This presentation skills course is suitable for anyone required to do a presentation on both a small or large scale. The course aims to help people prepare their presentation to the best of their ability and provides the adequate knowledge needed for them to give the presentation confidently and effectively.",
  "Introduction to Neuro-Linguistic Programming Training": "This course is suitable for people working in any profession who wish to improve their communication skills, confidence and understanding of the way people behave.",
  "Creative Writing Skills": "This course is suitable for anyone who loves writing and is eager to jump-start their inspiration. Beginner and veteran writers alike, no matter what their age, will benefit from this course.",
  "Anti-Bribery Training": "This Anti-Bribery course is suitable for all businesses that are required to have an anti-bribery policy in place within their organisation. The course is also suitable for individuals who wish to improve their knowledge of the Bribery Act 2010 and/or who have a responsibility for ensuring anti-bribery procedures are followed in the workplace.",
  "Stress Awareness in the Workplace Training": "This course is also suitable for individual learners who wish to learn more about how they can cope with and manage their stress on a personal basis.",
  "Moving and Handling of People in Residential Care Homes Training": "All workers who use, or supervise the use of, moving and handling equipment must ensure that they have received adequate health and safety training. This moving and handling of people course provides suitable training for all levels of employees who work closely with residents in care homes.",
  "Risk Assessment": "This course is suitable for all workers involved in developing a risk assessment and/or enforcing procedures in the workplace. This applies to all employers, managers and supervisors, regardless of the industry or environment that they work in.",
  "DSEAR": "This course is suitable for workers of all levels who are required to understand DSEAR as part of their job role, in particular those whose work activities involve the use, handling or production of dangerous substances. ",
  "COMAH": "This course is suitable for all operators, including employers, managers and supervisors, who have responsibility for the safe operation of their establishment. The COMAH Regulations apply primarily to those who work in the chemical industry, including those who store, handle, use and produce dangerous substances.",
  "Personal Protective Equipment (PPE)": "This course is suitable for anyone who works in an industry that may involve high-risk activities and requires the use of additional protection outside of other control measures. It will prove particularly useful to those who are responsible for upholding health and safety at work and are responsible for the selection and provision of PPE, such as the employer. But it is also suitable for employees, as it will fully educate you on how to meet your legal requirements, to fulfil your responsibilities, and the fundamentals of using PPE effectively at work.",
  "Abrasive Wheels": "The course is particularly relevant for those who use bench grinders, pedestal grinders and angle grinders.",
  "RIDDOR": "This course covers all aspects of the RIDDOR legislation so that the responsible person understands when, why and how to make a suitable report.",
  "Working in Confined Spaces": "This course is suitable for anyone whose work requires them to enter a confined space, including employees, managers, supervisors and rescuers. ",
  "Level 1 Health & Safety in the Workplace": "This Level 1 Health and Safety in the Workplace course is designed for employees of all levels and is particularly suited to new workers who are required to take health and safety induction training at the start of their employment.",
  "Level 2 Health & Safety in the Workplace": "This Level 2 training course is suitable for workers of all abilities and is intended as a 'foundation' level course, designed to maintain learners' health and safety knowledge.",
  "Level 3 Health & Safety in the Workplace": "This Level 3 Health and Safety course is suitable for all supervisors and managers who have a responsibility for providing high health and safety standards in the workplace. This includes those who have a responsibility for training employees, maintaining standards and enforcing a positive health and safety culture at work.",
  "Infection Control and Prevention": "This online Infection Control and Prevention training course is suitable for all levels of employees, including managers, full-time and part-time workers, who have responsibilities for minimising the risk of infection in their workplace.This includes, but is not limited to, occupations such as: Medical Staff, Care workers,Cleaners, Laundry Workers, Refuse Workers, Hairdressers, Chiropodists, Butchers, Farmers, Vets, kennel or cattery workers",
  "Online Manual Handling Awareness Training": "The manual handling course is aimed at all levels of employees who may undertake manual handling operations, including the transporting of a load of items by lifting, putting down, pushing, pulling, carrying or moving thereof by hand or by bodily force. This includes, but is not limited to, professions such as: Warehouse and factory staff, heavy manual labourers, unloading and loading of vehicles, construction and building site workers, office workers, delivery drivers, farmhands",
  "Online Fire Safety Course": "This course is also suitable for people training to become the designated fire marshal or fire warden for their company. ",
  "Fire Warden Training": "This Fire Warden Training course is suitable for anyone who will be taking on the role of fire warden in their organisation.",
  "Work At Height Training": "Anyone who works at height in any place, including a place at or below ground level, is required to undertake training to prove that they are competent and safe in their work.",
  "Ladder Safety": "This course is suitable for employees of all levels, including full-time and part-time workers, managers and supervisors, who are required to use ladders or stepladders as part of their job role. ",
  "Office Health & Safety Training": "This Office Health and Safety course is suitable for anyone who works in an office workplace, including managers, supervisors, full-time and part-time employees.",
  "Electrical Safety Training": "This course is suitable for workers of all levels, including managers, supervisors, full-time employees and part-time staff, who are required to work on or near electricity as part of their job role.Occupations that may find the training particularly useful include, but are not limited to: Electricians, Builders and construction workers, IT technicians, Communications engineers, Power and energy suppliers and engineers, Appliance repair workers, PAT Testers, Cable engineers",
  "Environmental Awareness Training": "This course is suitable for workers of all levels, including employees, managers, supervisors and employers.",
  "Display Screen Equipment (DSE) Assessor Training": "The DSE Regulations apply to people whose work involves the regular use of display screen equipment, making this course suitable for anyone who uses DSE for a significant part of their normal working day.",
  "Noise Awareness Training": "This course is suitable for anyone who works in an industry that involves being exposed to high levels of noise.",
  "Nutrition and Healthy Eating": "This nutrition training course is appropriate for anyone who works with food or who has an interest in improving their diet. The course is suited to food businesses that provide food to the public and want to know more about offering healthier food choices to their clients. This covers, but is not limited to, school canteens, care homes, bars and restaurants, community workers and fitness trainers.",
  "Safeguarding Children with Disabilities": "This course is suitable for anyone who works with disabled children, young adults and/or their families. This includes, but is not limited to, healthcare workers, teachers, child-minders, sports clubs and youth and community workers.",
  "Child Sexual Exploitation Awareness": "Child sexual exploitation awareness training is essential for anyone with safeguarding responsibilities, including but not limited to: police officers, social workers, teachers, housing officers, youth service workers, residential workers, foster carers and anyone who requires an understanding of CSE issues.",
  "Hidden Harm: Parental Substance Misuse Training": "This course is suitable for all employees, including full and part-time workers, students, volunteers and managers, who work with either children or their families.",
  "Parental Mental Health and its Impact on Children's Lives Training": "This course is suitable for anyone who works with children and/or families and has safeguarding responsibilities. It is appropriate for workers at all levels.",
  "Working with Issues of Child Neglect": "This Working with Issues of Child Neglect training is suitable for anyone who works with children and their families who wishes to have a better understanding of the safeguarding issues surrounding child neglect.",
  "Safer Recruitment Training": "This online safer recruitment training course is suitable for anyone who works in a setting with children or young people and has some involvement in the recruitment, supervision and/or management of new employees and volunteers.",
  "Slips, Trips and Falls": "This course is suitable for all managers, supervisors and employees who have a responsibility for minimising the risks of slips, trips and falls in their workplace.",
  "Managing Health & Safety Training": "This course is suitable for anyone who has responsibility for planning, implementing and managing the health and safety procedures in the workplace, including employers, business owners, managers, supervisors and team leaders.",
  "Nutrition for Weight Loss": "This course is suitable for anyone who is overweight or obese and who is looking to successfully lose weight through a better diet and more active lifestyle.",
  "Nutrition for Children": "This course is suitable for parents, carers and those who work with children or in childcare. ",
  "Childhood Weight Management": "This course is suitable for parents, carers and anyone who works in childcare."
};

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
exp.log('AWA - available courses v1');


// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {

    'productFilters': '<div class="product-filters">\
                           <a href="/available-courses/food-hygiene.aspx" class="'+(window.location.pathname === '/available-courses/food-hygiene.aspx' ? 'awa-active ' : '' )+'btn btn-small btn-blue">Food Hygiene Only</a>\
                           <a href="/available-courses/health-safety.aspx" class="'+(window.location.pathname === '/available-courses/health-safety.aspx' ? 'awa-active ' : '' )+'btn btn-small btn-blue">Health and Safety Only</a>\
                           <a href="/available-courses/business-skills.aspx" class="'+(window.location.pathname === '/available-courses/business-skills.aspx' ? 'awa-active ' : '' )+'btn btn-small btn-blue">Business Skills Only</a>\
                           <a href="/available-courses/health-nutrition.aspx" class="'+(window.location.pathname === '/available-courses/health-nutrition.aspx' ? 'awa-active ' : '' )+'btn btn-small btn-blue">Health and Nutrition Only</a>\
                           <a href="/available-courses/safeguarding-people.aspx" class="'+(window.location.pathname === '/available-courses/safeguarding-people.aspx' ? 'awa-active ' : '' )+'btn btn-small btn-blue">Safeguarding People Only</a>\
                           <a href="/available-courses/financial-services.aspx" class="'+(window.location.pathname === '/available-courses/financial-services.aspx' ? 'awa-active ' : '' )+'btn btn-small btn-blue">Financial Services Only</a>\
                           <a href="/available-courses/" class="btn btn-small btn-grey">Show All</a>\
                       </div>',

    'productContainer': '<div class="clearfix"></div>\
                         <div id="product-container"></div>',

    'reviews': '<div class="AWA-review-img">\
                    <div class="AWA-float-fix">\
                        <div class="AWA-image-review">\
                            <div class="AWA-text-wrapper">\
                                <p class="AWA-text-fix">"Very easy to use and also informative."<br /> <br /> <br /> </p>\
                                <div class="star-AWA-fix">\
                                    <img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/91475918f4f1784c1361498dbc12ba5c_review-stars-awa.png" alt="Reviews for HST">\
                                    <p class="AWA-review-name">Alan Reynolds</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="AWA-image-review">\
                            <div class="AWA-text-wrapper">\
                                <p class="AWA-text-fix">"Easy to use and access from anywhere. I like the fact i could progress with my training when ever i wanted, in my own time. great content and i enjoyed doing it."</p>\
                                <div class="star-AWA-fix">\
                                    <img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/91475918f4f1784c1361498dbc12ba5c_review-stars-awa.png" alt="Reviews for HST">\
                                    <p class="AWA-review-name">Hannah Yeadon</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="AWA-review-button">\
                            <a href="http://www.reviews.co.uk/company-reviews/store/high-speed-training-limited"\
                                <strong>Read 2,626 reviews</strong>\
                                <img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/f278291546c4bd01f0e63d9b6d3f4b5d_reviews-button-awa-hst.png" alt="Reviews for HST">\
                            </a>\
                        </div>\
                    </div>\
                </div>',

    'bulkDiscountBanner': '<div class="awa-discount-banner -fixed">\
                            <h2>Discounts for bulk purchases</h2>\
                            <p>Purchases with us have no time limit for usage so you can take advantage of our bulk discount offers.</p>\
                            <p>10+ Courses 10% discount<br />\
                            50+ Courses 20% discount<br />\
                            100+ Courses 30% discount<br />\
                            500+ Courses 40% discount</p>\
                            <p>We can invoice you for your order, the option will be automatically given to you with 5 or \
                            more items in your basket at checkout time. Schools and other organisations who require invoicing for lower volumes can call us directly and we\'ll be pleased to help.</p>\
                          </div>'
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
    .awa-discount-banner.-fixed {\
        position: fixed;\
        bottom: 0;\
        left: 0;\
        width: 100%;\
        z-index: 1;\
    }\
    @media screen and (max-height: 599px) {\
        .awa-discount-banner.-fixed {\
            position: static;\
            box-shadow: none;\
        }\
    }\
    @media screen and (max-width: 800px) {\
        .awa-discount-banner.-fixed {\
            position: static;\
            box-shadow: none;\
        }\
    }\
    .awa-discount-banner h2,\
    .awa-discount-banner p {\
        color: #fff;\
        margin-left: auto;\
        margin-right: auto;\
        padding: 0 35px;\
        max-width: 680px;\
    }\
    .awa-discount-banner p {\
        font-size: 0.9em;\
        line-height: 1.2em;\
    }\
    .awa-discount-banner h2 {\
        text-transform: uppercase;\
        font-size: 1.6em;\
        margin-bottom: -6px;\
    }\
    .awa-discount-banner {\
        padding: 1.5em 0;\
        background: #428bca;\
        box-shadow: 0 0 10px rgba(0,0,0,0.6);\
    }\
    h1, .product-filters {\
        text-align: center;\
    }\
    .product-filters .btn {\
        margin-top: 5px;\
        margin-bottom: 5px;\
    }\
    .product-desc {\
        padding: 5%;\
        text-align: left;\
    }\
    .awa-active {\
        background-color: #5cb85c;\
        border-color: #5cb85c;\
    }\
    .courseOverview > p,\
    .courseOverview > h3 {\
        display: none;\
    }\
    .course {\
        display:inline-block;\
        vertical-align:top;\
        margin:1%;\
        border:solid 1px #ddd;\
        text-align:center;\
        margin-bottom:1em;\
        padding: 0;\
        -webkit-box-shadow:0 3px 3px 0 rgba(50,50,50,.3);\
        -moz-box-shadow:0 3px 3px 0 rgba(50,50,50,.3);\
        box-shadow:0 3px 3px 0 rgba(50,50,50,.3)\
    }\
    .course h2 {\
        margin:10px 25px 10px 25px;\
        font-size:1.2em\
    }\
    .course h2 a {\
        color:#474949\
    }\
    .course .product-price {\
        color:#5cb85c;\
        font-size:1.1em\
    }\
    .course .product-duration {\
        font-size:1.1em;\
        color:#bbb\
    }\
    .course .product-duration i {\
        padding-right:.7em\
    }\
    .course .btn {\
        margin:10px 0 10px 0\
    }\
    @media(min-width:568px) {\
        .course {\
            width:98%\
        }\
    }\
    @media(min-width:768px) {\
        .course {\
            width:47%\
        }\
    }\
    @media(min-width:1000px) {\
        .course {\
            width:31%\
        }\
    }\
    .AWA-review-img {\
        display: inline-block;\
        padding: 20px 0;\
        margin-bottom: 10px;\
        width: 100%;\
    }\
    .star-AWA-fix{\
        clear: both;\
        padding-top: 15px;\
        position: relative;\
        left: -8px;\
    }\
    p.AWA-review-name {\
        display: inline-block;\
        position: relative;\
        top: -7px;\
    }\
    .AWA-image-review, .AWA-text-fix, .AWA-text-wrapper {\
        max-width: 100%;\
    }\
    .AWA-image-review, .AWA-review-button {\
        display: table-cell;\
        vertical-align: middle;\
    }\
    .AWA-image-review p {\
        padding-top: 0;\
        padding-bottom: 0;\
        margin: 0;\
    }\
    .AWA-review-button {\
        text-align: center;\
    }\
    .AWA-review-button img {\
        display: block;\
        margin: 0 auto;\
        padding-top: 4px;\
        width: 125px;\
    }\
    .AWA-review-button a{\
        color: #777;\
        text-decoration: underline;\
        padding-bottom: 5px;\
    }\
    .AWA-review-button strong{\
        text-decoration: underline;\
        padding-left: 5px;\
    }\
    .AWA-review-img p {\
        margin: 0;\
    }\
    .AWA-float-fix {\
        width: 100%;\
        display: table;\
    }\
    .AWA-text-wrapper {\
        width: 100%;\
        padding-left: 10px;\
        margin-bottom: 1px;\
    }\
    .AWA-text-fix {\
        padding-right: 0px;\
        margin-right: 0px;\
        max-width: 380px;\
        float: left;\
    }\
    .AWA-info-welcome{\
        padding-bottom: 40px;\
    }\
    .AWA-we-work-sprite {\
        display: none;\
    }\
    @media (max-width: 990px) {\
        .AWA-review-img {\
            width: 100%;\
        }\
        .AWA-review-img p {\
            margin: 0;\
        }\
        .AWA-float-fix {\
            display: block;\
        }\
        .AWA-image-review {\
            width: 380px;\
            margin: 0 auto;\
            display: block;\
        }\
        .AWA-text-wrapper {\
            padding-left: 0;\
            margin-bottom: 32px;\
        }\
        .AWA-review-button {\
            width: 100%;\
            margin: 0 auto;\
            display: block;\
        }\
        .AWA-review-button img {\
            display: block;\
            margin: 0 auto;\
        }\
        .AWA-float-fix {\
            display: inline-block;\
        }\
    }\
    @media screen and (max-width: 767px) {\
        #product-container {\
            position: relative;\
            padding-bottom: 420px;\
        }\
        .AWA-review-img {\
            position: absolute;\
            bottom: 0;\
            left: 0;\
        }\
    }\
    /* @media (min-width: 1200px) {\
        .AWA-review-button {\
            min-width: 300px;\
        }\
    } */';

exp.func = {};

// get description from array of objects
// @param title [str] the title for the key lookup
exp.func.getDescription = function(title) {

    if(title === undefined) {
        return '';
    }

    // remove multiple spaces and line breaks
    title = title
            .replace(/ +(?= )/g,'')
            .replace(/(\r\n|\n|\r)/gm,"");

    if(COURSE_DESCS[title] !== undefined) {

        return COURSE_DESCS[title];

    } else {

        exp.log('Course not found: '+ title);
        return '';

    }

};

// get courses HTML
exp.func.getCourses = function() {

    var output = '';
    var $courses = $('.course');
    
    if($courses.length === 0) {
        return output;
    }

    // Some courses are incorrectly nested within another course!
    // so we are gonna have to sort these first...

    $courses.each(function() {

        var $self = $(this);
        var $parentCourse = $self.parent('.course');

        if($parentCourse.length === 1) {
            // if we have more than one parent course god help us all!
            $parentCourse.after($self);
        }

    });

    $courses.each(function() {

        var $self = $(this);

        var img = $self.find('img').attr('src');

        var title = $.trim( $self.find('h2').text() );

        var url = $self.find('a:eq(0)').attr('href');

        var duration = $.trim( $self.find('.product-duration').text() )
                        .replace('Duration:','');

        var price = $.trim( $self.find('.product-price').text() );

        var description = exp.func.getDescription( title );

        var HTMLString = '\
<div class="course">\
    <div class="row">\
        <div class="col-sm-12">\
            <img src="'+ img +'" class="img-responsive" alt="'+ title +'">\
            <h2><a href="'+ url +'" title="'+ title +'">'+ title +'</a></h2>\
            <hr>\
            <div class="row">\
                <div class="col-xs-6">\
                    <div class="product-price">\
                        '+ price +'\
                    </div>\
                </div>\
                <div class="col-xs-6">\
                    <div class="product-duration">\
                        <i class="icon-time"></i>'+ duration.replace('Duration: ','') +' \
                    </div>\
                </div>\
            </div>\
            <hr>\
            <div class="product-desc">\
                '+ description +'\
            </div>\
            <div class="productLink">\
                <a href="'+ url +'" title="'+ title +'" class="btn btn-orange">Find out more »</a>\
            </div>\
        </div>\
    </div>\
</div>';
    
// <a onclick="ga(\'send\',\'event\',\'BuyNow\',\'LandingPage\');" id="btn_buynow" class="btn btn-green" href="javascript:__doPostBack(\'ctl00$ContentPlaceHolder1$BuyNow1$btn_buynow\',\'\')">Buy Now »</a>\

        output += HTMLString;

    });

    // now we have everything we need we can remove all the old courses
    $courses.remove();

    return output;

};

// function to attach the overlay if it goes beyond the footer bar
// @param threshold [int] the scroll point at which the overlay should attach
// @param $overlay [jQuery obj] overlay element
exp.func.attachOverlay = function(threshold,$overlay) {

    var position = $(window).scrollTop() + ($(window).height() - $overlay.height());

    if( position > threshold ) {
        $overlay.removeClass('-fixed');
    } else {
        $overlay.addClass('-fixed');
    }

};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // remove left column
    $('.content > .row:first-child .col-sm-3').remove();

    // expand main column
    $('.content > .row:first-child .col-sm-9').removeClass('col-sm-9').addClass('col-sm-12');

    $('h1')
        // insert product filters and container
        .after(this.vars.productFilters + this.vars.productContainer)
        // remove 'training' word
        .text( $('h1').text().replace('Training', '') );

    // insert courses
    $('#product-container').html(this.func.getCourses());

    // add reviews
    if($('.course').length > 8) {
        $('.course:eq(5)').after(this.vars.reviews);
    } else {
        $('#product-container').after(this.vars.reviews);
    }

    //$('#product-container').after(this.vars.bulkDiscountBanner);
    $('.footer-band').before(this.vars.bulkDiscountBanner);

    // listen to scroll events so we can attach the overlay if it goes over the footer band
    (function() {

        var footerHeight = $('.footer-band').height();
        var $overlay = $('.awa-discount-banner');
        //var threshold = $(document).height() - footerHeight - $overlay.height();
        var threshold = $(document).height() - footerHeight;

        $(window).on('scroll', function() {
            exp.func.attachOverlay(threshold,$overlay);
        });
        
        exp.func.attachOverlay(threshold,$overlay);

    })();

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);