document
  .querySelector("#add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mainBalance = document.querySelector(".main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    const addAmount = document.querySelector("#add-amount").value;
    const convertedAddAmount = parseFloat(addAmount);
    const accountNumber = document.querySelector("#account-number").value;
    const pinNumber = document.querySelector("#pin-number").value;

    if (accountNumber.length === 11) {
      if (addAmount) {
        if (pinNumber === "ashutosh") {
          const totalAmount = convertedMainBalance + convertedAddAmount;
          
        } else {
          alert("please Enter your password & try again letter!");
        }
      } else {
        alert("please add your amount");
      }
    } else {
      alert("please check your account number & try again letter!");
    }
  });
