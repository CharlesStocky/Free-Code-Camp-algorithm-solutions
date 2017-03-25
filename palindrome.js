
function palindrome(str) {
  var result = str.replace(/[\W_]/g, '').split('').reverse().join('').toLowerCase(); 
  if(result === str.replace(/[\W_]/g, '').toLowerCase()){
    return true;  
  }else {
    return false;   
  }
}

palindrome("Eyed");
