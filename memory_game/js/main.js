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



var flipCard = function () { //create function called flipCard, () parameter cardId -- removed
	var cardId = this.getAttribute('data-id');
		console.log("User flipped " + (cards[cardId].rank) ); // Pay attebtion to bracket placement. EXTREMELY CRITICAL
		cardsInPlay.push(cards[cardId].rank);
		console.log(cards[cardId].cardImage); //add first statement
		console.log(cards[cardId].suit); //add second statement
		this.setAttribute('src', cards[cardId].cardImage)
		if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

		//action cleared console.log
var createBoard = function () { //created function
	for (var i = 0; i < cards.length; i++) { 
		 var cardElement = document.createElement('img');
		 cardElement.setAttribute('src', 'images/back.png');
		 cardElement.setAttribute('data-id', i); //go back & research
		 cardElement.addEventListener('click', flipCard);
		 document.getElementById('game-board').appendChild(cardElement);
	}
};


createBoard (); //invoke function
