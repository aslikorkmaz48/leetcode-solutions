/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    // Zamanları karşılaştırmak için string olarak kalabilir çünkü "HH:MM" formatı sözlük sıralaması ile uyumludur
    return !(event1[1] < event2[0] || event2[1] < event1[0]);
};
