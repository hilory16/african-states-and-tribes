import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Benin country data
 * @returns Benin country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["BJ"],
    countryCode: "BJ",
  };
}

/**
 * Get Benin states/tribes data
 * @returns Array of state/tribe data for Benin
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/BJ.json");
    return Object.values(jsonTribesData["BJ"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for BJ:`, err.message);
    return [];
  }
}

/**
 * Get Benin country with states/tribes data
 * @returns Benin country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
