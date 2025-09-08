const validPin = 1234;

// function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// add money feature
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

// cashout feature //
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = parseInt(document.getElementById("withdraw-amount").value);

  const agentNumber = document.getElementById("agent-number").value;
  const pinNumber = parseInt(document.getElementById("pin-number").value);
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (agentNumber.length < 11) {
    alert("please provide valid agent number");
    return;
  }
  if (pinNumber !== validPin) {
    alert("please provide valid pin number");
    return;
  }

  const totalNewAvailableBalance = availableBalance - amount;
  console.log(totalNewAvailableBalance);
  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
});

//   toggling feature
// add money
document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");
});

// cashout
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
  });

// transfer money
document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
  });

// get bonus
document.getElementById("bonus-button").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
});

// pay bill
document.getElementById("pay-bill-button").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
});

// Transition history 
document.getElementById("transaction-button").addEventListener("click", function () {
  handleToggle("transactions-parent");
});

