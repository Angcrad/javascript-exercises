const leapYears = function(x)
{
	if(x%4===0)
	{
		if(x%100===0)
		{
			if(x%400===0)
			{
				return true;
			}
			return false;
		}
		return true;
	}
	return false;
};

// Do not edit below this line
module.exports = leapYears;
