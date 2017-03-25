
function repeatStringNumTimes(str, num) {
  // repeat after me
	var repString; 
  var repNum = num - 1
  if(num < 0){
    repString = ''; 
  }else{
    repString = str.repeat(num); 
  } 
  return repString; 
}

repeatStringNumTimes("abc", 2);
