function someRecursive(arr, callback){
  if (arr.length === 0) return false;
  return callback(arr[arr.length-1]) === false ? someRecursive(arr.slice(0, arr.length-1), callback) : true;
}
