using System;
using System.Text;
using System.Collections.Generic;

public class Solution {
    public string FractionToDecimal(int numerator, int denominator) {
        if (numerator == 0) return "0";

        StringBuilder result = new StringBuilder();

        // Negatif kontrolü
        if ((numerator < 0) ^ (denominator < 0)) {
            result.Append("-");
        }

        // long'a çevir, overflow engelle
        long num = Math.Abs((long)numerator);
        long den = Math.Abs((long)denominator);

        // Tam kısım
        result.Append(num / den);
        long remainder = num % den;
        if (remainder == 0) return result.ToString();

        result.Append(".");

        // Kalanları sakla (tekrar eden kısmı bulmak için)
        Dictionary<long, int> map = new Dictionary<long, int>();
        while (remainder != 0) {
            if (map.ContainsKey(remainder)) {
                result.Insert(map[remainder], "(");
                result.Append(")");
                break;
            }
            map[remainder] = result.Length;

            remainder *= 10;
            result.Append(remainder / den);
            remainder %= den;
        }

        return result.ToString();
    }
}
