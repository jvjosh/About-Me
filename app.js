'use strict';

var question1 = prompt('Are you liking Codefellows so far?');
console.log('user is prompted to ask a yes or no question');

var res = question1.toLowerCase();
if (res === 'yes' || res === 'y') {
  alert('Keep up the good work!');
}
else {
  alert('Sorry, Hope it gets better!');
}

var question2 = prompt('Do you live in Washington?');
console.log('user was asked if he/she lives in Washington');
var res = question2.toLowerCase();
if (res === 'yes' || res === 'y') {
  alert('You might have webbed feet! LOL');
}
else {
  alert('You are missing out on the beauty of only Rainforest in the USA!');
}

var question3 = prompt('Do you like Pizza?');
console.log('user is prompted to ask a yes or no question about pizza');

var res = question3.toLowerCase();
if (res === 'yes' || res === 'y') {
  alert('Pizza is the  BEST!');
}
else {
  alert('Too bad for you.');
}

var question4 = prompt('Have you traveled around the world?');
console.log('user has or has not traveled the world');

var res = question4.toLowerCase();
if (res === 'yes' || res === 'y') {
  alert('Wow!');
}
else {
  alert('I\'m just a couch potato.');
}
var question5 = prompt('Do you have a pet?');
console.log('user is asked if they have a pet');

var res = question5.toLowerCase();
if (res === 'yes' || res === 'y') {
  alert('Having a pet helps you to live longer.');
}
else {
  alert('You should get a pet!');
}
