
const addToZero = (arr) => {
    arr = arr.sort((a,b)=> a-b)
  let left = 0;
  let right = arr.length-1;
    if(arr.length < 2) return false;
  for (let i = 0; i<arr.length; i++){
    let sum = arr[left]+arr[right]
    if (sum === 0 && left < right) {
      return true
    } else if (sum < 0){
      left++
    } 
    else if (sum > 0){
      right--
    }  
  }
     return false;
  }
  console.log(addToZero([]))
  console.log(addToZero([1]))
  console.log(addToZero([1, 2, 3]))
  console.log(addToZero([1, 2, 3, -2]))
//Time Complexity: nLog(n) 
//Space Complexity: O(1)

const hasUniqueChars = (word) => {
    let obj = {}
    for(let char of word) {
      if(obj.hasOwnProperty(char)){
        obj[char] += 1
      } else {
        obj[char] = 1
      }
    }
    return Object.values(obj).every((el)=>el===1)
  }
  console.log(hasUniqueChars('Monday'))
  console.log(hasUniqueChars('Moonday'))
  //Time Complexity: O(n) 
  //Space Complexity: O(n)

  const isPangram=(str)=>{
    str = str.split(' ').join('')
    let obj = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0,
    }
  
    for(let i=0; i<str.length; i++){
      obj.hasOwnProperty(str[i]) ? obj[str[i]] += 1 : obj[str[i]] = 1
    }
    return Object.values(obj).every((el)=>el>=1)
  }
  console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
  console.log(isPangram("I like cats, but not mice"))
  //Time Complexity: O(n) 
  //Space Complexity: O(n)

  const findLongestWord = (arr) => {
    let longest = 0
  for(let word of arr){
    if(longest < word.length) {
      longest = word.length
    } 
  }
    return longest
  }
  console.log(findLongestWord(["hi", "hello", "holidays"]))
  console.log(findLongestWord(["merry", "christmas"]))
  //Time Complexity: O(n)
  //Space Complexity: O(n)