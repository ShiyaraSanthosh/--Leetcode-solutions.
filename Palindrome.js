let x = -121;
var Palindrome = function(x){
    let str = x.toString();
    let ispalindrome = "false";
    for(let i=0; i<str.length; i++){
        if(str[i]===str[str.length-1-i]){
            ispalindrome = "True";

        }else{
            return false;
        }
    }
    return ispalindrome;

}
console.log(Palindrome(6121));