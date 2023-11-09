import Module from '/node_modules/js-little-core/module.js';

export default class MapExample extends Module {
  execute() {
    const restaurant = new Map();
    restaurant.set('name', "McDonald's");
    restaurant.set(1, 'London, England');
    restaurant.set(2, 'Paris, France');
    console.log(restaurant.set(3, 'Kiev, Ukraine'));

    restaurant
      .set('categories', ['Japanese', 'Sushi', 'Vegetarian', 'Organic'])
      .set('open', 10)
      .set('close', 23)
      .set(true, `${restaurant.get('name')} is open`)
      .set(false, `${restaurant.get('name')} is close`);
    console.log(restaurant.get('name'));
    console.log(restaurant.get(true));
    console.log(restaurant.get(3));

    const currentTime = new Date().getHours();
    console.log(currentTime);
    console.log(
      restaurant.get(
        currentTime > restaurant.get('open') &&
          currentTime < restaurant.get('close'),
      ),
    );
    console.log(restaurant.has(false));
    console.log(restaurant.delete(2));
    console.log(restaurant.delete(5));
    const arr = [1, 2, 3];
    restaurant.set(arr, 'Hello!');
    console.log(restaurant.has(arr));
    console.log(restaurant);
    console.log(restaurant.size);
    restaurant.clear();
    console.log(restaurant);
  }
}
