"use strict";


const toggleButton = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar-links')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})





function showHideForm() {


    if (document.getElementById('back-checkbox').checked) {
        document.getElementById('toggle-form').style.display = 'block';

    } else {
        document.getElementById('toggle-form').style.display = 'none';
    }
}

function showHideAlong() {


    if (document.getElementById('ride-along-checkbox').checked) {
        document.getElementById('toggle-ride-along').style.display = 'block';

    } else {
        document.getElementById('toggle-ride-along').style.display = 'none';
    }
}

function showHideLoad() {


    if (document.getElementById('load-item').checked) {
        document.getElementById('toggle-load').style.display = 'block';

    } else {
        document.getElementById('toggle-load').style.display = 'none';
    }
}

function showHideRerun() {


    if (document.getElementById('trip-rerun').checked) {
        document.getElementById('toggle-trip').style.display = 'block';

    } else {
        document.getElementById('toggle-trip').style.display = 'none';
    }
}

function showHideTime() {


    if (document.getElementById('now').checked) {
        document.getElementById('toggle-time').style.display = 'none';

    } else {
        document.getElementById('toggle-time').style.display = 'block';
    }
}



function showHideComp() {


    if (document.getElementById('ride-along-checkbox').checked) {
        document.getElementById('toggle-ride-along').style.display = 'block';

    } else {
        document.getElementById('toggle-ride-along').style.display = 'none';
    }
}



window.onload = init;

function init() {

    //Hämtar in knapparna
    const expanderBtn = document.getElementsByClassName("expanderBtn");

    //Lägger en händelselyssnare på varje knapp
    for (let i = 0; i < expanderBtn.length; i++) {
        expanderBtn[i].addEventListener("click", function() {
            //Hämtar in nästa element vilket blir article-elementet efter knappen som trycks
            let textExpand = this.nextElementSibling;

            //Kontroll om article är synlig
            if (textExpand.style.display === "block") {

                //Är den synlig så döljs den med css
                textExpand.style.display = "none";

                //Ändrar aria-expended från true till false(infälld knapp)
                this.setAttribute("aria-expanded", "false");

                //Ändrar pil-ikon
                //this.firstElementChild.classList.remove("fa-chevron-up");
                //this.firstElementChild.classList.add("fa-chevron-down");

                expanderBtn[i].querySelector(".arrow").classList.remove("fa-chevron-up");
                expanderBtn[i].querySelector(".arrow").classList.add("fa-chevron-down");
            } else {
                //article-visas
                textExpand.style.display = "block";

                //Ändrar aria-expanded från false till true(utvidgad knapp)
                this.setAttribute("aria-expanded", "true");

                //ändrar pil-ikon
                expanderBtn[i].querySelector(".arrow").classList.add("fa-chevron-up");
                expanderBtn[i].querySelector(".arrow").classList.remove("fa-chevron-down");
            }
        })
    }
}


let from = document.getElementById("from")
let to = document.getElementById("to")
let bookform = document.getElementById("booking")
let errorElement = document.getElementById("error")

function checker() {


    bookform.addEventListener("submit", (e) => {
        let messages = []
        if (from.value === "" || from.value == null) {
            messages.push("Obligatoriska fällt måste fyllas i")
        }
        if (to.value === "" || to.value == null) {
            messages.push("")
        }
        if (messages.length > 0) {

            e.preventDefault()
            errorElement.innerText = messages.join(". ")
        }

    })
}