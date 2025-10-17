import AfricanCountries from "../data/africa/countries.json";

/**
 * Get South Sudan country data
 * @returns South Sudan country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["SS"],
    countryCode: "SS",
  };
}

/**
 * Get South Sudan states/tribes data
 * @returns Array of state/tribe data for South Sudan
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/SS.json");
    return Object.values(jsonTribesData["SS"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for SS:`, err.message);
    return [];
  }
}

/**
 * Get South Sudan country with states/tribes data
 * @returns South Sudan country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
