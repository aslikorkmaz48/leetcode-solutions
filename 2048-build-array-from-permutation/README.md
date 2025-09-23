# [Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation)  


## Dil
Java

## Problem
Verilen bir tamsayı dizisi `nums` ile yeni bir dizi `ans` oluşturmanız isteniyor.  
Kurala göre her eleman `ans[i] = nums[nums[i]]` olacak şekilde diziyi yeniden düzenlemelisiniz.  
Bu problem, diziler ve indeks manipülasyonu konularında temel bir alıştırma sağlar.

### Örnekler
**Örnek 1:**  
Input: `[0,2,1,5,3,4]`  
Output: `[0,1,2,4,5,3]`  
Açıklama: Her eleman, `ans[i] = nums[nums[i]]` kuralına göre hesaplanmıştır.

**Örnek 2:**  
Input: `[5,0,1,2,3,4]`  
Output: `[4,5,0,1,2,3]`  

## Kısıtlar
- 1 <= nums.length <= 1000  
- 0 <= nums[i] < nums.length  
- nums dizisi benzersiz elemanlar içerir

## Kullanım
Çözüm metodunu kullanarak verilen diziyi işleyebilir ve yeni diziyi alabilirsiniz.  
Örnek:  

Input: `[0,2,1,5,3,4]` → Output: `[0,1,2,4,5,3]`

---

🙏 Eğer bu proje işine yaradıysa **yıldız bırakmayı unutma!**  
Katkı ve geri bildirimler için açığım. ⭐
