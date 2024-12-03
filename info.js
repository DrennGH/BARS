const form = document.querySelector('form[action="items.html"]');

// Add an event listener to the form
form.addEventListener("submit", (e) => {
  // Get the input fields
  const studentId = document.getElementById("ID");
  const lastName = document.getElementById("lastname");
  const firstName = document.getElementById("firstname");
  const email = document.getElementById("email");

  // Check if the student ID is valid
  if (studentId.value.length !== 9 || isNaN(studentId.value)) {
    alert("Student ID must be 9 numbers");
    e.preventDefault();
  }

  // Check if the first and last name are not empty
  if (lastName.value.trim() === "" || firstName.value.trim() === "") {
    alert("First and/or Last Name cannot be empty!");
    e.preventDefault();
  }

  // Check if the email is valid
  if (!email.value.endsWith("@dlsud.edu.ph")) {
    alert("Email must be a valid DLSU-D email");
    e.preventDefault();
  }
});
