import "simplebar/dist/simplebar.css";
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "./styles.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { selectedEmoji, emojiEvent } from "./behavior";
import carita1 from "./carita-1.png";
import carita2 from "./carita-2.png";
import chatIcon1 from "./chat-icon-2.png";
import chatIconSad from "./chat-icon-triste-2.png";
import chatIconAngry from "./chat-icon-4-angry.png";
// prettier-ignore
document.querySelector("#app").innerHTML =//html
  `<div class="container">

<div class="top_section">
<div class="content">
<h3>Siete de Marzo</h3>
<p>¡Hoy tambien es un buen dia</p>
<!--<hr />-->
</div>
<div class="exit_container">
<div class="rectangle"></div>
<div class="rectangle"></div>
<div class="rectangle"></div>
<div class="rectangle"></div>
<div class="circle_inside_x"></div>
</div>
</div>

<div
  data-simplebar
  data-simplebar-auto-hide="false"
  class="chat_container">
  
  <!-- PERSON 1 -->
  <div class="one_message_container-one">
    <div class="text_inside_msg-right_icon">Hoy tiene que ser un buen dia!
    <div class="circleContainer">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    </div>

    </div>

    <div class="icon_from_msg_container">
      <img src="${carita1}"  alt="carita-1" />
    </div>
  </div>
  <!-- PERSON 2 -->
  <div class="one_message_container-two">
  
  <img src="${carita2}" alt="carita2">
  <div class="text_inside_msg-left_icon">tiene que ser así</div>
  </div>
   <!-- PERSON 1 -->
   <div class="one_message_container-one">
   <div class="text_inside_msg-right_icon">Hoy tiene que ser un buen dia</div>

   <div class="icon_from_msg_container">
     <img src="${carita1}" alt="carita-1" />
   </div>
 </div>
 <!-- PERSON 2 -->
 <div class="one_message_container-two">
 
 <img src="${carita2}" alt="carita2">
 <div class="text_inside_msg-left_icon">tiene que ser así</div>
 </div>
  <!-- PERSON 1 -->
  <div class="one_message_container-one">
    <div class="text_inside_msg-right_icon">Hoy tiene que ser un buen dia</div>

    <div class="icon_from_msg_container">
      <img src="./carita-1.png" alt="carita-1" />
    </div>
  </div>
  <!-- PERSON 2 -->
  <div class="one_message_container-two">
  
  <img src="${carita2}" alt="carita2">
  <div class="text_inside_msg-left_icon">tiene que ser así</div>
  </div>
  
</div>
<!-- emoji container start-->
<div class="containerEmoji">
<img class="emojisChildren" src="${chatIcon1}" alt="chat-icon-2">
<img class="emojisChildren" src="${chatIconSad}" alt="chat-icon-sad">
<img class="emojisChildren" src="${chatIconAngry}" alt="angry"
id="emojiOne" >
<div class="containerOfInput">

<label for="input"> entrada
<input class="input" type="text">
</label>
<button>send</button>
</div>
</div>

<!-- end of chat container -->
</div>
`;

// setupCounter(document.querySelector("#counter"));
console.log("momento2");
selectedEmoji(document.querySelector("#emojiOne"));
emojiEvent();
