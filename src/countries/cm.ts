import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Cameroon country data
 * @returns Cameroon country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["CM"],
    countryCode: "CM",
  };
}

/**
 * Get Cameroon states/tribes data
 * @returns Array of state/tribe data for Cameroon
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/CM.json");
    return Object.values(jsonTribesData["CM"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for CM:`, err.message);
    return [];
  }
}

/**
 * Get Cameroon country with states/tribes data
 * @returns Cameroon country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
