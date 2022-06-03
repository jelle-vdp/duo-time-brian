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

let btnClick = false;

const btn = document.querySelector(".btn");
btn.removeAttribute("href");
btn.addEventListener("click", () => {
    const ogText = document.querySelector(".cards .cards .col-lg-3:nth-child(7) .card-text");
    let ogChars;
    if(!btnClick){
        ogChars = ogText.innerText.split(" ");
    } else {
        ogChars = document.querySelectorAll(".cards .cards .col-lg-3:nth-child(7) .card-text span")
    };
    if(!btnClick){
        ogText.innerText = "";
        ogChars.forEach(char => {
            let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            ogText.innerHTML = `${ogText.innerHTML}<span style = "color: ${randomColor}; padding:0 5px;">${char}</span>`;
        });
    } else {
        ogChars.forEach(span => {
            let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            span.style.color = randomColor;
        });
    };
    btnClick = true;
});

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const moveRandomly = (el , moveX, moveY) => {
    el.style.top = `${+el.style.top.substr(0, el.style.top.length - 2)  + moveY}px`;
    el.style.left = `${+el.style.left.substr(0, el.style.left.length - 2) + moveX}px`;
}

const shrimpUrlArr = [
    "https://www.bittentoast.com/rpgicons/fant_env/Shrimp.png",
    "https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22301-shrimp-icon.png",
    "https://www.gensh.in/fileadmin/Database/Consumables/Item_Stir-Fried_Shrimp.png",
    "https://icons-for-free.com/download-icon-shrimp-131983752943175303_256.png",
    "https://styles.redditmedia.com/t5_2v6xy/styles/communityIcon_o60uuk98pwm11.png",
    "https://www.shareicon.net/data/256x256/2016/05/04/760011_animal_512x512.png",
    "https://images.vexels.com/media/users/3/253666/isolated/lists/6ea5a2437b50ab94d9a2a9c5caccba9d-shrimply-the-best-shrimp-quote-color-stroke.png",
    "https://api.ambr.top/assets/UI/UI_ItemIcon_100093.png",
    "https://icons.iconarchive.com/icons/unclebob/spanish-travel/256/shrimp-icon.png",
    "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjJjZjdlY2IzNWVlYTg2Y2MzNTg2YzE5YTFiMWI1ZWY0LmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=b1433e516a6dccf825a6697c23e10ae5aad02d855822f8cbec8da520930da20f"
];

document.querySelector(".cards .cards .col-lg-3:nth-child(8) .card-body").innerHTML = "<button>Click me to open the shrimp game</button>";

document.querySelector("button").addEventListener("mouseover", () => {
    document.querySelector("button").style.background = "#ccc";
});

document.querySelector("button").addEventListener("mouseout", () => {
    document.querySelector("button").style.background = "";
});

document.querySelector("button").addEventListener("click", () => {
    if (!document.querySelector(".shrimp-game")){
        const shrimpSection = document.createElement("section");
        shrimpSection.classList.add("container");
        shrimpSection.style.marginTop = "3rem";
        shrimpSection.style.display = "flex";
        shrimpSection.style.flexDirection = "column";
        shrimpSection.classList.add("shrimp-game");
        
        const shrimpExplanation = document.createElement("p");
        shrimpExplanation.innerText = "Click inside the box to spawn a random shrimp. Click on one of the shrimps to make it spin around. Doubleclick on a shrimp to move it around randomly inside the box. Click on a shrimp, while holding the 'alt' key and it will double in size for 3 seconds. Hover over a shrimp to change his color. And last but not least: click on the disco button to go wild (for 5 seconds at least).";

        const shrimpContainer = document.createElement("div");
        shrimpContainer.style.border = "1px solid #333";
        shrimpContainer.style.height = "500px";
        shrimpContainer.style.marginTop = "1rem";
        shrimpContainer.style.position = "relative";
        shrimpContainer.style.overflow = "hidden";

        const shrimpDiscoBtn = document.createElement("button");
        shrimpDiscoBtn.innerText = "Let's go disco!";
        shrimpDiscoBtn.style.margin = "1rem auto 0 auto";
        shrimpDiscoBtn.style.padding = "0.6rem 0.8rem";
        shrimpDiscoBtn.style.background = "pink";

        shrimpSection.appendChild(shrimpExplanation);
        shrimpSection.appendChild(shrimpContainer);
        shrimpSection.appendChild(shrimpDiscoBtn);

        const lastElement = document.querySelector(".container.cards");
        lastElement.parentNode.insertBefore(shrimpSection, lastElement.nextSibling);
    };
    const shrimpGameContainerDOM = document.querySelector(".shrimp-game");
    const shrimpGameDiv = document.querySelector(".shrimp-game div");
    shrimpGameContainerDOM.addEventListener("click", (e) => {
        if (e.target.tagName === "DIV"){
            shrimpImg = document.createElement("img");
            shrimpImg.src = shrimpUrlArr[generateRandomNumber(0, shrimpUrlArr.length - 1)];
            shrimpImg.style.position = "absolute";
            shrimpImg.style.width = "100px";
            shrimpImg.style.transition = "0.5s ease-in-out";
            shrimpImg.style.top = `${generateRandomNumber(-50, 550)}px`;
            let widthShrimpContainer = shrimpGameContainerDOM.getBoundingClientRect().right - shrimpGameContainerDOM.getBoundingClientRect().left;
            shrimpImg.style.left = `${generateRandomNumber(-50, widthShrimpContainer + 50)}px`;
            shrimpGameDiv.appendChild(shrimpImg);
        } else if (e.target.tagName === "IMG"){
            e.target.style.transform = "rotate(360deg)";
            e.target.addEventListener("dblclick", () => {
                moveRandomly(e.target, generateRandomNumber(-100, 100), generateRandomNumber(-100, 100));
            });
            if (e.altKey){
                e.target.style.transform = "scale(2)";
                setTimeout(() => e.target.style.transform = "", 3000);
            };
        } else if (e.target.tagName === "BUTTON"){
            let discoShrimps = document.querySelectorAll(".shrimp-game img");
            discoShrimps.forEach(shrimp => {
                const discoInterval = setInterval(() => {
                    shrimp.style.filter = `hue-rotate(${generateRandomNumber(-360, 360)}deg)`;
                    shrimpGameDiv.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                }
                , 100);
                setTimeout(() => {
                    clearInterval(discoInterval);
                    shrimp.style.filter = "";
                    shrimpGameDiv.style.background = "";
                }, 5000);
            });
        };
        let shrimps = document.querySelectorAll(".shrimp-game img");
        shrimps.forEach(shrimp =>{
            shrimp.addEventListener("mouseover", () => {
                shrimp.style.filter = `hue-rotate(${generateRandomNumber(-360, 360)}deg)`;
            });
            shrimp.addEventListener("mouseout", () => {
                shrimp.style.filter = "";
            });
        });
    });
});
