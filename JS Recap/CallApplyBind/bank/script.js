let bal = document.getElementById("bal");
let deposit = document.getElementById("deposit");
let withdraw = document.getElementById("withdraw");
let inp = document.querySelector("input");


let account = {
    balance: 1000,
    deposit(amount) {
        this.balance = this.balance + amount;
    },
    withdraw(amount) {
        if (amount > this.balance) {
            alert("Insufficient balance");
        } else {
            this.balance = this.balance - amount;
        }
    },
    showBalance() {
        console.log(this.balance);
    }

}

function amdeposit(amount) {
    this.deposit(amount);
}
function amwithdraw(amount) {
    this.withdraw(amount);
}

bal.innerText = `Current Balance: ${account.balance}`;

deposit.addEventListener("click", () => {
    let num = (Number(inp.value));
    amdeposit.call(account, num);
    bal.innerText = `Current Balance: ${account.balance}`;
    inp.value = "";
})

withdraw.addEventListener("click", () => {
    let num = (Number(inp.value));
    amwithdraw.apply(account, [num]);
    bal.innerText = `Current Balance: ${account.balance}`;
    inp.value = "";
})

