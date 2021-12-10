//const nemo = ['nemo']
//const large = new Array(100).fill('nemo')

//function findNemo (array) {
   // for(let i = 0; i<array.length; i++){
     //   if(array[i] === 'nemo'){
          //  console.log('found Nemo')
       // }
  //  }
  
 // }
//

//findNemo(large);


// const boxes = [0,1,2,3,4,5];
// const logFirstBox = () =>{
//     console.log(boxes[0])
//     console.log(boxes[1])
// }

// logFirstBox()

// const boxes=['a', 'b', 'c', 'd', 'e'];

// function logPairOfArray(array){
//     for(let i = 0; i< array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             console.log(array[i] , array[j])
//         }
//     }
// }

// logPairOfArray(boxes)


// const array1 = ['a', 'b', 'g', 'h']
// const array2 = ['b', 't', 'j']


// function checkCommonElement (arr1, arr2) {
//     for(let i=0 ; i < arr1.length; i++) {
//         for ( let j=0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j] ){
//                 return true
//              }
//         }   
//     }

//     return false
// }


// checkCommonElement(array1, array2)

const arrayA = ['a', 'b', 'g', 'h']
const arrayB = ['b', 't', 'j']


const checkArray = (arrA, arrB) =>{
    for(let i=0; i < arrA.length; i++){
        for(let j=0; j < arrB.length; j++){
            if (arrA[i] === arrB[j]){
                return true
            }
        }
    }
    return false;
}


checkArray(arrayA, arrayB)