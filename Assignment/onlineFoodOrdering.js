const menu = {
    pizza: 200,
    burger: 120,
    pasta: 150,
    fries: 80,
    coke: 40
};

function calculateBill(orderItems) {
    const prices = orderItems.map(item => {
        if (!menu[item]) throw new Error(`Invalid item ordered: ${item}`);
        return menu[item];
    });

    return prices.reduce((sum, price) => sum + price, 0);
}

try {
    const order = ["pizza", "coke", "fries"];
    const total = calculateBill(order);
    console.log("Total Bill:", total);
} catch (err) {
    console.log("Error:", err.message);
}

try {
    const order2 = ["pizza", "icecream"];
    const total2 = calculateBill(order2);
    console.log("Total Bill:", total2);
} catch (err) {
    console.log("Error:", err.message);
}
