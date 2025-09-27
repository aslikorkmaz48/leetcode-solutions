class Solution:
    def makeSimilar(self, nums, target):
        # Çift ve tekleri ayırıp sırala
        nums_even = sorted([x for x in nums if x % 2 == 0])
        nums_odd  = sorted([x for x in nums if x % 2 == 1])
        target_even = sorted([x for x in target if x % 2 == 0])
        target_odd  = sorted([x for x in target if x % 2 == 1])

        # Farkların toplamı
        total_diff = 0
        for a, b in zip(nums_even, target_even):
            total_diff += abs(a - b)
        for a, b in zip(nums_odd, target_odd):
            total_diff += abs(a - b)

        # Her işlem toplam farkı 4 azaltır
        return total_diff // 4

# Test (isteğe bağlı)
if __name__ == "__main__":
    print(Solution().makeSimilar([8,12,6], [2,14,10]))  # çıktı: 2
