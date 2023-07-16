const set1 = [5, 6, 7, 9];
const set2 = [5, 4, 8, 9, 3];
const distinctElements = [];

const setUnion = [...new Set([...set1, ...set2])];

for (const elem of setUnion) {
  if (!distinctElements.includes(elem)) {
    distinctElements.push(elem);
  }
}

const sum = distinctElements.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
function dotProduct(s1, s2) {
    let ps = 0;
    for (let i = 0; i < s1.length; i++) {
      ps += s1[i] * s2[i];
    }
    return ps;
  }
  
  function checkOrthogonal(structure) {
    for (let i = 0; i < structure.length - 1; i++) {
      const s1 = structure[i];
      const s2 = structure[i + 1];
      const ps = dotProduct(s1, s2);
      if (ps === 0) {
        console.log(`structure ${s1} and ${s2} are orthogonal.`);
      } else {
        console.log(`structure ${s1} and ${s2} are not orthogonal.`);
      }
    }
  }
  
  const structure = [[1, 2, 3], [4, 5, 6], [0, -1, 2], [3, -2, 1]];
  checkOrthogonal(structure);