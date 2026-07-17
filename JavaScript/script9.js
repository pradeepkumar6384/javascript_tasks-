// Travels Name → const
const travelsName = "VRL Travels";

// Passenger Name → prompt()
let passengerName = prompt("Enter Passenger Name:", "vanita");

// Seat Number → let
let seatNumber = "A12";

// Print ticket details
document.getElementById("travels").textContent =
    "Travels : " + travelsName;

document.getElementById("passenger").textContent =
    "Passenger : " + passengerName;

document.getElementById("seat").textContent =
    "Seat Number : " + seatNumber;