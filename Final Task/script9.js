fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        let api = document.querySelector(".api");

        products.forEach(c => {

            let div = document.createElement("div");

            div.innerHTML = `
                <h3>${c.title}</h3>

                <button>Buy for $${c.price}</button>
            `;

            api.appendChild(div);
        });

    });
