/**
 * Verilen bir dize s için en uzun palindromik alt diziyi döndürür.
 * Yöntem: her karakteri merkez kabul edip iki yönde genişletme.
 * Zaman: O(n^2), Bellek: O(1)
 *
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (!s || s.length < 1) return "";

  let start = 0;
  let end = 0;

  // i'yi merkez kabul edip iki yönlü genişletme yapan yardımcı fonksiyon
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // while bittiğinde palindrome aralığı (left+1 .. right-1)
    return right - left - 1; // uzunluk
  }

  for (let i = 0; i < s.length; i++) {
    // tek uzunluklu palindrom (merkez tek karakter)
    const len1 = expandAroundCenter(i, i);
    // çift uzunluklu palindrom (merkez iki karakterin arası)
    const len2 = expandAroundCenter(i, i + 1);
    const len = Math.max(len1, len2);

    if (len > end - start + 1) {
      // yeni en uzun palindromun başlangıç ve bitiş indekslerini hesapla
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

// Test örnekleri
console.log(longestPalindrome("babad")); // "bab" veya "aba"
console.log(longestPalindrome("cbbd"));  // "bb"
console.log(longestPalindrome("a"));     // "a"
console.log(longestPalindrome("ac"));    // "a" veya "c"
