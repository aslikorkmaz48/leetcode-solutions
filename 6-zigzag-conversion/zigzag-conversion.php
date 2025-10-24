
class Solution {

    /**
     * @param String $s
     * @param Integer $numRows
     * @return String
     */
    function convert($s, $numRows) {
        if ($numRows == 1 || strlen($s) <= $numRows) {
            return $s;
        }

        $rows = array_fill(0, $numRows, "");
        $currentRow = 0;
        $goingDown = false;

        for ($i = 0; $i < strlen($s); $i++) {
            $rows[$currentRow] .= $s[$i];

            // yön değiştir (üst veya alt satıra ulaşıldıysa)
            if ($currentRow == 0 || $currentRow == $numRows - 1) {
                $goingDown = !$goingDown;
            }

            // yönüne göre satır değiştir
            $currentRow += $goingDown ? 1 : -1;
        }

        // tüm satırları birleştirip döndür
        return implode("", $rows);
    }
}
