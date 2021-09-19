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

  console.log(await res.json());
};

btn.addEventListener("click", getLanguageSource);

const arr = [1, 2, 3, 4, 5];

const languages = async () => {
  const res = await fetch("https://libretranslate.com/languages");
  const result = await res.json();
  // let option = document.createElement('option')
  const lang = `${result.map((lang) => `<option>${lang.name}</option>`)}`
  select.innerHTML = lang;
  // select.appendChild(option)
};

languages();
