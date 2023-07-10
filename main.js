import "simplebar/dist/simplebar.css";
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "./styles.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import carita2 from "./carita-2.png";
// prettier-ignore
document.querySelector("#app").innerHTML =//html
  `<div class="container">

<div class="top_section">
  <h3>Siete de Marzo</h3>
  <p>¡Hoy tambien es un buen dia</p>
  <hr />
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
      <img src="./carita-1.png" alt="carita-1" />
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
<img src="./chat-icon-2.png" alt="chat-icon">
<img src="./chat-icon-triste-2.png" alt="chat-ico">
<img src="./chat-icon-4-angry.png" alt="angry">
</div>
<!-- end of chat container -->
</div>
`;

// setupCounter(document.querySelector("#counter"));
