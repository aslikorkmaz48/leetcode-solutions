class Solution:
    def smallestEquivalentString(self, s1: str, s2: str, baseStr: str) -> str:
        # Her karakterin kendi ebeveyni (parent) başlangıçta kendisidir
        parent = {chr(i): chr(i) for i in range(ord('a'), ord('z') + 1)}
        
        # Union-Find helper fonksiyonları
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])  # Path compression
            return parent[x]
        
        def union(x, y):
            px, py = find(x), find(y)
            if px == py:
                return
            # Küçük harf parent olarak seçilir
            if px < py:
                parent[py] = px
            else:
                parent[px] = py
        
        # Eşdeğer karakterleri birleştir
        for a, b in zip(s1, s2):
            union(a, b)
        
        # baseStr'i en küçük eşdeğer karakterleri ile oluştur
        res = [find(c) for c in baseStr]
        return ''.join(res)
