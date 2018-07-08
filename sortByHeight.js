/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/

function sortByHeight(a) {

    for (let i = 0 ; i < a.length ; i++)
         for (let j = i ; j < a.length ; j++)
              /* If its = -1 - we don't touch it */
              if ( (a[j] < a[i]) && (a[i] !== -1) && (a[j] !== -1) ) 
              {
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
              }

    return a;
    
    
    /*
     i = 0

     sortByHeight = a => a.map(v => v<0 ? v : b[i++], b = a.filter(v => v >= 0).sort((a,b) => a-b))
     
     */
}
