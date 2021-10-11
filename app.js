import translator from "./translator.js";
import worldLive from "./worldLive.js";

const firstTextArea = document.querySelector('#postText');

window.onload = function(){
    firstTextArea.focus()
}


const worldMehtods = worldLive();
worldMehtods.inPutForm();
worldMehtods.outPutForm();
translator();
