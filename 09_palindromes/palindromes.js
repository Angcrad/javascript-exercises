const palindromes = function (str) {
str=str.toLowerCase();
str=str.replace(/[^a-z]/g, '');
if(str===invert(str))
{
	return true;
}
return false;
};
function invert(str)
{
	let outStr="";
	for(let i=str.length-1;i>=0;i--)
	{
		outStr+=str.charAt(i);
	}
	return outStr;
}
// Do not edit below this line
module.exports = palindromes;
