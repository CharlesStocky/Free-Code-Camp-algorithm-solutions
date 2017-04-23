
//create method to return new 'pushed' array instead of length

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var args = Array.prototype.slice.call(arguments);
  var arrJoin = args[0].concat(args[1]); 
	arrJoin.sort(function(a, b){
    return a - b;  
	}); 
	var ind = arrJoin.indexOf(num); 
	return ind; 
}

getIndexToIns([40, 60], 50)
