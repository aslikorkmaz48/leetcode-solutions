# [Length of String After Transformations (Matrix Exponentiation)](https://leetcode.com/problems/length-of-string-after-transformations/)  

## Dil

**C#**

---

## Problem

Verilen bir string `s` ve bir tamsayı `t`, **harf dönüşümleri sonrası string’in uzunluğunu** bulun.  

**Kurallar:**  
- Her harf `a..y` bir sonraki harfe dönüşür  
- `'z'` harfi `"ab"` olarak dönüşür (veya genel kural nums dizisi ile belirlenir)  
- Bu dönüşüm `t` kez uygulanır  
- Sonuç çok büyük olabileceği için `10^9 + 7` ile mod alın  

---

### Örnek

**Input:** `s = "abc", t = 2`  
**Output:** `3`  

Açıklama: Matris üs alma yöntemiyle dönüşümler hızlıca hesaplanır ve toplam uzunluk bulunur.

---

## Çözüm Mantığı

- Harfler arası geçişleri matris `M` ile temsil et  
- Başlangıç vektörü = string’deki harf sayıları  
- `M^t` ile dönüşümleri `t` kez uygula (matrix exponentiation)  
- Sonuç = `M^t * vec`  
- Mod `10^9 + 7` alınarak büyük sayılarla çalışılır  

---

## Kullanım
string s = "abc";
int t = 2;
IList<int> nums = new List<int>(new int[26]); // örnek için
Solution sol = new Solution();
int result = sol.LengthAfterTransformations(s, t, nums);
// Output: 3

---
🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
Katkı ve geri bildirimler için açığım.
---



