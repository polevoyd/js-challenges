/**
 * @param {number[]} prices
 * @return {number}
 */

/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.
*/

var maxProfit = function(prices) {
    
    // самый простой способ: просто считать 
    // максимальную возможную прибыль для каждого дня
    // Time : N2
    // Space: 1
    
    let profit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        for (let ii = i; ii < prices.length; ii++) {
            if (prices[ii] - prices[i] > profit) {
                profit = prices[ii] - prices[i];
            }  
        }
    }
    
    return profit;
};
