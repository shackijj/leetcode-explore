from keys_and_rooms import Solution

s = Solution()

def test_case0():
    assert s.canVisitAllRooms([[1], [2], [3], []]) == True
def test_case1():
    assert s.canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]) == False
def test_case2():
    assert s.canVisitAllRooms([[1], [3, 0], [0], [2]]) == True
def test_case3():
    assert s.canVisitAllRooms([[]]) == True