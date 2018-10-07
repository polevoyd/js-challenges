function countUniqueValues(array){
  
//   let counter = {};
  
//   for (let i of array)
//       if (!counter[i])
//           counter[i] = i;
      
//   return Object.keys(counter).length;

let counter = 0;
let pointer = 1;

while (pointer < array.length)
{
    if (array[pointer] === array[counter])
    {
        pointer++;
    }
    else
    {
        counter++;
        array[counter] = array[pointer];
    }
}

return counter !== 0 ? counter+1 : counter;

}







