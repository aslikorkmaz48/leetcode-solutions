# Zero Array Transformation

Bu proje, bir tamsayı dizisini verilen sorgular doğrultusunda tamamen sıfırlayıp sıfırlayamayacağımızı kontrol eder. Her sorgu `[li, ri]` aralığında seçilen indekslerin değerlerini 1 azaltır ve amaç diziyi **Zero Array** haline getirmektir.

---

## Kullanım

Solution solution = new Solution();
int[] nums = {1,0,1};
int[][] queries = {{0,2}};
boolean result = solution.isZeroArray(nums, queries);
System.out.println(result); // true

Özellikler
Büyük veri setleri ile çalışabilir.
Fark dizisi veya segment tree teknikleri ile optimize edilebilir.
Sorgular sırasıyla uygulanır ve negatif değer oluşursa false döndürülür.

Kısıtlar
1 ≤ nums.length ≤ 10^5
0 ≤ nums[i] ≤ 10^5
1 ≤ queries.length ≤ 10^5
0 ≤ li ≤ ri < nums.length


