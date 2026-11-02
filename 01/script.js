
// GET ALL MAIN PAGES

const openingPage = document.getElementById("openingPage");
const scrapbookPage = document.getElementById("scrapbookPage");
const letterPage = document.getElementById("letterPage");
const promisePage = document.getElementById("promisePage");

// ENVELOPE ELEMENTS

const envelopeArea = document.getElementById("envelopeArea");
const openEnvelope = document.getElementById("openEnvelope");
const personalLetter = document.getElementById("personalLetter");


// SHOW SELECTED PAGE

function showPage(page) {

    const pages = [
        openingPage,
        scrapbookPage,
        letterPage,
        promisePage
    ];

    pages.forEach(function (item) {
        item.classList.add("hidden");
    });

    page.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// FLOATING HEARTS

function createHearts() {

    const colors = ["#DCEAF3", "#F3DDE4"];
    const hearts = ["♡", "♥"];

    for (let i = 0; i < 14; i++) {

        const heart = document.createElement("span");

        heart.classList.add("floating-heart");
        heart.textContent = hearts[i % 2];

        heart.style.color = colors[i % 2];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = (45 + Math.random() * 35) + "vh";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 2200);
    }
}


// 01. WELCOME → SCRAPBOOK

document.getElementById("beginButton").addEventListener("click", function () {

    createHearts();
    showPage(scrapbookPage);

});


// 02. SCRAPBOOK → ENVELOPE

document.getElementById("toLetter").addEventListener("click", function () {

    showPage(letterPage);

});


// OPEN ENVELOPE → REVEAL LETTER

openEnvelope.addEventListener("click", function () {

    if (openEnvelope.classList.contains("open")) {
        return;
    }

    openEnvelope.classList.add("open");

    createHearts();

    setTimeout(function () {

        envelopeArea.classList.add("hidden");
        personalLetter.classList.remove("hidden");

    }, 1000);

});


// 03. LETTER → PROMISE

document.getElementById("toPromise").addEventListener("click", function () {

    showPage(promisePage);

});


// BACK BUTTONS

document.getElementById("backToWelcome").addEventListener("click", function () {

    showPage(openingPage);

});

document.getElementById("backToScrapbook").addEventListener("click", function () {

    showPage(scrapbookPage);

});

document.getElementById("backToLetter").addEventListener("click", function () {

    showPage(letterPage);

});
