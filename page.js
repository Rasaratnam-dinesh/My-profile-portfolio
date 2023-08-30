document.addEventListener("DOMContentLoaded", function () {
    const hireButton = document.getElementById("hire-button");
    const hireModal = document.getElementById("hire-modal");
    const closeButton = document.querySelector(".close");
  
    hireButton.addEventListener("click", function () {
      hireModal.style.display = "block";
    });
  
    closeButton.addEventListener("click", function () {
      hireModal.style.display = "none";
    });
  });
  
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slideIndex++;
  
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
  
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  