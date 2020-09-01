from solution import Solution

s = Solution()

def test_squares_less_than():
    assert s.run() == [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]