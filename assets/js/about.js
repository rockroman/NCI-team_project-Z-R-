// <!--  content of the  file written by Zheng Mai -->
document.addEventListener("DOMContentLoaded", function () {
  var i = 0;
  var time = 3000;
  var aboutImages = [
    "assets/pictures/about1.jpg",
    "assets/pictures/about2.jpg",
    "assets/pictures/about3.jpg",
  ];

  function changeImg() {
    var slideImage = document.getElementById("slide-image");
    slideImage.src = aboutImages[i];

    if (i < aboutImages.length - 1) {
      i++;
    } else {
      i = 0;
    }

    setTimeout(changeImg, time);
  }

  // Rolling recommendations logic
  var container = document.getElementById("rolling-container");
  //new logic
  var recommendations = container.children;
  var currentIndex = 0;

  function rollRecommendations() {
    // Hide all recommendations
    for (var i = 0; i < recommendations.length; i++) {
      recommendations[i].style.display = "none";
    }

    // Show the current recommendation
    recommendations[currentIndex].style.display = "block";

    // Move to the next recommendation
    currentIndex = (currentIndex + 1) % recommendations.length;
  }
  rollRecommendations();
  setInterval(rollRecommendations, 3000);

  //end new logic

  // function rollRecommendations() {
  //   var firstRecommendation = container.children[0];
  //   container.removeChild(firstRecommendation);
  //   container.appendChild(firstRecommendation.cloneNode(true));
  // }

  // setInterval(rollRecommendations, 3000);

  // Call the function for changing images
  changeImg();
});
