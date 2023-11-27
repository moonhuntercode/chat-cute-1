// @- test de objetos capturados
// console.log(objetos);

export const capturandoEsferasAnimadas = (anime, esferas) => {
  anime({
    targets: esferas,
    loop: true,
    duration: 1000,
    delay: 100,
    backgroundColor: "#FFF",
    scale: 2,
    direction: "alternate",
    easing: "easeOutElastic",
    delay(esferas, i, l) {
      return i * 100;
    },
    endDelay(esferas, i, l) {
      return (l - i) * 100;
    },
  });
};
