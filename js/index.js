function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {

    document.getElementById("myNav").style.width = "0%";
  }

/*
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/

  //slideshowjs
  
  const buttons = document.querySelectorAll("[data-carousel-button]")

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1      
      if(newIndex >= slides.children.length) newIndex = 0

      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })

  showSlides()
function showSlides() {
  let slides = document.querySelector(".gallery [data-slides]") //get the slide parent group
  const activeSlide = slides.querySelector("[data-active]") //get the currently shown slide  
  let newIndex = [...slides.children].indexOf(activeSlide) + 1 //we want the next picture in the array, so we calculate the index as current (active) + 1
  if (newIndex >= slides.children.length) newIndex = 0 // if new index is more than the number of images, loop back and start again

  slides.children[newIndex].dataset.active = true //set the image at the new index as active
  delete activeSlide.dataset.active // deactivate previous active slide
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

