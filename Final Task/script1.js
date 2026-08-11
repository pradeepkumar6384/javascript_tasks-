// Task 1 — Product Cards

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        let output = "";

        products.forEach(product => {

            output += `
                <div class="card">

                    <h3>${product.title}</h3>

                    <img src="${product.image}">

                    <p>Price: $${product.price}</p>

                    <p>Category: ${product.category}</p>

                    <p>Rating: ${product.rating.rate}</p>

                </div>
            `;
        });

        document.getElementById("products").innerHTML = output;
    });


