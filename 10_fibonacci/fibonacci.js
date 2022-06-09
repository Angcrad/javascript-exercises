const fibonacci = function(x) {
let fib=[1,1];
if(typeof(x)!='number')
{
	x=parseInt(x);
}
if(x<=0)
{
	return "OOPS"
}
for(let i=2;i<x;i++)
{
	fib.push(fib[i-2]+fib[i-1]);
}
return fib[x-1];
};

// Do not edit below this line
module.exports = fibonacci;
