const billAmount = document.querySelector ("#bill-amount");
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector ("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes =  document.querySelectorAll(".no-of-notes")

const availabeNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    let cg= parseInt(cashGiven.value)
    let ba= parseInt(billAmount.value)
    
    // console.log("bill-amount", cg, ba,  cashGiven.value, billAmount.value);
    if (ba > 0) {
        if (cg >= ba) {
            const amountToBeReturned = cg - ba;
            calculateChange(amountToBeReturned);

        } else {
            showMessage("Are You Serious?");
        }

    } else  {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned){
    for(let i=0; i < availabeNotes.length; i++) {
        
        const numberOfNotes =  (
            amountToBeReturned - (amountToBeReturned % availabeNotes[i]) 
            ) / availabeNotes[i];
        amountToBeReturned = amountToBeReturned % availabeNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}


function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}
