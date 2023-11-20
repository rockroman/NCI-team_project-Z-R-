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
    '<img class="image" src="' + familyImages[i] + '" alt="Description">';
  document.getElementById("party-slide-1").innerHTML =
    '<img class="image" src="' + partyImages[i] + '" alt="Description">';
  document.getElementById("friends-slide-1").innerHTML =
    '<img class="image" src="' + friendsImages[i] + '" alt="Description">';
  document.getElementById("christmas-slide-1").innerHTML =
    '<img class="image" src="' + christmasImages[i] + '" alt="Description">';

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