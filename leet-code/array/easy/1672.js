/*
  https://leetcode.com/problems/richest-customer-wealth/description/
  1672. Richest Customer Wealth
*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function (accounts) {
  const sumArr = [];

  accounts.forEach((account) => {
    const sum = account.reduce((a, money) => a + money);
    sumArr.push(sum);
  });

  return Math.max(...sumArr);
};
