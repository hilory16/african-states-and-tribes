import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Ghana country data
 * @returns Ghana country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["GH"],
    countryCode: "GH",
  };
}

/**
 * Get Ghana states/tribes data
 * @returns Array of state/tribe data for Ghana
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/GH.json");
    return Object.values(jsonTribesData["GH"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for GH:`, err.message);
    return [];
  }
}

/**
 * Get Ghana country with states/tribes data
 * @returns Ghana country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
