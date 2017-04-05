
function chunkArrayInGroups(arr, size) { 
  // Break it up.
  var groupedLett; 
  var blankArr = []; 
  var i = 0
  while(i < arr.length){
    groupedLetter = arr.slice(i, i+size);
    blankArr.push(groupedLetter);
    i = i + size;
  }
  return arr = blankArr;
}

chunkArrayInGroups(["a", "b", "c", "d", 'e'], 3);
