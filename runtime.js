const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

//this is how I made the table for the runtimeAnalysis.txt
function Runtime(insert, append) {
    this.insert = insert;
    this.append = append;
  }
  const typeOfArr = {};
  
  typeOfArr.extraLargeArray = new Runtime('2.027627474 s', '5.269652 ms')
  typeOfArr.largeArray = new Runtime('14.93929 ms', '823.274 μs')
  typeOfArr.mediumArray = new Runtime('271.203 μs', '317.321 μs')
  typeOfArr.smallArray = new Runtime('73.861 μs', '566.21 μs')
  typeOfArr.tinyArray = new Runtime('61.57 μs', '146.504 μs')
  
  console.table(typeOfArr)