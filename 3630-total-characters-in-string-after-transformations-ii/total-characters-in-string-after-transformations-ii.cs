public class Solution {
    const int MOD = 1000000007;

    public int LengthAfterTransformations(string s, int t, IList<int> nums) {
        int n = 26;
        // M[next, i] = P(i -> next)
        long[,] M = new long[n, n];
        for (int i = 0; i < n; i++) {
            for (int step = 1; step <= nums[i]; step++) {
                int next = (i + step) % n;
                M[next, i] = (M[next, i] + 1) % MOD; // dikkat: satır=next, sütun=i
            }
        }

        // başlangıç vektörü (sütun vektörü)
        long[] vec = new long[n];
        foreach (char c in s) vec[c - 'a'] = (vec[c - 'a'] + 1) % MOD;

        // Mt = M^t
        long[,] Mt = MatrixPower(M, t);
        // result = Mt * vec
        long[] res = Multiply(Mt, vec);

        long ans = 0;
        for (int i = 0; i < n; i++) ans = (ans + res[i]) % MOD;
        return (int)ans;
    }

    private long[,] MatrixMultiply(long[,] A, long[,] B) {
        int n = A.GetLength(0);
        long[,] C = new long[n, n];
        for (int i = 0; i < n; i++) {
            for (int k = 0; k < n; k++) {
                if (A[i, k] == 0) continue;
                long aik = A[i, k];
                for (int j = 0; j < n; j++) {
                    if (B[k, j] == 0) continue;
                    C[i, j] = (C[i, j] + aik * B[k, j]) % MOD;
                }
            }
        }
        return C;
    }

    private long[,] MatrixPower(long[,] M, int exp) {
        int n = M.GetLength(0);
        long[,] res = new long[n, n];
        for (int i = 0; i < n; i++) res[i, i] = 1;

        long[,] baseM = (long[,])M.Clone();
        while (exp > 0) {
            if ((exp & 1) == 1) res = MatrixMultiply(res, baseM);
            baseM = MatrixMultiply(baseM, baseM);
            exp >>= 1;
        }
        return res;
    }

    private long[] Multiply(long[,] M, long[] vec) {
        int n = M.GetLength(0);
        long[] outv = new long[n];
        for (int i = 0; i < n; i++) {
            long sum = 0;
            for (int j = 0; j < n; j++) {
                if (vec[j] == 0 || M[i, j] == 0) continue;
                sum = (sum + M[i, j] * vec[j]) % MOD;
            }
            outv[i] = sum;
        }
        return outv;
    }
}
