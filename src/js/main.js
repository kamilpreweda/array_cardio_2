"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const isAdult = people.some(person => new Date().getFullYear() - person.year >= 19);
console.log({ isAdult });

// Array.prototype.every() // is everyone 19 or older?

const allAdults = people.every(person => new Date().getFullYear() - person.year >= 19);
console.log({ allAdults });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comment = comments.find(comment => comment.id === 823423 ? console.log(comment) : false);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423;

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// comments.splice(index, 1);

// or

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];

console.table(newComments);




