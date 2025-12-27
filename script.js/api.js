const apiList = document.getElementById("api-products");
const loadApiBtn = document.getElementById("load-api");

loadApiBtn.addEventListener("click", async () => {
  apiList.innerHTML = "Carregando...";
  
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  apiList.innerHTML = "";

  data.slice(0, 5).forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.title} - $${product.price}`;
    apiList.appendChild(li);
  });
});
