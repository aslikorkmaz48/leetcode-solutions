
class Solution {

    /**
     * @param Integer $x
     * @return Integer
     */
    function reverse($x) {
        // 32-bit signed int sınırları
        $INT_MAX = 2147483647;
        $INT_MIN = -2147483648;

        $rev = 0;

        while ($x != 0) {
            // son basamak (negatif sayılar için de doğru sonuç verir)
            $pop = $x % 10;
            // bölmeyi intdiv ile yap, böylece tam sayı bölme (sıfıra doğru trunc) kullanılır
            $x = intdiv($x, 10);

            // overflow kontrolü (pozitif yön)
            if ($rev > intdiv($INT_MAX, 10) || ($rev == intdiv($INT_MAX, 10) && $pop > 7)) {
                return 0;
            }
            // overflow kontrolü (negatif yön)
            if ($rev < intdiv($INT_MIN, 10) || ($rev == intdiv($INT_MIN, 10) && $pop < -8)) {
                return 0;
            }

            $rev = $rev * 10 + $pop;
        }

        return $rev;
    }
}
