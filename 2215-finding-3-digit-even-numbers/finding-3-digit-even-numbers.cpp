#include <vector>
#include <set>
using namespace std;

class Solution {
public:
    vector<int> findEvenNumbers(vector<int>& digits) {
        set<int> result; // benzersiz sayılar için

        int n = digits.size();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    if (i == j || j == k || i == k) continue; // aynı elemanı iki kez kullanma

                    int a = digits[i], b = digits[j], c = digits[k];
                    if (a == 0) continue; // başında 0 olamaz
                    if (c % 2 != 0) continue; // çift değilse geç

                    int num = a * 100 + b * 10 + c;
                    result.insert(num);
                }
            }
        }

        // set'i vektöre dönüştür (zaten sıralıdır)
        return vector<int>(result.begin(), result.end());
    }
};
