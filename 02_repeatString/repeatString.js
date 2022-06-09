const repeatString = function(string, num)
{
	if(num<0)
	{
		return "ERROR"
	}
	let cadena="";
	for(let i=0;i<num;i++)
	{
		cadena+=string;
	}
	return cadena;
};

// Do not edit below this line
module.exports = repeatString;
