class Solution {
public:
    bool isMatch(string s, string p) {
        int n = s.size(), m = p.size();

        // dp[i][j] = s[0..i-1] ile p[0..j-1] eşleşiyor mu?
        vector<vector<bool>> dp(n + 1, vector<bool>(m + 1, false));

        dp[0][0] = true; // boş string boş pattern ile eşleşir

        // İlk satırı '*' durumlarına göre doldur
        for (int j = 1; j <= m; j++) {
            if (p[j - 1] == '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {

                // Eğer karakter eşleşiyorsa veya '.' varsa
                if (p[j - 1] == s[i - 1] || p[j - 1] == '.') {
                    dp[i][j] = dp[i - 1][j - 1];
                }

                // '*' işleme
                else if (p[j - 1] == '*') {
                    // 1) '*' karakterinin önceki karakteri hiç kullanılmaz (sıfır tekrar)
                    dp[i][j] = dp[i][j - 2];

                    // 2) Eğer önceki karakter eşleşiyorsa (çoklu tekrar kullanımı)
                    if (p[j - 2] == s[i - 1] || p[j - 2] == '.') {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];
                    }
                }
            }
        }

        return dp[n][m];
    }
};
