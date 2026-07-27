// Task 1 – Student Registration

let studentName = "Rahul";
let department = "CSE";
let cgpa = 8.6;

let studentStatus = cgpa >= 7 ? "Eligible" : "Not Eligible";

console.log("Task 1 – Student Registration");
console.log("Student Name :", studentName);
console.log("Department :", department);
console.log("CGPA :", cgpa);
console.log("Status :", studentStatus);


// Task 2 – Online Shopping Bill

let productPrice = 2500;
let quantity = 3;

let totalAmount = productPrice * quantity;
let discountAmount = totalAmount > 5000 ? totalAmount * 0.10 : 0;
let finalPrice = totalAmount - discountAmount;

console.log("\nTask 2 – Online Shopping Bill");
console.log("Total :", totalAmount);
console.log("Discount :", discountAmount);
console.log("Final Price :", finalPrice);


// Task 3 – Employee Salary

let basicSalary = 35000;
let bonus = 5000;
let tax = 3000;

let netSalary = basicSalary + bonus - tax;

console.log("\nTask 3 – Employee Salary");
console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Net Salary :", netSalary);


// Task 4 – Movie Ticket Booking

let movie = "Leo";
let ticketPrice = 180;
let tickets = 5;

let ticketTotal = ticketPrice * tickets;

console.log("\nTask 4 – Movie Ticket Booking");
console.log("Movie :", movie);
console.log("Tickets :", tickets);
console.log("Total :", ticketTotal);



// Task 5 – Login System

let username = "admin";
let password = "12345";

console.log("\nTask 5 – Login System");

if (username === "admin" && password === "12345") {
    console.log("Login Success");
} else {
    console.log("Invalid Username or Password");
}


// Task 6 – Electricity Bill


let units = 250;
let electricityBill;

if (units <= 100) {
    electricityBill = units * 5;
} else if (units <= 200) {
    electricityBill = (100 * 5) + ((units - 100) * 7);
} else {
    electricityBill =
        (100 * 5) +
        (100 * 7) +
        ((units - 200) * 10);
}

console.log("\nTask 6 – Electricity Bill");
console.log("Units Consumed :", units);
console.log("Total Bill : ₹" + electricityBill);


// Task 7 – Restaurant Order


let menu = ["Dosa", "Idly", "Poori", "Meals"];

console.log("\nTask 7 – Restaurant Order");
console.log("First Item :", menu[0]);
console.log("Last Item :", menu[menu.length - 1]);
console.log("Total Items :", menu.length);

menu.push("Fried Rice");

let idlyIndex = menu.indexOf("Idly");

if (idlyIndex !== -1) {
    menu.splice(idlyIndex, 1);
}

console.log("Updated Menu :", menu);


// Task 8 – Employee Object


let employee = {
    name: "Ravi",
    role: "Frontend Developer",
    salary: 40000
};

console.log("\nTask 8 – Employee Object");
console.log("Employee Name :", employee.name);
console.log("Role :", employee.role);
console.log("Salary :", employee.salary);


// Task 9 – Product Inventory

let inventoryProducts = [
    "Mouse",
    "Keyboard",
    "Monitor",
    "CPU",
    "Speaker"
];

console.log("\nTask 9 – Product Inventory");

for (let i = 0; i < inventoryProducts.length; i++) {
    console.log(i + 1, inventoryProducts[i]);
}


// Task 10 – Function

function calculateArea(length, width) {
    return length * width;
}

console.log("\nTask 10 – Function");
console.log("Area =", calculateArea(20, 10));


// Task 11 – Bank Deposit

let currentBalance = 5000;

function deposit(amount) {
    currentBalance += amount;
    console.log("Deposited :", amount);
    console.log("Balance After Deposit :", currentBalance);
}

function withdraw(amount) {
    if (amount <= currentBalance) {
        currentBalance -= amount;
        console.log("Withdrawn :", amount);
        console.log("Balance After Withdrawal :", currentBalance);
    } else {
        console.log("Insufficient Balance");
    }
}

console.log("\nTask 11 – Bank Deposit");
console.log("Current Balance :", currentBalance);

deposit(2000);
withdraw(1000);

console.log("Final Balance :", currentBalance);


// Task 12 – Callback Function

function addition(number1, number2) {
    return number1 + number2;
}

function calculate(callback, number1, number2) {
    let result = callback(number1, number2);

    console.log(result);
    console.log("Calculation Completed");
}

console.log("\nTask 12 – Callback Function");
calculate(addition, 10, 20);



// Task 13 – Generator Function


function* couponGenerator() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "BIG50";
    yield "MEGA100";
}

let coupons = couponGenerator();

console.log("\nTask 13 – Generator Function");
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);



// Task 14 – Currying


function discount(number1) {
    return function (number2) {
        return function (number3) {
            return number1 + number2 + number3;
        };
    };
}

console.log("\nTask 14 – Currying");
console.log(discount(10)(20)(30));


// Task 15 – Spread Operator


let frontend = ["HTML", "CSS", "JS"];
let backend = ["Node", "Express", "MongoDB"];

let fullStack = [...frontend, ...backend];

console.log("\nTask 15 – Spread Operator");
console.log(fullStack);

// Task 16 – Rest Operator

function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log("\nTask 16 – Rest Operator");
console.log(sum(10, 20, 30, 40, 50));



// Task 17 – Array Destructuring


let colors = ["Red", "Blue", "Green", "Yellow"];

let [firstColor, secondColor, thirdColor, fourthColor] = colors;

console.log("\nTask 17 – Array Destructuring");
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(fourthColor);



// Task 18 – Object Destructuring


let user = {
    name: "Navi",
    city: "Salem",
    role: "Developer"
};

let {
    name: userName,
    city: userCity,
    role: userRole
} = user;

console.log("\nTask 18 – Object Destructuring");
console.log(userName);
console.log(userCity);
console.log(userRole);



// Task 19 – Shopping Cart


let cart = ["Mobile", "Laptop", "Watch"];

console.log("\nTask 19 – Shopping Cart");
console.log("Original Cart :", cart);

cart.push("Headset");
console.log("After push() :", cart);

cart.pop();
console.log("After pop() :", cart);

cart.shift();
console.log("After shift() :", cart);

cart.unshift("Tablet");
console.log("After unshift() :", cart);



// Task 20 – Product Search


let searchProducts = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Speaker"
];

let searchProduct = "Monitor";

console.log("\nTask 20 – Product Search");

if (searchProducts.includes(searchProduct)) {
    console.log("Product Available");
} else {
    console.log("Out of Stock");
}