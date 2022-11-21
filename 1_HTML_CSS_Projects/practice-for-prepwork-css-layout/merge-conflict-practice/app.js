// your code here
function vowelCipher(string){
    let cipher = ''
    let vowels = 'aeiou'
    for(let i=0; i<string.length; i++){
        let char = string[i]
        if(vowels.includes(char)){
            let idx = vowels.indexOf(char)
            if(char === 'u'){
                cipher += vowels[0]
            }else{
                cipher += vowels[idx+1]
            }
        }else{
            cipher += string[i]
        }
    }
    return cipher
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"