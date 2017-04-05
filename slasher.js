
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var slicedArr = arr.slice(howMany); 
	arr = slicedArr;
  return arr;
}

slasher(['burgers', 'fries', 'shake'], 1);
