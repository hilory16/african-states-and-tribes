import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Equatorial Guinea country data
 * @returns Equatorial Guinea country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["GQ"],
    countryCode: "GQ",
  };
}

/**
 * Get Equatorial Guinea states/tribes data
 * @returns Array of state/tribe data for Equatorial Guinea
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/GQ.json");
    return Object.values(jsonTribesData["GQ"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for GQ:`, err.message);
    return [];
  }
}

/**
 * Get Equatorial Guinea country with states/tribes data
 * @returns Equatorial Guinea country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
