function myFunction() {

  var subject = document.getElementById("subject").value;
  console.log(subject);
  var marks = document.getElementById("mark").value;
  console.log(marks);

  if (subject != '' && marks != '') {

    if (marks <= 35) {
      document.getElementById("msg").innerHTML = "Sorry... You have to work hard for " + subject + " subject";
    }

    else {
      document.getElementById("msg").innerHTML = "Congratsss...! You have passed the " + subject + " subject";
    }
  }

}