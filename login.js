class BankDB {
    static getAccountDetails() {
        let data = {
            shag: { uname: "shag", pswd: "a123", emai: "sha@gmail.com", balance: 5000 },
            sredha: { uname: "sredha", pswd: "s123", emai: "sha@gmail.com", balance: 50000 }
        }

        return data
    }

}

function authnticn() {
    let pwd = document.querySelector("#password").value
    var user = document.querySelector("#uname").value
    var data = BankDB.getAccountDetails()
    if (user in data) {
        let password = data[user]["pswd"]
        {
            if (password == pwd) {

                swal("Login Success!", "You clicked the button!", "success");
                setTimeout(() => window.location.href = "userHome.html", 5000)
            }
            else swal("Incorrect password!", "You clicked the button!", "warning");
        }
    }
    else swal("Invalid user!", "You clicked the button!", "error");
}
var submit = document.querySelector("#submit")
submit.addEventListener("click", () => authnticn())
function depositAccount() {
   
    let amount = document.querySelector("#amount").value
    let data = BankDB.getAccountDetails()
    let user=document.querySelector("#uname").value
    if(user in data)
    {
        data[user]["balance"] += amount.
        document.querySelector("#depres").textContent=data[user]["balance"]
    }
    else swal("Invalid User!", "You clicked the button!", "warning");

}
function withdrawAccount() {
   
    let amount = document.querySelector("#amount").value
    let data = BankDB.getAccountDetails()
    let user=document.querySelector("#uname").value
    if(user in data)
    {
        if(data[user]["balance"]>=amount)
    {
        data[user]["balance"] -= amount
        document.querySelector("#depres").textContent=data[user]["balance"]
    }
    else swal("Insufficient balance!", "You clicked the button!", "warning");

}
else swal("Invalid User!", "You clicked the button!", "warning");
}
// var deposit =document.querySelector("#deposit")
// deposit.addEventListener("click",()=>alert(""))