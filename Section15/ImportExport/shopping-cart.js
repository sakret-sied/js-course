export default class ShippingCart {
  #totalPrice = 0;
  #totalQuantity = 0;
  #shippingCost = 20;
  #cart = [];

  addToCart(product, quantity) {
    this.#cart.push({ product, quantity });
    this.#totalQuantity += quantity;
    this.#totalPrice += this.#shippingCost * quantity;
    console.log(`${product} в количестве ${quantity} добавлено в корзину`);
  }
}
