let BASE_URL = "https://dragonball-api.com/api/characters";
let PAGE_SIZE = 100;

const charInfo = document.getElementById("charInfo");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  showChar();
});

const showChar = async () => {
  if (charInfo.innerHTML.trim() !== "") {
    charInfo.innerHTML = "";
  } else {
    let response = await getData(`${BASE_URL}?limit=${PAGE_SIZE}`);
    let dbChar = response.items;
    let dbNames = dbChar.map((dbName) => dbName.name);
    let dataChar = "";
    let dataCharName = "";
    for (let i = 0; i < dbNames.length; i++) {
      dataCharName += `<p>${dbNames[i]}</p>`;
    }
    dataChar += `<div id="dbzChars">${dataCharName}</div>`;
    charInfo.innerHTML = dataChar;
  }
};

const getData = async (url = BASE_URL) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Aquí hubo un error:", error);
  }
};

getData();
