let time = 100;
const arr = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '|    \n'];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${arr[i]}`);
  }, time);
  time += 200;
}
