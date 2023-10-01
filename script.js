function changeLanguage(lang) {
  const cvElements = document.querySelectorAll("[data-lang]");

  cvElements.forEach((element) => {
    const elementLang = element.getAttribute("data-lang");

    if (elementLang === lang) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

const plButton = document.getElementById("plButton");
const enButton = document.getElementById("enButton");

plButton.addEventListener("click", function () {
  enButton.classList.remove("active-language-button");
  plButton.classList.add("active-language-button");
  changeLanguage("pl");
});

enButton.addEventListener("click", function () {
  plButton.classList.remove("active-language-button");
  enButton.classList.add("active-language-button");
  changeLanguage("en");
});
