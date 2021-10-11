const translator = () => {
  const firstTextArea = document.querySelector("#postText");
  const text = document.querySelector(".outputText");
  const btn = document.querySelector("button");

  btn.addEventListener("click", () => {
    if (text.innerText.length > 0) return;
    text.classList.add("hide-text", "skeleton");
    text.innerText = firstTextArea.value;
    setTimeout(() => {
      text.classList.remove("hide-text", "skeleton");
    }, 1000);
  });

  firstTextArea.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      text.classList.add("hide-text", "skeleton");
      text.innerText = firstTextArea.value;
      setTimeout(() => {
        text.classList.remove("hide-text", "skeleton");
      }, 1000);
    }
  });

  firstTextArea.oninput = function () {
    text.innerText = "";
  };
};

export default translator;
