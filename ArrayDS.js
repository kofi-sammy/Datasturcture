// const Alph = ['a','b','c','d']
// const Add = ['q', 'g', 'v']
// const Total = Alph

// console.log(Total)


// class Player {
//     constructor(name, jerseyNumber, Team){
//         this.name = name;
//         this.jerseyNumber = jerseyNumber;
//         this.Team = Team
//     }

//     playerInformation(){
//         console.log(`Hello, I am ${this.name}, I have a jersey Number ${this.jerseyNumber} and I play ${this.Team} `)
//     }
// }

// const Player1 = new Player('samuel', 20, 'PSG') 
// const Info = Player1.playerInformation();

// console.log(Info)


// class MyArray {
//     constructor() {
//         this.length = 0;
//         this.data ={}
//     }

//     get(index){
//        return this.data[index]
//      }

//     push(item){
//         this.data[this.length] = item;
//         this.length++;
//         return this.length;

//     }

  // pop(){
  //      const lastItem = this.data[this.length -1];
  //       delete this.data[this.length-1]
  //       this.length--;
  //       return lastItem;
  //   }
    
// }

// const NewArray = new MyArray()
// NewArray.push('hi')
// NewArray.push('boy')
// NewArray.push('hello')
// console.log(NewArray)


// function reverse(str){
//  return str.split('').reverse().join('')

//   }

// const home = reverse('Hello my name is James')
// console.log(home)


const mergeSortedArray = (arr1, arr2) =>{
  const arrayAddition = arr1.concat(arr2)
  return arrayAddition.sort(function(a, b){
      return a-b
  })
}

const array1 = 'hmm'
const array2 = [4,6,30]

const output = mergeSortedArray(array1,array2)
console.log(output)

// const array4 = [0,3,4,31]
// const At = array4.entries()
// console.log(At.next().value)