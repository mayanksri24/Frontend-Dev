function loadProfile() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.3;
        setTimeout(() => {
            if (fail) reject("Profile Failed");
            else resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.3;
        setTimeout(() => {
            if (fail) reject("Posts Failed");
            else resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.3;
        setTimeout(() => {
            if (fail) reject("Messages Failed");
            else resolve("Messages Loaded");
        }, 1000);
    });
}

async function loadDashboard() {
    const start = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    results.forEach((result, index) => {
        const names = ["Profile", "Posts", "Messages"];

        if (result.status === "fulfilled") {
            console.log(names[index], "→", result.value);
        } else {
            console.log(names[index], "→", result.reason);
        }
    });

    const end = Date.now();
    console.log("Total Time Taken:", (end - start), "ms");
}

loadDashboard();
