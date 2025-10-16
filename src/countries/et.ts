import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Ethiopia country data
 * @returns Ethiopia country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["ET"],
    countryCode: "ET",
  };
}

/**
 * Get Ethiopia states/tribes data
 * @returns Array of state/tribe data for Ethiopia
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/ET.json");
    return Object.values(jsonTribesData["ET"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for ET:`, err.message);
    return [];
  }
}

/**
 * Get Ethiopia country with states/tribes data
 * @returns Ethiopia country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
