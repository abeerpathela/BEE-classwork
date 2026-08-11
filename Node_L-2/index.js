// function sayHello() {
//     console.log("Hello, World!");
// }
// sayHello();
// console.log(require(`module`).wrapper);


//nst fs=require('fs');
//const data=fs.readFileSync('./input.txt');
// fs.writeFileSync('./output.txt',data);
// fs.appendFileSync('./output.txt','\nThis is appended text.');
// // fs.unlinkSync('./output.txt');
// console.log(data.toString());


//---------------------------Asynchnorously-----------------------------

// fs.readFile('./input.txt',(err,data)=>{  // donot put const in front beczuse what is it return it paases it to callback function
//     if(err){
//         console.log(err);
//     }else{
//         fs.writeFile('./output.txt',data,(err)=>{
//     if(err){
//         console.log(err);}})
//     }
// })



// fs.appendFile('./output.txt','\nThis is appended text.',(err)=>{
//     if(err){
//         console.log(err);
//     }})



// fs.readdir('./',{recursive:true}, (err, files) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(files);
//     }
// });


//nst path=require('path');



// Any file that is created in the js the Node environment is treated as a module.

//Any thing i write inside the module(Ex. array, function, ....) have a module scope.
//If we want to make a elemet of the module available outside the module, we have to export it and import it in the other module.
//Every module Node add's 5 objects : exports, module, require, __filename, __dirname

// console.log(require('module').wrapper); // [Function: wrapper] { [length]: 2, [name]: '', [arguments]: null, [caller]: null, [prototype]: { constructor: [Circular] } }

// console.log(__filename); // /Users/i_anshgoyal/Documents/Back-end Subject/FirstNodeProject/index.js
// console.log(__dirname); // /Users/i_anshgoyal/Documents/Back-end Subject/FirstNodeProject


//Built-in modules in Node.js

// const fs = require('fs');
// const path = require('path');
// const EventEmitter = require('event');

//CommonJS
//File System Module

//Task 1: Read, Write, and Append to a file synchronously
// const data = fs.readFileSync('./input.txt');
// fs.writeFileSync('./output.txt', data);
// fs.appendFileSync('./input.txt', '\nMy Roll Number is 2411981092.');
// fs.unlinkSync('./output.txt');
// console.log(data.toString());

//Task 2: Read, Write, and Append to a file asynchronously
//Encoding is optional, if we don't provide it, it will return the data in buffer format.
// fs.readFile('./input.txt', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data.toString());
//     fs.writeFile('./output.txt', data, (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log('File written successfully.');
//     });
// });
// fs.appendFile('./input.txt', '\nMy email is ansh1092.be24@chitkarauniversity.edu.in.', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Data appended successfully.');
// });

//Task 3: Read to a directory synchronously
// const files = fs.readdirSync('./');
// console.log(files);

//Task 4: Read to a directory asynchronously
// fs.readdir('./', (err, files) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(files);
// });

//Task 6: Read to a directory recursively
//withFileTypes: true will return the files as Dirent(Directory Entry) objects.
// fs.readdir('./', { recursive: true, withFileTypes: true }, (err, files) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(files);
// });


//Path Module

// //Task 1: Get the path of a file
// const filePath = path.join(__dirname, 'input.txt');
// console.log(filePath);

//Events Module


//http Module3