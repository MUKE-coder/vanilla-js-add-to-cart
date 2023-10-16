const cartCount = document.querySelector("#cartCount");
const storedCartItems = JSON.parse(localStorage.getItem("cart"));

let cart = storedCartItems ? storedCartItems : [];

cartCount.textContent = cart.length;
function displayCartItems(cartItems) {
  //select the cart item container
  const cartItemsContainer = document.querySelector(".cart-items");
  cartItemsContainer.innerHTML = "";
  cartItems.forEach((cartItem) => {
    const itemTemplate = `
    <div class="cart-item">
    <div class="left">
      <img
        src=${cartItem.image}
        alt=""
      />
      <p class="product-name">
      ${cartItem.title}
      </p>
    </div>
    <button data-id=${cartItem.id} class="delete-btn">Delete</button>
    <div class="right">
      <p class="price">$${cartItem.price}</p>
    </div>
  </div>
    
    `;
    cartItemsContainer.insertAdjacentHTML("beforeend", itemTemplate);
  });
}

displayCartItems(cart);

// select all the delete btns
const deleteBtns = document.querySelectorAll(".delete-btn");

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const productId = event.target.dataset.id;
    //Find the Index of the cart item in the array
    const productIndex = cart.findIndex((cartItem) => cartItem.id == productId);

    //Remove the item from the array
    cart.splice(productIndex, 1);
    //update the localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    //Upddate the Ui
    displayCartItems(cart);
    cartCount.textContent = cart.length;
    showNotification("Product Deleted");
    console.log(cart);
  });
});
function showNotification(message) {
  const note = document.querySelector(".note");
  note.textContent = message;
  note.style.left = "10px";
  setTimeout(() => {
    note.style.left = "-300px";
  }, 3000);
}
