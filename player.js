var player = {
    name: "Karma",
    
    feedTamagotchi: function(tamagotchi) {
      tamagotchi.foodInTummy++;
      console.log('YUM!!! ' + tamagotchi.name + ' has been fed and now has: ' + tamagotchi.foodInTummy + ' in the tummy');
    },
  
    medicateTamagotchi: function(tamagotchi) {
      tamagotchi.health++;
      console.log(tamagotchi.name + ' has been medicated and now has health: ' + tamagotchi.health);
    },
  
    knockOutTamagotchi: function(tamagotchi) {
      tamagotchi.restedness++;
      console.log(tamagotchi.name + ' got some Zzzzs! Restedness: ' + tamagotchi.restedness);
    }
  };
  
  
  player.feedTamagotchi(tamagotchi_one);
  player.medicateTamagotchi(tamagotchi_one);
  player.knockOutTamagotchi(tamagotchi_one);