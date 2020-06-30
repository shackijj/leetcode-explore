from perfect_squares import Solution

s = Solution()

def test_squares_less_than():
    assert s.findAllSquaresLEQ(1) == {1}
    assert s.findAllSquaresLEQ(3) == {1}
    assert s.findAllSquaresLEQ(4) == {1, 4}
    assert s.findAllSquaresLEQ(5) == {1, 4}

def test_case0():
    assert s.numSquares(13) == 2
    assert s.numSquares(12) == 3
    assert s.numSquares(4) == 1
    assert s.numSquares(9) == 1
    assert s.numSquares(2) == 2
    assert s.numSquares(1) == 1