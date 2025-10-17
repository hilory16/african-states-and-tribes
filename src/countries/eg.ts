import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Egypt country data
 * @returns Egypt country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["EG"],
    countryCode: "EG",
  };
}

/**
 * Get Egypt states/tribes data
 * @returns Array of state/tribe data for Egypt
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/EG.json");
    return Object.values(jsonTribesData["EG"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for EG:`, err.message);
    return [];
  }
}

/**
 * Get Egypt country with states/tribes data
 * @returns Egypt country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
