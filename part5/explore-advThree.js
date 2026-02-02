// Promises

function fetchData() {
    return new Promise((resolve, reject) => {
        let data = true;
        setTimeout(() => {
            if (!data) {
                resolve("Data Fetched Successfully...");
            } else {
                reject("Data Fecthing Failed!!!");
            }
        }, 4000);
    });
}

let getData = fetchData();

getData.then((data) => {
    console.log(data);
})
    .catch((error) => {
        throw new Error(error);
})