//initialisation file

console.log("Starting app.js");

const fs = require("fs");
const os = require('os');

const notes = require('./notes.js');

/**
 * Taking use of variable from node.js file
 */

console.log(notes.age);
var result = notes.addnote();
console.log(result);

var add = notes.add(2, -3);
console.log(add);

/**
 * Same thing as above can be done as 
 */
var add = notes.add;

console.log(add(2, 3));

// var user = os.userInfo();



// fs.appendFile('greetings1.txt', `Hello ${user.username}`, function(err) {
//     if (err) {
//         console.log('Unable to write to the file');
//     }
// });