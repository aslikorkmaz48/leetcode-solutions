class Solution {
    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer
     */
    function minSum($nums1, $nums2) {
        $sum1 = array_sum($nums1);
        $sum2 = array_sum($nums2);
        $zero1 = count(array_filter($nums1, fn($x) => $x == 0));
        $zero2 = count(array_filter($nums2, fn($x) => $x == 0));

        // Eğer her iki dizide de 0 yoksa
        if ($zero1 == 0 && $zero2 == 0) {
            return $sum1 == $sum2 ? $sum1 : -1;
        }

        // Eğer yalnızca nums1'de sıfır varsa
        if ($zero1 > 0 && $zero2 == 0) {
            $minSum1 = $sum1 + $zero1; // her 0 -> 1 olur
            if ($minSum1 > $sum2) return -1;
            // gerekirse son sıfırı fark kadar artırabiliriz
            return $sum2;
        }

        // Eğer yalnızca nums2'de sıfır varsa
        if ($zero2 > 0 && $zero1 == 0) {
            $minSum2 = $sum2 + $zero2;
            if ($minSum2 > $sum1) return -1;
            return $sum1;
        }

        // Her iki dizide de 0 varsa
        $minSum1 = $sum1 + $zero1;
        $minSum2 = $sum2 + $zero2;
        return max($minSum1, $minSum2);
    }
}
