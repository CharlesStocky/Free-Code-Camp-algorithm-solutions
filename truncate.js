
function truncateString(str, num) {
  // Clear out that junk in your trunk
  debugger;
  if(num <= 3){
    str = str.slice(0, num).concat('...');
    return str; 
  }else if(num >= str.length) {
    return str; 
  }else {
    str = str.slice(0, num - 3).concat('...'); 
    return str; 
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 2);
