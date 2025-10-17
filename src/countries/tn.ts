import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Tunisia country data
 * @returns Tunisia country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["TN"],
    countryCode: "TN",
  };
}

/**
 * Get Tunisia states/tribes data
 * @returns Array of state/tribe data for Tunisia
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/TN.json");
    return Object.values(jsonTribesData["TN"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for TN:`, err.message);
    return [];
  }
}

/**
 * Get Tunisia country with states/tribes data
 * @returns Tunisia country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
