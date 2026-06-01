let area = [
  { name: "living_room", sqft: 200, cost: 15 },
  { name: "Kitchen", sqft: 150, cost: 20 },
  { name: "Bathroom", sqft: 100, cost: 25 },
];
let areaCost = 0;
let totalArea = 0;
for (let i = 0; i < area.length; i++) {
  areaCost = area[i].sqft * area[i].cost;
  console.log(` Cost for ${area[i].name} is $ ${areaCost} .`);
  totalArea += areaCost;
}
console.log(`Total Renovaation :$ ${totalArea}`);
