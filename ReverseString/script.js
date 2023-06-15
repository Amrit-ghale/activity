function reverse() {
    var input = document.getElementById('inputString').ariaValueMax;
    var reversed = input.split('').reverse().join('');
    document.getElementById('output').textContent = revresed;
}