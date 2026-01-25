import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Nigeria country data
 * @returns Nigeria country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["NG"],
    countryCode: "NG",
  };
}

/**
 * Get Nigeria states/tribes data
 * @returns Array of state/tribe data for Nigeria
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/NG.json");
    return Object.values(jsonTribesData["NG"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for NG:`, err.message);
    return [];
  }
}

/**
 * Get Nigeria country with states/tribes data
 * @returns Nigeria country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
