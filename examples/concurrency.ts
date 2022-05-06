async function delay(result: string, seconds: number): Promise<string> {
  return new Promise(res => setTimeout(() => res(result), seconds * 1000));
}

async function crash() {
  throw new Error();
}

main();
async function main() {
  console.time('demora');
  // const [res1, res2] = await Promise.all([delay('cool', 2), delay('nice', 3), crash()]);
  const res = await Promise.allSettled([delay('cool', 2), delay('nice', 3), crash()]);
  console.log(res);
  console.timeEnd('demora');
}
