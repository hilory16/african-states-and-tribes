import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Eritrea country data
 * @returns Eritrea country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["ER"],
    countryCode: "ER",
  };
}

/**
 * Get Eritrea states/tribes data
 * @returns Array of state/tribe data for Eritrea
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/ER.json");
    return Object.values(jsonTribesData["ER"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for ER:`, err.message);
    return [];
  }
}

/**
 * Get Eritrea country with states/tribes data
 * @returns Eritrea country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
