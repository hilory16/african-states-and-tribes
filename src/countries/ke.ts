import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Kenya country data
 * @returns Kenya country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["KE"],
    countryCode: "KE",
  };
}

/**
 * Get Kenya states/tribes data
 * @returns Array of state/tribe data for Kenya
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/KE.json");
    return Object.values(jsonTribesData["KE"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for KE:`, err.message);
    return [];
  }
}

/**
 * Get Kenya country with states/tribes data
 * @returns Kenya country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
