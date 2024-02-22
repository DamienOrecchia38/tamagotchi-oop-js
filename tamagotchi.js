console.log('tamagotchi file is loaded');

class Tamagotchi {

  foodInTummy;
  restedness;
  health;

    constructor(name, type) {
      this.foodInTummy = 10;
      this.restedness = 10;
      this.health = 10;
      this.name = name;
      this.creatureType = type;
    }

    cry() {
      this.foodInTummy -= 1;
      console.log(this.name + " a " + this.foodInTummy + " points de nourriture. WHAOOOOOOOO ! ! !");
    }
}

const tamagotchi_one = new Tamagotchi("Lucas", "Serpent à sonette");
const tamagotchi_two = new Tamagotchi("Katchweene", "Pokemon");

tamagotchi_one.cry();
tamagotchi_two.cry();
