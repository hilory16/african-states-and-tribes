import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Eswatini country data
 * @returns Eswatini country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["SZ"],
    countryCode: "SZ",
  };
}

/**
 * Get Eswatini states/tribes data
 * @returns Array of state/tribe data for Eswatini
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/SZ.json");
    return Object.values(jsonTribesData["SZ"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for SZ:`, err.message);
    return [];
  }
}

/**
 * Get Eswatini country with states/tribes data
 * @returns Eswatini country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
