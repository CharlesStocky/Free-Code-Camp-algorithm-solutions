function rot13(str) { // LBH QVQ VG!
  var finishedStr = []; 
	var splitArr = str.split(''); 
	for(var i = 0; i < splitArr.length; i++){
    var charCode = splitArr[i].charCodeAt();	
	  var charShift = charCode + 13; 	
		var shifted = 0;
		if(charShift > 90){
			var shift = charShift - 90; 
			var actualCode = 65 + shift; 
      var letter = String.fromCharCode(actualCode - 1);  
			finishedStr.push(letter); 
    }else if (charCode < 64){
		  finishedStr.push(splitArr[i]); 
		}else{
	    var shifted = String.fromCharCode(charShift); 	
			finishedStr.push(shifted); 
		} 
	}
	return finishedStr.join(""); 
}


rot13("SERR PBQR PNZC");
