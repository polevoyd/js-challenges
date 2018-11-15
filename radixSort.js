// return digit on position
function getDigit(number, position) {
  return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;
}

// return amount of digits in number
function digitCount(number) {
  return Math.floor(Math.log10(number)) + 1;
}

// return max amount of digits in array
function mostDigits(array) {
  let max = 0;
  for (let i of array){
    if (digitCount(i) > max)
      max = digitCount(i);
  }
  return max;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log('=======================');
radixSort([41,5152,52,1,25,161,6,6362,72,36,7,272,273,723,21,5]);
