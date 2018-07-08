function reverseVowels(a) {
	
	/* 	reverse vowels in a string.	*/
	/* 	vowels are: a, e, i, o, u 	*/
	
	let i = 0;
	let j = a.length - 1;
	while (i < j) 
	{
  // while left pointer not meet right one we just step them closer
  // since they
		while (i < j && (a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u')) 
		{
			i++;
		}
		while (i < j && (a[j] == 'a' || a[j] == 'e' || a[j] == 'i' || a[j] == 'o' || a[j] == 'u'))
		{
			j--;
		}
    // swaping
		let temp = a[i++];
    a[i++] = a[j--];
    a[j--] = temp;
	}
	return a;
}
