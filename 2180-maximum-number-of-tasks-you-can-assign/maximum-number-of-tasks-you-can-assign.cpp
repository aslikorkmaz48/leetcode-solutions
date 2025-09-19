#include <vector>
#include <algorithm>
#include <deque>
using namespace std;

class Solution {
public:
    int maxTaskAssign(vector<int>& tasks, vector<int>& workers, int pills, int strength) {
        sort(tasks.begin(), tasks.end());
        sort(workers.begin(), workers.end());

        int left = 0, right = tasks.size();
        int res = 0;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (canAssign(tasks, workers, mid, pills, strength)) {
                res = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return res;
    }

private:
    bool canAssign(vector<int>& tasks, vector<int>& workers, int k, int pills, int strength) {
        deque<int> dq;
        int n = workers.size();
        int i = n - 1;
        for (int j = k - 1; j >= 0; --j) {
            while (i >= 0 && workers[i] + strength >= tasks[j]) {
                dq.push_front(workers[i]);
                i--;
            }
            if (dq.empty()) return false;
            if (dq.back() >= tasks[j]) {
                dq.pop_back(); // güçlü işçi
            } else {
                if (pills == 0) return false;
                pills--;
                dq.pop_front(); // hap ile güçlendirilmiş işçi
            }
        }
        return true;
    }
};
