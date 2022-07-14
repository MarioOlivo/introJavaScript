const array1 = [12,46, 32, 64];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
let media = sumWithInitial/array1.length
console.log(sumWithInitial);
console.log(media);
let median=mediana(array1)
console.log(median);


function mediana(arr) {
    arr.sort((a,b) => a-b);
    const l=arr.length;
    return l%2==0
        ? arr.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
        : arr.slice((l/2), l/2+1)[0];
}