'use strict';
var name = prompt('What is your name?');
var correctAnswers = 0;

var question1 = prompt('Are you liking Codefellows so far?');
console.log('user is prompted to ask a yes or no question');

var res = question1.toLowerCase();
if (res === 'yes' || res === 'y') {
  alert('Keep up the good work!');
  correctAnswers = correctAnswers + 1;
}
else {
  alert('Sorry, Hope it gets better!');
}

var question2 = prompt('Do you live in Washington?');
console.log('user was asked if he/she lives in Washington');
var res = question2.toLowerCase();
if (res === 'yes' || res === 'y') {
  alert('You might have webbed feet! LOL');
  correctAnswers = correctAnswers + 1;
}
else {
  alert('You are missing out on the beauty of only Rainforest in the USA!');
}

var question3 = prompt('Do you like Pizza?');
console.log('user is prompted to ask a yes or no question about pizza');

var res = question3.toLowerCase();
if (res === 'yes' || res === 'y') {
  alert('Pizza is the  BEST!');
  correctAnswers = correctAnswers + 1;
}
else {
  alert('Too bad for you.');
}

var question4 = prompt('Have you traveled around the world?');
console.log('user has or has not traveled the world');

var res = question4.toLowerCase();
if (res === 'yes' || res === 'y') {
  alert('Wow!');
  correctAnswers = correctAnswers + 1;
}
else {
  alert('I\'m just a couch potato.');
}
var question5 = prompt('Do you have a pet?');
console.log('user is asked if they have a pet');

var res = question5.toLowerCase();
if (res === 'yes' || res === 'y') {
  alert('Having a pet helps you to live longer.');
  correctAnswers = correctAnswers + 1;
}
else {
  alert('You should get a pet!');
}
var myNumber = 8;
for(var index = 0; index < 4; index++) {
  var userAnswer = parseInt(prompt('How many cars have I owned?'));
  console.log('my userAnswer is ',userAnswer);
  if (myNumber === userAnswer) {
    alert('You are Right!');
    correctAnswers = correctAnswers + 1;
    break;
  } else if(userAnswer > 10 ) {
    alert('You number is to high, Try Again!');
  } else if(userAnswer < 6){
    alert('Your number is to low, Try again!');
  }
}

for(var index = 0; index < 6; index++){
  var q7 = prompt('What types of cars have I owned');
  var res = q7.toLowerCase();
  if (res === 'jeep'){
    correctAnswers = correctAnswers + 1;
    break;
  }
  if (res === 'ford'){
    correctAnswers = correctAnswers + 1;
    break;
  }
  if (res === 'dodge'){
    correctAnswers = correctAnswers + 1;
    break;
  }
}
alert('I have owned a Jeep, Ford and a Dodge');
if (correctAnswers === 7){
  alert('You got ' + correctAnswers + ' out of 7 questions correct, ' + name + '! Congrats!');
}
else {
  alert('You got ' + correctAnswers + ' out of 7 questions correct, ' + name + '! Better luck next time');
}
