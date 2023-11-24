export default function sortHeroes(data) {
  const newData = data.sort((a, b) => b.health - a.health);
  return newData;
}