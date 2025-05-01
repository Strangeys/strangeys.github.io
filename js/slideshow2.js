var _slideIndex = 1;
showDivs2(_slideIndex);

function plusDivs2(n) {
  showDivs2(_slideIndex += n);
}

function currentDiv2(n) {
  showDivs2(_slideIndex = n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  if (n > x.length) {_slideIndex = 1}
  if (n < 1) {_slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[_slideIndex-1].style.display = "block";
  dots[_slideIndex-1].className += " w3-opacity-off";
}

var _slideIndex = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  _slideIndex++;
  if (_slideIndex > slides.length) {_slideIndex = 1}
  slides[_slideIndex-1].style.display = "block";
  currentDiv2(_slideIndex);
  setTimeout(showSlides2, 5000); // Change image every 5 seconds
}