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

// iterate  thought all emojis
export function emojiEvent(element) {
  let emojis = document.querySelectorAll(".emojisChildren");

  emojis.forEach((emoji) => {
    emoji.style.visibility = "hidden";
  });
}
