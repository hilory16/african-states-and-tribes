import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Libya country data
 * @returns Libya country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["LY"],
    countryCode: "LY",
  };
}

/**
 * Get Libya states/tribes data
 * @returns Array of state/tribe data for Libya
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/LY.json");
    return Object.values(jsonTribesData["LY"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for LY:`, err.message);
    return [];
  }
}

/**
 * Get Libya country with states/tribes data
 * @returns Libya country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
