// / Task 4 — Product Image Gallery


fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        let api = document.querySelector(".api");

        products.forEach(product => {

            let img = document.createElement("img");

            img.src = product.image;

            img.width = 150;

            api.appendChild(img);
        });

    });