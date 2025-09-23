# [Find All Even Numbers in an Array of Digits](https://leetcode.com/problems/find-all-even-numbers-from-digits/)  


## Dil

**JavaScript**

---

## Problem

Verilen bir `digits` dizisinden **3 basamaklı çift sayıları** bulun.  

**Kurallar:**  
- Her sayı dizideki farklı indexlerdeki rakamlardan oluşur  
- İlk basamak **0** olamaz  
- Son basamak **çift** olmalıdır  

---

### Örnek

**Input:** `[2,1,3,0]`  
**Output:** `[102,120,130,132,210,230,302,310,312,320]`  

Açıklama: Tüm olası 3 basamaklı sayılar oluşturulur, kurallara uymayanlar atılır ve benzersiz sayılar küçükten büyüğe sıralanır.

---

## Çözüm Mantığı

- 3 iç içe döngü ile farklı indexler seçilir  
- İlk basamak 0 ise veya son basamak tek ise sayı atlanır  
- Geçerli sayılar bir `Set` içine eklenir ve sonunda sıralanarak döndürülür  

---

## Kullanım

let digits = [2,1,3,0];
console.log(findEvenNumbers(digits)); 
// Output: [102,120,130,132,210,230,302,310,312,320]

---------🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
Katkı ve geri bildirimler için açığım.------------------
