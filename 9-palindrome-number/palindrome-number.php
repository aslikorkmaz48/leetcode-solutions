class Solution {

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x) {
        // Negatif sayılar palindrom olamaz.
        // 0 kendisi için palindromdur.
        if ($x < 0) return false;
        if ($x >= 0 && $x < 10) return true;

        // Sonu 0 ile biten (0 hariç) sayılar palindrom olamaz (ör. 10 -> 01 değil).
        if ($x % 10 == 0) return false;

        $reverted = 0;
        // Sadece sayının yarısını ters çeviriyoruz.
        while ($x > $reverted) {
            $reverted = $reverted * 10 + ($x % 10);
            // (int) cast'i kullanıyoruz; LeetCode ortamında daha güvenli çalışır.
            $x = (int)($x / 10);
        }

        // Tek/çift basamaklı uzunluk farklarını kontrol et
        return $x == $reverted || $x == (int)($reverted / 10);
    }
}
