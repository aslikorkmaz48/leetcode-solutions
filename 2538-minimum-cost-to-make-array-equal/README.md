# [Minimum Cost to Make Array Equal](https://leetcode.com/problems/minimum-cost-to-make-array-equal/)  

## Dil

**JavaScript**

---

## Problem

Verilen iki dizi:  

- `nums` → her elemanın değeri  
- `cost` → her elemanın değişim maliyeti  

Amaç: **Tüm `nums` elemanlarını eşitlemek için gereken minimum toplam maliyeti** bulun.  

**Kurallar:**  
- Bir elemanı `x` kadar değiştirmek için maliyet: `cost[i] * |nums[i] - x|`  
- Hedef değer, maliyeti minimum yapan herhangi bir tamsayı olabilir  

---

### Örnek

**Input:** `nums = [1,3,5,2], cost = [2,3,1,14]`  
**Output:** `8`  

Açıklama: Tüm sayıları `2` veya `3` gibi ağırlıklı median üzerinden eşitlemek minimum maliyeti verir.

---

## Çözüm Mantığı

- `nums` ve `cost` çiftlerini birleştirip `nums` değerine göre sırala  
- Toplam ağırlıklı medianı (cost ile ağırlıklı orta değer) bul  
- Her elemanı median değerine getirmenin maliyeti hesaplanır  
- Bu yöntem, minimum toplam maliyeti sağlar  

---

## Kullanım
let nums = [1,3,5,2];
let cost = [2,3,1,14];
console.log(minCost(nums, cost)); 
// Output: 8

---
🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
Katkı ve geri bildirimler için açığım.
