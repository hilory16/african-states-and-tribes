import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Mozambique country data
 * @returns Mozambique country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["MZ"],
    countryCode: "MZ",
  };
}

/**
 * Get Mozambique states/tribes data
 * @returns Array of state/tribe data for Mozambique
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/MZ.json");
    return Object.values(jsonTribesData["MZ"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for MZ:`, err.message);
    return [];
  }
}

/**
 * Get Mozambique country with states/tribes data
 * @returns Mozambique country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
