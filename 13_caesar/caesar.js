const caesar = function(str,places) {
return shiftString(str,places);
};
function shiftString(str,places)
{
	if(places===75)
	{
		let tempVar="";
	}
	let num=0;
	let outStr="";
	for(let i=0;i<str.length;i++)
	{
		num=str.charCodeAt(i);
		let cond1=num>64&&num<91;
		let cond2=num>96&&num<123
		if(cond1||cond2)
		{
			num+=places;
			if(cond1)
			{
				while(num>90)
				{
					num-=26;
				}
				while(num<65)
				{
					num+=26;
				}
			}
			if(cond2)
			{
				while(num>122)
				{
					num-=26;
				}
				while(num<97)
				{
					num+=26;
				}
			}
		}
		outStr+=String.fromCharCode(num);
	}
	return outStr;
}
// Do not edit below this line
module.exports = caesar;
