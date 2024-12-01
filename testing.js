const string = "PascalCaseString";


// snake_case_string

function test(str){
  let result = ""
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      result[i] += "_" + str[i].toLowerCase();
    }else{
      result[i] += str[i]
    }
  }
  return result
}

console.log(test("SnakeCase"));

// const inp = "apple,banana,24,cherry,,fig";

// const result = []
// let value = ""
// for(let i=0; i < inp.length; i++){
//   if(inp[i] !== ","){
//     value +=inp[i]
    
//   }else{
//     console.log(value)
//     if(value){
//       result.push(value);
//       value = ""
//     }
//   }
// }

// console.log(result)

// let array = [
//   [1,2,3],
//   [3,4,5],
//   [6,7,8],
//   [1, 1, 1, 1]
// ]


// for(let i=0; i< array.length; i++){
//   for(let j=i+1; j< array.length; j++){
//     console.log(array[i])
//     if(array[i].length !== array[j].length){
//       console.log(false);
//     }
//   }

//   console.log(true);
// }