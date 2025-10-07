# ✅ LeetCode - Üç Ardışık Tek Sayı (Three Consecutive Odds)

## 🔗 Soru Bağlantısı

[LeetCode 1550 - Three Consecutive Odds](https://leetcode.com/problems/three-consecutive-odds/)

---

## 🧾 Soru Açıklaması

Bir tamsayı dizisi `arr` veriliyor. Dizide art arda **üç tane tek sayı** olup olmadığını kontrol edin.

- Eğer dizide ardışık üç tek sayı varsa, sonuç `true` olmalıdır.
- Yoksa, sonuç `false` döndürülmelidir.

---

## 🧠 Kısıtlamalar

- Dizi uzunluğu: `1 <= arr.length <= 1000`
- Eleman değerleri: `1 <= arr[i] <= 1000`

---

## 🔍 Örnekler

- `arr = [2, 6, 4, 1]` → `false`  
  (Art arda üç tek sayı yok.)

- `arr = [1, 2, 34, 3, 4, 5, 7, 23, 12]` → `true`  
  (Art arda gelen üç tek sayı: [5, 7, 23])

---

## 💡 Çözüm Yaklaşımı

- Dizide ardışık olarak tek sayıların sayısını sayan bir sayaç kullanılır.
- Eğer bir sayı tekse sayaç artırılır, çiftse sayaç sıfırlanır.
- Sayaç değeri 3 olursa, art arda üç tek sayı bulunmuş demektir ve `true` döndürülür.
- Dizide ilerledikçe sayaç takip edilir, sonunda eğer sayaç 3'e ulaşmamışsa `false` sonucu döndürülür.

---

## ⏱ Performans

- Zaman karmaşıklığı: `O(n)` (Dizi bir kere taranır)
- Alan karmaşıklığı: `O(1)` (Sabit ek alan kullanılır)

---

## 📌 Notlar

- Problem tek geçişle ve minimum ekstra bellek kullanarak çözülebilir.
- Dizi sadece pozitif tam sayılardan oluşur.
- Bu problem özellikle ardışık koşulları takip etmeye yönelik temel algoritma pratikleri için idealdir.
