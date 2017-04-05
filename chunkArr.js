
function chunkArrayInGroups(arr, size) { 
  // Break it up.
  debugger;
  var letterSize; 
  var blankArr = [];
  var letterArr = []; 
  var i = 0
  while(i < arr.length){
    letterSize = arr.slice(i, i+size);
    
    blankArr.push(letterSize);
    i = i + size;
    
  }
  return arr = blankArr;
}

chunkArrayInGroups(["a", "b", "c", "d", 'e'], 3);
