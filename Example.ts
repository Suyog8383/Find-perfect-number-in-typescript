//find the perfect number or not
let num:number=13;
const findPerfect=(num:number):string=>{
 let sum:number =0;
 for(let i:number=1;i<num;i++){
   if(num%i===0){
     sum = sum + i;
   }
 }
 if(sum === num){
   return 'perfect numbet'
 }else{
   return 'not perfect numbet'
 }
 }
findPerfect(num)
