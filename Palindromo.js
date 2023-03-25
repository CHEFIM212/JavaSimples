
function Palindromo(str) {
    
    str = str.replace(/\s/g, '').toLowerCase();
    const strInvertida = str.split('').reverse().join('');
    return str === strInvertida;
}

  console.log(ehPalindromo("arara"));