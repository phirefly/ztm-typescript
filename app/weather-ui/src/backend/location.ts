import { z } from "zod";
import type { AxiosStatic } from 'axios';

// https://geocode.maps.co/search?q={address}
// lat, lon, display_name
//

const LocationInfoSchema = z.object({
  lat: z.string(),
  lon: z.string(),
  display_name: z.string(),
})

export type LocationInfo = z.infer<typeof LocationInfoSchema>

// export interface LocationInfo {
//   lat: string;
//   lon: string;
//   display_name: string;
// }

export async function fetchLocationData(
  axios: AxiosStatic, // used so we can supply a fake url for test code
  apiUrl: string,
  locationName: string,
): Promise<LocationInfo> {
  // const GEOCODE_API_URL = `https://geocode.maps.co/search?q=${locationName}`
  const options = {
    method: "GET",
    url: apiUrl,
    params: {
      q: locationName
    }
  };

  const response = await axios.request(options);
  if (response.status === 200) {
    try {
      return LocationInfoSchema.parse(response.data[0])
    } catch (err) {
      throw new Error(`unable to find location: ${err}`);
    }
  } else {
    throw new Error(`Failed to fetch location data`);
  }
}