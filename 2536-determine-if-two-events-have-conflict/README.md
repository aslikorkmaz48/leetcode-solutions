# [Checking Existence of Time Interval Overlap](https://leetcode.com/problems/checking-existence-of-time-interval-overlap/)  

## Dil

**JavaScript**

---

## Problem

Verilen iki etkinlik dizisi `event1` ve `event2`, her biri `[startTime, endTime]` formatında zamanları içeriyor.  
Amaç: **Bu iki etkinliğin zamanlarının çakışıp çakışmadığını** belirlemek.  

**Kurallar:**  
- Zamanlar `"HH:MM"` formatında verilir  
- Etkinlikler sadece bu zaman aralıkları boyunca gerçekleşir  
- Çakışma, iki etkinliğin herhangi bir zamanının kesişmesi durumunda geçerlidir  

---

### Örnek

**Input:** `event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]`  
**Output:** `true`  

Açıklama: İki etkinlik 02:00 zamanında kesişiyor.

---

## Çözüm Mantığı

- Zamanları string olarak karşılaştırmak yeterlidir (`"HH:MM"` formatı sözlük sıralamasıyla uyumludur)  
- Çakışma yoktur durumu: `event1` tamamen `event2` öncesinde veya `event2` tamamen `event1` öncesindedir  
- Bunun dışındaki tüm durumlar çakışmayı gösterir  

---

## Kullanım
let event1 = ["01:15","02:00"];
let event2 = ["02:00","03:00"];
console.log(haveConflict(event1, event2)); 
// Output: true
---
🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
Katkı ve geri bildirimler için açığım.
