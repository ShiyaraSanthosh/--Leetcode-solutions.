var romanToInt = function(s) {
    let obj = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    };
    let value = 0

    for(let i=0; i< s.length; i++){
        const curr = obj[s[i]]
        const next = obj[s[i+1]]
        if(curr <next){
            value -= curr
        }else {
            value += curr
        }
    }
    return value
};
console.log(romanToInt("III"));