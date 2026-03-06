function fac(n1) {
    var fat = 1
    var c = n1
    while (c > 1) {
        fat *= c
        c -= 1
    }
    return fat
}

console.log(fac(5))