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

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const shrimpUrlArr = [
    "https://www.bittentoast.com/rpgicons/fant_env/Shrimp.png",
    "https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22301-shrimp-icon.png",
    "https://www.gensh.in/fileadmin/Database/Consumables/Item_Stir-Fried_Shrimp.png"
];

document.querySelector(".cards .cards .col-lg-3:nth-child(8) .card-body").innerHTML = "<button>Click me to open the shrimp game</button>";

document.querySelector("button").addEventListener("click", () => {
    const shrimpContainer = document.createElement("div");
    shrimpContainer.style.border = "1px solid #333";
    shrimpContainer.style.height = "500px";
    shrimpContainer.style.marginTop = "2rem";
    shrimpContainer.style.position = "relative";
    shrimpContainer.style.overflow = "hidden";
    shrimpContainer.classList.add("container");
    shrimpContainer.classList.add("shrimp-game");
    const lastElement = document.querySelector(".container.cards");
    lastElement.parentNode.insertBefore(shrimpContainer, lastElement.nextSibling);
    const shrimpGameContainerDOM = document.querySelector(".shrimp-game");
    shrimpGameContainerDOM.addEventListener("click", () => {
        shrimpImg = document.createElement("img");
        shrimpImg.src = shrimpUrlArr[generateRandomNumber(0, shrimpUrlArr.length - 1)];
        shrimpImg.style.position = "absolute";
        shrimpImg.style.top = `${generateRandomNumber(0, 500)}px`;
        let widthShrimpContainer = shrimpGameContainerDOM.getBoundingClientRect().right - shrimpGameContainerDOM.getBoundingClientRect().left;
        shrimpImg.style.left = `${generateRandomNumber(0, widthShrimpContainer)}px`;
        shrimpGameContainerDOM.appendChild(shrimpImg);
    })

});