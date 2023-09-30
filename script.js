function changeLanguage(lang) {
    const cvElements = document.querySelectorAll('[data-lang]');

    cvElements.forEach(element => {
        const elementLang = element.getAttribute('data-lang');

        if (elementLang === lang) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}