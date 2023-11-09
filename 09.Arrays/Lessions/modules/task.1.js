import Module from '/node_modules/js-little-core/module.js';

export default class Task1 extends Module {
  execute() {
    const jane1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
    const julia1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
    const jane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
    const julia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

    const verifyCats = function (catsJane, catsJulia) {
      console.log('Список кошек:');

      // const onlyCats = catsJane.slice(1, -1);
      const onlyCats = catsJane.slice();
      onlyCats.splice(0, 1);
      onlyCats.splice(-1);

      const moreCats = [...onlyCats, ...catsJulia];
      console.log(moreCats);
      moreCats.forEach(function (age, index) {
        const info = age < 2 ? 'ещё котёнок' : `взрослая, ей ${age} лет`;
        console.log(`Кошка № ${index + 1} ${info}`);
      });
    };

    verifyCats(jane1, julia1);
    verifyCats(jane2, julia2);
  }
}
