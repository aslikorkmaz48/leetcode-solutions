# [Longest Alternating Subsequence](https://leetcode.com/problems/longest-alternating-subsequence/)  

## Dil

**Java**

---

## Problem

Verilen bir `words` dizisi ve her kelimeye karşılık gelen `groups` dizisi ile, **en uzun alternatif alt diziyi** bulun.  

**Kurallar:**  
- Alternatif alt dizi: Ardışık kelimelerin `groups` değerleri farklı olmalıdır  
- Ardışık aynı grup numarasına sahip kelimeler alt dizide sadece bir kez yer alır  

---

### Örnek

**Input:** `words = ["a","b","c","d"], groups = [0,1,1,0]`  
**Output:** `["a","b","d"]`  

Açıklama: "c" kelimesi grup tekrarı nedeniyle atlanır.

---

## Çözüm Mantığı

- İlk kelimeyi ekle ve `lastGroup` değerini sakla  
- Sonraki kelimelerde `groups[i] != lastGroup` ise ekle ve `lastGroup` güncelle  
- Bu yöntem tek geçişte en uzun alternatif alt diziyi bulur  

---

## Kullanım
String[] words = {"a","b","c","d"};
int[] groups = {0,1,1,0};
Solution s = new Solution();
List<String> result = s.getLongestSubsequence(words, groups);
// Output: ["a","b","d"]

---

🙏 Eğer bu proje işine yaradıysa yıldız bırakmayı unutma! ⭐
Katkı ve geri bildirimler için açığım.
