function findLongestWord(str){
  var splitWord = str.split(' '); 
  var word = splitWord[0]; 
  var len = 0;
  for(var i = 0; i < splitWord.length; i++){
    if(len < splitWord[i].length){
      len = splitWord[i].length;
    }
  }
  return len; 
}

findLongestWord("The quick brown fox jumped over the lazy dog");
