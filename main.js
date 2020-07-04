//JS Nav & Burger Animation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

//Barba Animation

//pagetransition

/*function pageTransition() {
  var tl = gsap.timeline();

  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2,
    ease: "Expo.easeInOut",
  });
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.1,
  });
}*/

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".heroCaption", { duration: 1.6, translateY: 50, opacity: 0 });
  tl.from(".heroImg", { clipPath: "circle(50% at 50% 50%);" });
}

//delay function

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1390);
        done();
      },

      async enter(data) {
        contentAnimation();
      },

      async once(data) {
        contentAnimation();
      },
    },
  ],
});
