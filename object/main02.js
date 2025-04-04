'use strict';

{
  const coffee = {
    name: 'Espresso',
    size: 350,
    nutritions: {
      calories: 5,
      sugars: 0,
    },
  };

  const coffee2 = coffee;
  console.log(coffee2 === coffee, coffee2.nutritions === coffee.nutritions); // true true

  const coffee3 = { ...coffee };
  console.log(coffee3 === coffee, coffee3.nutritions === coffee.nutritions); // false true

  const coffee4 = {
    ...coffee,
    nutritions: { ...coffee.nutritions },
  };
  console.log(coffee4 === coffee, coffee4.nutritions === coffee.nutritions); // false false

  console.log(coffee3);
  console.log(coffee4);
}
