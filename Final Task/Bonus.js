fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        let api = document.querySelector(".api");

        products.forEach(c => {

            let div = document.createElement("div");

            div.className = "card";

            div.innerHTML = `
                <img src="${c.image}">

                <h3>Title: ${c.title}</h3>

                <p>Category: ${c.category}</p>

                <p>Description:</p>
                <p>${c.description.slice(0, 50)}...</p>

                <p>Price: $${c.price}</p>

                <p>Rating: ${c.rating.rate}</p>

                <p>Reviews: ${c.rating.count}</p>

                <button>BUY NOW</button>
            `;

            api.append(div);
        });

    });