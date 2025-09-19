# Dominoes Simulator

## Açıklama
Bu proje, dikey domino taşlarının fiziksel etkileşimlerini simüle eder. Başlangıçta bazı domino taşları sağa (`R`) veya sola (`L`) itilmiştir, diğerleri dikey durumdadır (`.`). Bu simülasyon, her domino taşının düşme yönünü ve etkileşimlerini kurallara göre hesaplar.

### Kurallar
- `L` : Sola devrilen domino, bitişik solundaki dominoyu iter.  
- `R` : Sağa devrilen domino, bitişik sağındaki dominoyu iter.  
- `.` : Duran domino.  
- Eğer bir domino aynı anda iki taraftan kuvvet görürse, dengelenir ve dik kalır.  
- Düşen bir domino, zaten devrilmiş veya devrilecek bir dominoya tekrar kuvvet uygulamaz.

## Örnek Kullanım

**Girdi:**  
dominoes = ".LR..LR..L.."

**Çıktı:**  
"LL.RR.LLRRLL.."

markdown
Kodu kopyala

## Kullanım Adımları
1. Başlangıç domino dizisini sağlayın.  
2. Fonksiyon domino dizisinin son durumunu döndürür.  
3. Sonuç, tüm domino taşlarının hangi yöne devrildiğini gösterir.

## Kullanılan Dil
JavaScript

## Özellikler
- Büyük domino dizilerini bile etkin bir şekilde işleyebilir (n ≤ 10^5).  
- Fiziksel domino etkilerini gerçekçi bir şekilde simüle eder.  
- Basit ve anlaşılır çıktı ile görselleştirme kolaydır.

## Teşekkür
Bu proje, algoritma ve problem çözme becerilerini geliştirmek isteyenler için hazırlandı. Katkı ve destek veren herkes
