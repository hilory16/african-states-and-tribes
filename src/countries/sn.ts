import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Senegal country data
 * @returns Senegal country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["SN"],
    countryCode: "SN",
  };
}

/**
 * Get Senegal states/tribes data
 * @returns Array of state/tribe data for Senegal
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/SN.json");
    return Object.values(jsonTribesData["SN"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for SN:`, err.message);
    return [];
  }
}

/**
 * Get Senegal country with states/tribes data
 * @returns Senegal country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
