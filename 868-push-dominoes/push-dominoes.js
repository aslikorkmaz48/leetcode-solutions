/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const n = dominoes.length;
    const forces = new Array(n).fill(0);
    
    // Sağ yönlü kuvvetleri uygula
    let force = 0;
    for (let i = 0; i < n; i++) {
        if (dominoes[i] === 'R') {
            force = n; // büyük bir kuvvet uygula
        } else if (dominoes[i] === 'L') {
            force = 0;
        } else {
            force = Math.max(force - 1, 0);
        }
        forces[i] += force;
    }

    // Sol yönlü kuvvetleri uygula
    force = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (dominoes[i] === 'L') {
            force = n; // büyük kuvvet uygula
        } else if (dominoes[i] === 'R') {
            force = 0;
        } else {
            force = Math.max(force - 1, 0);
        }
        forces[i] -= force; // soldan gelen kuvveti çıkar
    }

    // Son durumu oluştur
    let result = '';
    for (let f of forces) {
        if (f > 0) result += 'R';
        else if (f < 0) result += 'L';
        else result += '.';
    }

    return result;
};
