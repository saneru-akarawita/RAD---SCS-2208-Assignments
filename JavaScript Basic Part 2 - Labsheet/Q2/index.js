var current = new Date();
console.log(current.toLocaleTimeString())
document.getElementById("temp").innerHTML="Now the time is "+current.toLocaleTimeString();

var remhour = 24 - current.getHours()-1;
var remmin  = 60 - current.getMinutes();
console.log(remhour +":"+remmin)

document.getElementById("buttemp").value="Remains "+remhour +" hours and "+remmin +" more...";