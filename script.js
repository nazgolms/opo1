function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Enter email and password");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

function showSection(id) {
  const sections = document.querySelectorAll(".section");

  sections.forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}
