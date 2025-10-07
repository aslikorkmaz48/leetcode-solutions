# İki Sayının Toplamı - Add Two Numbers

## Problem Açıklaması

İki adet ters sıralı bağlı liste veriliyor. Her bir düğüm, bir sayının basamağını temsil ediyor. Bu iki sayıyı toplayıp, sonucu yine ters sıralı bağlı liste olarak döndürmelisiniz.

## Girdi

- İki bağlı liste (`l1` ve `l2`).
- Her düğüm bir rakam içerir (0-9).
- Sayılar ters sıralıdır; listenin başı birler basamağıdır.

## Çıktı

- İki sayının toplamını temsil eden ters sıralı bağlı liste.

## Çözüm Yaklaşımı

- İki listeyi eş zamanlı baştan sona dolaşarak basamak basamak toplayın.
- Toplamı hesaplayıp elde varsa sonraki toplama aktarın.
- Bir listenin basamağı yoksa, 0 olarak alın.
- Son elde kalan varsa son düğüm olarak ekleyin.
- Sonuç yeni bağlı liste olarak döndürülür.

## Performans

- Zaman karmaşıklığı: O(max(m, n)) (m ve n listelerin uzunlukları)
- Alan karmaşıklığı: O(max(m, n)) (sonuç listesi için)

## Notlar

- Sahte baş düğüm (dummy head) kullanmak liste oluşturmayı kolaylaştırır.
- Elde işlemi toplama sırasında dikkatlice yönetilmelidir.
