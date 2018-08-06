var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];

var checkForMatch = function ()	{
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
};

var flipCard = function (cardId) { //create function called flipCard, () parameter cardId
	console.log("User flipped " + cards[cardId]); //add a console.log statement to display the card was flipped
		cardsInPlay.push(cards[cardId]);
		
	if (cardsInPlay.length === 2) {
	checkForMatch(); 
	}
};

flipCard (0) ; //Call the flipCard function passing in 0 as an argument
flipCard (2) ; //call the flipCard function again, passing in 2 as an argument