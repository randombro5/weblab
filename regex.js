var regexxx = /^([1-4]{1})([a-z]{2})([0-9]{2})([a-z]{2})([0-9]{3})$/i
var regexx = /^(0[1-9]|[1-2][0-9]|3[0-1])[\/](0[1-9]|1[0-2])[\/]([0-9]{4})$/

var eregex = /^[a-zA-Z0-9\.]+@[a-z]+\.[^\s@]+$/


console.log(regexx.test("20/12/2022"))
console.log(regexxx.test("1nt20is1399"))
console.log(eregex.test("1nt20is139.saishwar@nmit.ac.in.in"))
