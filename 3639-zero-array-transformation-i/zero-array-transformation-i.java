class Solution {
    public boolean isZeroArray(int[] nums, int[][] queries) {
        int n = nums.length;
        int[] freq = new int[n + 1]; // Fark dizisi kullanacağız

        // Her sorguyu freq fark dizisine ekle
        for (int[] q : queries) {
            int l = q[0], r = q[1];
            freq[l]++;        // Başlangıçta +1
            if (r + 1 < n) freq[r + 1]--; // Bitişte -1
        }

        // Fark dizisinden prefix toplam ile her indeksin kaç sorguda olduğunu bul
        for (int i = 1; i < n; i++) {
            freq[i] += freq[i - 1];
        }

        // Şimdi kontrol et
        for (int i = 0; i < n; i++) {
            if (nums[i] > freq[i]) return false; // Yeterli sorgu yoksa
        }

        return true;
    }
}
