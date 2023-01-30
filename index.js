
//Changes the size and rotation of firstCard element when clicked by the user.
const body = document.querySelector("body") 
const firstCard = document.getElementById('firstcard');
const secondCard = document.getElementById("secondcard");
const thirdCard = document.getElementById("thirdcard");
const fourthCard = document.getElementById("fourthcard");

let isactive = false
firstCard.addEventListener("click", () => {
    ExpandCard(firstCard, "firstcard")
})
secondCard.addEventListener("click", () => {
    ExpandCard(secondCard, "secondcard")
});
thirdCard.addEventListener("click", () => {
    ExpandCard(thirdCard, "thirdcard")
});
fourthCard.addEventListener("click", () => {
    ExpandCard(fourthCard, "fourthcard")
});

function ExpandCard(cardobj, cardname){
    if (isactive){
        isactive = false
        body.style.display = "grid";
        cardobj.classList.remove("active");

        firstCard.style.visibility = "visible"
        secondCard.style.visibility = "visible"
        thirdCard.style.visibility = "visible"
        fourthCard.style.visibility = "visible"
        
        } else {// Displaying the active card and hiding the others
        isactive = true
        
        cardobj.classList.add("active");
        body.style.display = "block";
        
        switch (cardname){
            case("firstcard"):
                secondCard.style.visibility = "hidden"
                thirdCard.style.visibility = "hidden"
                fourthCard.style.visibility = "hidden"
                break;
            case("secondcard"):
                firstCard.style.visibility = "hidden"
                thirdCard.style.visibility = "hidden"
                fourthCard.style.visibility = "hidden"
                break;
            case("thirdcard"):
                firstCard.style.visibility = "hidden"
                secondCard.style.visibility = "hidden"
                fourthCard.style.visibility = "hidden"
                break;
            case("fourthcard"):
                firstCard.style.visibility = "hidden"
                secondCard.style.visibility = "hidden"
                thirdCard.style.visibility = "hidden"
                break;
        }
    }
}