#include <vector>
#include <queue>
using namespace std;

class Solution {
public:
    int trapRainWater(vector<vector<int>>& heightMap) {
        int m = heightMap.size();
        if (m == 0) return 0;
        int n = heightMap[0].size();
        if (n == 0) return 0;

        // Min-heap: {yükseklik, i, j}
        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> minHeap;

        vector<vector<bool>> visited(m, vector<bool>(n, false));

        // Tüm sınır hücrelerini heap’e ekle
        for (int i = 0; i < m; i++) {
            minHeap.push({heightMap[i][0], i, 0});
            minHeap.push({heightMap[i][n - 1], i, n - 1});
            visited[i][0] = visited[i][n - 1] = true;
        }
        for (int j = 1; j < n - 1; j++) {
            minHeap.push({heightMap[0][j], 0, j});
            minHeap.push({heightMap[m - 1][j], m - 1, j});
            visited[0][j] = visited[m - 1][j] = true;
        }

        int res = 0;
        vector<int> dirs = {1, 0, -1, 0, 1};

        // BFS + minHeap
        while (!minHeap.empty()) {
            auto cur = minHeap.top();
            minHeap.pop();
            int h = cur[0], x = cur[1], y = cur[2];

            for (int k = 0; k < 4; k++) {
                int nx = x + dirs[k], ny = y + dirs[k + 1];
                if (nx < 0 || nx >= m || ny < 0 || ny >= n || visited[nx][ny]) continue;

                visited[nx][ny] = true;
                // Eğer komşu daha küçükse, aradaki fark kadar su ekle
                res += max(0, h - heightMap[nx][ny]);

                // Komşunun yeni yüksekliği = max(kendi yüksekliği, bariyer yüksekliği)
                minHeap.push({max(heightMap[nx][ny], h), nx, ny});
            }
        }

        return res;
    }
};
