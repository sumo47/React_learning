const array = [1, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const target = 11;

var twoSum = function (nums, target) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        ans.push(i);
        ans.push(j);
        return ans;
      }
    }
  }
};

console.log(twoSum(array, target));
