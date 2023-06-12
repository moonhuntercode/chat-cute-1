import anime from "animejs";
import name from "animejs/lib/anime.es";
let objeto = document.querySelector(".circle");
anime({
  targets: objeto,
  loop: true,
  duration: 1000,
  delay: 100,
  backgroundColor: "#FFF",
  scale: 2,
  direction: "alternate",
  easing: "easeOutElastic",
});
