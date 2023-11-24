import sortHeroes from "../src/js/heroes.js";

test("Test sorting", ()=> {
  const enterData = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]; 
  let result = sortHeroes(enterData);
  console.log(result);
  expect(result).toEqual(
    [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10}
    ]  
  ); 
});