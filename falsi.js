const func = (x) => (2 * Math.pow(2.718281828, -x)) - Math.sin(x);
const calculateXr = () => ((xu * func(xl)) - (xl * func(xu))) / (func(xl) - func(xu));
const printIteration = (iteration) => {
  const round = (x) => Math.floor(x * 1000) / 1000; 
  console.log(`Iteration # ${iteration} xl: ${round(xl)} => func(xl): ${round(func(xl))}, xu: ${round(xu)} => func(xu): ${round(func(xu))}, xr: ${round(xr)} => func(xr): ${round(func(xr))}`);
}

let xl = 0;
let xu = 0;
let xr = 0;
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
    xr = calculateXr();
    printIteration(1);
    break;
  }
}

// iterations
for (let i = 1; i < 20; i++) {
  if (func(xl) * func(xr) < 0) {
    xu = xr;
  } else if (func(xr) * func(xu) < 0) {
    xl = xr;
  }

  xr = calculateXr()
  printIteration(i + 1);
}

//  approximated root in xr
console.log('The approximated root of the given function (xr) is: ', xr);

