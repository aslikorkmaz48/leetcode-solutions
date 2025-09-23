# [Count Balanced Permutations](https://leetcode.com/problems/count-balanced-permutations/)  

## Dil

**JavaScript**

---

## Problem

Verilen bir string `num` içindeki rakamları kullanarak **çift ve tek pozisyonların toplamları eşit olacak şekilde** permutasyon sayısını bulun.  

**Kurallar:**  
- Rakamlar 0..9 arasında  
- Çift ve tek indekslerdeki rakamların toplamı eşit olmalı  
- Sonuç çok büyük olabileceği için `10^9 + 7` ile mod alın  

---

### Örnek

**Input:** `num = "1234"`  
**Output:** `4`  

Açıklama: Rakamları öyle diz ki çift ve tek pozisyonların toplamı eşit olsun. 4 farklı permutasyon mümkündür.

---

## Çözüm Mantığı

- Toplam rakamların çift olup olmadığını kontrol et  
- Toplam / 2 = hedef (target)  
- Faktöriyel ve ters faktöriyel (modulo) ile kombinasyonlar hesaplanır  
- Dinamik programlama (DP) ile rakamları çift pozisyonlara dağıt  
- Sonuç = DP sonucu × `mEven! * mOdd!` mod `10^9 + 7`  

---

## Kullanım

let num = "1234";
console.log(countBalancedPermutations(num)); 
// Output: 4

---

🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
Katkı ve geri bildirimler için açığım.
