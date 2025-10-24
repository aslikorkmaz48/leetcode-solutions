# Longest Palindromic Substring

Bu proje, verilen bir dizedeki en uzun palindromik alt diziyi bulmak için JavaScript ile yazılmış bir çözümdür.  
Amaç, dinamik veya merkez genişletme yaklaşımıyla O(n²) zaman karmaşıklığında en uzun palindromu tespit etmektir.  

## Kullanılan Teknolojiler
- JavaScript (ES6+)
- String Manipülasyonu

## Dosya Yapısı
- `solution.js`: Algoritmanın yer aldığı ana dosya.

## Çalıştırma
Node.js ortamında çalıştırabilirsiniz:
Açıklama
Kod, verilen dizenin her karakterini merkez kabul ederek olası palindromları genişletir.
Her genişletme adımında en uzun palindrom güncellenir ve sonuç döndürülür.
