Roman to Integer

Bu proje, verilen geçerli bir Roma rakamını tam sayıya dönüştüren bir çözümün açıklamasını içerir.
Problem, LeetCode’un Roman to Integer (Problem #13) sorusuna dayanmaktadır.

🧠 Problem Açıklaması

Roma rakamları aşağıdaki sembollerden oluşur:

Sembol	Değer
I	1
V	5
X	10
L	50
C	100
D	500
M	1000

Roma rakamları soldan sağa doğru büyükten küçüğe yazılır.
Ancak altı özel çıkarma durumu vardır:

I → V (5) ve X (10) önüne gelebilir → 4, 9

X → L (50) ve C (100) önüne gelebilir → 40, 90

C → D (500) ve M (1000) önüne gelebilir → 400, 900

Örnek:

"III" → 3

"LVIII" → 58

"MCMXCIV" → 1994

🔍 Mantık

Dizi soldan sağa taranır:

Bir harfin değeri kendisinden sonraki harften küçükse, bu değer çıkarılır.

Aksi hâlde eklenir.

Bu yöntem, tüm geçerli Roma rakamlarını doğru şekilde çözer.

⏱ Karmaşıklık

Zaman: O(n)

Bellek: O(1)

📌 Özellikler

Geçerli tüm Roma rakamları desteklenir.

1 ile 3999 arası tüm değerler doğru sonuç verir.

Algoritma hızlı, güvenilir ve sade mantıkla çalışır.
