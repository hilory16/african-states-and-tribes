import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Liberia country data
 * @returns Liberia country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["LR"],
    countryCode: "LR",
  };
}

/**
 * Get Liberia states/tribes data
 * @returns Array of state/tribe data for Liberia
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/LR.json");
    return Object.values(jsonTribesData["LR"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for LR:`, err.message);
    return [];
  }
}

/**
 * Get Liberia country with states/tribes data
 * @returns Liberia country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
