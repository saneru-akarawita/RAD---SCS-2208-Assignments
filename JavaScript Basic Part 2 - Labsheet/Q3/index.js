function bdayfunc() {
  var dob = new Date(document.getElementById("bday").value);
  console.log(dob);
  //calculate month difference from current date in time  
  var month_diff = Date.now() - dob.getTime();

  //convert the calculated difference in date format  
  var age_dt = new Date(month_diff);

  //extract year from date      
  var year = age_dt.getUTCFullYear();

  //now calculate the age of the user  
  var age = Math.abs(year - 1970);

  //display the calculated age  
  alert(`Age of the person: ${age} years`);
}
