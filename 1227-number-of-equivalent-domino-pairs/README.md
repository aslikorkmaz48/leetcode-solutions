Domino Çiftleri Sayacı

Bu proje , belirli bir domino listesindeki eşdeğer domino çiftlerinin sayısını saymak için bir Python çözümü içerir. İki domino [a, b]ve , ...[c, d]a == cb == d a == db == c

Sorun Açıklaması
Tam sayı çiftleri olarak temsil edilen bir domino listesi verildiğinde, ve'nin 'ye eşit olduğu (i, j)çift sayısını döndürün .0 <= i < j < dominoes.lengthdominoes[i]dominoes[j]

Örnek 1:
Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1
Örnek 2:
Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
Output: 3

Çözüm Yaklaşımı
Her domino için [a, b]çiftleri, [1,2]ve [2,1]aynı kabul edilecek şekilde sıralayın.
CounterHer bir domino taşının kaç kez göründüğünü takip etmek için a kullanın .
Her domino için, sıralanmış çiftinin geçerli sayısını sonuca ekleyin (çünkü önceki tüm oluşumlar geçerli çiftler oluşturur).
Bu dominonun sayısını artırın Counter.
Bu yaklaşım O(n) karmaşıklığı garanti eder ve büyük girdiler için verimlidir.

Dil
Python 3

Teşekkürler
Bu projeyi incelediğiniz için teşekkürler! Katkı ve önerilerinizi bekliyorum.
