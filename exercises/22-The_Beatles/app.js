const sing =() => {
    let str = "";

    for (let i = 0; i < 11; i++) {
       if (i == 4){
        return str + "there will be an answer, "
       } else if (i == 10) {
        return str + "whisper words of wisdom, let it be"
       } else {
        str + "let it be"
       }
        
    }
}

//Your code above ^^^

console.log(sing());