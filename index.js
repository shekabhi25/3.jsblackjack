let firstcard=5;
let secondcard=11;

let isalive=true;
let message="";
let hasblackjack=false;
let sum=firstcard+secondcard;
let card1;
let card2;
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
   
   card1=document.getElementById("c1");
   card2=firstcard +" "+ secondcard ;
    card1.textContent=card2
   // document.getElementById("c2").textContent=secondcard;
   let store=document.getElementById("sum-el");
   store.textContent=sum;

   let res=document.getElementById("message-el");
 res.textContent=message;
}

let card=5;

function newgame()
{

   // document.getElementById("message-el").textContent='Want to play a round? ';
   // document.getElementById("c1").textContent="";
   // document.getElementById("c2").textContent="";
   // document.getElementById("sum-el").textContent="";
   sum+=card;
gamestart();
card1.textContent=card2+ " "+  card;

}
