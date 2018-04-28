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

bench("HrabiSort_K1", data, algo.hrabiSortK1, false);
bench("HrabiSort_K2", data, algo.hrabiSortK2, false);
bench("HrabiSort_K3", data, algo.hrabiSortK3, false);
bench("QuickSortRecursive", data, algo.quickSortRecursive, false);
bench("QuickSortIterative", data, algo.quickSortIterative, false);
bench("JavaScriptSort", data, algo.jsSort, false);
bench("InsertSort", data, algo.insertSort, false);
