class Solution {
    /**
     * @param Integer[][] $moveTime
     * @return Integer
     */
    function minTimeToReach($moveTime) {
        $n = count($moveTime);
        $m = count($moveTime[0]);
        $INF = PHP_INT_MAX;

        $dist = array_fill(0, $n, array_fill(0, $m, $INF));
        $dist[0][0] = 0;

        $pq = new SplPriorityQueue();
        $pq->insert([0, 0], 0);

        $dirs = [[1,0],[-1,0],[0,1],[0,-1]];

        while (!$pq->isEmpty()) {
            list($x, $y) = $pq->extract();
            $t = $dist[$x][$y];

            if ($x == $n - 1 && $y == $m - 1) return $t;

            foreach ($dirs as $d) {
                $nx = $x + $d[0];
                $ny = $y + $d[1];
                if ($nx < 0 || $ny < 0 || $nx >= $n || $ny >= $m) continue;

                // DÜZELTİLEN KISIM \U0001f447
                $nt = max($t + 1, $moveTime[$nx][$ny] + 1);

                if ($nt < $dist[$nx][$ny]) {
                    $dist[$nx][$ny] = $nt;
                    $pq->insert([$nx, $ny], -$nt);
                }
            }
        }

        return -1;
    }
}
