import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Zimbabwe country data
 * @returns Zimbabwe country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["ZW"],
    countryCode: "ZW",
  };
}

/**
 * Get Zimbabwe states/tribes data
 * @returns Array of state/tribe data for Zimbabwe
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/ZW.json");
    return Object.values(jsonTribesData["ZW"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for ZW:`, err.message);
    return [];
  }
}

/**
 * Get Zimbabwe country with states/tribes data
 * @returns Zimbabwe country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
