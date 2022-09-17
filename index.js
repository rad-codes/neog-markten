// console.log("hello")
const billamt=document.querySelector("#bill-amount");
const cashgiven=document.querySelector("#cash-given");
const button=document.querySelector("#check-button");
const message=document.querySelector("#error-message")
const noofnotes = document.querySelectorAll(".no-of-notes");
const amts=document.querySelector("#amt")
const availablenotes = [2000, 500, 100, 20, 10, 5, 1];
const cashinput=document.querySelector("#cash-given")
const cashlabel=document.querySelector("#cash-given-label")
function handlechange(){
cashgiven.style.display="block";
cashlabel.style.display="block";

}
billamt.addEventListener("change",handlechange);
function handleclick(){
    hidemessage()
console.log(billamt)
    if(billamt.value>0){
if(Number(billamt.value)<=Number(cashgiven.value)){
const changeamt=cashgiven.value-billamt.value;
amt.innerText=changeamt
calculateChange(changeamt)
}
else{
    showmessage("cash given cannot be less than bill amt")
}
    }else{
showmessage("Invalid Input")
    }
}
function calculateChange(amt){
    for (i=0;i<availablenotes.length;i++){
      const noofnotesofi=  Math.trunc(amt/availablenotes[i])
      amt=amt%availablenotes[i]
      noofnotes[i].innerText = noofnotesofi;
    }
}
function hidemessage(){
    message.style.display = "none";
}
function showmessage(messg){
    message.innerText=messg
    message.style.display = "block";

}
button.addEventListener("click",handleclick)