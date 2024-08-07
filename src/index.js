module.exports = function reverse (n) {
    let reverseString = String(n).split('').reverse()
    if(reverseString[reverseString.length-1]==='-'){
         reverseString.pop()
        
         return Number(reverseString.join(''))
    }else{
        return Number(reverseString.join(''))
    }
}
