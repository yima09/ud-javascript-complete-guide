'use strict';

{
  const name = 'Espresso';
  const size = 350;
  const coffee = {
    name: name,
    size, // 省略記法。
  };

  console.log(coffee.name); // Espresso
  console.log(coffee.size); // 350
}