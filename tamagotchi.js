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
      console.log(this.name + " OUIN OUIN OUIIIN ! ! !");
    }

    puke() {
      this.foodInTummy -= 1;
      console.log(this.foodInTummy +  " AHHHHHHH ! ! !");
    }

    yawn() {
      this.restedness -= 1;
      console.log(this.name + " a " + this.restedness +  " a actuellement points. AHHHHHHH ! ! !");
    }
}

const tamagotchi_one = new Tamagotchi("Lucas", "Serpent à sonette");
const tamagotchi_two = new Tamagotchi("Katchweene", "Pokemon");

tamagotchi_one.cry();
tamagotchi_two.cry();
