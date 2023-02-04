
// Changes menu icon from lines to X
// function myFunctionTwo(x) {
//     x.classList.toggle("change");
//   }

// When the user clicks on the button, 
//   toggle between hiding and showing the dropdown content



let autoNext = 0;
const incrementAutoNext = () => {
  if(autoNext == 6) {
    plusSlides(1)
    plusReviewSlides(1)
  }
  return autoNext++
}

setInterval(incrementAutoNext, 1000)

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  autoNext = 0
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  autoNext = 1;
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}







let reviewSlideIndex = 1;
showReviewSlides(reviewSlideIndex);

// Next/previous controls
function plusReviewSlides(n) {
  showReviewSlides(reviewSlideIndex += n);
  autoNext = 0
}

// Thumbnail image controls
function currentReviewSlide(n) {
  showReviewSlides(reviewSlideIndex = n);
  autoNext = 1;
}

function showReviewSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myReviewSlides");
  let dots = document.getElementsByClassName("reviewDot");
  if (n > slides.length) {reviewSlideIndex = 1}
  if (n < 1) {reviewSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeReview", "");
  }
  slides[reviewSlideIndex-1].style.display = "block";
  dots[reviewSlideIndex-1].className += " activeReview";
}

