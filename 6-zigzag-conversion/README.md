# Zigzag Conversion (LeetCode #6)

Bu proje, verilen bir dizeyi belirli sayıda satır ile zigzag (zikzak) deseninde yazıp satır satır okuyarak yeniden birleştiren bir PHP çözümünü içerir.

## Kullanılan Teknolojiler
- PHP 7+
- Dizi ve string manipülasyonu

## Dosya Yapısı
- `Solution.php`: LeetCode uyumlu `class Solution` yapısı ile algoritma içerir.

## Kullanım
LeetCode platformunda `convert` fonksiyonu, verilen dize ve satır sayısı parametreleri ile otomatik test edilebilir.

## Açıklama
- Algoritma, her karakteri satırlara sırayla yerleştirir.
- Üst veya alt satıra ulaşıldığında yön değiştirir (yukarı/aşağı).
- Tüm satırlar birleştirilerek sonuç döndürülür.
- Zaman karmaşıklığı: O(n)
- Bellek karmaşıklığı: O(numRows)
