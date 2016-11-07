"use strict";

var Robot = (function(CreateRobot) {

	CreateRobot.BattleBots = {};

	CreateRobot.BattleBots.TemplateRobot = function() {
		this.playerName = null;
		this.health = null;
		this.damage = null;
		this.weapon = null;
	};


	//Robot Types -------------------------------------------------------------
	
	CreateRobot.BattleBots.Aerial = function() {
		this.type = "Aerial";
		this.basicHealth = Math.floor(Math.random() * (600 - 500)) + 500;
		this.basicDamage = Math.floor(Math.random() * (150 - 50)) + 50; 
	};
	CreateRobot.BattleBots.Aerial.prototype = new CreateRobot.BattleBots.TemplateRobot();

	
	CreateRobot.BattleBots.Ground = function() {
		this.type = "Ground";
		this.basicHealth = Math.floor(Math.random() * (1000 - 800)) + 1000;
		this.basicDamage = Math.floor(Math.random() * (100 - 10)) + 10; 
	};
	CreateRobot.BattleBots.Ground.prototype = new CreateRobot.BattleBots.TemplateRobot();

	
	CreateRobot.BattleBots.Water = function() {
		this.type = "Water";
		this.basicHealth = Math.floor(Math.random() * (550 - 450)) + 450;
		this.basicDamage = Math.floor(Math.random() * (200 - 25)) + 25; 
	};
	CreateRobot.BattleBots.Water.prototype = new CreateRobot.BattleBots.TemplateRobot();
	
	
	//Robot Models -------------------------------------------------------------

	CreateRobot.BattleBots.ThatsNoMoon = function() {
		this.robotName = "That's No Moon";
		this.team = "Antagonist";
		this.attacks = ["Alderaan, Alder-gone!", "Vader’s Lazers", "Lord Timberlake commands: 'I be on my suit and TIE shit, TIE shit, TIE'"];
	};
	CreateRobot.BattleBots.ThatsNoMoon.prototype = new CreateRobot.BattleBots.Aerial();

	
	CreateRobot.BattleBots.WrathOfNasa = function() {
		this.robotName = "Wrath of Nasa";
		this.team = "Protagonist";
		this.attacks = ["ISS, ISS Baby", "Revenge of the Nerds", "Curiosity Killed the Cat (and Everyone Else)"];
	};
	CreateRobot.BattleBots.ThatsNoMoon.prototype = new CreateRobot.BattleBots.Aerial();


	CreateRobot.BattleBots.PleaseAndTankYou = function() {
		this.robotName = "Please-and-Tank-You";
		this.team = "Protagonist";
		this.attacks = ["Please, sir, I'd like some war.", "Courteous Missile (quiet explosion, doesn’t wake the neighbors)"];
	};
	CreateRobot.BattleBots.PleaseAndTankYou.prototype = new CreateRobot.BattleBots.Ground();

	
	CreateRobot.BattleBots.PuritanEarthquaker = function() {
		this.robotName = "Puritan Earthquaker";
		this.team = "Antagonist";
		this.attacks = ["Bowl of Plain Oatmeal (oh, the HUMANITY!)", "One Packet of Plain Oatmeal (there’s not even FRUIT!)", "Whole Carton of Plain Oatmeal (COMPLETELY DRY)"];
	};
	CreateRobot.BattleBots.PuritanEarthquaker.prototype = new CreateRobot.BattleBots.Ground();


	CreateRobot.BattleBots.CthulhusStepmother = function() {
		this.robotName = "Cthulhu’s Stepmother";
		this.team = "Antagonist";
		this.attacks = ["Eternal Nagging of the Ancestors", "Favoritism to Direct Offspring", "Snide Remarks at the Dinner Table"];
	};
	CreateRobot.BattleBots.CthulhusStepmother.prototype = new CreateRobot.BattleBots.Water();


	CreateRobot.BattleBots.UnsuspectingRubberDucky = function() {
		this.robotName = "Unsuspecting Rubber Ducky";
		this.team = "Protagonist";
		this.attacks = ["DAWN OF REVELATION", "MULTIDIMENSIONAL BLACKHOLE", "RUB-A-DUB-DUB, GLUB-BLUB-BLUB, YOU'RE DROWNING"];
	};
	CreateRobot.BattleBots.UnsuspectingRubberDucky.prototype = new CreateRobot.BattleBots.Water();



	return CreateRobot;

})(Robot || {});