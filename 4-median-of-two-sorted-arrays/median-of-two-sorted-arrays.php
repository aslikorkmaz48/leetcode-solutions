<?php
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Float
     */
    function findMedianSortedArrays($nums1, $nums2) {
        $m = count($nums1);
        $n = count($nums2);

        // nums1 her zaman küçük dizi olsun
        if ($m > $n) {
            return $this->findMedianSortedArrays($nums2, $nums1);
        }

        $low = 0;
        $high = $m;

        while ($low <= $high) {
            $partitionX = intval(($low + $high) / 2);
            $partitionY = intval(($m + $n + 1) / 2) - $partitionX;

            $maxLeftX = ($partitionX == 0) ? PHP_INT_MIN : $nums1[$partitionX - 1];
            $minRightX = ($partitionX == $m) ? PHP_INT_MAX : $nums1[$partitionX];

            $maxLeftY = ($partitionY == 0) ? PHP_INT_MIN : $nums2[$partitionY - 1];
            $minRightY = ($partitionY == $n) ? PHP_INT_MAX : $nums2[$partitionY];

            if ($maxLeftX <= $minRightY && $maxLeftY <= $minRightX) {
                if (($m + $n) % 2 == 0) {
                    return (max($maxLeftX, $maxLeftY) + min($minRightX, $minRightY)) / 2.0;
                } else {
                    return floatval(max($maxLeftX, $maxLeftY));
                }
            } elseif ($maxLeftX > $minRightY) {
                $high = $partitionX - 1;
            } else {
                $low = $partitionX + 1;
            }
        }

        throw new Exception("Çözüm bulunamadı");
    }
}
?>
