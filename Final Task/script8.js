fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        let api = document.querySelector(".api");

        products.forEach(c => {

            let div = document.createElement("div");

            div.innerHTML = `
                <p>Title: ${c.title}</p>
                <p>Description: ${c.description.slice(0, 20)}</p>
                <hr>
            `;

            api.appendChild(div);
        });

    });