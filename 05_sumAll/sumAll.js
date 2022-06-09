const sumAll = function(x,y)
{
	let cond1=(typeof(x)==='number'&&typeof(y)==='number');
	let cond2=x>=0&&y>=0;
	if(cond1===true&&cond2===true)
	{
		let sum=0;
		if(x>y)
		{
			let z=x;
			x=y;
			y=z;
		}
		for(let i=x;i<=y;i++)
		{
			sum+=i;
		}
		return sum;
	}
	return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
