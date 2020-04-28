const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const btnScrollToTop = document.querySelector("#btnScrollToTop");

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (window.pageYOffset > 300) {
      if (!btnScrollToTop.classList.contains("btnEntrance")) {
        btnScrollToTop.classList.remove("btnExit");
        btnScrollToTop.classList.add("btnEntrance");
        btnScrollToTop.style.display = "block";
      }
    } else {
      if (btnScrollToTop.classList.contains("btnEntrance")) {
        btnScrollToTop.classList.remove("btnEntrance");
        btnScrollToTop.classList.add("btnExit");
        btnScrollToTop.style.display = "none";
      }
    }
  }
  btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behaviour: "smooth",
    });
  });

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
