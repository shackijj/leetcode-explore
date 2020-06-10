from typing import List
from collections import deque

class Solution:
    def updateMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        rows = len(matrix)
        cells = len(matrix[0])

        queue = deque()
        visited = set()
        for (r, row) in enumerate(matrix):
            for (c, _) in enumerate(row):
                if matrix[r][c] == 0:
                    queue.append((r, c))
                    visited.add((r, c))

        level = 0
        while len(queue) != 0:
            for _ in range(len(queue)):
                (r, c) = queue.popleft()

                matrix[r][c] = level

                # add neighbors
                top = (r - 1, c)
                if top[0] >= 0 and (top not in visited):
                    visited.add(top)
                    queue.append(top)

                right = (r, c + 1)
                if (right[1] < cells and right not in visited):
                    visited.add(right)
                    queue.append(right)

                bottom = (r + 1, c)
                if (bottom[0] < rows and bottom not in visited):
                    visited.add(bottom)
                    queue.append(bottom)

                left = (r, c - 1)
                if (left[1] >= 0 and left not in visited):
                    visited.add(left)
                    queue.append(left)

            level += 1


        return matrix