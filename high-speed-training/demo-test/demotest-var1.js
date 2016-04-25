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
	exp.log('Demo - v1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	//exp.condition = $("#main_internal_full_box");

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Gift Guide 2 failed a condition');
	//     return false;
	// }
	// Commenting out conditions since IE is having a hard time with it

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		bullets: 	"<div class='AWA-bullets'>\
						<ul class='icons-ul'>\
							<li><i class='icon-li icon-ok-sign'></i>Sign up & start anytime with no time limit</li>\
							<li><i class='icon-li icon-ok-sign'></i>Access anywhere, any time, any device and go at your own pace</li>\
							<li><i class='icon-li icon-ok-sign'></i>No commitment - Only pay when you know the course is right for you</li>\
						</ul>\
					</div>",
		bullets2: 	"<div class='AWA-bullets AWA-bullets2'>\
						<ul class='icons-ul'>\
							<li><i class='icon-li icon-ok-sign'></i>Sign up & start anytime with no time limit</li>\
							<li><i class='icon-li icon-ok-sign'></i>Access anywhere, any time, any device and go at your own pace</li>\
							<li><i class='icon-li icon-ok-sign'></i>No commitment - Only pay when you know the course is right for you</li>\
						</ul>\
					</div>",
		tryArea: 	"<div class='AWA-try-area'>\
						<p>Try before you buy</p>\
						<a class='AWA-free btn btn-orange' href='#'>\
							FREE Instant Access<br>\
							<span class='AWA-smaller'>Complete first 2 modules for FREE</span>\
						</a>\
						<div class='AWA-divider'></div>\
						<div class='AWA-find-out'>\
							or <a class='AWA-orange' href='#'>Find out more</a>\
						</div>\
					</div>",
		orBuy: 	"<div class='AWA-or-buy'>\
					<p>or buy the full course now</p>\
				</div>",
		instantAccessLinks: 	{
			Level2FoodHygieneSafetyForCatering: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLiQZCQKCWlOa2SiksRoKpLQ2Lqng%2bZP4GGpaOzLupXwM0CQSzy5iXjJ6%2fzNLTnbNg%3d#",
			Level2FoodHygieneSafetyForRetail: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI4nu2Qjd7KisW%2bhk5rjN8a%2bO%2fG4SqPz7xoxS0oa1aMHd6GzaZt0m8ClVfCR5n3ezA%3d#",
			Level2FoodHygieneSafetyForManufacturing: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJ20Xd%2bH1VnP07%2bcehXVwB8DGTNYjnXnZ0iADKWVT%2b%2fAgr%2f0eLqqlzHE%2fLoan0vQXo%3d#",
			Level3FoodHygieneSafetyinCatering: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIeCCq1ZG0xSB0%2bL%2bE9gCPozk4a7gUicf6QaWWgvXhvm4myI5pDpvZMZz%2buzD8V1aA%3d#",
			Level3FoodHygieneSafetyinRetail: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIigZndxrGzrUc0etO2UJ6aeGWX4vgWVUzOiD0PL2S6FUwxO6T3krpY8J0I%2b8r3M4M%3d#",
			Level3FoodHygieneSafetyinManufacturing: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIiFCZQfZntuWvMO3oUo7iPIHvGuu7rSMoHEmIb%2biESTOPaGaql%2bpaPTlYM%2bn82g5E%3d#",
			Level1FoodSafetyAwareness: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuK%2fMTj7l9imMdbFi5xtVJvKXOH4Nb015UITNAud3tCx9LEJuBVwuea7ZBoUXZiEaYo%3d#",
			HealthSafetyforFoodHandlers: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJZRNzdzNYTEEgMEIVcSI3vYVP2%2fGgLhzjQDHhdV9bvaZekhI%2fhMNe4vrbd2G50eGg%3d#",
			Level2CleaninginFoodPremisesTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJzmsm8tGAGCz0E%2bIv9%2bbfWtMSZHrnLgY3EG3IiJ71PO4zsaOMAaakPQ0apKDUcPWQ%3d#",
			Level2HACCPTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIhSjOgAQfPLLQ2HDu82R6tVtxgRoNi5TW3Ky8d7hPCIu0lnH%2bS42o5%2fwT1ZD6a8qA%3d#",
			Level3HACCPTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIIFXDhS4Nt18w67x5LkRsgpzH785WitQS01Bp7cUseTfrvyh1QUjpyanVKARilnRg%3d#",
			COSHHControlofSubstancesHazardoustoHealthCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI%2bFZb1dUJuChKzo9SYsEervJN%2bsHi8tzfoizEBCSWZmnJuouTcyKN%2bwSfsFYiRso8%3d#",
			COSHHforClinicalEnvironmentsTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIJDYCskHjRYlRpXMAaQSiky2QgZorHtVwFpgODauD3FGshtF4du%2bLNHfx6IYI1mD0%3d#",
			CSCSRevisionGuideTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJMGxlhPJG91qq3HuNJqnMJ0r%2bc0Z%2b4cN%2fCVgA1Tbi7I24%2bS518tPOx1AwwV3QXFC8%3d#",
			LegionellaandLegionnairesDiseaseAwarenessCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuL7Joee3qmSsK38g4MYTpmIMrlf6%2bY7dMv9jRt%2bk6CSjvglBcE8nc1K6FwUo3YrAl0%3d#",
			AsbestosAwarenessCategoryATrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI25VkmmeOFkTK5LgrI4r%2f%2fRzN0epq7UII23ymFvTBCM29Lqc%2fdzSndyiqXNFPw0fA%3d#",
			SocialResponsibilityinGambling: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuICogYLK%2f8lT876UgrIz1SX78SS7XqxVXVrYUrzezzGCl4g7n4Jx5Qi9sOcJCm30sQ%3d#",
			DementiaAwareness: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIngnB1wY2sZ39FGj1rZkdHsN%2fMCGHFobOZPbHorgqdEFJ5hgEz7L7wtLJHOaets6Nz9KHmVwPHIw%3d%3d#",
			IntroductiontoSafeguardingChildrenTrainingformerlyreferredtoasLevel1Safeguarding: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLy8Lz2%2f13S4YC8jRwtZ0kc20%2f9Z83gqpDWAL0OAJ0t1iQ%2fGqta%2f84WJbNc%2bNFeiWo%3d#",
			IntroductiontoSafeguardingChildrenRefresherTrainingformerlyreferredtoasLevel1Safeguarding: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuK%2f0A6VGnb7kux3jeSs4nKhLnq4FJdi4OOLRDCu7fsZNzYy9mCB6FivREHE4iy7eW0%3d#",
			AdvancedSafeguardingChildrenTrainingformerlyreferredtoasLevel2Safeguarding: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIrz8fONA64as9MTg%2bFj5GrjTtXDfOEugWG%2ba9LQjWpp4a46vE2VeITnAKGQFja%2fdg%3d#",
			AdvancedSafeguardingChildrenRefresherTrainingformerlyreferredtoasLevel2Safeguarding: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLhF1xSH7%2fF5zRpakeQTlrho8s3v56BgxVnnIX1oOl7pRr%2fKEKDlTwPFPs%2fYDHuaTQ%3d#",
			SafeguardingVulnerableAdultsTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIZkhhui1hWQo6NYuxUe6bbz73FlFUq8oWYdOvB8zCKqXKw%2bRonp70b5kjIkSW21gY%3d#",
			PromotingPositiveBehaviourTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJF6U0%2fWqj4e%2fat%2fNcQRq0lClAdzv%2fQtmtSDsy0DKDM7hDzSGx7QBiJwLns%2fJG%2bo1s%3d#",
			DomesticViolenceandAbuseTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuK7BcxwSjiI%2bgft7%2fkkvlg9H4zgnH1cDpT49AzE74OW2v37Em8jmVVL8dKKcTRcdRk%3d#",
			SafeguardingChildrenInternetSafety: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJgH8ylJnNr3AMfu1SWD9KbrKZWC2OeB9jf%2f2UFSD968%2fU%2b%2f4LSngjY%2bm7C4AsZyBU%3d#",
			IntroductiontoHousingManagementTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKQFm1Ou0RHSSqfz1MxYdUutsDyH2RMsds8C0ZIQEX20Z3P0IsYnVLOB13obQOw43A%3d#",
			BusinessWritingSkillsTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKfDQw2UAaSfPFtikPHLNRgASKcWDCB%2fpqdAqD1yhof3NnmiFx0JrX44UbYArE80Ac%3d#",
			MinuteTakingTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLG%2bPurDBlWhREVYC5q%2bzz8etEeFYF3d6FEAn5HaQ0u4fbpCbi3Kt0Fn5WBfzeTrwWcINc9urOf3A%3d%3d#",
			PAandSecretarialSkills: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJYglhfyaVSHShLw7UN7IjuPkLIhVyKaDp0m4kT9q3Vf8OPXoB8weknT%2fkDtr6JnWQ%3d#",
			ConflictManagementTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKEusTTQ%2bUrmvAn69CgRo89cJbEhUd724g3DggolG0ruFq0zBBXJeEv4c89%2bi7u6wo%3d#",
			OnlineBookkeepingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLn3cORN3HMcsf8QOwz2qE9U8vFCvu1J4xW7f9CkXabFfEVVzhvaBevHOCV3x30fJM%3d#",
			OnlineSalesPricingandMarketingTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLLq3teA%2bUIp5NDzrVfxQMayFO79pqEGPF5nkb7wSW0D5HpOPCfatCi5IJG92NVYRg%3d#",
			StartingaBusinessCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI56dnE%2bsTnKFf%2fKhZOxVcntjw0HFuoHZHvvZm49Jw7Bk5exbNxFiDjh4AbRmjCGSY%3d#",
			DataProtection: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJEGHu6Vux30ZZyaHz65SCp90cS2boCrMZeLDEWGBAxlDLJ2px%2fgF1XwCbqS4f3yzI%3d#",
			AntiMoneyLaunderingAMLandFinancialCrime: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJBYsWUGl2EetyBvm99%2fYpE5UauoQJVWYn7DSZmEjJPWYsx7S9eYY4J8MZX0JdpUjo%3d#",
			RestaurantHospitalityTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJhHZToU90jD3BxBbvCVcFOvt1E4o%2f8f1Y1yQRfV16wvyJi3efBNzNYJVK0zpMk5mw%3d#",
			LeadershipandManagementTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI3eu9af7dMZFzchIp2I3ctV8QBcsgVTuuWSanw4hH2khC8k%2bybe7PrlMnUrZjkV2k%3d#",
			ProjectManagementTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKJfQIbLWLEHtinAy%2f5eW%2bwbt0ihIzO8ch2l4FHEB8nAd2j%2f11hzKbeqcfD9XJd0H4%3d#",
			NegotiationSkillsTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuL%2fL7JS14C347ka5n6BLnHvkDHtfoAT6sebcjQ%2f%2fBcKAqOFAgS4vkk%2bV3yYmCvwjsA%3d#",
			EventManagementTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJIfHE0QOAL1mFDw2wpRYTmyGuRY8pDxSqHt6H6d8s0rwOYVUTGcYqiwgNvw9s1ndI%3d#",
			EqualityandDiversityTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuL2rnmqMahw1NLfcm%2fBhlrosMBaPWVQ7FTCAkyHVGo5HFZZ9qxzvKz5fkbGgdGvEe4%3d#",
			CrossCulturalAwarenessTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIyZIV1VVJTm20n3L2DIy4MuQr26ju0lsuikD0dJg%2fRKNvelLXrolSjTh6KYCDErMM%3d#",
			TimeManagementTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI3qd0BV%2fo88zjNDv4EePNiLk9yFdoH%2bclMD4o%2f2T698CrJXH52pkepPAFNlSOaoQo%3d#",
			CustomerServiceTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLudtl3B0oXm8%2b4vecYBdCLV6DD%2fmHMRNjU51dXvK6mpOF7CsE63f%2bpDynU6ttrS4w%3d#",
			PatientCustomerServiceCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIzHOYzDyU1gP9nxvZF65kg%2f%2bIDGOrs1XcQz2jRY%2bcpvjIEHh9T2bKJtLy0PZOd8NY%3d#",
			RetailCustomerServiceCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJEpZyaQWqlHTqdlR3rNNq5eXkze7eFnKGQuJGbI8m2V26%2bOP6Wwp%2bSW7GQNUxYyEg%3d#",
			WorkplaceFirstAidTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKqvInKDEygCUz4PXkfthZScTO8mRFJOSgMBsn48b%2bAU%2fC8ev5zinjIll%2btOyTIwFU%3d#",
			PaediatricFirstAidTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJbfGYo80ZyF5Fgz3oPg%2bY79qCI4JC4%2f8xaZO%2fm26uNnEquFJYdC38x42F0V%2b4yBV8%3d#",
			SportsNutritionTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuK2qscnYz%2bZHUuEjixHA0CAo7FW0TAMqshuJ2OEhxyLMMBclikjl12PrJcXXmHGuDQ%3d#",
			NutritionforPregnancyandBabies: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLC1Gl328bGvOXefWXEWNDv07gCMq0%2brTTP%2bQ3EUvrPgu%2fITO0zfu62hzqOuwKl1xU%3d#",
			NutritionfortheElderly: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJpG%2bUyUfJFPlNDNQ9PdOh6u3i7UOaWLM1I9ChRdkYUl9DsdBqpAI3A6cbfhTlzAaY%3d#",
			Attaininga5intheFoodHygieneRatingSchemeTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJ%2bTTYcQyPpcyKkrmvBsOseWP3td91EEmXz8px1lx98ptBvBo5Oecr5yCMsS0yNTMM%3d#",
			FoodAllergenAwarenessTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLl04gE2he95LuNDUaEv4gFvgkRrssWAJob3r91au3UL5XdhjpCGFt%2fP40b590l30Y%3d#",
			FoodLabellingRequirementsTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuITm36ZbAQ8OHJGtMnwdXzDD%2fGda1Ud5xgC%2fprK9pg7lZV0BaSvucapVpfbr69Awlg%3d#",
			CommunicationSkillsTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIvYG3w3t%2f7634Cu6F8LYu%2bPNR7XDrACu1%2fGWTA5YPEKg%2f3olYrtd9kKuquUyrbQpA%3d#",
			PresentationSkillsTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJcA697KjCQDzAiYVeRaHOM9A0Z3LTJU%2bdtDLhwLaI6FhD6TTfpOcEtNWIxmSIAulc%3d#",
			IntroductiontoNeuroLinguisticProgrammingTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLK0hS3LlSsvuj7dZkhSbP3k5CnHHv5Udak2aBRLHaviMqlJRAW%2fp1K02d6RD%2f0zo0%3d#",
			AntiBriberyTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKYZPSGxvY6PbQnovEsByTGljld8sC1BuSfHFUhvJfVAxpMpMKJ4x9aZQzdOk91aIY%3d#",
			StressManagementTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJb9wVcMz9BIl2jSlQ53YVmBRNq%2bN87wKGp5Yc9DTYhdttfz4A8piZ1ef2zzcuuqQw%3d#",
			MovingandHandlingofPeopleinResidentialCareHomesTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKETU13DPMwN8reC6qK1zzYMPs77NvSPB8Tndc5mIo3pZu0jEssWmnA%2f9uGSUCF5As%3d#",
			RiskAssessment: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLmSQSKB9H3XASljnnHF4lbm9cqS5Agb2goMmPWiJsFb1sCYN3jFBBN9bBPVCJUDRQ%3d#",
			DSEAR: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLmXErF%2bIsfIqTGyWIwCREOFxxvTzjAS0dV3ZATh8M%2bPFkR9For6HZXxN6mmaNo2C6v8r8vPsb1Bg%3d%3d#",
			COMAH: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIvqTogzIW6WjYySbAeN6W2RfMAN5%2fNrQy%2fAH9fuhrAR6NWuQT6svVeDS0fH6K3kIay8VjWBw163w%3d%3d#",
			PersonalProtectiveEquipmentPPE: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLPXTfpOp7hwaOMcyHjqE6azVXRjF1wuzw2%2bFX3nYNu3iFflRY0yFMXVa71Q0G35vRu5dWW2M0FUg%3d%3d#",
			RIDDOR: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuL2B1zPau1JU0JVoSIjb9KgpdSwINAKVuTsSt%2fIRgpmjC7xLjlh2oIj1lrC%2fn8HuG0%3d#",
			WorkinginConfinedSpaces: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIgVqcmsjIZPvCiEc1Z0tt1w95pdLZktw%2fCyM1yAOelU9CbNK%2bQmwygLP78TAoYVqUSrMViDJ5sdA%3d%3d#",
			Level2HealthSafetyInduction: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIcteWOaw%2bpI7NpaWBA1PYf92vvGFK7%2febWSSZEJY4c%2bSATL%2f5jZ6LkgtxMhvmOn%2fY%3d#",
			Level3HealthSafetyintheWorkplace: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJtak8RNNWOGSEJ99UIMy541JrcQr72loSvwBb5lbhN3EIqAXlngYPtbVO1sqlNfts%3d#",
			InfectionControlandPrevention: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIbCTZbZFsmC%2b8Gdqb2tI9P8%2bUEzBV4FiJ7KZvvHK%2bRl%2b1Up3w7zvbc3IxXMbxAg44%3d#",
			OnlineManualHandlingAwarenessTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLv8PK3i91qIfEG014%2fvCJoiBXJAHtUkFQpT1ib3WJ%2bsVMayozoiAcdBACu1HWFbW8%3d#",
			OnlineFireSafetyCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLg7L0e8fiXXgN2FzeOUYjNwjPWInBAlKbbUO%2bfxy%2bXAhs0TvlS%2fN%2fPSEMcl7cQY20%3d#",
			FireWardenTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJvrjjgHI2vdFxgsO7eC46VLU2EBr7WL7Pz2BtK235R7VatTkUKGfMzTw7%2bsmK3UCe%2fQl%2fBAFz47Q%3d%3d#",
			WorkAtHeightTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJKV1Tk0EoJJK8r%2fu8Odb48MWAKRjaAnECOOBxsAwjocCuW7shtYBR4oKkXzDUyuXA%3d#",
			LadderSafety: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI%2bubt0Gvq3jmo6yB3Ze1hIvELztFxm9nAcJHyBN%2b3hLuw2xjkFKg6phmUeef6RrPQEm%2fwkLIYvfQ%3d%3d#",
			OfficeHealthSafetyTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLJPPgkUT5dLokSVZjhspv7CzCENSjiJbXBJ0JMANL4bfyEV%2fNgdY15RcmhFb4Ml8M%3d#",
			ElectricalSafetyTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKbVdr5Z2CU0Jm9l78izSjms55Ag9oqgPDPMI020nV1E8s6o2T311gYThlL8EGg1R8%3d#",
			EnvironmentalAwarenessTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLFTgqc33Ql6Gzc1siU5IompoMrb9Xb%2fq37QVJqjQSpMmZiy5yf0KDlheMsb5dPcQA%3d#",
			DisplayScreenEquipmentAwarenessTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJYgsxIkKsHOs6DVdCFbVMnc3yCiTiFJ0eTeMkV6%2bVmtjNEQal0MR12KTceAi%2bUHzc%3d#",
			NoiseAwarenessTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKJFsM1Rr9bSNL4nPzEEOERN9IW5oph9FK2lf%2bVrc8mI5qW9%2fGQ74H5Bmk%2fW0XjqcA%3d#",
			NutritionandHealthyEating: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKWsRON5KO5r92nPbSrd%2bqRDCWp67XjLKcF9bQrOrw2%2fNQWHfK4hK2nNlJwn2m%2bulM%3d#",
			SafeguardingChildrenwithDisabilities: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuK69m8ikJRkSPcYIINnIbj82nentCOTGqaicn1nR5tAvn0HGvQBB1A2UhvU3Le%2bZzw%3d#",
			ChildSexualExploitationAwareness: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJeFJ2Rcaej4uld0a8PY%2byZFe6DnzyM7PAgQxCABVqJXCzGpGuZ%2fWLLXjBHWNXaOPA%3d#",
			HiddenHarmParentalSubstanceMisuseTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJriyEXOOL2q%2b2uFW0kEzMlsn2McGGfLc3Ifhu4eFhQcp9peXxLuHeZQazntB0vWmY%3d#",
			ParentalMentalHealthanditsImpactonChildrensLivesTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIMqn1mPoQ5Uv%2bgSbdnqEQiFk8CX7h4zXfAKZJguuMZ4cw91%2bBcwoqjQjAY5hjudCg%3d#",
			WorkingwithIssuesofChildNeglect: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKR1s8Apu7zJvfDlkibslfsqUitlnIpoN9ljU9KYJphqIOgGInc9NCjN4BIDfLNE1o%3d#",
			SaferRecruitmentTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIxNi8vJ9VkTkxoMv8wjD2NeYkRBT3zn7OAkhKPiwXTgj5C3uwM9t%2bqNOPmweym7DU%3d#",
			SlipsTripsandFalls: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuINI1bcW9w1tumncnIicoqF%2f7JRi9WJ6sNR%2bDvBB%2fp%2bd0ZAgf4WfL1ws1bY8%2b8aYAQ%3d#",
			ManagingHealthSafetyTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIEWyCRXR7WLUeeMWiFP14SJXWfzlZticaDe%2bzNGxASvpQPLjK53MHkIhcEIoPw4sk%3d#",
			NutritionforWeightLoss: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJmVi1%2f6WCwJXew2VDvSH8ZQHczx2RWYqkITJtNqucwHSpIDE%2bUOfSG2d6U682HTPg%3d#",
			NutritionforChildren: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLHalq3Jjd18tdSyHa2uLNcBHKuSXDXJiupxRokA%2bhbChm9G6PpiGKjwkGwaAiBEJY%3d#",
			ChildhoodWeightManagement: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJC4%2fMKMc%2fBQprKvZdnm%2bKS96X0PQ9ma%2b59eR8q1Nnz%2bbdG1zbzQi%2bmwHLkPlc%2fd%2bI%3d#"
		},
		instantAccessLinksProductPage: {
			Level2FoodHygieneSafetyCertificateForCatering: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLiQZCQKCWlOa2SiksRoKpLQ2Lqng%2bZP4GGpaOzLupXwM0CQSzy5iXjJ6%2fzNLTnbNg%3d#",
			Level2FoodHygieneSafetyCertificateForRetail: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI4nu2Qjd7KisW%2bhk5rjN8a%2bO%2fG4SqPz7xoxS0oa1aMHd6GzaZt0m8ClVfCR5n3ezA%3d#",
			Level2FoodHygieneSafetyCertificateForManufacturing: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJ20Xd%2bH1VnP07%2bcehXVwB8DGTNYjnXnZ0iADKWVT%2b%2fAgr%2f0eLqqlzHE%2fLoan0vQXo%3d#",
			Level3FoodHygieneSafetyinCateringTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIeCCq1ZG0xSB0%2bL%2bE9gCPozk4a7gUicf6QaWWgvXhvm4myI5pDpvZMZz%2buzD8V1aA%3d#",
			Level3FoodHygieneSafetyinRetailTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIigZndxrGzrUc0etO2UJ6aeGWX4vgWVUzOiD0PL2S6FUwxO6T3krpY8J0I%2b8r3M4M%3d#",
			Level3FoodHygieneSafetyinManufacturingTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIiFCZQfZntuWvMO3oUo7iPIHvGuu7rSMoHEmIb%2biESTOPaGaql%2bpaPTlYM%2bn82g5E%3d#",
			Level1FoodSafetyHygieneCertificateOnline: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuK%2fMTj7l9imMdbFi5xtVJvKXOH4Nb015UITNAud3tCx9LEJuBVwuea7ZBoUXZiEaYo%3d#",
			OnlineHealthSafetyforFoodHandlersCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJZRNzdzNYTEEgMEIVcSI3vYVP2%2fGgLhzjQDHhdV9bvaZekhI%2fhMNe4vrbd2G50eGg%3d#",
			Level2CleaninginFoodPremisesTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJzmsm8tGAGCz0E%2bIv9%2bbfWtMSZHrnLgY3EG3IiJ71PO4zsaOMAaakPQ0apKDUcPWQ%3d#",
			Level2HACCPTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIhSjOgAQfPLLQ2HDu82R6tVtxgRoNi5TW3Ky8d7hPCIu0lnH%2bS42o5%2fwT1ZD6a8qA%3d#",
			Level3HACCPTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIIFXDhS4Nt18w67x5LkRsgpzH785WitQS01Bp7cUseTfrvyh1QUjpyanVKARilnRg%3d#",
			ControlofSubstancesHazardoustoHealthCOSHHTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI%2bFZb1dUJuChKzo9SYsEervJN%2bsHi8tzfoizEBCSWZmnJuouTcyKN%2bwSfsFYiRso8%3d#",
			COSHHforClinicalEnvironmentsTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIJDYCskHjRYlRpXMAaQSiky2QgZorHtVwFpgODauD3FGshtF4du%2bLNHfx6IYI1mD0%3d#",
			CSCSRevisionGuide: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJMGxlhPJG91qq3HuNJqnMJ0r%2bc0Z%2b4cN%2fCVgA1Tbi7I24%2bS518tPOx1AwwV3QXFC8%3d#",
			LegionellaandLegionnairesDiseaseAwarenessTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuL7Joee3qmSsK38g4MYTpmIMrlf6%2bY7dMv9jRt%2bk6CSjvglBcE8nc1K6FwUo3YrAl0%3d#",
			AsbestosAwarenessCategoryATrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI25VkmmeOFkTK5LgrI4r%2f%2fRzN0epq7UII23ymFvTBCM29Lqc%2fdzSndyiqXNFPw0fA%3d#",
			SocialResponsibilityInGamblingAwarenessTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuICogYLK%2f8lT876UgrIz1SX78SS7XqxVXVrYUrzezzGCl4g7n4Jx5Qi9sOcJCm30sQ%3d#",
			DementiaAwarenessTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIngnB1wY2sZ39FGj1rZkdHsN%2fMCGHFobOZPbHorgqdEFJ5hgEz7L7wtLJHOaets6Nz9KHmVwPHIw%3d%3d#",
			IntroductiontoSafeguardingChildrenTrainingCourseformerlyreferredtoasLevel1Safeguarding: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLy8Lz2%2f13S4YC8jRwtZ0kc20%2f9Z83gqpDWAL0OAJ0t1iQ%2fGqta%2f84WJbNc%2bNFeiWo%3d#",
			IntroductiontoSafeguardingChildrenRefresherTrainingformerlyreferredtoasLevel1Safeguarding: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuK%2f0A6VGnb7kux3jeSs4nKhLnq4FJdi4OOLRDCu7fsZNzYy9mCB6FivREHE4iy7eW0%3d#",
			AdvancedSafeguardingChildrenformerlyreferredtoasLevel2Safeguarding: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIrz8fONA64as9MTg%2bFj5GrjTtXDfOEugWG%2ba9LQjWpp4a46vE2VeITnAKGQFja%2fdg%3d#",
			AdvancedSafeguardingChildrenRefresherTrainingformerlyreferredtoasLevel2Safeguarding: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLhF1xSH7%2fF5zRpakeQTlrho8s3v56BgxVnnIX1oOl7pRr%2fKEKDlTwPFPs%2fYDHuaTQ%3d#",
			SafeguardingVulnerableAdultsSOVATrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIZkhhui1hWQo6NYuxUe6bbz73FlFUq8oWYdOvB8zCKqXKw%2bRonp70b5kjIkSW21gY%3d#",
			PromotingPositiveBehaviourOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJF6U0%2fWqj4e%2fat%2fNcQRq0lClAdzv%2fQtmtSDsy0DKDM7hDzSGx7QBiJwLns%2fJG%2bo1s%3d#",
			DomesticViolenceandAbuse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuK7BcxwSjiI%2bgft7%2fkkvlg9H4zgnH1cDpT49AzE74OW2v37Em8jmVVL8dKKcTRcdRk%3d#",
			SafeguardingChildrenOnTheInternetTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJgH8ylJnNr3AMfu1SWD9KbrKZWC2OeB9jf%2f2UFSD968%2fU%2b%2f4LSngjY%2bm7C4AsZyBU%3d#",
			IntroductiontoHousingManagement: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKQFm1Ou0RHSSqfz1MxYdUutsDyH2RMsds8C0ZIQEX20Z3P0IsYnVLOB13obQOw43A%3d#",
			BusinessWritingSkillsTrainingCourseOnline: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKfDQw2UAaSfPFtikPHLNRgASKcWDCB%2fpqdAqD1yhof3NnmiFx0JrX44UbYArE80Ac%3d#",
			MinuteTakingTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLG%2bPurDBlWhREVYC5q%2bzz8etEeFYF3d6FEAn5HaQ0u4fbpCbi3Kt0Fn5WBfzeTrwWcINc9urOf3A%3d%3d#",
			OnlinePASecretarialTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJYglhfyaVSHShLw7UN7IjuPkLIhVyKaDp0m4kT9q3Vf8OPXoB8weknT%2fkDtr6JnWQ%3d#",
			OnlineConflictManagementTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKEusTTQ%2bUrmvAn69CgRo89cJbEhUd724g3DggolG0ruFq0zBBXJeEv4c89%2bi7u6wo%3d#",
			SmallBusinessBookkeepingOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLn3cORN3HMcsf8QOwz2qE9U8vFCvu1J4xW7f9CkXabFfEVVzhvaBevHOCV3x30fJM%3d#",
			OnlineSalesPricingandMarketingTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLLq3teA%2bUIp5NDzrVfxQMayFO79pqEGPF5nkb7wSW0D5HpOPCfatCi5IJG92NVYRg%3d#",
			OnlineStartingABusinessTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI56dnE%2bsTnKFf%2fKhZOxVcntjw0HFuoHZHvvZm49Jw7Bk5exbNxFiDjh4AbRmjCGSY%3d#",
			DataProtectionActOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJEGHu6Vux30ZZyaHz65SCp90cS2boCrMZeLDEWGBAxlDLJ2px%2fgF1XwCbqS4f3yzI%3d#",
			AntiMoneyLaunderingAMLandFinancialCrime: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJBYsWUGl2EetyBvm99%2fYpE5UauoQJVWYn7DSZmEjJPWYsx7S9eYY4J8MZX0JdpUjo%3d#",
			RestaurantHospitalityOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJhHZToU90jD3BxBbvCVcFOvt1E4o%2f8f1Y1yQRfV16wvyJi3efBNzNYJVK0zpMk5mw%3d#",
			LeadershipManagementTrainingOnlineCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI3eu9af7dMZFzchIp2I3ctV8QBcsgVTuuWSanw4hH2khC8k%2bybe7PrlMnUrZjkV2k%3d#",
			OnlineProjectManagementTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKJfQIbLWLEHtinAy%2f5eW%2bwbt0ihIzO8ch2l4FHEB8nAd2j%2f11hzKbeqcfD9XJd0H4%3d#",
			NegotiationSkillsOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuL%2fL7JS14C347ka5n6BLnHvkDHtfoAT6sebcjQ%2f%2fBcKAqOFAgS4vkk%2bV3yYmCvwjsA%3d#",
			EventManagementTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJIfHE0QOAL1mFDw2wpRYTmyGuRY8pDxSqHt6H6d8s0rwOYVUTGcYqiwgNvw9s1ndI%3d#",
			OnlineEqualityandDiversityTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuL2rnmqMahw1NLfcm%2fBhlrosMBaPWVQ7FTCAkyHVGo5HFZZ9qxzvKz5fkbGgdGvEe4%3d#",
			CrossCulturalAwarenessOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIyZIV1VVJTm20n3L2DIy4MuQr26ju0lsuikD0dJg%2fRKNvelLXrolSjTh6KYCDErMM%3d#",
			TimeManagementTrainingOnlineCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI3qd0BV%2fo88zjNDv4EePNiLk9yFdoH%2bclMD4o%2f2T698CrJXH52pkepPAFNlSOaoQo%3d#",
			OnlineCustomerServiceTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLudtl3B0oXm8%2b4vecYBdCLV6DD%2fmHMRNjU51dXvK6mpOF7CsE63f%2bpDynU6ttrS4w%3d#",
			OnlinePatientCustomerServiceTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIzHOYzDyU1gP9nxvZF65kg%2f%2bIDGOrs1XcQz2jRY%2bcpvjIEHh9T2bKJtLy0PZOd8NY%3d#",
			RetailCustomerServiceCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJEpZyaQWqlHTqdlR3rNNq5eXkze7eFnKGQuJGbI8m2V26%2bOP6Wwp%2bSW7GQNUxYyEg%3d#",
			WorkplaceFirstAidOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKqvInKDEygCUz4PXkfthZScTO8mRFJOSgMBsn48b%2bAU%2fC8ev5zinjIll%2btOyTIwFU%3d#",
			PaediatricFirstAidOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJbfGYo80ZyF5Fgz3oPg%2bY79qCI4JC4%2f8xaZO%2fm26uNnEquFJYdC38x42F0V%2b4yBV8%3d#",
			SportsNutritionOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuK2qscnYz%2bZHUuEjixHA0CAo7FW0TAMqshuJ2OEhxyLMMBclikjl12PrJcXXmHGuDQ%3d#",
			NutritionForPregnancyBabiesTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLC1Gl328bGvOXefWXEWNDv07gCMq0%2brTTP%2bQ3EUvrPgu%2fITO0zfu62hzqOuwKl1xU%3d#",
			NutritionfortheElderlyTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJpG%2bUyUfJFPlNDNQ9PdOh6u3i7UOaWLM1I9ChRdkYUl9DsdBqpAI3A6cbfhTlzAaY%3d#",
			Attaininga5intheFoodHygieneRatingScheme: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJ%2bTTYcQyPpcyKkrmvBsOseWP3td91EEmXz8px1lx98ptBvBo5Oecr5yCMsS0yNTMM%3d#",
			FoodAllergenAwarenessTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLl04gE2he95LuNDUaEv4gFvgkRrssWAJob3r91au3UL5XdhjpCGFt%2fP40b590l30Y%3d#",
			FoodLabellingRegulationsTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuITm36ZbAQ8OHJGtMnwdXzDD%2fGda1Ud5xgC%2fprK9pg7lZV0BaSvucapVpfbr69Awlg%3d#",
			CommunicationSkillsOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIvYG3w3t%2f7634Cu6F8LYu%2bPNR7XDrACu1%2fGWTA5YPEKg%2f3olYrtd9kKuquUyrbQpA%3d#",
			PresentationSkillsOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJcA697KjCQDzAiYVeRaHOM9A0Z3LTJU%2bdtDLhwLaI6FhD6TTfpOcEtNWIxmSIAulc%3d#",
			IntroductiontoNeuroLinguisticProgrammingNLPTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLK0hS3LlSsvuj7dZkhSbP3k5CnHHv5Udak2aBRLHaviMqlJRAW%2fp1K02d6RD%2f0zo0%3d#",
			AntiBriberyOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKYZPSGxvY6PbQnovEsByTGljld8sC1BuSfHFUhvJfVAxpMpMKJ4x9aZQzdOk91aIY%3d#",
			StressManagementOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJb9wVcMz9BIl2jSlQ53YVmBRNq%2bN87wKGp5Yc9DTYhdttfz4A8piZ1ef2zzcuuqQw%3d#",
			MovingandHandlingofPeopleinResidentialCareHomes: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKETU13DPMwN8reC6qK1zzYMPs77NvSPB8Tndc5mIo3pZu0jEssWmnA%2f9uGSUCF5As%3d#",
			RiskAssessmentTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLmSQSKB9H3XASljnnHF4lbm9cqS5Agb2goMmPWiJsFb1sCYN3jFBBN9bBPVCJUDRQ%3d#",
			DSEARTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLmXErF%2bIsfIqTGyWIwCREOFxxvTzjAS0dV3ZATh8M%2bPFkR9For6HZXxN6mmaNo2C6v8r8vPsb1Bg%3d%3d#",
			COMAHTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIvqTogzIW6WjYySbAeN6W2RfMAN5%2fNrQy%2fAH9fuhrAR6NWuQT6svVeDS0fH6K3kIay8VjWBw163w%3d%3d#",
			PersonalProtectiveEquipmentPPETrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLPXTfpOp7hwaOMcyHjqE6azVXRjF1wuzw2%2bFX3nYNu3iFflRY0yFMXVa71Q0G35vRu5dWW2M0FUg%3d%3d#",
			RIDDORTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuL2B1zPau1JU0JVoSIjb9KgpdSwINAKVuTsSt%2fIRgpmjC7xLjlh2oIj1lrC%2fn8HuG0%3d#",
			WorkingInConfinedSpacesTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIgVqcmsjIZPvCiEc1Z0tt1w95pdLZktw%2fCyM1yAOelU9CbNK%2bQmwygLP78TAoYVqUSrMViDJ5sdA%3d%3d#",
			HealthandSafetyInductionLevel2Training: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIcteWOaw%2bpI7NpaWBA1PYf92vvGFK7%2febWSSZEJY4c%2bSATL%2f5jZ6LkgtxMhvmOn%2fY%3d#",
			Level3HealthSafetyInTheWorkplaceOnlineCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJtak8RNNWOGSEJ99UIMy541JrcQr72loSvwBb5lbhN3EIqAXlngYPtbVO1sqlNfts%3d#",
			InfectionControlPreventionOnlineTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIbCTZbZFsmC%2b8Gdqb2tI9P8%2bUEzBV4FiJ7KZvvHK%2bRl%2b1Up3w7zvbc3IxXMbxAg44%3d#",
			OnlineManualHandlingTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLv8PK3i91qIfEG014%2fvCJoiBXJAHtUkFQpT1ib3WJ%2bsVMayozoiAcdBACu1HWFbW8%3d#",
			OnlineFireSafetyTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLg7L0e8fiXXgN2FzeOUYjNwjPWInBAlKbbUO%2bfxy%2bXAhs0TvlS%2fN%2fPSEMcl7cQY20%3d#",
			FireWardenTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJvrjjgHI2vdFxgsO7eC46VLU2EBr7WL7Pz2BtK235R7VatTkUKGfMzTw7%2bsmK3UCe%2fQl%2fBAFz47Q%3d%3d#",
			OnlineWorkingAtHeightTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJKV1Tk0EoJJK8r%2fu8Odb48MWAKRjaAnECOOBxsAwjocCuW7shtYBR4oKkXzDUyuXA%3d#",
			OnlineLadderSafetyTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuI%2bubt0Gvq3jmo6yB3Ze1hIvELztFxm9nAcJHyBN%2b3hLuw2xjkFKg6phmUeef6RrPQEm%2fwkLIYvfQ%3d%3d#",
			OfficeHealthSafetyOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLJPPgkUT5dLokSVZjhspv7CzCENSjiJbXBJ0JMANL4bfyEV%2fNgdY15RcmhFb4Ml8M%3d#",
			ElectricalSafetyTrainingOnlineCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKbVdr5Z2CU0Jm9l78izSjms55Ag9oqgPDPMI020nV1E8s6o2T311gYThlL8EGg1R8%3d#",
			EnvironmentalAwarenessTrainingOnlineCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLFTgqc33Ql6Gzc1siU5IompoMrb9Xb%2fq37QVJqjQSpMmZiy5yf0KDlheMsb5dPcQA%3d#",
			DisplayScreenEquipmentDSEVDUTrainingCourses: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJYgsxIkKsHOs6DVdCFbVMnc3yCiTiFJ0eTeMkV6%2bVmtjNEQal0MR12KTceAi%2bUHzc%3d#",
			NoiseAwarenessTrainingOnlineCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKJFsM1Rr9bSNL4nPzEEOERN9IW5oph9FK2lf%2bVrc8mI5qW9%2fGQ74H5Bmk%2fW0XjqcA%3d#",
			NutritionandHealthyEatingTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKWsRON5KO5r92nPbSrd%2bqRDCWp67XjLKcF9bQrOrw2%2fNQWHfK4hK2nNlJwn2m%2bulM%3d#",
			SafeguardingChildrenwithDisabilitiesOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuK69m8ikJRkSPcYIINnIbj82nentCOTGqaicn1nR5tAvn0HGvQBB1A2UhvU3Le%2bZzw%3d#",
			ChildSexualExploitationAwarenessTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJeFJ2Rcaej4uld0a8PY%2byZFe6DnzyM7PAgQxCABVqJXCzGpGuZ%2fWLLXjBHWNXaOPA%3d#",
			ParentalSubstanceMisuseOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJriyEXOOL2q%2b2uFW0kEzMlsn2McGGfLc3Ifhu4eFhQcp9peXxLuHeZQazntB0vWmY%3d#",
			ParentalMentalHealthOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIMqn1mPoQ5Uv%2bgSbdnqEQiFk8CX7h4zXfAKZJguuMZ4cw91%2bBcwoqjQjAY5hjudCg%3d#",
			ChildNeglectTrainingOnlineCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuKR1s8Apu7zJvfDlkibslfsqUitlnIpoN9ljU9KYJphqIOgGInc9NCjN4BIDfLNE1o%3d#",
			SaferRecruitmentOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIxNi8vJ9VkTkxoMv8wjD2NeYkRBT3zn7OAkhKPiwXTgj5C3uwM9t%2bqNOPmweym7DU%3d#",
			SlipsTripsFallsOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuINI1bcW9w1tumncnIicoqF%2f7JRi9WJ6sNR%2bDvBB%2fp%2bd0ZAgf4WfL1ws1bY8%2b8aYAQ%3d#",
			OnlineManagingHealthSafetyTraining: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuIEWyCRXR7WLUeeMWiFP14SJXWfzlZticaDe%2bzNGxASvpQPLjK53MHkIhcEIoPw4sk%3d#",
			OnlineNutritionforWeightLossTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJmVi1%2f6WCwJXew2VDvSH8ZQHczx2RWYqkITJtNqucwHSpIDE%2bUOfSG2d6U682HTPg%3d#",
			NutritionForChildrenOnlineTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuLHalq3Jjd18tdSyHa2uLNcBHKuSXDXJiupxRokA%2bhbChm9G6PpiGKjwkGwaAiBEJY%3d#",
			OnlineChildhoodWeightManagementTrainingCourse: "https://www.highspeedtraining.co.uk/registerdemo.aspx?qw=EngxVM%2fsYuJC4%2fMKMc%2fBQprKvZdnm%2bKS96X0PQ9ma%2b59eR8q1Nnz%2bbdG1zbzQi%2bmwHLkPlc%2fd%2bI%3d#"
		}
	};


	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-bullets {\
		border: solid 0px green;\
		width: 72%;\
		float: left;\
		margin-top: 15px;\
		font-size: .97em;\
	}\
	.AWA-try-area {\
		border: solid 0px red;\
		float: right;\
	    text-align: center;\
	    width: 25%;\
	}\
	.AWA-try-area p {\
		margin-top: 0;\
		margin-bottom: 3px;\
	}\
	.AWA-free, .AWA-free-p {\
		padding: 4px;\
		font-size: 1em;\
	    display: block;\
	}\
	.AWA-free-p {\
		width: 72%;\
		margin: 0 auto;\
	}\
	.AWA-divider {\
		width: 75%;\
		margin: 0 auto;\
		border-top: solid 1px gray;\
		margin-top: 10px;\
		margin-bottom: 5px;\
	}\
	AWA-smaller {\
		font-size: .85em;\
    	font-weight: normal;\
	}\
	.AWA-find-out {\
		font-weight: normal;\
	}\
	.AWA-try-area-p {\
		clear: right;\
		width: 100%;\
		text-align: center;\
	}\
	.AWA-try-area-p p {\
		margin-bottom: 2px;\
	}\
	.AWA-bullets-p {\
		width: 100%;\
		clear: left;\
		margin-top: 15px;\
		font-size: .97em;\
	}\
	.AWA-or-buy {\
		text-align: center;\
		border-top: solid 1px #DEDDDD;\
		margin-top: 10px;\
	}\
	.AWA-bullets2 {\
		display: none;\
		text-align: left;\
		clear: both;\
		margin-bottom: 15px;\
	}\
	.product-description {\
		margin-bottom: 4px;\
	}\
	@media screen and (max-width: 767px) {\
		.AWA-bullets {\
			width: 100%;\
			display: none;\
		}\
		.AWA-bullets2 {\
			display: block;\
		}\
	    .AWA-try-area {\
	        clear: both;\
	        margin-top: 15px;\
	        width: 100%;\
	    }\
	    .AWA-try-area .AWA-free {\
	    	width: 80%;\
	    	margin: 0 auto;\
	    }\
	    .AWA-try-area .AWA-divider {\
	    	clear: both;\
	    }\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    // Product Listing Page Code
	    if ($("h1:contains('Courses Available from High Speed Training')").length || $("h1:contains('Online Food Hygiene Training Courses')").length || $("h1:contains('Online Health & Safety Training Courses')").length || $("h1:contains('Online Business Skills and Management Training Courses')").length || $("h1:contains('Online Health & Nutrition Courses')").length || $("h1:contains('Safeguarding People Courses')").length || $("h1:contains('Online Financial Services Courses')").length) {
		    // Attach new bullets to each page in product listing
		    $(".product-description").after(exp.vars.bullets);
		    $(".AWA-bullets").after(exp.vars.tryArea);

		    // Hide existing "Find out more" button
		    $(".productLink").hide();

		    // Implement "Find out more" links
		    $(".AWA-orange").each(function() {
		    	var targetLink = $(this).parent().parent().next().find('a').attr('href');
		    	$(this).attr('href', targetLink);
		    });

		    // Managing Health & Safety Training has inconsistent HTML so the target link won't set. We need to do it manually
		    $("h2:contains('Managing Health & Safety Training')").parent().find('.AWA-orange').attr('href', 'https://www.highspeedtraining.co.uk/health-and-safety/online-managing-safety-course.aspx');

		    // Implement "FREE Instant Access" links
		    $(".AWA-free").each(function() {
		    	var productTile = $.trim($(this).closest('.col-sm-10').find('h2').text());
		    	productTile = normalizeTitle(productTile);

		    	$(this).attr('href', exp["vars"]["instantAccessLinks"][productTile]);
		    });

		    // Insert a second set of bullets to be shown only on mobile
		    $(".AWA-free").after(exp.vars.bullets2);
	    }



	    // Product Page Code
	    if ($(".course-price").length) {
	    	// Insert "FREE Instant Access" and reformat div
	    	$(".course-price").after(exp.vars.tryArea);
	    	$(".AWA-try-area").addClass("AWA-try-area-p").removeClass("AWA-try-area");
	    	$(".AWA-find-out").hide();
	    	$(".AWA-divider").hide();

	    	// Insert bullets and reformat div
	    	$(".AWA-try-area-p").after(exp.vars.bullets);
	    	$(".AWA-bullets").addClass("AWA-bullets-p").removeClass("AWA-bullets");

	    	// Change class of .AWA-free so it can be properly tracked as a goal
	    	$(".AWA-free").addClass("AWA-free-p").addClass("btn").addClass('btn-green').removeClass("AWA-free");

	    	// Insert "or buy..." div
	    	$(".AWA-bullets-p").after(exp.vars.orBuy);

	    	// Hide discounts div
	    	$(".discounts-applicable").hide();

	    	// Implement "FREE Instant Access" links
	    	var courseTitle = $.trim($(".product-description").find('h1').first().text());
	    	courseTitle = normalizeTitle(courseTitle);
	    	// The product titles on product pages differ from the titles on the listing page so we'll need to reference a new JSON data set (instantAccessLinksProductPage)
	    	$(".AWA-free-p").attr('href', exp["vars"]["instantAccessLinksProductPage"][courseTitle]);
	    }


	    // Normalize product titles to remove all unusable JS characters so it could be used as a key name
	    function normalizeTitle(title) {
	    	var title = title.replace(/\s+/g, "");
	    	title = title.replace(/\&+/g, "");
	    	title = title.replace(/-+/g, "");
	    	title = title.replace(/'+/g, "");
	    	title = title.replace(/\(+/g, "");
	    	title = title.replace(/\)+/g, "");
	    	title = title.replace(/:+/g, "");
	    	title = title.replace(/,+/g, "");
	    	return title;
	    }


	};

	// Run the experiment
	$(document).ready(function() {
		// var checkExist = setInterval(function() {
		// 	if ($(".prod-carousal-img-count-for-zoom.prod-carousal-small-img.cursor-pointer").length) {
		 		exp.init();
		// 		clearInterval(checkExist);
		// 	}
		// }, 100); 
	});


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
