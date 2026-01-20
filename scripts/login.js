document.querySelector("#loginBtn").addEventListener("click", function () {
  const inputNumber = document.querySelector(".inputNumber").value;
  const inputPassword = document.querySelector(".inputPassword").value;

  if (inputNumber.length === 11) {
    if (inputPassword === "ashutosh") {
      window.location.href = "./main.html";
    } else {
      alert("check your password and try again!");
    }
  } else {
    alert("check you number and try again!");
  }
});
