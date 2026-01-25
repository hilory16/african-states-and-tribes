import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Tanzania country data
 * @returns Tanzania country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["TZ"],
    countryCode: "TZ",
  };
}

/**
 * Get Tanzania states/tribes data
 * @returns Array of state/tribe data for Tanzania
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/TZ.json");
    return Object.values(jsonTribesData["TZ"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for TZ:`, err.message);
    return [];
  }
}

/**
 * Get Tanzania country with states/tribes data
 * @returns Tanzania country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
