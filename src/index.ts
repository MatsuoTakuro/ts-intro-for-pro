function fizzbuzz(n: number): void {
  if (n % 3 === 0 && n % 5 === 0) console.log('fizzbuzz');
  else if (n % 3 === 0) console.log('fizz');
  else if (n % 5 === 0) console.log('buzz');
  else console.log(n.toString());
}

for (let i = 1; i <= 100; i++) {
  fizzbuzz(i);
}

function fizzbuzzInOneLine(n: number): void {
  let result = '';

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) result += 'fizzbuzz';
    else if (i % 3 === 0) result += 'fizz';
    else if (i % 5 === 0) result += 'buzz';
    else result += i.toString();
    result += ' ';
  }

  console.log(result);
}

fizzbuzzInOneLine(100);
