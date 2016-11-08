"use strict";

$(document).ready(function() {

let battleBot1 = "";
let battleBot2 = "";



$('#battlebtn').on("click", () => { 
	if( $('#player1-name').val() !== "" && $('.robot-radiobtn1').is(':checked') && $('#player2-name').val() !== "" && $('.robot-radiobtn2').is(':checked') ) {
		$('.select-players').addClass("hidden");
		$('.battlebtn-area').addClass("hidden");
		$('.battleground-area').removeClass("hidden");
		$('.attackbtn-area').removeClass("hidden");
		
		//Player 1
		let player1_Name = $('#player1-name').val();
		let player1_RobotChoice = $('input[name="player1-robot"]:checked').val();
		
		$('#player1-battleBot').append('<h2>' + player1_Name + '</h2>');
		$('#player1-battleBot').append('<h3>' + player1_RobotChoice + '</h3>');

		let battleBot1 = new Robot.BattleBots[player1_RobotChoice](); // see notes below
		console.log("battleBot1:", battleBot1);
		
		//Input Player 2
		let player2_Name = $('#player2-name').val();
		let player2_RobotChoice = $('input[name="player2-robot"]:checked').val();

		$('#player2-battleBot').append('<h2>' + player2_Name + '</h2>');
		$('#player2-battleBot').append('<h3>' + player2_RobotChoice + '</h3>');

		let battleBot2 = new Robot.BattleBots[player2_RobotChoice](); 

		console.log("battleBot2:", battleBot2);


		//Attack Function
		$('#attackbtn').on("click", () => {
			$('#player1-messages').html(player1_Name + " has " + battleBot1.basicHealth + " health.");
			$('#player2-messages').html(player2_Name + " has " + battleBot2.basicHealth + " health.");
			
			battleBot1.basicHealth = battleBot1.basicHealth - battleBot2.basicDamage;
			battleBot2.basicHealth = battleBot2.basicHealth - battleBot1.basicDamage;

			if (battleBot1.basicHealth < 0) {
				$('#loser-message').html(player1_Name + " has died.");
				$('.battleground-area').addClass("hidden");
				$('.loser-area').removeClass("hidden");
			}	else if (battleBot2.basicHealth < 0) {
				$('#loser-message').html(player2_Name + " has died.");
				$('.battleground-area').addClass("hidden");
				$('.loser-area').removeClass("hidden");
			}
		});


	} else {
		$('#error-message').removeClass("hidden");
	}

	

});

});


