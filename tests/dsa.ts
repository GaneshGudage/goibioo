
var trees:number= 1;
console.log(trees);

var tree2:string = "raj"

console.log(tree2+trees);

var cla:number[]=[1,2,3,7,4,8,3]
const lowt:number=Math.min(...cla);
console.log(lowt);
console.log(cla);

let rows = 6;

for (let i = 1; i <= rows; i++) {
  let spaces = " ".repeat(rows - i);
  let stars = "*".repeat(2 * i + 1);
  console.log(spaces + stars);
}

let max = 5 

for (let i=1; i<=max; i++){
    let trakers = " ".repeat(max-i);
    let hash = "#".repeat(2*i+1);
    console.log(trakers + hash);
}