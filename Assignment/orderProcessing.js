// API that randomly fails 50% of the time
function submitOrder() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.5;
        setTimeout(() => {
            if (fail) reject("Order failed");
            else resolve("Order submitted");
        }, 500);
    });
}

// Retry logic: try up to 3 times
async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            return;
        } catch (err) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }
    throw new Error("Order could not be processed");
}

// Final handling
(async () => {
    try {
        await processOrder();
    } catch (error) {
        console.log(error.message);
    }
})();
