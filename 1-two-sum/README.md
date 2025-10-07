# ✅ LeetCode - İki Sayının Toplamı (Two Sum)

## 🔗 Soru Bağlantısı

[LeetCode 1 - Two Sum](https://leetcode.com/problems/two-sum/)

---

## 🧾 Soru Açıklaması

Bir tamsayı dizisi `nums` ve bir hedef sayı `target` verilir. Dizideki iki farklı sayının toplamı `target` değerine eşit olmalıdır.

- Bu iki sayının indeksleri bulunup bir dizi olarak döndürülmelidir.
- Aynı eleman iki kez kullanılamaz.
- Problemin garantisi: En az bir çözüm mutlaka vardır.

---

## 🧠 Kısıtlamalar

- Dizi uzunluğu: `2 <= nums.length <= 10,000`
- Elemanlar: `-10^9 <= nums[i] <= 10^9`
- Hedef sayı: `-10^9 <= target <= 10^9`
- Sadece bir geçerli çözüm vardır.

---

## 🔍 Örnekler

- Girdi: `nums = [2, 7, 11, 15], target = 9`  
  Çıktı: `[0, 1]`  
  Açıklama: `nums[0] + nums[1] = 2 + 7 = 9`

- Girdi: `nums = [3, 2, 4], target = 6`  
  Çıktı: `[1, 2]`

---

## 💡 Çözüm Yaklaşımı

- Her elemanı ve indeksini hızlıca bulmak için bir **hash map** (anahtar-değer yapısı) kullanılır.
- Dizide ilerlerken, `target` - `nums[i]` değerinin önceden map’te olup olmadığı kontrol edilir.
- Eğer varsa, o iki sayı toplamı hedefler ve indeksler döndürülür.
- Yoksa, mevcut sayı ve indeksi map’e eklenir.
- Bu sayede problemi `O(n)` zaman ve `O(n)` alan karmaşıklığı ile çözmek mümkün olur.

---

## ⏱ Performans

- Zaman Karmaşıklığı: `O(n)`  
- Alan Karmaşıklığı: `O(n)`

---

## 📌 Notlar

- Hash map kullanımı, tamamlayıcı sayıyı hızlıca kontrol etmeyi sağlar.
- İndekslerin sırası genellikle problem için önemli değildir.
- Her zaman geçerli en erken bulunan çift çözüm olarak kabul edilir.
