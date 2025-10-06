class Solution {
    public boolean threeConsecutiveOdds(int[] arr) {
        int count = 0;

        for (int num : arr) {
            if (num % 2 == 1) {
                count++;
                if (count == 3) {
                    return true;
                }
            } else {
                count = 0; // Tek sayı değilse sayacı sıfırla
            }
        }

        return false; // Hiç üç ardışık tek sayı bulunamadıysa
    }
}
