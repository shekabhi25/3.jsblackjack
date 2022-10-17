let firstcard=10;
let secondcard=11;

let isalive=true;
let message="";
let hasblackjack=false;
let sum=firstcard+secondcard;
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
 
 let store=document.getElementById("sum-el");
 store.textContent=sum;

 let res=document.getElementById("message-el");
 res.textContent=message;
}
