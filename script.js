// fetch and display
async function fetchAndDisplaySingleProduct() {
  const productId = new URLSearchParams(window.location.search).get("id");
  console.log(productId);
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const data = await response.json();
  console.log(data);
  displayProduct(data);
}
fetchAndDisplaySingleProduct();

function displayProduct(data) {
  const productDetail = document.querySelector("#product-detail");

  productDetail.innerHTML = `
  <div class="product-image">
        <img
          src=${data.image}
          alt=""
        />
      </div>
      <p class="product-name">${data.title}</p>
      <p class="product-des">
      ${data.description}
      </p>
      <div class="detail">
        <p>$${data.price}</p>
      </div>
  `;
}
