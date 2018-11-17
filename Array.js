/**
 *
 * • Constant-time access given the index – Index of each element
 * maps directly to a particular memory address.
 * • Space efficiency – Consist purely of data, so no space is wasted with
 * links or other formatting information.
 * • Memory locality – Excellent memory locality. Good for CPU caching.
 * 
 *          Head        Index       Tail
 * Insert   N           N           1
 * Remove   N           N           1
 * Find     N
 * 
 * 
 * 
 * 
 * 
 */

 /**
  * Simple storage
Adding but not deleting
Serialization
Quick lookups by index
Easy conversion to C-style arrays
Efficient traversal (contiguous CPU caching)
Do not use for

Insertion/deletion in the middle of the list
Dynamically changing storage
Non-integer indexing
Time Complexity

Operation	Time Complexity
Insert Head	O(n)
Insert Index	O(n)
Insert Tail	O(1)
Remove Head	O(n)
Remove Index	O(n)
Remove Tail	O(1)
Find Index	O(1)
Find Object	O(n)
  */