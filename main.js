var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {

    if ((coffeeShop["drinkRequirements"][drinkType]) && coffeeShop.beans > coffeeShop["drinkRequirements"][drinkType]) {
                  alert("There you go!");
      coffeeShop.beans -= coffeeShop["drinkRequirements"][drinkType];

    } else if (coffeeShop.beans < coffeeShop["drinkRequirements"][drinkType]){
        alert("Sorry, we're all out of beans!");
        } else {
                alert("Sorry, we don't make " + drinkType);
      }
  }
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");