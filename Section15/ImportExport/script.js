import ShoppingCart from './shopping-cart.js';

const shoppingCart = new ShoppingCart();
shoppingCart.addToCart('shirt', 2);

const getLastPost = async function () {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await result.json();
  console.log(data);
  return { title: data.at(-1).title, postText: data.at(-1).body };
};

const lastPostData = await getLastPost();
console.log(lastPostData);
