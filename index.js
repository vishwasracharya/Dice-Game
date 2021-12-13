let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "dice-" + randomNumber1 + ".png";
let randomImageSrc = "img/" + randomDiceImage;
let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSrc);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSrc2 = "img/dice-" + randomNumber2 + ".png";
let img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}