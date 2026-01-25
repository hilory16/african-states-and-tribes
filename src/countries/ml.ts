import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Mali country data
 * @returns Mali country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["ML"],
    countryCode: "ML",
  };
}

/**
 * Get Mali states/tribes data
 * @returns Array of state/tribe data for Mali
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/ML.json");
    return Object.values(jsonTribesData["ML"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for ML:`, err.message);
    return [];
  }
}

/**
 * Get Mali country with states/tribes data
 * @returns Mali country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
