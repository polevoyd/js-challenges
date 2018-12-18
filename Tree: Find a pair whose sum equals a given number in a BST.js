
/*
Find a pair whose sum equals a given number in a BST

Before considering a BST, consider a sorted array.
If we were to find 2 numbers with given sum in a sorted array, it could be done very simply in O(n) by the following:
int left = 0, right = arr.length-1;
while (left < right) {
    if (left+right == sum)
        return true;
    if (left+right > sum)
        left++;
    if (left+right < sum)
        right--;
}

i.e. we can traverse the sorted from left and right ends. 
If the current pair matches the sum, we are done, else we move one step either from right or from left.

How do we do the same for a BST?
One solution can be to write the BST into an array during inorder traversal.
Then use the above solution.
*/
