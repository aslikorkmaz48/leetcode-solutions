from typing import List
from collections import Counter

class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        count = Counter()
        res = 0
        
        for a, b in dominoes:
            key = tuple(sorted([a, b]))  # [a,b] ve [b,a] aynı sayılır
            res += count[key]            # Daha önce kaç tane benzer çift varsa ekle
            count[key] += 1              # Bu çifti sayıya ekle
        
        return res
