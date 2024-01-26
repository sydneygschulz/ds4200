const myImage = document.querySelector("img");


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function showImage(imagePath) {
  var displayedImage = document.getElementById('displayedImage');

  displayedImage.src = imagePath;
  
  displayedImage.style.display = 'block';
}

const changeColorText = document.getElementById('changeColorText');
let isTextPurple = true;

changeColorText.addEventListener('click', () => {
  if (isTextPurple) {
    changeColorText.style.color = 'red';
  } else {
    changeColorText.style.color = 'purple';
  }
  // Toggle the boolean value for the next click
  isTextPurple = !isTextPurple;
});

