# [Maximum Frequency Elements](https://leetcode.com/problems/maximum-frequency-elements/)  

## Dil

**C++**

---

## Problem

Verilen bir tamsayı dizisi `nums`, **en sık tekrar eden elemanların toplam tekrar sayısını** bulun.  

**Kurallar:**  
- Elemanların sıklığı hesaplanır  
- En sık tekrar eden elemanlar birden fazla ise, tüm tekrarları topla  

---

### Örnek

**Input:** `nums = [1,2,2,3,1]`  
**Output:** `4`  

Açıklama: `1` ve `2` en sık tekrar eden elemanlar ve toplam tekrar sayısı = 2 + 2 = 4

---

## Çözüm Mantığı

- `unordered_map` ile her elemanın frekansını say  
- Maksimum frekansı bul  
- Maksimum frekansa sahip tüm elemanların tekrarlarını topla  
- Sonuç toplam tekrar sayısı olur  

---

## Kullanım
vector<int> nums = {1,2,2,3,1};
Solution s;
int result = s.maxFrequencyElements(nums);
// Output: 4
---
🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
Katkı ve geri bildirimler için açığım.
