function login() {
  window.location.href = "dashboard.html";
}

function register() {
  window.location.href = "dashboard.html";
}

function login() {
  const email = document.getElementById("nazgol76@gmail.com").value;
  const password = document.getElementById("123456").value;

  if (email && password) {
    window.location.href = "dashboard.html";
  } else {
    alert("nazgol76@gmail.com 123456");
  }
}
