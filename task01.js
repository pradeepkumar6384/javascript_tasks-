
// Task 1 - Employee Profile


let employeeName = "pradeep";
let employeeId = "EMP1001";
let department = "Frontend";
let salary = 25000;
let isPermanent = true;

console.log("Task 1 - Employee Profile");
console.log("Name :", employeeName);
console.log("Employee ID :", employeeId);
console.log("Department :", department);
console.log("Salary :", salary);
console.log("Permanent :", isPermanent);



// Task 2 - Student Details


let student = {
    name: "Pradeep",
    age: 24,
    course: "MCA",
    college: "AVS College",
    passed: true
};

console.log("\nTask 2 - Student Details");
console.log("Student Name :", student.name);
console.log("Course :", student.course);
console.log("Passed Status :", student.passed);


// Task 3 - Shopping Cart


let shoppingCart = ["Milk", "Rice", "Oil", "Sugar", "Soap"];

console.log("\nTask 3 - Shopping Cart");
console.log("First Product :", shoppingCart[0]);
console.log("Third Product :", shoppingCart[2]);
console.log("Last Product :", shoppingCart[shoppingCart.length - 1]);
console.log("Total Products :", shoppingCart.length);


// Task 4 - Company Employee Database

let companyEmployee = {
    name: "Arun",
    designation: "Software Developer",
    salary: 35000,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

console.log("\nTask 4 - Company Employee Database");
console.log("Employee Name :", companyEmployee.name);
console.log("Designation :", companyEmployee.designation);
console.log("Second Skill :", companyEmployee.skills[1]);


// Task 5 - Salary Calculation

let basicSalary = 25000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;

console.log("\nTask 5 - Salary Calculation");
console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus);
console.log("Total Salary :", totalSalary);


// Task 6 - GST Calculator

let productPrice = 4500;
let gstPercentage = 18;

let gstAmount = (productPrice * gstPercentage) / 100;
let finalAmountWithGST = productPrice + gstAmount;

console.log("\nTask 6 - GST Calculator");
console.log("Product Price :", productPrice);
console.log("GST Amount :", gstAmount);
console.log("Final Amount :", finalAmountWithGST);



// Task 7 - Even or Odd

let number = 25;

let numberResult =
    number % 2 === 0 ? "Even Number" : "Odd Number";

console.log("\nTask 7 - Even or Odd");
console.log(numberResult);


// Task 8 - Login System

let username = "admin";
let password = "12345";

let loginResult =
    username === "admin" && password === "12345"
        ? "Login Success"
        : "Invalid Credentials";

console.log("\nTask 8 - Login System");
console.log(loginResult);


// Task 9 - Voting Eligibility

let voterAge = 22;

let votingStatus =
    voterAge >= 18
        ? "Eligible for Vote"
        : "Not Eligible";

console.log("\nTask 9 - Voting Eligibility");
console.log(votingStatus);


// Task 10 - EMI Eligibility

let emiSalary = 40000;
let experience = 3;

let emiStatus =
    emiSalary > 30000 && experience >= 2
        ? "Eligible"
        : "Not Eligible";

console.log("\nTask 10 - EMI Eligibility");
console.log(emiStatus);



// Task 11 - Product Discount

let price = 5000;
let discountPercentage = 10;

let discountAmount = (price * discountPercentage) / 100;
let finalPrice = price - discountAmount;

console.log("\nTask 11 - Product Discount");
console.log("Original Price :", price);
console.log("Discount Amount :", discountAmount);
console.log("Final Price :", finalPrice);


// Task 12 - User Registration

let userName = "Pradeep Kumar";
let email = "pradeep@example.com";
let phone = "9876543210";
let city = "Salem";

console.log("\nTask 12 - User Registration");
console.log("----- User Details -----");
console.log("Name :", userName);
console.log("Email :", email);
console.log("Phone :", phone);
console.log("City :", city);


// Task 13 - Social Media Profile

let socialMediaProfile = {
    username: "pradeep_dev",
    followers: 1500,
    following: 500,
    posts: 75,
    verified: true
};

console.log("\nTask 13 - Social Media Profile");
console.log("Username :", socialMediaProfile.username);
console.log("Followers :", socialMediaProfile.followers);
console.log("Verified Status :", socialMediaProfile.verified);


// Task 14 - Restaurant Menu

let restaurantMenu = [
    "Idli",
    "Dosa",
    "Poori",
    "Meals",
    "Parotta"
];

console.log("\nTask 14 - Restaurant Menu");
console.log("Second Item :", restaurantMenu[1]);
console.log("Fourth Item :", restaurantMenu[3]);
console.log(
    "Last Item :",
    restaurantMenu[restaurantMenu.length - 1]
);



// Task 15 - Banking System

let accountBalance = 25000;
let withdrawAmount = 8000;
let remainingBalance = accountBalance - withdrawAmount;

console.log("\nTask 15 - Banking System");
console.log("Account Balance :", accountBalance);
console.log("Withdraw Amount :", withdrawAmount);
console.log("Remaining Balance :", remainingBalance);


// Task 16 - Mobile Store

let mobilePrice = 25000;
let exchangeAmount = 5000;
let couponAmount = 2000;

let mobileFinalAmount =
    mobilePrice - exchangeAmount - couponAmount;

console.log("\nTask 16 - Mobile Store");
console.log("Mobile Price :", mobilePrice);
console.log("Exchange Amount :", exchangeAmount);
console.log("Coupon Amount :", couponAmount);
console.log("Final Amount :", mobileFinalAmount);


// Task 17 - Employee Promotion

let employeeExperience = 5;
let performance = true;

console.log("\nTask 17 - Employee Promotion");

if (employeeExperience >= 5 && performance === true) {
    console.log("Promotion Approved");
} else {
    console.log("Promotion Pending");
}


// Task 18 - Movie Ticket

let ticketPrice = 180;
let people = 5;
let ticketTotalAmount = ticketPrice * people;

console.log("\nTask 18 - Movie Ticket");
console.log("Ticket Price :", ticketPrice);
console.log("Number of People :", people);
console.log("Total Amount :", ticketTotalAmount);


// Task 19 - Weather App

let temperature = 38;

let weatherStatus =
    temperature >= 35
        ? "Hot Day"
        : "Normal Weather";

console.log("\nTask 19 - Weather App");
console.log(weatherStatus);


// Task 20 - Mini HR Management

let employee = {
    empCode: "EMP1001",
    name: "Rahul",
    department: "Frontend",
    designation: "Associate Software Engineer",
    salary: 28000,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    permanent: true
};

console.log("\nTask 20 - Mini HR Management");
console.log("Employee Code :", employee.empCode);
console.log("Employee Name :", employee.name);
console.log("Department :", employee.department);
console.log("Salary :", employee.salary);
console.log(
    "Last Skill :",
    employee.skills[employee.skills.length - 1]
);
console.log("Permanent Status :", employee.permanent);