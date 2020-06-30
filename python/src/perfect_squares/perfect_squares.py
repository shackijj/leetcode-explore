import math
from collections import deque

class Solution:
    def findAllSquaresLEQ(self, n: int) -> [int]:
        return {x * x for x in range(1, int(math.sqrt(n)) + 1)}
    def numSquares(self, n: int) -> int:
        allSquares = self.findAllSquaresLEQ(n)
        queue = deque(allSquares)
        visited = allSquares.copy()
        if n in visited:
            return 1

        level = 2
        while len(queue) != 0:
            for _ in range(0, len(queue)):
                s = queue.popleft()
                for square in allSquares:
                    ns = s + square
                    if ns == n:
                        return level
                    if ns <= n and ns not in visited:
                        queue.append(ns)
                        visited.add(ns)
            level += 1
