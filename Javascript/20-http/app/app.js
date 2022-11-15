const getBtn = document.querySelector("#getProducts");
const postBtn = document.querySelector("#postProducts");
const putBtn = document.querySelector("#putProducts");
const deleteBtn = document.querySelector("#deleteProducts");
const nameInput = document.querySelector("#nameInput");
const priceInput = document.querySelector("#priceInput");
const deleteInput = document.querySelector("#deleteInput");
const productsContainer = document.querySelector("#products-container");

const getProducts = async () => {
  productsContainer.innerHTML = "";
  const data = await fetch("http://localhost:8080/products");
  const products = await data.json();
  for (const product of products) {
    const li = document.createElement("li");
    li.innerHTML = `
        <h3>${product.name} - #${product.id}</h3>
        <h4>${product.price}€</h4>
        `;
    productsContainer.appendChild(li);
  }
};

const postProduct = async (newName, newPrice) => {
  fetch("http://localhost:8080/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newName,
      price: newPrice,
    }),
  })
    .then((res) => res.json())
    .then(() => console.log("Producto enviado"));
};

const deleteProduct = async (id) => {
  fetch(`http://localhost:8080/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => console.log("Producto borrado"));
};

const putProduct = async (id, newName, newPrice) => {
  fetch(`http://localhost:8080/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newName,
      price: newPrice,
    }),
  })
    .then((res) => res.json())
    .then(() => console.log("Producto editado"));
};

getBtn.addEventListener("click", () => getProducts());
postBtn.addEventListener("click", () =>
  postProduct(nameInput.value, priceInput.value)
);
deleteBtn.addEventListener("click", () => deleteProduct(deleteInput.value));
putBtn.addEventListener("click", () =>
  putProduct(deleteInput.value, nameInput.value, priceInput.value)
);
