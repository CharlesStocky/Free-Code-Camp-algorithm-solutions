
function factorialize(num){  
  var factoredNum = 1;                                
  for(i = 1; i <= num; i++){                                                   
    factoredNum = i * factoredNum;                                                
  }                                                                                
  return factoredNum; 
}                                                                                                                                                                                       
                                                                                                                                                                                        
factorialize(5);
