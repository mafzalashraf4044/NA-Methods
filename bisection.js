const func = (x) => ((2 * Math.pow(2.718281828, -x)) - Math.sin(x));
const printIteration = (iteration) => {
  const round = (x) => Math.floor(x * 1000) / 1000; 
  console.log(`Iteration # ${iteration} xl: ${round(xl)} => func(xl): ${round(func(xl))}, xu: ${round(xu)} => func(xu): ${round(func(xu))}, xm: ${round(xm)} => func(xm): ${round(func(xm))}`);
}

let xl = 6;
let xu = -9;
let xm = 0;
let flag = 0;

//  find initial bound
//  first iteration after finding initial bounds
while (1) {
  if (flag === 0) {
    xu--;
    flag = 1;
  } else {
    xl++;
    flag = 0;
  }

  if (func(xl) * func(xu) < 0) {
    xm = (xl + xu) / 2;
    printIteration(1);
    break;
  }
}

//  iterations
for (let i = 1; i < 20; i++) {
  if (func(xl) * func(xm) < 0) {
    xu = xm
  } else if (func(xm) * func(xu) < 0) {
    xl = xm;
  }

  xm = (xl + xu) / 2;
  printIteration(i + 1);
}

//  approximated root in xm
console.log('The approximated root of the given function (xm) is: ', xm);

