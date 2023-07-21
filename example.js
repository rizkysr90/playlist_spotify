let example = [];

for (let i = 0; i < 20; i++) {
  let obj = {
    title: `Movie ${i}`,
    director: `Director ${i}`,
    genre: "comedy",
    releaseYear: 2019,
  };

  example.push(obj);
}

console.log(example);
console.log("========================");

let example1 = [];

for (let i = 0; i < 20; i++) {
  let obj = {
    name: `Director ${i}`,
    country: `Indonesia`,
  };

  example1.push(obj);
}

console.log(example1);
