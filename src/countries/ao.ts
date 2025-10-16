import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Angola country data
 * @returns Angola country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["AO"],
    countryCode: "AO",
  };
}

/**
 * Get Angola states/tribes data
 * @returns Array of state/tribe data for Angola
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/AO.json");
    return Object.values(jsonTribesData["AO"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for AO:`, err.message);
    return [];
  }
}

/**
 * Get Angola country with states/tribes data
 * @returns Angola country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
