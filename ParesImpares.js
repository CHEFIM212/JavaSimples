
let n = [1,2,3,12,153,151,5,515,15,54]
let par = 0
let impar = 0

for(var i = 0; i < 10; i++){

    var resto = n[i] % 2;

    if (resto == 0) {
        par = par + 1
    } else {
        impar = impar + 1
    }
}
 
console.log("São " + par + " Numeros pares e " + impar + " numeros ímpares")