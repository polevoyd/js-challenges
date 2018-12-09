/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

const twoSum = function(nums, target) {
    // создаем пустой массив
    const m = {};

    // идем через каждый элемент и смотрим
    // если он уже есть в таблице
    //  если есть - возвращаем ответ
    // 
    // далее добавляем остаток в таблицу
    
    for (let i = 0 ; i < nums.length; i++) {
        if(m[nums[i]] >= 0) {
            return [m[nums[i]], i]
        }
        m[target - nums[i]] = i;
    }
};

