
//Changes the size and rotation of firstCard element when clicked by the user.
const body = document.querySelector("body") 
const firstCard = document.getElementById('firstcard');
const secondCard = document.getElementById("secondcard");
const thirdCard = document.getElementById("thirdcard");
const fourthCard = document.getElementById("fourthcard");

let isactive = false
firstCard.addEventListener("click", () => {

    if (isactive){
    isactive = false
    firstCard.classList.remove("active");
    body.style.display = "grid";
    } else {
    isactive = true
    
    firstCard.classList.add("active");
    body.style.display = "block";
    }

    
    // firstCard.style.width = "98%";
    // firstCard.style.height = "96%";

    // firstCard.style.margin = "1%";
    // firstCard.style.transform = "rotate(0deg) translateX(0)";
    // firstCard.classList.remove("inactive")
})
