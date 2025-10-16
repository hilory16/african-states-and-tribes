import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Somalia country data
 * @returns Somalia country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["SO"],
    countryCode: "SO",
  };
}

/**
 * Get Somalia states/tribes data
 * @returns Array of state/tribe data for Somalia
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/SO.json");
    return Object.values(jsonTribesData["SO"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for SO:`, err.message);
    return [];
  }
}

/**
 * Get Somalia country with states/tribes data
 * @returns Somalia country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
