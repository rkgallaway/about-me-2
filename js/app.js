'use strict';

// console.log('hey girl, hey!');

// get username and give greeting
var userName = prompt('Hi! What is your name?');
alert('Hey ' + userName + ', glad you\'re here!');

// write 5 questions. must accept yes or no OR y or n IN ANY CASE - final question use username

var responseOne = prompt('Am I originally from Seattle, WA?').toLowerCase();

if (responseOne === 'no' || responseOne === 'n') {
  // console.log('You are right!');
  alert('You are right!');
} else {
  alert('Womp womp...that\'s wrong');
}

var responseTwo = prompt('Do I have a daughter?').toLowerCase();

if (responseTwo === 'yes' || responseTwo === 'y') {
  // console.log('Correct!');
  alert('Correct!');
} else {
  alert('Sorry, incorrect!');
}

var responseThree = prompt('Do I have an obession with celebrities?').toLowerCase();

if (responseThree === 'yes' || responseThree === 'y') {
  // console.log('you betcha! no shame in it here');
  alert('You betcha! No shame in it here');
} else {
  alert('Sorry, incorrect!');
}

var responseFour = prompt('Do I try to act younger and hipper than I really am?').toLowerCase();

if (responseFour === 'yes' || responseFour === 'y') {
  // console.log('Yass Queen!');
  alert('Yass Queen!');
} else {
  alert('Womp womp..that\'s wrong');
}

var responseFive = prompt('Do I have more tattoos than I can count on one hand?').toLowerCase();

if (responseFive === 'yes' || responseFive === 'y') {
  // console.log('That\'s right ' + userName + '!');
  alert('That\'s right!');
} else {
  alert('Sorry, incorrect!');
}

var responseSixGuesses = 4;
var myTattooCount = 17;
var tattooNumberGuess = parseInt(prompt('How many tattoos do I have?'));
// console.log(tattooNumberGuess + ' is the visitor\'s guess');
var i;
for (i = 0; i < responseSixGuesses; i++){
  console.log('in loop' + i);
  if(tattooNumberGuess === myTattooCount){
    alert(`${tattooNumberGuess} is exactly how many tattoos I have!`);
    break;
  // learn about boolean flags - ask Ryan
  } else if(tattooNumberGuess < myTattooCount){
    tattooNumberGuess = parseInt(prompt('Too low, try again'));
  } else if(tattooNumberGuess > myTattooCount){
    tattooNumberGuess = parseInt(prompt('That\'s way too many...my mama would kill me!'));
  }
}
if(i === responseSixGuesses){
  alert(`Thanks for playing, but ${myTattooCount} was the correct answer`);
}

var favoriteBoyBands = ['bts', 'backstreet boys', 'one direction', 'boyz 2 men', 'hanson'];
var boyBandGuesses = 6;


alert('Thank you for visiting my page ' + userName + '!');
