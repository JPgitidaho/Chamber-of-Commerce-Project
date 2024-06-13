document.addEventListener("DOMContentLoaded", function () {
  const miHeader = document.getElementById("miHeader");
  const burgerIcon = document.getElementById("burger-icon");
  let isHovered = false;

  burgerIcon.addEventListener("click", function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
    burgerIcon.classList.toggle("active");
  });
});

  miHeader.addEventListener("mouseenter", function () {
    isHovered = true;
    miHeader.style.backgroundColor = "#0c3338";
  });

  miHeader.addEventListener("mouseleave", function () {
    isHovered = false;
    if (window.scrollY <= miHeader.clientHeight) {
      miHeader.style.backgroundColor = "#0c33388e";
    }
  });

  document.addEventListener("scroll", function () {
    if (!isHovered) {
      if (window.scrollY > miHeader.clientHeight) {
        miHeader.style.backgroundColor = "#0c3338";
      } else {
        miHeader.style.backgroundColor = "#0c3338";
      }
    }
  });

 
