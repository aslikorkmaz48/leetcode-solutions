# [Count Subarrays With Fixed Bounds](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/)  

## Dil
**Java**

---

## Problem

Verilen bir tamsayı dizisi `nums` ve iki sabit `minK` ve `maxK` ile, her alt dizide **minK ve maxK değerlerini kapsayan** alt dizilerin sayısını bulun.  
**Kurallar:**  
- Alt diziler ardışık elemanlardan oluşur  
- Alt dizide `minK` ve `maxK` mutlaka bulunmalıdır  
- Alt dizideki tüm elemanlar `minK` ve `maxK` sınırları arasında olmalıdır  

---

### Örnek

**Input:** `nums = [1,3,5,2,7,5], minK = 1, maxK = 5`  
**Output:** `2`  

Açıklama: Geçerli alt diziler `[1,3,5]` ve `[5,2,7,5]` gibi `minK` ve `maxK` içerir ve sınırlar içindedir.

---

## Çözüm Mantığı
- Tek geçişli bir pencere yöntemi ile çözülür  
- `leftBound` → en son geçersiz elemanın indeksi  
- `lastMin` → en son `minK` görülen indeks  
- `lastMax` → en son `maxK` görülen indeks  
- Her adımda hem `minK` hem `maxK` görülmüşse katkı eklenir  

---

## Kullanım
int[] nums = {1,3,5,2,7,5};
int minK = 1;
int maxK = 5;
Solution s = new Solution();
long result = s.countSubarrays(nums, minK, maxK);
// Output: 2
                                         🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
Katkı ve geri bildirimler için açığım.
