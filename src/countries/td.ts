import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Chad country data
 * @returns Chad country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["TD"],
    countryCode: "TD",
  };
}

/**
 * Get Chad states/tribes data
 * @returns Array of state/tribe data for Chad
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/TD.json");
    return Object.values(jsonTribesData["TD"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for TD:`, err.message);
    return [];
  }
}

/**
 * Get Chad country with states/tribes data
 * @returns Chad country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
