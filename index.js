document.querySelector("button").addEventListener("click",handleClick);
    function handleClick(){
            // Dice 1
            let randomNumber1 = Math.floor(Math.random() * 6 + 1);
            let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
            document.querySelector(".img1").setAttribute("src", randomDiceImage1);
            document.querySelector(".img1").classList.toggle("diceRoll1");
            document.querySelector(".img1").classList.toggle("diceRoll2");

            // Dice 2
            let randomNumber2 = Math.floor(Math.random() * 6 + 1);
            let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
            document.querySelector(".img2").setAttribute("src", randomDiceImage2);
            document.querySelector(".img2").classList.toggle("diceRoll1");
            document.querySelector(".img2").classList.toggle("diceRoll2");


            if (randomNumber1 === randomNumber2) {
                document.querySelector("h1").innerHTML = "Oops, It's a Draw!";
                document.querySelector("h1").style.fontSize = "5rem";
            }
            else if (randomNumber1 > randomNumber2) {
                document.querySelector("h1").innerHTML = "I Win!🚩";
            }
            else {
                document.querySelector("h1").innerHTML = "You Win!🚩";
            }
    }

document.addEventListener("keydown", function (event) {
    handlePress(event.key);
});
function handlePress(enter) {
    switch (enter) {
        case "Enter":
            // Dice 1
            let randomNumber1 = Math.floor(Math.random() * 6 + 1);
            let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
            document.querySelector(".img1").setAttribute("src", randomDiceImage1);


            // Dice 2
            let randomNumber2 = Math.floor(Math.random() * 6 + 1);
            let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
            document.querySelector(".img2").setAttribute("src", randomDiceImage2);


            if (randomNumber1 === randomNumber2) {
                document.querySelector("h1").innerHTML = "Oops, It's a Draw!";
                document.querySelector("h1").style.fontSize = "5rem";
            }
            else if (randomNumber1 > randomNumber2) {
                document.querySelector("h1").innerHTML = "🚩I Win!";
            }
            else {
                document.querySelector("h1").innerHTML = "You Win!🚩";
            }
            break;
        default:
            console.log(handlePress);
    }
}
