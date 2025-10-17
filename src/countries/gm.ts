import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Gambia country data
 * @returns Gambia country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["GM"],
    countryCode: "GM",
  };
}

/**
 * Get Gambia states/tribes data
 * @returns Array of state/tribe data for Gambia
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/GM.json");
    return Object.values(jsonTribesData["GM"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for GM:`, err.message);
    return [];
  }
}

/**
 * Get Gambia country with states/tribes data
 * @returns Gambia country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
