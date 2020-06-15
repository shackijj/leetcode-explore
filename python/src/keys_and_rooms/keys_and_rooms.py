from typing import List
from collections import deque

class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        target = {0}
        stack = list(rooms[0])

        while len(stack) != 0:
            next_key = stack.pop()
            target.add(next_key)
            new_keys = rooms[next_key]
            for key in new_keys:
                if key not in target:
                    stack.append(key)
        
        if (len(target) == len(rooms)):
            return True
        else:
            return False