const uniqueWolfs = (arr) => {
  let obj = {};
  arr.map((i) => {
    if (obj[i]) {
      obj[i] = obj[i] + 1;
    } else {
      obj[i] = 1;
    }
  });
  let max = [99, 0];
  Object.keys(obj).map((i) => {
    if (obj[i] > max[1]) {
      max = [i, obj[i]];
    } else if (obj[i] == max[1] && i < max[0]) {
      max = [i, obj[i]];
    }
  });
  return max[0];
};
const input = prompt("Tür ID'lerini Girin : ");
// Example
// const input = "122 124 4 10920981 ";

const arr = input.replace(/\s/g, "").replace(/\D/g, "").split("");

const result = uniqueWolfs(arr);

console.log(result);
