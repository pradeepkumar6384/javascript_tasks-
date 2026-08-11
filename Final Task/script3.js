// /  Task 3 — Product List
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        let api = document.querySelector(".api");

        products.forEach(product => {

            let div = document.createElement("div");

            div.innerHTML = `
                <p>Product: ${product.title}</p>
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
                <img src="${product.image}" width="150">
                <hr>
            `;

            api.appendChild(div);
        });
    });
