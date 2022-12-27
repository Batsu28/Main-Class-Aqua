let root = document.querySelector("#root");

fetch("https://randomuser.me/api/")
  .then((data) => data.json())
  .then((data) => profile(data.results[0]));

function profile(user) {
  console.log(user);
  const html = `<div>
    <div><img src="${user.picture.large}"></div>
    <div>
    <p><spam>Name: </spam>${user.name.title}.${user.name.first} ${user.name.last}</p>
    <p><spam>date: </spam>${user.dob.date}</p>
    <p><spam>Username: </spam>${user.login.username}</p>
    <p><spam>Email: </spam>${user.email}</p>
    <p><spam>Password: </spam>${user.login.password}</p>
    <p><spam>Location: </spam>${user.location.street.number} ${user.location.street.name}</p>
    <p><spam>Phone number: </spam>${user.phone}</p>
    </div>
  </div>`;
  root.innerHTML = html;
}
