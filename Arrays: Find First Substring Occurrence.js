function findFirstSubstringOccurrence(s, x) {
  /*
    Avoid using built-in functions to solve this challenge. Implement them yourself,
    since this is what you would be asked to do during a real interview.

Implement a function that takes two strings, s and x, as arguments and finds the first
occurrence of the string x in s. The function should return an integer indicating the
index in s of the first occurrence of x. If there are no occurrences of x in s, return -1.

Example

For s = "CodefightsIsAwesome" and x = "IA", the output should be
strstr(s, x) = -1;
For s = "CodefightsIsAwesome" and x = "IsA", the output should be
strstr(s, x) = 10.
    */

//////////////////////////////////////////////////////////////////////////









//////////////////////////////////////////////////////////////////////////
  // BRUTE FORCE
  // TIME: N size * X size
  // SPACE: 1 CONSTANT
  /*
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] === x[0])
        {
            let match = true;
            for (let k = 0; k < x.length; k++)
            {
                if (x[k] !== s[i+k])
                    match = false;
            }

            if (match === true)
                return i;
        }
    }
    return -1;
    */
}
