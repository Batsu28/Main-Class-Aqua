let root = document.querySelector("#root");
let table = document.createElement("div");
let balance_type = document.querySelector("#balance_type");
let dltBtn = document.querySelector("#dltBtn");

table.className = "table";
root.appendChild(table);

fetch("http://localhost:3333/api/users")
  .then((res) => res.json())
  .then((res) => {
    balanceTable(res);
  });

function balanceTable(users) {
  document.querySelector(".see_all").addEventListener("click", () => {
    table.innerHTML = "";
    let num = 1;
    users.map((user) => {
      let row = document.createElement("div");
      row.className = `row`;
      row.id = `${num}`;
      row.innerHTML = `
            <div class="cell num_cell">${num++}</div>
            <div class="cell">${user.balance_id}</div>
            <div class="cell">${user.name}</div>
            <div class="cell balance">${user.balance}</div>
            <div class="cell type">${user.balance_type}</div>
    `;
      table.appendChild(row);
      checkRow(users, row);
    });
  });
}

function checkRow(users, row) {
  row.addEventListener("click", () => {
    row.style.border = "2px solid green";
    let rowNUm = parseInt(row.id) - 1;
    yearlyPass(users, rowNUm);
  });
}

function yearlyPass(users, rowNUm) {
  document.querySelector("#check").addEventListener("click", () => {
    let count = 0;
    let balance = parseInt(users[rowNUm].balance);
    let input = document.querySelector("input").value;
    for (let i = 0; i < parseInt(input); i++) {
      if (users[rowNUm].balance_type) {
        count = balance + balance * 0.18;
        balance = Math.floor(count);
      } else {
        count = balance + balance * 0.01;
        balance = Math.floor(count);
      }
    }
    document.getElementsByClassName("balance")[rowNUm].innerHTML = `${balance}`;
  });
}

document.querySelector("#submit").addEventListener("click", () => {
  let userName = document.querySelector("#userName").value;
  let lastName = document.querySelector("#lastName").value;
  let balance_id = document.querySelector("#balance_id").value;
  let balance = document.querySelector("#balance").value;

  balance_type.addEventListener("change", balanceType);
  const newUser = {
    name: userName,
    surName: lastName,
    balance_id: balance_id,
    balance: balance,
    balance_type: balanceType(),
  };

  fetch("http://localhost:3333/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then(() => console.log("Success"))
    .catch(() => console.log("failed"));
});

function balanceType() {
  if (balance_type.value == 1) {
    console.log(1);
    return true;
  } else {
    console.log(0);
    return false;
  }
}

dltBtn.addEventListener("click", () => {
  fetch("http://localhost:3333/api/users", {
    method: "DELETE",
    body: JSON.stringify({
      id: "10",
    }),
  })
    .then((res) => res.json())
    .then(() => console.log("deleted"))
    .catch(() => console.log("error"));
});
