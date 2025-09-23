# [Length of String After Transformations](https://leetcode.com/problems/length-of-string-after-transformations/)  

## Dil

**JavaScript**

---

## Problem

Verilen bir string `s` ve bir tamsayı `t`, **belirli dönüşümler sonrası string’in uzunluğunu** bulun.  

**Kurallar:**  
- Her harf `a..y` bir sonraki harfe dönüşür  
- `z` harfi `"ab"` olarak dönüşür  
- Bu dönüşüm `t` kez uygulanır  
- Sonuç çok büyük olabileceği için `10^9 + 7` ile mod al  

---

### Örnek

**Input:** `s = "abc", t = 2`  
**Output:** `3`  

Açıklama: Her dönüşüm sonrası harfler değişir, sonunda toplam uzunluk hesaplanır.

---

## Çözüm Mantığı

- Dinamik programlama (DP) kullanılır  
- Sadece iki satır saklanır (rolling array)  
- Her adımda harfler bir sonraki harfe veya `'z'` için `"ab"`’ye dönüşür  
- Son adımda her karakterin katkısı toplanır ve mod alınır  

---

## Kullanım
let s = "abc";
let t = 2;
console.log(lengthAfterTransformations(s, t)); 
// Output: 3

---
🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
Katkı ve geri bildirimler için açığım.
