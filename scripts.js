function validateForm() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var dob = document.getElementById("dob").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var country = document.getElementById("country").value;
  var terms = document.getElementById("terms").checked;

  if (
    fname === "" ||
    lname === "" ||
    email === "" ||
    password === "" ||
    dob === "" ||
    !gender ||
    country === "" ||
    !terms
  ) {
    alert("Harap isi semua bidang yang diperlukan.");
    return false;
  }

  return true;
}
