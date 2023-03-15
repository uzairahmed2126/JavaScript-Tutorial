for (let a = 1; a <= 10; a++) {
  console.log('Number : ', a);
  if (a == 5) {
    break;
  }
}

for (let b = 1; b <= 10; b++) {
  if (b == 5) {
    document.write(b + 'Hello World<br>');
    continue;
  }
  document.write(b +'Hello<br>');
}
