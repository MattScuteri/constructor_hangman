const inquirer = require('inquirer');

const fiftyStates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", 
"Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", 
"Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", 
"Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
"Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", 
"Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", 
"North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", 
"Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
"Tennessee", "Texas", "Utah", "Vermont", "Washington", 
"West Virginia", "Wisconsin", "Wyoming"];

function Word(wordInPlay, currentWord) {
	this.wordInPlay = Math.floor(Math.random()*fiftyStates.length);
	this.currentWord = (fiftyStates[this.wordInPlay]);
};	

module.exports = Word;
