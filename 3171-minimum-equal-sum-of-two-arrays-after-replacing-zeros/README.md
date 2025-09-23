# [Minimum Sum After Replacing Zeros](https://leetcode.com/problems/minimum-sum-after-replacing-zeros/)  

## Dil

**JavaScript**

---

## Problem

Verilen iki tamsayı dizisi `nums1` ve `nums2`, içlerindeki **0 değerlerini pozitif tamsayılarla değiştirerek** her iki dizinin toplamını eşitleyin ve **minimum toplam değeri** bulun.  

**Kurallar:**  
- Sıfırlar pozitif tamsayılarla değiştirilebilir  
- Diziler eşit toplamlı hâle getirilmeli  
- Eğer mümkün değilse `-1` döndür  

---

### Örnek

**Input:** `nums1 = [1,0,2], nums2 = [2,0,1]`  
**Output:** `4`  

Açıklama: Sıfırlar uygun şekilde değiştirildiğinde her iki dizinin toplamı 4 olur.

---

## Çözüm Mantığı

- Her dizide sıfır ve toplam değerlerini hesapla  
- Dizinin alabileceği en küçük toplam = mevcut toplam + sıfır sayısı  
- Maksimum bu iki minimum toplamı M olarak belirle  
- Eğer sıfır yoksa ve toplam M’ye eşit değilse çözüm yok → -1  
- Aksi halde M minimum toplam sonucu olur  

---

## Kullanım
let nums1 = [1,0,2];
let nums2 = [2,0,1];
console.log(minSum(nums1, nums2)); 
// Output:4

---
🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
Katkı ve geri bildirimler için açığım.
