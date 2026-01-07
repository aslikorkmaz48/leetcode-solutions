class Solution {
public:
    static const int MOD = 1e9 + 7;

    long long modPow(long long base, long long exp) {
        long long res = 1;
        while (exp > 0) {
            if (exp & 1) res = (res * base) % MOD;
            base = (base * base) % MOD;
            exp >>= 1;
        }
        return res;
    }

    vector<int> productQueries(int n, vector<vector<int>>& queries) {
        vector<int> exponents;

        // 1️⃣ n'in binary 1 olan bitlerini bul
        for (int i = 0; i < 31; i++) {
            if (n & (1 << i)) {
                exponents.push_back(i);
            }
        }

        // 2️⃣ Prefix sum
        int m = exponents.size();
        vector<long long> prefix(m);
        prefix[0] = exponents[0];
        for (int i = 1; i < m; i++) {
            prefix[i] = prefix[i - 1] + exponents[i];
        }

        // 3️⃣ Sorguları cevapla
        vector<int> ans;
        for (auto& q : queries) {
            int l = q[0], r = q[1];
            long long sumExp = prefix[r] - (l > 0 ? prefix[l - 1] : 0);
            ans.push_back(modPow(2, sumExp));
        }

        return ans;
    }
};
