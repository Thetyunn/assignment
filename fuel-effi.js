let trip = { distance: 300, effcienty: 25, cost: 3.75 };

let Fuel_needed = trip.distance / trip.effcienty;
let Trip_cost = Fuel_needed * trip.cost;
console.log(`Fuel needed : ${Fuel_needed} gallon`);
console.log(`The total cost of Trip : $${Trip_cost}`);
