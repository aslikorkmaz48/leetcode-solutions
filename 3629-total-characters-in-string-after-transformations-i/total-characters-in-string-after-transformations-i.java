class Solution {
    public int lengthAfterTransformations(String s, int t) {
        final int MOD = 1_000_000_007;
        long length = s.length();

        // Her karakterin, t dönüşümden sonra ne kadar uzayacağını hesapla
        // Bunu, karakterlerin uzunluk katkısını takip ederek yapacağız.
        long[] freq = new long[26];

        // İlk karakter frekanslarını say
        for (char c : s.toCharArray()) {
            freq[c - 'a']++;
        }

        for (int i = 0; i < t; i++) {
            long[] next = new long[26];

            for (int j = 0; j < 26; j++) {
                if (freq[j] == 0) continue;

                if (j == 25) { // z → "ab"
                    next[0] = (next[0] + freq[j]) % MOD;
                    next[1] = (next[1] + freq[j]) % MOD;
                    length = (length + freq[j]) % MOD; // z → ab → +1 uzunluk
                } else {
                    next[j + 1] = (next[j + 1] + freq[j]) % MOD;
                }
            }

            freq = next;
        }

        return (int) length;
    }
}
