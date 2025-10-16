import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Burkina Faso country data
 * @returns Burkina Faso country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["BF"],
    countryCode: "BF",
  };
}

/**
 * Get Burkina Faso states/tribes data
 * @returns Array of state/tribe data for Burkina Faso
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/BF.json");
    return Object.values(jsonTribesData["BF"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for BF:`, err.message);
    return [];
  }
}

/**
 * Get Burkina Faso country with states/tribes data
 * @returns Burkina Faso country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
