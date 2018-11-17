/**
 *
 * + Constant-time access given the index – Index of each element
 * maps directly to a particular memory address.
 * + Space efficiency – Consist purely of data, so no space is wasted with
 * links or other formatting information.
 * + Memory locality – Excellent memory locality. Good for CPU caching.
 * 
 * - Slow insertion in head/index
 *          Head        Index       Tail
 * Insert   N           N           1
 * Remove   N           N           1
 * Search   N
 * 
 */

