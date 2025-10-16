import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Rwanda country data
 * @returns Rwanda country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["RW"],
    countryCode: "RW",
  };
}

/**
 * Get Rwanda states/tribes data
 * @returns Array of state/tribe data for Rwanda
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/RW.json");
    return Object.values(jsonTribesData["RW"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for RW:`, err.message);
    return [];
  }
}

/**
 * Get Rwanda country with states/tribes data
 * @returns Rwanda country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
