const algo = {
    hrabiSortK1: function(arr){
        // Varianta K1: n/2, n/4, ...
        let k = [];
        let a = 2;
        while (true){
            const x = Math.floor(arr.length/a);
            if (x >= 1){
                k.push(x);
                a = a * 2;
            } else 
                break;
        }
        return algo.hrabiSort(arr, k)
    },   
    
    hrabiSortK2: function(arr){
        // Varianta K2: (3^a - 1) / 2, a je prirozene
        let k = [];
        let a = 1;
        while (true){
            const x = (Math.pow(3, a) - 1) / 2;
            if (x <= Math.ceil(arr.length / 3)){
                k.push(x);
                a++;
            } else 
                break;
        }
        return algo.hrabiSort(arr, k.reverse())
    }, 

    hrabiSortK3: function(arr){
        // Varianta K3: (2^r)*(3^s), r a s jsou nezaporna cela cisla
        let k = [];
        //kdyz s=0, tak x=2^r, nejvetsi r je tedy druha odmocnina
        const rMax = Math.floor(Math.log2(arr.length)); 
        //kdyz r=0, tak x=3^s, nejvetsi s je tedy treti odmocnina
        const sMax = Math.floor(Math.log10(arr.length) / Math.log10(3));
        for(r = 0; r <= rMax ; r++)
        {
            for(s = 0; s <= sMax ; s++)
            {
                const x = Math.pow(2, r) * Math.pow(3, s)
                if (x <= arr.length)
                    k.push(x);
            }
        }
        k = k.sort(function(a, b){return b-a})
        return algo.hrabiSort(arr, k)
    }, 
    
    hrabiSort: function(arr, kArr){
        for (kk = 0; kk < kArr.length; kk++){
            const k = kArr[kk];
            for (i = k + 1; i <= arr.length; i++){
                let j = 0;
                while (true){
                    const l = i - j*k;
                    if (l < k) //neni s cim porovnavat
                        break;                    
                    if (arr[l-k] > arr[l]) {
                        const aux = arr[l];
                        arr[l] = arr[l - k];
                        arr[l - k] = aux;
                    } else 
                        break;
                    j++;
                }
            }
        }
        return arr;
    },

    insertSort: function(arr){
        let i = 1
        while (i < arr.length){
            let x = arr[i];
            let j = i;
            while ((j > 0) && (arr[j - 1] > x)){
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = x;
            i++;
        }
        return arr
    },

    quickSlow: function(arr){
        //tohle jsem vzal z netu a je to strasne pomaly
        //rekurze jede az do konce (prilis velky overhead)
        //spatna volba pivotu (prvni prvek je spatny, pokud je temer setrideno)

        if(arr.length === 0){
          return [];
        }
        
        var leftArr = [];
        var rightArr = [];
        var pivot = arr[0];
        
        for(var i = 1; i < arr.length; i++){
            if(arr[i] < pivot){
                leftArr.push(arr[i]);
            } else {
                rightArr.push(arr[i]);  
            }
        }

        return algo.quickSlow(leftArr).concat(pivot, algo.quickSlow(rightArr)); 
    },

    quickSort: function(arr){
        //tohle jsem prepsal a funguje to lip :)
        //rekurze konci na 32 prvcich, pak se pouzije insertSort
        //pivot se voli intelignetne

        if(arr.length < 32){
          return algo.insertSort(arr);
        }
        
        let leftArr = [];
        let rightArr = [];
        let pivot = 0;

        //vybrat pivot (median prvniho, prostredniho a posledniho prvku)
        const a = arr[0];
        const b = arr[arr.length - 1];
        const c = arr[Math.floor(arr.length/2)];

        if((a-b) * (b-c) > 0) 
            pivot = b;
        else if((a-b) * (a-c) > 0)
            pivot = c;
        else pivot = a;
        
        for(var i = 1; i < arr.length; i++){
            if(arr[i] < pivot){
                leftArr.push(arr[i]);
            } else {
                rightArr.push(arr[i]);  
            }
        }

        return algo.quickSort(leftArr).concat(pivot, algo.quickSort(rightArr)); 
    }
}

module.exports = algo;