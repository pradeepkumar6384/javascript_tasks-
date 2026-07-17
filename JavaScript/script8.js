
const bankName = "SBI";


let userName = prompt("Enter Your Name:", "vanita");


document.getElementById("welcome").textContent =
    "Welcome " + userName;

document.getElementById("bank").textContent =
    "Bank : " + bankName;