function encryptMe(word){
    word = word.toUpperCase()

    let hashed = ""

    for(let i=0; i<word.length; i++){
        const wordNumber = word.charCodeAt(i) + 13
        if(wordNumber <= 90){
            hashed+= String.fromCharCode(wordNumber)
        }else{
            hashed += String.fromCharCode(wordNumber - 26)
        }
    }
    return hashed
}

function decryptMe(word){
    word = word.toUpperCase()

    let hashed = ""

    for(let i=0; i<word.length; i++){
        const wordNumber = word.charCodeAt(i) - 13
        if(wordNumber >= 65 ){
            hashed+= String.fromCharCode(wordNumber)
        }else{
            hashed += String.fromCharCode(wordNumber + 26)
        }
    }
    return hashed
}

console.log(encryptMe("MATH"))
console.log(decryptMe("ZNGU"))
