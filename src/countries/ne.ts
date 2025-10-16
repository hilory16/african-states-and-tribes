import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Niger country data
 * @returns Niger country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["NE"],
    countryCode: "NE",
  };
}

/**
 * Get Niger states/tribes data
 * @returns Array of state/tribe data for Niger
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/NE.json");
    return Object.values(jsonTribesData["NE"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for NE:`, err.message);
    return [];
  }
}

/**
 * Get Niger country with states/tribes data
 * @returns Niger country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
