const translator = () => {
  const firstTextArea = document.querySelector("#postText");
  const secondTextArea = document.querySelector("#outputText");
  const text = document.querySelector('#outputText > p')

  firstTextArea.addEventListener("input", () => {
    secondTextArea.innerText = firstTextArea.value;
  });

  // setTimeout(() => {
  //   text.classList.remove('hide-text', 'skeleton')
  // },3000)

};

export default translator;
