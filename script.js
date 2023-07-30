  if (window.performance.getEntriesByType("navigation")[0].type === "reload") {
     randomNumber();
    }

 function randomNumber(){
 let randomNumber1 = Math.floor(Math.random()*6 + 1);
 let randomNumber2 = Math.floor(Math.random()*6 + 1);
 //console.log(randomNumber1,randomNumber2);
 document.querySelector("img.img1").setAttribute("src","dice-images/dice"+randomNumber1+".png");
 document.querySelector("img.img2").setAttribute("src","dice-images/dice"+randomNumber2+".png");
   rollDice(randomNumber1,randomNumber2);
 }

 function rollDice(number1,number2){ 
  if(number1>number2){
      document.querySelector("h1").innerHTML="🚩 Player 1 wins";
  } else if (number2 > number1) {
      document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
  } else {
      document.querySelector("h1").innerHTML = "Draw 🏳️";
  }
 }

