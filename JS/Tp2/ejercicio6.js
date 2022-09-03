/* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/

for (let i = 0; i < 30; i++) {
  //  console.log(i+1)
  for (let j = 0; j < i; j++) {
    document.write(i + 1);
  }
  if (i === 0) {
    document.write(i + 1);
  }
  document.write("<br/>");
}
