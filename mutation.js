function mutation(arr){
  //convert to string an tolowercase each letter
  var str1 = arr[0].split('').join(''); 
	var str2 = arr[1].split('').join(''); 
	var letterCount = 0; 
  for(var i = 0; i < str2.length; i++){	
	  if(str1.toLowerCase().includes(str2[i].toLowerCase())){
      letterCount++;	
  	}
  }
	if(letterCount === str2.length){
    return true;	
	}else{
    return false;	
	}
}

mutation(['alsk;alskf;alkwer;lk;ho', 'hello'])
