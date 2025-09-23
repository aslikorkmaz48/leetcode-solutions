# [Make Two Arrays Similar](https://leetcode.com/problems/make-two-arrays-similar/)  

## Dil

**JavaScript**

---

## Problem

Verilen iki tamsayı dizisi `nums` ve `target`, dizileri **benzer hâle getirmek** için gereken minimum işlemleri bulun.  

**Kurallar:**  
- Bir işlem: iki elemanı seçip her birini ±2 olacak şekilde değiştirmek  
- Diziler **benzer** olduğunda, her pozisyondaki parite (tek/çift) eşleşir ve değerler aynı olur  

---

### Örnek

**Input:** `nums = [8,12,6], target = [2,14,10]`  
**Output:** `4`  

Açıklama: Diziyi benzer hâle getirmek için minimum 4 işlem gerekir.

---

## Çözüm Mantığı

- `nums` ve `target` dizilerini **tek ve çift olarak ayır**  
- Her grupta elemanları sırala  
- Farkların toplamını al ve 4’e böl (çünkü her işlem toplamda 4 birim değişiklik sağlar)  
- Bu yöntem minimum işlem sayısını verir  

---

## Kullanım

let nums = [8,12,6];
let target = [2,14,10];
console.log(makeSimilar(nums, target)); 
// Output: 4

---

🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
Katkı ve geri bildirimler için açığım.
