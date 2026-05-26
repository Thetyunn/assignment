console.log("Assignment-1");
for (i = 1; i <= 3; i++) {
  console.log("*****");
}

console.log("Assignment-2");
let char = "";
for (let a = 1; a <= 5; a++) {
  char += "*";
  console.log(char);
}

console.log("Assignment-3");
for (let b = 5; b >= 1; b--) {
  let str = "";
  for (let c = 1; c <= b; c++) {
    str += "*";
  }
  console.log(str);
}

console.log("Assignment-4");
for (let d = 1; d <= 3; d++) {
  let chr = "";

  if (d % 2 === 0) {
    chr = " ";
  }
  for (let k = 1; k <= 5; k++) {
    chr += "* ";
  }
  console.log(chr);
}
