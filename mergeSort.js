// helper function to merge back sorted arrays
function mergeArr(first, second) {
  let result = [];
  let i = 0;
  let k = 0;

  while ((i < first.length) && (k < second.length)) {
    if (first[i] > second[k]) {
      result.push(second[k]);
      k++;
    } else {
      result.push(first[i]);
      i++;
    }
  }

  while (i < first.length) {
    result.push(first[i]);
    i++;
  }

  while (k < second.length) {
    result.push(second[k]);
    k++;
  }

  return result;
}

// main function
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return mergeArr(left, right);
}
