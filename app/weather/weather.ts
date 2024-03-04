async function main(): Promise<number> {
  // > pnpm run weather LOCATION
  console.log(process.argv)
  return await Promise.resolve(0);

}

main().catch((err) => console.error(err));