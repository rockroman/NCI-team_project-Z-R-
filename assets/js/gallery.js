// code taken and adjusted for project needs from
// https://www.youtube.com/watch?v=4YQ4svkETS0
var i = 0;
var time = 3000;

// Family images
var familyImages = [
  "assets/pictures/family1.jpg",
  "assets/pictures/family2.jpg",
  "assets/pictures/family3.jpg",
  "assets/pictures/family4.jpg",
];

// Party images
var partyImages = [
  "assets/pictures/party1.jpg",
  "assets/pictures/party2.jpg",
  "assets/pictures/party3.jpg",
  "assets/pictures/party4.jpg",
];

// Friends images
var friendsImages = [
  "assets/pictures/friends1.jpg",
  "assets/pictures/friends2.jpg",
  "assets/pictures/friends3.jpg",
  "assets/pictures/friends4.jpg",
];

// Christmas images
var christmasImages = [
  "assets/pictures/christmas1.jpg",
  "assets/pictures/christmas2.jpg",
  "assets/pictures/christmas3.jpg",
  "assets/pictures/christmas4.jpg",
];

// change image
function changeImg() {
  document.getElementById("family-slide-1").innerHTML =
    '<img class="img-fluid gallery-image" src="' +
    familyImages[i] +
    '" alt="Description">';

  document.getElementById("party-slide-1").innerHTML =
    '<img class="img-fluid gallery-image" src="' +
    partyImages[i] +
    '" alt="Description">';
  document.getElementById("friends-slide-1").innerHTML =
    '<img class="img-fluid gallery-image" src="' +
    friendsImages[i] +
    '" alt="Description">';
  document.getElementById("christmas-slide-1").innerHTML =
    '<img class="img-fluid gallery-image" src="' +
    christmasImages[i] +
    '" alt="Description">';

  if (i < familyImages.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changeImg, time);
}

// Call the function when the document is ready
document.addEventListener("DOMContentLoaded", function () {
  changeImg();
});

// back to top button source  https://mdbootstrap.com/docs/standard/extended/back-to-top/
//Get the button
let backToTopButton = document.getElementById("btn-back-to-top");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    $("#btn-back-to-top").fadeIn(1200);
  } else {
    $("#btn-back-to-top").fadeOut(800);
  }
}
// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// gallery image overlay logic
let overlay = document.querySelector("#altText");
let galleryImage = document.querySelector(".gallery-image");

galleryImage.addEventListener("mouseover", function () {
  overlay.style.opacity = "1";

  overlay.textContent = galleryImage.getAttribute("alt");
});

galleryImage.addEventListener("mouseout", function () {
  overlay.style.opacity = "0";
});
