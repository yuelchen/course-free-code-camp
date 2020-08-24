var systemQuotes = [];
var favoriteQuotes = [];

//static load of default quotes to be added
var systemQuote1 = {
		quote:"The journey of a thousand miles begins with a single step.",
		author:"- Lao Tzu"
	};
var systemQuote2 = {
		quote:"Make the most of yourself, for that is all there is of you.",
		author:"- Ralph Waldo Emerson"
	};
var systemQuote3 = {
		quote:"No matter what people tell you, words and ideas can change the world.",
		author:"- Robin Williams"
	};
var systemQuote4 = {
		quote:"Decide whether or not the goal is worth the risks involved. If it is, stop worrying.",
		author:"- Amelia Earhart"
	};
var systemQuote5 = {
		quote:"Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy",
		author:"- Robert Tew"
	};

systemQuotes.push(systemQuote1);
systemQuotes.push(systemQuote2);
systemQuotes.push(systemQuote3);
systemQuotes.push(systemQuote4);
systemQuotes.push(systemQuote5);

var index = 0;
function updateQuote() {
	do{
		random = Math.floor((Math.random() * systemQuotes.length));
	} while(index == random);
	document.getElementById("quote").innerHTML = systemQuotes[random].quote;
	document.getElementById("author").innerHTML = systemQuotes[random].author;
	index = random;
}

function tweet() {
	var tweetQuote = "'" + systemQuotes[index].quote + "' " + systemQuotes[index].author;
	window.open("https://twitter.com/intent/tweet?text=" + tweetQuote);
	e.stopPropagation();
}

function heart() {
	favoriteQuotes.push(systemQuotes[index]);
	alert("We're glad you love the quote '" + systemQuotes[index].quote + "' as much as we do!");
}