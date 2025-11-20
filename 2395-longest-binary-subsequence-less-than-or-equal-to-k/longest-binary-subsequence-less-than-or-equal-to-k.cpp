#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int longestSubsequence(string s, int k) {
        int n = s.size();
        long long value = 0;      // şu ana kadar oluşturulan ikili sayının değeri
        int result = 0;          // alınan karakter sayısı (alt dizi uzunluğu)
        int bitPos = 0;          // şu ana kadar eklenen karakter sayısı -> bir sonraki eklenen bitin pozisyonu

        // Sağdan sola doğru git
        for (int i = n - 1; i >= 0; --i) {
            if (s[i] == '0') {
                // 0 her zaman eklenebilir; değeri değiştirmez ama bit pozisyonunu "kullanır"
                result++;
                bitPos++;
            } else { // '1'
                // Eğer bitPos çok büyükse (overflow riskine karşı), 1'i ekleyemeyeceğiz
                if (bitPos < 63) {
                    unsigned long long add = (1ULL << bitPos);
                    if ((unsigned long long)value + add <= (unsigned long long)k) {
                        value += add;
                        result++;
                        bitPos++;
                    }
                    // eklenmiyorsa atla; bitPos artmaz
                }
                // bitPos >= 63 ise add çok büyük; kesinlikle eklenemez -> atla
            }
        }

        return result;
    }
};
