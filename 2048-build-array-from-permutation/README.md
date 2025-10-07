# 📘 LeetCode - Build Array from Permutation

## 🔗 Soru Bağlantısı

[LeetCode 1920 - Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation/)

---

## 🧾 Soru Açıklaması

Bir tamsayı dizisi `nums` veriliyor. Bu diziyi kullanarak, aşağıdaki kurala göre yeni bir dizi `ans` oluşturmanız isteniyor:

> `ans[i] = nums[nums[i]]` olacak şekilde, `ans` dizisini döndürün.

### Özellikler:
- `nums` dizisi 0'dan `n - 1`'e kadar **geçerli indeksleri** içeren bir **permütasyondur**.
- Her eleman başka bir elemanı işaret eder.

---

## 🔍 Örnekler

### Örnek 1:
- **Girdi:** `nums = [0, 2, 1, 5, 3, 4]`  
- **Çıktı:** `[0, 1, 2, 4, 5, 3]`  
- **Açıklama:**  
  - `ans[0] = nums[nums[0]] = nums[0] = 0`  
  - `ans[1] = nums[nums[1]] = nums[2] = 1`  
  - ...

### Örnek 2:
- **Girdi:** `nums = [5, 0, 1, 2, 3, 4]`  
- **Çıktı:** `[4, 5, 0, 1, 2, 3]`

---

## 📌 Kısıtlamalar

- `1 <= nums.length <= 1000`
- `0 <= nums[i] < nums.length`
- `nums` dizisi bir permütasyondur.

---

## 💡 Çözüm Yaklaşımı

1. `nums` dizisini baştan sona dolaş.
2. Her indeks için `ans[i] = nums[nums[i]]` değerini hesapla.
3. Yeni dizi oluşturulup döndürülür.

---

## ⏱ Zaman ve Alan Karmaşıklığı

- **Zaman:** `O(n)` — Diziyi yalnızca bir kez dolaşmak yeterlidir.
- **Alan:** `O(n)` — Yeni oluşturulan dizi için ek alan gerekir.

---

## 🧠 Notlar

- Bu problem, dizilerle indeksleme işlemlerini anlamak için temel bir örnektir.
- `nums[nums[i]]` ifadesi ile dolaylı indeksleme yapılır.
- Soruda belirtilen "permütasyon" garantisi sayesinde, tüm indekslerin geçerli olduğu varsayılabilir.

