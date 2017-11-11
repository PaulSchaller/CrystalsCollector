//my jQuery script
//loading the entire document and then starting the execution 
$(document).ready(function() {

//setting the initial values of game variables
//generate a random number as the user's target score	
	var numberToHit = Math.floor(Math.random()*102) + 19;
	$('#targetNumber').text(numberToHit);

	var userTotal = 0;
	$('#userFinalTotal').text(userTotal);

//generated random numbers for the crystals.  set the crystals value.
	var crystalRuby = Math.floor(Math.random()*12) + 1;
	var crystalEmerald = Math.floor(Math.random()*12) + 1;
	var crystalDiamond = Math.floor(Math.random()*12) + 1;
	var crystalSapphire = Math.floor(Math.random()*12) + 1;

//variable declarations and initializing
	var gamesWon = 0;
	var gamesLost = 0;
	var youWon = "Congratulations!  You won.";
	var youLost = "Sorry.  You lost.";

//output to the screen of the starting record of no wins and no losses
	$('#wins').text(gamesWon);
	$('#losses').text(gamesLost);


//function definition for a new game after the user either wins or loses a game
	function newGame(){

//reset the userTotal to zero and generated a random number for the target number for the next game.
		userTotal = 0;
		$('#userFinalTotal').text(userTotal);
		numberToHit = Math.floor(Math.random()*102) + 19;
		$('#targetNumber').text(numberToHit);
	
//set new values for the crystals
		crystalRuby = Math.floor(Math.random()*12) + 1;	
		crystalEmerald = Math.floor(Math.random()*12) + 1;
		crystalDiamond = Math.floor(Math.random()*12) + 1;
		crystalSapphire = Math.floor(Math.random()*12) + 1;

	}


//the function for if the user wins a game.  the record for the # of games won is increased by one and output to the screen.  a message is output.
	function youWin(){
		$('#winOrLose').text(youWon);
		gamesWon++;
		$('#wins').text(gamesWon);
		newGame();
	}

//the function for if the user loses a game.  the record for the # of games lost is increased by one and output to the screen.  a message is output.
	function youLose(){
		$('#winOrLose').text(youLost);
		gamesLost++;
		$('#losses').text(gamesLost);
		newGame();
	}


//click routine added to the ruby image.  the value of ruby is added to the total and then the total is evaluated for a possible game winner or game loser.
	$('#Ruby').on ('click', function(){
    	userTotal = userTotal + crystalRuby;
    	$('#userFinalTotal').text(userTotal); 
        if (userTotal == numberToHit){
          youWin();
        }
        if ( userTotal > numberToHit){
          youLose();
 	    }    
 	}) 


//click routine added to the emerald image.  the value of emerald is added to the total and then the total is evaluated for a possible game winner or game loser.
	$('#Emerald').on ('click', function(){
    	
    	userTotal = userTotal + crystalEmerald;
    	$('#userFinalTotal').text(userTotal); 

        if (userTotal == numberToHit){
          youWin();
        }
        if ( userTotal > numberToHit){
          youLose();
 	    }    
 	}) 


//click routine added to the diamond image.  the value of diamond is added to the total and then the total is evaluated for a possible game winner or game loser.
 	$('#Diamond').on ('click', function(){
    	
    	userTotal = userTotal + crystalDiamond;
    	$('#userFinalTotal').text(userTotal); 

        if (userTotal == numberToHit){
          youWin();
        }
        if ( userTotal > numberToHit){
          youLose();
 	    }    
 	}) 



//click routine added to the sapphire image.  the value of sapphire is added to the total and then the total is evaluated for a possible game winner or game loser.
 	$('#Sapphire').on ('click', function(){
    	
    	userTotal = userTotal + crystalSapphire;
    	$('#userFinalTotal').text(userTotal); 

        if (userTotal == numberToHit){
          youWin();
        }
        if ( userTotal > numberToHit){
          youLose();
 	    }    
 	}) 


});

