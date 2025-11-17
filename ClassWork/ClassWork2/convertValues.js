let values = ["50", "hello", false, null, "100px"];

values.forEach((val) => {
    console.log("Original:", val);

    console.log("Number():", Number(val));     // converts to number
    console.log("Boolean():", Boolean(val));   // converts to boolean
    console.log("String():", String(val));     // converts to string

    console.log("--------------");
});
