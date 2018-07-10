/*
In this Kata you have to create a function,named insertMissingLetters,that takes in a string and outputs the same string processed in a particular way.

The function should insert only after the first occurence of each character of the input string, all the alphabet letters that:

-are NOT in the original string
-come after the letter of the string you are processing

Each added letter should be in uppercase, the letters of the original string will always be in lowercase.

Example:

input: "holly"

missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"

output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

You don't need to validate input, the input string will always contain a certain amount of lowercase letters (min 1 / max 50).
*/
// TIME: N SQUARED (cause of loop in loop when we form a insertion strings)
// SPACE: N LINEAR
function insertMissingLetters (str){

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let rt2 = [];
let firstOcc = new Map();

// map of unique characters (their first occurences
for (let i = 0; i < str.length; i++)
    if (!firstOcc.has(str[i]))
        firstOcc.set(str[i], i);
        
// form a sequences to insert after each character
for (let key of firstOcc.keys())
{
    let temp = '';
    let tempIndex = alphabet.indexOf(key);
    
    for (let k = tempIndex + 1; k < alphabet.length; k++)
    {
        if (!firstOcc.has(alphabet[k]))
        {
          temp += alphabet[k];
        }
    }
       rt2.push(temp.toUpperCase());
}
    
// picking indexes where to insert sequences
let tempArrayOfIndexes = [];
for (let index of firstOcc.values())
{
    tempArrayOfIndexes.push(index);
}

// array where we going to insert to
str = Array.from(str);

// tempArrayOfIndexes-> 0, 1, 2, 4
// rt2 -> sequence to insert on each of that indexes
// str -> h, e, l, l, o

// insertion process
let tmpArray = [];
let amount = 0;

for (let i = 0; i < str.length; i++)
{
  tmpArray.push(str[i]);
  
  if (i === tempArrayOfIndexes[amount])
  {
      tmpArray.push(rt2[amount]);
      amount++;
  }
}

str = tmpArray.join('');
  return str;
}



