function main() {


const cardSymbolContainer = [
    "fa-java",
    "fa-windows",
    "fa-python",
    "fa-git-square",
    "fa-node-js",
    "fa-php",
    "fa-css3-alt",
    "fa-ubuntu",
    "fa-apple-alt",
    "fa-js"
];

const cardDeck = document.querySelectorAll(".flip-card");



function iconChanger(card) {
    let shuffledCards= shuffle(cardSymbolContainer);
    let randomIcons = shuffledCards[Math.floor(Math.random()*shuffledCards.length)]
    let tag = document.getElementsByClassName('fab');
    for(let i = 0; i < tag.length; i++){
        console.log(tag[i].classList);
        let classes = tag[i].classList;
        for(let i = 0; i < classes.length; i ++);{
            console.log(classes.length);
        }
        let result = classes.replace("fa-js", randomIcons);



    }
}


for (let card of cardDeck) {

    card.addEventListener('click', function (event) {
        this.style.backgroundColor = '';
        card.classList.toggle('is-flipped');
        iconChanger(card);
    });
}




function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return cardSymbolContainer;
}

shuffledCards = shuffle(cardSymbolContainer);



}




main();
