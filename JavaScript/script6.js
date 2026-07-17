
const shopName = "croma Mobile Store";


let customerName = prompt("Enter Customer Name:", "vanita");


let mobileModel = prompt("Enter Mobile Model:", "iphone 18");


let price = 250000;


document.getElementById("shop").textContent =
    "Shop : " + shopName;

document.getElementById("customer").textContent =
    "Customer : " + customerName;

document.getElementById("mobile").textContent =
    "Mobile Model : " + mobileModel;

document.getElementById("price").textContent =
    "Price : ₹" + price;