
function suffleCards (deck_of_cards) {
    let ctr = deck_of_cards.length;
    let temp;
    let index;
    while (ctr > 0){
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = deck_of_cards[ctr];
        deck_of_cards[ctr] = deck_of_cards[index];
        deck_of_cards[index] = temp;
    }

}

function newArray(card_num) {
    let deck_of_cards = [
    "fa-java",
    "fa-windows",
    "fa-python",
    "fa-git-square",
    "fa-node-js",
    "fa-php",
    "fa-css3-alt",
    "fa-ubuntu",
    "fa-js", "fa-gitlab"
];
    let newDeck = new Array();
    for (let i = 0; i< (card_num/2); i++){
        newDeck.push(deck_of_cards[i]);
        newDeck.push(deck_of_cards[i]);
    }
    suffleCards(newDeck);
    return newDeck;
}


function examMatch(firstClassList, secondClassList, flippedCards) {
    if (firstClassList[1] === secondClassList[1]) {
        for (let i = 0; i < flippedCards.length; i++) {
            flippedCards[i].style.backgroundColor = 'green';
        }
    } else {
        for (let i = 0; i < flippedCards.length; i++) {
            flippedCards[i].classList.remove('is-flipped');
        }
    }
}

function init(){
    let card_num = document.getElementById("card-deck").dataset.cardNum;
    let newDeck = newArray(card_num);
    let index = 0;
    let move_num = 0;
    for (let i = 1; i <= card_num; i++) {
        let div = document.createElement("div");
        div.className ="col-md-2 col-sm-6 card flip-card";
        div.setAttribute("data-front_pic", newDeck[index]);
        div.innerHTML = '<i class="fas fa-motorcycle card-face"></i>';
        div.innerHTML += `<i class="fab ${newDeck[index]} card-back"></i>`;
        index += 1;
        document.getElementById("card-deck").appendChild(div);
        div.addEventListener('click', function (event) {
            this.classList.toggle('is-flipped');
            move_num ++;
            if (move_num ===2){
                let flippedCards = document.querySelectorAll('.is-flipped');
                let firstCard = flippedCards[0].querySelectorAll('.fab');
                let secondCard = flippedCards[1].querySelectorAll('.fab');
                for (let i=0; i< firstCard.length ; i++){
                    let firstClassList = firstCard[i].classList;
                    let secondClassList = secondCard[i].classList;
                    setTimeout(function () {
                        examMatch(firstClassList, secondClassList, flippedCards)
                    }, 1000);
                }
                move_num = 0;
            }
        })
    }
}
//
// function clickingCard() {
//     let clickedCard = document.querySelectorAll(".card");
//     for (let card of clickedCard){
//     card.addEventListener("click", function(event){
//         this.classList.toggle('is-flipped')
//
//
//         // let target = event.currentTarget;
//         // let front_pic = target.dataset.front_pic;
//         // target.innerHTML = `<i class="fab ${target.dataset.front_pic} card-back"></i>`; //valamiért kettéválasztja a classt.
//         target.classList.add("open");
//         move_num ++;
//         if (move_num ===2) {
//             const open_cards = document.querySelectorAll(".open");
//             if (open_cards[0].innerHTML === open_cards[1].innerHTML){
//                 for (let card of open_cards){
//                     card.style.backgroundColor = 'red';
//                     card.classList.remove("open")
//                     card.classList.add("done")
//                 }
//
//             }
//             move_num = 0;
//         }
//     });
// }
// }


init()