from decode_string import Solution

s = Solution()

def test_case0():
    assert s.decodeString("10[a2[c]]") == "accaccaccaccaccaccaccaccaccacc"
def test_case1():
    assert s.decodeString("3[a2[c]]") == "accaccacc"
def test_case2():
    assert s.decodeString("3[a]2[bc]") == "aaabcbc"
def test_case3():
    assert s.decodeString("2[abc]3[cd]ef") == "abcabccdcdcdef"
def test_case4():
    assert s.decodeString("abc3[cd]xyz") == "abccdcdcdxyz"