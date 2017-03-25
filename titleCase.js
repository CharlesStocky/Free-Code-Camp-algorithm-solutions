
function titleCase(str) {
  var splitStr = str.split(' '); 
  var strArr = [];
  var currentWord; 
  var letter; 
  for(var i = 0; i < splitStr.length; i++){
    currentWord = splitStr[i];   
    letter = currentWord[0].toUpperCase(); 
    strArr.push(letter + currentWord.substring(1).toLowerCase())   
    str = strArr.join(' '); 
  }; 
  return str;
}

titleCase("a pOt");
