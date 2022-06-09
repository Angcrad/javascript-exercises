const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
	let sum=0;
  for(const num of arr)
  {
    sum+=num;
  }
  return sum;
};

const multiply = function(arr) {
  let mul=1;
  for(const num of arr)
  {
    mul*=num;
  }
  return mul;
};

const power = function(x,y) {
	return Math.pow(x,y);
};

const factorial = function(x) {
	if(x===0)
  {
    return 1;
  }
  let mul=1;
  for(let i=x;i>0;i--)
  {
    mul*=i;
  }
  return mul;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
