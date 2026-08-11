// Task 6 — Product Details Card

    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        let api = document.querySelector(".api");

        products.forEach(product => {

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${product.title}</h3>

                <img src="${product.image}">

                <p>Description: ${product.description}</p>

                <p>Category: ${product.category}</p>

                <p>Price: $${product.price}</p>

                <p>Rating: ${product.rating.rate}</p>
            `;

            api.appendChild(card);
        });

    });