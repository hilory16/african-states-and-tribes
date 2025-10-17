import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Algeria country data
 * @returns Algeria country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["DZ"],
    countryCode: "DZ",
  };
}

/**
 * Get Algeria states/tribes data
 * @returns Array of state/tribe data for Algeria
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/DZ.json");
    return Object.values(jsonTribesData["DZ"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for DZ:`, err.message);
    return [];
  }
}

/**
 * Get Algeria country with states/tribes data
 * @returns Algeria country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
