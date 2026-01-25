import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Cote D'Ivoire country data
 * @returns Cote D'Ivoire country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["CI"],
    countryCode: "CI",
  };
}

/**
 * Get Cote D'Ivoire states/tribes data
 * @returns Array of state/tribe data for Cote D'Ivoire
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/CI.json");
    return Object.values(jsonTribesData["CI"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for CI:`, err.message);
    return [];
  }
}

/**
 * Get Cote D'Ivoire country with states/tribes data
 * @returns Cote D'Ivoire country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
