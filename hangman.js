const inquirer = require('inquirer');
const Word = require('./word.js');
const Letter = require("./letter.js");

const selectedWord = new Word(Word.currentWord);

console.log(selectedWord);