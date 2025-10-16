import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Guinea country data
 * @returns Guinea country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["GN"],
    countryCode: "GN",
  };
}

/**
 * Get Guinea states/tribes data
 * @returns Array of state/tribe data for Guinea
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/GN.json");
    return Object.values(jsonTribesData["GN"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for GN:`, err.message);
    return [];
  }
}

/**
 * Get Guinea country with states/tribes data
 * @returns Guinea country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
