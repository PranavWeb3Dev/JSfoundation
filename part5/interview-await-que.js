// Which option should we choose form the below codes where we are using await .

let items = ["Phone", "Bike", "Wacth", "Laptop"];

//1st option

for (const item of items) {
    await process(item); // Gives Error as we have not defined the async here
}

// 2nd option

// items.forEach((item) => {
//     await process(item);
// })

/*
Second option is not working on given a error like `"'await' expressions are only allowed within async functions and at the top levels of modules."` so the forEach method is loop but it's method and it's not support the "await and async" if we right there async still it not work correctly as interanlly the asynch callback stop the process but the forEach does not wait for that and excute next process so that's why we can't use the await and asynch as such on the forEach.
*/