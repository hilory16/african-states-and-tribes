import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Sierra Leone country data
 * @returns Sierra Leone country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["SL"],
    countryCode: "SL",
  };
}

/**
 * Get Sierra Leone states/tribes data
 * @returns Array of state/tribe data for Sierra Leone
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/SL.json");
    return Object.values(jsonTribesData["SL"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for SL:`, err.message);
    return [];
  }
}

/**
 * Get Sierra Leone country with states/tribes data
 * @returns Sierra Leone country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
