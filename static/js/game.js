
let clickedCard = document.querySelectorAll(".card");
let move_num = 0;

for (let card of clickedCard){
    card.addEventListener("click", function(event){
        let target = event.currentTarget;
        target.innerHTML = '<i class="fas fa-anchor"></i>';
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