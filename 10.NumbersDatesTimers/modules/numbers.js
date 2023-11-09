import Module from '/node_modules/js-little-core/module.js';

export default class Numbers extends Module {
  execute() {
    // 10 - 0-9; 1 / 10 = 0.1; 10 / 3 = 3.333333
    // 2 - 0,1

    console.log(10 === 10.0);
    console.log(0.1 + 0.2 === 0.3);

    // Converting
    console.log('---------');

    console.log(Number('11'));
    console.log(+'11');

    // Parsing
    console.log('---------');

    console.log(Number.parseInt('20%', 10));
    console.log(Number.parseInt('011100%', 2));
    console.log(Number.parseInt('s20', 10));

    console.log(Number.parseFloat('9.7kg', 10));

    // Is nan
    console.log('---------');

    console.log(Number.isNaN(111));
    console.log(Number.isNaN('111'));
    console.log(Number.isNaN(+'20s'));
    console.log(11 / 0);
    console.log(Number.isNaN(11 / 0));
    console.log(Number.isNaN(111));
    console.log(Number.isNaN(111));

    // Is finite
    console.log('---------');

    console.log(Number.isFinite(111));
    console.log(Number.isFinite('111'));
    console.log(Number.isFinite(+'20s'));
    console.log(11 / 0);
    console.log(Number.isFinite(11 / 0));
    console.log(Number.isFinite(111));
    console.log(Number.isFinite(111));

    // Math
    console.log('---------');

    console.log(Math.sqrt(9));
    console.log(9 ** (1 / 2));
    console.log(8 ** (1 / 3));

    console.log(Math.max(3, 55, 66, 44, 31, 2, 9));
    console.log(Math.max(3, '55', '66', 44, 31, 2, 9));
    console.log(Math.max(3, '55%', '66%', 44, 31, 2, 9));
    console.log(Math.min(3, 55, 66, 44, 31, 2, 9));

    console.log(Math.PI);
    console.log(Math.PI * Number.parseInt('20px') ** 2);

    console.log(Math.trunc(Math.random() * 6) + 1);

    // Rounding
    console.log('---------');

    console.log(Math.trunc(1.99));
    console.log(Math.trunc(1.39));

    console.log(Math.round(1.99));
    console.log(Math.round(1.39));

    console.log(Math.ceil(1.99));
    console.log(Math.ceil(1.39));

    console.log(Math.floor(1.99));
    console.log(Math.floor(1.39));

    console.log(Math.trunc(-1.99));
    console.log(Math.floor(-1.99));

    // To fixed
    console.log('---------');

    console.log(+Math.PI.toFixed(2));
    console.log(+(1.34567).toFixed(2));

    // Remainder of dividing
    console.log('---------');

    console.log(7 % 3);
    console.log(7 % 4);

    console.log(8 % 2);
    console.log(108 % 2);
    console.log(9 % 2);
    console.log(89 % 2);

    const isNumberOdd = (x) => x % 2 !== 0;
    console.log(isNumberOdd(5));
    console.log(isNumberOdd(7));
    console.log(isNumberOdd(6));
    console.log(isNumberOdd(10));

    // Big integer
    console.log('---------');

    console.log(2 ** 53 - 1);
    console.log(Number.MAX_SAFE_INTEGER);

    console.log(2 ** 53 + 0);
    console.log(2 ** 53 + 1);
    console.log(2 ** 53 + 2);

    console.log(
      4545456344543988456941728391789787895679651782391682791173829156789457189672n,
    );
    console.log(
      BigInt(
        '4545456344543988456941728391789787895679651782391682791173829156789457189672',
      ),
    );

    console.log(
      4545456344543988456941728391789787895679651782391682791173829156789457189672n +
        4545456344543988456941728391789787895679651782391682791173829156789457189672n,
    );

    console.log(
      4545456344543988456941728391789787895679651782391682791173829156789457189672n *
        4545456344543988456941728391789787895679651782391682791173829156789457189672n,
    );

    console.log(
      4545456344543988456941728391789787895679651782391682791173829156789457189672n **
        10n,
    );

    const bigNumber =
      4545456344543988456941728391789787895679651782391682791173829156789457189672n;
    const regularNumber = 189;

    console.log(bigNumber + BigInt(regularNumber.toString()));

    console.log(123n === 123);

    console.log(5 / 2);
    console.log(5n / 2n);
  }
}
