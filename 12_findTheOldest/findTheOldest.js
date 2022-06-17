const findTheOldest = function(people) {
	return people.reduce((oldest, current) =>
										{
											let oldestAge=getAge(oldest.yearOfBirth,oldest.yearOfDeath);
											let currentAge=getAge(current.yearOfBirth,current.yearOfDeath);
											if(currentAge>oldestAge)
											{
												return current;
											}
											else
											{
												return oldest;
											}
										});
};
function getAge(born,died)
{
	if(!died)
	{
		died=new Date().getFullYear();
	}
	return died-born;
}
// Do not edit below this line
module.exports = findTheOldest;
