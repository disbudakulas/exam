const uniqueWolfs = (arr) => {
  if (arr.length < 5 || arr.length > 200000) {
    return "Tür ID'leri en az 5, en fazla 200.000 değer içerebilir. ";
  }
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
// For Browser
const input = prompt("Tür ID'lerini Girin : ");
// For Console
// const input = "1 2345432134";

const arr = input.replace(/\s/g, "").replace(/\D/g, "").split("");

const result = uniqueWolfs(arr);

console.log(result);
