// // Dice 1
// let randomNumber1 = Math.floor(Math.random()*6+1);
// let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
// document.querySelector(".img1").setAttribute("src",randomDiceImage1);


// // Dice 2
// let randomNumber2 = Math.floor(Math.random()*6+1);
// let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
// document.querySelector(".img2").setAttribute("src",randomDiceImage2);


// if(randomNumber1===randomNumber2){
// document.querySelector("h1").innerHTML="Arre ye to DRAW hogaya!";
// document.querySelector("h1").style.fontSize = "6rem";
// }
// else if(randomNumber1>randomNumber2){
//     document.querySelector("h1").innerHTML="🚩Dipesh Wins!";
// }
// else{
//     document.querySelector("h1").innerHTML="Chirkut Wins!🚩";
// }


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
                document.querySelector("h1").innerHTML = "Arre ye to DRAW hogaya!";
                document.querySelector("h1").style.fontSize = "6rem";
            }
            else if (randomNumber1 > randomNumber2) {
                document.querySelector("h1").innerHTML = "🚩Dipesh Wins!";
            }
            else {
                document.querySelector("h1").innerHTML = "Chirkut Wins!🚩";
            }
            break;
        default:
            console.log(handlePress);
    }
}