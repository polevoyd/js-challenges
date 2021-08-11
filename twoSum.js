/**
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */
let twoSum = function(nums, target) {
  for (let i = 0; i < nums.length ; i++)
  {
    for (let k = 0 ; k < nums.length ; k++)
    {
      if ((nums[i] + nums[k] === target) && (i !== k))
        return [i, k];
    }
  }
 
    // Самое простое решение - для каждого елемента запускаем луп и смотрим если сумма = таргет
    //     for (i = 0; i < nums.length; i++) {
    //         for (k = i; k < nums.length; k++) {

    //             const notSameElement = i !== k
    //             const sum = nums[i] + nums[k]

    //             if (sum === target && notSameElement) {
    //                 return [i, k]
    //             }
    //         }
    //     }
 
    // --------------------------------------------------
 
    // Для самых хитрых: создаем обьект где храним разницу и индекс: {таргет - текущий элемент: индекс}
    // и делаем луп через весь массив, проверяя если уже есть такой элемент
 
    // const m = {};
    // for (let i in nums) {
    //     if (m[target - nums[i]] >= 0) {
    //         return [m[target - nums[i]], i]
    //     }
    //     m[nums[i]] = i
    // }
};
