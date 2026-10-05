async function fun() {
    try {
        let products = JSON.parse(localStorage.getItem("products"));

if (!products) {

    let res = await axios.get("https://dummyjson.com/products");

    products = res.data.products;

    localStorage.setItem("products", JSON.stringify(products));
}

        localStorage.setItem("products", JSON.stringify(products));

        let container = document.getElementById("products");

        products.forEach(product => {

            let card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
            <button class="delete-btn" onclick="deleteProduct(${product.id})">❌</button>
                <img src="${product.thumbnail}" alt="${product.title}">

                <h2>${product.title}</h2>

                <p>${product.description}</p>

                <p><b>Price:</b> $${product.price}</p>

                <p><b>Rating:</b>  ${product.rating}</p>

                <p><b>Category:</b> ${product.category}</p>

                <button>Buy Now</button>
            `;

            container.appendChild(card);
        });

    } 
    catch (err) 
    {
        console.log(err);
    }
}


function deleteProduct(id) {

    let products = JSON.parse(localStorage.getItem("products"));

    products = products.filter(product => product.id !== id);

    localStorage.setItem("products", JSON.stringify(products));

    location.reload();
}


fun();