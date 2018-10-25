$(function () {
    var dict = {
        "Request news": {
            pol: "Subskrybować"
        },
        Cooperation: {
            pol: "Współpraca"
        },
        "My shipping location:": {
            pol: "Moje miejsce dostawy:"
        },

        Outdoor: {
            pol: "Na Zewnątrz"
        },

        Indoor: {
            pol: "Wewnątrz"
        },

        "For People": {
            pol: "Twój Wygląd"
        },

        "Your Hobby": {
            pol: "Twoje Hobby"
        },
        Gift: {
            pol: "Prezent"
        },
        Books: {
            pol: "Książki"
        },
        Creative: {
            pol: "Creative"
        },
        "Hi-tech": {
            pol: "Hi-tech"
        },
        "Wish List": {
            pol: "Lista Życzeń"
        },
        "Order Status": {
            pol: "Status Zamówienia"
        },
        "Cart (0) items": {
            pol: "Koszyk (0 produktów)"
        },
        "New Items": {
            pol: "Nowości"
        },
        "Digital <br> Catalog": {
            pol: "Katalog"
        },
        "Read Our <br> Blog": {
            pol: "Czytaj <br> Blog "
        },
        "SIGN UP": {
            pol: "Zaloguj się"
        },
        "ABOUT HANKITE": {
            pol: "O NAS"
        },
        "HELP & INFORMATION": {
            pol: "POMÓC & INFORMACJA"
        },
        "Condition of Use": {
            pol: "Warunki Korzystania"
        },
        "Popular Searchers": {
            pol: "Popularne Wyszukiwania"
        },
        "Privacy & Security": {
            pol: "Prywatność & Bezpieczeństwo "
        },
        "Light": {
            pol: "Światło"
        },
        "Mailbox": {
            pol: "Skrzynka"
        },
        "For Pets": {
            pol: "Zwierząty"
        }
    };


    var trans = $('body').translate({lang: "en", t: dict});

    $('.lanSelector').click(function (event) {
            event.preventDefault();
            translatePage();
        }
    );

    onLoad();

    function onLoad() {
        if(sessionStorage.getItem('language')){
            changeLanguage(sessionStorage.getItem('language'));
        }
    }

    function translatePage() {
        var lang = sessionStorage.getItem('language');
        if (lang === "en") {
            changeLanguage('pol');
        } else {
            changeLanguage('en');
        }
    }


    function changeLanguage(language) {
        trans.lang(language);
        document.getElementsByClassName("sell__location__flag")[0].setAttribute("src", "assets/images/icons/" + language + ".png");
        document.getElementsByClassName("sales__promo")[0].setAttribute("src", "assets/images/contant/" + language + ".png");
        sessionStorage.setItem('language', language);
    }
});