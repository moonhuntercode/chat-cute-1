import anime from "animejs";
import name from "animejs/lib/anime.es";
let objetos = document.querySelectorAll(".circleContainer > .circle");
console.log(objetos);
anime({
  targets: objetos,
  loop: true,
  duration: 1000,
  delay: 100,
  backgroundColor: "#FFF",
  scale: 2,
  direction: "alternate",
  easing: "easeOutElastic",
  delay(objetos, i, l) {
    return i * 100;
  },
  endDelay(objetos, i, l) {
    return (l - i) * 100;
  },
});
