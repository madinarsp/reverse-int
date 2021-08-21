module.exports = function reverse (n) {
    let rem, str = '', tempNum;
    tempNum = n < 0 ? Math.abs(n) : n;
    while(tempNum) {
        rem = tempNum % 10;
        str += rem;
        tempNum = Math.trunc(tempNum / 10);
    }
    return +str;
}
