// Fetch and display product data using async/await
async function loadProducts() {
    try {
        // Fetch products from Fake Store API
        const response = await fetch("https://fakestoreapi.com/products");
        
        // If API fails
        if (!response.ok) throw new Error("API request failed");

        const products = await response.json();

        // Log each product's details
        products.forEach(product => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("--------------------------");

            // OPTIONAL: Create product cards in HTML
            createProductCard(product);
        });

    } catch (error) {
        console.log("Failed to load products. Please try again.");
    }
}

// Optional: Create product cards on webpage
function createProductCard(product) {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.margin = "10px";
    card.style.width = "200px";

    const title = document.createElement("h3");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.textContent = "$" + product.price;

    const img = document.createElement("img");
    img.src = product.image;
    img.width = 150;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);

    document.body.appendChild(card);
}

loadProducts();
