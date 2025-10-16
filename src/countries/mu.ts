import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Mauritius country data
 * @returns Mauritius country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["MU"],
    countryCode: "MU",
  };
}

/**
 * Get Mauritius states/tribes data
 * @returns Array of state/tribe data for Mauritius
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/MU.json");
    return Object.values(jsonTribesData["MU"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for MU:`, err.message);
    return [];
  }
}

/**
 * Get Mauritius country with states/tribes data
 * @returns Mauritius country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
