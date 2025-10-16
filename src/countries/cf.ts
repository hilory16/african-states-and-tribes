import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Central African Republic country data
 * @returns Central African Republic country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["CF"],
    countryCode: "CF",
  };
}

/**
 * Get Central African Republic states/tribes data
 * @returns Array of state/tribe data for Central African Republic
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/CF.json");
    return Object.values(jsonTribesData["CF"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for CF:`, err.message);
    return [];
  }
}

/**
 * Get Central African Republic country with states/tribes data
 * @returns Central African Republic country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
