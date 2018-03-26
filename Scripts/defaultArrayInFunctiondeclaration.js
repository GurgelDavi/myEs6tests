/*function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
  return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}
console.log(houseDescriptor());
console.log(houseDescriptor({houseColor:'red',shutterColors:['white','gray','pink']}));
*/
function buildHouse({floors='1', colors='red'}={})
{
  const floorsText = floors == 1 ? 'floor' : 'floors';
  return `Your house has ${floors} ${floorsText} with red brick walls`;

}

console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.

//  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
