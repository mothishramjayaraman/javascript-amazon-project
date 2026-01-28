export let cart = [];

export function addToCart(productId) {
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      productId,
      quantity: 1,
    });
  }
}


export function CartQuantity(){

    let CartQuantity = 0;

    cart.forEach((item) => {
      CartQuantity += item.quantity;
    });

    document.querySelector(".cart-quantity").innerHTML = CartQuantity;
}