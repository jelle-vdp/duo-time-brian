const body = document.querySelector("body");
body.style.padding = "5rem 0"

const name = document.querySelector("h1");
const nameParts = name.innerText.split(" ");
const uppercasedName = nameParts[0][0].toUpperCase() + nameParts[0].substring(1) + " " + nameParts[1][0].toUpperCase() + nameParts[1].substring(1) + " " + nameParts[2] + " " + nameParts[3][0].toUpperCase() + nameParts[3].substring(1);
name.innerText = uppercasedName;

const emptyImg = document.querySelector(".cards .cards .col-lg-3:nth-child(2) img");
emptyImg.remove();

const pinkCardBody = document.querySelector(".cards .cards .col-lg-3:nth-child(2) .card-body");
pinkCardBody.style.backgroundColor = "pink";
pinkCardBody.style.color = "#333";

const cardImgs = document.querySelectorAll(".cards img");
cardImgs.forEach(img => {
    img.style.width = "100%";
});

const titleThatNeedsPadding1 = document.querySelector(".cards .cards .col-lg-3:nth-child(7) .card-title");
titleThatNeedsPadding1.style.padding = "var(--bs-card-spacer-y) var(--bs-card-spacer-x)";
const titleThatNeedsPadding2 = document.querySelector(".cards .cards .col-lg-3:nth-child(8) h5");
titleThatNeedsPadding2.style.padding = "var(--bs-card-spacer-y) var(--bs-card-spacer-x)";

const cardTitles = document.querySelectorAll(".cards h5");
cardTitles.forEach(cd => {
    cd.innerText = cd.innerText[0].toUpperCase() + cd.innerText.substring(1);
});

const cardTexts = document.querySelectorAll(".cards .card-text");
cardTexts.forEach(ct => {
    ct.innerText = ct.innerText[0].toUpperCase() + ct.innerText.substring(1);
});

const btn = document.querySelector(".btn");
btn.removeAttribute("href");
btn.addEventListener("click", () => {
    const ogText = document.querySelector(".cards .cards .col-lg-3:nth-child(7) .card-text");
    const ogChars = ogText.innerText.split(" ");
    console.log(ogChars);
    ogText.innerText = "";
    ogChars.forEach(char => {
        let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        console.log(randomColor);
        ogText.innerHTML = `${ogText.innerHTML}<span style = "color: ${randomColor}; padding:0 5px;">${char}</span>`;
    });
});


