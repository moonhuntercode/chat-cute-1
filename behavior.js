// console.log("momento1 ---");
// function
export function selectedEmoji(element) {
  let method1 = function () {
    console.log(element);
    console.log(container.style);
    container.style.visibility = "hidden";
  };
  let container = document.querySelector(".containerEmoji");
  element.addEventListener("click", method1, false);
}
