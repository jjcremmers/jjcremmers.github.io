document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Fade in panels on scroll
  gsap.utils.toArray(".panel").forEach((panel, i) => {
    gsap.from(panel, {
      scrollTrigger: {
        trigger: panel,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
      opacity: 0,
      y: 50,
      duration: 1
    });
  });

  // Pin the pinned section
  ScrollTrigger.create({
    trigger: ".pinned-section",
    start: "top top",
    end: "+=100%",
    pin: true,
    pinSpacing: true
  });
});

