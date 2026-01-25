import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Zambia country data
 * @returns Zambia country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["ZM"],
    countryCode: "ZM",
  };
}

/**
 * Get Zambia states/tribes data
 * @returns Array of state/tribe data for Zambia
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/ZM.json");
    return Object.values(jsonTribesData["ZM"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for ZM:`, err.message);
    return [];
  }
}

/**
 * Get Zambia country with states/tribes data
 * @returns Zambia country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
