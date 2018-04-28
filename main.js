const algo = require("./algo.js");
const data = require('./data.json');

function bench(name, data, sortFunction, printResult){
    console.log("Sorting with: " + name);
    const cloned_data = data.slice(0);
    const start = new Date().getTime();
    const result = sortFunction(cloned_data);
    const end = new Date().getTime();
    console.log("Runtime: " + (end - start) + " ms");
    if (printResult)
        console.log(result);
}

bench("HrabiSort_V1", data, algo.hrabiSort1, false);
bench("HrabiSort_V2", data, algo.hrabiSort2, false);
bench("HrabiSort_V3", data, algo.hrabiSort3, false);
bench("QuickSort", data, algo.quickSort, false);
//bench("InsertSort", data, algo.insertSort, false);
