
let suffleCards = function () {
    let deck_of_cards = ["fas fa-anchor", "fas fa-anchor", "fas fa-gem", "fas fa-gem", "fab fa-accessible-icon", "fab fa-accessible-icon", "fab fa-affiliatetheme", "fab fa-affiliatetheme", "fas fa-ambulance", "fas fa-ambulance"]
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
    return deck_of_cards;
}

function init(){
    let deck_of_cards = suffleCards()
    let card_num = document.getElementById("card-deck").dataset.cardNum;
    let index = 0;
    for (let i = 1; i <= card_num; i++) {
        let div = document.createElement("div");
        div.className ="col-md-2 col-sm-6 card";
        div.setAttribute("data-front_pic", deck_of_cards[index]);
        index += 1;
        div.innerHTML = '<i className="fab fa-js"></i>';
        document.getElementById("card-deck").appendChild(div);
    }
    let clickedCard = document.querySelectorAll(".card");
    let move_num = 0;
    for (let card of clickedCard){
    card.addEventListener("click", clickingCard);
}

function clickingCard() {
        let target = event.currentTarget;
        target.innerHTML = `<i class=${target.dataset.frontPic}></i>`; //valamiért kettéválasztja a classt.
        target.classList.add("open");
        move_num ++;
        if (move_num ===2) {
            const open_cards = document.querySelectorAll(".open");
            if (open_cards[0].innerHTML === open_cards[1].innerHTML){
                for (let card of open_cards){
                    card.style.backgroundColor = 'red';
                    card.classList.remove("open")
                    card.classList.add("done")
                }

            }
            move_num = 0;
        }
    });
}
}


init()