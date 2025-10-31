# Smallest Equivalent String - LeetCode Solution

Bu proje, LeetCode üzerinde bulunan "Smallest Equivalent String" probleminin çözümünü içerir. Problem, verilen iki eşdeğer karakter dizisi ve bir temel string kullanarak, temel stringi sözlüksel olarak en küçük eşdeğer karakter dizisine dönüştürmeyi amaçlar.

---

## 🔹 Problem Tanımı

Verilenler:

- `s1` ve `s2`: Aynı uzunlukta iki string. Her `s1[i]` ve `s2[i]` eşdeğer karakterlerdir.
- `baseStr`: Eşdeğer karakterler kullanılarak dönüştürülecek temel string.

Kurallar:

- **Refleksivite:** `a == a`  
- **Simetri:** `a == b` ise `b == a`  
- **Geçişlilik:** `a == b` ve `b == c` ise `a == c`  

Amaç: `baseStr`'i sözlüksel olarak en küçük eşdeğer stringe dönüştürmek.

---

## 💻 Çözüm Yöntemi

Bu çözüm **Union-Find (Disjoint Set)** veri yapısı kullanır:

1. Her karakter başlangıçta kendi parent’ıdır.
2. `s1` ve `s2` dizileri ile eşdeğer karakterler birleştirilir (`union` işlemi).
3. `baseStr`'in her karakteri, kendi en küçük eşdeğer parent karakteri ile değiştirilir.
4. Sonuç olarak sözlüksel olarak en küçük eşdeğer string elde edilir.

---

## 🔹 Örnekler
sol = Solution()
print(sol.smallestEquivalentString("parker", "morris", "parser"))  # Çıktı: "makkek"
print(sol.smallestEquivalentString("merhaba", "dünya", "tut"))     # Çıktı: "hdld"
print(sol.smallestEquivalentString("leetcode", "programlar", "kaynak"))  # Çıktı: "aauaaaa"


## 📌 Kullanılan Teknikler

- Python 3
- Union-Find (Disjoint Set)
- Path Compression
- Sözlüksel sıralama

## 📂 Profilim

- GitHub: [aslikorkmaz48](https://github.com/aslikorkmaz48)  
- LinkedIn: [Aslı Korkmaz](https://www.linkedin.com/in/asl%C4%B1korkmaz/)

