 // Task 2 — Product Description

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        let api = document.querySelector(".api");

        products.forEach(product => {

            let div = document.createElement("div");

            div.innerHTML = `
                <p>Title: ${product.title}</p>
                <p>Description: ${product.description.slice(0, 50)}</p>
                <p>Price: $${product.price}</p>
                <hr>
            `;

            api.appendChild(div);
       });

    });