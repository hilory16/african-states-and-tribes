import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Uganda country data
 * @returns Uganda country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["UG"],
    countryCode: "UG",
  };
}

/**
 * Get Uganda states/tribes data
 * @returns Array of state/tribe data for Uganda
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/UG.json");
    return Object.values(jsonTribesData["UG"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for UG:`, err.message);
    return [];
  }
}

/**
 * Get Uganda country with states/tribes data
 * @returns Uganda country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
