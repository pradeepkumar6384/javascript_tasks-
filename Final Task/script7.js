fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        let api = document.querySelector(".api");

        products.forEach(c => {

            let div = document.createElement("div");

            div.innerHTML = `
                <p>Product: ${c.title}</p>
                <p>Rating: ${c.rating.rate}</p>
                <p>Reviews: ${c.rating.count}</p>
                <hr>
            `;

            api.appendChild(div);
        });

    });