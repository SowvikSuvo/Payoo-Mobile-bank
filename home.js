const validPin = 1234;
const transactionData = [];

// function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to toggle button
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
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

    if (addAmount <= 0) {
      alert("invalid amount");
      return;
    }

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

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
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

  if (amount <= 0 || amount > availableBalance) {
    alert("Invalid amount");
    return;
  }
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
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  console.log(transactionData);
});
// transaction
document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText = "";

    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = ` 
       <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3"
          >
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-[#f4f5f7]">
                <img class="mx-auto" src="./assets/wallet1.png" alt="" />
              </div>
              <div class="ml-3">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
          `;

      transactionContainer.appendChild(div);
    }
  });

//   toggling feature
// add money
document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");
  handleButtonToggle("add-button");
});

// cashout
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
    handleButtonToggle("cash-out-button");
  });

// transfer money
document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
    handleButtonToggle("transfer-button");
  });

// get bonus
document.getElementById("bonus-button").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
  handleButtonToggle("bonus-button");
});

// pay bill
document
  .getElementById("pay-bill-button")
  .addEventListener("click", function () {
    handleToggle("get-bonus-parent");
    handleButtonToggle("pay-bill-button");
  });

// Transition history
document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    handleToggle("transactions-parent");
    handleButtonToggle("transaction-button");
  });
