var minDeletionSize = function (strs) {
  let n = strs.length;
  let m = strs[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (strs[j][i] < strs[j - 1][i]) {
        count++;
        break;
      }
    }
  }
  return count;
};

minDeletionSize(["cba", "daf", "ghi"]);
