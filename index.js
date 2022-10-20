let firstcard= getrandnum();
let secondcard= getrandnum();

let isalive=true;
let message="";
let hasblackjack=false;
let sum=firstcard+secondcard;

let arr =[firstcard,secondcard];
let cardel=document.getElementById("card-el");


let player={
   playername:"Abhishek",
   playermoney: 150
}



let playerel=document.getElementById("player-el");
playerel.textContent=player.playername+ " $"+player.playermoney;


function getrandnum()
{
   return 2+ Math.floor(Math.random()*10);
}

function gamestart()
{
   if(sum<=20)
   {
    message="do you want to draw a new card?";

   }
 else if(sum===21)
 {
    message="Woo you won";
    hasblackjack=true;
    
 }
 
 else{
    message="you are out of the game";

    isalive=false;
   }
   cardel.textContent="cards : "
   let size=arr.length;

   

   for(let i=0;i<size;i++)
   cardel.textContent+=arr[i] +" ";

  



   let store=document.getElementById("sum-el");
   store.textContent=sum;

   let res=document.getElementById("message-el");
 res.textContent=message;
}



function newgame()
{
   if(isalive===true  && hasblackjack===false)
   {

   let card= getrandnum();
   arr.push(card);
   // document.getElementById("message-el").textContent='Want to play a round? ';
   // document.getElementById("c1").textContent="";
   // document.getElementById("c2").textContent="";
   // document.getElementById("sum-el").textContent="";
   sum+=card;
gamestart();
// card1.textContent=card2+ " "+  card;



// console.log(arr);
}


}
