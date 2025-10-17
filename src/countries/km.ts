import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Comoros country data
 * @returns Comoros country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["KM"],
    countryCode: "KM",
  };
}

/**
 * Get Comoros states/tribes data
 * @returns Array of state/tribe data for Comoros
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/KM.json");
    return Object.values(jsonTribesData["KM"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for KM:`, err.message);
    return [];
  }
}

/**
 * Get Comoros country with states/tribes data
 * @returns Comoros country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
