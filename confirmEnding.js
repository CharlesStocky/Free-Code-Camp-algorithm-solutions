//this code is terrible.


function confirmEnding(str, target){
  var splitStr = str.split(' ');
  if(splitStr.length === 1){ //if true string is a word instead of sentence or phrase
    var splitWord = str.split('');
    var offset = splitWord.length - 1;
    for(var i = 0; i < str.length; i++){
      var lastIndx = (i + offset) % splitWord.length;
      if(splitWord[lastIndx] === target){
        return true;
      }else{
        return false;
      }
    }
  } else { //else string is longer than one word
    var lastIndx = splitStr.length - 1;
    
      if(splitStr[lastIndx] === target){
        return true;
      }else {
        for(var j = 0; j < splitStr[lastIndx].length; j++){
          var strng = splitStr[lastIndx];
          if(strng.substring(j) === target){
            return true;
          }
        }
        return false;
     }
  }
} 

confirmEnding('truly false', 'alse'); 
