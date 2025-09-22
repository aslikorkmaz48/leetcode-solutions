import java.util.*;

class Solution {
    public List<String> getLongestSubsequence(String[] words, int[] groups) {
        List<String> res = new ArrayList<>();
        int n = words.length;
        
        // Başlangıç olarak ilk kelimeyi ekle
        res.add(words[0]);
        int lastGroup = groups[0];

        for (int i = 1; i < n; i++) {
            if (groups[i] != lastGroup) {
                res.add(words[i]);
                lastGroup = groups[i];
            }
        }
        return res;
    }
}
