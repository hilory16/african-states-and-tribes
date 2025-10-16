import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Sudan country data
 * @returns Sudan country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["SD"],
    countryCode: "SD",
  };
}

/**
 * Get Sudan states/tribes data
 * @returns Array of state/tribe data for Sudan
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/SD.json");
    return Object.values(jsonTribesData["SD"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for SD:`, err.message);
    return [];
  }
}

/**
 * Get Sudan country with states/tribes data
 * @returns Sudan country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
