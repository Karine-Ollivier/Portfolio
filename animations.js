// code jQuery
$(document).ready(function() {
    $('.project-details').fadeIn(1000);
});

// Animation pour les éléments de liste avec data-speed
document.querySelectorAll("ul li").forEach(li => {
    const speed = li.getAttribute("data-speed");
    if (speed) {
      gsap.from(li, {
        duration: parseFloat(speed),
        autoAlpha: 0,
        y: 30,
        ease: "power1.out",
        scrollTrigger: {
          trigger: li,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    }
  });

// code GSAP
gsap.to('.project-details', { duration: 1, y: -20, opacity: 1, ease: 'power1.out' });
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const scroller = ScrollSmoother.create({
  smooth: 1, // Temps en secondes pour "rattraper" la position de défilement native
  effects: true, // Cherche les attributs data-speed et data-lag
  smoothTouch: 0.1, // Temps de lissage plus court sur les appareils tactiles
});

gsap.registerPlugin(ScrollTrigger);

// Animation pour les titres h2
gsap.from("h2", {
  duration: 1,
  autoAlpha: 0,
  y: 30,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "h2",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// Animation pour les paragraphes
gsap.from("p", {
  duration: 1,
  autoAlpha: 0,
  y: 30,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "p",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});