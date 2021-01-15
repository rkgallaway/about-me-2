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
  // console.log('That\'s right ' + userName + '! Too many that I\'ve lost count');
  alert('That\'s right! Too many that I\'ve lost count');
} else {
  alert('Sorry, incorrect!');
}

alert('Thank you for visiting my page ' + userName + '!')