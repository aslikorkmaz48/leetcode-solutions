from itertools import permutations

class Solution(object):
    def findEvenNumbers(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        result = set()
        
        for comb in permutations(digits, 3):
            if comb[0] == 0:   # başında sıfır olamaz
                continue
            if comb[-1] % 2 != 0:  # son rakam çift olmalı
                continue
            num = comb[0] * 100 + comb[1] * 10 + comb[2]
            result.add(num)
        
        return sorted(result)


# Örnek kullanım:
sol = Solution()
print(sol.findEvenNumbers([2,1,3,0]))   # [102,120,130,132,210,230,302,310,312,320]
print(sol.findEvenNumbers([2,2,8,8,2])) # [222,228,282,288,822,828,882]
print(sol.findEvenNumbers([3,7,5]))     # []
