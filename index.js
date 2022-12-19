
// var2=Math.random();
// var2=var2*9;
// var2=Math.floor(var2+2);
// console.log(var1); 


// let firstCard=6;
// let secondCard=9;




let cards=[];

let sum=0;

let hasBlackJack=false;
let isAlive=false;
let msg="";
let messageEL=document.getElementById("message-el");
//element with the id
let sumEl = document.querySelector("#sum-el");

let cardsEl=document.getElementById("cards-el");

// let playerName = "Per"
// let playerChips = 145
let player ={
    name:"per",
    chips:145
}   

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomVar= Math.floor(Math.random()*13)+1;
    if(randomVar===1){
        return 11;
    }
    else if(randomVar>10){
        return 10;
    }
    else{
        return randomVar;
    }

//     let var1=Math.random()
//     var1=var1*9;
//     var1=Math.floor(var1+2);
//     return var1;
}

function startGame(){
    isAlive=true;
    cards.push(getRandomCard());
    cards.push(getRandomCard());
    sum=cards[0]+cards[1];
    renderGame();
}

// for(let i=0;i<set.lenght;i++)
// {
//     .textContent+=set[i]
// }




function renderGame(){
    cardsEl.textContent="Cards :";
    for(let i=0;i<cards.length;i++){
    cardsEl.textContent+= cards[i]+" "}
    sumEl.textContent="Sum :"+sum;
    if (sum <= 20) {
 
    messageEL.textContent="Do you want to draw a new card? 🙂";
} else if (sum === 21) {

    messageEL.textContent ="Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
} else {
    messageEL.textContent="you lost";
    isAlive = false;
}


}


function newCard(){
    if(isAlive ===true && hasBlackJack===false)
    {
        let card=getRandomCard();
        cards.push(card);
        sum+=card;
        renderGame();
    }
}