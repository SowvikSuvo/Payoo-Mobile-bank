const validPin = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("add clicked");
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("add-pin").value);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11) {
      alert("please provide valid account number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("please provide valid pin number");
      return;
    }

    const totalNewAvailableBalance = addAmount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });
