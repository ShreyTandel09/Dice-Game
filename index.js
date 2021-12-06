
var randomNumber1 = Math.floor(Math.random() * 6 + 1); // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // getting random images form img folder using genrated random number

var randomImageSource = "images/" + randomDiceImage ; // geting the source of the img

var image1 = document.querySelectorAll("img")[0]; // selecting a particular query to be changed

image1.setAttribute("src", randomImageSource); // changing the attribute with pointing to one attribute and changing the other attribute.


var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}

else{
    document.querySelector("h1").innerHTML = "Its a Draw!";
}
