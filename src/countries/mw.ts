import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Malawi country data
 * @returns Malawi country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["MW"],
    countryCode: "MW",
  };
}

/**
 * Get Malawi states/tribes data
 * @returns Array of state/tribe data for Malawi
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/MW.json");
    return Object.values(jsonTribesData["MW"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for MW:`, err.message);
    return [];
  }
}

/**
 * Get Malawi country with states/tribes data
 * @returns Malawi country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
