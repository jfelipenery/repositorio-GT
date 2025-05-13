function media(num1, num2, num3) {
    let media = (num1 + num2 + num3) /3;
    if (media >=7) {
        return "aluno aprovado com média: " + media;
        
    }
    else{
        return "Aluno retardado com média" + media;
    }

   
}
console.log(media(7,7,8));


