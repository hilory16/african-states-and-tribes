import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Togo country data
 * @returns Togo country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["TG"],
    countryCode: "TG",
  };
}

/**
 * Get Togo states/tribes data
 * @returns Array of state/tribe data for Togo
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/TG.json");
    return Object.values(jsonTribesData["TG"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for TG:`, err.message);
    return [];
  }
}

/**
 * Get Togo country with states/tribes data
 * @returns Togo country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
