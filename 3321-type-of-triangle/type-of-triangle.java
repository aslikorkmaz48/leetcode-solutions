class Solution {
    public String triangleType(int[] nums) {
        if (nums.length != 3) {
            return "none"; // Invalid input
        }

        int a = nums[0];
        int b = nums[1];
        int c = nums[2];

        // Triangle inequality check
        if (a + b <= c || a + c <= b || b + c <= a) {
            return "none";
        }

        // Equilateral
        if (a == b && b == c) {
            return "equilateral";
        }

        // Isosceles
        if (a == b || a == c || b == c) {
            return "isosceles";
        }

        // Scalene
        return "scalene";
    }
}
