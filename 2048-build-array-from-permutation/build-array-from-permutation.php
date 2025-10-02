class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function buildArray($nums) {
        $n = count($nums);
        $ans = [];
        for ($i = 0; $i < $n; $i++) {
            $ans[$i] = $nums[$nums[$i]];
        }
        return $ans;
    }
}
