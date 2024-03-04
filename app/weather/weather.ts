const GEOCODE_API_URL = 'https://geocode.maps.co/search';

async function main(): Promise<number> {
  // > pnpm run weather LOCATION
  console.log(process.argv)

  // handle correct amount of args
  if (process.argv.length !== 3) {
    console.error("Format needed: pnpm weather LOCATION")
    return 1; //returning 1 means an error occurred. 0 means success.
  }

  const location = argv[2];
  // 1. Use location api to get lat/long value for this location
  // 2. Fetch weather data
  // 3. Display weather data

  return await Promise.resolve(0);

}

main().catch((err) => console.error(err));