let c=0;
function updateButton() {
    var Ammount = document.getElementById("Ammount").value;
    if (Ammount>1000000){
        alert("Transaction amount exceeds 1000000!");
        return;
    }
    document.querySelector(".ern .ammount").textContent = "₹ " + Ammount;
    document.querySelector(".exp .ammount").textContent = "₹ " + Ammount;
}

var balance = parseFloat(document.getElementById("balance").textContent);
function addTransaction() {
    c++;
    var Description = document.getElementById("Description").value;
    var amount = Number(document.getElementById("Ammount").value);
    var transactionType = "Earning";
    if (isNaN(balance)) {
        balance = 0;
    }
    balance += amount;

    document.getElementById("balance").innerHTML =  `<span>₹ </span> ${balance}` ;
    document.getElementById("balance").style.color = "green"; 
    displayTransaction(amount, transactionType, Description);
}

function subtractTransaction() {
    c++;
    var Description = document.getElementById("Description").value;
    var amount = Number(document.getElementById("Ammount").value);
    var transactionType = "Expense";
    if (isNaN(balance)) {
        balance = 0;
    }
    if (balance >= amount) {
        balance -= amount;
        document.getElementById("balance").innerHTML =  `<span>₹ </span> ${balance}` ;
        displayTransaction(amount, transactionType,Description);
    }
    else {
        alert("Insufficient balance for this transaction!");
        return;
    }
}

function displayTransaction(amount, transactionType,Description) {
    document.getElementById(`d${c}`).innerHTML= `${Description}`;
    if(transactionType=="Earning"){
        document.getElementById(`a${c}`).innerHTML=`<span>+₹ </span>${amount}`;
        document.getElementById(`a${c}`).style.color = "green"; 
        document.getElementById(`del${c}`).innerHTML ='<img src="./MyImages/delete-item.png" alt=""width="20" height="20">';
    }
    else{
        document.getElementById(`a${c}`).innerHTML=`<span>-₹ </span>${amount}`;
        document.getElementById(`a${c}`).style.color = "red"; 
        document.getElementById(`del${c}`).innerHTML ='<img src="./MyImages/delete-item.png" alt=""width="20" height="20">';
    }
}

