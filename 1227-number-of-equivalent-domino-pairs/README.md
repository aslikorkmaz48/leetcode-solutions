# Domino Çiftlerini Sayma
Bu proje, verilen bir domino listesindeki eşdeğer domino çiftlerini saymak için bir Python çözümü sunmaktadır. İki domino `[a, b]` ve `[c, d]` eşdeğer kabul edilir **eğer** `a == c` ve `b == d` **veya** `a == d` ve `b == c` ise.

## Problem Tanımı
Verilen bir domino listesindeki `(i, j)` çiftlerinin sayısını döndürün; burada `0 <= i < j < dominoes.length` ve `dominoes[i]` dominoes[j] ile eşdeğerdir.

### Örnek 1:
Girdi: dominoes = [[1,2],[2,1],[3,4],[5,6]]
]()Çıktı: 1

### Örnek 2:
Girdi: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]

## Çözüm Yaklaşımı
- Her domino `[a, b]` için, çiftleri sıralayın böylece `[1,2]` ve `[2,1]` aynı şekilde işlenir.
- Her eşsiz domino için kaç kez tekrarlandığını takip etmek üzere bir `Counter` (sayıcı) kullanın.
- Her domino için, sıralanmış çiftinin mevcut sayısını sonuca ekleyin (çünkü önceki tüm tekrarlar geçerli çiftler oluşturur).
- Bu yaklaşım **O(n)** karmaşıklığı sağlar ve büyük girdiler için verimli çalışır.

## Kullanılan Dil
Python 3

## Teşekkür
Projeyi incelediğiniz için teşekkürler! Katkıları, önerileri ve geri bildirimleri memnuniyetle karşılarım.
