const navslide = () => {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // adds the fade effect to responsive navbar
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`; 
      }
    });
    burger.classList.toggle('toggle');


  });

}

// calls the function
navslide();