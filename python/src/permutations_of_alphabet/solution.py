class Solution:
    def run(self) -> [[int]]:
        result = []

        def create_permutation(nums, perm):
            if len(nums) == 1:
                perm_copy = perm.copy()
                perm_copy.append(nums[0])
                result.append(perm_copy)
            else:
                for n in nums:
                    nums_copy = nums.copy()
                    nums_copy.remove(n)
                    perm_copy = perm.copy()
                    perm_copy.append(n)
                    create_permutation(nums_copy, perm_copy)

        create_permutation([1, 2, 3], [])

        return result
