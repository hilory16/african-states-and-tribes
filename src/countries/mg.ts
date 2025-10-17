import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Madagascar country data
 * @returns Madagascar country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["MG"],
    countryCode: "MG",
  };
}

/**
 * Get Madagascar states/tribes data
 * @returns Array of state/tribe data for Madagascar
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/MG.json");
    return Object.values(jsonTribesData["MG"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for MG:`, err.message);
    return [];
  }
}

/**
 * Get Madagascar country with states/tribes data
 * @returns Madagascar country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
