const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Phone", category: "Electronics", price: 20000, stock: 12 },
    { id: 3, name: "Shirt", category: "Fashion", price: 800, stock: 3 },
    { id: 4, name: "Shoes", category: "Fashion", price: 1500, stock: 8 },
    { id: 5, name: "Mixer", category: "Home", price: 3000, stock: 2 },
    { id: 6, name: "Table", category: "Home", price: 4000, stock: 10 }
];

function getLowStockProducts(list) {
    return list.filter(p => p.stock < 5);
}

function sortProductsByPrice(list) {
    return [...list].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(list) {
    return list.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory(list) {
    return list.reduce((group, p) => {
        if (!group[p.category]) group[p.category] = [];
        group[p.category].push(p);
        return group;
    }, {});
}

console.log("Low Stock:", getLowStockProducts(products));
console.log("Sorted by Price:", sortProductsByPrice(products));
console.log("Total Inventory Value:", calculateTotalInventoryValue(products));
console.log("Grouped by Category:", groupByCategory(products));
