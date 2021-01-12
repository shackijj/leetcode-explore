/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let cur = m + n - 1;
    let n1 = m - 1;
    let n2 = n - 1;

    while(n1 >= 0 && n2 >= 0) {
        if (nums1[n1] > nums2[n2]) {
            nums1[cur] = nums1[n1];
            n1--;
        } else {
            nums1[cur] = nums2[n2];
            n2--;
        }
        cur--;
    }

    while (n2 >= 0) {
        nums1[cur] = nums2[n2];
        n2--;
        cur--;
    }
};

module.exports = merge;