import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Morocco country data
 * @returns Morocco country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["MA"],
    countryCode: "MA",
  };
}

/**
 * Get Morocco states/tribes data
 * @returns Array of state/tribe data for Morocco
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/MA.json");
    return Object.values(jsonTribesData["MA"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for MA:`, err.message);
    return [];
  }
}

/**
 * Get Morocco country with states/tribes data
 * @returns Morocco country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
