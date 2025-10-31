
class Solution {

    /**
     * @param String $word
     * @param Integer $numFriends
     * @return String
     */
    function answerString($word, $numFriends) {
        $n = strlen($word);

        // 1) Eğer sadece 1 arkadaş varsa, tek parça bütündür (tüm kelime)
        if ($numFriends == 1) {
            return $word;
        }

        // 2) Genel en uzun izinli parça uzunluğu
        $maxLen = $n - $numFriends + 1;
        if ($maxLen < 1) $maxLen = 1; // güvenlik

        $best = "";

        if ($numFriends == 2) {
            // Sadece prefix ve suffix parçalar mümkündür.
            // En iyi prefix: en uzun prefix (uzun olan aynı başlangıçla daha büyük olur)
            $prefix = substr($word, 0, $n - 1);
            $best = $prefix;

            // Tüm suffixleri dene (başlangıç pozisyonu 1..n-1)
            for ($s = 1; $s < $n; $s++) {
                $candidate = substr($word, $s); // suf
                if (strcmp($candidate, $best) > 0) $best = $candidate;
            }

            return $best;
        }

        // numFriends >= 3
        // Her başlangıç için en iyi uzunluk, izin verilen en uzun uzunluktur (aynı başlangıç için daha uzun substring her zaman
        // kısa olandan lexicographically >= olur çünkü kısa olanın prefix'idir).
        for ($i = 0; $i < $n; $i++) {
            $len = min($maxLen, $n - $i);
            if ($len <= 0) continue;
            $candidate = substr($word, $i, $len);
            if (strcmp($candidate, $best) > 0) $best = $candidate;
        }

        return $best;
    }
}

// Örnek test
$sol = new Solution();
echo $sol->answerString("dbca", 2) . PHP_EOL; // -> "dbc"
echo $sol->answerString("gggg", 4) . PHP_EOL; // -> "g"
echo $sol->answerString("gh", 1) . PHP_EOL;   // -> "gh"
