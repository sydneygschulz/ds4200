const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image1.JPG") {
    myImage.setAttribute("src", "images/image2.JPG");
  } else {
    myImage.setAttribute("src", "images/image1.JPG");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to my test site, ${myName}`;
    }
  }  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my test site, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  