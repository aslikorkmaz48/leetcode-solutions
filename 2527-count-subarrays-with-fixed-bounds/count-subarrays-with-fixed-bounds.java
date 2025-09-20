class Solution {
    public long countSubarrays(int[] nums, int minK, int maxK) {
        long res = 0;
        int n = nums.length;
        
        int leftBound = -1;    // en son geçersiz elemanın indeksi
        int lastMin = -1;      // en son minK görülen index
        int lastMax = -1;      // en son maxK görülen index

        for (int i = 0; i < n; i++) {
            int val = nums[i];

            // Eğer değer sınır dışında ise pencere resetleniyor
            if (val < minK || val > maxK) {
                leftBound = i;
                lastMin = -1;
                lastMax = -1;
            }

            if (val == minK) lastMin = i;
            if (val == maxK) lastMax = i;

            // Eğer hem min hem max görülmüşse, katkı ekle
            if (lastMin != -1 && lastMax != -1) {
                res += Math.max(0, Math.min(lastMin, lastMax) - leftBound);
            }
        }
        return res;
    }
}
