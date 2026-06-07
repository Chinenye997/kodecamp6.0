// ======================================================
// QUESTION 1
// Fetch GitHub user details using async/await and fetch
// ======================================================

// Create an async function that accepts a GitHub username
async function getGitHubUser(username) {

    try {

        // Send request to GitHub API
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        // Check if user exists
        if (!response.ok) {

            // Throw an error if user is not found
            throw new Error("GitHub user not found");
        }

        // Convert response to JSON
        const userData = await response.json();

        // Return the user details
        return userData;

    } catch (error) {

        // Print error message if something goes wrong
        console.error(error.message);
    }
}

// Call the function and display the result
getGitHubUser("Chinenye997")
    .then((data) => {

        console.log(data);

    });




    // ==================================================
// QUESTION 2
// Create a KCStore class with CRUD operations
// ======================================================

class KCStore {

    constructor() {

        this.products = [];
    }

    // ================================
    // Method to add a new product
    // ================================
    addProduct(product) {

        this.products.push(product);

        console.log("Product added successfully");
    }

    // ==============================
    // Method to view all products
    // ==============================
    viewProducts() {

        return this.products;
    }

    // ===============================
    // Method to update a product
    // ================================
    updateProduct(id, updatedProduct) {

        for (let i = 0; i < this.products.length; i++) {

            if (this.products[i].id === id) {

                this.products[i] = {
                    ...this.products[i],
                    ...updatedProduct
                };

                console.log("Product updated successfully");

                return;
            }
        }

        console.log("Product not found");
    }

    // =================================
    // Method to delete a product
    // =================================
    deleteProduct(id) {

        for (let i = 0; i < this.products.length; i++) {

            if (this.products[i].id === id) {

                this.products.splice(i, 1);

                console.log("Product deleted successfully");

                return;
            }
        }

        console.log("Product not found");
    }
}

// ======================
// Example Usage
// =====================

const store = new KCStore();

store.addProduct({
    id: 1,
    name: "Laptop",
    price: 500000
});

store.addProduct({
    id: 2,
    name: "Phone",
    price: 250000
});

console.log(store.viewProducts());

store.updateProduct(1, {
    price: 550000
});

console.log(store.viewProducts());

store.deleteProduct(2);

console.log(store.viewProducts());