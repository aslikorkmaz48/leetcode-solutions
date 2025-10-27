<?php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function myAtoi($s) {
        // 32-bit signed integer sınırları
        $INT_MAX = 2147483647;
        $INT_MIN = -2147483648;

        // 1️⃣ Başta boşlukları temizle
        $s = ltrim($s);

        // Boş string kontrolü
        if ($s === "") return 0;

        $sign = 1;  // varsayılan pozitif
        $i = 0;
        $n = strlen($s);

        // 2️⃣ İşaret kontrolü
        if ($s[$i] === '+') {
            $i++;
        } elseif ($s[$i] === '-') {
            $sign = -1;
            $i++;
        }

        $num = 0;

        // 3️⃣ Sayı karakterlerini oku
        while ($i < $n && ctype_digit($s[$i])) {
            $digit = intval($s[$i]);

            // 4️⃣ Overflow kontrolü
            if ($num > intdiv($INT_MAX, 10) || ($num === intdiv($INT_MAX, 10) && $digit > 7)) {
                return $sign === 1 ? $INT_MAX : $INT_MIN;
            }

            $num = $num * 10 + $digit;
            $i++;
        }

        return $num * $sign;
    }
}
?>
