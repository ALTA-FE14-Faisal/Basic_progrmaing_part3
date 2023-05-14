function removeDuplicates(array) {
    const uniqueArray = [...new Set(array)]; 
    return uniqueArray;
  }  
  
  console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));    
  console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9]));   
  console.log(removeDuplicates([2, 2, 2, 11]));            
  console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4]));