import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Lesotho country data
 * @returns Lesotho country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["LS"],
    countryCode: "LS",
  };
}

/**
 * Get Lesotho states/tribes data
 * @returns Array of state/tribe data for Lesotho
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/LS.json");
    return Object.values(jsonTribesData["LS"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for LS:`, err.message);
    return [];
  }
}

/**
 * Get Lesotho country with states/tribes data
 * @returns Lesotho country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
