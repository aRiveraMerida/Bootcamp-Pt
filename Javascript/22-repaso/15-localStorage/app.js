const container = document.querySelector("#app");
const loginInput = document.querySelector("#username");
const loginBtn = document.querySelector("#login");
const logout = document.querySelector("#logout");

const setUser = (username) => {
  sessionStorage.setItem("user", username);
  container.innerHTML = `<h2>Welcome ${username}</h2>`;
};

loginBtn.addEventListener("click", () => setUser(loginInput.value));

logout.addEventListener("click", () => {
  sessionStorage.clear();
  container.innerHTML = `<h2>No hay usuario</h2>`;
});

if (sessionStorage.getItem("user")) {
  container.innerHTML = `<h2>Welcome ${sessionStorage.user}</h2>`;
} else {
  container.innerHTML = `<h2>No hay usuario</h2>`;
}
