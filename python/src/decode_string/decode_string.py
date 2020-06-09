class Solution:
    def decodeString(self, s: str) -> str:
        repeates = []
        groups = []
        result = ""
        num = ""
        numbers = "0123456789"

        for char in s:
            if char in numbers:
                num += char
            elif char == "[":
                repeates.append(int(num))
                groups.append("")
                num = ""
            elif char == "]":
                repeat = repeates.pop()
                group = groups.pop()
                if len(repeates) == 0:
                    result += group * repeat
                else:
                    groups[-1] = groups[-1] + (group * repeat)
            else:
                if len(repeates) == 0:
                    result += char
                else:
                    groups[-1] = groups[-1] + char

        return result
