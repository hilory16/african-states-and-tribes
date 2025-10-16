import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Djibouti country data
 * @returns Djibouti country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["DJ"],
    countryCode: "DJ",
  };
}

/**
 * Get Djibouti states/tribes data
 * @returns Array of state/tribe data for Djibouti
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/DJ.json");
    return Object.values(jsonTribesData["DJ"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for DJ:`, err.message);
    return [];
  }
}

/**
 * Get Djibouti country with states/tribes data
 * @returns Djibouti country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
