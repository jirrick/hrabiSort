const algo = require("./algo.js");
//const data = require('./data.json');
const data = [3,5,6,9,7,8,2,10,2,11,1,15];

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

bench("HrabiSort_K1", data, algo.hrabiSortK1, true);
bench("HrabiSort_K2", data, algo.hrabiSortK2, true);
bench("HrabiSort_K3", data, algo.hrabiSortK3, true);
bench("QuickSort", data, algo.quickSort, false);
bench("InsertSort", data, algo.insertSort, false);
