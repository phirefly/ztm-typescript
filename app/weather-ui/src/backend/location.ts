import axios from 'axios';

// https://geocode.maps.co/search?q={address}
// lat, lon, display_name
//

export interface LocationInfo {
  lat: string;
  lon: string;
  display_name: string;
}

export async function fetchLocationData(
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

  const response = await axios.request<LocationInfo[]>(options);
  if (response.status === 200) {
    if (response.data.length > 0 ) {
      return response.data[0]
    } else {
      throw new Error(`unable to find location for ${locationName}`);
    }
  } else {
    throw new Error(`Failed to fetch location data`);
  }
}