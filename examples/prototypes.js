// o veiculo vai ser o prototipo do carro
const vehicle = {
  accelerate() {
    console.log(`${this.model} vrummmmmm!`);
  },
};

// usamos o Object.create passando quem var ser o prototipo e objeto que queremos criar
const car = Object.create(vehicle, {
  honk: {
    value: function () {
      console.log(`${this.model} beeeep!`);
    },
  },
});

// quando for iniciar nosso carro, passamos o prototipo dele e o valor para continuar a cadeia de prototipos
const gol = Object.create(car, {
  model: { value: 'Gol' },
});

// prototype chain:
// O prototipo do gol é car
// O prototipo de car é vehicle
// O prototipo do vehicle é o Object.prototype

gol.honk();
gol.accelerate();

class Vehicle {
  accelerate() {
    console.log(`${this.model} vrummmmmm!`);
  }
}

class Car extends Vehicle {
  honk() {
    console.log(`${this.model} beeeep!`);
  }
}

class Gol extends Car {
  constructor(model) {
    super();
    this.model = model;
  }
}

const golzinho = new Gol('golzinho');

golzinho.honk();
golzinho.accelerate();

const name = '   Kenneth motta Freitas  '
  .trim()
  .split(' ')
  .map(n => `${n.charAt(0).toUpperCase()}${n.slice(1)}`)
  .join(' ')
  .replace('Motta', 'M.');

console.log(name);
