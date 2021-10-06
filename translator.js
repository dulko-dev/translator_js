export default function translator() {
  const btn = document.querySelector(".btn");
  const select = document.querySelector("select");

  const getLanguageSource = async (e) => {
    e.preventDefault();
    const textInput = document.querySelector("#postText").value;
    const res = await fetch("https://libretranslate.de/detect", {
      method: "POST",
      body: JSON.stringify({
        q: textInput,
      }),
      headers: { "Content-Type": "application/json" },
    });

  };

  btn.addEventListener("click", getLanguageSource);

  async function languages() {
    const res = await fetch("https://libretranslate.com/languages");
    const result = await res.json();
    // let option = document.createElement('option')
    const lang = `${result.map((lang) => `<option>${lang.name}</option>`)}`;
    select.innerHTML = lang;
    // select.appendChild(option)
  }

  return {
    getLanguageSource,
    languages,
  };
}
