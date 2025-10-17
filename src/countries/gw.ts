import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Guinea-Bissau country data
 * @returns Guinea-Bissau country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["GW"],
    countryCode: "GW",
  };
}

/**
 * Get Guinea-Bissau states/tribes data
 * @returns Array of state/tribe data for Guinea-Bissau
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/GW.json");
    return Object.values(jsonTribesData["GW"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for GW:`, err.message);
    return [];
  }
}

/**
 * Get Guinea-Bissau country with states/tribes data
 * @returns Guinea-Bissau country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
