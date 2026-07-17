
const websiteName = "myntra";


let productName = prompt("Enter Product Name:", "Shoes");

let customerName = prompt("Enter Customer Name:", "vanita");


let price = 3999;


document.getElementById("website").textContent =
    "Website : " + websiteName;

document.getElementById("product").textContent =
    "Product : " + productName;

document.getElementById("customer").textContent =
    "Customer : " + customerName;

document.getElementById("price").textContent =
    "Price : ₹" + price;