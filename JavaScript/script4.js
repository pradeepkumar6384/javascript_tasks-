
const hospitalName = "Apollo";


let patientName = prompt("Enter Patient Name:", "vanita");

let tokenNumber = 30;


document.getElementById("hospital").textContent =
    "Hospital : " + hospitalName;

document.getElementById("patient").textContent =
    "Patient : " + patientName;

document.getElementById("token").textContent =
    "Token : " + tokenNumber;