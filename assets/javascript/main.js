if (sessionStorage.getItem('language')) {
    var language = sessionStorage.getItem('language');
    changeLanguage(language);
} else {
    changeLanguage('pol');
}


function attr() {
    lang = document.getElementsByClassName("sell__location__flag")[0].getAttribute("data-value");
    if (lang === "en") {
        changeLanguage('pol');
    } else {
        changeLanguage('en');
    }
}

function changeLanguage(language) {
    document.getElementsByClassName("sell__location__flag")[0].setAttribute("data-value", language);
    document.getElementsByClassName("sell__location__flag")[0].setAttribute("src", "assets/images/icons/" + language + ".png");
    document.getElementsByClassName("sales__promo")[0].setAttribute("src", "assets/images/contant/" + language + ".png");
    sessionStorage.setItem('language', language);
}
