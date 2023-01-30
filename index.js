
//Changes the size and rotation of firstCard element when clicked by the user.
const body = document.querySelector("body") 
const firstCard = document.getElementById('firstcard');
firstCard.addEventListener("click", () => {
    firstCard.style.width = "98vmin";
    firstCard.style.height = "98vh";
    firstCard.style.transform = "none";
    firstCard.style.transform = "rotate(0deg) translateX(-50%)";
    firstCard.classList.remove("inactive")
})
