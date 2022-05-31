// Create a function called pizzaOven. 
// We should feel free to customize what information we keep track of for our pizza, 
// but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

// Create a function called pizzaOven that returns a JavaScript (Pizza) Object
// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]
// Create 2 more pizzas with any toppings we like!
// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

function pizzaOven(crust,sauce,cheese,toppings) {
   var pizza = {};
   pizza.crustType = crust;
   pizza.sauceType = sauce;
   pizza.cheeses = cheese;
   pizza.toppings = toppings;
   return pizza;
}

no1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
no2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["muchrooms", "olives", "onions"]);
no3 = pizzaOven("thin", "traditional", ["mozzarella"], ["pepperoni"]);
no4 = pizzaOven("deep dish", ["traditional", "heavy"], ["mozzarella"], ["pepperoni", "sausage", "bacon", "beef"]);

console.log(no1);
console.log(no2);
console.log(no3);
console.log(no4);