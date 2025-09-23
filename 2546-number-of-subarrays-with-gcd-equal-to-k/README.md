# [Number of Subarrays With GCD Equal to K](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/)  

## Dil

**JavaScript**

---

## Problem

Verilen bir tamsayı dizisi `nums` ve bir tamsayı `k` ile, **alt dizilerin GCD'si (en büyük ortak bölen)** `k` olanların sayısını bulun.  

**Kurallar:**  
- Alt diziler ardışık elemanlardan oluşur  
- GCD, alt dizideki tüm elemanların en büyük ortak bölenidir  
- Sadece GCD'si `k` olan alt diziler sayılır  

---

### Örnek

**Input:** `nums = [3,6,2,7,1], k = 2`  
**Output:** `4`  

Açıklama: Alt diziler `[6,2]`, `[2]`, `[2,7,1]`, `[2,7]` GCD = 2'dir.

---

## Çözüm Mantığı

- Her alt diziyi başlat ve GCD’yi güncelle  
- Eğer GCD `k` olursa sayacı artır  
- GCD `k`’dan küçük olursa daha uzun alt diziler GCD’yi `k` yapamaz → döngü kırılır  
- Bu yöntem O(n²) ile tüm alt dizileri kontrol eder  

---

## Kullanım
let nums = [3,6,2,7,1];
let k = 2;
console.log(subarrayGCD(nums, k)); 
// Output: 4
---
🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
Katkı ve geri bildirimler için açığım.
