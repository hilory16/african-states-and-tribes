import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Gabon country data
 * @returns Gabon country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["GA"],
    countryCode: "GA",
  };
}

/**
 * Get Gabon states/tribes data
 * @returns Array of state/tribe data for Gabon
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/GA.json");
    return Object.values(jsonTribesData["GA"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for GA:`, err.message);
    return [];
  }
}

/**
 * Get Gabon country with states/tribes data
 * @returns Gabon country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
