
// 1. Student Registration

function registerStudent() {
    const student = {
        name: document.getElementById("studentName").value,
        age: Number(document.getElementById("studentAge").value),
        department: document.getElementById("studentDepartment").value,
        courseFee: Number(document.getElementById("courseFee").value)
    };

    const eligibility =
        student.age >= 18 ? "Eligible" : "Not Eligible";

    document.getElementById("studentOutput").innerHTML = `
        Name: ${student.name}<br>
        Age: ${student.age}<br>
        Department: ${student.department}<br>
        Course Fee: ₹${student.courseFee}<br>
        Status: ${eligibility}
    `;
}


// 2. Employee Salary Calculator


function calculateSalary() {
    const basicSalary =
        Number(document.getElementById("basicSalary").value);

    const bonus =
        Number(document.getElementById("bonus").value);

    const deduction =
        Number(document.getElementById("deduction").value);

    const totalSalary =
        basicSalary + bonus - deduction;

    document.getElementById("salaryOutput").innerHTML =
        `Total Salary = ₹${totalSalary}`;
}



// 3. Shopping Cart


let cart = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Headphone"
];

function addCartProduct() {
    const product =
        document.getElementById("cartProduct").value.trim();

    if (product !== "") {
        cart.push(product);
    }

    document.getElementById("cartProduct").value = "";

    displayCart();
}

function removeCartProduct() {
    if (cart.length > 0) {
        cart.pop();
    }

    displayCart();
}

function displayCart() {
    let output = `
        Products: ${cart.join(", ")}<br>
        Total Products: ${cart.length}
    `;

    if (cart.length > 0) {
        output += `
            <br>First Product: ${cart[0]}
            <br>Last Product: ${cart[cart.length - 1]}
        `;
    }

    document.getElementById("cartOutput").innerHTML = output;
}


// 4. Login Validation


function validateLogin() {
    const storedUsername = "admin";
    const storedPassword = "12345";

    const username =
        document.getElementById("loginUsername").value;

    const password =
        document.getElementById("loginPassword").value;

    if (
        username === storedUsername &&
        password === storedPassword
    ) {
        document.getElementById("loginOutput").innerHTML =
            "Login Success";
    } else {
        document.getElementById("loginOutput").innerHTML =
            "Invalid Username or Password";
    }
}


// 5. Movie Ticket Booking


function checkMovieAge() {
    const age =
        Number(document.getElementById("movieAge").value);

    const result =
        age >= 18 ? "Eligible" : "Not Eligible";

    document.getElementById("movieOutput").innerHTML =
        result;
}


// 6. Employee Search - find()


const employees = [
    {
        name: "Arun",
        salary: 25000
    },
    {
        name: "Kavin",
        salary: 40000
    },
    {
        name: "Ravi",
        salary: 55000
    }
];

function findEmployee() {
    const searchName =
        document
            .getElementById("employeeSearch")
            .value
            .toLowerCase();

    const employee = employees.find(
        emp => emp.name.toLowerCase() === searchName
    );

    if (employee) {
        document.getElementById("employeeOutput").innerHTML = `
            Name: ${employee.name}<br>
            Salary: ₹${employee.salary}
        `;
    } else {
        document.getElementById("employeeOutput").innerHTML =
            "Employee Not Found";
    }
}



// 7. Product Filter - filter()


const productList = [
    {
        name: "Mouse",
        price: 450
    },
    {
        name: "Keyboard",
        price: 700
    },
    {
        name: "Headphone",
        price: 350
    },
    {
        name: "Monitor",
        price: 8000
    }
];

function filterProducts() {
    const filteredProducts =
        productList.filter(
            product => product.price < 500
        );

    const output = filteredProducts
        .map(
            product =>
                `${product.name} - ₹${product.price}`
        )
        .join("<br>");

    document.getElementById("filterOutput").innerHTML =
        output;
}



// 8. Student Marks - map()


function addGraceMarks() {
    const marks = [45, 56, 67, 89];

    const newMarks =
        marks.map(mark => mark + 5);

    document.getElementById("marksOutput").innerHTML = `
        Original Marks: ${marks.join(", ")}<br>
        New Marks: ${newMarks.join(", ")}
    `;
}


// 9. Attendance / Marks Checker - every()


function checkAllMarks() {
    const marks = [90, 85, 70, 65];

    const result =
        marks.every(mark => mark > 50);

    document.getElementById("everyOutput").innerHTML =
        result;
}


// 10. OTP Generator


function generateOTP() {
    const otp =
        Math.floor(
            100000 + Math.random() * 900000
        );

    document.getElementById("otpOutput").innerHTML =
        otp;
}



// 11. Password Strength Checker


function checkPassword() {
    const password =
        document.getElementById("passwordInput").value;

    const hasMinimumLength =
        password.length >= 8;

    const hasNumber =
        /[0-9]/.test(password);

    const hasUppercase =
        /[A-Z]/.test(password);

    const hasSpecialCharacter =
        /[^A-Za-z0-9]/.test(password);

    if (
        hasMinimumLength &&
        hasNumber &&
        hasUppercase &&
        hasSpecialCharacter
    ) {
        document.getElementById("passwordOutput").innerHTML =
            "Strong Password";
    } else {
        document.getElementById("passwordOutput").innerHTML =
            "Weak Password";
    }
}


// 12. Product Search - includes()


function searchProduct() {
    const products = [
        "Laptop",
        "Mobile",
        "Watch",
        "Camera"
    ];

    const search =
        document.getElementById("productSearchInput").value;

    const result =
        products.includes(search)
            ? "Available"
            : "Not Available";

    document.getElementById("productSearchOutput").innerHTML =
        result;
}


// 13. Digital Clock

function showClock() {
    const currentDate = new Date();

    const time =
        currentDate.toLocaleTimeString();

    document.getElementById("clock").innerHTML =
        time;
}

showClock();

setInterval(showClock, 1000);



// 14. Countdown Timer


let countdownInterval;

function startCountdown() {
    clearInterval(countdownInterval);

    let count = 10;

    document.getElementById("timerDisplay").innerHTML =
        count;

    countdownInterval = setInterval(() => {
        count--;

        document.getElementById("timerDisplay").innerHTML =
            count;

        if (count <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}


// 15. Fake API Product Viewer


function loadProducts() {
    document.getElementById("apiProducts").innerHTML =
        "Loading Products...";

    fetch("https://fakestoreapi.com/products")

        .then(response => response.json())

        .then(products => {
            let output = "";

            products.forEach(product => {
                output += `
                    <div class="product-card">
                        <img
                            src="${product.image}"
                            width="100"
                            height="120"
                            alt="${product.title}"
                        >

                        <h4>${product.title}</h4>

                        <p>
                            Price: $${product.price}
                        </p>
                    </div>
                `;
            });

            document.getElementById("apiProducts").innerHTML =
                output;
        })

        .catch(error => {
            document.getElementById("apiProducts").innerHTML =
                "Unable to load products.";

            console.log(error);
        });
}



// 16. Employee Dashboard - reduce()


function employeeDashboard() {
    const totalSalary =
        employees.reduce(
            (total, employee) =>
                total + employee.salary,
            0
        );

    const averageSalary =
        totalSalary / employees.length;

    const highestSalary =
        employees.reduce(
            (highest, employee) =>
                employee.salary > highest
                    ? employee.salary
                    : highest,
            0
        );

    document.getElementById("dashboardOutput").innerHTML = `
        Total Salary: ₹${totalSalary}<br>
        Average Salary: ₹${averageSalary}<br>
        Highest Salary: ₹${highestSalary}
    `;
}


// 17. Online Food Order


const menu = {
    Pizza: 250,
    Burger: 150,
    Shawarma: 120,
    Fries: 100
};

let foodOrder = [];

function addFood() {
    const item =
        document.getElementById("foodItem").value;

    foodOrder.push(item);

    displayFoodOrder();
}

function removeFood() {
    if (foodOrder.length > 0) {
        foodOrder.pop();
    }

    displayFoodOrder();
}

function displayFoodOrder() {
    const totalBill =
        foodOrder.reduce(
            (total, item) =>
                total + menu[item],
            0
        );

    document.getElementById("foodOutput").innerHTML = `
        Items: ${foodOrder.join(", ") || "No Items"}<br>
        Total Items: ${foodOrder.length}<br>
        Total Bill: ₹${totalBill}
    `;
}


// 18. Bank Account


const bankAccount = {
    accountHolder: "Rahul",
    balance: 10000,

    deposit(amount) {
        this.balance += amount;
    },

    withdraw(amount) {
        if (amount > this.balance) {
            return false;
        }

        this.balance -= amount;

        return true;
    },

    checkBalance() {
        return this.balance;
    }
};

function depositMoney() {
    const amount =
        Number(document.getElementById("bankAmount").value);

    if (amount > 0) {
        bankAccount.deposit(amount);

        document.getElementById("bankOutput").innerHTML =
            `₹${amount} Deposited Successfully`;
    }
}

function withdrawMoney() {
    const amount =
        Number(document.getElementById("bankAmount").value);

    if (amount <= 0) {
        return;
    }

    if (bankAccount.withdraw(amount)) {
        document.getElementById("bankOutput").innerHTML =
            `₹${amount} Withdrawn Successfully`;
    } else {
        document.getElementById("bankOutput").innerHTML =
            "Insufficient Balance";
    }
}

function showBalance() {
    document.getElementById("bankOutput").innerHTML =
        `Current Balance: ₹${bankAccount.checkBalance()}`;
}



// 19. To-Do List


let tasks = [];

function addTask() {
    const task =
        document.getElementById("taskInput").value.trim();

    if (task !== "") {
        tasks.push(task);

        document.getElementById("taskInput").value = "";

        displayTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);

    displayTasks();
}

function updateTask(index) {
    const newTask =
        prompt(
            "Enter Updated Task",
            tasks[index]
        );

    if (
        newTask !== null &&
        newTask.trim() !== ""
    ) {
        tasks[index] = newTask;

        displayTasks();
    }
}

function displayTasks() {
    let output = "";

    tasks.forEach((task, index) => {
        output += `
            <p>
                ${index + 1}. ${task}

                <button onclick="updateTask(${index})">
                    Update
                </button>

                <button onclick="deleteTask(${index})">
                    Delete
                </button>
            </p>
        `;
    });

    document.getElementById("todoOutput").innerHTML =
        output || "No Tasks";
}


// 20. Mini E-Commerce Product Management


let ecommerceProducts = [];

function addEcommerceProduct() {
    const product = {
        name:
            document.getElementById("ecomName").value.trim(),

        price:
            Number(document.getElementById("ecomPrice").value),

        category:
            document.getElementById("ecomCategory").value.trim(),

        stock:
            Number(document.getElementById("ecomStock").value)
    };

    if (
        product.name !== "" &&
        product.category !== "" &&
        product.price > 0 &&
        product.stock >= 0
    ) {
        ecommerceProducts.push(product);

        document.getElementById("ecomOutput").innerHTML =
            `${product.name} Added Successfully`;
    }
}

function searchEcommerceProduct() {
    const search =
        document
            .getElementById("ecomSearch")
            .value
            .toLowerCase();

    const product =
        ecommerceProducts.find(
            item =>
                item.name.toLowerCase() === search
        );

    if (product) {
        document.getElementById("ecomOutput").innerHTML = `
            Name: ${product.name}<br>
            Price: ₹${product.price}<br>
            Category: ${product.category}<br>
            Stock: ${product.stock}
        `;
    } else {
        document.getElementById("ecomOutput").innerHTML =
            "Product Not Found";
    }
}

function filterEcommerceProducts() {
    const category =
        document
            .getElementById("ecomFilter")
            .value
            .toLowerCase();

    const filteredProducts =
        ecommerceProducts.filter(
            product =>
                product.category.toLowerCase() === category
        );

    const output =
        filteredProducts
            .map(
                product =>
                    `${product.name} - ₹${product.price} - Stock: ${product.stock}`
            )
            .join("<br>");

    document.getElementById("ecomOutput").innerHTML =
        output || "No Products Found";
}

function showInventory() {
    const totalStock =
        ecommerceProducts.reduce(
            (total, product) =>
                total + product.stock,
            0
        );

    const totalInventoryValue =
        ecommerceProducts.reduce(
            (total, product) =>
                total +
                product.price * product.stock,
            0
        );

    document.getElementById("ecomOutput").innerHTML = `
        Total Products: ${ecommerceProducts.length}<br>
        Total Stock: ${totalStock}<br>
        Total Inventory Value: ₹${totalInventoryValue}
    `;
}


// Initial Display
displayCart();
displayFoodOrder();
displayTasks();