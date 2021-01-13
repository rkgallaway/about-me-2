'use strict';

// console.log('hey girl, hey!');

// get username and give greeting
var userName = prompt('Hi! What is your name?');
alert('Hey ' + userName + ', glad you\'re here!');

// write 5 questions. must accept yes or no OR y or n IN ANY CASE - final question use username

var questionOne = prompt('Question One?').toLowerCase();

if (questionOne === 'yes' || questionOne === 'y') {
  // console.log('you are right!');
  alert('you are right!');
} else {
  alert('womp womp...that\'s wrong');
}

var questionTwo = prompt('Question two?').toLowerCase();

if (questionTwo === 'yes' || questionTwo === 'y') {
  // console.log('you are right!');
  alert('you are right!');
} else {
  alert('womp womp...that\'s wrong');
}
