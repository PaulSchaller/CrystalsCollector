$(document).ready(function() {

	
	var numberToHit = Math.floor(Math.random()*102) + 19;
	$('#targetNumber').text(numberToHit);

	var userTotal = 0;
	$('#userFinalTotal').text(userTotal);


	var crystalRuby = Math.floor(Math.random()*12) + 1;
	var crystalEmerald = Math.floor(Math.random()*12) + 1;
	var crystalDiamond = Math.floor(Math.random()*12) + 1;
	var crystalSapphire = Math.floor(Math.random()*12) + 1;


	var gamesWon = 0;
	var gamesLost = 0;
	var youWon = "Congratulations!  You won.";
	var youLost = "Sorry.  You lost.";
	console.log(youWon);
	
	$('#wins').text(gamesWon);
	$('#losses').text(gamesLost);
	console.log(gamesWon);
	console.log(gamesLost);

	function newGame(){

		userTotal = 0;
		$('#userFinalTotal').text(userTotal);
		console.log(userTotal);
		numberToHit = Math.floor(Math.random()*102) + 19;
		$('#targetNumber').text(numberToHit);
		console.log(numberToHit);
		crystalRuby = Math.floor(Math.random()*12) + 1;	
		crystalEmerald = Math.floor(Math.random()*12) + 1;
		crystalDiamond = Math.floor(Math.random()*12) + 1;
		crystalSapphire = Math.floor(Math.random()*12) + 1;

	}



	function youWin(){
		$('#winOrLose').text(youWon);
		console.log(youWon);
		console.log(youWon);
		gamesWon++;
		$('#wins').text(gamesWon);
		newGame();
	}


	function youLose(){
		$('#winOrLose').text(youLost);
		gamesLost++;
		$('#losses').text(gamesLost);
		newGame();
	}


	$('#Ruby').on ('click', function(){
    	console.log(userTotal);
    	userTotal = userTotal + crystalRuby;
    	$('#userFinalTotal').text(userTotal); 
    	console.log(userTotal);
        if (userTotal == numberToHit){
          youWin();
        }
        if ( userTotal > numberToHit){
          youLose();
 	    }    
 	}) 


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

