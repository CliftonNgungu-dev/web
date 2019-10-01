let myHeading = document.querySelector('h1');
alert ('Hello World')
myHeading.textContent = 'Hello world!';
 //this is JavaScript code for manipulating the header of the sit
/*
document.querySelector('html').onclick = function() {
    alert('Stop Bothering me!');
}
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/picture.jpg') {
      myImage.setAttribute ('src','images/merc2.jpg');
    } else {
      myImage.setAttribute ('src','images/picture.jpg');
    }
} 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mercedes Benz is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mercedes Benz is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
