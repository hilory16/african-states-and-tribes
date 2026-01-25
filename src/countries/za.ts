import AfricanCountries from "../data/africa/countries.json";

/**
 * Get South Africa country data
 * @returns South Africa country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["ZA"],
    countryCode: "ZA",
  };
}

/**
 * Get South Africa states/tribes data
 * @returns Array of state/tribe data for South Africa
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/ZA.json");
    return Object.values(jsonTribesData["ZA"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for ZA:`, err.message);
    return [];
  }
}

/**
 * Get South Africa country with states/tribes data
 * @returns South Africa country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
