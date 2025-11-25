function getDelay() {
    return Math.floor(Math.random() * 1000) + 1000;
}

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) return reject("Failed to boil water.");
            console.log("Water boiled.");
            resolve();
        }, getDelay());
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) return reject("Coffee brewing failed.");
            console.log("Coffee brewed.");
            resolve();
        }, getDelay());
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) return reject("Failed to pour coffee.");
            console.log("Coffee poured into the cup.");
            resolve();
        }, getDelay());
    });
}

boilWater()
    .then(brewCoffee)
    .then(pourCoffee)
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.log("Process failed:", error));
