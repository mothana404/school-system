/** Q1 */
function giveback(array, number){
    return `in index number ${array.indexOf(number)}`;
};
console.log(giveback([1,2,3,7,5,8,9], 7));

/** Q2 */
function missingnumber(array){
    for (let i = 0; i < 100; i++){
        if (array[i] != (i + 1))
            return `the missing number (${(i+1)})`;
    }
    return -1;
};
let array = [];
for (let i = 0; i < 99; i++){
    array[i] = i + 1;
}
console.log(missingnumber(array));

/** Q3 */
function filtering(array){
    return new Set(array);
};
let ar = [1,2,3,4,4,5,5,7,7];
console.log(filtering(ar));

/** Q4 */
function average(array){
    let sum = 0;
    let numbers = 0;
    for (let i in array){
        sum += array[i];
        numbers += 1;
    }
    return `the average ${(sum/numbers)}`;
}
console.log(average([1,2,3,4,5,6,7,8,9,10]));

/** Q5 */
function powertwo(array){
    // for (let i in array){
    //     array[i] = Math.pow(array[i], 2);
    // };
    // return array;

    // let newarray = [];
    // array.forEach((element , index) => {
    //     newarray[index] = Math.pow(element, 2);
    // });
    // return newarray;

    let newarray = array.map((x) => Math.pow(x, 2));
    return newarray;
};
console.log(`with power 2 --> ${powertwo([1,2,3,4,5])}`);

/** Q6 */
function evenodd(array){
    let newarray = array.map((x) => {
        if (x % 2 == 0){
            return "even";
        }else if (x % 2 == 1){
            return "odd";
        }else {
            return "N/A";
        }
    });
    return newarray;
}
console.log(evenodd([1,2,3,4,"mothana"]));

/** Q7 */
function fizzbuzz(array){
    let newarray = array.map((x) => {
        if (x % 3 == 0 && x % 5 == 0){
            return "Fizz Buzz";
        }else if(x % 3 == 0){
            return "Fizz";
        }else if(x % 5 == 0){
            return "Buzz";
        }else {
            return x;
        }
    });
    return newarray;
};
console.log(fizzbuzz([15,2,3,4,5,6,7,8,9]));