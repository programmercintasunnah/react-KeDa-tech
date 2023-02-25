// 1.
export const cetakAngka = (angka) => {
  for (let i = 1; i <= angka; i++) {
    if (i % 15 === 0) {
      console.log("fish bash");
    } else if (i % 3 === 0) {
      console.log("fish");
    } else if (i % 5 === 0) {
      console.log("bash");
    }
  }
};
// console.log(cetakAngka(1));

// 2.
export const urutDariTerkecil = (dataArray) => {
  const n = dataArray.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (dataArray[j] > dataArray[j + 1]) {
        const temp = dataArray[j];
        dataArray[j] = dataArray[j + 1];
        dataArray[j + 1] = temp;
      }
    }
  }
  return dataArray;
};

export const urutDariTerbesar = (dataArray) => {
  const n = dataArray.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (dataArray[j] < dataArray[j + 1]) {
        const temp = dataArray[j];
        dataArray[j] = dataArray[j + 1];
        dataArray[j + 1] = temp;
      }
    }
  }
  return dataArray;
};
// const dataArray = [2001, 11, 3, 1998, 9, 22];
// console.log(urutDariTerkecil(dataArray));
// console.log(urutDariTerbesar(dataArray));

// 3.
export const palindrom = (kata) => {
  kata = kata.toLowerCase().replace(/ /g, "");
  const kataTerbalik = kata.split("").reverse().join("");
  return kata === kataTerbalik;
};
// console.log(palindrom("tamat")); // Output: true
// console.log(palindrom("radar")); // Output: true
// console.log(palindrom("chelsea")); // Output: false
// console.log(palindrom("kodok")); // Output: true
// console.log(palindrom("renisa")); // Output: false
