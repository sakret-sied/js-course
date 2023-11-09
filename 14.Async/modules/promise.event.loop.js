import Module from '/node_modules/js-little-core/module.js';

export default class PromiseEventLoop extends Module {
  execute() {
    const lotteryPromise = new Promise(function (resolve, reject) {
      console.log('Происходит крутка баннера:');
      setTimeout(function () {
        if (Math.random() >= 0.5) {
          resolve('Цзинлю');
        } else {
          reject(new Error('Яньцин'));
        }
      }, 1000);
    });

    lotteryPromise
      .then((res) => console.log(res))
      .catch((e) => console.error(e));

    const wait = function (seconds) {
      return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
      });
    };

    wait(1)
      .then(() => {
        console.log('Прошла 1 секунда');
        return wait(1);
      })
      .then(() => {
        console.log('Прошло 2 секунды');
        return wait(1);
      })
      .then(() => {
        console.log('Прошло 3 секунды');
        return wait(1);
      })
      .then(() => {
        console.log('Прошло 4 секунды');
      });

    Promise.resolve('Resolved').then((res) => console.log(res));
    Promise.reject(new Error('Rejected')).catch((e) => console.error(e));
  }
}
