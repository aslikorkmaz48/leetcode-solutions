# [Sort Colors (Dutch National Flag Problem)](https://leetcode.com/problems/sort-colors/)  

## Dil

**C++**

---

## Problem

Verilen bir `nums` dizisi yalnızca 0, 1 ve 2 değerlerinden oluşur. Diziyi **renk sırasına göre** (0, 1, 2) **yerinde** sıralayın.  

**Kurallar:**  
- Diziyi ekstra alan kullanmadan (in-place) sırala  
- 0 → kırmızı, 1 → beyaz, 2 → mavi olarak düşün  

---

### Örnek

**Input:** `nums = [2,0,2,1,1,0]`  
**Output:** `[0,0,1,1,2,2]`  

Açıklama: Tüm elemanlar sıralandı, ekstra dizi kullanılmadı.

---

## Çözüm Mantığı

- Üçlü gösterge (low, mid, high) kullan  
- `nums[mid] == 0` → low ile takas et, low ve mid artır  
- `nums[mid] == 1` → mid artır  
- `nums[mid] == 2` → high ile takas et, high azalt  
- Döngü bitene kadar işlemi tekrarla (Dutch National Flag algoritması)  

---

## Kullanım

vector<int> nums = {2,0,2,1,1,0};
Solution s;
s.sortColors(nums);
// Output: [0,0,1,1,2,2]

---

🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
Katkı ve geri bildirimler için açığım.
