const reverseString = function(string) {
	let cadena="";
	for(let i=string.length-1;i>=0;i--)
	{
		cadena+=string.charAt(i);
	}
	return cadena;
};

// Do not edit below this line
module.exports = reverseString;
