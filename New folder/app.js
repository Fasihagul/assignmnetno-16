// HOME CHAPTER
// chapter 15
// empty array
var arr=[];

//arry with 1 string
var array = ["helloworld"];
console.log(array);

// array index print
var alphabet=["h","i","j","k"];
alert(alphabet[2]);

// length of array
var alphabets=["h","i","j","k","l","m","n","o"];
console.log(alphabets.length);

// add a second element through index
var arrs=[true];
arrs[1]="xyz"
alert(arrs[1]);

//chapter 16 (||)
// using push
var arra=["abc"] ;
arra.push("ijk");
alert(arra[1]);

// using pop
var alpha=["h","i","j","k"];
alpha.pop();
console.log(alpha);

// adiing element in the end
var alphas=["h","i","j","k"]; 
alphas.push("l");
console.log(alphas);

//chapter 16 (|||)
// using shift
var size=["S","M","XL","XXL","XXXL"];
size.shift();
console.log(size);
//
var sizes=["S","M","XL","XXL","XXXL"];
sizes.splice(0,0,"xxxs","xxs","xs");
console.log(sizes);
// 
var fruit=["mango"];
fruit.unshift("apple");
alert(fruit[0]);
// 
var siz=["S","M","XL","XXL","XXXL"];
siz.splice(2,0,"L");
console.log(siz);
// 
var si=["S","M","XL","XXL","XXXL"];
var regsize=si.slice(0,3);
console.log(regsize);
// 
var pet=["dog","cat","ox","duck","frog"];
pet.splice(1,3,"cow","fox");
console.log(pet);
//  
var pets=["dog","cat","ox","duck","frog"];
pets.splice(1,2);
console.log(pets);

// 
var repet=["dog","cat","ox","duck","frog","flea"];
var repets=repet.slice(3,5);
console.log(repets);

