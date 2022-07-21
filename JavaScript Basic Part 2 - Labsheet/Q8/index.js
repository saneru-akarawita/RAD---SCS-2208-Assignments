function myFunction() {
var number = parseInt(document.getElementById("number").value);
console.log(number);
var percentage = number*20/100;
console.log(percentage);
var tot = number+percentage;
console.log(tot);

document.getElementById("ovalue").innerHTML=number;
document.getElementById("pvalue").innerHTML=percentage;
document.getElementById("pvalue2").innerHTML=percentage;
document.getElementById("totvalue").innerHTML=tot;

 }

