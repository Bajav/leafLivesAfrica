const burger = document.getElementById("burger");
const closeNav = document.getElementById("close");
const nav = document.querySelectorAll(".navLinksTwoContainer");
const navLi = document.getElementsByClassName("link");
const footer = document.getElementById("footer");


burger.addEventListener("click", (e) => {
  // console.log("burger clicked");
  for (let i = 0; i < nav.length; i++) {
    nav[i].style.transform = "translateY(0%)";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }
}); 
for (let i = 0; i < navLi.length; i++) {
  navLi[i].addEventListener("click", (e) => {
    nav.forEach((navItem) => {
      navItem.style.transform = "translateY(-100%)";
    });
    document.body.style.overflow = "auto"; 
  });
}
closeNav.addEventListener("click", (e) => {
  // console.log("clicked");
  for (let i = 0; i < nav.length; i++) {
    nav[i].style.transform = "translateY(-100%)";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
});
const date = new Date();
const year = date.getFullYear();
footer.innerHTML = `© all rights reserved by leaf lives africa ${year}`;



const width = window.innerWidth;
const height = window.innerHeight;
// console.log(`width is ${width}, height is ${height}`);
// console.log(width,height)
const hero = document.getElementById("hero");
const about = document.getElementById("about");
const founder = document.getElementById("founder");
const gallery = document.getElementById("gallery");
const mySwiper = document.getElementById("mySwiper");
const teamCardImage = document.querySelectorAll(".teamCardImage");
const teamCard = document.querySelectorAll(".teamCard");
const textSide = document.querySelectorAll(".text-side");
const createOdometer = (el, value) => {
  const odometer = new Odometer({
    el: el,
    value: 0,
  });
  odometer.update(value);
};
gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 2,
  ease: "power1.inOut",
});
gsap.fromTo(".navBar", { x: 1000 }, { x: 0 });
gsap.fromTo(".text-side h1", { opacity: 0, x: -100 }, { opacity: 1, x: 0 });
gsap.fromTo(
  ".text-side p",
  { opacity: 0, y: -100, duration: 1.5, ease: "power1.inOut" },
  { opacity: 1, y: 0 }
);
gsap.to(".about-container", {
  scrollTrigger: {
    trigger: ".about-container",
    start: "top 10%",
    end: "bottom 90%",
    toggleActions: "play none reverse none",
    // markers: true
  },
  y: 0,
  opacity: 1,
  duration: 1.5,
  ease: "power1.inOut",
});
gsap.to(".missionTextConatiner h1", {
  scrollTrigger: {
    trigger: ".missionTextConatiner",
    start: "top 10%",
    end: "bottom 65%",
    toggleActions: "play none reverse none",
    // markers: true
  },
  y: 0,
  opacity: 1,
  duration: 1.5,
  ease: "power1.inOut",
});
gsap.to(".missionTextConatiner h4", {
  scrollTrigger: {
    trigger: ".missionTextConatiner",
    start: "top 10%",
    end: "bottom 65%",
    toggleActions: "play none reverse none",
    // markers: true
  },
  x: 0,
  opacity: 1,
  duration: 1.5,
  ease: "power1.inOut",
});
gsap.to(".missionTextConatiner p", {
  scrollTrigger: {
    trigger: ".missionTextConatiner",
    start: "top 10%",
    end: "bottom 65%",
    toggleActions: "play none reverse none",
    onEnter: () => {
        const p = document.querySelector(".missionTextConatiner p ");
        p.style.display="block";
            },
    // markers: true,
  },
  x: 0,
  opacity: 1,
  duration: 1.5,
  ease: "power1.inOut",
});

gsap.to(".metric", {
    scrollTrigger: {
      trigger: ".metric",
      start: "top 10%",
      end: "bottom 90%",
      toggleActions: "play none reverse none",
      onEnter: () => {
const countOne = document.querySelector(".metric h3");
        createOdometer(countOne, 30);
      },
      // markers: true
    },
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power1.inOut",
  });  
  gsap.to(".mission-cards", {
    scrollTrigger: {
      trigger: ".mission-cards",
      start: "top 10%",
      end: "bottom 65%",
      toggleActions: "play none reverse none",
      onEnter: () => {
        const card = document.querySelector(".mission-cards");
        card.style.display="block";
            },
      // markers: true,
    },
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power1.inOut",
  });

  // projects
  gsap.to(".projectImage", {
    scrollTrigger: {
      trigger: ".project",
      start: "top 10%",
      end: "bottom 90%",
      toggleActions: "play none reverse none",
      // markers: true,
    },
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power1.inOut",
  });

  gsap.to(".project-content", {
    scrollTrigger: {
      trigger: ".project",
      start: "top 10%",
      end: "bottom 90%",
      toggleActions: "play none reverse none",
      // markers: true,
    },
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power1.inOut",
  });

  if (window.innerWidth < 520 ) {
    gsap.killTweensOf(".animated-element");
  }

//gallery 

const backgroundSlides = document.querySelector('.background-slides');
const slides = backgroundSlides.querySelectorAll('img');


const clone = slides[0].cloneNode(true);
backgroundSlides.appendChild(clone);


let currentIndex = 0;
const slideDuration = 5000; 
const totalSlides = slides.length;

const showNextSlide = () => {
  currentIndex++;
  if (currentIndex === totalSlides) {

    backgroundSlides.style.transition = 'none';
    backgroundSlides.style.transform = 'translateX(0)';
    currentIndex = 0;

   
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        backgroundSlides.style.transition = 'transform 1s ease';
        backgroundSlides.style.transform = `translateX(-${100 * currentIndex}%)`;
      });
    });
  } else {
    backgroundSlides.style.transition = 'transform 1s ease';
    backgroundSlides.style.transform = `translateX(-${100 * currentIndex}%)`;
  }
};

setInterval(showNextSlide, slideDuration);

const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    const swiperEl = document.querySelector("swiper-container");
    swiperEl.addEventListener("autoplaytimeleft", (e) => {
      const [swiper, time, progress] = e.detail;
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    });


    // navClick
 

    // screens 
    // dell latitude W=1440 h=809 done
    // macbook pro W=1728 h=1085 done
    // apple imac w=2048 h=1152
    // samsung smarttv w=1920 h=1080