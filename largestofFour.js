
function largestOfFour(arr) {
  for(var i = 0; i < arr.length; i++){
    var num = 0; 
    console.log(arr.length); 
    for(var j = 0; j < arr[i][j].length; j++){
      if(arr[i][j] > num){
        num = arr[i][j];  
      }   
    }
    arr[i] = num; 
  }
  return arr; 
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
