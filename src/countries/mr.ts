import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Mauritania country data
 * @returns Mauritania country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["MR"],
    countryCode: "MR",
  };
}

/**
 * Get Mauritania states/tribes data
 * @returns Array of state/tribe data for Mauritania
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/MR.json");
    return Object.values(jsonTribesData["MR"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for MR:`, err.message);
    return [];
  }
}

/**
 * Get Mauritania country with states/tribes data
 * @returns Mauritania country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
