import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Botswana country data
 * @returns Botswana country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["BW"],
    countryCode: "BW",
  };
}

/**
 * Get Botswana states/tribes data
 * @returns Array of state/tribe data for Botswana
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/BW.json");
    return Object.values(jsonTribesData["BW"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for BW:`, err.message);
    return [];
  }
}

/**
 * Get Botswana country with states/tribes data
 * @returns Botswana country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
