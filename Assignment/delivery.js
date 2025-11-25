function randomDelay() {
    return Math.floor(Math.random() * 1000) + 1000;
}

function takeOrder() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.25;
        setTimeout(() => {
            if (fail) reject("takeOrder failed");
            else resolve("Step 1: Order taken");
        }, randomDelay());
    });
}

function prepare() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.25;
        setTimeout(() => {
            if (fail) reject("prepare failed");
            else resolve("Step 2: Food prepared");
        }, randomDelay());
    });
}

function pack() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.25;
        setTimeout(() => {
            if (fail) reject("pack failed");
            else resolve("Step 3: Package ready");
        }, randomDelay());
    });
}

function dispatch() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.25;
        setTimeout(() => {
            if (fail) reject("dispatch failed");
            else resolve("Step 4: Out for delivery");
        }, randomDelay());
    });
}

function deliver() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.25;
        setTimeout(() => {
            if (fail) reject("deliver failed");
            else resolve("Delivery completed!");
        }, randomDelay());
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        console.log(await takeOrder());
        console.log(await prepare());
        console.log(await pack());
        console.log(await dispatch());
        console.log(await deliver());
    } catch {
        console.log("Pipeline failed!");
    }
}

runPipeline();
