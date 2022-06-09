const removeFromArray = function() 
{
	let arreglo;
	let arg;
	if(arguments.length>0)
	{
		arreglo=arguments[0];
		if(arguments.length>1)
		{
			for(let i=1;i<arguments.length;i++)
			{
				let cont=0;
				for(const ele of arreglo)
				{
					if(ele===arguments[i])
					{
						arreglo.splice(cont,1);
					}
					cont++;
				}
			}
		}
	}
	return arreglo;
};

// Do not edit below this line
module.exports = removeFromArray;
