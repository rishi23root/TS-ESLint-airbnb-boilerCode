function log(message: string): number {
  // eslint-disable-next-line no-console
  console.log(message);
  let a = 10;
  a = 20;

  // eslint-disable-next-line no-console
  console.log(a);
  // eslint-disable-next-line linebreak-style
  return a;
}

log('Hello World');
