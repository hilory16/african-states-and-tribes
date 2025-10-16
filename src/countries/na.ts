import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Namibia country data
 * @returns Namibia country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["NA"],
    countryCode: "NA",
  };
}

/**
 * Get Namibia states/tribes data
 * @returns Array of state/tribe data for Namibia
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/NA.json");
    return Object.values(jsonTribesData["NA"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for NA:`, err.message);
    return [];
  }
}

/**
 * Get Namibia country with states/tribes data
 * @returns Namibia country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
