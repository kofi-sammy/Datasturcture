// class HashTable  {
//     constructor(){
//          this.table = new Array(127); // A table of bucket to store my Keys and Values
//         this.size = 0;
//     }
   
//     // Transforming the key value into an Index
//     _hash(key){  
//         let hash = 0; 
//         for(let i= 0; i < key.length; i++){ // Looping through the key 
//             hash += key.charCodeAt(i) // summing the ASCII code of the key into characters
//             }

//         return hash % this.table.length; // return a number that does not exceed the bucket size
//     }

//     set(key,value){
//         let index = this._hash(key)
//         this.table[index] = [key, value];
//         this.size++;
//     }

//     get(key) {
//         let index = this._hash(key)
//         return this.table[index]
//     }
   
//     remove(key){
//         const index = this._hash(key)
//  if(this.table[index] && this.table[index].length){
//             this.table[index] =[]
//             this.size --;
//             return true
//         }else{
//             return false
//         }
//     }
// }

// const ht = new HashTable();
// ht.set("Canada", 300);
// ht.set("France", 100);
// ht.set("Spain", 110);

// console.log(ht.get("Canada"));

// The first Recursive number
const firstRecurring = (input) => {
    for (let i = 0; i < input.length; i++){
        for(let j = i + 1; j < input.length; j++){
            if (input[i] === input[j]){
                return input[i]
            }
        }
    }
    return undefined;
      
}

console.log(firstRecurring([2,3,4,2,4,1]))

// 
  const SecondRecurring = (input) => {
    let map={}
    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i]
        }else{
            map[input[i]] = i  
        }
    }

    return undefined;
  }