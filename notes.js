console.log('Starting notes.js');

// console.log(module);

module.exports.age = 25;

// module.exports.addnote = function() {
//     console.log('addNote');
//     return 'New Note';

// }

/**
 * Same above export thing funtion can be written using arrow function as below:
 */

module.exports.addnote = () => {
    console.log('addNote');
    return 'New Note';
}

module.exports.add = (a, b) => {
    return a + b;

}