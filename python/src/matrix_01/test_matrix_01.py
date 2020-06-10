from matrix_01 import Solution

s = Solution()

def test_0():
    input = [
        [0,0,0],
        [0,1,0],
        [0,0,0]
    ]
    output = [
        [0,0,0],
        [0,1,0],
        [0,0,0]
    ]
    assert s.updateMatrix(input) == output

def test_1():
    input = [
        [0,0,0],
        [0,1,0],
        [1,1,1]
    ]
    output = [
        [0,0,0],
        [0,1,0],
        [1,2,1]
    ]
    assert s.updateMatrix(input) == output

def test_2():
    input = [
        [0]
    ]
    output = [
        [0]
    ]
    assert s.updateMatrix(input) == output