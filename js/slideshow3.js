var __slideIndex = 1;
showDivs3(__slideIndex);

function plusDivs3(n) {
  showDivs3(__slideIndex += n);
}

function currentDiv3(n) {
  showDivs3(__slideIndex = n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("demo3");
  if (n > x.length) {__slideIndex = 1}
  if (n < 1) {__slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[__slideIndex-1].style.display = "block";
  dots[__slideIndex-1].className += " w3-opacity-off";
}

var __slideIndex = 0;
showSlides3();

function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  __slideIndex++;
  if (__slideIndex > slides.length) {__slideIndex = 1}
  slides[__slideIndex-1].style.display = "block";
  currentDiv3(__slideIndex);
  setTimeout(showSlides3, 5000); // Change image every 5 seconds
}