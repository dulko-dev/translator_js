const worldLive = () => {
  const inputText = document.getElementById("postText");
  const outputText = document.getElementById("outputText");
  const wordCountIn = document.querySelector(".word-count-input");
  const characterCountIn = document.querySelector(".character-count-input");
  const wordCountOut = document.querySelector(".word-count-output");
  const characterCountOut = document.querySelector(".character-count-output");

  inputText.addEventListener("input", () => {
    characterCountIn.innerText = inputText.value.length;

    let text = inputText.value.trim();
    let regex = /\s+/;
    if (text.length === 0) {
      wordCountIn.innerText = 0;
    } else {
      wordCountIn.innerHTML = text.split(regex).length;
    }
  });

  outputText.addEventListener("input", () => {
    characterCountOut.innerText = outputText.value.length;

    let text = inputText.value.trim();
    let regex = /\s+/;
    if (text.length === 0) {
      wordCountOut.innerText = 0;
    } else {
      wordCountOut.innerHTML = text.split(regex).length;
    }
  });
};

export default worldLive;
