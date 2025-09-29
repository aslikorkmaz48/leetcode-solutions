/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // Sonucu tutacak sahte baş düğüm
        ListNode dummyHead = new ListNode(0);
        ListNode current = dummyHead;
        int carry = 0;
        
        // Her iki listeyi dolaş
        while (l1 != null || l2 != null) {
            int x = (l1 != null) ? l1.val : 0;
            int y = (l2 != null) ? l2.val : 0;
            
            int sum = x + y + carry;
            carry = sum / 10; // Elde varsa sonraki basamağa aktar
            current.next = new ListNode(sum % 10); // Yeni düğüm oluştur
            current = current.next;
            
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }
        
        // Son elde varsa ekle
        if (carry > 0) {
            current.next = new ListNode(carry);
        }
        
        return dummyHead.next; // Gerçek sonucu döndür
    }
}
