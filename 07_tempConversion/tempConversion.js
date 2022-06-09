const ftoc = function(x) {
res=(x-32)*(5/9);
res=round(res,1);
return res;
};

const ctof = function(x)
{
  res=x*(9/5)+32;
  res=round(res,1);
  return res;
};
function round(value, precision)
{
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
