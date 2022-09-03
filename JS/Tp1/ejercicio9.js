// Escribe un programa que pida una frase y escriba las vocales que aparecen

let phrase = prompt("Escriba una frase");
console.log(phrase.toLowerCase());
phrase = phrase.toLowerCase();
console.log(phrase.length);

for (let vocal = 0; vocal < phrase.length; vocal++) {
  if (
    phrase.charAt(vocal) == "a" ||
    phrase.charAt(vocal) == "e" ||
    phrase.charAt(vocal) == "i" ||
    phrase.charAt(vocal) == "o" ||
    phrase.charAt(vocal) == "u"
  ) {
    document.write(phrase.charAt(vocal));
  }
}
