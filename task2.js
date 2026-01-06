document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Name and Email are required!");
  } else {
    alert("Form submitted successfully!");
    this.reset();
  }
});
