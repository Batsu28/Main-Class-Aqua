let root = document.querySelector("#root");
let table = document.createElement("div");

table.className = "table";
root.appendChild(table);

fetch("http://localhost:3333/api/users")
  .then((res) => res.json())
  .then((res) => balanceTable(res));

function balanceTable(users) {
  document.querySelector(".see_all").addEventListener("click", () => {
    table.innerHTML = "";
    let num = 1;
    console.log(users);
    users.map((user) => {
      table.innerHTML += `
        <div class="row">
            <div class="cell num_cell"><p>${num++}</p></div>
            <div class="cell"><p>${user.balance_id}</p></div>
            <div class="cell"><p>${user.name}</p></div>
            <div class="cell"><p style="filter: blur(12px)">${
              user.balance
            }</p></div>
        </div>
    `;
    });
  });
}
