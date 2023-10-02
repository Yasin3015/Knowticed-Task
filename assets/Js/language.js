import { jsonEN } from "./languageJson/jsonEN.js";
import { jsonAR } from "./languageJson/jsonAR.js";
const languageBtn = document.querySelector(".language");

const arabicDirection = () => {
  const head = document.getElementsByTagName("head");
  const arabicStyle = document.createElement("link");
  arabicStyle.rel = "stylesheet";
  arabicStyle.href = "./assets/CSS/arabic-style.css";
  arabicStyle.classList.add("arabic-style");
  head[0].appendChild(arabicStyle);
};
const removeArabicDirection = () => {
  const head = document.getElementsByTagName("head");
  const arabicStyle = document.querySelector(".arabic-style");
  if (arabicStyle) head[0].removeChild(arabicStyle);
};

const changeLanguage = () => {
  if (languageBtn.textContent === "English") {
    for (const key of Object.keys(jsonEN)) {
      const el = document.querySelector(`.${key}`);
      if (el) el.textContent = jsonEN[key];
    }
    localStorage.setItem("language", "English");
    removeArabicDirection();
  } else {
    for (const key of Object.keys(jsonAR)) {
      const el = document.querySelector(`.${key}`);
      if (el) el.textContent = jsonAR[key];
    }
    localStorage.setItem("language", "العربية");
    arabicDirection();
  }
};
languageBtn.addEventListener("click", changeLanguage);

//....................................
if (localStorage.getItem("language")) {
  languageBtn.textContent = localStorage.getItem("language");
  changeLanguage();
}
