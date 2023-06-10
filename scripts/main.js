// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/good-morning.png') {
    myImage.setAttribute ('src','images/good-night.png');
  } else {
    myImage.setAttribute ('src','images/good-morning.png');
  }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
  const myName = prompt("Please enter your name");
  if (!myName){
    setUserName();
  } else {
  localStorage.setItem("name",myName);
  myHeading.textContent = `Look who's back! It's ${myName}`;
  }
}

if(!localStorage.getItem("name")){
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = (`Look who's back! It's ${storedName}`);
}

myButton.onclick = () => {
  setUserName();
};