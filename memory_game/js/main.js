var cards = [ // setup object
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png" 
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{	
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function ()	{
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
};

var flipCard = function (cardId) { //create function called flipCard, () parameter cardId
	
	console.log("User flipped " + cards[cardId].rank); //add a console.log statement to display the card was flipped
		cardsInPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardImage); //add first statement

	console.log(cards[cardId].suit); //add second statement

	if (cardsInPlay.length === 2) {
	checkForMatch(); 
	}
};

flipCard (0) ; //Call the flipCard function passing in 0 as an argument
flipCard (2) ; //call the flipCard function again, passing in 2 as an argument