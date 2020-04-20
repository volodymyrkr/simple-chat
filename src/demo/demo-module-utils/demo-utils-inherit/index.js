const util = require('util');

function Animal() {

}
Animal.prototype.action = function (animal) {
  console.log(`Some action ${animal}`);
}

function Dog() {

}

// Dog.prototype = Object.create(Animal.prototype);
util.inherits(Dog, Animal);

const animal = new Animal();
animal.action('unknown');

const dog = new Dog();
dog.action('dog');