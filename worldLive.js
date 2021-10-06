const worldLive = () => {
  const inputText = document.getElementById("postText");
  const wordCount = document.querySelector(".word-count");
  const characterCount = document.querySelector(".character-count");

  inputText.addEventListener("input", () => {
    characterCount.innerText = inputText.value.length;

    let text = inputText.value.trim();
    let regex = /\s+/;
    wordCount.innerHTML = text.split(regex).length;
  });
};

export default worldLive;
