'use strict';

{
  class Car {
    constructor(name, company) {
      this.name = name;
      this.company = company;
    }
    run() {
      console.log('run');
    }
    stop() {
      console.log('stop');
    }
  }
  let car = new Car('prius', 'Toyota');
  car.run(); // run
  car.stop(); // stop
  console.log(car.name); // prius
  console.log(car.company); // Toyota

  let car2 = new Car('beetle', 'Volkswagen');
  car2.run(); // run
  car2.stop(); // stop
  console.log(car2.name); // beetle
  console.log(car2.company); // 'Volkswagen'
}
