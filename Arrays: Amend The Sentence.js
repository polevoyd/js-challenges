function amendTheSentence(s) {
/*
You have been given a string s, which is supposed to be a sentence. However, 
someone forgot to put spaces between the different words, and for some reason 
they capitalized the first letter of every word. Return the sentence after 
making the following amendments:

Put a single space between the words.
Convert the uppercase letters to lowercase.
Example

For s = "CodefightsIsAwesome", the output should be
amendTheSentence(s) = "codefights is awesome";
For s = "Hello", the output should be
amendTheSentence(s) = "hello".
Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string containing uppercase and lowercase English letters.

Guaranteed constraints:
3 ≤ s.length ≤ 100.

[output] string

The amended sentence.
*/

// basically, we need to put a space before each Capital letter and after that make that
// capitals to lower case

    // TIME: N LINEAR (depends on size of string)
    // SPACE: LINEAR (bigger the string - bigger return string to create)
    let rs = [];
    for (let i = 0; i < s.length; i++)
        {
            if (s[i] === s[i].toUpperCase() && (i !== 0))
            {
                rs += ' ';
                rs += s[i];
            }
            else
            {
                rs += s[i];    
            }
        }
    rs = rs.toLowerCase();
    return rs;
}
