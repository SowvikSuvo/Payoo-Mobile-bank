const validPin = 1234;

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

document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });
