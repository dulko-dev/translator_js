const worldLive = () => {
  const inputText = document.getElementById("postText");
  const outputText = document.getElementById("outputText");
  const wordCountIn = document.querySelector(".word-count-input");
  const characterCountIn = document.querySelector(".character-count-input");
  const wordCountOut = document.querySelector(".word-count-output");
  const characterCountOut = document.querySelector(".character-count-output");

  function inPutForm() {
    inputText.addEventListener("input", () => {
      characterCountIn.innerText = inputText.value.length;

      let text = inputText.value.trim();
      let regex = /\s+/;
      if (text.length === 0) {
        wordCountIn.innerText = 0;
      } else {
        wordCountIn.innerText = text.split(regex).length;
      }
    });
  }

  function outPutForm() {
    let observer = new MutationObserver(function (mutations) {
      let text = mutations[0].target.innerText;
      let textTrim = text.trim();
      let regex = /\s+/;
      if (textTrim === "") {
        wordCountOut.innerText = 0;
      } else {
        wordCountOut.innerText = text.split(regex).length;
      }
      characterCountOut.innerText = mutations[0].target.innerText.length;
    });

    let config = {
      attributes: true,
      childList: true,
      characterData: true,
    };

    observer.observe(outputText, config);
  }

  return {
    inPutForm,
    outPutForm,
  };
};

export default worldLive;
