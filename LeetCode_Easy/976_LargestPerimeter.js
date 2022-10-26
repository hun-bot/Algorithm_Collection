var largestPerimeter = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= nums[i - 1] + nums[i - 2]) {
      continue;
    } else if (nums[i] < nums[i - 1] + nums[i - 2]) {
      return nums[i] + nums[i - 1] + nums[i - 2];
    }
    return 0;
  }
};
