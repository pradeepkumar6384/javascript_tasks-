
const gymName = "Fitness World Gym";


let memberName = prompt("Enter Member Name:", "vanita");


let membershipFee = 6000;


document.getElementById("gym").textContent =
    "Gym : " + gymName;

document.getElementById("member").textContent =
    "Member : " + memberName;

document.getElementById("fee").textContent =
    "Membership Fee : ₹" + membershipFee;