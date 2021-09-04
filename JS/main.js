// functions open and contact form
  function openForm() {
      document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
      document.getElementById("myForm").style.display = "none";
  }

  // function displays first img in slideshow when page loads
  var slideIndex = 1;
  showSlides(slideIndex);

  //function changes slide when arrows clicked
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  //function changes slide when dots clicked
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}; // if n (# passed into func) is greater than length of array then index set to 1
      if (n < 1) {slideIndex = slides.length}; //if n less than length slideIndex set to length of slides 
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; //loop each item item in array slides and sets display to none
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "")
      }
      slides[slideIndex - 1].style.display = "block"; //displays img in slideshow
      dots[slideIndex - 1].className += " active"; //adds active styling to dots associated with img
  }