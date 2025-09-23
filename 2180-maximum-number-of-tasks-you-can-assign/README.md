# [Maximum Number of Tasks You Can Assign](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/)  

## Dil
C++

## Problem
Verilen `tasks` ve `workers` dizileri ile belirli sayıda **güçlendirme hapı** (`pills`) ve her hapın verdiği ek **güç** (`strength`) var.  
Amaç: **Mümkün olan maksimum görev sayısını** atamak.  
- İşçi görevi tamamlayabilmek için gücü ≥ görevin zorluğu olmalıdır.  
- Hap sadece bir işçiye uygulanabilir ve güce `strength` ekler.

**Örnek:**  
Input: `tasks = [3,5,8], workers = [7,1,4], pills = 1, strength = 3` → Output: `3`

## Çözüm Mantığı
- Görev ve işçiler sıralanır.  
- Binary search ile maksimum atanabilir görev sayısı bulunur.  
- Deque ile güçlü işçi veya hap kullanımı kontrol edilir.

## Kullanım
vector<int> tasks = {3,5,8};
vector<int> workers = {7,1,4};
int pills = 1;
int strength = 3;


Solution s;
int result = s.maxTaskAssign(tasks, workers, pills, strength); // Output: 3



🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
